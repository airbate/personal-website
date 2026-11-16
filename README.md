# airbate — Personal Website & Reading Library

一个以**个人书单（Library）**与**阅读笔记（Reading Notes）**为核心的极简数字花园个人网站，基于 Next.js + Tailwind CSS v4 构建。

## 本地运行

```bash
bun install
bun run dev
```

访问 `http://localhost:3000`。

## 如何添加你看过的书籍

1. 将书籍封面图片放入 `public/images/books/`（或直接使用网络封面 URL）。
2. 打开 `src/data/books.ts`，在 `BOOKS` 数组中添加一条记录：

```ts
{
  id: "unique-id",
  title: "书名",
  author: "作者",
  cover: "/images/books/your-cover.webp",
  category: "Technology", // 分类：Science / Technology / History / Anthropology 等
  readYear: "2026",
  rating: 5,
  takeaway: "简短的一句话读后感或收获。",
  href: "https://book.douban.com/...", // 外部参考链接
}
```

## 自定义个人信息与阅读笔记

- **站点名称、简介、GitHub 链接**：编辑 `src/data/site.ts`
- **阅读笔记**：编辑 `src/data/notes.ts`
