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
| `npm run typecheck` | `tsc --noEmit` (el build ignora tipos, esto no) |
| `npm test` | Pruebas de la acción de correo (`tests/`, Node 22+) |
| `npm run smoke` | Rastreo del sitio ya en marcha: sitemap, SEO, JSON-LD e imágenes (`BASE_URL` opcional) |

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
- Imágenes en `public/imgs/` (inventario en `IMAGES.md`). Logo e íconos de marca en `public/imgs/brand/` (ver `docs/estrategia-marca/GUIA-MARCA.md`)
- Foto de Liliana: `/imgs/team/liliana-profile.jpg`

## CI y correo
- **CI** (`.github/workflows/ci.yml`, gratis porque el repo es público): `lint`, `typecheck`, `test`, `build` y `smoke` en cada PR y push a `staging`/`main`.
- **Correo de los formularios**: `RESEND_API_KEY` (gratis) en Vercel; guía en `docs/CORREO-GRATIS.md`.
- **Testimonios**: solo reales y autorizados, en `src/lib/testimonials.ts` (hoy vacío; las secciones se ocultan solas).

## Design System
- **Colors**: escala `reiki-*` (rojo claro, tokens en `src/app/globals.css`) y `aqua-*` (aguamarina), marfil de fondo, texto en gris cálido. Sin colores oscuros ni violeta (excepto el chakra corona). Detalle y contrastes en `docs/estrategia-marca/GUIA-MARCA.md`
- **Fonts**: Inter (sans), Playfair Display (display/serif) via `next/font/google`
- **Animations**: float, glow, shimmer, fade-in-up, gradient-shift
- **Style**: Ethereal — soft gradients, glass morphism, floating orbs, ethereal color palette

## Windows Setup
- Node.js via nvm-windows at `%LOCALAPPDATA%\nvm\v25.9.0`
- If npm fails in PowerShell: `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`
- Turbopack disabled in build/dev due to font resource loading issues

## SEO
- Full metadata in root layout (title, description, OG, Twitter, robots)
- OpenGraph image: `/imgs/og-default.jpg` (1200×630)
- `metadataBase`: tomado de `NEXT_PUBLIC_SITE_URL` o, en Vercel, del dominio de producción (`VERCEL_PROJECT_PRODUCTION_URL`); ver `src/lib/site.ts`

## Custom Agents (Orquestación)

Cuatro agentes personalizados en `.agents/agents/` para el flujo Spec → Plan → Dev → QA:

| Agente | Descripción | Produce |
|--------|-------------|---------|
| `po` | Product Owner: especificación funcional | `SPECS.md` |
| `tech-lead` | Tech Lead: tareas técnicas + DOR + DOF | `TASKS.md` |
| `dev` | Developer Next.js: implementa y corrige | Código |
| `qa` | QA con Playwright: verifica DOF y reporta | `QA-ISSUES.md` |

**Flujo**: ver `.agents/agents/WORKFLOW.md` para el ciclo completo.

**Skills**: 24 skills de `addyosmani/agent-skills` más la skill de proyecto `visual-harmony-audit` instaladas en `.agents/skills/` (spec-driven-development, planning-and-task-breakdown, browser-testing-with-devtools, etc.)
