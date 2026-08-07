# SEC-AUDIT — 2026-08-07
Generado por: agente security-reviewer
Deploy auditado: https://alas-de-amor-portal.vercel.app (commit d4fb3e9)
Resultado global: ⚠️ 9 VULNERABILIDADES (0 críticas, 3 altas, 6 dependencias)

## Resumen ejecutivo
3 headers de seguridad HTTP ausentes (CSP, X-Content-Type-Options, X-Frame-Options) y 6 vulnerabilidades high en dependencias npm. No se encontraron secretos expuestos en git ni en el HTML del deploy. No se detectaron vectores XSS visibles en el HTML servido.

## Hallazgos

### ISS-SEC-CSP — Content-Security-Policy ausente
**Severidad:** Alta
**Descripción:** El servidor (Vercel) no envía el header `Content-Security-Policy`. Esto permite la ejecución de scripts inline no autorizados.
**Acción:** Configurar CSP en `next.config.ts` o en `vercel.json`.
**Estado:** 🔴 ABIERTO

### ISS-SEC-CTO — X-Content-Type-Options ausente
**Severidad:** Baja
**Descripción:** Falta `X-Content-Type-Options: nosniff`. Sin este header, navegadores viejos pueden intentar adivinar el MIME type.
**Acción:** Agregar a `next.config.ts` headers.
**Estado:** 🔴 ABIERTO

### ISS-SEC-XFO — X-Frame-Options ausente
**Severidad:** Baja
**Descripción:** Falta `X-Frame-Options: DENY`. El portal podría ser embebido en un iframe por un tercero (clickjacking).
**Acción:** Agregar a `next.config.ts` headers.
**Estado:** 🔴 ABIERTO

### ISS-SEC-DEP-001 — brace-expansion: high
**Severidad:** Alta
**Paquete:** brace-expansion (transitiva)
**Acción:** `npm audit fix` o actualizar dependencias.
**Estado:** 🔴 ABIERTO

### ISS-SEC-DEP-002 — js-yaml: high
**Severidad:** Alta
**Paquete:** js-yaml (transitiva)
**Acción:** `npm audit fix`.
**Estado:** 🔴 ABIERTO

### ISS-SEC-DEP-003 — nanoid: high
**Severidad:** Alta
**Paquete:** nanoid (transitiva de postcss)
**Acción:** `npm update nanoid` o `npm audit fix`.
**Estado:** 🔴 ABIERTO

### ISS-SEC-DEP-004 — next: high
**Severidad:** Alta
**Paquete:** next (Next.js)
**Acción:** `npm update next` a la última versión de Next.js 16.
**Estado:** 🔴 ABIERTO

### ISS-SEC-DEP-005 — postcss: high
**Severidad:** Alta
**Paquete:** postcss (transitiva)
**Acción:** `npm audit fix`.
**Estado:** 🔴 ABIERTO

### ISS-SEC-DEP-006 — sharp: high
**Severidad:** Alta
**Paquete:** sharp
**Acción:** `npm update sharp`.
**Estado:** 🔴 ABIERTO

## Verificaciones que pasaron
- ✅ Git history: 0 secretos expuestos (los matches en el diff son falsos positivos de la documentación de agentes)
- ✅ HTML deploy: 0 secretos en el bundle del cliente
- ✅ HSTS: presente (max-age=63072000, includeSubDomains, preload)
- ✅ XSS en HTML servido: no se detectaron vectores `<script>alert`
- ✅ Vercel ID: iad1::w7sjs — deploy verificado
