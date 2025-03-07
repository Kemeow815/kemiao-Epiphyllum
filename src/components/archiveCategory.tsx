"use client";
import { BlogData } from "@/utils/posts";
import ArchiveCreate from "@/components/ArchiveCreate";
import React, { useState } from "react";

export default function ArchiveCategory({
    category,
    count,
    posts,
}: {
    category: string;
    count: number;
    posts: BlogData[];
}) {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div className="flex flex-col mb-4">
            <div className="flex items-center gap-4">
                <div className="transition text-2xl font-bold text-75 cursor-pointer hover:text-sky-500 " onClick={() => setIsVisible(!isVisible)}>
                    {category}
                </div>
                <div className=" transition text-50">{`${count}篇文章`}</div>
                
            </div>
            {isVisible && <ArchiveCreate posts={posts}></ArchiveCreate>}
        </div>
    );
}
