"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { useMemo } from "react";
import Link from "next/link";
import { OverlayScrollbars } from "overlayscrollbars";
import ScrollBar from "./scrollbar";
declare global {
    interface Window {
        pagefind: any;
    }
}
interface SearchData {
    url: string;
    meta: { title: string };
    excerpt: string;
    sub_results?: any;
}
interface SearchResult {
    id: string;
    data: () => Promise<SearchData>;
}
export default function Search() {
    useEffect(() => {
        async function loadPagefind() {
            if (process.env.NODE_ENV === "production") {
                window.pagefind = await import(
                    // @ts-expect-error pagefind generated after build
                    /* webpackIgnore: true */ "../pagefind/pagefind.js"
                );
            } else {
                window.pagefind = {
                    debouncedSearch: () => ({
                        results: [
                            {
                                id: "masttf",
                                data: async () => ({
                                    url: "/",
                                    meta: {
                                        title: "This Is a Fake Search Result",
                                    },
                                    excerpt:
                                        "Because the search cannot work in the <mark>dev</mark> environment.",
                                }),
                            },
                            {
                                id: "masttf2",
                                data: async () => ({
                                    url: "/archive",
                                    meta: {
                                        title: "If You Want to Test the Search",
                                    },
                                    excerpt:
                                        "Try running <mark>npm build && npm preview</mark> instead.",
                                }),
                            },
                        ],
                    }),
                };
            }
        }
        loadPagefind();
    }, []);
    const [isVisable, setIsVisable] = useState(false);
    function handleClick() {
        setIsVisable(!isVisable);
    }
    return (
        <>
            {!isVisable && <div
                className="flex cursor-pointer gap-2 items-center font-bold bg-gray-200/50 rounded-lg p-2"
                onClick={handleClick}
            >
                <svg
                    aria-hidden="true"
                    height="1em"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="1em"
                >
                    <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
                </svg>
                <span>search</span>
            </div>}

            {isVisable && <SearchUi handleClick={handleClick}></SearchUi>}
        </>
    );
}
function SearchUi({ handleClick }: { handleClick?: () => void }) {
    const [result, setResult] = useState<SearchResult[]>([]);
    const [query, setQuery] = useState("");
    const inputRef = React.useRef<HTMLInputElement>(null);
    useEffect(() => {
        const bodyOsInstance = OverlayScrollbars(document.body);
        bodyOsInstance?.destroy();
        document.body.classList.add("overflow-hidden");
        inputRef.current?.focus();
        return () => {
            document.body.classList.remove("overflow-hidden");
            OverlayScrollbars(
                {
                    target: document.body,
                    cancel: {
                        nativeScrollbarsOverlaid: true,
                    },
                },
                {
                    scrollbars: {
                        theme: "scrollbar-base scrollbar-auto py-1",
                        autoHide: "move",
                        autoHideDelay: 500,
                        autoHideSuspend: false,
                    },
                }
            );
        };
    }, []);
    async function handleSearch() {
        if (window.pagefind) {
            const search = await window.pagefind.debouncedSearch(query);
            setResult(search?.results || []);
        }
    }
    return (
        <div
            className="search-panel fixed inset-0 w-screen h-screen bg-gray-700/10 z-50"
            onClick={handleClick}
        >
            <ScrollBar
                className="card-base w-full mx-auto box-border max-w-[30rem] min-h-[4.5rem] max-h-[50vh] p-4 bg-white opacity-100"
                options={{
                    scrollbars: {
                        theme: "scrollbar-base scrollbar-auto py-1",
                        autoHide: "move",
                        autoHideDelay: 500,
                        autoHideSuspend: false,
                    },
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex flex-col">
                    <div className="flex justify-between items-center border-0 border-b-2 border-solid w-full mb-2">
                        <div className="flex gap-1 items-center">
                            <svg
                                aria-hidden="true"
                                height="1em"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="1em"
                                
                            >
                                <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
                            </svg>
                            <input
                                type="text"
                                ref={inputRef}
                                className="px-2 outline-none"
                                placeholder="Search"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onInput={handleSearch}
                            />
                        </div>
                        {query !== "" && <button
                            className="w-7 h-7 rounded-md hover:bg-gray-200 flex justify-center items-center"
                            onClick={() => setQuery("")}
                        >
                            <svg
                                aria-hidden="true"
                                height="1em"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="1em"
                            >
                                <path d="M2.343 13.657A8 8 0 1 1 13.658 2.343 8 8 0 0 1 2.343 13.657ZM6.03 4.97a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042L6.94 8 4.97 9.97a.749.749 0 0 0 .326 1.275.749.749 0 0 0 .734-.215L8 9.06l1.97 1.97a.749.749 0 0 0 1.275-.326.749.749 0 0 0-.215-.734L9.06 8l1.97-1.97a.749.749 0 0 0-.326-1.275.749.749 0 0 0-.734.215L8 6.94Z"></path>
                            </svg>
                        </button>}
                    </div>
                    <div className="flex flex-col">
                        {(result || []).map((items) => (
                            <SearchCard
                                key={items.id}
                                result={items}
                                handleClick={handleClick}
                            ></SearchCard>
                        ))}
                    </div>
                </div>
            </ScrollBar>
        </div>
    );
}
function SearchCard({
    result,
    handleClick,
}: {
    result: SearchResult;
    handleClick?: () => void;
}) {
    const [data, setData] = useState<SearchData>();
    const [url, setUrl] = useState<string>("");
    useEffect(() => {
        async function fetchData() {
            const data = await result.data();
            setData(data);

            const path = data.url.match(/\/([^/]+)\.html$/);
            const ul = path ? path[1] : "";
            setUrl(ul);
        }

        fetchData();
    }, [result]);
    const resultHtml = useMemo(() => {
        if (!data) return "";
        return data.excerpt;
    }, [data]);
    return (
        <>
            {data && (
                <>
                    <Link
                        href={`/post/${url}`}
                        className="rounded-lg Myhover p-2 group"
                        onClick={handleClick}
                    >
                        <div className="text-xl font-bold">
                            {data.meta.title}
                            <svg
                                className="transition text-[var(--primary)] -translate-x-1 absolute group-hover:opacity-100 inline group-hover:translate-x-0 opacity-0 text-[1.5rem] translate-y-0.5"
                                data-icon="material-symbols:chevron-right-rounded"
                                height="1em"
                                viewBox="0 0 24 24"
                                width="1em"
                            >
                                <use xlinkHref="#ai:material-symbols:chevron-right-rounded"></use>
                            </svg>
                        </div>

                        <div className="text-50 font-normal">
                            <div
                                dangerouslySetInnerHTML={{ __html: resultHtml }}
                            ></div>
                        </div>
                    </Link>
                </>
            )}
        </>
    );
}
