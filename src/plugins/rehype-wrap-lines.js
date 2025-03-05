import { visit } from 'unist-util-visit';
import {h} from 'hastscript';

// 分割代码行工具函数
function splitCodeLines(children) {
  const lines = [];
  let currentLine = [];

  children.forEach(child => {
    if (child.type === 'text') {
      const parts = child.value.split(/(\n)/g); // 用捕获组保留换行符
      
      parts.forEach((part, i) => {
        currentLine.push({ 
            type: 'text', 
            value: part 
          });
        if (part === '\n') {
          lines.push(currentLine);
          currentLine = [];
        }
      });
    } else {
      currentLine.push(child);
    }
  });

  if (currentLine.length > 0) {
    lines.push(currentLine);
  }

  return lines;
}

// 插件主逻辑
export function rehypeWrapLines() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (
        node.tagName === 'pre' && 
        node.children?.[0]?.tagName === 'code'
      ) {
        const codeNode = node.children[0];
        const lines = splitCodeLines(codeNode.children);
        
        // 保留原有 code 标签的所有属性
        codeNode.children = lines.map(lineChildren => 
          h('span.line', lineChildren)
        );
      }
    });
  };
}