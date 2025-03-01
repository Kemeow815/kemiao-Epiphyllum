import Link from "next/link";
import React from "react";
import MyImage from "./myImage";
interface ProfileConfig {
    name: string;
    bio: string;
    image: string;
}
const config: ProfileConfig = {
    name: "Masttf",
    bio: "Acmer",
    image: "/avatar.jpg",
};
export default function Profile() {
    return (
        <>
            <div className="card-base p-4 -z-10">
                <Link
                    href="/about"
                    className="group block relative mx-auto mt-1 lg:mx-0 lg:mt-0 mb-3
                    max-w-[12rem] lg:max-w-none overflow-hidden rounded-xl active:scale-95 shadow-md"
                >
                    <MyImage
                        src="/avatar.jpg"
                        alt="Profile Image of the Author"
                        className="mx-auto lg:w-full h-full lg:mt-0 object-cover object-center"
                    />
                </Link>
                <div className="px-2">
                    <div className="font-bold text-xl text-center mb-1 dark:text-neutral-50 transition">
                        {config.name}
                    </div>
                    <div className="h-1 w-5 bg-sky-500 mx-auto rounded-full mb-2 transition"></div>
                    <div className="text-center text-neutral-400 mb-2.5 transition">
                        {config.bio}
                    </div>
                    <div className="flex gap-2 justify-center mb-1"></div>
                </div>
            </div>
        </>
    );
}
