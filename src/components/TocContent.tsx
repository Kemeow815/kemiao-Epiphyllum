import { getPostBySlug } from "@/utils/getData";
import TocClient from "./TocClient";
import { TocItem } from "@/utils/getData";
export default async function TocContent({
    slug,
}: {
    slug: string; //转码后的
}) {
    const tocData = (await getPostBySlug(slug)).toc as TocItem[];
    return <TocClient tocData={tocData} />;
}
