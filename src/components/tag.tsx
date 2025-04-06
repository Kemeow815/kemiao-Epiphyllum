import React from "react";
import Link from "next/link";
import Marquee from "./marquee";
import { cn } from "@/utils/cn";
import { getAllTags } from "@/utils/getData";
export default async function tag() {
    const TagData: Array<string> = await getAllTags();
    const length = TagData.length;
    const num = Math.floor(length / 3);
    const TagsList = [
        TagData.slice(0, num),
        TagData.slice(num, num * 2),
        TagData.slice(num * 2, length),
    ];
    return (
        <div className="card-base p-2">
            <div className="text-lg font-bold flex flex-col items-center gap-1 justify-center">
                <Link href={"/tags"} className="hover:text-sky-500">
                    标签
                </Link>
                <div className="w-5 h-1 rounded-md bg-sky-500"></div>
                <div className="relative overflow-hidden w-full px-3">
                    {TagsList.map((tags, index) => {
                        return (
                            <Marquee
                                key={index}
                                pauseOnHover={true}
                                reverse={index === 1}
                            >
                                {tags.map((tag, i) => {
                                    return (
                                        <TagItem
                                            key={i}
                                            tag={tag}
                                            index={i + index * num}
                                        />
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
export function TagItem({ tag, index }: { tag: string; index: number }) {
    const colorMap = [
        { bg: "bg-sky-100", text: "text-sky-600", border: "border-sky-300" },
        { bg: "bg-red-100", text: "text-red-600", border: "border-red-300" },
        {
            bg: "bg-yellow-100",
            text: "text-yellow-600",
            border: "border-yellow-300",
        },
        {
            bg: "bg-green-100",
            text: "text-green-600",
            border: "border-green-300",
        },
        {
            bg: "bg-purple-100",
            text: "text-purple-600",
            border: "border-purple-300",
        },
        { bg: "bg-pink-100", text: "text-pink-600", border: "border-pink-300" },
        {
            bg: "bg-orange-100",
            text: "text-orange-600",
            border: "border-orange-300",
        },
        { bg: "bg-teal-100", text: "text-teal-600", border: "border-teal-300" },
        { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-300" },
    ];
    const color = colorMap[index % colorMap.length];
    const { bg: bgColor, text: textColor, border: borderColor } = color;
    return (
        <Link
            aria-label={tag}
            href={`/tags/${tag}`}
            className={cn(
                "text-sm border border-solid flex items-center justify-center font-light h-8 px-3 rounded-md backdrop-blur hover:scale-105",
                bgColor,
                textColor,
                borderColor
            )}
        >
            {tag}
        </Link>
    );
}
