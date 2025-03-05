"use client";
import "@fontsource-variable/jetbrains-mono";
import "@fontsource-variable/jetbrains-mono/wght-italic.css";
import CopyButton from "./copyButton";
import { OverlayScrollbars } from "overlayscrollbars";
import { useEffect } from "react";
interface Props {
    className?: string;
    contentHtml?: string;
}

export default function ContentWrapper({
    className = "",
    contentHtml = "",
}: Props) {
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
    return (
        <div
            data-pagefind-body
            className={`prose dark:prose-invert prose-base !max-w-none custom-md ${className}`}
        >
            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
            <CopyButton></CopyButton>
        </div>
    );
}
