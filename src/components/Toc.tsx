import { TocItem } from "@/utils/getData";
export default function Toc({ data }: { data: TocItem[] }) {
    return (
        <div>
            {data.map((item) => (
                <Tocitem key={item.id} item={item} depth={1} />
            ))}
        </div>
    );
}
const Tocitem = ({ item, depth }: { item: TocItem; depth: number }) => (
    <>
        <a
            href={`#${item.id}`}
            className="px-2 flex gap-2 relative transition w-full min-h-9 rounded-xl
        hover:bg-[var(--toc-btn-hover)] active:bg-[var(--toc-btn-active)] py-2"
        >
            <div
                className={`transition w-5 h-5 shrink-0 rounded-lg text-xs flex items-center justify-center font-bold
                    ${(() => {
                        switch (depth) {
                            case 1:
                                return "bg-[var(--toc-badge-bg)] text-[var(--btn-content)]";
                            case 2:
                                return "ml-4";
                            case 3:
                                return "ml-8";
                        }
                    })()}
                `}
            >
                {depth === 2 && (
                    <div className="transition w-2 h-2 rounded-[0.1875rem] bg-[var(--toc-badge-bg)]"></div>
                )}
                {depth === 3 && (
                    <div className="transition w-1.5 h-1.5 rounded-sm bg-black/5 dark:bg-white/10"></div>
                )}
            </div>
            {/* 标题文本 */}
            <div
                className={`transition text-sm ${(() => {
                    switch (depth) {
                        case 1:
                            return "text-50";
                        case 2:
                            return "text-50";
                        case 3:
                            return "text-30";
                    }
                })()}
                `}
            >
                {item.text}
            </div>
        </a>
        {item.children &&
            item.children.map((child, index) => (
                <Tocitem key={index} item={child} depth={depth + 1} />
            ))}
    </>
);
