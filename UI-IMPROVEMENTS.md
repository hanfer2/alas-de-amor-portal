# UI-IMPROVEMENTS — Compactar heroes de sub-páginas (basado en QA Ronda 10)
Generado por: agente disenador (modo auditor)
Basado en: QA barrido 2026-08-08
Fecha: 2026-08-08

## Diagnóstico visual
El QA midió los heroes de las 7 páginas. Las 6 sub-páginas tienen heroes que ocupan entre 47% y 63% de la pantalla. El contenido real (servicios, pasos, artículos) no es visible sin hacer scroll. El objetivo declarado es: "reducir espacios para que la página permita ver más información desde el momento que se ingresa".

## Design tokens mapeados
- Hero actual sub-páginas: `pt-20 pb-8` (80px top, 32px bottom) + `overflow-hidden`
- Contenido interior del hero: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Badge: `inline-flex items-center px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-reiki-700 font-medium tracking-wider uppercase text-xs border border-white/30`
- Título: `font-display text-5xl sm:text-6xl font-bold text-reiki-900 mt-3` + text-gradient
- Subtítulo: `text-xl text-reiki-600 mt-6 leading-relaxed`

## Matriz de cambios (Delta)

| # | Archivo | Estado actual | Problema | Cambio propuesto | Prioridad |
|---|---------|---------------|----------|------------------|-----------|
| 1 | 6 page.tsx | `pt-20 pb-8` | Hero ocupa 53% del viewport, contenido invisible sin scroll | `pt-16 pb-4` (48px top, 16px bottom) | Alta |
| 2 | testimonios/page.tsx | `pt-20 pb-8` | Hero ocupa 63% — el peor caso | `pt-14 pb-4` | Alta |
| 3 | 6 page.tsx | `text-5xl sm:text-6xl` | Título demasiado grande para páginas internas | `text-4xl sm:text-5xl` | Media |
| 4 | 6 page.tsx | `mt-3` en título, `mt-6` en subtítulo | Espaciado entre elementos del hero infla la altura | Reducir a `mt-2` y `mt-3` | Media |
| 5 | blog/page.tsx | 1 hydration error #418 | ISS-001 persiste 7 rondas | 🚨 ESCALAR | Alta |

## Instrucciones para el Dev (parches atómicos)

### Parche 1 — Reducir padding hero en las 6 sub-páginas (ALTA)
**Archivos:** `src/app/servicios/page.tsx`, `src/app/nosotros/page.tsx`, `src/app/agendar/page.tsx`, `src/app/contacto/page.tsx`, `src/app/testimonios/page.tsx`, `src/app/blog/page.tsx`
**Cambio:** Reemplazar `pt-20 pb-8` por `pt-16 pb-4` en el section del hero.
**Excepción testimonios:** `pt-14 pb-4` (es la página con hero más alto, 63%).
**Riesgo:** Bajo.
**Verificación QA:** Hero height < 40% vh en 1280×900.

### Parche 2 — Reducir tamaño de título en sub-páginas (MEDIA)
**Archivos:** 6 sub-páginas
**Cambio:** Reemplazar `text-5xl sm:text-6xl` por `text-4xl sm:text-5xl` en el h1 del hero.
**Riesgo:** Bajo.
**Verificación QA:** El título se ve proporcionado al nuevo padding reducido.

### Parche 3 — Reducir espaciado vertical entre badge, título y subtítulo (MEDIA)
**Archivos:** 6 sub-páginas
**Cambio:** En el h1, cambiar `mt-3` por `mt-2`. En el subtítulo, cambiar `mt-6` por `mt-3`.
**Riesgo:** Bajo.
**Verificación QA:** Los 3 elementos (badge, título, subtítulo) deben verse agrupados y compactos.
