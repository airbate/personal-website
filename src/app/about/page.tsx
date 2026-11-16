import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SITE_CONFIG } from "@/data/site";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)] text-[var(--color-black)]">
      <Navbar />

      <main className="page-wrapper pt-[var(--space-xl)]">
        <article className="max-w-[65ch]">
          <h1 className="font-[family-name:var(--font-serif)] text-[length:var(--font-size-2xl)] font-thin leading-[var(--leading-tight)] text-[var(--color-black)]">
            About {SITE_CONFIG.name}
          </h1>

          <div className="mt-[var(--space-m)] space-y-5 font-[family-name:var(--font-body)] text-[length:var(--font-size-base)] font-light leading-[var(--leading-loose)] text-[var(--color-gray-800)]">
            <p>
              你好，我是 <strong>{SITE_CONFIG.name}</strong>。这里是我的个人数字花园与书单档案馆。
            </p>
            <p>
              我在这里记录自己读过的书、阅读时产生的零散笔记，以及对技术、设计与人文的持续观察。
            </p>
            <p>
              如果你想添加或更新书单，只需要编辑仓库中的{" "}
              <code className="rounded bg-[var(--color-gray-100)] px-1.5 py-0.5 font-mono text-[14px]">
                src/data/books.ts
              </code>{" "}
              文件即可。
            </p>
          </div>

          <div className="mt-[var(--space-l)] flex flex-wrap gap-6 font-[family-name:var(--font-sans)] text-[15px]">
            <Link href="/library" className="styled-link">
              <span>浏览我的书单 →</span>
            </Link>
            <a
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="styled-link"
            >
              <span>访问 GitHub →</span>
            </a>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
