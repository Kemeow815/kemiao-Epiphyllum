import { profileConfig } from "@/config/config";
import Link from "next/link";
interface Props {
    title: string;
    pubDate: Date;
    className: string;
    postUrl: string;
}

export default function License({ title, pubDate, className, postUrl }: Props) {
    return (
        <div
            className={`relative transition overflow-hidden bg-[var(--license-block-bg)] py-5 px-6 ${className}`}
        >
            <div className="transition font-bold text-black/75">{title}</div>
            <Link
                href={postUrl}
                className="mylink-underline text-[var(--primary)]"
            >
                {postUrl}
            </Link>
            <div className="flex gap-6 mt-2">
                <div>
                    <div className="transition text-black/30 dark:text-white/30 text-sm">
                        作者
                    </div>
                    <div className="transition text-black/75 dark:text-white/75 whitespace-nowrap">
                        {profileConfig.name}
                    </div>
                </div>
                <div>
                    <div className="transition text-black/30 dark:text-white/30 text-sm">
                        发布于
                    </div>
                    <div className="transition text-black/75 dark:text-white/75 whitespace-nowrap">
                        {pubDate.toLocaleDateString()}
                    </div>
                </div>
                <div>
                    <div className="transition text-black/30 dark:text-white/30 text-sm">
                        许可协议
                    </div>
                    <Link
                        href="https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode.zh-hans"
                        target="_blank"
                        className="mylink-underline text-[var(--primary)] whitespace-nowrap"
                    >
                        CC BY-NC-SA 4.0
                    </Link>
                </div>
            </div>
            <svg
                height="1em"
                width="1em"
                viewBox="0 0 496 512"
                className="transition text-[15rem] absolute pointer-events-none right-6 top-1/2 -translate-y-1/2 text-black/5"
            >
                <use href="#icon:creative-commons"></use>
            </svg>
        </div>
    );
}
