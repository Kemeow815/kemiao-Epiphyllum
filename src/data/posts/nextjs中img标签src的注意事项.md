---
title: nextjs中img标签src的注意事项
date: 2025-03-13
description: nextjs中img标签src的注意事项
categories: Examples
tags: [nextjs, Markdown, image]
daftar: false
---

在 next.js 中只有 public 文件夹是公开可以访问的静态资源文件夹 `/` 直接是 `/public`

那么对于一些静态资源(图片)的访问就存在问题

-   使用 nextjs 的 Image 组件 地址是网络地址，需要在`next.config.ts` 配置

    ```
    images: {
            remotePatterns: [
                {
                    hostname: "your domain",
                },
            ],
        },
    ```

-   使用本地图片但是没有放在`/public`文件夹下

    这里以 markdown 文件内图片的相对引用为例，按照习惯图片存放在`./assets`下，这里对`posts/assets` 进行了特殊处理，使用$webpack$的插件$copy-webpack-plugin$ 进行自动的把`posts/assets` 在构建时拷贝到 `/public/posts/assets` 下，同时在 markdown 转 html 时 对 img 标签的 src 以 `./assets/`开头的相对路径 转为 `/public/posts/assets` 保证图片的正常显示

    在`next.config.ts`中配置

    ```ts
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
    ```

    对于 markdown 转 html 的操作

    ```js
    import { visit } from "unist-util-visit";
    export function rehypeImage() {
        return (tree) => {
            visit(tree, "element", (node) => {
                if (node.tagName === "img") {
                    if (node.properties.src.startsWith("./assets/")) {
                        node.properties.src = `/posts/${node.properties.src.slice(
                            2
                        )}`;
                    }
                }
            });
        };
    }
    ```

简单来说使用 Epiphyllum 将文章写在 posts 下，图片地址使用相对引用放在`./assets`下 即可正常显示
