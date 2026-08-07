# QA ISSUES — Ronda 5 (Barrido Completo)
Fecha: 2026-08-07
Deploy verificado: https://alas-de-amor-portal.vercel.app (commit 878cb8d)
Resultado global: ❌ RECHAZADO (5 issues abiertos)

## Casos de prueba

| # | Caso | Tarea/DOF | Criterio de éxito | Prioridad | Resultado |
|---|------|-----------|-------------------|-----------|-----------|
| CP1 | Home carga sin errores consola | Regresión | 0 console errors | Alta | ❌ ISS-001 |
| CP2 | /nosotros carga sin errores | Regresión | 0 console errors | Alta | ❌ ISS-001 |
| CP3 | /servicios: 21 imágenes visibles | T2 DOF1 | 21 img naturalWidth > 0 | Alta | ✅ |
| CP4 | /servicios: 0 imágenes duplicadas | T2 DOF4 | Ningún src repetido | Media | ✅ |
| CP5 | /servicios: imágenes coherentes con el servicio | T2 DOF5 | Imagen evoca el servicio descrito | Media | ❌ ISS-IMG-CTX-001 |
| CP6 | /servicios: peso imágenes < 500 KB | TI-2 DOF3 | Todas < 500 KB | Baja | ❌ ISS-IMG-003 |
| CP7 | /agendar: dropdown funcional con 21 ítems | T4 DOF1 | Select con 21 opciones | Alta | ✅ |
| CP8 | /contacto: form visible | Regresión | Form renderiza correctamente | Alta | ✅ |
| CP9 | /testimonios: contenido visible | Regresión | main > 100 chars | Alta | ✅ |
| CP10 | /blog: contenido visible | Regresión | main > 100 chars | Alta | ✅ |
| CP11 | Responsive 375px en todas las páginas | Regresión | scrollWidth ≤ 375 | Alta | ✅ |
| CP12 | Switch ES/EN funcional | T3 DOF2 | lang cambia, textos traducen | Alta | ✅ |
| CP13 | Imagen de persona con rostro visible | T2 DOF3 | Rostro centrado, no cortado | Media | ✅ N/A (no hay personas con rostro) |

## Checklist DOF de TASKS.md (solo tareas completadas previamente)

| Tarea | DOF | Resultado |
|-------|-----|-----------|
| TI-1 | 11 archivos en services/ | ✅ |
| TI-2 | 10 imágenes gen-* | ✅ |
| T1 | CatalogItem con image | ✅ |
| T2 | ServiceBlock con <Image> | ✅ |
| T2 | 21 naturalWidth > 0 | ✅ |
| T2 | Responsive sin overflow | ✅ |
| T3 | 6 páginas cargan | ✅ |
| T3 | Switch ES/EN | ✅ |

## Issues abiertos

### ISS-001 — Hydration error #418 en TODAS las páginas
**Severidad:** Alta
**Ruta:** Todas (/, /nosotros, /servicios, /agendar, /contacto, /testimonios, /blog)
**Descripción:** Minified React error #418 en consola al cargar cualquier página del portal. Es un error de hidratación: el servidor renderiza en ES (default) pero el cliente detecta `localStorage alang=en` y rehidrata en EN, causando mismatch entre el HTML del servidor y el primer render del cliente.
**Evidencia:** 7/7 páginas muestran el mismo error: `Minified React error #418; visit https://react.dev/errors/418?args[]=text&args[]=`
**Contador de persistencia:** 4 (reportado como OBS-001 en Rondas 1-3, ahora escalado a ISS por ser sistémico)
**Estado:** 🔴 ABIERTO
**Fix sugerido:** Leer `localStorage` en el servidor vía cookie (`document.cookie`) o middleware de Next.js. Alternativa: usar `suppressHydrationWarning` en el elemento raíz o implementar un provider que sincronice idioma antes del primer render.

### ISS-IMG-CTX-001 — 18 imágenes fallback no son coherentes con el servicio
**Severidad:** Media
**Ruta:** /servicios → múltiples ServiceBlocks
**Descripción:** 18 de 21 imágenes están marcadas como ⚠️ FALLBACK en IMAGES.md. Las imágenes de galería y PPTX reutilizadas no representan fielmente el servicio. Ejemplos críticos:
- "Oráculos" (Terapias): usa IMG_3559 (foto de cartas oráculo, 1561 KB) — la imagen muestra cartas de oráculo reales, lo cual es coherente pero pesa demasiado
- "Charla 1" y "Charla 2": usan image20.jpeg/image21.jpeg del PPTX original — no muestran un espacio de charla o comunidad
- "Sanación niño interior/mamá/papá": usan gallery-3, gallery-4, image18 — fotos genéricas de espacio que no evocan sanación
- "Combo Barras + Reiki": gallery-9 — no evoca la fusión de energías
- "Facelight Energético": gallery-10 — no evoca rejuvenecimiento facial
- "Coaching Espiritual": gallery-11 — no evoca acompañamiento espiritual
**Evidencia:** IMAGES.md sección /servicios marca 18 imágenes como ⚠️ FALLBACK
**Contador de persistencia:** 1 (primera vez)
**Estado:** 🔴 ABIERTO — requiere DISEÑADOR para generar imágenes IA cuando API esté configurada

### ISS-IMG-003 — lectura-oraculo.jpg excede 500 KB
**Severidad:** Baja
**Ruta:** /servicios → Lectura Oráculo Angelical
**Imagen:** `/imgs/services/lectura-oraculo.jpg` — 1853 KB
**Descripción:** La imagen de Lectura Oráculo Angelical pesa 1853 KB, más de 3x el umbral de 500 KB recomendado. Ralentiza la carga de la página.
**Estado:** 🔴 ABIERTO — optimizar con sharp a WebP

### ISS-CONTENT-001 — /agendar tiene poco contenido (559 chars)
**Severidad:** Baja
**Ruta:** /agendar
**Descripción:** El contenido de `<main>` en /agendar tiene solo 559 caracteres. Las demás páginas tienen >1000 chars. La página parece mínima: solo el formulario y el shortcut de WhatsApp, sin sección informativa sobre el proceso de agendamiento.
**Evidencia:** `document.querySelector('main').textContent.length = 559`
**Estado:** 🔴 ABIERTO

### ISS-DESIGN-001 — /servicios no tiene imagen de héroe ni decoración visual por categoría
**Severidad:** Baja
**Ruta:** /servicios
**Descripción:** El héroe de /servicios usa solo gradientes y orbes flotantes (FloatingOrbs + EnergyWaves). No tiene una imagen de fondo o banner visual que —a diferencia de la home que tiene foto de Liliana. Cada categoría de servicio podría beneficiarse de un banner o ícono distintivo.
**Evidencia:** snapshot del héroe muestra solo `FloatingOrbs` + `EnergyWaves`, sin `<img>`.
**Estado:** 🔴 ABIERTO

## Observaciones (pre-existentes)

- OBS-002: `/videos/alas-de-amor.mp4` no carga (ERR_CACHE_OPERATION_NOT_SUPPORTED) — pre-existente

## Resumen

| Métrica | Resultado |
|---------|-----------|
| Páginas evaluadas | 7 |
| Páginas con error consola | 7 (ISS-001, hydration #418 sistémico) |
| Imágenes totales en /servicios | 21 |
| Imágenes rotas | 0 |
| Imágenes duplicadas | 0 |
| Imágenes > 500 KB | 1 (lectura-oraculo.jpg = 1853 KB) |
| Imágenes coherentes | 3/21 (solo Lectura Angelical) |
| Responsive 375px | ✅ Todas |
| Switch ES/EN | ✅ Funcional |
| Issues abiertos | 5 |
| Issues bloqueantes | 1 (ISS-001 hydration #418) |
