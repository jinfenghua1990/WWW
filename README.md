# ALSVID 官网首屏动画

独立保存 ALSVID 官网现有首屏动画，供后续官网开发和移植使用。

## 预览

下载仓库后，直接用浏览器打开 `index.html`。无需安装依赖、启动服务或联网。

保留的效果：

- FOLDING / CITY / FAT TIRE / TOURING 四场景轮播，每 6 秒切换。
- 渐变背景淡入淡出和鼠标视差。
- 文案依次上浮、自行车从右侧滑入。
- 车轮持续旋转，鼠标悬停首屏时加速。
- 手动切换场景、进度条、向下箭头动画。
- 移动端样式和减少动态效果偏好支持。

本演示仅包含首屏。导航、Dealer、Discover ALSVID 和向下箭头保留视觉外观，不连接其他业务区块。

## 文件

- `index.html`：从原组件提取的独立 HTML/CSS/JavaScript 演示。
- `source/hero.tsx`：原始 React 首屏组件。
- `source/bike-vector.tsx`：原始自行车 SVG 组件。
- `source/home.module.css`：原首页完整 CSS 快照，包含首屏以外的样式，供参考。

`source/` 是原始源码存档，保留原项目导入路径，不是可直接运行的 React 工程。独立预览请使用根目录的 `index.html`。

来源：[ALSVID](https://github.com/jinfenghua1990/ALSVID)，原路径为 `apps/web/app/_components/home/` 和 `apps/web/app/home.module.css`。保存日期：2026-10-16。
