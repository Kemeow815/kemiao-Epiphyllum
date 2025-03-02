import Postcard from "@/components/postcard";
import { getAllPosts } from "@/utils/posts";
import { BlogPost } from "@/utils/posts";
import Link from "next/link";
export async function generateStaticParams() {
    return []; // 空数组表示所有页面都需要静态生成
}
export default async function Home() {
    const posts: BlogPost[] = await getAllPosts();
    return (
        <div className="flex flex-col  divide-y divide-dashed md:gap-4 md:divide-none">
            {posts.map((post: BlogPost) => {
                return (
                    <Postcard key={post.id} {...post}></Postcard>
                );
            })}
        </div>
    );
}
