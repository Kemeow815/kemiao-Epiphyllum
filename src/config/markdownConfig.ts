import { unified } from "unified";
import type { PluggableList } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeShiki from "@shikijs/rehype";
import rehypeStringify from "rehype-stringify";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeComponents from "rehype-components";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import remarkDirective from "remark-directive";
import remarkGithubAdmonitionsToDirectives from "remark-github-admonitions-to-directives";
import remarkMath from "remark-math";
import rehypeRaw from "rehype-raw";
import remarkSectionize from "remark-sectionize";
import { AdmonitionComponent } from "@/plugins/rehype-component-admonition.mjs";
import { GithubCardComponent } from "@/plugins/rehype-component-github-card.mjs";
import { parseDirectiveNode } from "@/plugins/remark-directive-rehype.js";
import { rehypeWrapperSpan } from "@/plugins/rehypeWrapperSpan.js";
import { rehypeImage } from "@/plugins/rehypeImage.js";
import { tocExtractor } from "@/plugins/toc-extractor";
// 配置类型定义
interface MarkdownConfig {
    remarkPlugins: PluggableList;
    rehypePlugins: PluggableList;
}

export const markdownConfig: MarkdownConfig = {
    remarkPlugins: [
        remarkMath,
        remarkGfm,
        remarkGithubAdmonitionsToDirectives,
        remarkDirective,
        remarkSectionize,
        parseDirectiveNode,
    ],
    rehypePlugins: [
        rehypeRaw,
        rehypeKatex,
        rehypeSlug,
        tocExtractor,
        [
            rehypeComponents,
            {
                components: {
                    github: GithubCardComponent,
                    note: (x: any, y: any) => AdmonitionComponent(x, y, "note"),
                    tip: (x: any, y: any) => AdmonitionComponent(x, y, "tip"),
                    important: (x: any, y: any) =>
                        AdmonitionComponent(x, y, "important"),
                    caution: (x: any, y: any) =>
                        AdmonitionComponent(x, y, "caution"),
                    warning: (x: any, y: any) =>
                        AdmonitionComponent(x, y, "warning"),
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
                    light: "github-light",
                    dark: "github-light",
                },
                defaultLanguage: "text",
            },
        ],
        rehypeWrapperSpan,
        rehypeImage,
    ],
};

export const createProcessor = () =>
    unified()
        .use(remarkParse)
        .use(markdownConfig.remarkPlugins)
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(markdownConfig.rehypePlugins)
        .use(rehypeStringify);
