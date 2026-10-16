# ALSVID 官网首屏动画 V3

独立保存 ALSVID 官网现有首屏动画，供后续官网开发和移植使用。

## 预览

下载仓库后，直接用浏览器打开 `index.html`。无需安装依赖、启动服务或联网。

保留的效果：

- FOLDING / CITY / FAT TIRE / TOURING 四场景轮播，每 6 秒切换。
- 渐变背景淡入淡出和鼠标视差。
- 文案依次上浮、自行车从右侧滑入。
- 按你提供的自行车参考图重新调整车轮尺寸、车架比例、折叠铰链、集成电池、中置电机、前叉、车把与传动结构。
- 手动切换场景、进度条、向下箭头动画。
- 移动端样式和减少动态效果偏好支持。

本演示仅包含首屏。导航、Dealer、Discover ALSVID 和向下箭头保留视觉外观，不连接其他业务区块。

## 文件

- `index.html`：独立 HTML/CSS/JavaScript 首屏演示，含鼠标骑行速度交互。
- `source/hero.tsx`：原始 React 首屏组件。
- `source/bike-vector.tsx`：参考图比例优化后的可动画 SVG 自行车组件。
- `source/home.module.css`：原首页完整 CSS 快照，包含首屏以外的样式，供参考。

`source/` 是原始源码存档，保留原项目导入路径，不是可直接运行的 React 工程。独立预览请使用根目录的 `index.html`。

来源：[ALSVID](https://github.com/jinfenghua1990/ALSVID)，原路径为 `apps/web/app/_components/home/` 和 `apps/web/app/home.module.css`。保存日期：2026-10-16。

## V3 交互规则

- 鼠标持续移动：车轮与曲柄快速转动，同时整车进入快速骑行节奏并显示轻微速度线。
- 鼠标停止约 180ms：自动恢复慢速巡航。
- 鼠标离开首屏：立即恢复慢速并清除视差。
- 支持 `prefers-reduced-motion` 无障碍降级。


## 本次优化

- 以用户提供的自行车图片为视觉参考，重新校正 20" 轮径与车架几何比例。
- 保持 SVG，可继续做车轮、曲柄和整车动效，不把带背景的 JPG 直接塞进官网。
- 独立预览 `index.html` 已同步同一套车架几何和鼠标加速逻辑。
