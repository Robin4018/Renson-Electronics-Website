# Renson Electronics — Website

Next.js 16 (App Router) + Tailwind CSS v4 + TypeScript.

```bash
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

## Design direction

An editorial, print-inspired take on an industrial manufacturer — bone paper,
ink black, and the brand blue lifted straight out of the logo. Oversized grotesk
display type, wide-tracked uppercase micro-labels, generous whitespace and
numbered sections. Drawn from the two reference sites: Kononenko Group's
whitespace, numbered sections and large-format imagery; SharpLink's data-forward
confidence (stat strips, spec tables).

| Token | Value | Use |
| --- | --- | --- |
| `--color-paper` | `#f2f0eb` | Page ground |
| `--color-paper-dim` | `#e9e6df` | Alternating sections |
| `--color-ink` | `#131519` | Text, dark sections |
| `--color-brand` | `#0f78a8` | Logo blue — marks, fills, nav underline |
| `--color-accent` | `#0b6289` | Eyebrows and links on paper (AA) |
| `--color-accent-soft` | `#4aa8d4` | Eyebrows and links on ink (AA) |

**Type: Archivo only.** Display, body and micro-labels are all one grotesk —
labels are the same face set small, uppercase and tracked out at `0.14em` via the
`.label` class. No monospace anywhere.

Shared primitives in `globals.css` keep spacing consistent: `.shell` (one
horizontal gutter for every section), `.section-y` (one vertical rhythm), `.btn`
and `.chip` (one pill geometry so controls always line up).

## Structure

```
src/
  app/
    layout.tsx        header + footer shell, fonts, metadata
    page.tsx          home page (hero, stats, 01–06, CTA)
    about|services|projects|contact/   stubs — next to build
    globals.css       design tokens, primitives, reveal/marquee animation
  components/
    site-header.tsx     scroll-aware nav + fullscreen mobile menu
    site-footer.tsx     marquee, sitemap, facilities, compliance
    section-heading.tsx one heading pattern for every section
    logo.tsx            official lockup, dark + light variants
    reveal.tsx          IntersectionObserver reveals (fade / clip / masked lines)
    counter.tsx         count-up stat figures
    page-stub.tsx       placeholder for pages not yet built
  lib/content.ts      all copy and specs in one place
```

All motion respects `prefers-reduced-motion`.

## Logo

`public/logo-white.png` and `public/logo-dark.png` are generated from the
official master (`Renson Electronics Logo - White.avif`) by
`node scripts/build-logo.mjs`, which keeps the blue horse badge intact and
recolours only the wordmark for light backgrounds. Use the `<Logo />` component
rather than referencing the files directly.

## Photography

`public/images/*` is sourced from [Pexels](https://www.pexels.com/license/) —
free for commercial use, no attribution required, modification permitted. The
manifest lives in [public/images/CREDITS.md](public/images/CREDITS.md) and the
whole set can be re-fetched and re-cropped with:

```bash
node scripts/fetch-photos.mjs
```

Swap in real Renson photography by replacing files of the same name and aspect
ratio — no code changes needed.

## Screenshots

`scripts/shoot.mjs` renders full-page screenshots for visual review (it scrolls
first so every reveal animation has fired):

```bash
node scripts/shoot.mjs http://localhost:3000/ 1440 900 scratch/home
```
