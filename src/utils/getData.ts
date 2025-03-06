import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { createProcessor } from "../config/markdownConfig";
import { BlogData } from "./posts";

export async function processMarkdown(filepath: string, fileName: string) {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(filepath, fileName);
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

let cacheBlogData: BlogData[] | null = null;
export async function getAllSortedPosts() {
    if (cacheBlogData) return cacheBlogData;
    const postsDirectory = path.join(process.cwd(), "src/data/posts");
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = await Promise.all(
        fileNames.map(async (fileName) => {
            return await processMarkdown(postsDirectory, fileName);
        })
    );
    cacheBlogData = allPostsData.sort((a, b) => {
        const timeA = a.date.getTime();
        const timeB = b.date.getTime();
        return timeB - timeA;
    });
    return cacheBlogData;
}
let cacheCategories : Array<{
    category : string,
    count : number
}> | null = null;
export async function getAllCategories() {
    if (cacheCategories) return cacheCategories;
    const Categories = new Map<string, number>();
    const BlogData = await getAllSortedPosts() as BlogData[];
    BlogData.forEach((Blog) => {
        if (Categories.has(Blog.category)) {
            Categories.set(Blog.category, Categories.get(Blog.category)! + 1);
        } else {
            Categories.set(Blog.category, 1);
        }
    });
    cacheCategories = Array.from(Categories.entries()).map(([category, count]) => {
        return {
            category,
            count,
        };
    });
    cacheCategories.sort((a, b) => {
        return b.count - a.count;
    });
    return cacheCategories;
}

let cacheTags : Array<string> | null = null;
export async function getAllTags() {
    if (cacheTags) return cacheTags;
    const Tags = new Map<string, number>();
    const BlogData = await getAllSortedPosts() as BlogData[];
    BlogData.forEach((Blog) => {
        Blog.tags?.map(tag => {
            if (Tags.has(tag)) {
                Tags.set(tag, Tags.get(tag)! + 1);
            } else {
                Tags.set(tag, 1);
            }
        })
    });
    const tempTags = Array.from(Tags.entries()).map(([tag, count]) => {
        return {
            tag,
            count,
        };
    });
    tempTags.sort((a, b) => {
        return b.count - a.count;
    });
    cacheTags = tempTags.map(({tag, count}) => tag);
    return cacheTags;
}
