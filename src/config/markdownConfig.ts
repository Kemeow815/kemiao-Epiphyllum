import { unified } from 'unified'
import type { PluggableList } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeShiki  from '@shikijs/rehype'
import rehypeStringify from 'rehype-stringify'
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeComponents from "rehype-components"; 
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import remarkDirective from "remark-directive";
import remarkGithubAdmonitionsToDirectives from "remark-github-admonitions-to-directives";
import remarkMath from "remark-math";
import remarkSectionize from "remark-sectionize";
import { AdmonitionComponent } from "../plugins/rehype-component-admonition.mjs";
import { GithubCardComponent } from "../plugins/rehype-component-github-card.mjs";
import { parseDirectiveNode } from "../plugins/remark-directive-rehype.js";
// 配置类型定义
interface MarkdownConfig {
  remarkPlugins: PluggableList
  rehypePlugins: PluggableList
}

export const markdownConfig: MarkdownConfig = {
    remarkPlugins: [
        remarkMath,
        remarkGithubAdmonitionsToDirectives,
        remarkDirective,
        remarkSectionize,
        parseDirectiveNode,
      ],
      rehypePlugins: [
        rehypeKatex,
        rehypeSlug,
        [
          rehypeComponents,
          {
            components: {
              github: GithubCardComponent,
              note: (x : any, y : any) => AdmonitionComponent(x, y, "note"),
              tip: (x : any, y : any) => AdmonitionComponent(x, y, "tip"),
              important: (x : any, y : any) => AdmonitionComponent(x, y, "important"),
              caution: (x : any, y : any) => AdmonitionComponent(x, y, "caution"),
              warning: (x : any, y : any) => AdmonitionComponent(x, y, "warning"),
            },
          },
        ],
        [
          rehypeAutolinkHeadings,
          {
            behavior: "append",
            properties: {
              className: ["anchor"],
            },
            content: {
              type: "element",
              tagName: "span",
              properties: {
                className: ["anchor-icon"],
                "data-pagefind-ignore": true,
              },
              children: [
                {
                  type: "text",
                  value: "#",
                },
              ],
            },
          },
        ],
        [
          rehypeShiki,
          {
            themes: { 
              light: "github-dark",
              dark: "github-dark" 
            },
            defaultLanguage: 'text',
          }
        ],
      ],
}



export const createProcessor = () => 
  unified()
    .use(remarkParse)
    .use(markdownConfig.remarkPlugins)
    .use(remarkRehype)
    .use(markdownConfig.rehypePlugins)
    .use(rehypeStringify)