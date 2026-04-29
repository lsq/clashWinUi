// fix-requires.js
const fs = require('fs');
const path = require('path');

const modulesDir = path.join(__dirname, 'modules'); // 假设脚本和 modules 同级
const languageRequire = "const { Language, language } = require('../language');\n";
const modifyStateRequire = "const modifyState = require('../modifyState');\n";

function shouldAddLanguage(content) {
  return /new\s+Language\b/.test(content) || /\blanguage\s*\(/.test(content);
}

function shouldAddModifyState(content) {
  return /\bmodifyState\.\b/.test(content);
}

function hasRequire(content, pattern) {
  return content.includes(pattern.trim());
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  let needsLanguage = shouldAddLanguage(content) && !hasRequire(content, languageRequire);
  let needsModifyState = shouldAddModifyState(content) && !hasRequire(content, modifyStateRequire);

  if (!needsLanguage && !needsModifyState) {
    return; // 无需修改
  }

  // 构建新的头部
  let newHeader = '';
  if (needsLanguage) newHeader += languageRequire;
  if (needsModifyState) newHeader += modifyStateRequire;

  // 查找已有 require 语句的结束位置（简单策略：插在顶部或第一个非注释/空行之后）
  const lines = content.split('\n');
  let insertIndex = 0;

  // 跳过注释和空行（简单处理）
  while (insertIndex < lines.length) {
    const line = lines[insertIndex].trim();
    if (line === '' || line.startsWith('//') || line.startsWith('/*') || line.startsWith('*')) {
      insertIndex++;
    } else {
      break;
    }
  }

  // 如果第一行就是代码（非 require），就插在最前面
  if (insertIndex === 0 || !lines[insertIndex].includes('require')) {
    lines.splice(insertIndex, 0, ...newHeader.trim().split('\n'));
  } else {
    // 否则找到最后一个连续的 require 块末尾
    while (insertIndex < lines.length && lines[insertIndex].includes('require')) {
      insertIndex++;
    }
    lines.splice(insertIndex, 0, ...newHeader.trim().split('\n'));
  }

  const newContent = lines.join('\n');
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`✅ Updated: ${filePath}`);
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walk(fullPath);
    } else if (file.endsWith('.js')) {
      processFile(fullPath);
    }
  }
}

walk(modulesDir);
console.log('🔍 扫描并修复完成！');
