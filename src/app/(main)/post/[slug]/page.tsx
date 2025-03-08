import { getAllPosts, getPostById } from "@/utils/posts";
import { BlogData } from "@/utils/posts";
import { postMeta } from "@/components/postcard";
import ContentWrapper from "@/components/contentWrapper";
import type { Metadata, ResolvingMetadata } from "next";
export const dynamicParams = false; // 禁用动态参数（纯静态生成）
export const revalidate = 3600; // ISR 配置（单位：秒）
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
        title: `${slug}`,
        description: `${slug}`,
    };
}

export default async function Post({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    const post: BlogData = await getPostById(slug);
    return (
        <div className="card-base p-8 divide-y divide-dashed">
            <div className="relative flex flex-col mb-4">
                    <div className=" w-full font-bold text-3xl transition line-clamp-2 text-center mb-3">
                        {post.title}
                    </div>

                {postMeta({
                    className : "flex justify-center items-center text-neutral-500 gap-x-4", 
                    published: post.date,
                    category: post.category,
                    tags: post.tags,
                })}
            </div>
            <ContentWrapper contentHtml={post.contentHtml} className="pt-2"></ContentWrapper>
        </div>
    );
}
export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map((post) => ({ slug: post.slug }));
}
