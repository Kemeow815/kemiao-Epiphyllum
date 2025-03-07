import { getAllSortedPosts } from "@/utils/getData";
import { BlogData } from "@/utils/posts";
import ArchiveCreate from "@/components/ArchiveCreate";
export default async function Page() {
    const posts:BlogData[] = await getAllSortedPosts();
    return (
        <ArchiveCreate posts={posts}></ArchiveCreate>
    );
}
