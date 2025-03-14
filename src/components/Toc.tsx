"use client";
import { TocItem } from "@/utils/getData";
import { useEffect, useState } from "react";
import ScrollBar from "@/components/scrollbar";
export default function Toc({
    slug,
    className,
}: {
    slug: string;
    className: string;
}) {
    const [tocData, setTocData] = useState<TocItem[]>([]);
    const decodedSlug = decodeURIComponent(slug);

    useEffect(() => {
        const fetchToc = async () => {
            try {
                const response = await fetch(
                    `/api/post/${encodeURIComponent(decodedSlug)}`
                );
                const data = await response.json();
                setTocData(data.data.toc || []);
            } catch (error) {
                console.error("Failed to fetch TOC:", error);
            }
        };

        fetchToc();
    }, [decodedSlug]);
    return (
        <div className={`${className} hidden lg:block`}>
            <div className="sticky top-[20vh] overflow-y-scroll overflow-x-hidden max-h-[66vh] scroll-container">
                {tocData.map((item, index) => (
                    <Tocitem key={item.id} item={item} index={index} />
                ))}
            </div>
        </div>
    );
}
const Tocitem = ({ item, index }: { item: TocItem; index: number }) => (
    <a
        href={`#${item.id}`}
        className="p-2 flex gap-2 relative transition w-full h-9 rounded-xl
        hover:bg-sky-200 active:bg-sky-200 group"
    >
        <div
            className={`transition ${
                index === 0 ? "" : "toc-dash-line"
            } w-5 h-5 shrink-0 rounded-lg text-xs flex items-center justify-center font-bold`}
        >
            {item.depth <= 3 ? (
                <div className="transition group-hover:scale-125 group-active:scale-125 z-10 w-2 h-2 rounded-[0.1875rem] bg-[var(--primary)]"></div>
            ) : (
                <div className="transition group-hover:scale-125 group-active:scale-125 z-10 w-1.5 h-1.5 rounded-sm bg-[var(--primary)] "></div>
            )}
        </div>
        <div
            className={`transition group-hover:text-sky-600 group-active:text-sky-600 text-sm ${(() => {
                return `pl-[${item.depth - 1}rem]`;
            })()} overflow-hidden whitespace-nowrap text-overflow-ellipsis`}
        >
            {item.text}
        </div>
    </a>
);
