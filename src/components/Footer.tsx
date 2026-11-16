import React from "react";
import Link from "next/link";
import { FOOTER_LINKS_COL1, FOOTER_LINKS_COL2, SITE_CONFIG } from "@/data/site";
import { GithubIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="mt-[var(--space-2xl)] border-t border-[var(--color-gray-300)] py-[var(--space-xl)]">
      <div className="mx-auto my-[var(--space-m)] grid max-w-[1400px] grid-cols-1 gap-[var(--space-l)] px-[var(--space-xs)] md:grid-cols-[2fr_1fr] md:px-[var(--space-l)]">
        {/* Left: Personal Info & GitHub */}
        <div className="flex flex-col items-start">
          <h3 className="font-[family-name:var(--font-body)] text-[length:var(--font-size-md)] font-normal text-[var(--color-black)]">
            {SITE_CONFIG.name}&apos;s Reading Garden
          </h3>

          <p className="mt-1 font-[family-name:var(--font-sans)] text-[14px] font-light text-[var(--color-gray-600)]">
            A quiet place on the web to archive books and notes.
          </p>

          <div className="mt-[var(--space-s)] flex items-center gap-4 text-[var(--color-gray-500)]">
            <a
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="me noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center gap-2 transition-colors duration-150 hover:text-[var(--color-black)]"
            >
              <GithubIcon />
              <span className="font-[family-name:var(--font-sans)] text-[14px]">
                {SITE_CONFIG.githubHandle}
              </span>
            </a>
          </div>

          <span className="mt-[var(--space-s)] font-[family-name:var(--font-sans)] text-[13px] text-[var(--color-gray-500)]">
            {SITE_CONFIG.copyright}
          </span>
        </div>

        {/* Right: 2-Column Sitemap */}
        <div className="grid grid-cols-2 gap-x-[var(--space-l)] gap-y-2 self-start">
          <ul className="flex flex-col gap-2.5">
            {FOOTER_LINKS_COL1.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="styled-link inline-block">
                  <span className="!font-[family-name:var(--font-sans)] !text-[length:var(--font-size-sm)] !text-[var(--color-gray-600)] hover:!text-[var(--color-crimson)]">
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex flex-col gap-2.5">
            {FOOTER_LINKS_COL2.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="styled-link inline-block">
                  <span className="!font-[family-name:var(--font-sans)] !text-[length:var(--font-size-sm)] !text-[var(--color-gray-600)] hover:!text-[var(--color-crimson)]">
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
