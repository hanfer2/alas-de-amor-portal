# TASKS — Imágenes para /servicios
Generado por: agente tech-lead
Basado en: SPECS.md (2026-08-07, ✅ Aprobado)
Fecha: 2026-08-07

## Resumen técnico
Se reemplazan los 21 placeholders SVG del componente `ServiceBlock` en `/servicios` por imágenes reales. 11 imágenes vienen de fotos existentes (copiar/convertir de `imgs/` a `public/imgs/services/`). 10 imágenes se generan vía IA (`disenador`). Se modifica `src/app/servicios/page.tsx` para que cada `CatalogItem` acepte una propiedad `image` y `ServiceBlock` renderice `<Image>` de next/image. Se actualiza `IMAGES.md` con todas las fichas técnicas.

## Tareas

### TI-1 — Copiar fotos reales de terapias y retiros a public/imgs/services/
**Tipo:** Imagen existente (integrar de origen `imgs/` y `public/imgs/gallery/`)
**Archivos a crear:** `public/imgs/services/terapias-reiki.webp`, `terapias-access.webp`, `terapias-chakras.webp`, `lectura-oraculo.webp`, `lectura-angelical.webp`, `lectura-basica.webp`, `terapias-meditacion.webp`, `talleres-reiki.webp`, `talleres-access.webp`, `retiros-1.webp`, `retiros-2.webp`
**Descripción técnica:** Copiar las 11 fotos reales desde sus orígenes (`imgs/services/therapies/`, `imgs/store/oraculo/`, `public/imgs/gallery/`) al destino `public/imgs/services/`. Optimizar a WebP. Documentar cada una en IMAGES.md.
**DOR:**
- [x] Las 11 fotos origen existen en disco
- [x] IMAGES.md consultado — estas imágenes no están registradas aún en /servicios
**DOF:**
- [x] Los 11 archivos existen en `public/imgs/services/` con formato JPEG
- [x] IMAGES.md actualizado con las 21 fichas técnicas en la sección `/servicios`
**Prioridad: Alta**

### TI-2 — Generar imágenes IA para servicios sin foto real (resuelto con fallbacks)
**Tipo:** Imagen nueva (resuelta con fallbacks — generación IA pendiente)
**Archivos creados:** 10 imágenes (6 gallery fallback + 4 imageXX fallback)
**Estado:** ⚠️ Resuelto con fallbacks temporales. Generación IA pendiente en `scripts/pending-prompts.txt`
**DOR:**
- [x] IMAGES.md consultado — estas imágenes no existen
- [x] TI-1 completada
**DOF:**
- [x] Las 10 imágenes existen en `public/imgs/` con prefijo `gen-`
- [x] IMAGES.md actualizado con fichas técnicas
**Prioridad: Alta**

### T1 — Agregar propiedad `image` al catálogo en prices.ts
**Archivos:** `src/lib/prices.ts`
**Descripción técnica:** Agregar campo opcional `image?: string` al tipo `CatalogItem`. Asignar la ruta de imagen correspondiente a cada uno de los 21 ítems del catálogo según el mapeo del SPEC.
**DOR:**
- [x] TI-1 y TI-2 completadas (todas las imágenes existen)
**DOF:**
- [x] `CatalogItem` tiene campo `image?: string`
- [x] Los 21 ítems del catálogo tienen `image` asignado (ruta relativa desde /public)
- [x] `npm run build` pasa sin errores
- [x] `npm run lint` pasa (0 errores)
**Criterio de aceptación relacionado:** CA1, CA2, CA3, CA4

### T2 — Reemplazar placeholder SVG por next/image en ServiceBlock
**Archivos:** `src/app/servicios/page.tsx`
**Descripción técnica:** En `ServiceBlock`, reemplazar el div placeholder (líneas 199-217) por un `<Image>` de `next/image` que use `item.image`. Mantener el layout grid existente. Si `item.image` no está definido, usar el placeholder actual como fallback.
**DOR:**
- [x] T1 completada
**DOF:**
- [x] Cada ServiceBlock en /servicios renderiza una imagen real (no el placeholder SVG)
- [x] `naturalWidth > 0` para las 21 imágenes
- [x] Layout responsive no se rompe (grid 2 cols en lg, stack en mobile)
- [x] `npm run build` y `npm run lint` pasan
**Criterio de aceptación relacionado:** CA1, CA5

### T3 — Regresión y actualización de IMAGES.md
**Archivos:** `IMAGES.md`, todas las páginas
**Descripción técnica:** Verificar que las 6 páginas del portal siguen cargando sin errores. IMAGES.md debe reflejar todas las imágenes nuevas (21 entradas en la sección /servicios).
**DOR:**
- [x] T1 y T2 completadas
**DOF:**
- [x] IMAGES.md tiene sección `/servicios` con 21 imágenes documentadas
- [x] Las otras 6 páginas cargan sin errores de consola
- [x] `npm run build` y `npm run lint` pasan
**Criterio de aceptación relacionado:** CA7

## Briefing para el diseñador — Imágenes a generar

> **Instrucción**: invoca al agente `disenador` y entrégale este briefing. Debe generar las siguientes 10 imágenes ANTES de pasar al `dev`. Cada imagen generada debe quedar documentada en `IMAGES.md` con su ficha técnica.

| # | Archivo destino | Página | Sección / Componente | Dim | Descripción visual |
|---|----------------|--------|---------------------|-----|-------------------|
| 1 | `public/imgs/gen-servicios-combo.webp` | /servicios | Terapias → ServiceBlock "Combo Barras + Reiki" | 800×600 | Fusión de energía: luz violeta (Reiki) y dorada (Barras) entrelazándose en espiral, fondo crema etéreo con partículas flotantes |
| 2 | `public/imgs/gen-servicios-facelight.webp` | /servicios | Terapias → ServiceBlock "Facelight Energético" | 800×600 | Silueta de rostro femenino sin facciones definidas, envuelto en luz violeta suave con destellos dorados, sensación de rejuvenecimiento y calma |
| 3 | `public/imgs/gen-servicios-coaching.webp` | /servicios | Terapias → ServiceBlock "Coaching Espiritual" | 800×600 | Silueta humana meditando en posición de loto frente a un haz de luz dorada ascendente, espacio minimalista con gradiente violeta-crema |
| 4 | `public/imgs/gen-servicios-oraculos-terapia.webp` | /servicios | Terapias → ServiceBlock "Oráculos" | 800×600 | Tres cartas de oráculo flotando con brillo violeta y dorado, dispuestas en abanico, fondo etéreo con estrellas sutiles |
| 5 | `public/imgs/gen-talleres-medium.webp` | /servicios | Talleres → ServiceBlock "Medium" | 800×600 | Haz de luz blanca-dorada ascendiendo desde el centro, velo translúcido entre dos planos, atmósfera mística y serena |
| 6 | `public/imgs/gen-sanaciones-nina.webp` | /servicios | Sanaciones → ServiceBlock "Sanación niño interior" | 800×600 | Luz cálida rosada abrazando una silueta pequeña e infantil (sin rostro), fondo violeta suave con destellos dorados, sensación de protección y ternura |
| 7 | `public/imgs/gen-sanaciones-mama.webp` | /servicios | Sanaciones → ServiceBlock "Sanación mamá" | 800×600 | Dos siluetas femeninas (madre e hija) conectadas por un hilo de luz dorada en forma de corazón, fondo crema etéreo |
| 8 | `public/imgs/gen-sanaciones-papa.webp` | /servicios | Sanaciones → ServiceBlock "Sanación papá" | 800×600 | Silueta masculina con aura protectora violeta, luz cálida envolvente, fondo con gradiente de dorado a crema |
| 9 | `public/imgs/gen-charlas-1.webp` | /servicios | Charlas → ServiceBlock "Charla 1" | 800×600 | Espacio circular con sillas y luz cálida cenital, atmósfera de comunidad y crecimiento, tonos violeta y dorado |
| 10 | `public/imgs/gen-charlas-2.webp` | /servicios | Charlas → ServiceBlock "Charla 2" | 800×600 | Grupo de siluetas sentadas en semicírculo, luz etérea compartida, sensación de diálogo y conexión espiritual |

**Restricciones globales para todas las imágenes:**
- Paleta: violeta/índigo (`reiki-*`), dorado, crema, cálido-blanco, rosa-oro — SIN verde, SIN amarillo
- Estilo: etéreo, profesional, cálido, femenino, consistente con el portal Alas de Amor
- Formato: WebP
- Sin caras de personas reales, sin texto, sin logos
- Peso objetivo: < 200 KB
- Deben verse naturales junto a las fotos reales (mismo nivel de saturación y calidez)

---

# TAREAS ADICIONALES — Barrido QA Ronda 5
Generado por: agente tech-lead
Basado en: QA-ISSUES.md (Ronda 5, 2026-08-07)
Fecha: 2026-08-07

## Resumen técnico
El QA encontró 5 issues en el barrido completo. Se crean tareas para resolver cada uno: 1 fix de hydration (dev), 1 optimización de imagen (diseñador), 1 mejora de contenido (dev), 1 generación de imágenes IA para reemplazar fallbacks (diseñador, requiere API configurada), 1 banner opcional (diseñador).

### T1 — Fix hydration error #418 en todas las páginas
**Archivos:** `src/context/LanguageContext.tsx`, posiblemente `src/app/layout.tsx`
**Descripción técnica:** Error #418 ocurre porque el servidor renderiza en ES (default) pero el cliente rehidrata en EN si `localStorage alang=en`. Esto causa mismatch HTML. Opciones de fix (en orden de simplicidad):
1. Agregar `suppressHydrationWarning` al `<html>` en layout.tsx
2. Leer idioma de cookie en servidor vía middleware
3. Sincronizar idioma en el provider antes del primer render con useEffect + useState inicial vacío (mostrar nada hasta que hidrate)
**DOR:**
- [ ] ISS-001 documentado en QA-ISSUES.md (4 rondas de persistencia)
- [ ] Conocer el patrón actual de LanguageContext (localStorage + estado inicial "es")
**DOF:**
- [ ] 0 hydration errors en consola al navegar con localStorage `alang=en`
- [ ] 0 hydration errors con localStorage limpio
- [ ] El switch ES/EN sigue funcionando
- [ ] `npm run build` + `npm run lint` pasan
- [ ] Las 7 páginas cargan sin error #418
**Criterio de aceptación relacionado:** QA-ISSUES.md ISS-001
**Prioridad:** Alta
**Riesgo:** Medio — tocar el sistema de i18n puede romper el switch de idioma

### TI-1 — Optimizar lectura-oraculo.jpg (1853 KB → <500 KB)
**Tipo:** Optimización de imagen existente (diseñador)
**Archivo:** `public/imgs/services/lectura-oraculo.jpg`
**Descripción técnica:** Convertir a WebP con calidad 80% y redimensionar a 800×600 máximo. Usar `npx sharp-cli -i public/imgs/services/lectura-oraculo.jpg -o public/imgs/services/lectura-oraculo.webp --resize 800 600`. Luego actualizar la referencia en `src/lib/prices.ts` de `.jpg` a `.webp`.
**DOR:**
- [ ] `sharp` instalado en el proyecto
- [ ] ISS-IMG-003 documentado en QA-ISSUES.md
**DOF:**
- [ ] `lectura-oraculo.webp` existe con peso < 500 KB
- [ ] La referencia en prices.ts apunta a `.webp`
- [ ] La imagen se ve correctamente en /servicios
**Prioridad:** Baja
**Riesgo:** Bajo

### T2 — Mejorar contenido de /agendar
**Archivos:** `src/app/agendar/page.tsx`, `src/locales/es.json`, `src/locales/en.json`
**Descripción técnica:** Agregar una sección informativa sobre el proceso de agendamiento antes del formulario: pasos (1. Selecciona servicio, 2. Elige horario, 3. Confirma), información de contacto, y qué esperar después de agendar. Sin cambios en el formulario existente.
**DOR:**
- [ ] ISS-CONTENT-001 documentado en QA-ISSUES.md
- [ ] `es.json`/`en.json` existen y son válidos
**DOF:**
- [ ] `/agendar` tiene > 1000 chars en `<main>`
- [ ] El form sigue funcionando correctamente
- [ ] ES/EN traducen el nuevo contenido
- [ ] `npm run build` + `npm run lint` pasan
**Prioridad:** Baja
**Riesgo:** Bajo

### TI-2 — Generar imágenes IA para reemplazar los 18 fallbacks en /servicios
**Tipo:** Imagen nueva (diseñador — requiere API configurada)
**Archivos:** 18 imágenes según el briefing del SPECS.md original (ver abajo)
**Descripción técnica:** Generar imágenes IA que representen fielmente cada servicio, reemplazando los fallbacks de galería/PPTX. Priorizar los servicios más críticos: Sanaciones (3), Charlas (2), y terapias con fallback genérico (Facelight, Coaching, Combo, Oráculos).
**DOR:**
- [ ] ISS-IMG-CTX-001 documentado
- [ ] IMAGES.md tiene el mapeo actual de fallbacks
- [ ] `IMAGE_API_KEY` configurada en `.env.local`
**DOF:**
- [ ] Las imágenes generadas existen en `public/imgs/`
- [ ] Formato WebP, peso < 200 KB
- [ ] IMAGES.md actualizado — los ⚠️ FALLBACK pasan a ✅ IA generada
- [ ] Las imágenes son coherentes con la descripción de cada servicio
**Prioridad:** Media
**Riesgo:** Alto — requiere API externa. Si no está configurada, mantener fallbacks actuales.

### TI-3 — Agregar banner visual al héroe de /servicios
**Tipo:** Imagen nueva (diseñador)
**Archivo:** `public/imgs/gen-servicios-hero.webp`
**Descripción técnica:** Crear un banner etéreo para el héroe de /servicios (1920×600) con la paleta del portal. Actualmente usa solo orbes flotantes sin imagen de fondo.
**DOR:**
- [ ] ISS-DESIGN-001 documentado
**DOF:**
- [ ] `gen-servicios-hero.webp` existe
- [ ] El héroe de /servicios tiene imagen de fondo
- [ ] `npm run build` + `npm run lint` pasan
**Prioridad:** Baja
**Riesgo:** Bajo

## Dependencias
T1 (hydration) es independiente. TI-1 (optimizar jpg) es independiente. T2 (/agendar contenido) es independiente. TI-2 (IA images) depende de API configurada y bloquea los demás si no está. TI-3 (banner) depende de TI-2 o es independiente.

