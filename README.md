# Portfolio (Next.js + Tailwind + Framer Motion)

Static, Apple-inspired portfolio for Immani Rama Venkata Sri Sai, built with Next.js App Router, Tailwind CSS, Framer Motion, and next-themes. Content is sourced exclusively from the provided resume (CGPA 9.03 as of 5th semester).

## Requirements
- Node.js 18.18 or later
- npm

## Setup
```bash
npm install
npm run dev
```
The app runs at http://localhost:3000.

## Build for static hosting
```bash
npm run build
npm run start   # optional preview
```
- Static export is enabled via `output: 'export'` in `next.config.mjs`; the built assets will be in `out/` after `next export` (run `npm run build` then `npx next export`).
- Images are unoptimized for compatibility with static hosts.

## Theming
- Dark and light modes powered by `next-themes`; toggle in the header.

## Content
- All data lives in `lib/resume.ts`. Update this file if the resume changes.
- Update `metadataBase` in `app/layout.tsx` with your deployed domain for accurate Open Graph metadata.

## Notes
- No paid libraries are used.
- Design uses glassmorphism, soft shadows, and large spacing to mirror Apple-inspired aesthetics.
