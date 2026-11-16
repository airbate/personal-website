# Maggie Appleton — Behaviors & Interactions

## Global Behaviors
- **Page Entrance Cascade:**
  - `.cascade` and `.cascade-fade` elements animate into view sequentially using `--cascade` custom property (`0`, `1`, `2`).
- **Animated Underline Links (`.styled-link`):**
  - Default: crimson text (`--color-crimson` / `--color-bright-crimson`) with subtle bottom border or underline accent.
  - Hover: text shifts to `--color-bright-crimson`, subtle crimson background highlight / underline expansion with `--dur-quick` (0.18s) ease.
- **Arrow Right Shift (`.header-link`, `.readmore-link`):**
  - Hovering over section headers ("Essays ->", "Notes ->", "Patterns ->", "Library ->", "Learn more ->") shifts the arrow SVG right by ~4px (`translateX(4px)`) and transitions color to `--color-bright-crimson`.

## Navbar
- **Logo Hover (`#logo`):**
  - Hovering over the `M` + teal leaves SVG triggers a 750ms spring/leaf-flutter CSS animation (`.css-animate`).
- **The Garden Dropdown (`megamenu`):**
  - Trigger: Hover or click on "The Garden" button/link with chevron.
  - Opens a 2-column megamenu dropdown displaying 8 garden categories (`Essays`, `Notes`, `Patterns`, `Smidgeons`, `Talks`, `Podcasts`, `Library`, `Antilibrary`), each with an icon, title, and short description.
  - Chevron rotates 180deg when open.
- **Mobile Navigation (< 768px):**
  - Desktop links collapse into a hamburger toggle (`Bars3` -> `XMark`) opening a full-width mobile menu.

## Cards & Interactive Elements
- **Essay Cards (`.essay-card`):**
  - White/light-cream card (`#fcfbf7`), subtle border (`--color-gray-100`), soft shadow (`--box-shadow-sm`), rounded corners (`--border-radius-base`).
  - Hover: slight upward lift (`translateY(-2px)`), elevated shadow (`--box-shadow-md`), title color shifts toward `--color-bright-crimson`.
- **Notes List:**
  - Hovering a note row highlights the text to `--color-bright-crimson` and subtly scales/nudges the growth stage icon (`budding` / `evergreen`).
- **Patterns List:**
  - Hovering a pattern row highlights the title and pattern icon (`--color-sea-blue`).
- **Book Cards (`.book-card`):**
  - Hovering a book cover reveals a subtle `"View on Google ->"` overlay badge or lifts the book cover with `--box-shadow-lg`.

## Footer
- **RSS Button:** Pill-shaped light-cream button (`Subscribe via RSS Feed`) with hover border/background darkening.
- **Social Icons:** 6 SVG icons (Bluesky, GitHub, LinkedIn, Dribbble, Twitter, Mastodon) in muted gray (`--color-gray-500`), transitioning to `--color-bright-crimson` / `--color-sea-blue` on hover.
