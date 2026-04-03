---
title: Getting Started
description: Demo page with core markdown blocks
summary: Quick tour of the main markdown blocks and page layout
icon: summary
order: 10
updatedAt: 2026-04-01
---

# Welcome

This page is a template and a quick styling playground for markdown content.

## 1. Text styles

Regular paragraph text.

Use **bold**, *italic* and `inline code` when needed.

Link example: [Open homepage](../) or [COSMOS Landing](https://cosmosresto.ru/).

---

## 2. Lists

Unordered list:

- First item
- Second item
- Third item

Ordered list:

1. Step one
2. Step two
3. Step three

## 3. Quote

> This is a blockquote example.
>
> Use it for notes and highlights.

## 4. Code blocks

Terminal commands:

```bash
npm ci
npm run dev
```

TypeScript example:

```ts
type User = {
  id: string
  name: string
}

export function greet(user: User): string {
  return `Hello, ${user.name}!`
}
```

## 5. Heading level 3

### Nested section

Use this area for additional details and implementation notes.

### Heading with a custom anchor {#custom-anchor}

Use `{#custom-anchor}` at the end of a heading to set the anchor ID manually.

Example link to this section: [Jump to custom anchor](#custom-anchor)

## 6. Images

Example image:

![Mock image](../images/mock.jpg)

*Fig. 1. Mock example.*

Gallery:

[[gallery columns=3 gap=12]]
![Mock image](../images/mock.jpg)
![Mock image](../images/mock.jpg)
![Mock image](../images/mock.jpg)
[[/gallery]]

Carousel:

[[gallery gap=12 layout=carousel]]
![Mock image](../images/mock.jpg)
![Mock image](../images/mock.jpg)
![Mock image](../images/mock.jpg)
[[/gallery]]

## 7. Handmade checklist

- [ ] Draft
- [ ] Review
- [x] Published

When finished, mark the task as done.

## 8. Tables

| Plan | Price | Notes |
| --- | ---: | --- |
| Starter | $9 | Drafts and quick notes |
| Team | $29 | Collaboration space |
| Enterprise | Custom | Dedicated support |

## 9. Info Blocks

[[info note]]
This is a basic note.
[[/info]]

[[info tip]]
This is a tip.
[[/info]]

[[info warning hasIcon]]
This is a warning.
[[/info]]

[[info type=custom hasIcon icon=lambda color=#FE89ED]]
Custom block with icon and color.
[[/info]]
