import { getPostBySlug } from "@/utils/getData";
import TocClient from "./TocClient";
export default async function TocContent({
    slug,
}: {
    slug: string; //转码后的
}) {
    const tocData = (await getPostBySlug(slug)).toc;
    return <TocClient tocData={tocData} />;
}
