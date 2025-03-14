"use client";

import { usePathname } from "next/navigation";
import Toc from "./Toc";
export default function SideBarWrapper({
    children,
    className,
}: {
    children: React.ReactNode;
    className: string;
}) {
    const pathname = usePathname();
    if (!pathname.startsWith("/post/")) {
        return children;
    } else {
        const slug = pathname.split("/").pop()!;
        return <Toc slug={slug} className={className} />;
    }
}
