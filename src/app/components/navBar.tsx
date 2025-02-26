import Link from "next/link";
import React from "react";

interface linkItem{
    name : string,
    url : string
}
const linkList : linkItem[] = [
    {name : "主页", url : "/"},
    {name : "归档", url : "/archive"},
    {name : "标签", url : "/tag"},
    {name : "关于", url : "/about"},
];
export default function NavBar() {
  return (
    <div className="absolute top-0 left-0 w-full bg-white z-10 text-lg font-bold text-white">
      <div className="bg-sky-500 h-16 flex items-center justify-between px-0 md:px-4 mx-auto container rounded-[var(--rounded-large)] !rounded-t-[0px]">
        <Link href="/" className="Link">
            <div>
                Epipyhllum
            </div>
        </Link>
        <div className="flex space-x-1">
            {linkList.map((item, index) => (
                <Link key={index} href={item.url} className="Link">
                    <div className="px-4">
                        {item.name}
                    </div>
                </Link>
            ))}
            <a href="https://github.com/Masttf" target="_blank" className="Link">
                Github
            </a>
        </div>
        <div className="flex items-center space-x-4">
            <div>搜索</div>
            <div>主题</div>
            <div>RSS</div>
            <div>管理后台</div>
        </div>
      </div>
    </div>
  )
}