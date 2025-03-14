// components/BackToTop.tsx
"use client";

import { useState, useEffect } from "react";

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // 监听滚动事件
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="fixed z-20 bottom-5 right-5">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="w-11 h-11 rounded-lg shadow-md bg-white flex items-center justify-center Myhover hover:scale-110 transition"
                >
                    <svg
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        className="text-[1.25rem] text-sky-500"
                    >
                        <use href="#ai:material-symbols:chevron-up-rounded"></use>
                    </svg>
                </button>
            )}
        </div>
    );
}
