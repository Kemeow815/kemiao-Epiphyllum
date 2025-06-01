"use client";
import Giscus from "@giscus/react";
import { WebName } from "@/config/config";
export default function GiscusComments({ className }: { className?: string }) {
    return (
        <div className={`mt-8 ${className}`}>
            <Giscus
                id="comments"
                repo="Kemeow815/kemiao-Epiphyllum"
                repoId="R_kgDOOhYW3Q"
                category="Announcements"
                categoryId="DIC_kwDOOhYW3c4Cq5M2"
                mapping="title"
                strict="0"
                term={`Welcome to ${WebName}`}
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="top"
                theme="preferred_color_scheme"
                lang="zh-CN"
                loading="lazy"
            />
        </div>
    );
}
