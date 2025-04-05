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
            <p className="py-8 text-lg">
                以下是本站的友情链接, 顺序当然是随机的啦～:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3">
                {friends.map((friend, index) => (
                    <FriendItem
                        key={index}
                        url={friend.url}
                        name={friend.name}
                        avatar={friend.avatar}
                        bio={friend.bio}
                    />
                ))}
            </div>
        </div>
    );
}
function FriendItem({
    url,
    name,
    avatar,
    bio,
}: {
    url: string;
    name: string;
    avatar: string;
    bio: string;
}) {
    return (
        <Link href={url} target="_blank" className="no-underline">
            <div className="group relative h-full overflow-hidden rounded-2xl border bg-white px-4 py-2 transition-colors hover:bg-slate-100 sm:py-3">
                <div className="relative z-10 flex h-full items-center gap-3">
                    <div className="relative h-16 w-16 min-w-16 overflow-hidden rounded-full">
                        <Image
                            src={avatar}
                            alt={name}
                            width={80}
                            height={80}
                            loading="lazy"
                            decoding="async"
                            className="my-0 bg-white"
                        />
                        <div className="absolute left-0 top-0 h-full w-full">
                            <div className="flex h-full w-full items-center justify-center rounded-full bg-black opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-50">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="me-2 text-white"
                                >
                                    <line
                                        x1="5"
                                        y1="12"
                                        x2="19"
                                        y2="12"
                                        className="translate-x-4 scale-x-0 transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:scale-x-100"
                                    />
                                    <polyline
                                        points="12 5 19 12 12 19"
                                        className="translate-x-0 transition-all duration-300 ease-in-out group-hover:translate-x-1"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <p className="my-0 line-clamp-1 text-sm group-hover:text-sky-600">
                            {name}
                        </p>
                        <p className="my-0 line-clamp-1 text-xs text-muted-foreground sm:line-clamp-2">
                            {bio}
                        </p>
                    </div>
                </div>
                <Image
                    src={avatar}
                    alt={`${name} bg`}
                    loading="lazy"
                    width={80}
                    height={80}
                    decoding="async"
                    className="absolute -left-2 top-0 z-0 my-0 h-full w-2/3 bg-white object-cover opacity-15"
                    style={{
                        maskImage:
                            "linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)",
                    }}
                />
            </div>
        </Link>
    );
}
