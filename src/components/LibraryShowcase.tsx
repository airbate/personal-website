"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BOOK_CATEGORIES, BOOKS } from "@/data/books";
import type { BookItem } from "@/types/content";
import { ArrowRightIcon, ExternalLinkIcon, XMarkIcon } from "@/components/icons";

interface LibraryShowcaseProps {
  showHeaderLink?: boolean;
  title?: string;
  subtitle?: string;
}

export function LibraryShowcase({
  showHeaderLink = true,
  title = "Library",
  subtitle = "看过的书，以及值得反复翻阅的书单与笔记。",
}: LibraryShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeBook, setActiveBook] = useState<BookItem | null>(null);

  const filteredBooks =
    selectedCategory === "All"
      ? BOOKS
      : BOOKS.filter((b) => b.category === selectedCategory);

  return (
    <section className="w-full">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          {showHeaderLink ? (
            <Link href="/library" className="group inline-block">
              <h2 className="flex items-center gap-2 font-[family-name:var(--font-serif)] text-[length:var(--font-size-2xl)] font-thin leading-[var(--leading-tight)] text-[var(--color-black)] transition-colors duration-150 group-hover:text-[var(--color-bright-crimson)]">
                <span>{title}</span>
                <ArrowRightIcon
                  size={24}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </h2>
            </Link>
          ) : (
            <h1 className="font-[family-name:var(--font-serif)] text-[length:var(--font-size-2xl)] font-thin leading-[var(--leading-tight)] text-[var(--color-black)]">
              {title}
            </h1>
          )}

          <p className="mt-1 font-[family-name:var(--font-sans)] text-[length:var(--font-size-sm)] font-light text-[var(--color-gray-600)]">
            {subtitle}
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {BOOK_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`cursor-pointer rounded-full border px-3.5 py-1 font-[family-name:var(--font-sans)] text-[13px] transition-colors duration-150 ${
                  isActive
                    ? "border-[var(--color-sea-blue)] bg-[var(--color-sea-blue-20)] font-semibold text-[var(--color-dark-sea-blue)]"
                    : "border-[var(--color-gray-300)] bg-[var(--color-light-cream)] text-[var(--color-gray-600)] hover:border-[var(--color-gray-400)] hover:text-[var(--color-black)]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Books Grid */}
      <div className="mt-[var(--space-l)] grid grid-cols-2 gap-[var(--space-s)] sm:grid-cols-3 lg:grid-cols-4">
        {filteredBooks.map((book) => (
          <button
            key={book.id}
            type="button"
            onClick={() => setActiveBook(book)}
            className="book-link block cursor-pointer border-none bg-transparent p-0 text-left"
          >
            <div className="book-card" data-small="true">
              <div className="relative overflow-hidden rounded-[var(--border-radius-base)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={book.cover}
                  alt={book.title}
                  width={230}
                  height={345}
                  loading="eager"
                />
                <div className="external-hover-link pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200">
                  <span className="rounded-full bg-[var(--color-light-cream)]/90 px-3 py-1 font-[family-name:var(--font-sans)] text-[12px] font-bold text-[var(--color-crimson)] shadow-sm">
                    查看书评 / 详情
                  </span>
                </div>
              </div>

              <div className="book-meta">
                <p className="book-title font-[family-name:var(--font-body)] text-[length:var(--font-size-sm)] font-normal">
                  {book.title}
                </p>
                <div className="flex items-center justify-between gap-2 font-[family-name:var(--font-sans)] text-[13px] font-light text-[var(--color-gray-600)]">
                  <span>{book.author}</span>
                  <span className="shrink-0 text-[11px] text-[var(--color-gray-500)]">
                    {book.readYear}
                  </span>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Book Detail Modal */}
      {activeBook && (
        <div
          className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/40 p-4 backdrop-blur-[2px]"
          onClick={() => setActiveBook(null)}
        >
          <div
            className="relative w-full max-w-[600px] rounded-[var(--border-radius-lg)] border border-[var(--color-tinted-cream)] bg-[var(--color-light-cream)] p-6 shadow-[var(--box-shadow-lg)] sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveBook(null)}
              aria-label="Close modal"
              className="absolute right-4 top-4 cursor-pointer rounded-full border-none bg-transparent p-1 text-[var(--color-gray-500)] transition-colors hover:text-[var(--color-black)]"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            <div className="flex flex-col gap-6 sm:flex-row">
              <div className="w-[140px] shrink-0 self-center sm:self-start">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activeBook.cover}
                  alt={activeBook.title}
                  className="w-full rounded-[var(--border-radius-base)] border border-[var(--color-tinted-cream)] shadow-[var(--box-shadow-md)]"
                />
              </div>

              <div className="flex flex-col">
                <div className="flex flex-wrap items-center gap-2 font-[family-name:var(--font-sans)] text-[12px]">
                  <span className="rounded-full bg-[var(--color-sea-blue-20)] px-2.5 py-0.5 font-medium text-[var(--color-dark-sea-blue)]">
                    {activeBook.category}
                  </span>
                  <span className="text-[var(--color-gray-500)]">
                    读于 {activeBook.readYear}
                  </span>
                  {activeBook.rating && (
                    <span className="text-[var(--color-bright-crimson)]">
                      {"★".repeat(activeBook.rating)}
                      {"☆".repeat(5 - activeBook.rating)}
                    </span>
                  )}
                </div>

                <h3 className="mt-2 font-[family-name:var(--font-serif)] text-[24px] font-normal leading-[1.2] text-[var(--color-black)]">
                  {activeBook.title}
                </h3>

                <p className="mt-1 font-[family-name:var(--font-sans)] text-[14px] text-[var(--color-gray-600)]">
                  {activeBook.author}
                </p>

                <div className="mt-4 border-t border-[var(--color-gray-200)] pt-4 font-[family-name:var(--font-sans)] text-[15px] leading-[1.6] text-[var(--color-gray-800)]">
                  {activeBook.takeaway}
                </div>

                <div className="mt-5">
                  <a
                    href={activeBook.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-[family-name:var(--font-sans)] text-[14px] font-semibold text-[var(--color-bright-crimson)] hover:text-[var(--color-crimson)]"
                  >
                    <span>在 Google Books 查看</span>
                    <ExternalLinkIcon size={15} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
