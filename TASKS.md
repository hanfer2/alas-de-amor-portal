# TASKS — Liquid Gooey fase 2: piloto visual en servicios
Generado por: agente tech-lead
Basado en: SPECS.md (2026-08-17, ✅ Aprobado)
Fecha: 2026-08-17

## Resumen técnico
Se extiende `liquid-gooey` únicamente a la categoría `Terapias` de
`/servicios`. El piloto debe preservar el layout alternado actual de
`ServiceBlock`, mantener el DOM accesible y permitir rollback eliminando el
flag del piloto y los wrappers Liquid.

## Tareas

### T1 — Definir flag y límites del piloto
**Archivos:** `src/app/servicios/page.tsx`
**Descripción técnica:** Identificar la categoría `terapias` y pasar un flag
explícito a `ServiceBlock` (`liquidPilot`). Las demás categorías deben seguir
renderizando exactamente el comportamiento actual.
**DOR:**
- [x] `liquid-gooey` instalado y validado en fase 1
- [x] Fase 1 aprobada por QA en `QA-ISSUES.md` Ronda 11
**DOF:**
- [x] Solo Terapias activa el piloto
- [x] Talleres, Sanaciones, Lectura Angelical, Charlas y Retiros no usan Liquid
- [x] Rollback posible eliminando el flag y los wrappers

### T2 — Aplicar Morph a una superficie acotada de ServiceBlock
**Archivos:** `src/app/servicios/page.tsx`
**Descripción técnica:** Para los ServiceBlock de Terapias, crear un grupo
`Liquid` que envuelva únicamente elementos visuales relacionados (imagen y
superficie de acción/badge), manteniendo texto y controles reales nítidos.
No aplicar filtros directamente a `<Image>`, headings, párrafos o links.
Usar `fill="var(--color-warm-white)"`, blur/contrast moderados y sombra de los
tokens existentes. No usar `dissolve`.
**DOR:**
- [x] T1 completada
- [x] El DOM actual de ServiceBlock está identificado antes de envolverlo
**DOF:**
- [x] El efecto solo aparece en Terapias
- [x] Texto, precio, imagen, focus ring y CTA siguen siendo DOM real
- [x] CTA sigue navegando a `/agendar`
- [x] No se aplica `filter` directamente a texto o imágenes
- [x] No hay salto de layout al entrar/salir del estado Morph

### T3 — Reduced motion, touch y tokens
**Archivos:** `src/app/servicios/page.tsx`, `src/components/*` si aplica
**Descripción técnica:** Reutilizar las garantías de fase 1: no competir con
scroll táctil, respetar `prefers-reduced-motion`, y usar únicamente tokens
`reiki-*`, `warm-white` y sombras existentes.
**DOF:**
- [x] Reduced motion desactiva o simplifica el Morph
- [x] Mobile 375px sin overflow
- [x] Focus visible y contraste WCAG conservados
- [x] No se introducen colores arbitrarios

### T4 — Regresión y decisión de adopción
**Archivos:** `QA-ISSUES.md`, `TASKS.md`
**Descripción técnica:** QA crea casos antes de probar: desktop, mobile,
reduced-motion, consola, imágenes, navegación, accesibilidad y performance.
Safari queda fuera de esta fase por decisión del usuario.
**DOF:**
- [x] 7 rutas sin errores de consola
- [x] 0 imágenes rotas
- [x] LCP/CLS sin regresión significativa
- [x] QA documenta: aprobar extensión, iterar o descartar

## Dependencias
T1 → T2 → T3 → T4

## Rollback
Eliminar el flag `liquidPilot`, los wrappers `Liquid` y conservar el
`ServiceBlock` original. La dependencia se elimina solo si Tech-Lead decide
descartar definitivamente el prototipo.
