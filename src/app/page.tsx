import { getAllPosts } from "@/utils/posts";
import { BlogPost } from "@/utils/posts";
import Link from "next/link";
export async function generateStaticParams() {
    return []; // 空数组表示所有页面都需要静态生成
}
export default async function Home() {
    const posts: BlogPost[] = await getAllPosts();
    return (
        <div className="flex flex-col gap-4">
            {posts.map((post: BlogPost) => {
                return (
                    <div
                        key={post.id}
                        className="flex w-full rounded-[var(--radius-large)] relative min-h-32"
                    >
                        <div className="card-base z-10 px-9 py-6 relative w-full ">
                            <Link href={`/post/${post.id}`}>{post.title}</Link>
                            <p>{post.date}</p>
                            <p>{post.description}</p>
                            {post.tags && (
                                <div className="flex flex-row gap-4">
                                    {post.tags.map((tag: string) => {
                                        return (
                                            <div key={tag} className="tag-base">
                                                {tag}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
