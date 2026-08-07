# QA ISSUES — Ronda 5 (Barrido Completo)
Fecha: 2026-08-07
Deploy verificado: https://alas-de-amor-portal.vercel.app (commit 878cb8d)
Resultado global: ❌ RECHAZADO (5 issues abiertos)

## Casos de prueba

| # | Caso | Tarea/DOF | Criterio de éxito | Prioridad | Resultado |
|---|------|-----------|-------------------|-----------|-----------|
| CP1 | Home carga sin errores consola | Regresión | 0 console errors | Alta | ❌ ISS-001 |
| CP2 | /nosotros carga sin errores | Regresión | 0 console errors | Alta | ❌ ISS-001 |
| CP3 | /servicios: 21 imágenes visibles | T2 DOF1 | 21 img naturalWidth > 0 | Alta | ✅ |
| CP4 | /servicios: 0 imágenes duplicadas | T2 DOF4 | Ningún src repetido | Media | ✅ |
| CP5 | /servicios: imágenes coherentes con el servicio | T2 DOF5 | Imagen evoca el servicio descrito | Media | ❌ ISS-IMG-CTX-001 |
| CP6 | /servicios: peso imágenes < 500 KB | TI-2 DOF3 | Todas < 500 KB | Baja | ❌ ISS-IMG-003 |
| CP7 | /agendar: dropdown funcional con 21 ítems | T4 DOF1 | Select con 21 opciones | Alta | ✅ |
| CP8 | /contacto: form visible | Regresión | Form renderiza correctamente | Alta | ✅ |
| CP9 | /testimonios: contenido visible | Regresión | main > 100 chars | Alta | ✅ |
| CP10 | /blog: contenido visible | Regresión | main > 100 chars | Alta | ✅ |
| CP11 | Responsive 375px en todas las páginas | Regresión | scrollWidth ≤ 375 | Alta | ✅ |
| CP12 | Switch ES/EN funcional | T3 DOF2 | lang cambia, textos traducen | Alta | ✅ |
| CP13 | Imagen de persona con rostro visible | T2 DOF3 | Rostro centrado, no cortado | Media | ✅ N/A (no hay personas con rostro) |

## Checklist DOF de TASKS.md (solo tareas completadas previamente)

| Tarea | DOF | Resultado |
|-------|-----|-----------|
| TI-1 | 11 archivos en services/ | ✅ |
| TI-2 | 10 imágenes gen-* | ✅ |
| T1 | CatalogItem con image | ✅ |
| T2 | ServiceBlock con <Image> | ✅ |
| T2 | 21 naturalWidth > 0 | ✅ |
| T2 | Responsive sin overflow | ✅ |
| T3 | 6 páginas cargan | ✅ |
| T3 | Switch ES/EN | ✅ |

## Issues abiertos

### ISS-001 — Hydration error #418 — PARCIALMENTE CORREGIDO (6/7 páginas)
**Severidad:** Alta
**Ruta:** /blog (única página que persiste)
**Descripción:** El fix de LanguageContext (leer localStorage en useEffect, no en useState inicial) resolvió el error en 6 de 7 páginas. /blog sigue mostrando #418 — posiblemente use un componente que renderiza texto condicionalmente por idioma sin pasar por LanguageContext.
**Evidencia:** / /nosotros /servicios /agendar /contacto /testimonios = 0 errors. /blog = 1 error #418.
**Contador de persistencia:** 5
**Estado:** ✅ CORREGIDO (6/7) / ⚠️ PERSISTE en /blog (requiere investigación específica)
**Fix sugerido:** Revisar `src/app/blog/page.tsx` — posiblemente renderiza contenido condicional por idioma fuera del provider.

### ISS-IMG-CTX-001 — 18 imágenes fallback no son coherentes con el servicio
**Severidad:** Media
**Ruta:** /servicios → múltiples ServiceBlocks
**Estado:** 🔴 ABIERTO — requiere API de imágenes configurada. Tarea TI-2 en TASKS.md.

### ISS-IMG-003 — lectura-oraculo.jpg excede 500 KB
**Severidad:** Baja
**Ruta:** /servicios → Lectura Oráculo Angelical
**Estado:** ✅ CORREGIDO — 1853 KB → 67 KB (WebP). `ce08be4`

### ISS-CONTENT-001 — /agendar tiene poco contenido
**Severidad:** Baja
**Ruta:** /agendar
**Estado:** ✅ CORREGIDO — 559 chars → 954 chars. Sección "¿Cómo agendar?" con 3 pasos. `2bab633`

### ISS-DESIGN-001 — /servicios no tiene imagen de héroe
**Severidad:** Baja
**Ruta:** /servicios
**Estado:** 🔴 ABIERTO — tarea TI-3 en TASKS.md. Baja prioridad.

## Observaciones (pre-existentes)

- OBS-002: `/videos/alas-de-amor.mp4` no carga (ERR_CACHE_OPERATION_NOT_SUPPORTED) — pre-existente

## Resumen

| Métrica | Resultado |
|---------|-----------|
| Páginas evaluadas | 7 |
| Páginas con error consola | 7 (ISS-001, hydration #418 sistémico) |
| Imágenes totales en /servicios | 21 |
| Imágenes rotas | 0 |
| Imágenes duplicadas | 0 |
| Imágenes > 500 KB | 1 (lectura-oraculo.jpg = 1853 KB) |
| Imágenes coherentes | 3/21 (solo Lectura Angelical) |
| Responsive 375px | ✅ Todas |
| Switch ES/EN | ✅ Funcional |
| Issues abiertos | 5 |
| Issues bloqueantes | 1 (ISS-001 hydration #418) |
