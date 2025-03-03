"use client";
import React from "react";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { useEffect } from "react";
import { OverlayScrollbars } from "overlayscrollbars";
interface Props {
    className?: string;
    options?: any;
    children?: React.ReactNode;
}
export default function ScrollBar({
    className = "",
    options,
    children,
}: Props) {
    useEffect(() => {
        if (typeof window !== "undefined") {
            const osInstance = OverlayScrollbars(    
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
            return () => {
                if (osInstance) {
                    osInstance.destroy();
                }
            };
        }
    }, []);
    return (
        <OverlayScrollbarsComponent
            defer
            options={options}
            className={`${className}`}
        >
            {children}
        </OverlayScrollbarsComponent>
    );
}
