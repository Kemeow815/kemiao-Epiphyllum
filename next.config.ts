import type { NextConfig } from "next";
import path from "path";
import CopyWebpackPlugin from "copy-webpack-plugin";
const nextConfig: NextConfig = {
    /* config options here */
    images: {
        deviceSizes: [400, 512, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 200, 256, 384],
        domains: ["masttf.fun", "cn.cravatar.com", "www.zhilu.cyou", "cdn.jsdelivr.net", "www.example.com", "i1.wp.com", "7.isyangs.cn", "s2.loli.net", "unpkg.com"],
        remotePatterns: [
            {
                hostname: "masttf.fun",
            },
        ],
    },
    webpack: (config, { isServer }) => {
        // 添加资源复制规则
        config.plugins.push(
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: path.join(__dirname, "src/data/posts/assets"), // 你的原始资源目录
                        to: path.join(__dirname, "public/posts/assets"), // 复制到
                    },
                ],
            })
        );
        return config;
    },
};

export default nextConfig;
