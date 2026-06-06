# 项目四：多 Agent 研究助手

多 Agent 研究助手适合资料收集、竞品分析、技术调研、行业研究和报告生成。它的核心不是堆多个角色，而是让不同 Agent 有明确分工和交付边界。

## 一、项目目标

构建一个能围绕研究主题自动拆解问题、收集资料、分析观点、生成报告并自检的研究助手。

## 二、Agent 分工

### Planner Agent

负责拆解研究主题，生成研究大纲和子问题。

### Researcher Agent

负责围绕子问题收集资料摘要，记录来源和关键观点。

### Analyst Agent

负责归纳差异、趋势、风险和机会。

### Critic Agent

负责检查报告是否遗漏重点、是否有无依据结论、是否结构混乱。

### Writer Agent

负责生成最终报告。

## 三、流程设计

```text
用户输入研究主题
  -> Planner 拆解问题
  -> Researcher 收集资料
  -> Analyst 归纳分析
  -> Critic 审核
  -> Writer 输出报告
```

## 四、状态管理

每个 Agent 的输出都应保存为结构化状态：

- task_id
- agent_name
- input
- output
- sources
- confidence
- next_action
- created_at

## 五、停止条件

为了避免无限循环，需要明确停止条件：

- 最大轮数
- 最大工具调用次数
- 最大成本
- Critic 评分达到阈值
- 用户手动停止

## 六、报告结构

推荐输出：

1. 摘要
2. 背景
3. 关键发现
4. 对比分析
5. 风险与限制
6. 建议
7. 参考资料

## 七、失败模式

- Agent 之间重复工作
- Researcher 只收集单一观点
- Analyst 编造因果关系
- Critic 只做形式检查
- Writer 把不确定结论写得过于肯定

## 八、验收标准

- 每个结论有资料支撑
- 能展示中间过程
- Critic 能发现明显问题
- 用户可以中途调整研究方向
- 成本和轮数可控
