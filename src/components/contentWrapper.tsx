"use client";
import "@fontsource-variable/jetbrains-mono";
import "@fontsource-variable/jetbrains-mono/wght-italic.css";
import ReactMarkdown from "react-markdown";
import { markdownConfig } from "@/config/markdownConfig";
import ScrollBar from "./scrollBar";
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
                    pre: ({node, children, ...rest }) => {
                      const handleCopy = (event: React.MouseEvent<HTMLButtonElement>) => {
                        const preBlock = event.currentTarget
                            .closest('.code-block')
                            ?.querySelector('pre');
                            
                        const codeContent = preBlock?.querySelector('code')?.textContent;
                        
                        if (codeContent) {
                            navigator.clipboard.writeText(codeContent)
                                .then(() => {
                                    event.currentTarget.classList.add('success');
                                    setTimeout(() => {
                                        event.currentTarget.classList.remove('success');
                                    }, 1000);
                                })
                                .catch(err => console.error('fail:', err));
                        }
                    };
                        return (
                            <div className="relative code-block">
                                <pre tabIndex={0} >
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
                                <button className="copy-btn btn-regular-dark absolute active:scale-90 h-8 w-8 top-2 right-2 opacity-75 text-sm p-1.5 rounded-lg transition-all ease-in-out" onClick={handleCopy}>
                                    <div>
                                        <svg
                                            className="copy-btn-icon copy-icon"
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="20px"
                                            viewBox="0 -960 960 960"
                                            width="20px"
                                        >
                                            <path d="M368.37-237.37q-34.48 0-58.74-24.26-24.26-24.26-24.26-58.74v-474.26q0-34.48 24.26-58.74 24.26-24.26 58.74-24.26h378.26q34.48 0 58.74 24.26 24.26 24.26 24.26 58.74v474.26q0 34.48-24.26 58.74-24.26 24.26-58.74 24.26H368.37Zm0-83h378.26v-474.26H368.37v474.26Zm-155 238q-34.48 0-58.74-24.26-24.26-24.26-24.26-58.74v-515.76q0-17.45 11.96-29.48 11.97-12.02 29.33-12.02t29.54 12.02q12.17 12.03 12.17 29.48v515.76h419.76q17.45 0 29.48 11.96 12.02 11.97 12.02 29.33t-12.02 29.54q-12.03 12.17-29.48 12.17H213.37Zm155-238v-474.26 474.26Z" />
                                        </svg>
                                        <svg
                                            className="copy-btn-icon success-icon"
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="20px"
                                            viewBox="0 -960 960 960"
                                            width="20px"
                                        >
                                            <path d="m389-377.13 294.7-294.7q12.58-12.67 29.52-12.67 16.93 0 29.61 12.67 12.67 12.68 12.67 29.53 0 16.86-12.28 29.14L419.07-288.41q-12.59 12.67-29.52 12.67-16.94 0-29.62-12.67L217.41-430.93q-12.67-12.68-12.79-29.45-.12-16.77 12.55-29.45 12.68-12.67 29.62-12.67 16.93 0 29.28 12.67L389-377.13Z" />
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        );
                    },
                    span: ({node, className, children, ...rest }) => {
                        if (className?.includes("katex-display")) {
                            return (
                                <ScrollBar
                                    options={{
                                        scrollbars: {
                                            theme: "scrollbar-base scrollbar-auto py-1",
                                        },
                                    }}
                                >
                                    <span className={className} {...rest}>{children}</span>
                                </ScrollBar>
                            );
                        } else {
                            return <span className={className} {...rest}>{children}</span>;
                        }
                    },
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}
