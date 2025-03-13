---
title: 在Next.js中使用Pagefind
date: 2025-03-13
description: Pagefind使用实例.
tags: [Example]
category: Examples
draft: false
---

Pagefind 是对于构建后生成的静态文件，生成索引文件

在 next.js 使用 SSG 渲染，可以把博客的 html 文件加载出来，但是 Pagefind 是在静态文件生成后才能生成索引文件，因此需要加上

```
/* webpackIgnore: true */ "./pagefind/pagefind.js"
```

webpack 的打包忽视，使用相对路径进行动态加载

同时对于 pagefind 的配置 `package.json` 的脚本中

```
"build": "next build && pnpm generate-pagefind",
"generate-pagefind": "pagefind --site .next --output-path .next/static/chunks/app/pagefind"
```

因为我使用的是 nextjs 的 app route 所以我把索引文件放在`app/pagefind` 下 这个可以通过相对路径来正确获取

然后就可以使用 useEffect 在组件挂载时进行加载，同时因为测试环境不会

```tsx
useEffect(() => {
    async function loadPagefind() {
        if (process.env.NODE_ENV === "production") {
            window.pagefind = await import(
                // @ts-expect-error pagefind generated after build
                /* webpackIgnore: true */ "../pagefind/pagefind.js"
            );
        } else {
            window.pagefind = {
                search: () => ({
                    results: [
                        {
                            id: "masttf",
                            data: async () => ({
                                url: "/",
                                meta: {
                                    title: "This Is a Fake Search Result",
                                },
                                excerpt:
                                    "Because the search cannot work in the <mark>dev</mark> environment.",
                            }),
                        },
                        {
                            id: "masttf2",
                            data: async () => ({
                                url: "/archive",
                                meta: {
                                    title: "If You Want to Test the Search",
                                },
                                excerpt:
                                    "Try running <mark>npm build && npm preview</mark> instead.",
                            }),
                        },
                    ],
                }),
            };
        }
    }
    loadPagefind();
}, []);
```

这样就可以使用 window.search() 进行搜索

具体实现可以参考 [Epiphyllum]([Masttf/Epiphyllum: A static blog powered by react to be continue](https://github.com/Masttf/Epiphyllum))
