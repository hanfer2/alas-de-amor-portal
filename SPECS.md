# SPEC — Asignar imágenes reales a la página de servicios (/servicios)
Generado por: agente po
Fecha: 2026-08-07
Estado: ✅ Aprobado

## Objetivo de negocio
La página /servicios tiene 21 ServiceBlock con placeholders visuales (círculos SVG + gradientes). El visitante no ve imágenes reales de las terapias, talleres, sanaciones ni lecturas. Esto reduce la confianza y el engagement. Debemos reemplazar los placeholders con imágenes reales existentes (fotos de Liliana) y —donde no haya foto— generar imágenes IA que mantengan la identidad etérea del portal.

## Usuario objetivo
Visitante del portal que está evaluando agendar una terapia. Ver una imagen real de la sesión o del espacio de trabajo aumenta la probabilidad de conversión.

## Alcance
### Incluye
- Asignar una imagen a cada uno de los 21 ítems del catálogo en /servicios
- Reutilizar fotos reales de Liliana de las carpetas `imgs/services/therapies/`, `imgs/store/oraculo/`, `public/imgs/gallery/`
- Convertir archivos HEIC a JPEG cuando sea necesario (retiros)
- Generar imágenes IA para los servicios que no tengan foto real (sanaciones, charlas, talleres sin foto)
- Actualizar el componente ServiceBlock para que use `<Image>` de next/image en lugar del placeholder SVG
- Documentar todo en IMAGES.md

### NO incluye (fuera de alcance)
- No se cambia la estructura de la página, solo se agregan imágenes
- No se tocan otras páginas (/, /nosotros, /contacto, etc.)
- No se generan imágenes para categorías que ya tienen foto real suficiente
- No se modifican precios ni textos i18n

## Historia(s) de usuario
- Como visitante, quiero ver una imagen de cada terapia para entender mejor en qué consiste antes de agendar.

## Criterios de aceptación (lenguaje de negocio, verificables)
- [ ] CA1: Cada uno de los 21 servicios en /servicios muestra una imagen (no el placeholder de círculos)
- [ ] CA2: Las imágenes de terapias con foto real usan las fotos de sesiones de Liliana
- [ ] CA3: Las imágenes de Lectura Angelical usan las fotos reales de cartas oráculo
- [ ] CA4: Los servicios sin foto real (sanaciones, charlas, algunos talleres) muestran imágenes IA generadas con el estilo etéreo del portal
- [ ] CA5: Las imágenes no se rompen (naturalWidth > 0 en todas)
- [ ] CA6: Las imágenes están optimizadas (WebP, < 200 KB thumbnails)
- [ ] CA7: IMAGES.md está actualizado con cada imagen y su ubicación exacta

## Imágenes necesarias

### Fotos reales disponibles (reutilizar — NO generar)

| # | Origen | Destino sugerido | Servicio asignado | Descripción |
|---|--------|-----------------|-------------------|-------------|
| R1 | `imgs/services/therapies/WhatsApp Image 2026-05-01 at 9.08.13 AM.jpeg` | `public/imgs/services/terapias-reiki.webp` | Reiki (Terapias) | Sesión de terapia energética con manos |
| R2 | `imgs/services/therapies/WhatsApp Image 2026-05-01 at 9.08.13 AM (1).jpeg` | `public/imgs/services/terapias-access.webp` | Barras Access (Terapias) | Sesión de Barras de Access |
| R3 | `imgs/services/therapies/WhatsApp Image 2026-05-01 at 9.08.14 AM.jpeg` | `public/imgs/services/terapias-chakras.webp` | Alineación de Chakras (Terapias) | Trabajo energético |
| R4 | `imgs/store/oraculo/IMG_3562.JPG.jpeg` | `public/imgs/services/lectura-oraculo.webp` | Lectura Oráculo Angelical | Cartas de oráculo extendidas |
| R5 | `imgs/store/oraculo/WhatsApp Image 2026-05-01 at 5.40.36 PM.jpeg` | `public/imgs/services/lectura-angelical.webp` | Lectura Angelical | Lectura de cartas angélicas |
| R6 | `imgs/store/oraculo/WhatsApp Image 2026-05-01 at 5.40.35 PM.jpeg` | `public/imgs/services/lectura-basica.webp` | Lectura angelical básica | Cartas y cristales |
| R7 | `public/imgs/gallery/gallery-1.jpg` | `public/imgs/services/terapias-meditacion.webp` | Meditación Guiada (Terapias) | Espacio de terapia (ya desplegado) |
| R8 | `public/imgs/gallery/gallery-5.jpg` | `public/imgs/services/talleres-reiki.webp` | Reiki Usui (Talleres) | Foto de espacio de taller (no usada aún) |
| R9 | `public/imgs/gallery/gallery-6.jpg` | `public/imgs/services/talleres-access.webp` | Taller Barras Access (Talleres) | Foto de espacio de taller |
| R10 | `public/imgs/gallery/gallery-7.jpg` | `public/imgs/services/retiros-1.webp` | Retiro 1 (Retiros) | Espacio natural/retiro |
| R11 | `public/imgs/gallery/gallery-8.jpg` | `public/imgs/services/retiros-2.webp` | Retiro 2 (Retiros) | Espacio natural/retiro |

### Imágenes a generar (IA — no hay foto real disponible)

| # | Archivo destino | Dim | Servicio | Descripción visual |
|---|----------------|-----|----------|-------------------|
| G1 | `public/imgs/gen-servicios-combo.webp` | 800×600 | Combo Barras + Reiki (Terapias) | Fusión de energía Reiki y Barras Access, luz violeta y dorada entrelazándose |
| G2 | `public/imgs/gen-servicios-facelight.webp` | 800×600 | Facelight Energético (Terapias) | Rostro femenino etéreo con luz violeta suave envolviéndolo, sin facciones definidas |
| G3 | `public/imgs/gen-servicios-coaching.webp` | 800×600 | Coaching Espiritual (Terapias) | Silueta meditando frente a luz dorada, espacio de sanación etéreo |
| G4 | `public/imgs/gen-servicios-oraculos-terapia.webp` | 800×600 | Oráculos (Terapias) | Cartas de oráculo flotando con brillo violeta, fondo etéreo |
| G5 | `public/imgs/gen-talleres-medium.webp` | 800×600 | Medium (Talleres) | Luz espiritual ascendente, velo etéreo entre planos |
| G6 | `public/imgs/gen-sanaciones-nina.webp` | 800×600 | Sanación niño interior (Sanaciones) | Luz cálida abrazando una silueta pequeña, tonos rosados y violetas |
| G7 | `public/imgs/gen-sanaciones-mama.webp` | 800×600 | Sanación mamá (Sanaciones) | Dos siluetas femeninas conectadas por hilo de luz dorada |
| G8 | `public/imgs/gen-sanaciones-papa.webp` | 800×600 | Sanación papá (Sanaciones) | Silueta masculina con energía protectora violeta |
| G9 | `public/imgs/gen-charlas-1.webp` | 800×600 | Charla 1 (Charlas) | Escenario con luz cálida, sillas en círculo, atmósfera de comunidad |
| G10 | `public/imgs/gen-charlas-2.webp` | 800×600 | Charla 2 (Charlas) | Grupo de siluetas en conversación, luz etérea |

## Notas y restricciones
- Formato preferido: WebP (menor peso)
- Peso objetivo: < 200 KB por imagen
- Paleta: violeta/índigo, dorado, crema — SIN verde, SIN amarillo
- Sin caras de personas reales en las imágenes IA
- Las imágenes IA deben integrarse visualmente con las fotos reales (mismo tono cálido, misma saturación)
- Los HEIC de retiros necesitan conversión previa
