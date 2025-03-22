---
title: next中image组件使用技巧
date: 2025-03-22
description: next中image组件使用技巧
category: "Examples"
tags: [nextjs, image]
top: 0
draft: false
---

-   使用 nextjs 的 Image 组件 地址是网络地址，需要在`next.config.ts` 配置

```ts
images: {
    remotePatterns: [
        {
            hostname: "your domain",
        },
    ],
},
```

-   deviceSizes 和 imageSizes 配置

    deviceSIzes 和 imageSizes 两个连接起来用来生成图片的`srcset` 所以想要图片比较清晰可以添加尺寸

-   填充容器 fill 属性

​ Image 组件的一个问题就是需要填宽和高，设置 fill 属性就不需要了，会填充满容器大小，一般配合 sizes 属性一起使用，sizes=”100vw“ 则图片的宽度是 视口宽度* sizes/100 * DPR 来产生最后要选择的图片的宽度，同时`next/image` 组件会根据 `sizes` 属性动态优化 `srcset` 的生成
