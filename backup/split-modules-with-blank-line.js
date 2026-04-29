// split-modules-with-comments.js
const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const generate = require('@babel/generator').default;
const t = require('@babel/types');

// ====== 配置区 (请根据你的实际情况修改) ======
const SOURCE_FILE = './extracted-module.js'; // 你的原始文件名
const OUTPUT_DIR = './modules';          // 拆分后的模块文件存放目录
const NEW_SOURCE_FILE = 'new-modules-source.js'; // 生成的新主文件名
// =============================================

// 确保输出目录存在
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// 读取并解析源文件
const sourceCode = fs.readFileSync(SOURCE_FILE, 'utf8');
const ast = parser.parse(sourceCode, {
  sourceType: 'module',
  // 关键：启用所有注释选项以保留它们
  plugins: ['jsx', 'typescript', 'classProperties', 'objectRestSpread'], // 根据你的代码选择插件
  allowImportExportEverywhere: true,
  allowReturnOutsideFunction: true,
  allowSuperOutsideMethod: true,
  allowUndeclaredExports: true,
  errorRecovery: true,
  createParenthesizedExpressions: true,
});

// 查找 const i = { ... } 这个变量声明
let modulesObject = null;
let modulesDeclarationPath = null;

// 遍历 AST 找到目标对象
function findModulesObject(nodePath) {
  if (t.isVariableDeclaration(nodePath.node)) {
    for (const decl of nodePath.node.declarations) {
      if (
        t.isIdentifier(decl.id) &&
        decl.id.name === 'i' &&
        t.isObjectExpression(decl.init)
      ) {
        modulesObject = decl.init;
        modulesDeclarationPath = nodePath;
        return true; // 找到了，停止遍历
      }
    }
  }
  return false;
}

// 使用递归遍历 AST
function traverse(node, visitor, parentPath = null) {
  const nodePath = { node, parentPath };
  if (visitor(nodePath)) return;

  for (const key in node) {
    if (node[key] && typeof node[key] === 'object') {
      if (Array.isArray(node[key])) {
        for (let i = 0; i < node[key].length; i++) {
          traverse(node[key][i], visitor, nodePath);
        }
      } else {
        traverse(node[key], visitor, nodePath);
      }
    }
  }
}

traverse(ast.program, findModulesObject);

if (!modulesObject) {
  throw new Error(`Could not find 'const i = {{...}}' in ${SOURCE_FILE}`);
}

console.log(`Found 'i' object with ${modulesObject.properties.length} modules.`);

// 存储新生成的 require 语句
const newRequireLines = [];

// 处理每个模块属性
for (const prop of modulesObject.properties) {
  if (t.isObjectProperty(prop)) {
    const moduleId = prop.key.name || prop.key.value; // 处理数字或字符串键
    const factoryFunction = prop.value;

    // 为每个工厂函数创建一个新的 AST: module.exports = (e) => { ... }
    const newAst = t.program([
      t.expressionStatement(
        t.assignmentExpression(
          '=',
          t.memberExpression(t.identifier('module'), t.identifier('exports')),
          factoryFunction
        )
      )
    ]);

    // 使用 Babel Generator 生成代码，并保留注释
    const { code } = generate(newAst, {
      retainLines: true,   // 保留原始行号（有助于调试）
      compact: false,      // 不压缩，保持可读性
      comments: true,      // 关键：保留注释！
      minified: false,
      concise: false,
      jsonCompatibleStrings: false,
      filename: `${moduleId}.js`
    }, sourceCode); // 传入原始源码以关联注释

    // 写入文件
    const moduleFilePath = path.join(OUTPUT_DIR, `${moduleId}.js`);
    fs.writeFileSync(moduleFilePath, code, 'utf8');
    console.log(`✅ Generated: ${moduleFilePath}`);

    // 记录新的 require 语句
    newRequireLines.push(`  ${moduleId}: require('./${OUTPUT_DIR}/${moduleId}.js')`);
  }
}

// 生成新的主文件内容
const newSourceContent = `const i = {\n${newRequireLines.join(',\n')}\n};`;

fs.writeFileSync(NEW_SOURCE_FILE, newSourceContent, 'utf8');
console.log(`✅ Generated new main file: ${NEW_SOURCE_FILE}`);

console.log('\n🎉 All done! Your modules are split and ready to use.');
