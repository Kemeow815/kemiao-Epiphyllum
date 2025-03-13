import { getAllCategories } from "@/utils/getData";
import { getAllSortedPosts } from "@/utils/getData";
import ArchiveCategory from "@/components/archiveCategory";
import { BlogData } from "@/utils/getData";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Categories - Blog",
    description: "Categories",
};
export default async function page() {
    const categories = await getAllCategories();
    const posts = await getAllSortedPosts();

    const groups = new Map<string, BlogData[]>();
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        const key = post.category;
        if (groups.has(key)) {
            groups.get(key)!.push(post);
        } else {
            groups.set(key, [post]);
        }
    }

    return (
        <div className="card-base px-9 py-6">
            <div className="mx-auto text-center text-3xl font-bold mb-4">
                Categories
            </div>
            {categories.map(({ category, count }) => {
                return (
                    <ArchiveCategory
                        key={category}
                        category={category}
                        count={count}
                        posts={groups.get(category)!}
                    ></ArchiveCategory>
                );
            })}
        </div>
    );
}
