"use client";

import { useEffect } from "react";
import { OverlayScrollbars } from "overlayscrollbars";

export default function CustomScroll() {
    useEffect(() => {
        const initializeScrollbars = () => {
            // Body初始化逻辑
            const bodyElement = document.body;
            OverlayScrollbars(
                {
                    target: bodyElement,
                    cancel: {
                        nativeScrollbarsOverlaid: true, // don't initialize the overlay scrollbar if there is a native one
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

            // 处理pre元素
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
            // 处理katex元素
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
        };

        initializeScrollbars();

        return () => {
            // 清理逻辑
            
        };
    }, []);

    return null;
}
