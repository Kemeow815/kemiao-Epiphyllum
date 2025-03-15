import React from "react";
import Profile from "./profile";
import Toc from "./Toc";
import NavBar from "./navBar";
interface Props {
    className?: string;
    slug: string;
}

export default function PostSideBar(props: Props) {
    return (
        <div className={"flex flex-col gap-4 " + props.className}>
            <div className="flex flex-col">
                <Profile></Profile>
            </div>
            <div className="hidden lg:block lg:sticky lg:top-[0.875rem]">
                <Toc slug={props.slug}></Toc>
            </div>
        </div>
    );
}
