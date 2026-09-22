# 田朵朵 · 个人作品与履历

网站：<https://jonatl5.github.io/>

以展览图录为视觉线索的中文个人网站，包含六个代表项目、可展开的案例详情、工作方式、个人介绍、教育与工作经历、研究成果、联系方式，以及原版简历与作品集下载。

## 内容与文件

- `index.html`：首页内容、经历、联系及下载区。
- `styles.css`：蓝白视觉、桌面与手机布局、项目弹窗样式。
- `app.js`：六个项目的详细内容、项目弹窗与微信复制功能。
- `assets/images/`：从个人作品集提取并优化的图片，来源见 `ASSETS.md`。
- `assets/documents/`：原版简历与完整作品集 PDF。
- `.nojekyll`：让 GitHub Pages 直接发布静态网页。

## 维护

修改首页文字时编辑 `index.html`；修改项目详情时编辑 `app.js` 中的 `projects`。替换 PDF 时保留原文件名，下载链接即可继续使用。新增图片应使用相对路径并提供有意义的替代文字。

无需安装依赖或构建。本地可使用任意静态文件服务器预览，也可以双击 `index.html` 查看（微信复制需 HTTPS 或 localhost 环境）。

提交到 `main` 后，GitHub Pages 自动发布。设置为 **Deploy from a branch → main → / (root)**，发布记录见仓库 Actions。

项目详情支持键盘打开、Esc 关闭、焦点管理和浏览器前进/后退，也可通过 `#project-guangdong` 等链接直接访问。页面尊重系统的“减少动态效果”设置。
