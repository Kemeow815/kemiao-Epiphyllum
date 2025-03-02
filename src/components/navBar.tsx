"use client";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
interface linkItem {
    name: string;
    url: string;
}
const linkList: linkItem[] = [
    { name: "首页", url: "/" },
    { name: "时间线", url: "/archive" },
    { name: "友链", url: "/friends" },
    { name: "关于", url: "/about" },
];
export default function NavBar() {
    const [isVisible, setIsVisible] = useState(true);
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
            // if (currentScrollY < 5) {
            //     setIsVisible(true);
            // } else {
            //     setIsVisible(false);
            // }
            // 更新上一次滚动位置
            setPrevScrollY(currentScrollY);
        };

        // 添加滚动监听
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollY]);
    return (
        <div
            className={`fixed inset-0 w-full transition duration-200 font-bold text-black leading-6 h-[4.5rem] mx-auto container px-0 md:px-4 ${
                isVisible ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <div className=" bg-white h-[4.5rem] flex items-center justify-between px-0 md:px-4 card-base !rounded-t-[0px]">
                <Link href="/" className="Link Myhover text-xl text-sky-500">
                    <div>Epipyhllum</div>
                </Link>
                <div className="flex items-center">
                    {linkList.map((item, index) => (
                        <Link key={index} href={item.url} className="Link Myhover">
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="flex">
                    <div className="Link Myhover">搜索</div>
                    <div className="Link Myhover">主题</div>
                </div>
            </div>
        </div>
    );
}
