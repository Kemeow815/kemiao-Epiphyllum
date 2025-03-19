import React from "react";
const currentYear = new Date().getFullYear();
import Link from "next/link";
export default function footer() {
    return (
        <>
            <div className="border-t border-black/10  my-10 border-dashed mx-32"></div>
            <div className="border-dashed  rounded-2xl mb-12 flex flex-col items-center justify-center px-6">
                <div className="text-50 text-sm text-center">
                    &copy; <span>{currentYear}</span> Masttf. All Rights
                    Reserved.
                    <br />
                    Powered by
                    <Link
                        className="hover:bg-sky-300 text-sky-500 font-semibold p-1 rounded-md transition"
                        target="_blank"
                        href="https://zh-hans.react.dev/"
                    >
                        React
                    </Link>{" "}
                    &
                    <Link
                        className="hover:bg-sky-300 text-sky-500 font-semibold p-1 rounded-md transition"
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
