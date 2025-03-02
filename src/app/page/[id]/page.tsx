import React from "react";
import { getAllPosts } from "@/utils/posts";
import PageCreate from "@/components/pageCreate";

export default async function page({params} : { params : {id: string}}) {
    const posts = await getAllPosts();
    return(
        <PageCreate blogList={posts} id={+params.id}></PageCreate>
    )
}
