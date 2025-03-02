import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { createProcessor } from "./markdown.config";

const postsDirectory = path.join(process.cwd(), "src/data/posts");

export interface BlogPost {
    id: string;
    contentHtml: string;
    title: string;
    date: Date;
    description: string;
    category: string;
    tags?: string[];
}
async function processMarkdown(fileName: string) {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    const processedContent = await createProcessor().process(
        matterResult.content
    );

    return {
        id,
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
export async function getPostById(id: string) {
    const decodedId = decodeURIComponent(id);
    return processMarkdown(`${decodedId}.md`);
}
