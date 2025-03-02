import { getAllPosts, getPostById } from "@/utils/posts";
import { BlogPost } from "@/utils/posts";
import { format } from 'date-fns';
export const dynamicParams = false; // 禁用动态参数（纯静态生成）
export const revalidate = 3600; // ISR 配置（单位：秒）
export default async function Post({ params }: { params: { id: string } }) {
    const post: BlogPost = await getPostById(params.id);
    return (
        <div className="card-base p-8">
            <h1>{post.title}</h1>
            <p>{format(post.date, 'yyyy-MM-dd')}</p>
            <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </div>
    );
}
export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map((post) => ({ id: post.id }));
}
