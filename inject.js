(function(){
  var cfg = window.SHEET_CONFIG;
  if (!cfg || !cfg.endpoint) return;

  // Giữ track đã gửi chưa, để không gửi nhiều lần khi timeline replay
  var sent = {};

  // Hàm đọc tất cả biến và POST lên Apps Script
  function sendData() {
    try {
      var player = GetPlayer();
      var data   = { sheetName: cfg.sheetName };
      cfg.vars.forEach(function(k) {
        data[k] = player.GetVar(k);
      });
      fetch(cfg.endpoint, {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(data)
      })
      .then(function(r){ return r.json(); })
      .then(function(j){ console.log("✔ Sent to Sheets:", j); })
      .catch(function(e){ console.error("❌ POST error:", e); });
    }
    catch(e) {
      console.error("❌ sendData error:", e);
    }
  }

  // Khi nội dung slide thay đổi, kiểm tra slide ID
  function onSlideChange() {
    var active = document.querySelector(".slide[aria-hidden='false']");
    if (!active) return;
    var id = active.id;
    if (cfg.triggerSlides.indexOf(id) !== -1 && !sent[id]) {
      sent[id] = true;
      console.log("▶ Trigger slide:", id);
      sendData();
    }
  }

  // Dùng MutationObserver để lắng nghe DOM thay đổi trong #preso
  document.addEventListener("DOMContentLoaded", function(){
    var container = document.getElementById("preso");
    if (!container) return;
    var mo = new MutationObserver(onSlideChange);
    mo.observe(container, { childList: true, subtree: true });
    // Chạy ngay lần đầu (nếu slide mặc định đã là trigger)
    onSlideChange();
  });
})();
