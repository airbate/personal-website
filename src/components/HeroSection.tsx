import React from "react";
import { SITE_CONFIG } from "@/data/site";

export function HeroSection() {
  return (
    <header className="mt-[var(--space-xl)] flex flex-col">
      <h1
        style={{ "--cascade": 0 } as React.CSSProperties}
        className="cascade max-w-[17.5ch] font-[family-name:var(--font-serif)] text-[length:var(--font-size-3xl)] font-normal leading-[1.06] tracking-[-0.02em] text-[var(--color-black)]"
      >
        <b className="font-bold">{SITE_CONFIG.heroHeadlinePrefix} </b>
        {SITE_CONFIG.heroHeadlineRest}
      </h1>

      <h2
        style={{ "--cascade": 1 } as React.CSSProperties}
        className="cascade mt-[var(--space-m)] max-w-[44ch] font-[family-name:var(--font-body)] text-[length:var(--font-size-md)] font-light leading-[var(--leading-base)] text-[var(--color-gray-600)]"
      >
        {SITE_CONFIG.heroSubtitleLine1}
        <br />
        {SITE_CONFIG.heroSubtitleLine2}{" "}
        <b className="font-semibold text-[var(--color-black)]">
          <span className="inline-block">
            <a
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="styled-link"
            >
              <span>{SITE_CONFIG.githubHandle}</span>
            </a>
          </span>
        </b>
      </h2>
    </header>
  );
}
