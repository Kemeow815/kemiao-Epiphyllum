export interface ProfileConfig {
    name: string;
    bio: string;
    imageSrc: string;
}
//favicon.ico 图标直接替换/src/app文件夹中的图片即可 以favicon.ico命名
export const profileConfig: ProfileConfig = {
    name: "Masttf",
    bio: "Acmer",
    imageSrc: "/avatar.jpg",
    //如果放在public文件夹下，则直接/即可
    //如果图片是链接请在next.config.js中配置images:{domains: ["masttf.fun"],}
};
