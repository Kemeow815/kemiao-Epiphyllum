import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { console } from "inspector";
const postsDirectory = path.join(process.cwd(), 'src/data/posts')

const pageSize : number = 10;
export interface PageContent {
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
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            // 解析 frontmatter
            const matterResult = matter(fileContents);
            return {
                ...(matterResult.data as {
                    title: string;
                    date: Date;
                    description: string;
                    category :string;
                    tags?: string[];
                }),
            };
        })
    );
    allPostsData.sort((a, b) => {
        return a.date < b.date ? 1 : -1;
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
