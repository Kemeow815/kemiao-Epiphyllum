import { getPostBySlug, TocItem } from "@/utils/getData";
import ScrollBar from "@/components/scrollbar";
import TocClient from "./TocClient";
import { max } from "date-fns";
export default async function Toc({
    slug,
}: {
    slug: string; //转码后的
}) {
    const tocData = (await getPostBySlug(slug)).toc as TocItem[];
    return (
        <div className="card-base">
            <div className="flex flex-col items-center gap-1 justify-center">
                <div className="mt-2 text-lg font-bold">目录</div>
                <div className="w-5 h-1 rounded-md bg-sky-500"></div>
                <ScrollBar
                    className="w-full mb-2"
                    options={{
                        scrollbars: {
                            theme: "scrollbar-base scrollbar-auto py-1",
                            autoHide: "move",
                            autoHideDelay: 500,
                            autoHideSuspend: false,
                        },
                    }}
                >
                    <div className="w-full mt-2 px-2 transition max-h-[calc(100vh-33rem)]">
                        {tocData.map((item, index) => (
                            <Tocitem key={item.id} item={item} index={index} />
                        ))}
                    </div>
                </ScrollBar>
            </div>
            <TocClient />
        </div>
    );
}
const Tocitem = ({ item, index }: { item: TocItem; index: number }) => (
    <a
        href={`#${item.id}`}
        data-target-id={item.id}
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
            className={`transition group-hover:text-sky-600 group-active:text-sky-600 text-sm ${(() => {
                return `pl-[${item.depth - 1}rem]`;
            })()} overflow-hidden whitespace-nowrap text-overflow-ellipsis`}
        >
            {item.text}
        </div>
    </a>
);
