/**
 * ไฟล์: InventoryLogic.gs (ชุดสมบูรณ์ - ดึง ASG1&2 / ตัด Inventory_lots)
 */

const ADMIN_PIN = "1234";
const SPREADSHEET_ID = "1k9jbOwPlZSiu8O6ohOcEzmMxZkC3nXCLhlFBa-T6dDo";

// 1. ดึงรายชื่อผู้ใช้จากแผ่นงาน UserList
function getUserList() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName("UserList");
  if (!sheet) return ["กรุณาสร้างแผ่นงาน UserList"];
  const data = sheet.getDataRange().getValues();
  if (data.length <= 1) return ["ไม่มีรายชื่อในระบบ"];
  data.shift();
  return data.map(row => row[0]).filter(name => name && name.toString().trim() !== "");
}

// 2. ดึงข้อมูลเพื่อแสดงผลในหน้า STOCK (จากชีต ASG1&2 เท่านั้นเพื่อความเสถียรของสูตร)
function getInventoryData() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName("ASG1&2");
  if (!sheet) return [];
  const data = sheet.getDataRange().getValues();
  if (data.length <= 1) return [];
  data.shift();

  const today = new Date();
  const alertThreshold = new Date();
  alertThreshold.setDate(today.getDate() + 180);

  return data.map((row) => {
    const name = row[0] ? String(row[0]).trim() : '';
    const grade = row[1] ? String(row[1]).trim() : '';
    const casNo = row[2] ? String(row[2]).trim() : '';
    const lotNo = row[3] ? String(row[3]).trim() : '';
    const qty   = row[4] || 0;
    const unit  = row[5] ? String(row[5]).trim() : '';
    const expiryDateRaw = row[8];
    const coaLink  = row[9]  || '';
    const location = row[11] || '-';

    if (!name) return null;

    // *** ประกาศ expiryLabel และ status ก่อน if block เสมอ ***
    let status = "Normal";
    let expiryLabel = "-";

    if (expiryDateRaw) {
      const expiryDate = new Date(expiryDateRaw);
      if (!isNaN(expiryDate.getTime())) {
        expiryLabel = Utilities.formatDate(expiryDate, "GMT+7", "dd/MM/yyyy");
        if (expiryDate < today) status = "Expired";
        else if (expiryDate <= alertThreshold) status = "Expiring";
      }
    }

    return {
      name: grade ? name + " (" + grade + ")" : name,
      pureName: name,   // *** สำคัญ: ห้ามลืมบรรทัดนี้ ***
      cas: casNo,
      lot: lotNo,
      quantity: parseFloat(qty) || 0,
      unit: unit,
      expiry: expiryLabel,
      status: status,
      coa: coaLink,
      location: location
    };
  }).filter(item => item !== null);
}



// 4. บันทึกประวัติและตัดสต็อก (หักที่ชีต Inventory_lots เท่านั้น)
function processTransaction(payload) {
  const { actionType, rowIndex, quantity, userName, pin, notes, chemicalName, lotNo } = payload;
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  
  if (actionType === "CHECK_IN" && pin !== ADMIN_PIN) throw new Error("รหัส Admin PIN ไม่ถูกต้อง");

  const lotSheet = ss.getSheetByName("Inventory_lots");
  const currentQty = lotSheet.getRange(rowIndex, 5).getValue(); 
  const qtyChange = actionType === "CHECK_OUT" ? -quantity : quantity;
  const newQty = currentQty + qtyChange;

  if (newQty < 0 && actionType === "CHECK_OUT") throw new Error("จำนวนคงเหลือใน Lot นี้ไม่เพียงพอ");
  lotSheet.getRange(rowIndex, 5).setValue(newQty);

  // บันทึก Transactions (แยกคอลัมน์)
  const transSheet = ss.getSheetByName("Transactions") || ss.insertSheet("Transactions");
  if (transSheet.getLastRow() === 0) {
    transSheet.appendRow(['ID', 'Time', 'User', 'Action', 'Chemical', 'Lot', 'Qty', 'Note']);
  }
  transSheet.appendRow(["TX-" + Date.now(), new Date(), userName, actionType, chemicalName, lotNo, qtyChange, notes]);

  // บันทึก Tracking
  if (actionType === "CHECK_OUT") {
    const trackSheet = ss.getSheetByName("Active_Tracking") || ss.insertSheet("Active_Tracking");
    if (trackSheet.getLastRow() === 0) {
      trackSheet.appendRow(['ID', 'Chemical', 'Lot', 'User', 'Qty', 'Date', 'Status']);
    }
    trackSheet.appendRow(["TR-" + Date.now(), chemicalName, lotNo, userName, quantity, new Date(), "IN_USE"]);
  }
  return { success: true };
}

// 5. ดึงข้อมูลการติดตาม
function getActiveTracking() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName("Active_Tracking");
  if (!sheet) return [];
  const data = sheet.getDataRange().getValues();
  data.shift();
  return data.filter(row => row[6] === "IN_USE").map(row => ({
    id: row[0], chemicalName: row[1], lot: row[2], user: row[3], qty: row[4],
    date: Utilities.formatDate(new Date(row[5]), "GMT+7", "dd/MM/yyyy")
  }));
}

// 6. แจ้งใช้หมดแล้ว
function markAsDepleted(trackingId, chemicalName, userName) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName("Active_Tracking");
  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] == trackingId) {
      sheet.getRange(i + 1, 7).setValue("DEPLETED");
      break;
    }
  }
  return true;
}


/**
 * ฟังก์ชันดึง Lot (ปรับปรุงตามคอลัมน์จริง)
 */
function getLotsForChemical(chemicalName) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName("Inventory_lots");
  if (!sheet) throw new Error("ไม่พบชีต Inventory_lots");
  
  const data = sheet.getDataRange().getValues();
  data.shift(); // ลบหัวตาราง

  const searchName = String(chemicalName).trim().toLowerCase();
  
  return data.map((row, index) => {
    // คอลัมน์ C (Index 2) คือ Chemical_name
    const rowName = String(row[2] || '').trim().toLowerCase(); 
    
    if (rowName === searchName || rowName.includes(searchName)) {
      let expiryLabel = '-';
      if (row[7]) { // คอลัมน์ H (Index 7) คือ Exp_date
        try {
          expiryLabel = Utilities.formatDate(new Date(row[7]), "GMT+7", "dd/MM/yyyy");
        } catch(e) { expiryLabel = String(row[7]); }
      }
      
      return {
        rowIndex: index + 2,
        lot: row[4] ? String(row[4]) : 'No Lot',   // คอลัมน์ E (Index 4) คือ Lot_no
        quantity: parseFloat(row[9]) || 0,         // คอลัมน์ J (Index 9) คือ Current_quantity
        unit: row[10] ? String(row[10]) : '',      // คอลัมน์ K (Index 10) คือ Unit_Q
        expiry: expiryLabel
      };
    }
    return null;
  }).filter(item => item !== null);
}

/**
 * ฟังก์ชันตัดสต็อก (ปรับปรุงตามคอลัมน์จริง)
 */
function processTransaction(payload) {
  const { actionType, rowIndex, quantity, userName, pin, notes, chemicalName, lotNo } = payload;
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  
  if (actionType === "CHECK_IN" && pin !== ADMIN_PIN) throw new Error("รหัส Admin PIN ไม่ถูกต้อง");

  const lotSheet = ss.getSheetByName("Inventory_lots");
  
  // คอลัมน์ J (Index 9) คือ Current_quantity
  // ดังนั้น getRange(row, col) ต้องใช้ col เป็น 10
  const qtyRange = lotSheet.getRange(rowIndex, 10); 
  const currentQty = qtyRange.getValue();
  
  const qtyChange = actionType === "CHECK_OUT" ? -quantity : quantity;
  const newQty = currentQty + qtyChange;

  if (newQty < 0 && actionType === "CHECK_OUT") throw new Error("จำนวนคงเหลือใน Lot นี้ไม่เพียงพอ");
  
  // บันทึกค่าใหม่ลงในคอลัมน์ J
  qtyRange.setValue(newQty);

  // ส่วนบันทึกประวัติ Transactions และ Tracking (คงเดิม)
  // ...
  const transSheet = ss.getSheetByName("Transactions") || ss.insertSheet("Transactions");
  if (transSheet.getLastRow() === 0) {
    transSheet.appendRow(['ID', 'Time', 'User', 'Action', 'Chemical', 'Lot', 'Qty', 'Note']);
  }
  transSheet.appendRow(["TX-" + Date.now(), new Date(), userName, actionType, chemicalName, lotNo, qtyChange, notes]);

  if (actionType === "CHECK_OUT") {
    const trackSheet = ss.getSheetByName("Active_Tracking") || ss.insertSheet("Active_Tracking");
    if (trackSheet.getLastRow() === 0) {
      trackSheet.appendRow(['ID', 'Chemical', 'Lot', 'User', 'Qty', 'Date', 'Status']);
    }
    trackSheet.appendRow(["TR-" + Date.now(), chemicalName, lotNo, userName, quantity, new Date(), "IN_USE"]);
  }

  return { success: true };
}


function testGetLots() {
  // เปลี่ยนชื่อสารตรงนี้เป็นชื่อจริงในชีต Inventory_lots ของคุณ
  const result = getLotsForChemical("Methanol"); 
  Logger.log(JSON.stringify(result));
  
  // ดูว่าชีต Inventory_lots มีข้อมูลอะไรบ้าง
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName("Inventory_lots");
  if (!sheet) { Logger.log("❌ ไม่พบชีต Inventory_lots!"); return; }
  const data = sheet.getDataRange().getValues();
  Logger.log("จำนวนแถว: " + data.length);
  Logger.log("แถวแรก (header): " + JSON.stringify(data[0]));
  Logger.log("แถวที่ 2 (ข้อมูลแรก): " + JSON.stringify(data[1]));
}
