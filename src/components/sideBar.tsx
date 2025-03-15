import React from "react";
import Profile from "./profile";
import Categories from "./categories";
import Tag from "./tag";
interface Props {
    className?: string;
}

export default function SideBar(props: Props) {
    return (
        <div className={"flex flex-col gap-4 " + props.className}>
            <div className="flex flex-col">
                <Profile></Profile>
            </div>
            <div className="flex flex-col gap-4 lg:sticky lg:top-[14px]">
                <Categories></Categories>
                <Tag></Tag>
            </div>
        </div>
    );
}
