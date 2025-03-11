"use client";
import { useEffect } from "react";
import { OverlayScrollbars } from "overlayscrollbars";
export default function ScrollBar() {
    useEffect(() => {    
        if (typeof window !== "undefined") {
            OverlayScrollbars(
                { 
                    target: document.body,
                    cancel: { 
                        nativeScrollbarsOverlaid: true 
                    }
                },
                {
                    scrollbars: {
                        theme: 'scrollbar-base scrollbar-auto py-1',
                        autoHide: 'move',
                        autoHideDelay: 500,
                        autoHideSuspend: false,
                    }
                }
            );
        }
    
        return () => {
            const bodyOsInstance = OverlayScrollbars(document.body);
            bodyOsInstance?.destroy();
        };
    }, []);
    return null;
}
