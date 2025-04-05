import React, { Fragment } from "react";
import Link from "next/link";
import { format } from "date-fns";
import { PageContent } from "@/utils/pages";
import Image from "next/image";

export default function PostCard(props: PageContent) {
    return (
        <div className="card-base overflow-hidden w-full hover:shadow-lg transition duration-300">
            {props.image && (
                <Link href={`/post/${props.slug}`} className="block">
                    <div
                        id="ImageCard"
                        className="relative w-full h-64 overflow-hidden group"
                    >
                        <Image
                            src={props.image}
                            alt={`文章封面图: ${props.title}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            quality={100}
                            className="object-cover object-center transition duration-500 group-hover:scale-105"
                        />
                    </div>
                </Link>
            )}

            <div className="p-6 relative">
                <Link
                    href={`/post/${props.slug}`}
                    className="group block font-bold text-2xl mb-3 hover:text-sky-500 transition line-clamp-1"
                >
                    {props.title}
                    <svg
                        className="transition text-[var(--primary)] -translate-x-1 absolute group-hover:opacity-100 inline group-hover:translate-x-0 opacity-0 text-[2rem] translate-y-0.5"
                        height="1em"
                        viewBox="0 0 24 24"
                        width="1em"
                    >
                        <use href="#ai:material-symbols:chevron-right-rounded"></use>
                    </svg>
                </Link>

                {postMeta({
                    className: "mb-4",
                    published: props.date,
                    category: props.category,
                    tags: props.tags,
                })}

                <p className="text-gray-600 line-clamp-2">
                    {props.description}
                </p>
            </div>
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
        <div
            className={`${className} flex flex-wrap gap-4 text-sm text-gray-500`}
        >
            <div className="flex items-center">
                <svg
                    className="mr-1 text-lg"
                    data-icon="material-symbols:calendar-today-outline-rounded"
                    height="1em"
                    viewBox="0 0 24 24"
                    width="1em"
                >
                    <use href="#ai:material-symbols:calendar-today-outline-rounded"></use>
                </svg>
                <span>{format(published, "yyyy-MM-dd")}</span>
            </div>

            <div className="flex items-center">
                <svg
                    className="mr-1 text-lg"
                    data-icon="material-symbols:book-2-outline-rounded"
                    height="1em"
                    viewBox="0 0 24 24"
                    width="1em"
                >
                    <use href="#ai:material-symbols:book-2-outline-rounded"></use>
                </svg>
                <Link
                    href={`/archive/categories/${category}`}
                    className="hover:text-sky-500 transition"
                >
                    {category}
                </Link>
            </div>

            {tags.length > 0 && (
                <div className="flex items-center">
                    <svg
                        className="mr-1 text-lg"
                        data-icon="material-symbols:tag-rounded"
                        height="1em"
                        viewBox="0 0 24 24"
                        width="1em"
                    >
                        <use href="#ai:material-symbols:tag-rounded"></use>
                    </svg>
                    <div className="flex flex-wrap gap-1">
                        {tags.map((tag, i) => (
                            <Fragment key={i}>
                                <Link
                                    href={`/archive/tags/${tag}`}
                                    className="hover:text-sky-500 transition"
                                >
                                    {tag}
                                </Link>
                                {i < tags.length - 1 && <span>/</span>}
                            </Fragment>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
