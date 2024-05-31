1. npm install --save-dev husky
2. npx husky init
3. npm install --save-dev @commitlint/config-conventional @commitlint/cli



依赖

"husky"
"@commitlint/cli"
"@commitlint/config-conventional"
"commitizen"
"commitlint"
"commitlint-config-cz"
"cz-conventional-changelog"
"cz-customizable"

1. 安装husky 并初始化 在package.json 中 创建  "prepare": **"**husky install**"** 并执行 创建.husky 文件

2. 在.husky 下 新建 commit-msg 文件 写入 npx --no-install commitlint --edit "$1"

3. 安装 npm i commitlint @commitlint/config-conventional -D 检查工具 并新建 配置文件 

   1. echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js

4. npm i commitizen cz-conventional-changelog -D 安装自动提示插件

   1. 新建 脚本 commit : "git-cz"
   2. 初始化 npx commitizen init cz-conventional-changelog --save-dev --save-exact   

5. npm i -D commitlint-config-cz  cz-customizable 安装 自定义commit 插件

6. 新建.cz-config.js

   1. ~~~json
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
      
      ~~~

7. 最后使用 pnpm run commit 即可
