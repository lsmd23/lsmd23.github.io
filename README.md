# lsmd23.github.io

这是 [lsmd23](https://github.com/lsmd23) 的个人主页源码，使用 Astro 和 Firefly 构建，计划部署到 GitHub Pages。

## 本地开发

环境要求：Node.js 22 或更高版本、pnpm 9。

```bash
pnpm install
pnpm dev
```

开发服务器默认运行在 `http://localhost:4321`。

## 常用命令

```bash
pnpm check
pnpm build
pnpm preview
```

站点配置位于 `src/config/`，文章位于 `src/content/posts/`，关于页面位于 `src/content/spec/about.md`。

## 部署

仓库内的 GitHub Actions 工作流监听 `master` 分支，将 `dist` 部署到 GitHub Pages。目标仓库应命名为 `lsmd23.github.io`，并在仓库设置中将 Pages 来源设为 GitHub Actions。

## 致谢与许可

本项目基于 [Firefly](https://github.com/CuteLeaf/Firefly) 与 [Fuwari](https://github.com/saicaca/fuwari)。主题代码沿用仓库中的 MIT License；文章和个人素材的许可另行说明。
