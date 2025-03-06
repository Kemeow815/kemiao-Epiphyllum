import Link from "next/link";
import MyImage from "@/components/myImage";
interface friend {
    name: string;
    url: string;
    avatar: string;
    description: string;
}
const friends: friend[] = [
    {
        name: "Fuyuki_Vila",
        url: "https://fuyuki.fun/",
        avatar: "https://masttf.fun/static/img/74d702568c910c2db809b5b88e695baf.clipboard-2025-02-26.webp",
        description: "ゆき - ヴぃら",
    },
    {
        name : "Masttf",
        url : "https://masttf.fun/",
        avatar : "https://masttf.fun/static/img/1f3cc55c3d0693d0583f4e7fff5c7aab.b_6dbd850baa93eeacc9c174faafb1e29b.webp",
        description : "Masttf"
    }
]
export default function Page() {
    return (<div className="card-base p-8">
        <div className="text-2xl font-bold mx-auto text-center">友情链接</div>
        <p className="py-8 text-lg">以下是本站的友情链接, 排名不分先后:</p>
        <div className="flex gap-4 flex-wrap">
            {
                friends.map((friend, index) => (
                    <Link href={friend.url} key={index} className="bg-sky-200 border border-black border-solid card-base h-[6.5rem] w-64 transition duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 ">
                        <div className="h-full flex items-center gap-4 px-4">
                            <MyImage src={friend.avatar} alt={friend.name} className="h-20 w-20 rounded-[var(--radius-large)]"></MyImage>
                            <div>
                                <h2 className="text-xl font-bold">{friend.name}</h2>
                                <p className="text-sm">{friend.description}</p>
                            </div>
                        </div>
                    </Link>
                ))
            }
            
        </div>
    </div>);
}
