import { getAllSortedPosts } from "@/utils/getData";
import { BlogData } from "@/utils/posts";
import ArchiveCreate from "@/components/ArchiveCreate";
export default async function Page() {
    const posts: BlogData[] = await getAllSortedPosts();
    return (
        <div className="card-base px-8 py-6">
            <div className="mx-auto text-center text-3xl font-bold mb-4">Archive</div>
            <ArchiveCreate posts={posts}></ArchiveCreate>
        </div>
    );
}
