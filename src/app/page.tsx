import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { LibraryShowcase } from "@/components/LibraryShowcase";
import { ReadingNotesSection } from "@/components/ReadingNotesSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)] text-[var(--color-black)]">
      <Navbar />

      <main className="page-wrapper">
        <HeroSection />

        <div style={{ height: "var(--space-2xl)" }} />

        <div
          className="cascade-fade flex flex-col gap-[var(--space-2xl)]"
          style={{ "--cascade": 2 } as React.CSSProperties}
        >
          <LibraryShowcase />
          <ReadingNotesSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
