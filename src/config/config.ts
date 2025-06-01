export const WebName: string = "喵落阁";
export const WebUrl: string = "https://blog-v7.kemeow.top";
export const WebStartTime: string = "2025-06-01";
export interface ProfileConfig {
    name: string;
    bio: string;
    imageSrc: string;
}
//favicon
// 使用 https://realfavicongenerator.net 生成图片替换/public/favion 文件夹
export const profileConfig: ProfileConfig = {
    name: "克喵爱吃卤面",
    bio: "愿你看清一切真相后，依旧热爱你的家人和朋友。",
    imageSrc: "https://cn.cravatar.com/avatar/1F6C8947D35A8186A1647009BA8BC5F2?size=256",
    //如果放在public文件夹下，则直接/即可
    //如果图片是链接请在next.config.js中配置images:{domains: ["masttf.fun"],}
};

export interface friend {
    name: string;
    url: string;
    avatar: string;
    bio: string;
}
export const friends: friend[] = [
    {
        name: "Masttf",
        url: "https://epiphyllum.masttf.fun/",
        avatar: "https://masttf.fun/static/img/1f3cc55c3d0693d0583f4e7fff5c7aab.b_6dbd850baa93eeacc9c174faafb1e29b.webp",
        bio: "Masttf",
    },
    {
        name: "纸鹿摸鱼处",
        url: "https://blog.zhilu.cyou/",
        avatar: "https://www.zhilu.cyou/api/avatar.png",
        bio: "纸鹿至麓不知路，支炉制露不止漉",
    },
];

export interface link {
    name: string;
    url: string;
    symbolId: string;
}
export const links: link[] = [
    {
        name: "github",
        url: "https://github.com/Kemeow815",
        symbolId: "ai:fa6-brands:github",
    },
    {
        name: "bilibili",
        url: "https://space.bilibili.com/3546643173477234",
        symbolId: "ai:fa6-brands:bilibili",
    },
    {
        name: "music",
        url: "https://music.163.com/#/user/home?id=1725716511",
        symbolId: "ai:fa6:music",
    },
    {
        name: "telegram",
        url: "https://t.me/KemiaoJun",
        symbolId: "ai:fa6:telegram",
    },
    {
        name: "email",
        url: "mailto:me@kemiaosw.top",
        symbolId: "ai:fa6:envelope",
    }
    // symbolId  定义在Icon 组件内， /src/components/Icon.tsx 用来管理svg图标
    // 没有的图标可以去找path https://fontawesome.com/
];

export interface linkItem {
    name: string;
    url: string;
}
export const linkList: linkItem[] = [
    { name: "首页", url: "/" },
    { name: "归档", url: "/archive" },
    { name: "分类", url: "/categories" },
    { name: "标签", url: "/tags" },
    { name: "友链", url: "/friends" },
    { name: "关于", url: "/about" },
];
