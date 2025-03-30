import type { MetadataRoute } from "next";
import { WebUrl } from "@/config/config";
import { getAllSortedPosts } from "@/utils/getData";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const posts = await getAllSortedPosts();
    return [
        {
            url: WebUrl,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
        },
        ...posts.map((post) => ({
            url: `${WebUrl}/post/${post.slug}`,
            lastModified: new Date(),
            changeFrequency: "daily" as const,
            priority: 0.8,
        })),
    ];
}
