"use client";
import { useEffect, useRef } from "react";
import { TocItem } from "@/utils/getData";

export default function TocClient({ tocData }: { tocData: TocItem[] }) {
    const last = useRef<Element>(null);
    const isUserClick = useRef(false);
    const setActive = (id: string) => {
        if (isUserClick.current) return;
        const tocItem = document.querySelector(
            `#toc-container a[data-target-id="${id}"]`
        ) as HTMLElement;
        if (!tocItem) return;
        last.current?.classList.remove("bg-sky-200", "text-sky-600");
        tocItem.classList.add("bg-sky-200", "text-sky-600");
        last.current = tocItem;
        // 滚动到目录项
        const tocContainer = document.getElementById("toc-container");
        if (tocContainer) {
            const containerHeight = tocContainer.offsetHeight;
            const itemTop = tocItem.offsetTop - tocContainer.offsetTop;
            const targetScroll =
                itemTop - containerHeight / 2 + tocItem.offsetHeight / 2;
            // 使用平滑滚动
            tocContainer.scrollTo({
                top: targetScroll,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        const handleClickStart = () => {
            isUserClick.current = true;
            setTimeout(() => {
                isUserClick.current = false;
            }, 1000);
        };

        // 添加全局点击监听
        document.addEventListener("toc-link-click", handleClickStart);
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "0px 0px -50% 0px",
                threshold: 0.5,
            }
        );
        const targetContentDiv = document.getElementById("target-content");
        if (targetContentDiv) {
            const headings = targetContentDiv.querySelectorAll(
                "h1, h2, h3, h4, h5, h6"
            );
            headings.forEach((heading) => observer.observe(heading));
        }

        return () => observer.disconnect();
    }, []);

    const Tocitem = ({ item, index }: { item: TocItem; index: number }) => (
        <a
            href={`#${item.id}`}
            data-target-id={item.id}
            onClick={() => {
                setActive(item.id);
                document.dispatchEvent(new CustomEvent("toc-link-click"));
            }}
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
                className="transition group-hover:text-sky-600 group-active:text-sky-600 text-sm overflow-hidden whitespace-nowrap text-overflow-ellipsis"
                style={{ paddingLeft: `${(item.depth - 1) * 0.5}rem` }}
            >
                {item.text}
            </div>
        </a>
    );

    return (
        <>
            {tocData.map((item, index) => (
                <Tocitem key={item.id} item={item} index={index} />
            ))}
        </>
    );
}
