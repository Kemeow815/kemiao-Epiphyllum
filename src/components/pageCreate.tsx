import Postcard from "@/components/postcard";
import { PageContent } from "@/utils/pages";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getMxPage } from "@/utils/pages";
export default async function Page({
    pages,
    id,
}: {
    pages: PageContent[];
    id: number;
}) {
    const mxPage = await getMxPage();
    if (id > mxPage) {
        return notFound();
    }
    return (
        <>
            <div className="flex flex-col  divide-y divide-dashed md:gap-4 md:divide-none">
                {pages.map((post: PageContent) => {
                    return <Postcard key={post.slug} {...post}></Postcard>;
                })}
            </div>
            {generatePagination(mxPage, id)}
        </>
    );
}
function generatePagination(mxPage: number, id: number) {
    const pagelist = [];
    if (id === 1) {
        for (let i = 1; i <= 3; i++) {
            if (i > mxPage) break;
            pagelist.push(i);
        }
    } else if (id === mxPage) {
        for (let i = Math.max(1, id - 2); i <= id; i++) {
            pagelist.push(i);
        }
    } else {
        for (let i = id - 1; i <= id + 1; i++) {
            pagelist.push(i);
        }
    }
    return (
        <div className="flex flex-row gap-3 justify-center mx-auto mt-4">
            <Link
                href={id === 2 ? "/" : `/page/${id - 1}`}
                className={
                    "shadow-md overflow-hidden rounded-lg text-gray-300 bg-white w-11 h-11 Myhover flex items-center justify-center" +
                    (id === 1 ? " pointer-events-none" : "")
                }
            >
                <svg
                    className="text-[1.75rem]"
                    data-icon="material-symbols:chevron-left-rounded"
                    height="1em"
                    viewBox="0 0 24 24"
                    width="1em"
                >
                    <symbol id="ai:material-symbols:chevron-left-rounded">
                        <path
                            d="m10.8 12l3.9 3.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-4.6-4.6q-.15-.15-.212-.325T8.425 12t.063-.375t.212-.325l4.6-4.6q.275-.275.7-.275t.7.275t.275.7t-.275.7z"
                            fill="currentColor"
                        ></path>
                    </symbol>
                    <use xlinkHref="#ai:material-symbols:chevron-left-rounded"></use>
                </svg>
            </Link>
            <div className="flex flex-row items-center bg-white rounded-lg text-black font-bold shadow-md">
                {pagelist.map((page) => {
                    return (
                        <Link
                            key={page}
                            href={page === 1 ? "/" : `/page/${page}`}
                            className={
                                "h-11 w-11 rounded-lg flex items-center justify-center hover:bg-sky-300" +
                                (page === id ? " bg-sky-500 text-white" : "")
                            }
                        >
                            {page}
                        </Link>
                    );
                })}
            </div>
            <Link
                href={`/page/${id + 1}`}
                className={
                    "shadow-md overflow-hidden rounded-lg text-gray-300 bg-white w-11 h-11 Myhover flex items-center justify-center" +
                    (id === mxPage ? " pointer-events-none" : "")
                }
            >
                <svg
                    className="text-[1.75rem]"
                    data-icon="material-symbols:chevron-right-rounded"
                    height="1em"
                    viewBox="0 0 24 24"
                    width="1em"
                >
                    <symbol id="ai:material-symbols:chevron-right-rounded">
                        <path
                            d="M12.6 12L8.7 8.1q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.6 4.6q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7z"
                            fill="currentColor"
                        ></path>
                    </symbol>
                    <use xlinkHref="#ai:material-symbols:chevron-right-rounded"></use>
                </svg>
            </Link>
        </div>
    );
}
