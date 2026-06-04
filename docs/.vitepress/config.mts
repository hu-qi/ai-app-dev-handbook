export default {
  title: 'AI 应用开发实战手册',
  description: '从 Prompt 到 Agent 产品化的原创系列教程',
  lang: 'zh-CN',
  themeConfig: {
    nav: [
      { text: '开始学习', link: '/guide/' },
      { text: '项目实战', link: '/projects/rag-knowledge-base' }
    ],
    sidebar: [
      { text: '入门篇', items: [
        { text: '学习路线', link: '/guide/' },
        { text: 'AI 应用开发全景图', link: '/guide/01-overview' },
        { text: '大模型 API 基础', link: '/guide/02-llm-api' },
        { text: 'Prompt 工程', link: '/guide/03-prompt-engineering' }
      ]},
      { text: '核心能力篇', items: [
        { text: 'RAG 知识库', link: '/guide/04-rag' },
        { text: '工具调用', link: '/guide/05-tool-calling' },
        { text: 'Agent 工作流', link: '/guide/06-agent-workflow' },
        { text: '评测与可观测性', link: '/guide/07-evaluation-observability' }
      ]},
      { text: '项目实战篇', items: [
        { text: '企业知识库问答', link: '/projects/rag-knowledge-base' },
        { text: 'AI 客服机器人', link: '/projects/ai-customer-service' },
        { text: 'AI 数据分析助手', link: '/projects/ai-data-analyst' },
        { text: '多 Agent 研究助手', link: '/projects/multi-agent-researcher' }
      ]},
      { text: '产品化篇', items: [
        { text: '工程化与部署', link: '/product/engineering-deployment' },
        { text: '商业化与增长', link: '/product/commercialization' }
      ]}
    ],
    search: { provider: 'local' }
  }
}
