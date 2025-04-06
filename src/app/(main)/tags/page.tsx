import { getAllTags } from "@/utils/getData";
import { Metadata } from "next";
import { TagItem } from "@/components/tag";
export const metadata: Metadata = {
    title: "Tags - Blog",
    description: "Tags - A list of all tags",
    keywords: [...(await getAllTags())],
};
export default async function page() {
    const Tags = await getAllTags();
    return (
        <div className="card-base px-8 py-6">
            <div className="mx-auto text-center text-3xl font-bold mb-4">
                Tags
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-4">
                {Tags.map((tag, index) => {
                    return <TagItem key={index} tag={tag} index={index} />;
                })}
            </div>
        </div>
    );
}
