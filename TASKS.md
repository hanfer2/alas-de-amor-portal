# TASKS — Compactar heroes de sub-páginas
Generado por: agente tech-lead
Basado en: UI-IMPROVEMENTS.md (diseñador auditor) + QA Ronda 10
Fecha: 2026-08-08

## Resumen técnico
Las 6 sub-páginas tienen heroes que ocupan >50% del viewport. Se reduce padding, tamaño de título y espaciado interno para que el contenido real sea visible sin scroll a 1280×900.

## Tareas

### T1 — Reducir padding del hero en 6 sub-páginas
**Archivos:** `src/app/servicios/page.tsx`, `src/app/nosotros/page.tsx`, `src/app/agendar/page.tsx`, `src/app/contacto/page.tsx`, `src/app/testimonios/page.tsx`, `src/app/blog/page.tsx`
**Descripción técnica:** Reemplazar `pt-20 pb-8` por `pt-16 pb-4` en el `<section className="relative pt-20 pb-8 gradient-hero...">` de cada página. Testimonios usa `pt-14 pb-4` por ser el peor caso (63% vh).
**DOR:**
- [ ] UI-IMPROVEMENTS.md existe con parche 1
- [ ] QA midió heroes actuales (53%-63% vh)
**DOF:**
- [ ] Hero height < 40% vh en 1280×900 para las 6 sub-páginas
- [ ] `npm run build` + `npm run lint` pasan
- [ ] 0 errores de consola
**Prioridad:** Alta

### T2 — Reducir tamaño de título en sub-páginas
**Archivos:** mismos 6 archivos
**Descripción técnica:** Reemplazar `text-5xl sm:text-6xl` por `text-4xl sm:text-5xl` en el `<h1>` del hero de cada sub-página.
**DOR:**
- [ ] T1 completada (el padding ya está reducido)
**DOF:**
- [ ] El título se ve proporcionado al nuevo padding
- [ ] `npm run build` pasa
**Prioridad:** Media

### T3 — Compactar espaciado vertical en hero
**Archivos:** mismos 6 archivos
**Descripción técnica:** En el `<h1>`, cambiar `mt-3` por `mt-2`. En el `<p>` del subtítulo, cambiar `mt-6` por `mt-3`.
**DOR:**
- [ ] T1 completada
**DOF:**
- [ ] Badge, título y subtítulo se ven agrupados y compactos
- [ ] `npm run build` pasa
**Prioridad:** Media

### T4 — Regresión
**Archivos:** todos
**Descripción técnica:** Verificar 7 páginas cargan sin errores, responsive 375px sin overflow, hero height medido.
**DOF:**
- [ ] 7 páginas con 0 console errors (excepto blog #418 pre-existente)
- [ ] Hero height < 40% vh en 1280×900
- [ ] Responsive 375px sin overflow
**Prioridad:** Alta

## Dependencias
T1 → T2, T3 (paralelas) → T4
