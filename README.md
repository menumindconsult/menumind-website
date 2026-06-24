# MenuMind Restaurant Consultancy — Website

A premium, executive-style website for MenuMind Restaurant Consultancy, built with Next.js (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Build for production

```bash
npm run build
npm run start
```

## Fonts

This project is set up to use Google Fonts via `next/font/google`
(Playfair Display for headings, Inter for body text, Montserrat for
statistics), exactly as specified in the design brief.

The sandbox this was built in could not reach `fonts.googleapis.com`
at build time, so `src/app/layout.tsx` currently falls back to system
fonts (Georgia / Arial) with the original `next/font/google` setup
left as commented-out code directly above it. On any normal network
(your own machine, Vercel, Netlify, etc.) simply uncomment that block
and remove the fallback to restore the brief's typography exactly.

## Structure

- `src/app/page.tsx` — assembles all sections in order
- `src/components/` — one component per section (Hero, Services, About, etc.)
- `public/images/` — logo (transparent), logo mark (favicon source), and founder photo

## Content notes

- Founder photo appears only in the About section, never in the Hero, per the brief.
- Trust bar numbers, results metrics, and testimonials are placeholder
  content using realistic figures, ready to be replaced with real data.
- Case studies are intentionally placeholder cards ("Case Study Coming Soon"),
  ready for real client work to be swapped in later.
