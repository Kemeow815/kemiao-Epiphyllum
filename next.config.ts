import type { NextConfig } from "next";
import path from "path";
const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                hostname: "masttf.fun",
            },
        ],
    },
    webpack(config) {
        // 添加对图片文件的处理规则
        config.module.rules.push({
            test: /\.(png|jpg|jpeg|gif|svg|webp)$/i,
            // 指定处理的目录（仅处理 /src/data/posts/assets 下的图片）
            include: [path.resolve(__dirname, "src/data/posts/assets")],
            use: [
                {
                    loader: "file-loader",
                    options: {
                        // 输出路径（相对于 .next/ 目录）
                        outputPath: "static/media/posts/",
                        // 公共访问路径
                        publicPath: "/_next/static/media/posts/",
                        // 文件名格式（[name] 是原文件名，[hash] 防止缓存）
                        name: "[name].[hash].[ext]",
                    },
                },
            ],
        });

        return config;
    },
};

export default nextConfig;
