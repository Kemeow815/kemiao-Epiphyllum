import { visit } from 'unist-util-visit';
import {h} from 'hastscript';

export function rehypeWrapperSpan() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (
        node.tagName === 'pre' && 
        node.children?.[0]?.tagName === 'code'
      ) {
        const codeNode = node.children[0];
        codeNode.children = [
          h('span', codeNode.children) 
        ];
      }
    });
  };
}