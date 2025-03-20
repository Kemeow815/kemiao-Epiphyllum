"use client";
import { useEffect, useRef } from "react";
export default function TocClient() {
    const last = useRef<Element>(null);
    useEffect(() => {
        const setActive = (id: string) => {
            const tocItem = document.querySelector(
                `#toc-container a[data-target-id="${id}"]`
            ) as HTMLElement;
            if (!tocItem) return;
            last.current?.classList.remove("bg-sky-200", "text-sky-600");
            tocItem.classList.add("bg-sky-200", "text-sky-600");
            last.current = tocItem;

            // 滚动到目录项
            const tocContainer = document.getElementById("toc-container");
            console.log(tocContainer);
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
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-15% 0px -75% 0px",
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
    return null;
}
