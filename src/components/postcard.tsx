import React, { Fragment } from "react";
import Link from "next/link";
import { format } from "date-fns";
import { PageContent } from "@/utils/pages";
export default function postcard(props: PageContent) {
    return (
        <div className="card-base flex flex-col rounded-none first:rounded-t-[var(--rounded-large)] last:rounded-b-[var(--rounded-large)] md:flex-col w-full relative md:rounded-[var(--rounded-large)] ">
            <div className="pl-6 md:pl-9 pr-6 md:pr-2 pt-6 md:pt-7 pb-6 relative space-y-3 ">
                <Link
                    href={`/post/${props.slug}`}
                    className=" w-full block font-bold text-3xl 
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
                        <use xlinkHref="#ai:material-symbols:chevron-right-rounded"></use>
                    </svg>
                </Link>

                {postMeta({
                    className:
                        "flex flex-wrap text-neutral-500 items-center gap-4 gap-x-4 gap-y-2 mb-2 ",
                    published: props.date,
                    category: props.category,
                    tags: props.tags,
                })}
                <div className="text-75 mb-3.5 pr-4">{props.description}</div>
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
    tags?: string[];
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
                        <symbol id="ai:material-symbols:calendar-today-outline-rounded">
                            <path
                                d="M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V3q0-.425.288-.712T7 2t.713.288T8 3v1h8V3q0-.425.288-.712T17 2t.713.288T18 3v1h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5zM5 8h14V6H5zm0 0V6z"
                                fill="currentColor"
                            ></path>
                        </symbol>
                        <use xlinkHref="#ai:material-symbols:calendar-today-outline-rounded"></use>
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
                        <symbol id="ai:material-symbols:book-2-outline-rounded">
                            <path
                                d="M6 15.325q.35-.175.725-.25T7.5 15H8V4h-.5q-.625 0-1.062.438T6 5.5zM10 15h8V4h-8zm-4 .325V4zM7.5 22q-1.45 0-2.475-1.025T4 18.5v-13q0-1.45 1.025-2.475T7.5 2H18q.825 0 1.413.587T20 4v12.525q0 .2-.162.363t-.588.362q-.35.175-.55.5t-.2.75t.2.763t.55.487t.55.413t.2.562v.25q0 .425-.288.725T19 22zm0-2h9.325q-.15-.35-.237-.712T16.5 18.5q0-.4.075-.775t.25-.725H7.5q-.65 0-1.075.438T6 18.5q0 .65.425 1.075T7.5 20"
                                fill="currentColor"
                            ></path>
                        </symbol>
                        <use xlinkHref="#ai:material-symbols:book-2-outline-rounded"></use>
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
                            <symbol id="ai:material-symbols:tag-rounded">
                                <path
                                    d="m9 16l-.825 3.275q-.075.325-.325.525t-.6.2q-.475 0-.775-.375T6.3 18.8L7 16H4.275q-.5 0-.8-.387T3.3 14.75q.075-.35.35-.55t.625-.2H7.5l1-4H5.775q-.5 0-.8-.387T4.8 8.75q.075-.35.35-.55t.625-.2H9l.825-3.275Q9.9 4.4 10.15 4.2t.6-.2q.475 0 .775.375t.175.825L11 8h4l.825-3.275q.075-.325.325-.525t.6-.2q.475 0 .775.375t.175.825L17 8h2.725q.5 0 .8.387t.175.863q-.075.35-.35.55t-.625.2H16.5l-1 4h2.725q.5 0 .8.388t.175.862q-.075.35-.35.55t-.625.2H15l-.825 3.275q-.075.325-.325.525t-.6.2q-.475 0-.775-.375T12.3 18.8L13 16zm.5-2h4l1-4h-4z"
                                    fill="currentColor"
                                ></path>
                            </symbol>
                            <use xlinkHref="#ai:material-symbols:tag-rounded"></use>
                        </svg>
                    </div>
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
                                    href={`/archive/tags/${tag}`}
                                    className="text-50 p-1 rounded-md Myhover whitespace-nowrap"
                                >
                                    {tag}
                                </Link>
                            </Fragment>
                        ))}
                    {!(tags && tags.length > 0) && (
                        <div className="transition text-50">noTags</div>
                    )}
                </div>
            </div>
        </div>
    );
}
