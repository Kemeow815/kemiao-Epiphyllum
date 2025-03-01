import Link from "next/link";
import React from "react";

interface linkItem{
    name : string,
    url : string
}
const linkList : linkItem[] = [
    {name : "首页", url : "/"},
    {name : "归档", url : "/archive"},
    {name : "标签", url : "/tag"},
    {name : "友链", url : "/friends"},
    {name : "关于", url : "/about"},
];
export default function NavBar() {
  return (
    <div className="fixed inset-0 w-full  font-bold text-black leading-6 h-[4.5rem] mx-auto container px-0 md:px-4">
      <div className=" bg-white h-[4.5rem] flex items-center justify-between px-0 md:px-4 rounded-[var(--rounded-large)] !rounded-t-[0px]">
        <Link href="/" className="Link">
            <div>
                Epipyhllum
            </div>
        </Link>
        <div className="flex items-center">
            {linkList.map((item, index) => (
                <Link key={index} href={item.url} className="Link">
                    {item.name}
                </Link>
            ))}
        </div>
        <div className="flex">
            <div className="Link">搜索</div>
            <div className="Link">主题</div>
            <div className="Link">管理后台</div>
        </div>
      </div>
    </div>
  )
}