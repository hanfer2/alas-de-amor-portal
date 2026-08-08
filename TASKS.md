# TASKS — Refactor visual /agendar + Fix i18n
Generado por: agente tech-lead
Basado en: SPECS.md (2026-08-07, ✅ Aprobado)
Fecha: 2026-08-07

## Resumen técnico
Refactor visual de `/agendar` a split layout 2 columnas con glassmorphism y estilo etéreo. Se toca `src/app/agendar/page.tsx` (estructura de layout), `src/components/AppointmentForm.tsx` (estilos de inputs, select, botón), y `src/locales/es.json`/`en.json` (nuevos textos de columna izquierda). También se investiga y corrige el bug de claves i18n visibles en el select.

## Tareas

### TI-1 — Generar imagen lateral para /agendar
**Tipo:** Imagen nueva (diseñador)
**Archivo destino:** `public/imgs/gen-agendar-lateral.webp`
**Página:** /agendar
**Sección / Componente:** Columna izquierda → imagen lateral
**Descripción visual:** Imagen etérea cálida, espacio de sanación con luz violeta y dorada entrando por una ventana o portal, atmósfera de calma y confianza, sin rostros, tonos crema y violeta suave. Orientación vertical.
**Dimensiones:** 600×800
**Prioridad:** Alta
**DOR:**
- [ ] IMAGES.md consultado — esta imagen no existe
**DOF:**
- [ ] `gen-agendar-lateral.webp` existe en `public/imgs/`
- [ ] Peso < 200 KB, formato WebP
- [ ] IMAGES.md actualizado con ficha técnica

### T1 — Refactor visual de /agendar a split layout
**Archivos:** `src/app/agendar/page.tsx`, `src/locales/es.json`, `src/locales/en.json`
**Descripción técnica:** Reemplazar el layout actual de columna única por un grid de 2 columnas en lg+:
- Columna izquierda: imagen lateral (`gen-agendar-lateral.webp`), título "Tu bienestar comienza aquí", subtítulo de confianza, y datos de contacto
- Columna derecha: formulario con glassmorphism (`bg-white/90 backdrop-blur-sm shadow-xl rounded-3xl border border-white/50`)
- Fondo de página con gradiente sutil: `bg-gradient-to-br from-warm-white to-violet-50/30`
- Agregar claves i18n: `agendar.sidebar.title`, `agendar.sidebar.subtitle`
**DOR:**
- [ ] TI-1 completada (imagen lateral generada)
- [ ] SPECS.md aprobado con textos definitivos
**DOF:**
- [ ] En lg+, la página muestra 2 columnas con imagen a la izquierda y form a la derecha
- [ ] En mobile (<lg), se apila verticalmente
- [ ] La columna izquierda tiene imagen + título + subtítulo + datos de contacto
- [ ] ES y EN traducen los textos de la columna izquierda
- [ ] `npm run build` + `npm run lint` pasan
**Prioridad:** Alta

### T2 — Estilo etéreo en formulario (glassmorphism + inputs suaves)
**Archivos:** `src/components/AppointmentForm.tsx`
**Descripción técnica:** 
- Tarjeta del form: `bg-white/90 backdrop-blur-sm shadow-xl shadow-indigo-900/5 rounded-3xl border border-white/50`
- Inputs: `bg-gray-50 border-gray-100 rounded-xl focus:ring-2 focus:ring-reiki-500 focus:border-transparent transition-all`
- Botón submit: `bg-gradient-to-r from-reiki-600 to-reiki-400 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all rounded-full`
- Select: mismo estilo que inputs
**DOR:**
- [ ] T1 completada
**DOF:**
- [ ] Inputs tienen estilo etéreo (bg suave, border tenue, focus ring violeta)
- [ ] Botón de submit tiene gradiente y micro-interacción hover
- [ ] Glassmorphism visible en la tarjeta del form
- [ ] `npm run build` + `npm run lint` pasan
**Prioridad:** Media

### T3 — Fix i18n en select de servicios
**Archivos:** `src/components/AppointmentForm.tsx`, `src/lib/translations.ts`
**Descripción técnica:** Verificar que todas las claves `titleKey` del catálogo (`src/lib/prices.ts`) existen en `es.json` y `en.json`. El bug reportado muestra claves como `services.reiki` en el DOM — posiblemente una clave no resuelta. Si el `t()` retorna la clave misma, reemplazar por un fallback explícito. Revisar si el hook `useTranslations` retorna `key` cuando no encuentra traducción (línea 16 de translations.ts) y agregar un fallback.
**DOR:**
- [ ] Bug identificado: claves i18n visibles en el select
**DOF:**
- [ ] El select de servicios muestra NOMBRES traducidos en ES y EN
- [ ] 0 claves i18n visibles en el DOM (sin `services.`, `nosotros.`, etc.)
- [ ] `npm run build` + `npm run lint` pasan
**Prioridad:** Alta

## Dependencias
TI-1 → T1 → T2, T3 (paralelas T2 y T3)

## Briefing para el diseñador — Imágenes a generar

> **Instrucción**: invoca al agente `disenador` y entrégale este briefing. Debe generar la imagen ANTES de pasar al `dev`.

| # | Archivo destino | Página | Sección / Componente | Dim | Prioridad | Descripción visual |
|---|----------------|--------|---------------------|-----|-----------|-------------------|
| 1 | `public/imgs/gen-agendar-lateral.webp` | /agendar | Columna izquierda → imagen lateral | 600×800 | Alta | Espacio de sanación etéreo con luz violeta y dorada entrando por una ventana/portal, sillón o cojines de meditación, plantas sutiles, atmósfera de calma absoluta y confianza, sin rostros, sin texto, orientación vertical para columna lateral |

**Restricciones globales:**
- Paleta: violeta/índigo, dorado, crema, cálido-blanco — SIN verde, SIN amarillo
- Estilo: etéreo, profesional, cálido
- Formato: WebP, peso < 200 KB
- Sin caras de personas reales, sin texto, sin logos
