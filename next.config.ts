import type { NextConfig } from "next";
import path from "path";
import CopyWebpackPlugin from "copy-webpack-plugin";
const nextConfig: NextConfig = {
    /* config options here */
    images: {
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
