import React from "react";
import { linkList } from "@/config/config";
import Link from "next/link";
export default function MobileMenu({
    handleClick,
}: {
    handleClick: () => void;
}) {
    return (
        <div className="fixed top-20 rounded-[1rem] w-40 shadow-lg flex flex-col gap-1 p-4 z-30 overflow-visible bg-white">
            {linkList.map((item, index) => (
                <div
                    key={index}
                    className="flex justify-between Myhover rounded-md py-2 px-3 text-lg font-bold cursor-pointer"
                    onClick={handleClick}
                >
                    <Link href={item.url}>{item.name}</Link>
                    <svg
                        height="1em"
                        width="1em"
                        viewBox="0 0 24 24"
                        className="text-[1.5rem] text-sky-500"
                    >
                        <use href="#ai:material-symbols:chevron-right-rounded"></use>
                    </svg>
                </div>
            ))}
        </div>
    );
}
