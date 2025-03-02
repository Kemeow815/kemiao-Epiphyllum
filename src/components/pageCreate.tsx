import Postcard from "@/components/postcard";
import { BlogPost } from "@/utils/posts";
import { notFound } from "next/navigation";
import Link from "next/link";

export default function Page({
    blogList,
    id,
}: {
    blogList: BlogPost[];
    id: number;
}) {
    const pageSize = 10;
    const mxPageSize = Math.ceil(blogList.length / pageSize);
    if (id > mxPageSize) {
        return notFound();
    }
    const posts = blogList.slice((id - 1) * pageSize, id * pageSize);
    return (
        <>
            <div className="flex flex-col  divide-y divide-dashed md:gap-4 md:divide-none">
                {posts.map((post: BlogPost) => {
                    return <Postcard key={post.id} {...post}></Postcard>;
                })}
            </div>
            {generatePagination(mxPageSize, id)}
        </>
    );
}
function generatePagination(mxPageSize: number, id: number){
    const pagelist = [];
    if (id === 1) {
        for (let i = 1; i <= 3; i++) {
            if (i > mxPageSize) break;
            pagelist.push(i);
        }
    } else if (id === mxPageSize) {
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
                        "shadow-md overflow-hidden rounded-lg text-gray-50 bg-white w-11 h-11 Myhover" +
                        (id === 1 ? " pointer-events-none" : "")
                    }
                >
                    {"<"}
                </Link>
                <div className="flex flex-row items-center bg-white rounded-lg text-black font-bold shadow-md">
                    {pagelist.map((page) => {
                        return (
                            <Link
                                key={page}
                                href={page === 1 ? "/" : `/page/${page}`}
                                className={
                                    "h-11 w-11 rounded-lg flex items-center justify-center hover:bg-sky-300" +
                                    (page === id
                                        ? " bg-sky-500 text-white pointer-events-none"
                                        : "")
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
                        "shadow-md overflow-hidden rounded-lg text-gray-50 bg-white w-11 h-11 Myhover" +
                        (id === mxPageSize ? " pointer-events-none" : "")
                    }
                >
                    {">"}
                </Link>
            </div>
    );
}