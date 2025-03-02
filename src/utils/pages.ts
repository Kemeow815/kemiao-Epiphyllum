import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { console } from "inspector";
const postsDirectory = path.join(process.cwd(), 'src/data/posts')

const pageSize : number = 10;
export interface PageContent {
    id: string;
    title: string;
    date: Date;
    description: string;
    category :string;
    tags?: string[];
}
let cachedMxPage: number | null = null
export async function getMxPage() {
    if (cachedMxPage !== null) return cachedMxPage;
    console.log("getMxPage");
    const fileNames = fs.readdirSync(postsDirectory);
    cachedMxPage = Math.ceil(fileNames.length / pageSize);
    return cachedMxPage;
}
export async function getAllPage() {
    const fileNames = fs.readdirSync(postsDirectory);
    cachedMxPage = Math.ceil(fileNames.length / pageSize);
    const allPostsData = await Promise.all(
        fileNames.map(async (fileName) => {
            const id = fileName.replace(/\.md$/, "");
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            // 解析 frontmatter
            const matterResult = matter(fileContents);
            return {
                id,
                ...(matterResult.data as {
                    title: string;
                    description: string;
                    category :string;
                    tags?: string[];
                }),
                date : new Date(matterResult.data.date),
            };
        })
    );
    allPostsData.sort((a, b) => {
        const timeA = a.date.getTime()
        const timeB = b.date.getTime()
        return timeB - timeA
    });
    
    const allPageData = Array.from({ length: cachedMxPage }, (_, index) => ({
        id: index + 1,
        content: allPostsData.slice(index * pageSize, (index + 1) * pageSize)
    }));
    return allPageData;
}
export async function getPageById(id: number) {
    const allPageData = getAllPage();
    return (await allPageData)[id - 1];
}
