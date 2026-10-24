/* ============================================================
   ALSVIN 运营后台 — 交互脚本
   ============================================================ */
(function () {
  "use strict";

  var $ = function (sel) { return document.querySelector(sel); };
  var $$ = function (sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); };

  /* ---------------- Toast ---------------- */
  var toastEl = $("#toast");
  var toastTimer = null;
  function toast(msg, type) {
    toastEl.textContent = msg;
    toastEl.className = "toast show" + (type ? " " + type : "");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toastEl.className = "toast";
    }, 2600);
  }

  /* ---------------- SKU 库存检索 ---------------- */
  var skuInput = $("#skuInput");
  var stockTable = $("#stockTable");
  var rows = $$("#stockTable tbody tr[data-sku]");
  var emptyRow = $("#emptyRow");
  var tableCount = $("#tableCount");

  function filterTable() {
    var q = skuInput.value.trim().toUpperCase();
    var visible = 0;
    rows.forEach(function (row) {
      var hit = !q || row.getAttribute("data-sku").indexOf(q) > -1;
      row.hidden = !hit;
      if (hit) visible++;
    });
    emptyRow.hidden = visible > 0;
    tableCount.textContent = "共 " + visible + " 条记录 · 显示第 1 - " + visible + " 条";
  }

  skuInput.addEventListener("input", filterTable);
  $("#skuQueryBtn").addEventListener("click", function () {
    filterTable();
    var q = skuInput.value.trim();
    if (q) {
      toast("已按 SKU「" + q + "」过滤库存记录");
    }
  });

  /* ---------------- 数量步进器 ---------------- */
  var qtyVal = $("#qtyVal");
  $$(".step-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var delta = parseInt(btn.getAttribute("data-step"), 10);
      var next = Math.max(1, Math.min(99, parseInt(qtyVal.textContent, 10) + delta));
      qtyVal.textContent = next;
    });
  });

  /* ---------------- 表单提交（演示交互） ---------------- */
  $("#priceForm").addEventListener("submit", function (e) {
    e.preventDefault();
    toast("价格配置已保存：将同步至官网及 B2C 渠道", "success");
  });

  $("#draftForm").addEventListener("submit", function (e) {
    e.preventDefault();
    toast("内部订单草稿已创建，可在订单列表中查看", "success");
  });

  $("#resetDraftBtn").addEventListener("click", function () {
    qtyVal.textContent = "1";
    toast("表单已重置");
  });

  /* ---------------- 通用动作（演示提示） ---------------- */
  var ACTION_MSG = {
    "new-product": "已打开「新建商品发布」流程（演示）",
    "batch-price": "已打开「批量价格设置」（演示）",
    "export-report": "库存报表导出任务已加入队列（演示）",
    "guide": "已打开发布指南文档（演示）",
    "view-detail": "正在打开 FC1 Carbon Fold 商品详情…（演示）",
    "view-stock": "正在打开 SKU 库存明细…（演示）",
    "lang": "语言切换：中文 / English（演示）",
    "prev": "当前已是第一页",
    "next": "当前已是最后一页"
  };

  $$("[data-action]").forEach(function (el) {
    el.addEventListener("click", function (e) {
      if (el.tagName === "A") e.preventDefault();
      var msg = ACTION_MSG[el.getAttribute("data-action")];
      if (msg) toast(msg, el.getAttribute("data-action") === "next" || el.getAttribute("data-action") === "prev" ? "warn" : "");
    });
  });

  /* ---------------- 通知按钮 ---------------- */
  $("#notifyBtn").addEventListener("click", function () {
    this.classList.toggle("read");
    toast(this.classList.contains("read") ? "通知已全部标记为已读" : "有 1 条未读通知：CT1-EU-GRAY 库存预警");
  });

  /* ---------------- 快捷键：K 打开指令面板（聚焦全局搜索） ---------------- */
  document.addEventListener("keydown", function (e) {
    var tag = (e.target.tagName || "").toLowerCase();
    var typing = tag === "input" || tag === "select" || tag === "textarea";
    if (!typing && (e.key === "k" || e.key === "K")) {
      e.preventDefault();
      $("#globalSearch").focus();
    }
    if (e.key === "Escape") {
      $("#globalSearch").blur();
      skuInput.blur();
    }
  });

  /* ---------------- 底部状态条：同步时间 ---------------- */
  function pad(n) { return n < 10 ? "0" + n : n; }
  function tick() {
    var d = new Date();
    var t = pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds());
    $("#syncTime").textContent = t;
  }
  tick();
  setInterval(tick, 1000);

  /* ---------------- 侧栏导航切换（演示） ---------------- */
  $$(".nav-item:not(.disabled)").forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      $$(".nav-item").forEach(function (n) { n.classList.remove("active"); });
      item.classList.add("active");
      var name = item.querySelector("span").textContent;
      toast("已切换到「" + name + "」模块（当前版本聚焦官网商品发布）");
    });
  });
})();
