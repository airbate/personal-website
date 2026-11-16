"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Bars3Icon, SeedlingIcon, XMarkIcon } from "@/components/icons";
import { NAV_LINKS, SITE_CONFIG } from "@/data/site";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="relative z-[1001] flex flex-row items-center justify-between bg-[var(--color-cream)] px-[var(--space-m)] py-[var(--space-s)] pl-[1.3rem] max-md:mb-[var(--space-m)] max-md:p-[var(--space-s)]"
      aria-label="Main navigation"
    >
      <Link
        href="/"
        aria-label="home"
        className="group inline-flex items-center gap-2"
      >
        <span className="transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
          <SeedlingIcon size={24} />
        </span>
        <span className="font-[family-name:var(--font-serif)] text-[22px] font-bold tracking-tight text-[var(--color-black)] transition-colors duration-150 group-hover:text-[var(--color-bright-crimson)]">
          {SITE_CONFIG.name}
        </span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden items-center gap-[var(--space-m)] font-[var(--font-sans)] md:flex">
        {NAV_LINKS.map((item) => (
          <Link key={item.href} href={item.href} className="styled-link">
            <span className="!font-[family-name:var(--font-sans)] !text-[length:var(--font-size-xs)] !text-[var(--color-gray-800)] hover:!text-[var(--color-bright-crimson)]">
              {item.label}
            </span>
          </Link>
        ))}
      </div>

      {/* Mobile Hamburger Button */}
      <button
        type="button"
        onClick={() => setMobileOpen((v) => !v)}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileOpen}
        className="flex items-center justify-center border-none bg-transparent p-1 text-[var(--color-black)] md:hidden"
      >
        {mobileOpen ? <XMarkIcon /> : <Bars3Icon />}
      </button>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="absolute left-0 right-0 top-full z-[1000] border-b border-[var(--color-tinted-cream)] bg-[var(--color-cream)] px-[var(--space-m)] py-[var(--space-m)] shadow-[var(--box-shadow-lg)] md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="font-[family-name:var(--font-sans)] text-[16px] text-[var(--color-black)]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
