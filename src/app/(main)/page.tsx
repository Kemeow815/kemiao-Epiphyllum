import PageCreate from "@/components/pageCreate";
import { getPageById } from "@/utils/pages";
import { Metadata } from "next";
import { WebName } from "@/config/config";
import { profileConfig } from "@/config/config";
import { WebUrl } from "@/config/config";

export const metadata: Metadata = {
    title: WebName,
    description: `${profileConfig.name}的个人博客 - ${profileConfig.bio}`,
    keywords: [profileConfig.name, profileConfig.bio, "技术博客", "前端开发"],
    alternates: {
        canonical: WebUrl,
    },
    openGraph: {
        title: WebName,
        description: `${profileConfig.name}的个人博客 - ${profileConfig.bio}`,
        url: WebUrl,
        siteName: WebName,
        images: [
            {
                url: profileConfig.imageSrc.startsWith("http")
                    ? profileConfig.imageSrc
                    : WebUrl + profileConfig.imageSrc,
                width: 1200,
                height: 630,
                alt: `${profileConfig.name}的头像`,
            },
        ],
        locale: "zh_CN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: WebName,
        description: `${profileConfig.name}的个人博客 - ${profileConfig.bio}`,
        images: [
            {
                url: profileConfig.imageSrc.startsWith("http")
                    ? profileConfig.imageSrc
                    : WebUrl + profileConfig.imageSrc,
                width: 1200,
                height: 630,
                alt: `${profileConfig.name}的头像`,
            },
        ],
    },
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
            <PageCreate pages={pages.content} id={1}></PageCreate>
        </>
    );
}
