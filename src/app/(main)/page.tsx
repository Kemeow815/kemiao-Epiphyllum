import PageCreate from "@/components/pageCreate";
import { getPageById } from "@/utils/pages";
import { Metadata } from "next";
import { WebName } from "@/config/config";
import { profileConfig } from "@/config/config";
import { WebUrl } from "@/config/config";

export const metadata: Metadata = {
    title: WebName,
    description: `${profileConfig.name} Blog`,
    keywords: [profileConfig.name, profileConfig.bio],
};
export default async function Home() {
    const pages = await getPageById(1);
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        url: WebUrl,
        headline: WebName,
        description: profileConfig.bio,
        logo: {
            "@type": "ImageObject",
            url: profileConfig.imageSrc.startsWith("http")
                ? profileConfig.imageSrc
                : WebUrl + profileConfig.imageSrc,
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <PageCreate pages={pages.content} id={1}></PageCreate>;
        </>
    );
}
