<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <title>Space Chemical Inventory</title>
  <script src="https://unpkg.com/lucide@latest"></script>
  <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --space-bg: #05070a;
      --space-card: rgba(255, 255, 255, 0.05);
      --space-border: rgba(255, 255, 255, 0.1);
      --neon-blue: #00d2ff;
      --neon-purple: #9d50bb;
      --neon-red: #ff4b2b;
      --neon-gold: #f9d423;
      --neon-green: #39ff14;
      --text-main: #e2e8f0;
      --text-muted: #94a3b8;
      --font-sarabun: 'Sarabun', sans-serif;
    }

    body {
      background: radial-gradient(circle at top right, #1a1c2c, var(--space-bg));
      background-attachment: fixed;
      color: var(--text-main);
      font-family: var(--font-sarabun);
      margin: 0;
      padding: 2rem;
      min-height: 100vh;
      overflow-x: hidden;
    }

    /* Star background effect */
    body::before {
      content: "";
      position: fixed;
      top: 0; left: 0; width: 100%; height: 100%;
      background-image: 
        radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px),
        radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 30px);
      background-size: 550px 550px, 350px 350px;
      background-position: 0 0, 40px 60px;
      opacity: 0.3;
      z-index: -1;
    }

    .header { margin-bottom: 3rem; text-align: center; animation: fadeInDown 1s ease-out; }
    .header h1 { 
      font-size: 2.5rem; 
      margin: 0; 
      background: linear-gradient(to right, var(--neon-blue), var(--neon-purple));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
    .header p { color: var(--text-muted); margin-top: 0.5rem; font-weight: 300; }

    /* Widgets: Space Card Style */
    .widgets { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; margin-bottom: 3rem; }
    .widget { 
      background: var(--space-card); 
      backdrop-filter: blur(10px);
      border-radius: 1.25rem; 
      padding: 1.5rem; 
      border: 1px solid var(--space-border);
      display: flex; 
      align-items: center; 
      gap: 1.5rem;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
    }
    .widget:hover {
      transform: translateY(-10px) scale(1.02);
      border-color: rgba(0, 210, 255, 0.5);
      box-shadow: 0 10px 30px rgba(0, 210, 255, 0.2);
    }
    .widget::after {
      content: ""; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%;
      background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%);
      pointer-events: none;
    }

    .w-icon { 
      width: 50px; height: 50px; border-radius: 15px; 
      display: flex; align-items: center; justify-content: center;
      box-shadow: 0 0 15px currentColor;
    }
    .w-icon.blue { color: var(--neon-blue); background: rgba(0, 210, 255, 0.1); }
    .w-icon.orange { color: var(--neon-gold); background: rgba(249, 212, 35, 0.1); }
    .w-icon.red { color: var(--neon-red); background: rgba(255, 75, 43, 0.1); }
    .w-icon.green { color: var(--neon-green); background: rgba(57, 255, 20, 0.1); }
    .w-content h3 { font-size: 0.9rem; color: var(--text-muted); margin: 0; font-weight: 400; }
    .w-content p { font-size: 1.8rem; font-weight: 700; margin: 0.2rem 0 0 0; letter-spacing: 1px; }

    /* Toolbar */
    .toolbar { 
      display: flex; gap: 1rem; margin-bottom: 2rem; 
      background: var(--space-card); padding: 1.2rem; 
      border-radius: 1rem; border: 1px solid var(--space-border);
      backdrop-filter: blur(5px);
    }
    .search-box { 
      flex: 1; min-width: 250px; display: flex; align-items: center; gap: 0.8rem; 
      background: rgba(0,0,0,0.3); padding: 0.6rem 1.2rem; border-radius: 0.75rem;
      border: 1px solid var(--space-border);
    }
    .search-box input { 
      background: transparent; border: none; outline: none; color: white; width: 100%; 
      font-family: var(--font-sarabun); font-size: 1rem;
    }
    .filter-select { 
      padding: 0.6rem 1.2rem; border-radius: 0.75rem; background: rgba(0,0,0,0.3);
      color: white; border: 1px solid var(--space-border); font-family: var(--font-sarabun);
      cursor: pointer;
    }

    /* Table System */
    .table-container { 
      background: var(--space-card); border-radius: 1.5rem; 
      border: 1px solid var(--space-border); backdrop-filter: blur(10px);
      box-shadow: 0 20px 40px rgba(0,0,0,0.4);
    }
    table { width: 100%; border-collapse: collapse;min-width: 900px; }
    th { 
      padding: 1.25rem; text-align: left; font-size: 0.85rem; 
      color: var(--neon-blue); border-bottom: 2px solid var(--space-border);
      text-transform: uppercase; letter-spacing: 1px; cursor: pointer;
    }
    th:hover { background: rgba(255,255,255,0.05); }
    
    td { padding: 1.1rem 1.25rem; border-bottom: 1px solid var(--space-border); font-size: 0.95rem; }
    
    /* Table Hover Effect */
    tbody tr { transition: all 0.2s; }
    tbody tr:hover { 
      background: rgba(0, 210, 255, 0.08); 
      transform: scale(1.005);
      box-shadow: inset 4px 0 0 var(--neon-blue);
    }

    .status { 
      padding: 0.3rem 0.8rem; border-radius: 8px; font-size: 0.75rem; 
      font-weight: 600; text-transform: uppercase;
      box-shadow: 0 0 10px currentColor;
    }
    .status-Valid { color: var(--neon-green); background: rgba(57, 255, 20, 0.1); }
    .status-Expiring { color: var(--neon-gold); background: rgba(249, 212, 35, 0.1); }
    .status-Expired { color: var(--neon-red); background: rgba(255, 75, 43, 0.1); }

    .coa-link { color: var(--neon-blue); text-decoration: none; border-bottom: 1px dashed transparent; transition: 0.3s; }
    .coa-link:hover { border-bottom-color: var(--neon-blue); text-shadow: 0 0 8px var(--neon-blue); }

    /* Pagination */
    .pagination { 
      display: flex; justify-content: space-between; align-items: center; 
      padding: 1.5rem; background: rgba(0,0,0,0.2); border-radius: 0 0 1.5rem 1.5rem;
    }
    .btn { 
      padding: 0.6rem 1.5rem; background: transparent; border: 1px solid var(--neon-blue);
      color: var(--neon-blue); border-radius: 0.75rem; cursor: pointer; transition: 0.3s;
      font-family: var(--font-sarabun);
    }
    .btn:hover:not(:disabled) { background: var(--neon-blue); color: black; box-shadow: 0 0 15px var(--neon-blue); }
    .btn:disabled { border-color: var(--text-muted); color: var(--text-muted); cursor: not-allowed; }

    @keyframes fadeInDown {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }
        /* --- Mobile Responsive Updates --- */
    @media (max-width: 768px) {
      body {
        padding: 1rem; /* ลดพื้นที่ว่างรอบๆ */
      }

      .header h1 {
        font-size: 1.8rem; /* ลดขนาดหัวข้อ */
      }

      .widgets {
        grid-template-columns: 1fr; /* ให้ Widget เรียงต่อกันแนวตั้ง */
        gap: 1rem;
      }

      .widget {
        padding: 1.2rem;
      }

      .toolbar {
        flex-direction: column; /* ให้ Search และ Filter ซ้อนกัน */
        padding: 1rem;
      }

      .search-box {
        min-width: unset;
        width: 100%;
      }

      .filter-select {
        width: 100%; /* ให้ตัวเลือกกว้างเต็มหน้าจอ */
      }

      th, td {
        padding: 0.8rem 0.6rem; /* ลดขนาดช่องในตาราง */
        font-size: 0.8rem;
      }

      .header p {
        font-size: 0.9rem;
      }

      /* เพิ่มความลื่นไหลในการเลื่อนตารางบนมือถือ */
      .table-wrapper {
        overflow-x: auto; /* ทำให้เลื่อนซ้าย-ขวาได้ */
        width: 100%; 
        -webkit-overflow-scrolling: touch;
      }
      
      /* ซ่อนบางคอลัมน์ที่ไม่จำเป็นบนมือถือ เพื่อประหยัดพื้นที่ (ถ้าต้องการ) */
      /* ตัวอย่าง: ซ่อนแผนกและราคาในหน้าจอมือถือ */
      /* 
      th:nth-child(3), td:nth-child(3), 
      th:nth-child(8), td:nth-child(8) { display: none; } 
      */
    }

    /* ปรับปรุงการแสดงผลของตารางบนหน้าจอเล็กพิเศษ */
    @media (max-width: 480px) {
      .header h1 {
        font-size: 1.5rem;
      }
      .w-content p {
        font-size: 1.4rem;
      }
    }
    /* กำหนดขนาด Column ให้คงที่และเหมาะสม */
    th:nth-child(1), td:nth-child(1) { width: 130px; } /* CAS No. */
    th:nth-child(2), td:nth-child(2) { width: 250px; } /* ชื่อสารเคมี (ปล่อยให้ยืดหยุ่นได้) */
    th:nth-child(3), td:nth-child(3) { width: 140px; } /* ผู้ผลิต */
    th:nth-child(4), td:nth-child(4) { width: 120px; } /* Lot No. */
    th:nth-child(5), td:nth-child(5) { width: 100px; } /* แผนก */
    th:nth-child(6), td:nth-child(6) { width: 100px; } /* จำนวน */
    th:nth-child(7), td:nth-child(7) { width: 140px; } /* วันหมดอายุ */
    th:nth-child(8), td:nth-child(8) { width: 120px; } /* มูลค่า */
    th:nth-child(9), td:nth-child(9) { width: 150px; text-align: center; } /* สถานะ */

    /* บังคับให้ชื่อสารเคมีขึ้นบรรทัดใหม่ได้ถ้าแนวยาวเกินไป */
    td:nth-child(2) {
      white-space: normal;
      word-break: break-word;
      line-height: 1.4;
    }

  </style>
</head>
<body>

  <div class="header">
    <h1>Chemical Inventory Control</h1>
    <p>ระบบบริหารจัดการสารเคมีอัจฉริยะ (Space Edition)</p>
  </div>

    <div class="widgets">
    <!-- Widget 1: แสดงสถานะที่เลือก (เปลี่ยนสีได้) -->
    <div class="widget" id="status-widget">
      <div class="w-icon" id="status-icon"><i data-lucide="shield-check"></i></div>
      <div class="w-content">
        <h3 id="status-title">สถานะปัจจุบัน</h3>
        <p id="status-text">ทั้งหมด</p>
      </div>
    </div>

    <!-- Widget 2: จำนวนรายการตามตัวกรอง -->
    <div class="widget">
      <div class="w-icon blue"><i data-lucide="flask-conical"></i></div>
      <div class="w-content">
        <h3>รายการสารเคมี (ตามตัวกรอง)</h3>
        <p id="w-total">0</p>
      </div>
    </div>

    <!-- Widget 3: มูลค่าสต็อกตามตัวกรอง -->
    <div class="widget">
      <div class="w-icon orange"><i data-lucide="circle-dollar-sign"></i></div>
      <div class="w-content">
        <h3>มูลค่าสต็อก (ตามตัวกรอง)</h3>
        <p id="w-cost">฿0</p>
      </div>
    </div>
  </div>


  <div class="toolbar">
    <div class="search-box">
      <i data-lucide="search" style="width:20px; color:var(--neon-blue);"></i>
      <input type="text" id="searchInput" placeholder="ค้นหาด้วยชื่อสารเคมี หรือ CAS No.">
    </div>
    <select id="deptFilter" class="filter-select">
      <option value="All">ทุกแผนก</option>
    </select>
    <select id="statusFilter" class="filter-select">
      <option value="All">ทุกสถานะ</option>
      <option value="Valid">ปกติ</option>
      <option value="Expiring">ใกล้หมดอายุ</option>
      <option value="Expired">หมดอายุแล้ว</option>
    </select>
  </div>

  <div class="table-container">
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th onclick="handleSort('id')">CAS No.</th>
            <th onclick="handleSort('name')">ชื่อสารเคมี (เกรด)</th>
             <th onclick="handleSort('brand')">บริษัทผู้ผลิต</th>
            <th onclick="handleSort('lotNo')">Lot No.</th> 
            <th onclick="handleSort('department')">แผนก</th>
            <th onclick="handleSort('quantity')">จำนวน</th>
            <th onclick="handleSort('expiryDate')">วันหมดอายุ</th>
            <th onclick="handleSort('cost')">มูลค่า (บาท)</th>
            <th onclick="handleSort('status')">สถานะ</th>
          </tr>
        </thead>
        <tbody id="tableBody"></tbody>
      </table>
    </div>
    <div class="pagination">
      <span id="pageInfo" style="color: var(--text-muted); font-size: 0.9rem;"></span>
      <div style="display: flex; gap: 1rem;">
        <button class="btn" id="btnPrev">ก่อนหน้า</button>
        <button class="btn" id="btnNext">ถัดไป</button>
      </div>
    </div>
  </div>

  <script>
    // ดึงข้อมูลมาจาก Google Apps Script 
    const RAW_DATA = <?!= chemicalData ?>;
    
    let filteredData = [...RAW_DATA];
    let sortConfig = null;
    let currentPage = 1;
    const itemsPerPage = 10;

    const searchInput = document.getElementById('searchInput');
    const deptFilter = document.getElementById('deptFilter');
    const statusFilter = document.getElementById('statusFilter');
    const tableBody = document.getElementById('tableBody');
    const btnPrev = document.getElementById('btnPrev');
    const btnNext = document.getElementById('btnNext');
    
    // Setup Departments
    const depts = new Set(RAW_DATA.map(d => d.department));
    depts.forEach(dept => {
      const opt = document.createElement('option');
      opt.value = dept;
      opt.textContent = dept;
      deptFilter.appendChild(opt);
    });

    function updateWidgets(currentData) {
      try {
        const data = currentData || [];
        const statusValue = document.getElementById('statusFilter').value;
        
        // --- 1. จัดการ Widget สถานะ (ซ้ายสุด) ---
        const statusWidget = document.getElementById('status-widget');
        const statusIcon = document.getElementById('status-icon');
        const statusText = document.getElementById('status-text');
        
        if (statusWidget && statusIcon && statusText) {
          // ล้างคลาสสีเดิม
          statusIcon.classList.remove('blue', 'orange', 'red', 'green');
          
          if (statusValue === 'All') {
            statusText.textContent = "ทุกสถานะ";
            statusIcon.classList.add('blue');
            statusWidget.style.borderColor = 'var(--space-border)';
          } else if (statusValue === 'Valid') {
            statusText.textContent = "ปกติ";
            statusIcon.classList.add('green'); // เราต้องเพิ่ม class green ใน CSS
            statusWidget.style.borderColor = 'var(--neon-green)';
          } else if (statusValue === 'Expiring') {
            statusText.textContent = "ใกล้หมดอายุ";
            statusIcon.classList.add('orange');
            statusWidget.style.borderColor = 'var(--neon-gold)';
          } else if (statusValue === 'Expired') {
            statusText.textContent = "หมดอายุแล้ว";
            statusIcon.classList.add('red');
            statusWidget.style.borderColor = 'var(--neon-red)';
          }
        }

        // --- 2. จำนวนรายการ (กลาง) ---
        const totalElement = document.getElementById('w-total');
        if (totalElement) totalElement.textContent = data.length.toLocaleString();
        
        // --- 3. มูลค่าสต็อก (ขวา) ---
        const costElement = document.getElementById('w-cost');
        if (costElement) {
          const totalValue = data.reduce((acc, curr) => acc + (curr.cost || 0), 0);
          costElement.textContent = '฿' + totalValue.toLocaleString();
        }

        lucide.createIcons(); // อัปเดตไอคอนใหม่
      } catch (e) {
        console.error("Error in updateWidgets:", e);
      }
    }

        function formatDateUI(dateStr) {
      if (!dateStr || dateStr === '-') return '-';
      const d = new Date(dateStr);
      if (isNaN(d.getTime())) return dateStr;
      
      // ใช้ en-GB เพื่อให้แสดงผลเป็น ค.ศ. (เช่น 31 May 2024)
      // และยังคงรูปแบบวันที่อ่านง่าย
      return d.toLocaleDateString('en-GB', { 
        day: 'numeric',
        month: 'short', 
        year: 'numeric' 
      });
    }


    function renderTable() {
      const start = (currentPage - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      const pageData = filteredData.slice(start, end);
      
      tableBody.innerHTML = '';
      if(pageData.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="7" style="text-align:center; padding: 3rem; color:var(--text-muted);">ไม่พบข้อมูลสารเคมีที่คุณค้นหา</td></tr>';
      } else {
        pageData.forEach(item => {
          const nameHtml = item.coaLink 
            ? `<a href="${item.coaLink}" target="_blank" class="coa-link">${item.name}</a>`
            : item.name;

          const tr = document.createElement('tr');
          tr.innerHTML = `
            <td style="color: var(--neon-blue); font-family: monospace;">${item.id}</td>
            <td style="font-weight: 600;">${nameHtml}</td>
            <td>${item.brand}</td> 
            <td style="font-family: monospace;">${item.lotNo}</td>
            <td>${item.department}</td>
            <td>${item.quantity.toLocaleString()} ${item.unit}</td>
            <td>${formatDateUI(item.expiryDate)}</td>
            <td style="font-weight: 600;">฿${item.cost.toLocaleString()}</td>
            <td><span class="status status-${item.status}">${translateStatus(item.status)}</span></td>
          `;
          tableBody.appendChild(tr);
        });
      }
      
      const totalPages = Math.ceil(filteredData.length / itemsPerPage);
      document.getElementById('pageInfo').textContent = `แสดงรายการที่ ${filteredData.length === 0 ? 0 : start + 1} - ${Math.min(end, filteredData.length)} จากทั้งหมด ${filteredData.length} รายการ`;
      btnPrev.disabled = currentPage === 1;
      btnNext.disabled = currentPage === totalPages || totalPages === 0;
    }

    function translateStatus(s) {
      const map = { 'Valid': 'ปกติ', 'Expiring': 'ใกล้หมดอายุ', 'Expired': 'หมดอายุ' };
      return map[s] || s;
    }

     function applyFilters() {
      try {
        const q = (searchInput.value || "").toLowerCase();
        const dept = deptFilter.value || "All";
        const status = statusFilter.value || "All";
        
        filteredData = RAW_DATA.filter(item => {
          if (!item) return false;
          const matchQ = (item.name || "").toLowerCase().includes(q) || 
                         (item.id || "").toLowerCase().includes(q) ||
                         (item.brand || "").toLowerCase().includes(q) ||
                         (item.lotNo || "").toLowerCase().includes(q);
          const matchDept = dept === 'All' || item.department === dept;
          const matchStatus = status === 'All' || item.status === status;
          return matchQ && matchDept && matchStatus;
        });
      
       if (sortConfig) {
          filteredData.sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
            if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
            return 0;
          });
        }
        
        currentPage = 1;
        renderTable();
        updateWidgets(filteredData); // อัปเดตตัวเลข Dashboard
      } catch (e) {
        console.error("Error in applyFilters:", e);
      }
    }

    function handleSort(key) {
      if (sortConfig && sortConfig.key === key) {
        sortConfig.direction = sortConfig.direction === 'asc' ? 'desc' : 'asc';
      } else {
        sortConfig = { key, direction: 'asc' };
      }
      applyFilters();
    }

    searchInput.addEventListener('input', applyFilters);
    deptFilter.addEventListener('change', applyFilters);
    statusFilter.addEventListener('change', applyFilters);
    btnPrev.addEventListener('click', () => { if(currentPage > 1) { currentPage--; renderTable(); } });
    btnNext.addEventListener('click', () => { 
      if(currentPage < Math.ceil(filteredData.length / itemsPerPage)) { currentPage++; renderTable(); } 
    });

    lucide.createIcons();
    updateWidgets(RAW_DATA); // เรียกครั้งแรกตอนโหลดหน้าเว็บ
    renderTable();   
  </script>
</body>
</html>
