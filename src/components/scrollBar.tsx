"use client";
import { useEffect } from "react";
import { OverlayScrollbars } from "overlayscrollbars";
export default function ScrollBar() {
    console.log("hello scrollBar")
    useEffect(() => {
        const preElements = document.querySelectorAll("pre");
        preElements.forEach((ele) => {
            OverlayScrollbars(ele, {
                scrollbars: {
                    theme: "scrollbar-base scrollbar-dark px-2",
                    autoHide: "leave",
                    autoHideDelay: 500,
                    autoHideSuspend: false,
                },
            });
        });
        const katexElements = document.querySelectorAll(
            ".katex-display"
        ) as NodeListOf<HTMLElement>;
        katexElements.forEach((ele) => {
            OverlayScrollbars(ele, {
                scrollbars: {
                    theme: "scrollbar-base scrollbar-auto py-1",
                },
            });
        });
    }, []);
    return null;
}
