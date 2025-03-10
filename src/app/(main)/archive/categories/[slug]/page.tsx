import React from "react";
import { BlogData } from "@/utils/posts";
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
        title: `${slug} - Category - Blog`,
        description: `${slug} - Category - Blog`,
    };
}
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
    const CategoriesPosts = posts.filter(
        (post) => post.category === decodedslug
    );
    return (
        <div className="card-base px-8 py-6">
            <div className="mx-auto text-center text-3xl font-bold">
                {decodedslug}
            </div>
            <ArchiveCreate posts={CategoriesPosts}></ArchiveCreate>
        </div>
    );
}
