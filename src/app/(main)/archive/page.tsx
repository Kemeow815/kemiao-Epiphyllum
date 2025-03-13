import { getAllSortedPosts } from "@/utils/getData";
import { BlogData } from "@/utils/getData";
import ArchiveCreate from "@/components/ArchiveCreate";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Archive - Blog",
    description: "Archive - Blog",
};
export default async function Page() {
    const posts: BlogData[] = await getAllSortedPosts();
    return (
        <div className="card-base px-8 py-6">
            <div className="mx-auto text-center text-3xl font-bold">
                Archive
            </div>
            <ArchiveCreate posts={posts}></ArchiveCreate>
        </div>
    );
}
