import Link from "next/link";
import React from "react";
import MyImage from "./myImage";
import { profileConfig } from "@/config/config";
export default function Profile() {
    return (
        <div className="card-base p-4">
            <Link
                href="/about"
                className="group block relative mx-auto mt-1 lg:mx-0 lg:mt-0 mb-3
                    max-w-[12rem] lg:max-w-none overflow-hidden rounded-xl active:scale-95 shadow-md"
            >
                <MyImage
                    src={profileConfig.imageSrc}
                    alt="Profile Image of the Author"
                    className="mx-auto aspect-square lg:w-full h-full lg:mt-0 object-cover object-center"
                />
            </Link>
            <div className="px-2">
                <div className="font-bold text-xl text-center mb-1 dark:text-neutral-50 transition">
                    {profileConfig.name}
                </div>
                <div className="h-1 w-5 bg-sky-500 mx-auto rounded-full mb-2 transition"></div>
                <div className="text-center text-neutral-400 mb-2.5 transition">
                    {profileConfig.bio}
                </div>
                <div className="flex gap-2 justify-center mb-1"></div>
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
                <Link
                    href="https://github.com/Masttf"
                    target="_blank"
                    className="btn-regular rounded-lg h-10 gap-2 px-3 font-bold active:scale-95"
                >
                    <svg
                        className="text-[1.5rem]"
                        data-icon="fa6-brands:github"
                        height="1em"
                        viewBox="0 0 512 512"
                        width="1em"
                    >
                        <use href="#ai:fa6-brands:github"></use>
                    </svg>
                </Link>

                <Link
                    href="https://space.bilibili.com/158090842"
                    target="_blank"
                    className="btn-regular rounded-lg h-10 gap-2 px-3 font-bold active:scale-95"
                >
                    <svg
                        className="text-[1.5rem]"
                        data-icon="fa6-brands:bilibili"
                        height="1em"
                        width="1em"
                        viewBox="0 0 512 512"
                    >
                        <use href="#ai:fa6-brands:bilibili"></use>
                    </svg>
                </Link>
            </div>
        </div>
    );
}
