import { getAllTags } from "@/utils/getData";
import Link from "next/link";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Tags - Blog",
    description: "Tags - A list of all tags",
};
export default async function page() {
    const Tags = await getAllTags();
    return (
        <div className="card-base px-8 py-6">
          <div className="mx-auto text-center text-3xl font-bold mb-4">Tags</div>
            <div className="flex flex-wrap gap-2">
                {Tags.map((tag) => {
                    return (
                        <Link
                            key={tag}
                            href={`/archive/tags/${tag}`}
                            className="shadow-md text-sm flex items-center justify-center font-thin h-8 px-3 bg-sky-200 rounded-md border-solid  text-sky-600 text-center hover:bg-sky-300"
                        >
                            {tag}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
