import { getAllSortedPosts } from "@/utils/getData";
import { BlogData } from "@/utils/getData";
import ArchiveCreate from "@/components/ArchiveCreate";
import { Metadata } from "next";
import { profileConfig } from "@/config/config";
export const metadata: Metadata = {
    title: "Archive - Blog",
    description: "Archive - Blog",
    keywords: ["Archive", "Blog", profileConfig.name],
};
export default async function Page() {
    const posts: BlogData[] = await getAllSortedPosts();
    const sortedPosts = [...posts].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB.getTime() - dateA.getTime();
    });
    return (
        <div className="card-base px-8 py-6">
            <div className="mx-auto text-center text-3xl font-bold">
                Archive
            </div>
            <ArchiveCreate posts={sortedPosts}></ArchiveCreate>
        </div>
    );
}
