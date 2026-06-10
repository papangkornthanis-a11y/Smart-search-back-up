<!DOCTYPE html>
<html>
<head>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #050b14; --glass: rgba(13, 22, 38, 0.8);
      --accent: #8b5cf6; --text: #e2e8f0;
      --warn: #fbbf24; --danger: #f87171; --success: #34d399;
    }
    body { margin: 0; font-family: 'Inter', sans-serif; background: var(--bg); color: var(--text); min-height: 100vh; overflow-x: hidden;
      background-image: radial-gradient(circle at 15% 50%, rgba(139,92,246,0.1), transparent 40%), radial-gradient(circle at 85% 30%, rgba(59,130,246,0.1), transparent 40%); }
    .container { max-width: 1100px; margin: 0 auto; padding: 20px; position: relative; }
    header { text-align: center; margin-bottom: 30px; padding-top: 20px; }
    h1 { font-weight: 800; background: linear-gradient(90deg, #a78bfa, #3b82f6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 2.5rem; margin: 0; }
    .central-link { position: absolute; top: 20px; right: 20px; text-decoration: none; padding: 10px 15px; border-radius: 10px; border: 1px solid var(--accent); color: var(--text); font-size: 0.8rem; background: rgba(139,92,246,0.1); transition: 0.3s; display: flex; align-items: center; gap: 8px; font-weight: 600; }
    .central-link:hover { background: var(--accent); box-shadow: 0 0 15px var(--accent); }
    .widgets { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-bottom: 30px; }
    .widget { background: var(--glass); padding: 20px; border-radius: 15px; border: 1px solid rgba(255,255,255,0.1); text-align: center; }
    .widget h3 { font-size: 0.8rem; color: #94a3b8; margin: 0 0 10px; text-transform: uppercase; }
    .widget p { font-size: 1.8rem; font-weight: 800; margin: 0; }
    .tabs { display: flex; gap: 10px; margin-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.1); }
    .tab { padding: 10px 20px; cursor: pointer; opacity: 0.6; border-bottom: 2px solid transparent; transition: 0.3s; }
    .tab.active { opacity: 1; border-bottom-color: var(--accent); color: var(--accent); font-weight: 600; }
    .search-box { width: 100%; padding: 12px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.1); background: rgba(0,0,0,0.3); color: white; margin-bottom: 15px; box-sizing: border-box; }
    select.search-box { cursor: pointer; }
    .table-container { background: var(--glass); border-radius: 15px; overflow-x: auto; border: 1px solid rgba(255,255,255,0.1); }
    table { width: 100%; border-collapse: collapse; min-width: 700px; }
    th { text-align: left; padding: 15px; background: rgba(0,0,0,0.2); font-size: 0.75rem; text-transform: uppercase; color: var(--accent); white-space: nowrap; }
    td { padding: 12px 15px; border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 0.85rem; vertical-align: middle; }
    .badge { padding: 4px 10px; border-radius: 20px; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; }
    .status-Expiring { background: rgba(251,191,36,0.2); color: var(--warn); }
    .status-Expired { background: rgba(248,113,113,0.2); color: var(--danger); }
    .status-Normal { background: rgba(52,211,153,0.2); color: var(--success); }
    .btn { padding: 8px 15px; border-radius: 8px; border: none; cursor: pointer; font-size: 0.8rem; font-weight: 600; transition: 0.3s; }
    .btn-primary { background: var(--accent); color: white; }
    .btn-outline { background: transparent; border: 1px solid rgba(255,255,255,0.2); color: white; }
    .btn:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(139,92,246,0.3); }
    .overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); display: none; justify-content: center; align-items: center; z-index: 100; }
    .modal-box { background: #0f172a; padding: 30px; border-radius: 20px; width: 90%; max-width: 400px; border: 1px solid var(--accent); }
    .mgmt-card { background: rgba(139,92,246,0.05); border: 1px solid var(--accent); border-radius: 20px; padding: 30px; max-width: 600px; margin: 0 auto; }
    .form-group { margin-bottom: 15px; }
    label { display: block; font-size: 0.8rem; color: #94a3b8; margin-bottom: 5px; font-weight: 600; }
    input[type="text"], input[type="number"], input[type="password"] { width: 100%; padding: 10px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); background: rgba(0,0,0,0.3); color: white; box-sizing: border-box; }
    .loading { text-align: center; padding: 50px; font-weight: 600; color: var(--accent); }
    .chem-link { cursor: pointer; color: var(--accent); text-decoration: underline; font-weight: 600; transition: 0.2s; }
    .chem-link:hover { color: #a78bfa; }
    @media (max-width: 768px) {
      .central-link { position: static; margin: 0 auto 20px; width: fit-content; }
      .table-container { border: none; background: transparent; }
      table, thead, tbody, th, td, tr { display: block; }
      thead { display: none; }
      tr { background: var(--glass); border-radius: 15px; margin-bottom: 15px; padding: 15px; border: 1px solid rgba(255,255,255,0.1); }
      td { border: none; padding: 5px 0; display: flex; justify-content: space-between; align-items: center; }
      td::before { content: attr(data-label); font-weight: 600; color: var(--accent); font-size: 0.75rem; flex-shrink: 0; margin-right: 10px; }
    }
  </style>
</head>
<body>
<div class="container">
  <a href="https://script.google.com/a/macros/mail2.gpo.or.th/s/AKfycbwn3OTi2RXknRk1_k9UUTJkBC1X-JhSEDLHSoYDE8s/dev" target="_blank" class="central-link">
    <span>🔍</span> ค้นหาสารเคมีส่วนกลาง
  </a>
  <header>
    <h1>GALACTIC INVENTORY</h1>
    <p style="color: #94a3b8; font-size: 0.8rem; letter-spacing: 2px;">DEPARTMENT CHEMICAL STOCK</p>
  </header>

  <div class="widgets">
    <div class="widget"><h3>TOTAL</h3><p id="total-count">-</p></div>
    <div class="widget"><h3>EXPIRING</h3><p id="expiring-count" style="color:var(--warn)">-</p></div>
    <div class="widget"><h3>EXPIRED</h3><p id="expired-count" style="color:var(--danger)">-</p></div>
  </div>

  <div class="tabs">
    <div class="tab active" onclick="switchTab('inventory', this)">📦 STOCK</div>
    <div class="tab" onclick="switchTab('tracking', this)">🛰️ TRACKING</div>
    <div class="tab" onclick="switchTab('management', this)">🛠️ MANAGEMENT</div>
  </div>

  <!-- TAB 1: STOCK -->
  <div id="inventory-view">
    <input type="text" class="search-box" placeholder="ค้นหาชื่อสารเคมี หรือเลข CAS..." onkeyup="filterData(this.value)">
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>สารเคมี (คลิกเพื่อจัดการ)</th>
            <th>CAS</th><th>Lot No.</th><th>จำนวน</th>
            <th>เอกสาร</th><th>หมดอายุ</th><th>สถานะ</th><th>Location</th>
          </tr>
        </thead>
        <tbody id="inventory-body"></tbody>
      </table>
    </div>
  </div>

  <!-- TAB 2: TRACKING -->
  <div id="tracking-view" style="display:none">
    <div class="table-container">
      <table>
        <thead>
          <tr><th>สารเคมี</th><th>Lot</th><th>ผู้เบิก</th><th>จำนวน</th><th>วันที่เบิก</th><th>จัดการ</th></tr>
        </thead>
        <tbody id="tracking-body"></tbody>
      </table>
    </div>
  </div>

  <!-- TAB 3: MANAGEMENT -->
  <div id="management-view" style="display:none">
    <div class="mgmt-card">
      <h2 style="color:var(--accent); margin:0 0 20px 0;">🛠️ ระบบจัดการสต็อก (FEFO)</h2>
      <div class="form-group">
        <label>1. ค้นหาสารเคมี</label>
        <input type="text" id="mgmt-search" placeholder="พิมพ์เพื่อค้นหา..." onkeyup="searchMgmtChem(this.value)">
        <select id="mgmt-chem-select" class="search-box" style="margin-top:8px" onchange="onChemSelect()">
          <option value="">-- เลือกสารเคมี --</option>
        </select>
      </div>
      <div class="form-group" id="lot-group" style="display:none">
        <label>2. เลือก Lot No. (เรียงตาม FEFO)</label>
        <select id="mgmt-lot-select" class="search-box" onchange="onLotSelect()">
          <option value="">-- เลือก Lot --</option>
        </select>
        <p id="lot-info" style="font-size:0.85rem; color:var(--warn); margin:5px 0 0;"></p>
      </div>
      <div id="form-details" style="display:none">
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px;">
          <div class="form-group">
            <label>3. จำนวน</label>
            <input type="number" id="mgmt-qty" step="0.01" placeholder="0.00" min="0.01">
          </div>
          <div class="form-group">
            <label>4. ชื่อผู้เบิก/รับเข้า</label>
            <select id="mgmt-user-select" class="search-box"></select>
          </div>
        </div>
        <div class="form-group">
          <label>5. Note เพิ่มเติม</label>
          <input type="text" id="mgmt-note" placeholder="ระบุเหตุผล หรือหมายเหตุ...">
        </div>
        <div style="display:flex; gap:10px; margin-top:20px;">
          <button class="btn btn-outline" style="flex:1" onclick="submitMgmt('CHECK_IN')">➕ รับเข้า</button>
          <button class="btn btn-primary" style="flex:1" onclick="submitMgmt('CHECK_OUT')">➖ เบิกจ่าย</button>
        </div>
      </div>
    </div>
  </div>
</div>
<script>
  // ===== ตัวแปรหลัก =====
  const rawData = <?!= chemicalData ?>;
  const userList = <?!= userList ?>;

  // ===== สลับแท็บ =====
  function switchTab(tab, el) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    if (el) el.classList.add('active');
    document.getElementById('inventory-view').style.display = tab === 'inventory' ? 'block' : 'none';
    document.getElementById('tracking-view').style.display = tab === 'tracking' ? 'block' : 'none';
    document.getElementById('management-view').style.display = tab === 'management' ? 'block' : 'none';
    if (tab === 'tracking') loadTracking();
    if (tab === 'management') initUserList();
  }

  // ===== แสดงตาราง STOCK (ครบทุกคอลัมน์) =====
  function renderInventory(data) {
    if (!data || data.length === 0) {
      document.getElementById('inventory-body').innerHTML = '<tr><td colspan="8" class="loading">ไม่พบข้อมูลสารเคมี</td></tr>';
      return;
    }
    const html = data.map(item => `
      <tr>
        <td data-label="สารเคมี">
          <span class="chem-link" onclick="goToMgmt('${escStr(item.pureName)}')">${item.name}</span>
        </td>
        <td data-label="CAS">${item.cas || '-'}</td>
        <td data-label="Lot No.">${item.lot || '-'}</td>
        <td data-label="จำนวน">${item.quantity} ${item.unit}</td>
        <td data-label="เอกสาร">
          <div style="display:flex; gap:8px">
            ${item.coa ? `<a href="${item.coa}" target="_blank" style="text-decoration:none; font-size:1.2rem;" title="CoA">📄</a>` : ''}
            ${item.msds ? `<a href="${item.msds}" target="_blank" style="text-decoration:none; font-size:1.2rem;" title="MSDS">📕</a>` : ''}
          </div>
        </td>
        <td data-label="หมดอายุ">${item.expiry}</td>
        <td data-label="สถานะ"><span class="badge status-${item.status}">${item.status === 'Expiring' ? 'ใกล้หมด' : item.status === 'Expired' ? 'หมดอายุ' : 'ปกติ'}</span></td>
        <td data-label="Location">${item.location || '-'}</td>
      </tr>
    `).join('');
    document.getElementById('inventory-body').innerHTML = html;
  }

  function escStr(s) { return s ? s.replace(/'/g, "\\'") : ''; }

  function updateStats(data) {
    document.getElementById('total-count').innerText = data.length;
    document.getElementById('expiring-count').innerText = data.filter(i => i.status === 'Expiring').length;
    document.getElementById('expired-count').innerText = data.filter(i => i.status === 'Expired').length;
  }

  function filterData(val) {
    const q = val.toLowerCase();
    renderInventory(rawData.filter(i =>
      (i.name || '').toLowerCase().includes(q) ||
      (i.cas || '').toLowerCase().includes(q) ||
      (i.lot || '').toLowerCase().includes(q)
    ));
  }

  // ===== SHORTCUT: คลิกชื่อสาร -> ไปหน้า Management =====
  function goToMgmt(pureName) {
    if (!pureName || pureName === 'undefined') {
      alert('ไม่พบชื่อสาร กรุณารีเฟรชหน้าเว็บ');
      return;
    }
    // สลับแท็บ Management
    const tabs = document.querySelectorAll('.tab');
    switchTab('management', tabs[2]);

    // ใส่ชื่อในช่องค้นหาและกรองตัวเลือก
    document.getElementById('mgmt-search').value = pureName;
    searchMgmtChem(pureName);

    // รอให้ Dropdown มีข้อมูลแล้วเลือกให้อัตโนมัติ
    setTimeout(() => {
      const select = document.getElementById('mgmt-chem-select');
      let found = false;
      for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].value === pureName) {
          select.selectedIndex = i;
          found = true;
          break;
        }
      }
      // fallback: เลือกอันแรกถ้าไม่เจอแบบตรงเป๊ะ
      if (!found && select.options.length > 1) {
        select.selectedIndex = 1;
      }
      if (select.value) onChemSelect();
    }, 400);
  }

  // ===== Management: ค้นหาสารเคมี =====
  function initUserList() {
    const select = document.getElementById('mgmt-user-select');
    if (!select) return;
    select.innerHTML = '<option value="">-- เลือกชื่อ --</option>' +
      userList.map(n => `<option value="${n}">${n}</option>`).join('');
  }

  function searchMgmtChem(val) {
    const q = val.toLowerCase();
    // ดึงชื่อไม่ซ้ำกัน เปรียบเทียบจากชื่อเต็ม แต่ value ใช้ pureName
    const seen = new Set();
    const options = rawData.filter(curr => {
      const match = (curr.name || '').toLowerCase().includes(q);
      if (match && !seen.has(curr.pureName)) { seen.add(curr.pureName); return true; }
      return false;
    });
    document.getElementById('mgmt-chem-select').innerHTML =
      '<option value="">-- เลือกสารเคมี --</option>' +
      options.map(i => `<option value="${escStr(i.pureName)}">${i.name}</option>`).join('');
    // ซ่อน Lot และฟอร์มเมื่อค้นหาใหม่
    document.getElementById('lot-group').style.display = 'none';
    document.getElementById('form-details').style.display = 'none';
  }

  // ===== Management: เลือกสาร -> ดึง Lot จาก Inventory_lots =====
  function onChemSelect() {
    const chemName = document.getElementById('mgmt-chem-select').value;
    if (!chemName) return;

    const lotSelect = document.getElementById('mgmt-lot-select');
    lotSelect.innerHTML = '<option value="">⏳ กำลังโหลด Lot...</option>';
    document.getElementById('lot-group').style.display = 'block';
    document.getElementById('form-details').style.display = 'none';
    document.getElementById('lot-info').innerText = '';

    google.script.run
      .withSuccessHandler(lots => {
        if (!lots || lots.length === 0) {
          lotSelect.innerHTML = '<option value="">ไม่พบ Lot ใน Inventory_lots</option>';
          return;
        }
        // เรียงตาม FEFO
        lots.sort((a, b) => {
          if (a.expiry === '-') return 1;
          if (b.expiry === '-') return -1;
          const pa = a.expiry.split('/'), pb = b.expiry.split('/');
          return new Date(pa[2], pa[1]-1, pa[0]) - new Date(pb[2], pb[1]-1, pb[0]);
        });
        lotSelect.innerHTML = '<option value="">-- เลือก Lot --</option>' +
          lots.map(l => `<option value="${l.rowIndex}" data-qty="${l.quantity}" data-unit="${l.unit}">
            ${l.lot || 'No Lot'} | คงเหลือ: ${l.quantity} ${l.unit} | Exp: ${l.expiry}
          </option>`).join('');
      })
      .withFailureHandler(err => {
        lotSelect.innerHTML = '<option value="">เกิดข้อผิดพลาด: ' + err.message + '</option>';
      })
      .getLotsForChemical(chemName);
  }

  // ===== Management: เลือก Lot -> แสดงฟอร์ม =====
  function onLotSelect() {
    const sel = document.getElementById('mgmt-lot-select');
    const opt = sel.selectedOptions[0];
    if (!sel.value || !opt) return;
    const qty = opt.getAttribute('data-qty');
    const unit = opt.getAttribute('data-unit');
    document.getElementById('lot-info').innerText = `คงเหลือ: ${qty} ${unit}`;
    document.getElementById('form-details').style.display = 'block';
  }

  // ===== Management: ส่งรายการ =====
  function submitMgmt(type) {
    const rowIndex = document.getElementById('mgmt-lot-select').value;
    const qty = document.getElementById('mgmt-qty').value;
    const user = document.getElementById('mgmt-user-select').value;
    const note = document.getElementById('mgmt-note').value;
    const chemName = document.getElementById('mgmt-chem-select').value;
    const lotText = document.getElementById('mgmt-lot-select').selectedOptions[0]?.text || '';
    const lotNo = lotText.split('|')[0].trim();

    if (!rowIndex) return alert('กรุณาเลือก Lot');
    if (!qty || parseFloat(qty) <= 0) return alert('กรุณากรอกจำนวนที่ถูกต้อง');
    if (!user) return alert('กรุณาเลือกชื่อผู้ดำเนินการ');

    let pin = '';
    if (type === 'CHECK_IN') {
      pin = prompt('🔐 ใส่ Admin PIN เพื่อรับของเข้า:');
      if (!pin) return;
    }

    const payload = {
      actionType: type, rowIndex: parseInt(rowIndex), quantity: parseFloat(qty),
      userName: user, pin: pin, notes: note, chemicalName: chemName, lotNo: lotNo
    };

    const btns = document.querySelectorAll('.mgmt-card .btn');
    btns.forEach(b => b.disabled = true);

    google.script.run
      .withSuccessHandler(() => {
        alert('✅ บันทึกสำเร็จ! ตัดสต็อกใน Inventory_lots แล้ว');
        location.reload();
      })
      .withFailureHandler(err => {
        alert('❌ เกิดข้อผิดพลาด: ' + err.message);
        btns.forEach(b => b.disabled = false);
      })
      .processTransaction(payload);
  }

  // ===== TRACKING =====
  function loadTracking() {
    document.getElementById('tracking-body').innerHTML = '<tr><td colspan="6" class="loading">🌀 กำลังดึงข้อมูล...</td></tr>';
    google.script.run.withSuccessHandler(data => {
      const html = (data || []).map(t => `
        <tr>
          <td data-label="สารเคมี">${t.chemicalName}</td>
          <td data-label="Lot">${t.lot || '-'}</td>
          <td data-label="ผู้เบิก">${t.user}</td>
          <td data-label="จำนวน">${t.qty}</td>
          <td data-label="วันที่เบิก">${t.date}</td>
          <td data-label="จัดการ">
            <button class="btn btn-primary" onclick="markDepleted('${t.id}','${escStr(t.chemicalName)}','${escStr(t.user)}')">ใช้หมดแล้ว</button>
          </td>
        </tr>
      `).join('');
      document.getElementById('tracking-body').innerHTML = html || '<tr><td colspan="6" style="text-align:center;padding:20px">ไม่มีรายการที่กำลังติดตาม</td></tr>';
    }).getActiveTracking();
  }

  function markDepleted(id, name, user) {
    if (!confirm(`ยืนยันว่าใช้ "${name}" หมดแล้ว?`)) return;
    google.script.run.withSuccessHandler(() => loadTracking()).markAsDepleted(id, name, user);
  }

  // ===== เริ่มต้น =====
  window.onload = function() {
    renderInventory(rawData);
    updateStats(rawData);
    initUserList();
  };
</script>
</body>
</html>
