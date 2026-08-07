# TASKS — Meditación Guiada Online
Generado por: agente tech-lead
Basado en: SPECS.md (2026-08-07, ✅ Aprobado)
Fecha: 2026-08-07

## Resumen técnico
Agregar un ítem al catálogo de Terapias en `src/lib/prices.ts`, claves i18n en ES/EN, una imagen nueva vía diseñador, y verificar que el dropdown de /agendar lo incluya automáticamente. Sin cambios de estructura — el sistema de catálogo dinámico ya soporta nuevos ítems.

## Tareas

### TI-1 — Generar imagen para Meditación Guiada Online
**Tipo:** Imagen nueva (diseñador)
**Archivo destino:** `public/imgs/gen-terapias-meditacion-online.webp`
**Página:** /servicios
**Sección / Componente:** Terapias → ServiceBlock "Meditación Guiada Online"
**Descripción visual:** Silueta meditando frente a un portal de luz etéreo, elemento de conexión digital sutil (pantalla translúcida, ondas de luz), tonos violeta y dorado, sin rostros definidos
**Dimensiones:** 800×600
**Prioridad:** Alta
**DOR:**
- [ ] IMAGES.md consultado — esta imagen no existe
**DOF:**
- [ ] Imagen existe en `public/imgs/gen-terapias-meditacion-online.webp`
- [ ] Peso < 200 KB, formato WebP
- [ ] IMAGES.md actualizado con ficha técnica

### T1 — Agregar Meditación Guiada Online al catálogo
**Archivos:** `src/lib/prices.ts`, `src/locales/es.json`, `src/locales/en.json`
**Descripción técnica:** Agregar ítem en el array `terapias.items` con `id: "meditacion-online"`, `titleKey: "servicios.meditacion-online.title"`, `descKey: "servicios.meditacion-online.desc"`, `durationKey: "servicios.meditacion-online.duration"`, `image: "/imgs/gen-terapias-meditacion-online.webp"`, `price: 70000`. Agregar las claves i18n correspondientes en ambos idiomas según el SPEC.
**DOR:**
- [ ] TI-1 completada (imagen generada)
- [ ] SPECS.md aprobado con textos definitivos
**DOF:**
- [ ] "Meditación Guiada Online" visible en /servicios → Terapias con precio 70.000 COP
- [ ] Duración "45 minutos (videollamada)" visible
- [ ] Imagen cargada con `naturalWidth > 0`
- [ ] Switch EN muestra "Online Guided Meditation" y "$ [USD]"
- [ ] `npm run build` + `npm run lint` pasan
**Criterio de aceptación relacionado:** CA1, CA2, CA3, CA4
**Prioridad:** Alta

### T2 — Verificar dropdown de /agendar
**Archivos:** `src/components/AppointmentForm.tsx` (verificación, sin cambio esperado)
**Descripción técnica:** El dropdown itera `catalog` automáticamente, por lo que debe incluir el nuevo ítem sin cambios. Verificar que aparece en la lista de opciones.
**DOR:**
- [ ] T1 completada
**DOF:**
- [ ] Dropdown de /agendar incluye "Meditación Guiada Online"
- [ ] Seleccionar el ítem no rompe el form
**Criterio de aceptación relacionado:** CA5
**Prioridad:** Media

### T3 — Regresión + SEO
**Archivos:** todos
**Descripción técnica:** Verificar build/lint, las 7 páginas cargan sin errores, y SEO básico (title, meta description).
**DOR:**
- [ ] T1 y T2 completadas
**DOF:**
- [ ] `npm run build` + `npm run lint` pasan
- [ ] Las 7 páginas cargan sin errores de consola
- [ ] SEO: `document.title` contiene "Meditación Guiada" o el nombre del portal
**Criterio de aceptación relacionado:** CA6
**Prioridad:** Media

## Dependencias
TI-1 → T1 → T2 → T3

## Briefing para el diseñador — Imágenes a generar

> **Instrucción**: invoca al agente `disenador` y entrégale este briefing. Debe generar la imagen ANTES de pasar al `dev`.

| # | Archivo destino | Página | Sección / Componente | Dim | Prioridad | Descripción visual |
|---|----------------|--------|---------------------|-----|-----------|-------------------|
| 1 | `public/imgs/gen-terapias-meditacion-online.webp` | /servicios | Terapias → ServiceBlock "Meditación Guiada Online" | 800×600 | Alta | Silueta femenina etérea meditando en posición de loto frente a un portal de luz violeta-dorada con forma de pantalla translúcida, ondas de energía digital sutiles, conexión entre lo espiritual y lo virtual, sin rostro definido, atmósfera de calma y tecnología orgánica |

**Restricciones globales:**
- Paleta: violeta/índigo, dorado, crema, cálido-blanco — SIN verde, SIN amarillo
- Estilo: etéreo, profesional, cálido
- Formato: WebP, peso < 200 KB
- Sin caras de personas reales, sin texto, sin logos
