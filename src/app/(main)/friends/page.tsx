import Link from "next/link";
import Image from "next/image";
import { friends } from "@/config/config";
import { Metadata } from "next";
import GiscusComments from "@/components/GiscusComments";
export const metadata: Metadata = {
    title: "MyFriends",
    description: "MyFriends",
    keywords: [...friends.map((friend) => friend.name)],
};
export default function Page() {
    return (
        <>
            <div className="card-base px-8 py-6">
                <div className="text-3xl font-bold mx-auto text-center">
                    克喵の朋友们
                </div>
                <p className="py-8 text-lg">以下是本站的友情链接:</p>
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
                <div className="mt-8 pt-8 text-lg border-t border-dashed">
  <h2 className="text-xl font-semibold mb-4">申请友链请先将本站添加到友链后再申请</h2>
  <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
    <code className="text-base font-mono block">
      {`我的名称: 喵落阁/克喵爱吃卤面
网站地址: https://blog-v7.kemeow.top
描述: 愿你看清一切真相后，依旧热爱你的家人和朋友。
头像: https://cn.cravatar.com/avatar/1F6C8947D35A8186A1647009BA8BC5F2?size=256`}
    </code>
  </pre>
</div>
<div className="mt-4 pt-4 text-lg border-t border-dashed">
  <h2 className="text-xl font-semibold mb-4">申请友链格式</h2>
  <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
    <code className="text-base font-mono block">
      {`名称: 
网站地址: 
描述: 
头像(https): `}
    </code>
  </pre>
</div>
            </div>
            <GiscusComments />
        </>
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
                    className="absolute -left-2 top-0 z-0 my-0 h-full w-2/3 bg-white object-cover opacity-15 group-hover:opacity-30 transition-all duration-150 ease-in-out"
                    style={{
                        maskImage:
                            "linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)",
                    }}
                />
            </div>
        </Link>
    );
}
