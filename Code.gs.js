// กำหนดลิงก์ของ Google Sheets ตรงนี้ 
const SHEET_CONFIG = [
  { id: '1k9jbOwPlZSiu8O6ohOcEzmMxZkC3nXCLhlFBa-T6dDo', department: 'ASG1&2' },
  { id: '1DJ8Pm77a0btUNsFaEJr4fUU6v0YEnh2zXYBv_Inwr5k', department: 'ASG3' },
  { id: '1Yv6DN4GJTOMGSqNzqtzYix0TbW4JV0ImaqYt6uYFzSM', department: 'ASG4' },
  { id: '1i0fVEU67KBoF2qSl2CHf_GOZBMExnCs-zQfSDvGaWrc', department: 'BCBA' },
  { id: '1PrPAc_53461tNn5UOiwzVHkCSr2NpcGSZFxmWKDtzW4', department: 'BG' }
  // สามารถคัดลอกบรรทัดบนเพื่อเพิ่มแผนกอื่นๆ ได้ในอนาคต
];

// ฟังก์ชันหลักที่ทำงานเมื่อมีคนเปิด URL
function doGet(e) {
  e = e || { parameter: {} };
  var page = e.parameter.page;
  var template;
  
  if (page === 'inventory') {
    template = HtmlService.createTemplateFromFile('InventoryUI');
    // ต้องมี 2 บรรทัดนี้ครับ
    template.chemicalData = JSON.stringify(getInventoryData());
    template.userList = JSON.stringify(getUserList()); 
    
    return template.evaluate()
      .setTitle('ระบบจัดการคลังสารเคมี - แผนก')
      .addMetaTag('viewport', 'width=device-width, initial-scale=1')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  } else {
    template = HtmlService.createTemplateFromFile('index');
    template.chemicalData = JSON.stringify(fetchChemicalData());
    return template.evaluate()
      .setTitle('ระบบค้นหาสารเคมีส่วนกลาง')
      .addMetaTag('viewport', 'width=device-width, initial-scale=1');
  }
}



function fetchChemicalData() {
  let allChemicals = [];
  const today = new Date();
  
  for (let i = 0; i < SHEET_CONFIG.length; i++) {
    const config = SHEET_CONFIG[i];
    try {
      const ss = SpreadsheetApp.openById(config.id);
      const sheet = ss.getSheets()[0];
      const data = sheet.getDataRange().getValues();
      
      for (let r = 1; r < data.length; r++) {
        const row = data[r];
        const name = row[0] ? String(row[0]) : '';
        const grade = row[1] ? String(row[1]) : '';
        const casNo = row[2] ? String(row[2]) : '';
        const brand = row[6] ? String(row[6]) : ''; 
        const lotNo = row[3] ? String(row[3]) : '';
        const qtyStr = row[4] || 0;
        const unit = row[5]? String(row[5]) : '';
        const expiryDateRaw = row[8];
        const expiryObj = safeParseDate(expiryDateRaw);
        const costStr = row[10] || 0;
        const coaLink = row[9] || '';
        if (!name || name.trim() === '') continue;
        const quantity = parseFloat(String(qtyStr).replace(/,/g, '')) || 0;
        const unitPrice = parseFloat(String(costStr).replace(/,/g, '')) || 0;
        const totalCost = quantity * unitPrice;
        
        let status = 'Valid';
        let expiryDate = '';
        
        if (expiryObj) {
          const y = expiryObj.getFullYear();
          const m = String(expiryObj.getMonth() + 1).padStart(2, '0');
          const d = String(expiryObj.getDate()).padStart(2, '0');
          expiryDate = `${y}-${m}-${d}`; // เก็บเป็น YYYY-MM-DD เสมอ
          
          if (expiryObj < today) {
            status = 'Expired';
          } else if (expiryObj.getFullYear() === today.getFullYear()) {
            status = 'Expiring';
          }
        } else {
          expiryDate = String(expiryDateRaw || '-');
        }
        allChemicals.push({
          id: casNo ? String(casNo).trim() : `CH-${config.department}-${r}`,
          name: grade ? `${name} (${grade})` : name,
          brand: brand, // เพิ่มตรงนี้
          lotNo: lotNo,
          department: config.department,
          quantity: quantity,
          unit: unit,
          expiryDate: expiryDate,
          cost: totalCost,
          status: status,
          coaLink: coaLink
        });
      }
    } catch (err) {
      Logger.log("Error: " + err);
    }
  }
  return allChemicals;
}
function safeParseDate(val) {
  if (!val || val === '-') return null;
  
  let d;
  if (val instanceof Date) {
    d = new Date(val);
  } else {
    let str = String(val).trim();
    const parts = str.split(/[-/.]/);
    if (parts.length === 3) {
      let day, month, year;
      if (parts[0].length === 4) { // YYYY-MM-DD
        year = parseInt(parts[0]);
        month = parseInt(parts[1]) - 1;
        day = parseInt(parts[2]);
      } else { // DD-MM-YYYY
        day = parseInt(parts[0]);
        month = parseInt(parts[1]) - 1;
        year = parseInt(parts[2]);
      }
      d = new Date(year, month, day);
    } else {
      d = new Date(str);
    }
  }
  if (d && !isNaN(d.getTime())) {
    let year = d.getFullYear();
    
    // จัดการปี 2 หลัก หรือปี พ.ศ. ที่สับสนกับ ค.ศ. ในอนาคต
    if (year < 100) {
      year += 2000;
    } else if (year >= 2500) { 
      // กรณีเป็น พ.ศ. (เช่น 2567)
      year -= 543;
    } else if (year >= 2450 && year < 2500) {
      // กรณีพิมพ์ 30 แล้วระบบเดาเป็น พ.ศ. 2530 (ที่จริงคือ ค.ศ. 2030)
      year = 2000 + (year - 2500); 
      if (year < 2000) year = d.getFullYear() - 543; // กันพลาดถ้าเป็นปี พ.ศ. อดีตจริงๆ
    }
    
    d.setFullYear(year);
    return d;
  }
  return null;
}
