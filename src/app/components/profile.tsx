import Link from "next/link";
import React from "react";
import Image from "next/image";
interface ProfileConfig{
    name: string,
    bio: string,
    image: string,
}
const config : ProfileConfig= {
    name : "Masttf",
    bio : "Acmer",
    image : "/avatar.jpg",
}
export default function Profile() {
  return (
    <>
        <div className="card-base p-3 w-64 rounded-[--rounded-large]">
            <Link aria-label="Go to About Page" href="/about"
            className="rounded-xl active:scale-95 w-64 h-64" >
                <img src="/avatar.jpg" alt="Profile Image of the Author" className="w-64 h-64 rounded-[var(--rounded-large)] shadow-md"/>
            </Link>
            <div className="px-2">
                <div className="font-bold text-xl text-center mb-1 dark:text-neutral-50 transition">{config.name}</div>
                {/* <div className="h-1 w-5 bg-[var(--primary)] mx-auto rounded-full mb-2 transition"></div> */}
                <div className="text-center text-neutral-400 mb-2.5 transition">{config.bio}</div>
                <div className="flex gap-2 justify-center mb-1">
                </div>
            </div>
        </div>
    </>
  );
}