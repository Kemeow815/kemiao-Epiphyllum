import { processMarkdown } from "@/utils/getData";
import ContentWrapper from "@/components/contentWrapper";
export default async function Page() {
    const data = await processMarkdown("/about/about.md");
    return <div className="card-base p-8">
        <ContentWrapper contentHtml={data.contentHtml}></ContentWrapper>
    </div>;
}
