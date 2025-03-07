import { processMarkdown } from "@/utils/getData";
import ContentWrapper from "@/components/contentWrapper";
import path from "path";
export default async function Page() {
    const data = await processMarkdown(path.join(process.cwd(), "src/data") ,"/about/about.md");
    return <div className="card-base p-8">
        <ContentWrapper contentHtml={data.contentHtml}></ContentWrapper>
    </div>;
}
