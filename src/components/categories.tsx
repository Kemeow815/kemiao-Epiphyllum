import React from "react";
import { getAllCategories } from "@/utils/getData";
import Link from "next/link";
import ScrollBar from "./scrollbar";
export default async function categories() {
    const categories: Array<{
        category: string;
        count: number;
    }> = await getAllCategories();

    return (
        <div className="card-base p-2">
            <div className="text-lg font-bold flex flex-col items-center gap-1 justify-center">
                <Link
                    href={"/archive/categories"}
                    className="hover:text-sky-500"
                >
                    分类
                </Link>
                <div className="w-5 h-1 rounded-md bg-sky-500"></div>
                <ScrollBar
                className="w-full"
                    options={{
                        scrollbars: {
                            theme: "scrollbar-base scrollbar-auto py-1",
                            autoHide: "move",
                            autoHideDelay: 500,
                            autoHideSuspend: false,
                        },
                    }}
                >   
                    <div className="w-full max-h-[94.5px] md:max-h-[108px] transition">

                    {categories.map(({ category, count }) => {
                        return (
                            <Link
                                key={category}
                                href={`/archive/categories/${category}`}
                                className="flex w-full justify-between items-center rounded-lg text-neutral-700 Myhover px-3 py-1 transition"
                            >
                                <div className="font-semibold">{category}</div>
                                <div>
                                    <div className="bg-sky-200 text-sky-500 w-7 h-7 rounded-md flex items-center justify-center">
                                        {count}
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                    </div>
                </ScrollBar>
            </div>
        </div>
    );
}
