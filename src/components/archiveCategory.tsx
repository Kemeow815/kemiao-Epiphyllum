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
        <div className="flex flex-col mb-4 ">
            <div className="flex items-center gap-4">
                <div className="transition group text-2xl font-bold text-75">
                    {category}
                    <span className="ml-4 transition text-50 text-base font-normal">{`${count}篇文章`}</span>        
                </div>
                <button className="h-7 w-7 bg-gray-200 rounded-md font-bold hover:bg-gray-500 hover:text-white"  onClick={() => setIsVisible(!isVisible)}>{isVisible ? '-' : '+'}</button>
            </div>
            {isVisible && <ArchiveCreate posts={posts}></ArchiveCreate>}
        </div>
    );
}
