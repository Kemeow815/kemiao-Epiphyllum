---
title: 在nextjs中使用overlayscrollbars
date: 2025-03-13
description: 在nextjs中使用overlayscrollbars
tags: [Example, Scrollbars]
category: Examples
draft: false
---

原生的滚动会挤占元素，在 epiphyllum 中使用 overlayscrollbars， overlayscrollbars 在 react 中提供了一个组件

```
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
```

具体的内容可以看[官方文档](https://github.com/KingSora/OverlayScrollbars/tree/master/packages/overlayscrollbars-react)

这里主要讲一下如何给 body 元素添加 overlayscrollbars

因为 OverlayScrollbarsComponent 是一个客户端组件，因此不得不二次封装

但是 body 元素不能被 div 嵌套，因此就无法直接使用这个组件

解决这个问题的方法我是通过新建了一个空组件，在空组件中使用 useEffect 使用 js 给 body 元素添加 overlayscrollbars

```tsx
"use client";
import { useEffect } from "react";
import { OverlayScrollbars } from "overlayscrollbars";
export default function ScrollBar() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            OverlayScrollbars(
                {
                    target: document.body,
                    cancel: {
                        nativeScrollbarsOverlaid: true,
                    },
                },
                {
                    scrollbars: {
                        theme: "scrollbar-base scrollbar-auto py-1",
                        autoHide: "move",
                        autoHideDelay: 500,
                        autoHideSuspend: false,
                    },
                }
            );
        }

        return () => {
            const bodyOsInstance = OverlayScrollbars(document.body);
            bodyOsInstance?.destroy();
        };
    }, []);
    return null;
}
```
