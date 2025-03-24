import PageCreate from "@/components/pageCreate";
import { getPageById } from "@/utils/pages";
import { Metadata } from "next";
import { WebName } from "@/config/config";
export const metadata: Metadata = {
    title: WebName,
    description: "Home",
};
export default async function Home() {
    const pages = await getPageById(1);
    return <PageCreate pages={pages.content} id={1}></PageCreate>;
}
