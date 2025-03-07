import PageCreate from "@/components/pageCreate";
import { getPageById } from "@/utils/pages";
export default async function Home() {
    const pages = await getPageById(1);
    return (
        <PageCreate pages={pages.content} id={1}></PageCreate>
    );
}
