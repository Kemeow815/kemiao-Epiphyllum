import React, { Fragment } from "react";
import Link from "next/link";
import { format } from "date-fns";
import { PageContent } from "@/utils/pages";
import Image from "next/image";
export default function postcard(props: PageContent) {
    return (
        <div className="card-base flex flex-col sm:flex-row md:justify-between rounded-none first:rounded-t-2xl last:rounded-b-2xl w-full relative md:rounded-2xl">
            {props.image && (
                <Link
                    href={`/post/${props.slug}`}
                    className="flex sm:hidden flex-0 w-full"
                >
                    <div
                        className="overflow-hidden relative w-full h-64 hover:scale-105 transition duration-200"
                        id="ImageCard"
                    >
                        <Image
                            src={props.image}
                            alt=""
                            sizes="100vw"
                            fill
                            quality={100}
                            className={`object-cover object-center`}
                        ></Image>
                    </div>
                </Link>
            )}

            <div className="pl-6 md:pl-9 pr-6 md:pr-2 pt-6 md:pt-7 pb-6 relative flex-1 overflow-hidden">
                {props.top > 0 && (
                    <>
                        <div className="absolute h-16 w-16 z-10 bg-sky-700 -top-8 rotate-45 -left-8"></div>
                        <div className="absolute text-sm font-bold z-10 top-1 left-1 -rotate-45 text-white">
                            TOP
                        </div>
                    </>
                )}
                <div className="flex flex-col space-y-3">
                    <Link
                        href={`/post/${props.slug}`}
                        className="w-full block font-bold text-3xl 
        hover:text-sky-500 transition line-clamp-2 group md:before:block
          before:w-1 before:h-6 before:hidden before:absolute before:left-[18px]
          before:rounded-md before:bg-[var(--primary)] before:top-[35px]
          "
                    >
                        {props.title}
                        <svg
                            className="transition text-[var(--primary)] -translate-x-1 absolute group-hover:opacity-100 inline group-hover:translate-x-0 opacity-0 text-[2rem] translate-y-0.5"
                            data-icon="material-symbols:chevron-right-rounded"
                            height="1em"
                            viewBox="0 0 24 24"
                            width="1em"
                        >
                            <use href="#ai:material-symbols:chevron-right-rounded"></use>
                        </svg>
                    </Link>

                    {postMeta({
                        className:
                            "flex flex-wrap text-neutral-500 items-center gap-4 gap-x-4 gap-y-2 mb-2 ",
                        published: props.date,
                        category: props.category,
                        tags: props.tags,
                    })}
                    <div className="text-75 mb-3.5 pr-4">
                        {props.description}
                    </div>
                </div>
            </div>
            {props.image && (
                <Link
                    href={`/post/${props.slug}`}
                    className="hidden sm:flex flex-0"
                >
                    <div
                        className="overflow-hidden relative w-64 hover:scale-105 transition duration-200"
                        id="ImageCard"
                    >
                        <Image
                            src={props.image}
                            alt=""
                            sizes="(max-width: 1024px) 40vw, 30vw"
                            fill
                            quality={100}
                            className={`object-cover object-center`}
                        />
                    </div>
                </Link>
            )}
        </div>
    );
}

export function postMeta({
    className,
    published,
    category,
    tags,
}: {
    className?: string;
    published: Date;
    category: string;
    tags: string[];
}) {
    return (
        <div className={`${className} font-semibold text-sm`}>
            <div className="flex items-center">
                <div className="meta-icon">
                    <svg
                        className="text-xl"
                        data-icon="material-symbols:calendar-today-outline-rounded"
                        height="1em"
                        viewBox="0 0 24 24"
                        width="1em"
                    >
                        <use href="#ai:material-symbols:calendar-today-outline-rounded"></use>
                    </svg>
                </div>
                <span>{format(published, "yyyy-MM-dd")}</span>
            </div>

            <div className="flex items-center">
                <div className="meta-icon">
                    <svg
                        className="text-xl"
                        data-icon="material-symbols:book-2-outline-rounded"
                        height="1em"
                        viewBox="0 0 24 24"
                        width="1em"
                    >
                        <use href="#ai:material-symbols:book-2-outline-rounded"></use>
                    </svg>
                </div>
                <div className="flex flex-row flex-nowrap items-center">
                    <Link
                        href={`/archive/categories/${category}`}
                        className="rounded-md px-2 py-1 whitespace-nowrap Myhover block"
                    >
                        {category}
                    </Link>
                </div>
            </div>

            <div className="items-center hidden md:flex">
                <div className="flex flex-row flex-nowrap items-center">
                    <div className="meta-icon">
                        <svg
                            className="text-xl"
                            data-icon="material-symbols:tag-rounded"
                            height="1em"
                            viewBox="0 0 24 24"
                            width="1em"
                        >
                            <use href="#ai:material-symbols:tag-rounded"></use>
                        </svg>
                    </div>
                    {tags.map((tag, i) => (
                        <Fragment key={i}>
                            <div
                                className={
                                    "mx-1.5 text-sm" + (i == 0 ? " hidden" : "")
                                }
                            >
                                /
                            </div>
                            <Link
                                href={`/archive/tags/${tag}`}
                                className="text-50 p-1 rounded-md Myhover whitespace-nowrap"
                            >
                                {tag}
                            </Link>
                        </Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}
