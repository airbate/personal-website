import React from "react";
import { Navbar } from "@/components/Navbar";
import { LibraryShowcase } from "@/components/LibraryShowcase";
import { Footer } from "@/components/Footer";

export default function LibraryPage() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)] text-[var(--color-black)]">
      <Navbar />

      <main className="page-wrapper pt-[var(--space-xl)]">
        <LibraryShowcase
          showHeaderLink={false}
          title="My Library"
          subtitle="我看过的所有书籍清单与个人阅读笔记。点击任意封面可查看读后简评。"
        />
      </main>

      <Footer />
    </div>
  );
}
