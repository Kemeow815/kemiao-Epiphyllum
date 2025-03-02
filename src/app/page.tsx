import PageCreate from "@/components/pageCreate";
import { getAllPosts } from "@/utils/posts";
export default async function Home() {
    const posts = await getAllPosts();
    return (
        <PageCreate blogList={posts} id={1}></PageCreate>
    );
}
