# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run lint     # Run Next.js linter
npm run start    # Run production server
```

## Architecture

Single-page Next.js 15 / React 19 / TypeScript portfolio. All content lives on one page (`src/app/page.tsx`) composed of four section components.

### Content Data

All editable content is in `src/presets/`:
- `personal.ts` — name, description, email, social links, version
- `work.ts` — `Work[]` and `Project[]` arrays, plus their TypeScript interfaces

To add/edit projects or work experience, update these arrays — no component changes needed.

### Component Patterns

- **Client components** (`"use client"`) — anything with animations, state, or IntersectionObserver
- **Animation wrappers** — `FadeInOnLoad` (page-load fade), `FadeInOnScroll` (scroll-triggered via IntersectionObserver). Stagger delays are passed as props.
- **Section layout** — each section component (Hero, Work, Project, Footer) is self-contained with its own layout and data import
- Path alias `@/*` maps to `src/*`

### Styling

- Tailwind CSS v4 (PostCSS plugin, no `tailwind.config.js`)
- Custom keyframe animations defined in `src/app/globals.css` (`fadeInUp`, `project-card-animate`)
- Custom Recoleta serif font loaded via `@font-face` in globals.css; Google Fonts (Geist, Geist Mono, Roboto Mono) loaded in layout
- Responsive with mobile-first breakpoints; content constrained to ~66% width on large screens
