import React from "react";
import { BlogData } from "@/utils/getData";
import ArchiveCreate from "@/components/ArchiveCreate";
import { getAllSortedPosts } from "@/utils/getData";
import type { Metadata, ResolvingMetadata } from "next";
export const dynamicParams = false; // 禁用动态参数（纯静态生成）
// export const revalidate = 3600; // ISR 配置（单位：秒）
type Props = {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { slug } = await params;
    const decodedslug = decodeURIComponent(slug);

    return {
        title: `${decodedslug} - Tag - Blog`,
        description: `${decodedslug} - Tag - Blog`,
    };
}
export async function generateStaticParams() {
    const posts: BlogData[] = await getAllSortedPosts();
    const uniqueTags = Array.from(
        new Set(
            posts.flatMap(
                (post) => post.tags.filter(Boolean) || [] // 过滤空标签
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
    const tagPosts = posts.filter((post) => post.tags.includes(decodedslug));
    return (
        <div className="card-base px-8 py-6">
            <div className="mx-auto text-center text-3xl font-bold">
                {decodedslug}
            </div>
            <ArchiveCreate posts={tagPosts}></ArchiveCreate>
        </div>
    );
}
