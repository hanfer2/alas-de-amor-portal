# TASKS — Remover badges y compactar heroes v2
Generado por: agente tech-lead
Basado en: UI-IMPROVEMENTS.md (diseñador auditor)
Fecha: 2026-08-08

## Resumen técnico
Los badges pill en el hero de sub-páginas no aportan información (repiten el título) y ocupan ~38px verticales. Se eliminan. El padding del hero se reduce a pt-12 y el título pierde el mt-2.

## Tareas

### T1 — Eliminar badges de las 6 sub-páginas
**Archivos:** `src/app/servicios/page.tsx`, `src/app/nosotros/page.tsx`, `src/app/agendar/page.tsx`, `src/app/contacto/page.tsx`, `src/app/testimonios/page.tsx`, `src/app/blog/page.tsx`
**Descripción técnica:** Remover la línea del `<span>` badge dentro de cada hero section. Mantener el `{t("xxx.hero.badge")}` en los locales por si se reutiliza en otro contexto.
**DOR:**
- [ ] UI-IMPROVEMENTS.md parche 1
- [ ] QA midió badge en 30px height
**DOF:**
- [ ] 0 badges pill visibles en el hero de 6 sub-páginas
- [ ] `npm run build` + `npm run lint` pasan
**Prioridad:** Alta

### T2 — Reducir padding hero a pt-12
**Archivos:** mismos 6 archivos
**Descripción técnica:** `pt-16 pb-4` → `pt-12 pb-4`. Testimonios: `pt-14 pb-4` → `pt-10 pb-4`.
**DOR:**
- [ ] T1 completada
**DOF:**
- [ ] Hero height < 35% vh en 1280×900
- [ ] `npm run build` pasa
**Prioridad:** Alta

### T3 — Título mt-2 → mt-0
**Archivos:** mismos 6 archivos
**Descripción técnica:** En el `<h1>`, `mt-2` → `mt-0`.
**DOR:**
- [ ] T1 completada
**DOF:**
- [ ] Título empieza a 48px del top (pt-12 = 48px)
- [ ] `npm run build` pasa
**Prioridad:** Media

### T4 — Regresión
**DOF:**
- [ ] 7 páginas con 0 console errors (excepto blog #418)
- [ ] Hero height < 35% vh
- [ ] Responsive 375px sin overflow
**Prioridad:** Alta

## Dependencias
T1 → T2 → T3 → T4
