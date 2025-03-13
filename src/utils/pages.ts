import { getAllSortedPosts } from "./getData";
const pageSize: number = 10;
export interface PageContent {
    slug: string;
    title: string;
    date: Date;
    description: string;
    category: string;
    tags?: string[];
}
let cachedMxPage: number | null = null;
export async function getMxPage() {
    if (cachedMxPage !== null) return cachedMxPage;
    const tot = (await getAllSortedPosts()).length;
    cachedMxPage = Math.ceil(tot / pageSize);
    return cachedMxPage;
}
export async function getAllPage() {
    const allPagesData = (await getAllSortedPosts()).map((post) => ({
        slug: post.slug,
        title: post.title,
        date: post.date,
        description: post.description,
        category: post.category,
        tags: post.tags,
    }));

    const allPageData = Array.from(
        { length: await getMxPage() },
        (_, index) => ({
            id: index + 1,
            content: allPagesData.slice(
                index * pageSize,
                (index + 1) * pageSize
            ),
        })
    );
    return allPageData;
}
export async function getPageById(id: number) {
    const allPageData = getAllPage();
    return (await allPageData)[id - 1];
}
