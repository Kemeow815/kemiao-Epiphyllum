import React from "react";
import { BlogData } from "@/utils/posts";
import ArchiveCreate from "@/components/ArchiveCreate";
import { getAllSortedPosts } from "@/utils/getData";
export const dynamicParams = false; // 禁用动态参数（纯静态生成）
export const revalidate = 3600; // ISR 配置（单位：秒）
export async function generateStaticParams() {
    const posts: BlogData[] = await getAllSortedPosts();
    const uniqueTags = Array.from(
        new Set(
            posts.flatMap(
                (post) => post.tags?.filter(Boolean) || [] // 过滤空标签
            )
        )
    );
    return uniqueTags.map((tag) => ({ slug: tag }));
}
export default async function page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const decodedslug = decodeURIComponent(slug);
    const posts = await getAllSortedPosts();
    const tagPosts = posts.filter((post) => post.tags?.includes(decodedslug));
    return <ArchiveCreate posts={tagPosts}></ArchiveCreate>;
}
