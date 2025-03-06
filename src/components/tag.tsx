import React from "react";
import Link from "next/link";
import Marquee from "./marquee";
import { getAllTags } from "@/utils/getData";
export default async function tag() {
    const TagData: Array<string> = await getAllTags();
    let length = TagData.length;
    const TagsList = [
        TagData.slice(0, length / 3),
        TagData.slice(length / 3, (length / 3) * 2),
        TagData.slice((length / 3) * 2, length),
    ];
    return (
        <div className="card-base p-2">
            <div className="text-lg font-bold flex flex-col items-center gap-1 justify-center">
                <Link href={"/archive/tags"} className="hover:text-sky-500">
                    标签
                </Link>
                <div className="w-5 h-1 rounded-md bg-sky-500"></div>
                <div className="relative overflow-hidden w-full px-3">
                    {TagsList.map((tags, index) => {
                        console.log((index === 1));
                        return (
                            <Marquee key={index} pauseOnHover={true}>
                                {tags.map((tag) => {
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
                            </Marquee>
                        );
                    })}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
                </div>
            </div>
        </div>
    );
}
