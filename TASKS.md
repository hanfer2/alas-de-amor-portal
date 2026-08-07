# TASKS — Auditoría integral: SEO + seguridad
Generado por: agente tech-lead
Basado en: QA-ISSUES.md (Ronda 8) + SEC-AUDIT.md
Fecha: 2026-08-07

## Resumen técnico
La auditoría reveló 4 issues. Prioridad: SEO (title/description por página + canonical) → headers de seguridad → npm audit fix. El fix de SEO es el de mayor impacto porque mejora el posicionamiento en buscadores de todas las páginas.

## Tareas

### T1 — Metadata única por página (SEO)
**Archivos:** `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/nosotros/page.tsx`, `src/app/servicios/page.tsx`, `src/app/agendar/page.tsx`, `src/app/contacto/page.tsx`, `src/app/testimonios/page.tsx`, `src/app/blog/page.tsx`
**Descripción técnica:** Cada `page.tsx` debe exportar un objeto `metadata` con `title` y `description` únicos. El layout.tsx define el template base con `%s | Alas de Amor` y cada página sobreescribe. También se corrige el canonical.
**DOR:**
- [ ] ISS-SEO-001 e ISS-SEO-002 documentados
**DOF:**
- [ ] `/servicios` tiene title "Servicios | Alas de Amor" y description único sobre terapias
- [ ] `/nosotros` tiene title "Quiénes Somos | Alas de Amor" y description único
- [ ] `/agendar`, `/contacto`, `/testimonios`, `/blog` tienen metadata única
- [ ] Canonical apunta a la URL correcta por página
- [ ] `npm run build` + `npm run lint` pasan
**Prioridad:** Alta

### T2 — Headers de seguridad HTTP
**Archivos:** `next.config.ts` o `vercel.json`
**Descripción técnica:** Agregar headers `Content-Security-Policy`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY` en la configuración de Next.js o Vercel.
**DOR:**
- [ ] ISS-SEC-HEADERS documentado
**DOF:**
- [ ] `curl -I https://alas-de-amor-portal.vercel.app` devuelve los 3 headers
- [ ] `npm run build` pasa
**Prioridad:** Alta

### T3 — npm audit fix
**Archivos:** `package.json`, `package-lock.json`
**Descripción técnica:** Ejecutar `npm audit fix` para actualizar dependencias con vulnerabilidades high (brace-expansion, js-yaml, nanoid, next, postcss, sharp).
**DOR:**
- [ ] SEC-AUDIT.md documenta 6 vulnerabilidades high
**DOF:**
- [ ] `npm audit` muestra 0 vulnerabilidades high/critical
- [ ] `npm run build` + `npm run lint` pasan
**Prioridad:** Media

## Dependencias
T1, T2, T3 son independientes (paralelas).