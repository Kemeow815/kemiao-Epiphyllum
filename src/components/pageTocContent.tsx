import { getPostBySlug } from "@/utils/getData";
import { TocItem } from "@/utils/getData";
export default async function PageTocContent({
    slug,
}: {
    slug: string; //转码后的
}) {
    const tocData = (await getPostBySlug(slug)).toc as TocItem[];
    return (
        <>
            {tocData.map((item, index) => (
                <Tocitem key={item.id} item={item} index={index} />
            ))}
        </>
    );
}
const Tocitem = ({ item, index }: { item: TocItem; index: number }) => (
    <a
        href={`#${item.id}`}
        className="p-2 flex gap-2 relative transition w-full h-9 rounded-xl
        hover:bg-sky-200 active:bg-sky-200 group"
    >
        <div
            className={`transition ${
                index === 0 ? "" : "toc-dash-line"
            } w-5 h-5 shrink-0 rounded-lg text-xs flex items-center justify-center font-bold`}
        >
            {item.depth <= 3 ? (
                <div className="transition group-hover:scale-125 group-active:scale-125 z-10 w-2 h-2 rounded-[0.1875rem] bg-[var(--primary)]"></div>
            ) : (
                <div className="transition group-hover:scale-125 group-active:scale-125 z-10 w-1.5 h-1.5 rounded-sm bg-[var(--primary)] "></div>
            )}
        </div>
        <div
            className="transition group-hover:text-sky-600 group-active:text-sky-600 text-sm overflow-hidden whitespace-nowrap text-overflow-ellipsis"
            style={{ paddingLeft: `${(item.depth - 1) * 0.5}rem` }}
        >
            {item.text}
        </div>
    </a>
);
