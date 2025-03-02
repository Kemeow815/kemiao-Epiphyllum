import React, { Fragment } from "react";
import Link from "next/link";
import { BlogPost } from "@/utils/posts";
function postMeta({
    published,
    category,
    tags,
}: {
    published: string;
    category: string;
    tags?: string[];
}) {
    return (
        <div className="flex flex-wrap text-neutral-500 items-center gap-4 gap-x-4 gap-y-2 mb-2">
            <div className="flex items-center">
                <span className=" text-sm font-medium">{published}</span>
            </div>

            <div className="flex items-center">
                <div className="flex flex-row flex-nowrap items-center">
                    <Link
                        href={`/archive/category/${category}`}
                        className="text-sm font-medium rounded-md p-1 whitespace-nowrap Myhover block"
                    >
                        {category}
                    </Link>
                </div>
            </div>

            <div className="items-center flex">
                <div className="flex flex-row flex-nowrap items-center">
                    {tags &&
                        tags.length > 0 &&
                        tags.map((tag, i) => (
                            <Fragment key={i}>
                                <div
                                    className={
                                        "mx-1.5 text-sm" +
                                        (i == 0 ? " hidden" : "")
                                    }
                                >
                                    /
                                </div>
                                <Link
                                    href={`/archive/tag/${tag}`}
                                    className="text-50 text-sm font-medium p-1 rounded-md Myhover whitespace-nowrap"
                                >
                                    {tag}
                                </Link>
                            </Fragment>
                        ))}
                    {!(tags && tags.length > 0) && (
                        <div className="transition text-50 text-sm font-medium">
                            noTags
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
export default function postcard(props: BlogPost) {
    return (
        <>
            <div className="card-base flex flex-col-reverse rounded-none first:rounded-t-[var(--rounded-large)] last:rounded-b-[var(--rounded-large)] md:flex-col w-full relative md:rounded-[var(--rounded-large)] ">
                <div className="pl-6 md:pl-9 pr-6 md:pr-2 pt-6 md:pt-7 pb-6 relative ">
                    <Link
                        href={`/post/${props.id}`}
                        className=" w-full block font-bold mb-3 text-3xl 
        hover:text-sky-500"
                    >
                        {props.title}
                    </Link>
                    {postMeta({
                        published: props.date,
                        category: props.category,
                        tags: props.tags,
                    })}
                    <div className="text-75 mb-3.5 pr-4">
                        {props.description}
                    </div>
                </div>
            </div>
            
        </>
    );
}
