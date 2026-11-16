import React from "react";
import Link from "next/link";
import { READING_NOTES } from "@/data/notes";
import { ArrowRightIcon, GrowthIcon } from "@/components/icons";

export function ReadingNotesSection() {
  return (
    <section className="w-full">
      <Link href="/notes" className="group inline-block">
        <h3 className="flex items-center gap-1.5 font-[family-name:var(--font-sans)] text-[length:var(--font-size-md)] font-bold leading-[var(--leading-tight)] text-[var(--color-black)] transition-colors duration-150 group-hover:text-[var(--color-bright-crimson)]">
          <span>Reading Notes</span>
          <ArrowRightIcon
            size={18}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </h3>
      </Link>

      <div className="mt-1 mb-[var(--space-m)] font-[family-name:var(--font-sans)] text-[length:var(--font-size-sm)] font-light text-[var(--color-gray-600)]">
        零散的阅读随笔与摘录，随时间慢慢生长。
      </div>

      <div className="grid grid-cols-1 gap-[var(--space-s)] md:grid-cols-3">
        {READING_NOTES.map((note) => (
          <Link
            key={note.slug}
            href={`/notes#${note.slug}`}
            className="essay-card group"
          >
            <div className="flex items-center gap-2 font-[family-name:var(--font-sans)] text-[12px] text-[var(--color-gray-500)]">
              <GrowthIcon stage={note.growth} size={16} />
              <span>{note.dateLabel}</span>
              {note.bookTitle && (
                <>
                  <span>·</span>
                  <span className="truncate">{note.bookTitle}</span>
                </>
              )}
            </div>

            <h4 className="my-[var(--space-2xs)] font-[family-name:var(--font-body)] text-[length:var(--font-size-base)] font-normal leading-[var(--leading-snug)] text-[var(--color-black)] transition-colors group-hover:text-[var(--color-crimson)]">
              {note.title}
            </h4>

            <p className="font-[family-name:var(--font-sans)] text-[length:var(--font-size-xs)] font-light leading-[var(--leading-base)] text-[var(--color-gray-600)]">
              {note.summary}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
