# TASKS — ContactLauncher: affordance, alineación y transición
Generado por: agente tech-lead
Basado en: UI-IMPROVEMENTS.md + QA-ISSUES.md Ronda 16
Fecha: 2026-08-17

## Tareas

### T1 — Mejorar affordance del botón cerrado
**Archivo:** `src/components/ContactLauncher.tsx`
**Descripción:** Reemplazar la estrella `✦` por un icono SVG de conversación
y un label visual corto. Mantener `aria-label`, `aria-expanded` y focus.
**DOR:**
- [x] ISS-UI-001 documentado
- [x] UI-IMPROVEMENTS.md parche 1
**DOF:**
- [ ] Estado cerrado comunica visualmente chat/contacto
- [ ] Icono tiene `aria-hidden="true"` y botón mantiene nombre accesible

### T2 — Alinear opciones Liquid y botón trigger
**Archivo:** `src/components/ContactLauncher.tsx`
**Descripción:** Cambiar el root a `flex flex-col items-end`; alinear el grupo
de opciones al borde derecho y reservar un eje estable entre opciones y trigger.
No usar offsets negativos.
**DOR:**
- [x] ISS-UI-002 documentado
- [x] UI-IMPROVEMENTS.md parche 2
**DOF:**
- [ ] WhatsApp, Chat y trigger comparten eje derecho en desktop y 375px
- [ ] No hay overflow horizontal ni salto de layout

### T3 — Animar entrada y salida con Framer Motion
**Archivo:** `src/components/ContactLauncher.tsx`
**Descripción:** Importar `AnimatePresence`/`motion`. Animar menú y diálogo
con fade, scale y y reducido (`duration: 0.2`). Respetar reduced motion con
duración 0 o estado estático.
**DOR:**
- [x] Framer Motion ya instalado
- [x] ISS-UI-003 documentado
- [x] UI-IMPROVEMENTS.md parche 3
**DOF:**
- [ ] Apertura/cierre suave, sin montaje brusco
- [ ] Escape, click fuera y cierre siguen funcionando
- [ ] Reduced motion no ejecuta movimiento perceptible

### T4 — Regresión
**Archivos:** `QA-ISSUES.md`, todos los componentes afectados
**DOF:**
- [ ] 7 rutas sin errores de consola
- [ ] 0 imágenes rotas
- [ ] 375px sin overflow
- [ ] WhatsApp no se dispara durante QA
- [ ] QA re-verifica ISS-UI-001, ISS-UI-002 e ISS-UI-003

## Dependencias
T1 y T2 → T3 → T4
