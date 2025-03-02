import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
const postsDirectory = path.join(process.cwd(), 'src/data/posts')

export interface BlogPost {
    id: string;
    contentHtml: string;
    title: string;
    date: string;
    description?: string;
    category? :string[];
    tags?: string[];
}
export async function getAllPosts() {
    const fileNames = fs.readdirSync(postsDirectory);

    const allPostsData = await Promise.all(
        fileNames.map(async (fileName) => {
            const id = fileName.replace(/\.md$/, "");
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");

            // 解析 frontmatter
            const matterResult = matter(fileContents);

            // 转换 Markdown 为 HTML
            const processedContent = await unified()
                .use(remarkParse) // 解析 Markdown
                .use(remarkRehype) // 转换 Markdown 为 HTML AST
                .use(rehypeHighlight, {
                    // 代码高亮
                    ignoreMissing: true, // 忽略未知语言不报错
                    aliases: { javascript: ["js"] }, // 语言别名
                })
                .use(rehypeStringify) // 序列化 HTML AST 为字符串
                .process(matterResult.content);
            const contentHtml = processedContent.toString();

            return {
                id,
                contentHtml,
                ...(matterResult.data as {
                    title: string;
                    date: string;
                    description?: string;
                    category? :string[];
                    tags?: string[];
                }),
            };
        })
    );

    return allPostsData.sort((a, b) => {
        return a.date < b.date ? 1 : -1;
    });
}
export async function getPostById(id: string) {
    const decodedId = decodeURIComponent(id)
    const fullPath = path.join(postsDirectory, `${decodedId}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    // 转换 Markdown 为 HTML
    const processedContent = await unified()
        .use(remarkParse) // 解析 Markdown
        .use(remarkRehype) // 转换 Markdown 为 HTML AST
        .use(rehypeHighlight, {
            // 代码高亮
            ignoreMissing: true, // 忽略未知语言不报错
            aliases: { javascript: ["js"] }, // 语言别名
        })
        .use(rehypeStringify) // 序列化 HTML AST 为字符串
        .process(matterResult.content);
    const contentHtml = processedContent.toString();
    return {
        id,
        contentHtml,
        ...(matterResult.data as {
          title: string;
          date: string;
          description?: string;
          category? :string[];
          tags?: string[];
      }),
    };
}
