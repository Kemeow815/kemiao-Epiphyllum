import React from "react";
import { BlogData } from "@/utils/posts";
import ArchiveCreate from "@/components/ArchiveCreate";
import { getAllSortedPosts } from "@/utils/getData";
export async function generateStaticParams() {
    const posts: BlogData[] = await getAllSortedPosts();
    const uniqueCategories = Array.from(
        new Set(posts.map((post) => post.category).filter(Boolean))
    );

    return uniqueCategories.map((category) => ({
        slug: category,
    }));
}
export default async function page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const decodedslug = decodeURIComponent(slug);
    const posts = await getAllSortedPosts();
    const CategoriesPosts = posts.filter((post) => post.category === decodedslug);
    return <ArchiveCreate posts={CategoriesPosts}></ArchiveCreate>;
}
