import React from "react";
import { BlogData } from "@/utils/posts";
function formatDate(date: Date) {
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${month}-${day}`;
}

function formatTag(tag: string[] = [""]) {
    return tag.map((t) => `#${t}`).join(" ");
}
export default function ArchiveCreate({
    posts
}: {
    posts : BlogData[];
}) {
    const groups: { year: number; posts: typeof posts }[] = (() => {
        const groupedPosts = posts.reduce(
            (grouped: { [year: number]: typeof posts }, post) => {
                const year = post.date.getFullYear();
                if (!grouped[year]) {
                    grouped[year] = [];
                }
                grouped[year].push(post);
                return grouped;
            },
            {}
        );

        const groupedPostsArray = Object.keys(groupedPosts).map((key) => ({
            year: Number.parseInt(key),
            posts: groupedPosts[Number.parseInt(key)],
        }));


        groupedPostsArray.sort((a, b) => b.year - a.year);
        return groupedPostsArray;
    })();
    return (
        <div className="card-base px-8 py-6">
            {groups.map((group) => (
                <div key={group.year}>
                    <div className="flex flex-row w-full items-center h-[3.75rem]">
                        <div className="w-[15%] md:w-[10%] transition text-2xl font-bold text-right text-75">
                            {group.year}
                        </div>
                        <div className="w-[15%] md:w-[10%]">
                            <div className="h-3 w-3 bg-none rounded-full outline outline-[var(--primary)] mx-auto -outline-offset-[2px] z-50 outline-3"></div>
                        </div>
                        <div className="w-[70%] md:w-[80%] transition text-left text-50">
                            {group.posts.length} {"篇文章"}
                        </div>
                    </div>
                    {group.posts.map((post) => (
                        <a
                            href={`/post/${post.slug}`}
                            key={post.slug}
                            className="group btn-plain !block h-10 w-full rounded-lg hover:text-[initial]"
                        >
                            <div className="flex flex-row justify-start items-center h-full">
                                <div className="w-[15%] md:w-[10%] transition text-sm text-right text-50">
                                    {formatDate(post.date)}
                                </div>

                                <div className="w-[15%] md:w-[10%] relative dash-line h-full flex items-center">
                                    <div
                                        className="transition-all mx-auto w-1 h-1 rounded group-hover:h-5
                                bg-[oklch(0.5_0.05_var(--hue))] group-hover:bg-[var(--primary)]
                                outline outline-4 z-50
                                outline-[var(--card-bg)]
                                group-hover:outline-[var(--btn-plain-bg-hover)]
                                group-active:outline-[var(--btn-plain-bg-active)]
                                "
                                    ></div>
                                </div>
                                <div
                                    className="w-[70%] md:max-w-[65%] md:w-[65%] text-left font-bold
                                group-hover:translate-x-1 transition-all group-hover:text-[var(--primary)]
                                text-75 pr-8 whitespace-nowrap overflow-ellipsis overflow-hidden"
                                >
                                    {post.title}
                                </div>
                                <div
                                    className="hidden md:block md:w-[15%] text-left text-sm transition
                            whitespace-nowrap overflow-ellipsis overflow-hidden
                            text-30"
                                >
                                    {formatTag(post.tags)}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            ))}
        </div>
    );
}
