# 学习路线

这套手册的目标不是让你记住一堆概念，而是让你能真正做出可上线、可维护、可变现的 AI 应用。

## 八周学习路线

### 第 1 周：建立 AI 应用开发全景认知

你需要先弄清楚 AI 应用和传统应用的差别。传统应用的核心是确定性业务逻辑，AI 应用的核心是让模型在约束下完成不确定任务。因此，你要同时关注模型能力、上下文、工具、数据、评测和用户体验。

产出物：

- 一张 AI 应用架构图
- 一个最小聊天 Demo
- 一份常见模型能力对比表

### 第 2 周：掌握大模型 API 与 Prompt 工程

重点掌握消息结构、流式输出、结构化输出、错误重试、Token 成本和 Prompt 版本管理。

产出物：

- 一个支持流式响应的对话接口
- 一个可复用 Prompt 模板库
- 一个 JSON 输出校验示例

### 第 3 周：完成 RAG 知识库基础版

RAG 是最适合业务落地的 AI 应用形态之一。你需要掌握文档解析、切分、Embedding、向量检索、引用溯源和答案生成。

产出物：

- 一个 Markdown / PDF 知识库问答 Demo
- 一套 Chunk 切分策略
- 一个带引用来源的问答页面

### 第 4 周：优化 RAG 效果

基础 RAG 容易出现召回不准、上下文污染、回答幻觉等问题。你需要加入 Query Rewrite、Hybrid Search、Rerank、Prompt Grounding 和评测集。

产出物：

- 一个 RAG 评测表
- 一个多路召回流程
- 一套失败案例分析记录

### 第 5 周：工具调用与工作流

当模型需要访问外部系统时，就需要 Tool Calling。你要学会定义工具、校验参数、执行工具、处理异常，并用工作流约束执行顺序。

产出物：

- 一个天气 / 数据查询工具调用 Demo
- 一个多步骤工作流
- 一个工具调用日志面板

### 第 6 周：Agent 与多 Agent 协作

Agent 的重点不是“让模型自由发挥”，而是设计任务边界、状态流转、工具权限和停止条件。

产出物：

- 一个研究助手 Agent
- 一个任务拆解 + 执行 + 审核的多 Agent 流程
- 一份 Agent 失败模式清单

### 第 7 周：工程化与部署

AI 应用上线后，真正的问题才开始：成本、延迟、限流、日志、权限、数据安全、用户反馈和版本迭代。

产出物：

- Docker 部署方案
- API Key 管理方案
- 成本与调用日志表

### 第 8 周：产品化与商业化

把 Demo 做成产品，需要场景聚焦、定价、试用机制、交付 SOP 和增长页面。

产出物：

- 一个 AI SaaS 落地页
- 一套会员权益设计
- 一份企业交付方案

## 推荐技术栈

### 文档站

- VitePress
- Markdown
- Vercel
- GitHub Actions 可选

### 前端

- Next.js 或 Vue
- Tailwind CSS
- shadcn/ui 或 Naive UI
- SSE / WebSocket 流式输出

### 后端

- Node.js / Python
- FastAPI / Hono / NestJS
- PostgreSQL
- Redis
- BullMQ / Celery

### AI 能力层

- OpenAI / Claude / Gemini
- DeepSeek / 通义千问 / 智谱 / Moonshot
- LangChain / LlamaIndex / Dify / Coze / LangGraph
- pgvector / Milvus / Qdrant / Elasticsearch

## 学习原则

1. 每个概念都必须落到一个可运行案例。
2. 每个案例都必须能解释架构、数据流和失败模式。
3. 每个 Demo 都要思考如何上线、收费和维护。
4. 不迷信 Agent，先用确定性工作流解决 80% 的问题。
