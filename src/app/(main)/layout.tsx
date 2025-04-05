import SideBar from "@/components/sideBar";
import Footer from "@/components/footer";
import NavBar from "@/components/navBar";
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <NavBar />
            {/* md:grid-cols-[auto_17.5rem]??? */}
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-[auto_17.5rem] grid-rows-[auto_1fr_auto] lg:grid-rows-[auto] gap-4 px-2 md:px-4 mt-24">
                <main className="col-span-2 lg:col-span-1 overflow-hidden">
                    <div>
                        {children}
                        <div className="footer col-span-2 onload-animation hidden lg:block">
                            <Footer></Footer>
                        </div>
                    </div>
                </main>
                <SideBar className="row-start-2 col-span-2 lg:row-start-1 lg:col-start-2 lg:col-span-1 lg:max-w-[17.5rem] min-w-[0px]"></SideBar>
                <div className="footer col-span-2 onload-animation block lg:hidden">
                    <Footer></Footer>
                </div>
            </div>
        </>
    );
}
