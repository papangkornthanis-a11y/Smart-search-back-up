function onEdit(e) {
  if (!e || !e.range) return;

  var sheet = e.range.getSheet();
  // ตรวจสอบว่าแก้ไขในชีท Master data หรือไม่
  if (sheet.getName() !== "Master data") return;

  var colStart = e.range.getColumn();
  var colEnd = e.range.getLastColumn();
  var rowStart = e.range.getRow();
  var rowEnd = e.range.getLastRow();

  // ตรวจสอบว่าการแก้ไขครอบคลุมคอลัมน์ B (Chemical_name) และไม่ใช่แถวหัวตาราง
  if (colStart > 2 || colEnd < 2 || rowEnd < 2) return;

  var lastRow = sheet.getLastRow();
  if (lastRow < 2) return;

  // ดึงข้อมูลทั้งหมดในคอลัมน์ A และ B มาตรวจสอบ
  var dataRange = sheet.getRange(2, 1, lastRow - 1, 2);
  var data = dataRange.getValues();

  var existingNames = new Set();
  var maxIds = {};

  // 1. เก็บข้อมูลชื่อที่มีอยู่แล้ว และหาตัวเลข ID สูงสุดของแต่ละตัวอักษร
  for (var i = 0; i < data.length; i++) {
    var rowNum = i + 2;
    var idVal = data[i][0] ? data[i][0].toString().trim() : "";
    var nameVal = data[i][1] ? data[i][1].toString().trim() : "";
    var normName = nameVal.toLowerCase(); // แปลงเป็นตัวเล็กทั้งหมดเพื่อเช็คชื่อซ้ำ

    // เก็บค่า ID สูงสุดของแต่ละหมวดตัวอักษร
    if (idVal.match(/^[A-Z]\d+$/i)) {
      var letter = idVal.charAt(0).toUpperCase();
      var num = parseInt(idVal.substring(1), 10);
      if (!maxIds[letter] || num > maxIds[letter]) {
        maxIds[letter] = num;
      }
    }

    // เก็บชื่อสารเคมีที่มีอยู่แล้ว (ยกเว้นแถวที่กำลังแก้ไขอยู่ เพื่อนำมาเปรียบเทียบ)
    if (rowNum < rowStart || rowNum > rowEnd) {
      if (nameVal) {
        existingNames.add(normName);
      }
    }
  }

  // 2. ตรวจสอบและจัดการแถวที่ถูกแก้ไข
  for (var r = Math.max(2, rowStart); r <= rowEnd; r++) {
    var nameIndex = r - 2;
    var nameVal = data[nameIndex][1] ? data[nameIndex][1].toString().trim() : "";
    var currentId = data[nameIndex][0] ? data[nameIndex][0].toString().trim() : "";

    if (!nameVal) continue; // ข้ามหากไม่ได้กรอกชื่อ

    var normName = nameVal.toLowerCase();

    // กรณีที่ 1: ชื่อซ้ำกับที่มีอยู่แล้ว
    if (existingNames.has(normName)) {
      if (currentId !== "มี ID แล้ว") {
        sheet.getRange(r, 1).setValue("มี ID แล้ว");
      }
    } 
    // กรณีที่ 2: เป็นชื่อใหม่
    else {
      // ถ้ายังไม่มี ID หรือ ID เดิมติดคำว่า "มี ID แล้ว" ให้สร้างรหัสใหม่
      if (!currentId || currentId === "มี ID แล้ว") {
        
        // ค้นหาตัวอักษรภาษาอังกฤษตัวแรกที่เจอในชื่อ (ข้ามตัวเลขและสัญลักษณ์)
        var letterMatch = nameVal.match(/[A-Za-z]/);
        
        // ตรวจสอบว่าพบตัวอักษรภาษาอังกฤษหรือไม่
        if (letterMatch) {
          var firstLetter = letterMatch[0].toUpperCase();
          var currentMax = maxIds[firstLetter] || 0;
          var nextNum = currentMax + 1;
          var newId = firstLetter + ("0" + nextNum).slice(-2);

          sheet.getRange(r, 1).setValue(newId);
          
          // อัปเดตข้อมูลในระบบเผื่อมีการวางข้อมูล (Paste) พร้อมกันหลายบรรทัด
          maxIds[firstLetter] = nextNum; 
          existingNames.add(normName);   
        }
      } else {
        // ถ้ามี ID อยู่แล้วและไม่ซ้ำ ให้จำชื่อนี้ไว้เพื่อเช็คบรรทัดถัดๆ ไป
        existingNames.add(normName);
      }
    }
  }
}