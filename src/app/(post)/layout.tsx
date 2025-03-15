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
            {children}
        </>
    );
}
