import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { createProcessor } from "../config/markdownConfig";

export interface TocItem {
    depth: number;
    text: string;
    id: string;
}
export interface BlogData {
    slug: string;
    contentHtml: string;
    toc: TocItem[];
    title: string;
    date: Date;
    description: string;
    category: string;
    top: number;
    tags: string[];
    image?: string;
}

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
        toc: (processedContent.data as any).toc || [],
        ...(matterResult.data as {
            title: string;
            description: string;
            category: string;
            top: number;
            tags: string[];
            image?: string;
        }),
        date: new Date(matterResult.data.date),
    };
}

let cacheBlogData: BlogData[] | null = null;
export async function getAllSortedPosts() {
    if (cacheBlogData) return cacheBlogData;
    const postsDirectory = path.join(process.cwd(), "src/data/posts");
    const fileNames = fs.readdirSync(postsDirectory);
    const truefileNames = fileNames.filter((fileName) => {
        if (fileName.endsWith(".mdx") || fileName.endsWith(".md")) {
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const matterResult = matter(fileContents);
            return matterResult.data.draft !== true;
        }
    });
    const allPostsData = await Promise.all(
        truefileNames.map(async (fileName) => {
            return await processMarkdown(postsDirectory, fileName);
        })
    );
    cacheBlogData = allPostsData.sort((a, b) => {
        if (a.top !== b.top) {
            return b.top - a.top;
        } else {
            const timeA = a.date.getTime();
            const timeB = b.date.getTime();
            return timeB - timeA;
        }
    });
    return cacheBlogData;
}
export async function getPostBySlug(slug: string) {
    const postsDirectory = path.join(process.cwd(), "src/data/posts");
    return processMarkdown(postsDirectory, `${slug}.md`);
}
let cacheCategories: Array<{
    category: string;
    count: number;
}> | null = null;
export async function getAllCategories() {
    if (cacheCategories) return cacheCategories;
    const Categories = new Map<string, number>();
    const BlogData = (await getAllSortedPosts()) as BlogData[];
    BlogData.forEach((Blog) => {
        if (Categories.has(Blog.category)) {
            Categories.set(Blog.category, Categories.get(Blog.category)! + 1);
        } else {
            Categories.set(Blog.category, 1);
        }
    });
    cacheCategories = Array.from(Categories.entries()).map(
        ([category, count]) => {
            return {
                category,
                count,
            };
        }
    );
    cacheCategories.sort((a, b) => {
        return b.count - a.count;
    });
    return cacheCategories;
}

let cacheTags: Array<string> | null = null;
export async function getAllTags() {
    if (cacheTags) return cacheTags;
    const Tags = new Map<string, number>();
    const BlogData = (await getAllSortedPosts()) as BlogData[];
    BlogData.forEach((Blog) => {
        Blog.tags.map((tag) => {
            if (Tags.has(tag)) {
                Tags.set(tag, Tags.get(tag)! + 1);
            } else {
                Tags.set(tag, 1);
            }
        });
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
    cacheTags = tempTags.map(({ tag, count }) => tag);
    return cacheTags;
}

let cachePostSlugToId: Map<string, number> | null = null;
export async function getPostSlugToId() {
    if (cachePostSlugToId) return cachePostSlugToId;
    const BlogDatas = (await getAllSortedPosts()) as BlogData[];
    const map = new Map<string, number>();
    BlogDatas.forEach((Blog, index) => {
        map.set(Blog.slug, index);
    });
    cachePostSlugToId = map;
    return cachePostSlugToId;
}
let cachePostIdToSlug: Map<number, string> | null = null;
export async function getPostIdToSlug() {
    if (cachePostIdToSlug) return cachePostIdToSlug;
    const BlogDatas = (await getAllSortedPosts()) as BlogData[];
    const map = new Map<number, string>();
    BlogDatas.forEach((Blog, index) => {
        map.set(index, Blog.slug);
    });
    cachePostIdToSlug = map;
    return cachePostIdToSlug;
}
