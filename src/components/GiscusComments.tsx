"use client";
import Giscus from "@giscus/react";
import { WebName } from "@/config/config";
export default function GiscusComments({ className }: { className?: string }) {
    return (
        <div className={`mt-8 ${className}`}>
            <Giscus
                id="comments"
                repo="Masttf/Epiphyllum"
                repoId="R_kgDOOBU6Jg"
                category="Announcements"
                categoryId="DIC_kwDOOBU6Js4CngaY"
                mapping="pathname"
                strict="0"
                term={`Welcome to ${WebName}`}
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="top"
                theme="light"
                lang="zh-CN"
                loading="lazy"
            />
        </div>
    );
}
