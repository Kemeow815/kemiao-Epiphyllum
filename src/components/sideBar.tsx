import React from "react";
import Profile from "./profile";
import Categories from "./categories";
import Tag from "./tag";
interface Props {
    className?: string;
}

export default function SideBar(props: Props) {
    return (
        <div className="flex flex-col gap-2">
            <div className={props.className + " w-full"}>
                <div className="flex flex-col w-full gap-4">
                    <Profile></Profile>
                </div>
            </div>
            <div
                className="transition-all duration-700 flex flex-col w-full gap-4 sticky top-4"
            >
                <Categories
                    className="onload-animation"
                    style={{"animation-delay" : "150ms"}}
                ></Categories>
                <Tag
                    className="onload-animation"
                    style={{"animation-delay" : "200ms"}}
                ></Tag>
            </div>
        </div>
    );
}
