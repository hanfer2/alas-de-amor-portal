# QA ISSUES — Ronda 14
Fecha: 2026-08-17
Deploy verificado: https://alas-de-amor-portal.vercel.app (PR #10)
Resultado global: ✅ APROBADO

## Re-verificación

### ISS-001 — Hydration #418 en `/blog`
**Estado:** ✅ CORREGIDO
**Contador de persistencia:** 6 → cerrado
**Causa:** `toLocaleDateString()` producía distinto HTML entre servidor y cliente.
**Fix:** `Intl.DateTimeFormat` con locale ES/EN explícito y `timeZone: "UTC"`.
**Evidencia:** `/blog` 0 errores de consola; regresión completa 7/7 rutas sin errores.

## Regresión completa

| Ruta | Console errors | Main chars | Imágenes rotas |
|------|----------------|------------|----------------|
| `/` | 0 | 1678 | 0 |
| `/nosotros` | 0 | 4578 | 0 |
| `/servicios` | 0 | 4201 | 0 |
| `/agendar` | 0 | 2285 | 0 |
| `/contacto` | 0 | 1746 | 0 |
| `/testimonios` | 0 | 5118 | 0 |
| `/blog` | 0 | 1065 | 0 |

## Decisión

✅ QA aprobado. El Dev tomó el issue de QA, mantuvo el ID estable, creó PR #10,
Tech-Lead lo mergeó y QA re-verificó el fix y las 7 rutas.
