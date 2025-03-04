"use client";
import { useEffect } from "react";
import { OverlayScrollbars } from "overlayscrollbars";
export default function ScrollBar() {
    useEffect(() => {
        let scrollbarsInstance: OverlayScrollbars | null = null;
        
        if (typeof window !== "undefined") {
            scrollbarsInstance = OverlayScrollbars(
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
            if (scrollbarsInstance) {
                scrollbarsInstance.destroy(); // 清理滚动条实例
            }
        };
    }, []);
    return null;
}
