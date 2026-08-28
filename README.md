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

**Type: Archivo + Inter.** Archivo carries display headings only. Inter carries
body copy and all micro-type — eyebrows, nav, buttons, chips, table keys — set
mixed case at 13px via the `.label` class, barely tracked. Following
[coffee-tech.com](https://www.coffee-tech.com/), which is Inter throughout: quiet
UI text reads as calmer and more modern than tracked-out capitals.

Section eyebrows are bracketed — `[ 02 — Core capabilities ]` — via the
`Eyebrow` component, another pattern taken from the same reference.

Shared primitives in `globals.css` keep spacing consistent: `.shell` (one
horizontal gutter for every section), `.section-y` (one vertical rhythm), `.btn`
and `.chip` (one pill geometry so controls always line up), `.frame` (10px
rounded corners for every photograph and panel) and `.link-xl` (the oversized
underlined arrow link used to close a section).

## Structure

```
src/
  app/
    layout.tsx        header + footer shell, fonts, metadata
    page.tsx          home     — hero, stats, 01–06, CTA
    about/            about    — story, timeline, leadership, facilities, principles
    services/         services — powder coating, stabilizers, chargers (anchored)
    projects/         projects — selected work, gallery, sectors
    contact/          contact  — enquiry form, facilities, maps
    globals.css       design tokens, primitives, reveal/marquee animation
  components/
    site-header.tsx     scroll-aware nav + fullscreen mobile menu
    site-footer.tsx     marquee, sitemap, facilities, compliance
    page-hero.tsx       shared inner-page opener
    section-heading.tsx one heading pattern for every section
    eyebrow.tsx         bracketed section eyebrow
    big-link.tsx        oversized underlined arrow link
    service-nav.tsx     sticky in-page nav for the services sections
    enquiry-form.tsx    validated contact form
    logo.tsx            official lockup, dark + light variants
    reveal.tsx          IntersectionObserver reveals (fade / clip / masked lines)
    counter.tsx         count-up stat figures
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

## Content notes — read before launch

**The enquiry form has no backend.** A valid submission composes the enquiry and
hands it to the visitor's mail client, with WhatsApp as a fallback. To wire a
real endpoint, replace the body of `handoff` in
[enquiry-form.tsx](src/components/enquiry-form.tsx) with a `fetch` to your API
route — validation and success states stay as they are.

**The photography is illustrative stock.** Captions describe what each photograph
shows and deliberately avoid claiming it is a Renson site. Replace the files with
real Unit I / Unit II photography before launch and the captions can become
specific again.

**Unresolved figure in the source material.** The reference site states Unit II's
maximum component length as both 12 ft and 15 ft, and describes the oven as both
`12 ft × 12 ft` and `15 ft × 6 ft × 8 ft`. This build uses 15 ft consistently —
confirm which is correct and update `units` and `differentiators` in
[content.ts](src/lib/content.ts).

## Screenshots

`scripts/shoot.mjs` renders full-page screenshots for visual review (it scrolls
first so every reveal animation has fired):

```bash
node scripts/shoot.mjs http://localhost:3000/ 1440 900 scratch/home
```
