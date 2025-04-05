import "@/styles/variables.css";
import "@/styles/globals.css";
import "@/styles/markdown.css";
import "@/styles/markdown-extend.css";
import "@/styles/scrollbar.css";
import "katex/dist/katex.css";
import "overlayscrollbars/styles/overlayscrollbars.css";
import Icon from "@/components/Icon";
import BodyScrollBar from "@/components/bodyScrollBar";
import BackToTop from "@/components/backToTop";
import { profileConfig } from "@/config/config";
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="zh-CN"
            className="text-sm md:text-base bg-gray-200 transition"
            data-overlayscrollbars-initialize
        >
            <meta charSet="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta
                name="apple-mobile-web-app-title"
                content={`${profileConfig.name}的个人博客`}
            ></meta>
            <link
                rel="icon"
                type="image/png"
                href="/favicon/favicon-96x96.png"
                sizes="96x96"
            />
            <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
            <link rel="shortcut icon" href="/favicon/favicon.ico" />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/favicon/apple-touch-icon.png"
            />
            <link rel="manifest" href="/favicon/site.webmanifest" />
            <meta name="theme-color" content="#ffffff" />
            <body
                className="min-h-screen transition"
                data-overlayscrollbars-initialize
            >
                <BodyScrollBar />
                <Icon />
                {children}
                <BackToTop />
            </body>
        </html>
    );
}
