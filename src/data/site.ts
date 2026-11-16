import type { FooterLink } from "@/types/content";

export const SITE_CONFIG = {
  name: "airbate",
  title: "airbate — Personal Library & Notes",
  description:
    "airbate's personal website, reading library, and notes on books worth remembering.",
  heroHeadlinePrefix: "airbate",
  heroHeadlineRest:
    "collects books, ideas, and notes on technology, design, and culture.",
  heroSubtitleLine1: "Personal digital library & reading log",
  heroSubtitleLine2: "Find me on",
  githubUrl: "https://github.com/airbate",
  githubHandle: "GitHub (@airbate)",
  copyright: "© 2026 airbate",
};

export const NAV_LINKS = [
  { label: "Library", href: "/library" },
  { label: "Notes", href: "/notes" },
  { label: "About", href: "/about" },
];

export const FOOTER_LINKS_COL1: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "Library", href: "/library" },
];

export const FOOTER_LINKS_COL2: FooterLink[] = [
  { label: "Reading Notes", href: "/notes" },
  { label: "About", href: "/about" },
];
