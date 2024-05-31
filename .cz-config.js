module.exports = {
  types: [
    {
      value: "feat",
      name: "✨ feat:     新功能",
    },
    {
      value: "wip",
      name: "📝 wip:     持续开发中",
    },
    {
      value: "del",
      name: "🗑️ del:     删除代码/文件",
    },
    {
      value: "fix",
      name: "🐛 fix:      修复bug",
    },
    {
      value: "add",
      name: "➕ add:    添加依赖项",
    },
    {
      value: "perf",
      name: "⚡️ perf:     性能优化",
    },
    {
      value: "release",
      name: "🎉 release:  发布正式版",
    },
    {
      value: "style",
      name: "💄 style:    代码的样式美化",
    },
    {
      value: "refactor",
      name: "♻️  refactor: 重构",
    },
    {
      value: "docs",
      name: "✏️  docs:     文档变更",
    },
    {
      value: "test",
      name: "✅ test:     测试",
    },
    {
      value: "revert",
      name: "⏪️ revert:   回退",
    },
    {
      value: "chore",
      name: "🚀 chore:    构建/工程依赖/工具",
    },
    {
      value: "ci",
      name: "👷 ci:       CI related changes",
    },
  ],
  messages: {
    type: "请选择提交类型(必填)",
    customScope: "请输入文件修改范围(可选)",
    subject: "请简要描述提交(必填)",
    body: "请输入详细描述(可选)",
    breaking: "列出任何BREAKING CHANGES(可选)",
    footer: "请输入要关闭的issue(可选)",
    confirmCommit: "确定提交此说明吗？",
  },
  allowCustomScopes: true,
  // 跳过问题
  // skipQuestions: ["body", "footer"],
  // 最大限制
  subjectLimit: 72,
};
