import Postcard from "@/components/PostCard/postcard";
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
            <div className="flex flex-col gap-1 md:gap-4">
                {pages.map((post: PageContent, index) => {
                    return <Postcard key={index} {...post}></Postcard>;
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
                aria-label="上一页"
                className={
                    "mb-1 shadow-md overflow-hidden rounded-lg text-gray-300 bg-white w-11 h-11 Myhover flex items-center justify-center" +
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
                    <use href="#ai:material-symbols:chevron-left-rounded"></use>
                </svg>
            </Link>

            {pagelist.map((page) => {
                return (
                    <Link
                        key={page}
                        href={page === 1 ? "/" : `/page/${page}`}
                        aria-label={`page ${page}`}
                        className={
                            "mb-1 h-11 w-11 rounded-lg flex bg-white items-center font-bold text-black  justify-center hover:bg-sky-300 shadow-md" +
                            (page === id ? " !bg-sky-500 !text-white" : "")
                        }
                    >
                        {page}
                    </Link>
                );
            })}

            <Link
                href={`/page/${id + 1}`}
                aria-label="下一页"
                className={
                    "mb-1 shadow-md overflow-hidden rounded-lg text-gray-300 bg-white w-11 h-11 Myhover flex items-center justify-center" +
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
                    <use href="#ai:material-symbols:chevron-right-rounded"></use>
                </svg>
            </Link>
        </div>
    );
}
