/* ============================================================
   ALSVID · 产品中心 — 交互
   ============================================================ */
(function () {
  "use strict";

  var $ = function (s) { return document.querySelector(s); };
  var $$ = function (s) { return Array.prototype.slice.call(document.querySelectorAll(s)); };

  /* ---------------- Toast ---------------- */
  var toastEl = $("#toast");
  var toastTimer = null;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.className = "toast show";
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.className = "toast"; }, 2400);
  }

  /* ---------------- 二级导航 ---------------- */
  $$(".nav-item").forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      $$(".nav-item").forEach(function (n) { n.classList.remove("active"); });
      item.classList.add("active");
      var name = item.getAttribute("data-nav");
      if (name !== "型号") {
        toast("已切换到「" + name + "」（该模块建设中，当前展示型号视图）");
      }
    });
  });

  /* ---------------- 系列筛选 + 搜索 ---------------- */
  var chips = $$(".chip");
  var rows = $$("#modelTable tbody tr[data-series]");
  var cards = $$(".series-card");
  var emptyRow = $("#emptyRow");
  var listCount = $("#listCount");
  var searchInput = $("#searchInput");
  var currentFilter = "ALL";

  function apply() {
    var q = searchInput.value.trim().toUpperCase();
    var visible = 0;

    rows.forEach(function (row) {
      var matchSeries = currentFilter === "ALL" || row.getAttribute("data-series") === currentFilter;
      var matchText = !q || (row.getAttribute("data-search") || "").toUpperCase().indexOf(q) > -1;
      var show = matchSeries && matchText;
      row.hidden = !show;
      if (show) visible++;
    });

    cards.forEach(function (card) {
      var match = currentFilter === "ALL" || card.getAttribute("data-series") === currentFilter;
      card.classList.toggle("dim", !match);
    });

    emptyRow.hidden = visible > 0;
    listCount.textContent = "共 " + visible + " 个型号";
  }

  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      chips.forEach(function (c) { c.classList.remove("active"); });
      chip.classList.add("active");
      currentFilter = chip.getAttribute("data-filter");
      apply();
    });
  });

  searchInput.addEventListener("input", apply);

  /* ---------------- 操作按钮 ---------------- */
  var ACTION_MSG = {
    "import": "已打开型号数据导入：支持 Excel / CSV 批量导入（演示）",
    "new-model": "已打开「新建型号」表单（演示）"
  };
  $$("[data-action]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var msg = ACTION_MSG[btn.getAttribute("data-action")];
      if (msg) toast(msg);
    });
  });

  /* ---------------- 表格行点击 ---------------- */
  rows.forEach(function (row) {
    row.style.cursor = "pointer";
    row.addEventListener("click", function () {
      var name = row.querySelector(".name").textContent;
      toast("打开型号「" + name + "」详情（演示）");
    });
  });

  /* ---------------- 系列卡点击：联动筛选 ---------------- */
  cards.forEach(function (card) {
    card.style.cursor = "pointer";
    card.addEventListener("click", function () {
      var series = card.getAttribute("data-series");
      var target = chips.filter(function (c) { return c.getAttribute("data-filter") === series; })[0];
      if (target) target.click();
    });
  });

  /* ---------------- 快捷键：/ 聚焦搜索 ---------------- */
  document.addEventListener("keydown", function (e) {
    var tag = (e.target.tagName || "").toLowerCase();
    var typing = tag === "input" || tag === "textarea" || tag === "select";
    if (!typing && e.key === "/") {
      e.preventDefault();
      searchInput.focus();
    }
    if (e.key === "Escape") searchInput.blur();
  });
})();
