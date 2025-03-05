"use client";
import "@fontsource-variable/jetbrains-mono";
import "@fontsource-variable/jetbrains-mono/wght-italic.css";
import ReactMarkdown from "react-markdown";
import { markdownConfig } from "@/config/markdownConfig";
import ScrollBar from "./scrollBar";
import CopyButton from "./copyButton";
interface Props {
    className?: string;
    content?: string;
}

export default function ContentWrapper({
    className = "",
    content = "",
}: Props) {
    return (
        <div
            data-pagefind-body
            className={`prose dark:prose-invert prose-base !max-w-none custom-md ${className}`}
        >
            <ReactMarkdown
                remarkPlugins={markdownConfig.remarkPlugins}
                rehypePlugins={markdownConfig.rehypePlugins}
                components={{
                    // 注意要有node 属性即使未使用防止...rest 解构错误
                    pre: ({ node, children, ...rest }) => {
                        return (
                            <div className="relative code-block">
                                <pre tabIndex={0}>
                                    <ScrollBar
                                        options={{
                                            scrollbars: {
                                                theme: "scrollbar-base scrollbar-dark px-2",
                                                autoHide: "leave",
                                                autoHideDelay: 500,
                                                autoHideSuspend: false,
                                            },
                                        }}
                                    >
                                        {children}
                                    </ScrollBar>
                                </pre>
                                <CopyButton></CopyButton>
                            </div>
                        );
                    },
                    span: ({ node, className, children, ...rest }) => {
                        if (className?.includes("katex-display")) {
                            return (
                                <ScrollBar
                                    options={{
                                        scrollbars: {
                                            theme: "scrollbar-base scrollbar-auto py-1",
                                        },
                                    }}
                                >
                                    <span className={className} {...rest}>
                                        {children}
                                    </span>
                                </ScrollBar>
                            );
                        } else {
                            return (
                                <span className={className} {...rest}>
                                    {children}
                                </span>
                            );
                        }
                    },
                    code: ({ node, className, children, ...rest }) => {
                        return (
                            <code className={className} {...rest}>
                                <span>{children}</span>
                            </code>
                        );
                    },
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}
