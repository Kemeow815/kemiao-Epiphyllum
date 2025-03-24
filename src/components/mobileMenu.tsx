"use client";
import React from "react";
import { linkList } from "@/config/config";
import Link from "next/link";
import { useEffect } from "react";
export default function MobileMenu({
    handleClick,
}: {
    handleClick: () => void;
}) {
    useEffect(() => {
        document.addEventListener("click", handleClick);
        window.addEventListener("scroll", handleClick);
        return () => {
            window.removeEventListener("scroll", handleClick);
            document.removeEventListener("click", handleClick);
        };
    }, []);
    return (
        <div className="fixed top-20 rounded-[1rem] w-40 shadow-lg flex flex-col gap-1 p-4 z-30 overflow-visible bg-white">
            {linkList.map((item, index) => (
                <Link
                    key={index}
                    href={item.url}
                    className="flex justify-between Myhover rounded-lg py-2 px-3 text-base font-bold cursor-pointer"
                >
                    <div>{item.name}</div>
                    <svg
                        height="1em"
                        width="1em"
                        viewBox="0 0 24 24"
                        className="text-[1.5rem] text-sky-500"
                    >
                        <use href="#ai:material-symbols:chevron-right-rounded"></use>
                    </svg>
                </Link>
            ))}
        </div>
    );
}
