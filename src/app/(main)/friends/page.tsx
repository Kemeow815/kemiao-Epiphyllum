import Link from "next/link";
import Image from "next/image";
import { friends } from "@/config/config";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "MyFriends",
    description: "MyFriends",
    keywords: [...friends.map((friend) => friend.name)],
};
export default function Page() {
    return (
        <div className="card-base px-8 py-6">
            <div className="text-3xl font-bold mx-auto text-center">
                Friends
            </div>
            <p className="py-8 text-lg">以下是本站的友情链接, 排名不分先后:</p>
            <div className="flex gap-4 flex-wrap">
                {friends.map((friend, index) => (
                    <Link
                        href={friend.url}
                        key={index}
                        target="_blank"
                        className="bg-sky-200 border border-black border-solid card-base h-[6.5rem] w-64 transition duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 "
                    >
                        <div className="h-full flex items-center gap-4 px-4">
                            <div className="overflow-hidden relative h-20 w-20 rounded-[var(--radius-large)]">
                                <Image
                                    src={friend.avatar}
                                    alt={friend.name}
                                    fill
                                    sizes="20vw"
                                    quality={100}
                                    className={`object-cover object-center`}
                                />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold">
                                    {friend.name}
                                </h2>
                                <p className="text-sm">{friend.bio}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
