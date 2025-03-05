import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { createProcessor } from "../config/markdownConfig";
const postsDirectory = path.join(process.cwd(), "src/data");
export async function processMarkdown(fileName: string) {
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
