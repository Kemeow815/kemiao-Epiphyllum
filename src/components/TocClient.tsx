"use client";
import { useEffect, useRef } from "react";
export default function TocClient() {
    const last = useRef<Element>(null);
    useEffect(() => {
        const setActiveId = (id: string) => {
            if (last.current)
                last.current.classList.remove("bg-sky-200", "text-sky-500");
            last.current = document.querySelector(`a[data-target-id="${id}"]`);
            last.current?.classList.add("bg-sky-200", "text-sky-500");
        };
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-15% 0px -75% 0px",
                threshold: 1.0,
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
