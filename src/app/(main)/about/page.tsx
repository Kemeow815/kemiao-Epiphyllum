import { BlogData, processMarkdown } from "@/utils/getData";
import ContentWrapper from "@/components/contentWrapper";
import path from "path";
import { Metadata } from "next";
import { profileConfig } from "@/config/config";
import GiscusComments from "@/components/GiscusComments";
import { WebStartTime } from "@/config/config";
export const metadata: Metadata = {
    title: "About",
    description: "About",
    keywords: ["About", profileConfig.name, profileConfig.bio],
};
import RuntimeDisplay from "@/components/RuntimeDisplay";

export default async function Page() {
    const data = (await processMarkdown(
        path.join(process.cwd(), "src/data"),
        "/about/about.md"
    )) as BlogData;
    return (
        <>
            <div className="card-base p-8" data-pagefind-ignore="all">
                <ContentWrapper contentHtml={data.contentHtml}></ContentWrapper>
                <RuntimeDisplay startDate={new Date(WebStartTime)} />
            </div>
            <GiscusComments />
        </>
    );
}
