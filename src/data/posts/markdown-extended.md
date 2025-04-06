---
title: Markdown 拓展语法
date: 2025-03-20
description: 更多的markdown语法特性
category: "Examples"
tags: [Demo, Example, Markdown]
pin: true
draft: false
image: /test.jpg
---

## GitHub 仓库卡片

可以通过动态卡片链接到 GitHub 仓库，页面加载时会自动从 GitHub API 获取仓库信息

::github{repo="Masttf/Epiphyllum"}

创建一个 GitHub 仓库卡片可以用这个代码 `::github{repo="<owner>/<repo>"}`.

```markdown
::github{repo="Masttf/Epiphyllum"}
```

## 提示框类型

支持以下类型的提示框: `note` `tip` `important` `warning` `caution`

:::note
需要用户特别注意的信息，即使快速浏览时也不应忽略。
:::

:::tip
帮助用户更高效完成任务的补充性信息。
:::

:::important
确保用户成功操作所需的关键信息
:::

:::warning
涉及潜在风险，需要用户立即关注的关键内容。
:::

:::caution
警示某项操作可能引发的负面后果。
:::

### 基本语法

```markdown
:::note
需要用户特别注意的信息，即使快速浏览时也不应忽略。
:::

:::tip
帮助用户更高效完成任务的补充性信息。
:::
```

### GitHub 语法

> [!NOTE]
> Github 语法也支持。

```
> [!NOTE]
> Github 语法也支持。

> [!TIP]
> Github 语法也支持。
```
