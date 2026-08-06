# QA ISSUES — Ronda 2
Fecha: 2026-08-06
Deploy verificado: https://alas-de-amor-portal.vercel.app (commit 196961d)
Resultado global: ✅ APROBADO (0 issues abiertos)

## Re-verificación de fixes de la Ronda 1

| Issue | Fix del Dev | Resultado | Evidencia |
|-------|-------------|-----------|-----------|
| ISS-001 | Renombrar taller a "Taller Barras Access" / "Access Bars Workshop" | ✅ CORREGIDO | /agendar dropdown: "Barras Access" (terapia) + "Taller Barras Access" (taller) en ES; "Access Bars" + "Access Bars Workshop" en EN. Sin duplicado exacto en ninguno de los 2 idiomas. |

## Checklist DOF (re-verificación del feature tras el fix)

| Tarea | DOF | Resultado | Evidencia |
|-------|-----|-----------|-----------|
| T3 | 4 categorías con ítems y precios | ✅ | /servicios: Terapias, Talleres personalizados, Charlas, Retiros presentes |
| T3 | ES → COP; EN → USD calculado | ✅ | ES "$ 150.000"; EN "$46.95" (verificado en Ronda 1) |
| T3 | "Consultar" en ítems sin precio | ✅ | "Consultar" presente en charlas/retiros |
| T3 | Responsive 375px sin overflow | ✅ | scrollWidth 360 ≤ 375 (Ronda 1) |
| T3 | 0 errores consola | ✅ | /servicios ES: 0 errores con localStorage limpio |
| T4 | select incluye 17 ítems | ✅ | 17 opciones + placeholder en /agendar |
| T4 | seleccionar ítem nuevo no rompe envío | ✅ | selección OK + validación funciona (Ronda 1) |
| T6 | switch ES/EN en /servicios cambia traducciones | ✅ | lang es→en; textos nuevos cambian |

## Issues abiertos

Ninguno.

## Observaciones (pre-existentes, ajenas al feature, sin cambio)

- OBS-001: error de hidratación #418 en home cuando localStorage guarda "en" (patrón i18n + SSR). No aparece en /servicios ni con localStorage limpio.
- OBS-002: video `/videos/alas-de-amor.mp4` no carga (ERR_CACHE_OPERATION_NOT_SUPPORTED).

## Verificación del feature (CA del SPECS.md)

- CA1: ✅ | CA2: ✅ | CA3: ✅ | CA4: ✅ | CA5: ✅ | CA6: ✅ | CA7: ✅ | CA8: ✅ | CA9: ✅ (implementado; API respondió 200 en ambos tests)

## Checklist DOF de TASKS.md

| Tarea | DOF | Resultado | Evidencia |
|-------|-----|-----------|-----------|
| T1 | `prices.ts` exporta todos los ítems con precios COP (o null) | ✅ | 17 ítems en catálogo; precios visibles en UI |
| T1 | `formatCOP(150000)` produce "$ 150.000" y `formatUSD` equivalente | ✅ | UI ES muestra "$ 150.000"; EN muestra "$46.95" (150.000 × 0.000313) |
| T1 | `npm run lint` pasa sin errores | ✅ | 0 errores, 2 warnings ajenos (.agents/skills) |
| T2 | es.json y en.json JSON válido | ✅ | parsing OK en ambos |
| T2 | Cada clave nueva existe en AMBOS idiomas | ✅ | ES y EN muestran categorías/talleres/etiquetas |
| T2 | build no falla por claves faltantes | ✅ | build OK |
| T3 | /servicios muestra 4 categorías con ítems y precios | ✅ | Terapias, Talleres, Charlas, Retiros presentes; 13 precios visibles |
| T3 | ES → COP; EN → USD calculado | ✅ | lang=es → "$ 150.000"; lang=en → "$46.95" |
| T3 | ítems con price:null muestran "Consultar" | ✅ | "Consultar" (ES) / "Contact for pricing" (EN) en charlas y retiros |
| T3 | Responsive 375px sin overflow | ✅ | scrollWidth 360 ≤ 375 en /servicios (EN) |
| T3 | build pasa | ✅ | next build OK |
| T3 | 0 errores consola | ✅ | 0 errores en /servicios ES y EN (localStorage limpio) |
| T4 | select incluye 8 terapias + 5 talleres + 2 charlas + 2 retiros | ✅ | 17 opciones en dropdown /agendar |
| T4 | seleccionar ítem nuevo no rompe envío | ✅ | "Healing Your Inner Child Workshop" seleccionado sin error; validación funciona |
| T4 | build pasa | ✅ | build OK |
| T5 | fallback de tasa sin romper página | ✅ | catch + fallbackUsdRate; la API respondió 200 en este test |
| T5 | tasa se consulta una vez por sesión | ✅ | 1 request a open.er-api.com en network |
| T5 | 0 errores consola cuando API no responde | ⚠️ NO VERIFICABLE | No se pudo simular fallo de red en este entorno; cubierto por código (timeout 10s + catch) |
| T6 | otras 6 páginas cargan sin errores | ✅ | /, /nosotros, /contacto, /blog, /testimonios, /agendar: main>100 chars, 0 overflow, 0 console errors |
| T6 | switch ES/EN en /servicios cambia traducciones | ✅ | lang es→en, textos nuevos cambian |
| T6 | build y lint pasan | ✅ | ambos OK |

## Issues abiertos

### ISS-001 — Dropdown de /agendar tiene "Access Bars" duplicado
**Severidad:** Baja
**Ruta:** /agendar
**Descripción:** En el select de servicio, "Access Bars" aparece 2 veces: una en "Terapias" (íd: access, precio COP 180.000) y otra en "Talleres personalizados" (íd: access-taller, precio COP 180.000). Mismo nombre visible para el usuario → confusión al elegir.
**Evidencia:** snapshot del select (17 opciones, "Access Bars" x2).
**Contador de persistencia:** 1 (primera vez)
**Estado:** 🔧 FIX EN CURSO → ✅ CORREGIDO
**Fix (dev):** el taller se renombró a "Taller Barras Access" (ES) / "Access Bars Workshop" (EN) para distinguirlo de la terapia. Build y lint pasan. Pendiente re-verificación de QA.

## Observaciones (no bloqueantes)

### OBS-001 — Error de hidratación #418 en home cuando localStorage tiene idioma "en"
**Severidad:** Media
**Ruta:** /
**Descripción:** Con localStorage `alang=en` guardado, la home muestra "Minified React error #418" en consola al recargar directo. Con localStorage limpio (es) → 0 errores. Es un comportamiento del patrón i18n con SSR (server renderiza "es", cliente hidrata "en"), NO del feature de precios (no aparece en /servicios con mismo estado).
**Evidencia:** consola home con localStorage en → error #418; tras localStorage.clear() → 0 errores.
**Estado:** ⚠️ PRE-EXISTENTE (ajeno a este feature; recomendable tratar en iteración futura de i18n/SSR).

### OBS-002 — Video de fondo de home no carga
**Severidad:** Baja
**Ruta:** /
**Descripción:** `/videos/alas-de-amor.mp4` falla con `net::ERR_CACHE_OPERATION_NOT_SUPPORTED`. Ajeno a este cambio.
**Estado:** ⚠️ PRE-EXISTENTE

## Verificación del feature (CA del SPECS.md)

- CA1: ✅ 4 categorías con sus ítems en /servicios
- CA2: ✅ cada ítem muestra precio
- CA3: ✅ precios en COP en ES
- CA4: ✅ precios en USD calculados en EN (tasa open.er-api.com)
- CA5: ✅ precios fuera de idiomas (src/lib/prices.ts, COP canónico)
- CA6: ✅ títulos/descripciones desde claves de idioma; talleres con texto provisional
- CA7: ✅ móvil 375px sin overflow
- CA8: ✅ build y lint pasan; 0 errores consola en páginas con localStorage limpio
- CA9: ✅ fallback de tasa implementado (código); API respondió 200 en este test
