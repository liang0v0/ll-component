/** `.prettierrc.js` 是 Prettier 代码格式化工具的配置文件，用于统一团队的代码风格。让我详细解释每个配置项：

1. `semi: false`
   - 表示不使用分号作为语句结束符
   - 例如：`const name = 'John'` 而不是 `const name = 'John';`

2. `singleQuote: true`
   - 使用单引号而不是双引号
   - 例如：`const name = 'John'` 而不是 `const name = "John"`

3. `printWidth: 80`
   - 设置每行代码的最大长度为 80 个字符
   - 超过这个长度时，Prettier 会自动换行

4. `trailingComma: 'none'`
   - 不在对象或数组的最后一项后面添加逗号
   - 例如：
       const obj = {
       name: 'John',
       age: 30
     }
     ```
   - 而不是：
     ```javascript
     const obj = {
       name: 'John',
       age: 30,
     }
     ```

5. `arrowParens: 'avoid'`
   - 当箭头函数只有一个参数时，省略括号
   - 例如：`x => x * 2` 而不是 `(x) => x * 2`

这些配置可以帮助团队：
- 保持一致的代码风格
- 减少代码审查时关于格式的讨论
- 提高代码的可读性
- 自动化代码格式化过程

建议在项目中添加这个配置文件，并在编辑器或 IDE 中配置保存时自动格式化，这样可以确保所有团队成员都遵循相同的代码风格规范。
*/
module.exports = {
  semi: false,
  singleQuote: true,
  printWidth: 80,
  trailingComma: 'none',
  arrowParens: 'avoid'
}