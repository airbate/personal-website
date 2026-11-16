# Maggie Appleton — Page Topology

## Viewport & Container
- **Background:** Warm cream paper (`#f6f5f1` / `--color-cream`)
- **Primary Text:** Charcoal (`#353534` / `--color-black`)
- **Max Content Width:** `~1100px–1200px` centered with generous responsive horizontal padding

## Sections (Top to Bottom)
1. **Navbar (`src/components/Navbar.tsx`)** — Static top bar; left: `MaggieLogo` (`/`), right: `The Garden` (dropdown), `Now`, `About` (mobile: hamburger drawer).
2. **HeroSection (`src/components/HeroSection.tsx`)** — Oversized Canela Deck serif headline (`"Maggie makes visual essays about programming, design, and anthropology."`), followed by two-line Canela Text subtitle with `GitHub Next` styled link.
3. **GardenIntro (`src/components/GardenIntro.tsx`)** — `"The Garden"` H2 heading + one-line description with `"Learn more ->"` link.
4. **GardenSection (2-Column Asymmetric Grid on Desktop: ~62% left / ~35% right)**
   - **Left Column (`src/components/EssaysSection.tsx`):** `"Essays ->"` header, subtitle, 2×2 grid of 4 `EssayCard`s.
   - **Right Column (`src/components/NotesSection.tsx`):** `"Notes ->"` header, subtitle, vertical list of 12 note items with growth icons.
5. **Patterns & Library Section (2-Column Asymmetric Grid on Desktop: ~32% left / ~65% right)**
   - **Left Column (`src/components/PatternsSection.tsx`):** `"Patterns ->"` header, subtitle, vertical list of 8 design patterns with geometric pattern icons.
   - **Right Column (`src/components/LibrarySection.tsx`):** `"Library ->"` header, subtitle, 4×2 grid of 8 book covers with title and author.
6. **Footer (`src/components/Footer.tsx`)** — Full-width subtle top border / light cream band; Left: `"Want to stay up to date?"`, RSS pill button, 6 social icons, copyright `© 2026 Maggie Appleton`; Right: 2-column sitemap links (11 links).
