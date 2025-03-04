import { getAllPosts, getPostById } from "@/utils/posts";
import { BlogPost } from "@/utils/posts";
import Link from "next/link";
import { postMeta } from "@/components/postcard";
import ContentWrapper from "@/components/contentWrapper";
export const dynamicParams = false; // 禁用动态参数（纯静态生成）
export const revalidate = 3600; // ISR 配置（单位：秒）

export default async function Post({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const post: BlogPost = await getPostById(id);
    return (
        <div className="card-base p-8 divide-y divide-dashed">
            <div className="pl-6 md:pl-9 pr-6 md:pr-2 pb-2 relative -left-8">
                <div className="flex gap-4 relative -left-6 mb-3">
                    <div className="h-6 w-1 relative top-[6px] bg-sky-500 mx-auto rounded-full transition"></div>
                    <div className=" w-full font-bold text-3xl transition line-clamp-2">
                        {post.title}
                    </div>
                </div>

                {postMeta({
                    published: post.date,
                    category: post.category,
                    tags: post.tags,
                })}
            </div>
            <ContentWrapper content={post.contentHtml} className="pt-2"></ContentWrapper>
        </div>
    );
}
export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map((post) => ({ id: post.id }));
}
