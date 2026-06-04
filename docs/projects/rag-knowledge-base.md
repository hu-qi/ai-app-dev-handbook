# 项目一：企业知识库问答系统

企业知识库问答是最容易落地的 AI 应用之一，适合制度查询、产品资料问答、客服知识库、技术文档助手和内部培训。

## 一、项目目标

实现一个可以上传文档、自动建立索引、基于资料回答问题并展示引用来源的知识库系统。

## 二、核心功能

- 文档上传
- 文档解析
- 文本切分
- Embedding 入库
- 相似度检索
- Rerank 可选
- 答案生成
- 引用来源
- 用户反馈
- 调用日志

## 三、推荐技术栈

前端：Next.js 或 Vue

后端：FastAPI / NestJS / Hono

数据库：PostgreSQL + pgvector

文件存储：S3 / OSS / 本地对象存储

模型：OpenAI、DeepSeek、通义千问、智谱均可

## 四、数据流

```text
用户上传文档
  -> 文档解析
  -> 文本清洗
  -> Chunk 切分
  -> Embedding
  -> 向量库
用户提问
  -> Query Rewrite
  -> 检索 TopK
  -> 组装上下文
  -> 模型回答
  -> 返回引用来源
```

## 五、数据表设计

### documents

- id
- title
- file_url
- file_type
- status
- created_at

### chunks

- id
- document_id
- content
- page
- heading
- embedding
- metadata

### qa_logs

- id
- question
- answer
- hit_chunks
- model
- prompt_version
- latency
- created_at

## 六、Prompt 模板

```text
你是企业知识库问答助手。
请严格基于给定资料回答用户问题。
如果资料中没有答案，请说“根据当前资料无法确定”。
回答后列出引用来源。

资料：
{context}

问题：
{question}
```

## 七、最小版本实现

MVP 只需要支持 Markdown 文档即可。先不要急着支持所有格式，先把检索、回答和引用链路跑通。

第一版任务：

1. 上传 Markdown
2. 按标题切分
3. 调用 Embedding
4. 存入向量库
5. 用户提问
6. 检索 Top 5
7. 调用模型回答
8. 展示引用 Chunk

## 八、优化方向

- 支持 PDF、Word、Excel
- 引入 Hybrid Search
- 加入 Rerank
- 加入权限过滤
- 加入文档自动同步
- 加入用户反馈闭环
- 加入评测集

## 九、验收标准

- 能正确回答至少 80% 的测试问题
- 每个答案都有引用来源
- 无资料时不编造
- 响应时间控制在 5 秒内
- 每次问答可追溯
