import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { createProcessor } from "../config/markdownConfig";
const postsDirectory = path.join(process.cwd(), "src/data/posts");

export interface BlogData {
    slug: string;
    contentHtml: string;
    title: string;
    date: Date;
    description: string;
    category: string;
    tags?: string[];
}
async function processMarkdown(fileName: string) {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    const processedContent = await createProcessor().process(
        matterResult.content
    );
    return {
        slug,
        contentHtml: processedContent.toString(),
        ...(matterResult.data as {
            title: string;
            description: string;
            category: string;
            tags?: string[];
        }),
        date: new Date(matterResult.data.date),
    };
}
export async function getAllPosts() {
    const fileNames = fs.readdirSync(postsDirectory);

    const allPostsData = await Promise.all(
        fileNames.map(async (fileName) => {
            return processMarkdown(fileName);
        })
    );
    return allPostsData;
}
export async function getPostById(slug: string) {
    const decodedId = decodeURIComponent(slug);
    return processMarkdown(`${decodedId}.md`);
}
