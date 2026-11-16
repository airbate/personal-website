import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { READING_NOTES } from "@/data/notes";
import { GrowthIcon } from "@/components/icons";

export default function NotesPage() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)] text-[var(--color-black)]">
      <Navbar />

      <main className="page-wrapper pt-[var(--space-xl)]">
        <header className="max-w-[65ch]">
          <h1 className="font-[family-name:var(--font-serif)] text-[length:var(--font-size-2xl)] font-thin leading-[var(--leading-tight)] text-[var(--color-black)]">
            Reading Notes
          </h1>
          <p className="mt-[var(--space-2xs)] font-[family-name:var(--font-sans)] text-[length:var(--font-size-base)] font-light text-[var(--color-gray-600)]">
            读书过程中随手记下的灵感、片段与思考。
          </p>
        </header>

        <div className="mt-[var(--space-xl)] flex max-w-[75ch] flex-col divide-y divide-[var(--color-gray-200)]">
          {READING_NOTES.map((note) => (
            <article
              key={note.slug}
              id={note.slug}
              className="py-[var(--space-m)] first:pt-0"
            >
              <div className="flex items-center gap-2 font-[family-name:var(--font-sans)] text-[13px] text-[var(--color-gray-500)]">
                <GrowthIcon stage={note.growth} size={18} />
                <span>{note.dateLabel}</span>
                {note.bookTitle && (
                  <>
                    <span>·</span>
                    <span>{note.bookTitle}</span>
                  </>
                )}
              </div>

              <h2 className="mt-2 font-[family-name:var(--font-serif)] text-[length:var(--font-size-lg)] font-normal leading-[var(--leading-snug)] text-[var(--color-black)]">
                {note.title}
              </h2>

              <p className="mt-2 font-[family-name:var(--font-sans)] text-[length:var(--font-size-sm)] font-light leading-[var(--leading-loose)] text-[var(--color-gray-800)]">
                {note.summary}
              </p>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
