import React from "react";
import Link from "next/link";
import { profileConfig } from "@/config/config";
const currentYear = new Date().getFullYear();
export default function footer() {
    return (
        <>
            <div className="border-t border-black/10  my-10 border-dashed mx-32"></div>
            <div className="border-dashed  rounded-2xl mb-12 flex flex-col items-center justify-center px-6">
                <div className="text-50 text-sm text-center">
                    &copy; <span>{currentYear}</span>
                    {` ${profileConfig.name}. All Rights
                    Reserved.`}
                    <span> /</span>
                    <Link
                        className="text-sky-500 font-semibold px-1 mylink-underline"
                        target="_blank"
                        href="/sitemap.xml"
                    >
                        Sitemap
                    </Link>
                    <br />
                    Powered by
                    <Link
                        className="text-sky-500 font-semibold px-1 mylink-underline"
                        target="_blank"
                        href="https://zh-hans.react.dev/"
                    >
                        React
                    </Link>{" "}
                    &
                    <Link
                        className="text-sky-500 font-semibold px-1 mylink-underline"
                        target="_blank"
                        href="https://github.com/Masttf/Epiphyllum"
                    >
                        Epiphyllum
                    </Link>
                </div>
            </div>
        </>
    );
}
