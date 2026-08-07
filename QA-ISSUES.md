# QA ISSUES — Ronda 8 (Auditoría integral)
Fecha: 2026-08-07
Deploy verificado: https://alas-de-amor-portal.vercel.app (commit d4fb3e9)
Resultado global: ❌ RECHAZADO (4 issues abiertos — SEO crítico)

## Casos de prueba

| # | Caso | Eje | Criterio | Resultado |
|---|------|-----|----------|-----------|
| CP1 | Cada página tiene title único | SEO | title distinto por ruta | ❌ ISS-SEO-001 |
| CP2 | Cada página tiene meta description único | SEO | description distinto por ruta | ❌ ISS-SEO-001 |
| CP3 | Structured data presente | SEO | JSON-LD en todas las páginas | ✅ |
| CP4 | Canonical URL correcto por página | SEO | canonical apunta a sí misma | ❌ ISS-SEO-002 |
| CP5 | Content-Security-Policy presente | Seguridad | Header CSP en response | ❌ SEC-AUDIT |
| CP6 | 0 secretos en git/html | Seguridad | Sin tokens/keys expuestos | ✅ |
| CP7 | 0 errores consola en todas las páginas | Calidad | console errors = 0 | ⚠️ /blog con #418 |
| CP8 | Contenido >500 chars en todas las páginas | Contenido | main chars > 500 | ✅ |
| CP9 | Imágenes sin roturas en /servicios | Imágenes | 22 img naturalWidth > 0 | ✅ |
| CP10 | Imágenes < 500 KB | Performance | peso < 500 KB | ⚠️ ISS-IMG-003 (lectura-oraculo.webp 67KB ✅ pero otras sin verificar) |

## Issues abiertos

### ISS-SEO-001 — Title y meta description idénticos en todas las páginas
**Severidad:** Alta
**Ruta:** Todas las páginas
**Descripción:** Las 7 páginas comparten el mismo `<title>` y `<meta name="description">`: "Alas de Amor | Holistic Therapy - Reiki, Access Bars, Angelic Reading". Esto es un problema grave de SEO — Google no puede diferenciar las páginas en los resultados de búsqueda. Cada ruta debe tener su propio title y description.
**Estado:** 🔴 ABIERTO
**Fix:** Implementar `generateMetadata()` por página en Next.js App Router, o al menos un `metadata` object con title y description únicos en cada `page.tsx`.

### ISS-SEO-002 — Canonical URL siempre apunta a home
**Severidad:** Media
**Ruta:** /servicios, /nosotros, /agendar, etc.
**Descripción:** El `<link rel="canonical">` siempre es `https://alas-de-amor.vercel.app` sin importar la página. /servicios debería tener canonical `https://alas-de-amor.vercel.app/servicios`.
**Estado:** 🔴 ABIERTO
**Fix:** Corregir `metadataBase` y canonical en `layout.tsx` o usar `generateMetadata()`.

### ISS-001 — Hydration #418 persiste en /blog
**Severidad:** Alta
**Ruta:** /blog
**Contador de persistencia:** 6
**Estado:** 🚨 ESCALAR — 6 rondas sin resolverse
**Nota:** 6/7 páginas corregidas. /blog requiere investigación específica del componente.

### ISS-SEC-HEADERS — Headers de seguridad ausentes (CSP, X-Content-Type-Options, X-Frame-Options)
**Severidad:** Alta
**Descripción:** Ver SEC-AUDIT.md ISS-SEC-CSP, ISS-SEC-CTO, ISS-SEC-XFO.
**Estado:** 🔴 ABIERTO
**Fix:** Agregar headers en `next.config.ts`.

## Verificaciones que pasaron
- ✅ HSTS presente (strict-transport-security)
- ✅ 0 secretos en git history
- ✅ JSON-LD structured data en todas las páginas
- ✅ OG tags configurados en layout
- ✅ 6/7 páginas con 0 console errors
- ✅ Contenido >500 chars en todas las páginas
- ✅ 22 imágenes en /servicios sin roturas

## Resumen SEC-AUDIT
- 9 hallazgos totales (ver SEC-AUDIT.md)
- 3 headers ausentes + 6 dependencias con vulnerabilidades high
- 0 secretos expuestos, 0 vectores XSS detectados
