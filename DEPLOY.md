# 部署说明

## 一、Vercel 导入部署

1. 打开 Vercel Dashboard
2. New Project
3. Import Git Repository
4. 选择 `hu-qi/ai-app-dev-handbook`
5. 使用以下配置：

- Framework Preset: Other
- Root Directory: 留空
- Build Command: `cd docs && npm install && npm run build`
- Output Directory: `docs/.vitepress/dist`

仓库已包含 `vercel.json`，正常情况下 Vercel 会自动读取构建命令和输出目录。

## 二、本地预览

```bash
cd docs
npm install
npm run dev
```

## 三、生产构建

```bash
cd docs
npm install
npm run build
npm run preview
```

## 四、后续优化建议

- 增加代码示例仓库
- 增加项目架构图
- 增加更多国产大模型接入教程
- 增加 RAG 与 Agent 的可运行 Demo
- 增加付费课程落地页或会员体系页面
