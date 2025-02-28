import "@/styles/globals.css";
import NavBar from "../components/navBar";
import Banner from "../components/Banner";
import SideBar from "../components/sideBar";
import { siteConfig } from "@/config";
import {
    BANNER_HEIGHT,
    BANNER_HEIGHT_EXTEND,
    MAIN_PANEL_OVERLAPS_BANNER_HEIGHT,
} from "@/constants/constants";
import MyImage from "@/components/myImage";
import Footer from "@/components/footer";
const mainPanelTop = siteConfig.banner.enable
    ? `calc(${BANNER_HEIGHT}vh - ${MAIN_PANEL_OVERLAPS_BANNER_HEIGHT}rem)`
    : "5.5rem";
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="zh-CN"
            className="bg-[var(--page-bg)] transition text-[14px] md:text-[16px] data-overlayscrollbars-initialize"
        >
            <meta charSet="UTF-8" />
            <body className="antialiased min-h-screen transition bg-gray-200">
                {/* navbar */}
                <slot slot="head" name="head"></slot>
                <div className="z-50 pointer-events-none relative transition-all duration-700 max-w-[var(--page-width)] px-0 md:px-4 mx-auto">
                    <div className="pointer-events-auto sticky top-0 transition-all">
                        <NavBar></NavBar>
                    </div>
                </div>
                {/* banner */}
                {/* {siteConfig.banner.enable && (
                    <div
                        className="absolute z-10 w-full transition duration-700 overflow-hidden"
                        style={{ top: "-" + BANNER_HEIGHT_EXTEND + "vh" }}
                    >
                        <MyImage
                            src={siteConfig.banner.src}
                            alt="Banner image of the blog"
                            className="object-cover h-full transition duration-700 scale-105"
                            position={siteConfig.banner.position}
                        ></MyImage>
                    </div>
                )} */}
                <Banner></Banner>
                <div
                    className="transition duration-700 w-full left-0 right-0 grid grid-cols-[17.5rem_auto] grid-rows-[auto_1fr_auto] lg:grid-rows-[auto]
    mx-auto gap-4 px-0 md:px-4 mt-96"
                >
                    <SideBar className="mb-4 row-start-2 row-end-3 col-span-2 lg:row-start-1 lg:row-end-2 lg:col-span-1 lg:max-w-[17.5rem] onload-animation"></SideBar>
                    <main className="transition-swup-fade col-span-2 lg:col-span-1 overflow-hidden">
                        <div className="onload-animation">
                            {children}
                            <div className="footer col-span-2 onload-animation hidden lg:block">
                                <Footer></Footer>
                            </div>
                        </div>
                    </main>
                    <div className="footer col-span-2 onload-animation block lg:hidden">
                        <Footer></Footer>
                    </div>
                </div>
                
                <div id="page-height-extend" className="hidden h-[300vh]"></div>
            </body>
        </html>
    );
}
