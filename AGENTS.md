# AGENTS.md - alas-de-amor-portal

## Project Overview
Next.js 16 App Router portal for "Alas de Amor" — a holistic therapy brand by Liliana Rodas. Deployed on Vercel. Multilanguage (ES/EN) with JSON-based translations.

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (Turbopack disabled) |
| `npm run build` | Production build (Turbopack disabled) |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Tech Stack
- **Framework**: Next.js 16.2.4 (App Router)
- **Language**: TypeScript (strict mode, build types skipped via `next.config.ts`)
- **Styling**: Tailwind CSS v4 with `@tailwindcss/postcss`
- **Linting**: ESLint v9 with `eslint-config-next`
- **Node**: v25.9.0 (nvm-windows)

## Architecture
- App Router in `src/app/`
- Import alias: `@/*` maps to `./src/*`
- All pages are **client components** (`"use client"`) to support i18n context
- Root layout wraps children in `<Providers>` (client) which provides `LanguageProvider`, `Header`, and `Footer`

### Pages
| Route | File | Description |
|-------|------|-------------|
| `/` | `src/app/page.tsx` | Home: hero, services preview, about preview, CTA, testimonials |
| `/nosotros` | `src/app/nosotros/page.tsx` | About: Liliana Rodas bio, credentials, certificates gallery, experience |
| `/servicios` | `src/app/servicios/page.tsx` | Services: 8 detailed therapy descriptions with benefits |
| `/agendar` | `src/app/agendar/page.tsx` | Book appointment: form + WhatsApp shortcut |
| `/contacto` | `src/app/contacto/page.tsx` | Contact: form + contact info card |

### Components
| Component | Path |
|-----------|------|
| `Providers` | `src/components/Providers.tsx` — wraps LanguageProvider, Header, Footer |
| `Header` | `src/components/Header.tsx` — responsive nav + language switcher (🇨🇴/🇺🇸) |
| `Footer` | `src/components/Footer.tsx` — nav, services, social links |
| `AppointmentForm` | `src/components/AppointmentForm.tsx` — booking form |
| `ContactForm` | `src/components/ContactForm.tsx` — contact form |

### i18n System
- **Translations**: `src/locales/es.json` and `src/locales/en.json`
- **Context**: `src/context/LanguageContext.tsx` — stores language in `localStorage`
- **Hook**: `src/hooks/useTranslations.ts` — returns `t(key)` function
- **Language switcher**: 🇨🇴 (ES) and 🇺🇸 (EN) flags in Header
- Default language: Spanish (`es`)

### Assets
- Images extracted from PPTX: `public/imgs/` (26 images: `image1.jpeg` through `image26.jpeg/png`)
- Hero image: `/imgs/image7.jpeg` (Liliana Rodas)
- Workspace photo: `/imgs/couch.jpeg`

## Design System
- **Colors**: spiritual (purple), gold, cream, warm-white, rose-gold, deep-plum
- **Fonts**: Inter (sans), Playfair Display (display/serif) via `next/font/google`
- **Animations**: float, glow, shimmer, fade-in-up, gradient-shift
- **Style**: Ethereal — soft gradients, glass morphism, floating orbs, ethereal color palette

## Windows Setup
- Node.js via nvm-windows at `%LOCALAPPDATA%\nvm\v25.9.0`
- If npm fails in PowerShell: `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`
- Turbopack disabled in build/dev due to font resource loading issues

## SEO
- Full metadata in root layout (title, description, OG, Twitter, robots)
- OpenGraph image: `/imgs/image7.jpeg`
- `metadataBase`: `https://alas-de-amor.vercel.app` (configurable via `NEXT_PUBLIC_SITE_URL`)
