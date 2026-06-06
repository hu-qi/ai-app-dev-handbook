# 工程化与部署

AI 应用能跑起来不难，难的是稳定、可维护、可观测、可扩展。

## 一、工程化目标

上线前至少要解决：

- 鉴权
- 限流
- 日志
- 错误处理
- 成本统计
- Prompt 版本管理
- 模型降级
- 数据权限
- 部署回滚

## 二、推荐架构

```text
Web 前端
  -> API 网关
  -> 业务服务
  -> AI 编排层
  -> 模型网关
  -> 数据库 / 向量库 / 工具系统
  -> 日志与评测平台
```

## 三、模型网关

模型网关负责统一不同模型供应商：

- OpenAI
- Claude
- Gemini
- DeepSeek
- 通义千问
- 智谱
- Moonshot

统一接口后，业务层不需要关心底层模型差异。

## 四、Prompt 管理

Prompt 不应散落在代码里。建议独立管理：

- prompt_id
- version
- scenario
- template
- variables
- owner
- changelog
- evaluation_score

## 五、日志系统

每次 AI 调用都要能追踪：

- 用户是谁
- 用了哪个模型
- 用了哪个 Prompt
- 检索了哪些资料
- 调用了哪些工具
- 花了多少钱
- 用户是否满意

## 六、部署方式

### Vercel

适合前端和文档站部署。

### Docker

适合后端服务和私有化部署。

### Serverless

适合轻量 API，但要注意长连接和流式输出限制。

### 私有化

适合企业内网、敏感数据和合规要求高的场景。

## 七、上线清单

- 环境变量已配置
- API Key 不出现在前端
- Prompt 已版本化
- 日志可查询
- 错误有告警
- 成本有预算
- 高风险工具有人审
- 数据库有备份
- 部署可回滚

## 八、Vercel 部署文档站

本手册使用 VitePress，Vercel 配置：

- Framework Preset：VitePress
- Build Command：npm run build
- Output Directory：docs/.vitepress/dist
- Install Command：npm install

如果 Vercel 未识别项目，请手动填写以上配置。
