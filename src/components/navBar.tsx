"use client";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import Search from "./search";
interface linkItem {
    name: string;
    url: string;
}
const linkList: linkItem[] = [
    { name: "首页", url: "/" },
    { name: "归档", url: "/archive" },
    { name: "友链", url: "/friends" },
    { name: "关于", url: "/about" },
];
export default function NavBar() {
    const [isVisible, setIsVisible] = useState(true);
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [prevScrollY, setPrevScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // 向下滚动且超过阈值时隐藏导航栏
            if (currentScrollY > prevScrollY) {
                setIsVisible(false);
            }
            // 向上滚动时显示导航栏
            else if (currentScrollY < prevScrollY) {
                setIsVisible(true);
            }

            if (currentScrollY < 5) {
                setIsVisible(true);
            }
            // 更新上一次滚动位置
            setPrevScrollY(currentScrollY);
        };

        // 添加滚动监听
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollY]);
    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "/" && !isSearchVisible) {
                setIsSearchVisible(true);
            }
        }
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);
    function handleClick() {
        setIsSearchVisible(!isSearchVisible);
    }
    return (
        <>
            <div
                className={`fixed inset-0 w-full z-20 transition duration-200 font-bold text-black leading-6 h-[4.5rem] ${
                    isVisible ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                <div className=" bg-white h-[4.5rem] flex items-center justify-between px-0 md:px-4 card-base !rounded-t-[0px]">
                    <Link
                        href="/"
                        className="Link Myhover text-xl text-sky-500"
                    >
                        <svg
                            className="text-[1.75rem] mb-1 mr-1"
                            data-icon="material-symbols:home-outline-rounded"
                            height="1em"
                            viewBox="0 0 24 24"
                            width="1em"
                        >
                            <symbol id="ai:material-symbols:home-outline-rounded">
                                <path
                                    d="M6 19h3v-5q0-.425.288-.712T10 13h4q.425 0 .713.288T15 14v5h3v-9l-6-4.5L6 10zm-2 0v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-4q-.425 0-.712-.288T13 20v-5h-2v5q0 .425-.288.713T10 21H6q-.825 0-1.412-.587T4 19m8-6.75"
                                    fill="currentColor"
                                ></path>
                            </symbol>
                            <use xlinkHref="#ai:material-symbols:home-outline-rounded"></use>
                        </svg>
                        <div>Epipyhllum</div>
                    </Link>
                    <div className="flex items-center">
                        {linkList.map((item, index) => (
                            <Link
                                key={index}
                                href={item.url}
                                className="Link Myhover"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <div>
                        {!isSearchVisible && (
                            <div
                                className="flex cursor-pointer gap-2 items-center font-bold bg-gray-200/50 rounded-lg p-2 Myhover"
                                onClick={handleClick}
                            >
                                <svg
                                    height="1em"
                                    width="1em"
                                    viewBox="0 0 512 512"
                                    className="text-[1rem]"
                                >
                                    <use href="#ai:fa6:search"></use>
                                </svg>
                                <div className="overflow-hidden">
                                    <span>
                                        Press <kbd>/</kbd> to search
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {isSearchVisible && <Search handleClick={handleClick} />}
        </>
    );
}
