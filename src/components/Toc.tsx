import TocClient from "./TocClient";
import TocContent from "./TocContent";
export default async function Toc({
    slug,
    className,
}: {
    slug: string; //转码后的
    className?: string;
}) {
    return (
        <div className={`card-base ${className}`}>
            <div className="flex flex-col items-center gap-1 justify-center">
                <div className="mt-2 text-lg font-bold">目录</div>
                <div className="w-5 h-1 rounded-md bg-sky-500"></div>

                <div
                    id="toc-container"
                    className="w-full overflow-scroll scroll-container  mt-2 px-2 pb-2 transition max-h-[calc(100vh-33rem)]"
                >
                    <TocContent slug={slug} />
                </div>
            </div>
            <TocClient />
        </div>
    );
}
