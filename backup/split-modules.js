// split-modules-with-comments.js (Final Version)
const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const generate = require('@babel/generator').default;
const t = require('@babel/types');

// ====== 配置区 ======
const SOURCE_FILE = './extracted-module.js';
const OUTPUT_DIR = './modules';
const NEW_SOURCE_FILE = 'new-modules-source.js';
// ===================

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const sourceCode = fs.readFileSync(SOURCE_FILE, 'utf8');
const ast = parser.parse(sourceCode, {
  sourceType: 'module',
  plugins: ['jsx', 'typescript', 'classProperties', 'objectRestSpread'],
  allowImportExportEverywhere: true,
  allowReturnOutsideFunction: true,
  allowSuperOutsideMethod: true,
  allowUndeclaredExports: true,
  errorRecovery: true,
  createParenthesizedExpressions: true,
});

let modulesObject = null;

function findModulesObject(nodePath) {
  if (t.isVariableDeclaration(nodePath.node)) {
    for (const decl of nodePath.node.declarations) {
      if (
        t.isIdentifier(decl.id) &&
        decl.id.name === 'i' &&
        t.isObjectExpression(decl.init)
      ) {
        modulesObject = decl.init;
        return true;
      }
    }
  }
  return false;
}

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
  throw new Error(`Could not find 'const i = {...}' in ${SOURCE_FILE}`);
}

console.log(`Found 'i' object with ${modulesObject.properties.length} modules.`);

const newRequireLines = [];

for (const prop of modulesObject.properties) {
  if (t.isObjectProperty(prop)) {
    const moduleId = prop.key.name || prop.key.value;
    const factoryFunction = prop.value;

    // 1. 生成函数代码
    const { code: rawFunctionCode } = generate(factoryFunction, {
      retainLines: false, // 关键：关闭 retainLines 可减少无关换行
      compact: false,
      comments: true,
      minified: false,
      concise: false,
    }, sourceCode);

    // 2. 【关键后处理】清理函数代码开头的多余空行
    //    找到第一个非空白字符的位置
    const firstNonWhitespaceIndex = rawFunctionCode.search(/\S/);
    let cleanedFunctionCode = rawFunctionCode;
    if (firstNonWhitespaceIndex > 0) {
      // 移除开头所有空白字符（包括换行）
      cleanedFunctionCode = rawFunctionCode.substring(firstNonWhitespaceIndex);
    }

    // 3. 手动拼接导出语句
    const finalCode = `module.exports = ${cleanedFunctionCode};`;

    const moduleFilePath = path.join(OUTPUT_DIR, `${moduleId}.js`);
    fs.writeFileSync(moduleFilePath, finalCode, 'utf8');
    console.log(`✅ Generated: ${moduleFilePath}`);

    newRequireLines.push(`  ${moduleId}: require('./${OUTPUT_DIR}/${moduleId}.js')`);
  }
}

const newSourceContent = `const i = {\n${newRequireLines.join(',\n')}\n};`;
fs.writeFileSync(NEW_SOURCE_FILE, newSourceContent, 'utf8');
console.log(`✅ Generated new main file: ${NEW_SOURCE_FILE}`);

console.log('\n🎉 All done! Modules are split and cleaned.');
