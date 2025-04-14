module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2, // 2 表示必须符合规则
      'always',
      [
        '✨', // 新功能
        '🐛', // Bug 修复
        '⏪', // 代码合并/拆分
        '📦', // 打包相关
        '🦑', // 样式/功能优化
        // 也可以保留传统类型（可选）
        'feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore'
      ]
    ],
    'subject-case': [0] // 允许任意大小写
  }
};