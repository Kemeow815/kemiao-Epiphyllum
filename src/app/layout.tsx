import "@/styles/variables.css";
import "@/styles/globals.css";
import "@/styles/markdown.css"
import "@/styles/markdown-extend.css"
import 'katex/dist/katex.css'
import NavBar from "../components/navBar";
import Banner from "../components/Banner";
import SideBar from "../components/sideBar";
import Footer from "@/components/footer";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="zh-CN"
            className="text-sm md:text-base bg-gray-200"
        >
            <meta charSet="UTF-8" />
            <body className="min-h-screen">
                {/* navbar */}
                <NavBar></NavBar>
                {/* <Banner></Banner> */}
                <div
                    className="container mx-auto grid grid-cols-[auto_17.5rem] grid-rows-[auto_1fr_auto] lg:grid-rows-[auto] gap-4 px-0 md:px-4 mt-24"
                >
                    <main className="col-span-2 lg:col-span-1 overflow-hidden">
                        <div>
                           {children}
                            
                            <div className="footer col-span-2 onload-animation hidden lg:block">
                                <Footer></Footer>
                            </div>
                        </div>
                    </main>
                    <SideBar className="row-start-2 col-span-2 lg:row-start-1 lg:col-start-2 lg:col-span-1 lg:max-w-[17.5rem]"></SideBar>
                    <div className="footer col-span-2 onload-animation block lg:hidden">
                        <Footer></Footer>
                    </div>
                </div>
                
                <div id="page-height-extend" className="hidden h-[300vh]"></div>
            </body>
        </html>
    );
}
