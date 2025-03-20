import React from "react";
import Profile from "./profile";
import Toc from "./Toc";
interface Props {
    className?: string;
    slug: string;
}

export default function PostSideBar(props: Props) {
    return (
        <div className={props.className}>
            <div className="w-full h-full lg:box-border lg:mb-[calc(100vh-28.75rem)]">
                <div className="lg:block lg:sticky lg:top-[0.875rem]">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col">
                            <Profile></Profile>
                        </div>

                        <Toc
                            slug={props.slug}
                            className="hidden lg:block"
                        ></Toc>
                    </div>
                </div>
            </div>
        </div>
    );
}
