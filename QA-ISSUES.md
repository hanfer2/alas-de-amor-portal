# QA ISSUES — Ronda 21 (aprobación post-PR #15)
Fecha: 2026-08-18
Deploy verificado: https://alas-de-amor-portal.vercel.app (PR #15 mergeado en staging)
Resultado global: ✅ APROBADO

## Casos de prueba

| # | Caso | Tarea/DOF | Criterio de éxito | Resultado |
|---|------|-----------|-------------------|-----------|
| CP1 | Corrección ISS-UI-004 | T12 / CA15 | H1 y descripción tienen colores computados distintos y legibles | ✅ |
| CP2 | Regresión de 7 rutas | T22 | Carga, consola, red, imágenes y overflow correctos | ✅ |
| CP3 | Variante A Sanaciones | T20 | 3 cards, iconos WebP, precios y CTA intactos | ✅ |
| CP4 | Testimonios | T21 | 6 avatares, 30 estrellas y fallback disponible | ✅ |
| CP5 | Shell e interacciones | T22 | Menu, ContactLauncher, Escape, click fuera y reduced-motion | ✅ |
| CP6 | Seguridad y formularios | T22 | Headers presentes y XSS de input no ejecuta | ✅ |

## Re-verificación de issues

| ID | Resultado | Evidencia |
|----|-----------|-----------|
| ISS-UI-001 | ✅ CORREGIDO | Botón cerrado muestra icono + label `Chat` |
| ISS-UI-002 | ✅ CORREGIDO | WhatsApp right `264.125`, Chat/trigger right `336` en 375px |
| ISS-UI-003 | ✅ CORREGIDO | Entrada/salida, Escape, click fuera y reduced-motion funcionan |
| ISS-LAYOUT-001 | ✅ CORREGIDO | `/testimonios`: header bottom `107`, H1 top `144`, overlap false |
| ISS-SEC-001 | ✅ CORREGIDO | `/contacto` expone CSP y `X-Content-Type-Options: nosniff` |
| ISS-UI-004 | ✅ CORREGIDO | `/nosotros`: H1 `rgb(76,29,149)`, subtítulo `rgb(80,75,115)` |

## Checklist T22

| Verificación | Resultado | Evidencia |
|--------------|-----------|-----------|
| 7 rutas ES a 375px | ✅ | `main` visible, `scrollWidth:360`, 0 respuestas >=400 |
| 7 rutas sin errores | ✅ | 0 errores, 0 warnings y 0 `pageerror` capturados |
| Títulos/subtítulos | ✅ | Todas las rutas usan H1 `rgb(76,29,149)` y subtítulo `rgb(80,75,115)` |
| Contraste | ✅ | H1 9.23:1; subtítulo 6.82:1 sobre superficie clara |
| Sanaciones mobile | ✅ | 3 cards en una columna, iconos 128×128 cargados, overflow false |
| Sanaciones desktop | ✅ | 3 cards comparables, CTAs `/agendar`, precios `$ 180.000` intactos |
| Testimonios | ✅ | 6 cards, cada avatar 64×64 cargado tras entrar en viewport |
| Rating | ✅ | 5 estrellas por card, `aria-label="5 / 5"`, 30 en total |
| Assets | ✅ | 3 iconos y 6 avatares WebP cargan sin 404 |
| ES/EN | ✅ | `/nosotros`: `es → en → es`, copy y layout cargan |
| Menu móvil | ✅ | 7 links, apertura/cierre, foco en `Close menu`, sin overflow |
| ContactLauncher | ✅ | Alineación, Chat, dialog, Escape y click fuera conservados |
| Reduced motion | ✅ | `matchMedia: true`; animación/transición computada `0.00001s` |
| Fallbacks 404 | ✅ | 3 iconos muestran SVG fallback y 6 avatares muestran monograma; 0 imágenes rotas |
| Performance básica | ✅ | `/` TTFB `124 ms`, FCP `368 ms`; no se observó CLS perceptible |
| Seguridad | ✅ | CSP, `nosniff`, X-Frame-Options, Referrer y Permissions presentes |
| Formulario malicioso | ✅ | `<script>alert(1)</script>` no creó script ni diálogo |
| WhatsApp/formularios reales | ✅ | No se ejecutaron acciones externas |

## Issues abiertos

Ninguno.

## Issues persistentes conocidos

- `ISS-001` hydration histórico en `/blog`: no fue capturado en esta ronda.

## Issues Visuales Implementados

| ID | Resultado | Evidencia |
|----|-----------|-----------|
| ISS-VIS-OVERLAP-HOME-HERO | ✅ CORREGIDO | Alas ancladas al rail de foto, z-index 0, bajo Header en ES/EN y 375/768/1440 |
| ISS-VIS-CROP-HOME-HERO | ✅ CORREGIDO | Rail completo dentro de viewport; sin overflow horizontal |
| ISS-VIS-LOW-ENERGY-NOSOTROS | ✅ CORREGIDO | Loto coral/aqua/dorado y seis siluetas SVG diferenciadas |
| ISS-VIS-OVERLAP-NOSOTROS-HERO | ✅ CORREGIDO | Caja del loto bajo safe zone en 42 combinaciones |
| ISS-VIS-LOW-ENERGY-SERVICIOS | ✅ CORREGIDO | Ondas asimétricas convergen en semilla/chispa |
| ISS-VIS-BLUR-SERVICIOS-FALLBACK | ✅ CORREGIDO | Fallback contextual, caja 328x320 estable ante `/next/image` abortado |
| ISS-VIS-SPACING-AGENDAR-STEPS | ✅ CORREGIDO | Marcadores 64x64 mobile y 72x72 desktop; conector solo desde 1024px |
| ISS-VIS-LOW-ENERGY-AGENDAR | ✅ CORREGIDO | Fondo crema, borde 3px, anillo 1px, número Georgia sin filter |
| ISS-VIS-LOW-ENERGY-CONTACTO | ✅ CORREGIDO | Paloma con contorno coral, ala aqua y núcleo dorado |
| ISS-VIS-CONTRAST-CONTACTO | ✅ CORREGIDO | Canales con acentos aqua/coral/dorado y halos identificables |
| ISS-VIS-LOW-ENERGY-TESTIMONIOS | ✅ CORREGIDO | Comillas coral, chispa dorada y trazos aqua |
| ISS-VIS-BLUR-TESTIMONIOS-HERO | ✅ CORREGIDO | Decoración estática sin blur sobre copy; fallback de monograma conservado |
| ISS-VIS-LOW-ENERGY-BLOG | ✅ CORREGIDO | Marcador editorial con páginas, lomo, cinta y líneas de lectura |
| ISS-VIS-OUT-OF-PLACE-BLOG | ✅ CORREGIDO | Marcador conectado al rail del título y al contenido editorial |
| ISS-VIS-OVERLAP-BLOG-HERO | ✅ CORREGIDO | Marcador bajo safe zone, encima del copy en mobile y lateral en desktop |
| ISS-VIS-CONTRAST-GLOBAL-ROLES | ✅ CORREGIDO | H1 Georgia 700 y descripción Inter 500 con gap medido de 16px |
| ISS-VIS-SPACING-GLOBAL-HERO | ✅ CORREGIDO | Rails con pointer-events none, z-index 0 y reduced-motion estático |
| ISS-VIS-SAFEZONE-SHELL | ✅ CORREGIDO | Safe zone comprobada en 42 combinaciones, `bad=[]` |

---

# QA ISSUES — Ronda 23 (PR #17: ilustración de 7 chakras en el hero de `/`)
Fecha: 2026-08-19
Deploy verificado: https://alas-de-amor-portal.vercel.app (PR #17 mergeado en `staging`, cache-bust `?qa=chakras` en todas las rutas)
Resultado global: ✅ APROBADO — **ilustración de chakras aprobada por QA**
Herramienta: Chrome headless + CDP (Node v25.9.0) — 19 snapshots + rasterización del SVG + scroll a rail.
Evidencia: `scripts/qa-evidence/` (19 screenshots por viewport, 3 clips del rail enfocado, `results.json` con bounding boxes y computed styles).

## Objeto de la ronda

PR #17 reemplaza el SVG de alas (`AngelFeathers`) por `HeroChakras` (SVG inline original, viewBox `0 0 300 440`, `aria-hidden`) en el rail del hero de `/`. Rail: `rounded-[2rem]`, aspect-ratio `0.68`, max-width 280px desktop / 190px (11.875rem) mobile. Aprobado automáticamente por negocio.

## Verificación del hero de `/` (ES y EN × 375 / 768 / 1440)

| # | Check | Resultado | Evidencia |
|---|-------|-----------|-----------|
| 1 | Ilustración completa: sin crop, sin blur, sin overlap | ✅ | svg dentro del rail (padding 8px, `svgWithinRail=true` en 6/6 casos); rail dentro de `hero-shell`; `filter:none`, `opacity:1`; overlaps con Header/logo/H1/subtítulo/badge/CTAs/foto/Master Reiki = `area:0` en todos |
| 2 | Bounding boxes y computed styles del rail y svg | ✅ | rail `position:relative; z-index:0; pointer-events:none; aspect-ratio:0.68/1; border-radius:32px`; 375→190×279.41 (svg 174×263.41), 768/1440→280×411.75 (svg 264×395.75); rail `overflow:visible`, `transform:none`, `animation:none`; svg `display:block; max-width:100%` |
| 3 | Rail bajo Header (safe zone) | ✅ | header bottom `107`; clearance rail-top − header-bottom: `1153` (375), `1221` (768), `533` (1440) — sin overlap |
| 4 | `aria-hidden="true"` y sin icono genérico/vacío | ✅ | `aria-hidden="true"`, `viewBox="0 0 300 440"`, sin `role`/`focusable`; contenido real: 24 hijos, 18 `<path>`, 39 `<circle>`, 1 `<rect>`, innerHTML 14 706 chars. Raster del SVG: 51.1–51.5% píxeles de color, saturación media 0.296, bins de hue para rojo/naranja/amarillo/verde/azul/índigo/violeta → los 7 chakras se renderizan. Información comunica el copy (H1/subtítulo/badge ES y EN correctos) |
| 5 | Reduced motion | ✅ | `prefers-reduced-motion: reduce` → rail `animation:none`; foto `float-slow` computada `1e-05s`; svg visible y estático (`opacity:1`, `filter:none`) |
| 6 | Sin errores de consola nuevos; LCP/CLS sin regresión | ✅ | 0 errores/warnings en los 19 snapshots; LCP ≤ `1048ms` (cold `/` ES 375; resto 356–704ms) elemento header-logo; CLS `0.0000` (máx `0.0006` en en-1440) — bajo 0.1 |
| 7 | Sin overflow horizontal | ✅ | `docScrollWidth` ≤ viewport en 6/6 casos del hero (360≤375, 753≤768, 1425≤1440) |

## Regresión home (`/`)

| Check | Resultado | Evidencia |
|-------|-----------|-----------|
| Logo, H1, badge, subtítulo, CTAs, foto, Master Reiki | ✅ | Presentes con copy ES/EN correcto; H1 `Alas de Amor` / `Wings of Love`, color `rgb(76,29,149)`, Georgia 700; badge `Terapia Holística Certificada` / `Certified Holistic Therapy`; CTAs `Agenda tu Cita` / `Book Your Session` + `Ver Servicios` / `View Services`; `Master Reiki` |
| Secciones restantes | ✅ | `main` 1690 chars, 4 H2, 6 sections, video presente, 7 links de servicio, footer presente |
| Header/Footer/menú | ✅ | 7 links nav + 2 botones idioma (375 y 1440); footer presente; sin errores |
| ES/EN | ✅ | `lang=es`/`lang=en`, textos traducidos en los 3 viewports |

## Smoke regresión rutas secundarias (375 y 1440)

| Ruta | Carga | Consola | Overflow | Imágenes rotas | LCP/CLS |
|------|-------|---------|----------|----------------|---------|
| `/nosotros` | ✅ main 1455 chars | 0 | no | 0 de 14 | 412ms / 0 |
| `/servicios` | ✅ main 4201 chars | 0 | no | 0 de 24 | 976ms / 0 |
| `/agendar` | ✅ main 1234 chars | 0 | no | 0 de 3 | 508ms / 0 |
| `/contacto` | ✅ main 510 chars | 0 | no | 0 de 3 | 448ms / 0 |
| `/testimonios` | ✅ main 1276 chars | 0 | no | 0 de 8 | 524ms / 0 |
| `/blog` | ✅ main 1050 chars | 0 | no | 0 de 2 | 676ms / 0 |

H1 correctos en todas las rutas; 0 respuestas de red ≥ 400 en los 19 snapshots.

## Hallazgos

**Ningún issue nuevo (`ISS-VIS-*` = 0).** Observación no bloqueante (pre-existente, no introducida por PR #17):

- El fade inferior del hero (`h-32 bg-gradient-to-t from-warm-white`) cubre los últimos 48px del rail (17.2% de la altura del rail @375; 11.7% @768/1440). Estructura idéntica en el commit padre `b55b60e^` (fade y rail ya convivían con `AngelFeathers`); el overlay máximo es ~50% crema solo en el borde inferior y los 7 chakras permanecen legibles (ver raster). No degrada intención ni encuadre → no califica como `ISS-VIS-BLUR-*`.

## IDs ISS-VIS verificados en esta ronda

| ID | Resultado |
|----|-----------|
| ISS-VIS-OVERLAP-HOME-HERO | ✅ Sin regresión (z-index 0, sin overlap con copy/Header en ES/EN × 375/768/1440) |
| ISS-VIS-CROP-HOME-HERO | ✅ Sin regresión (svg dentro del rail, sin overflow horizontal) |
| ISS-VIS-SPACING-GLOBAL-HERO | ✅ Sin regresión (rail `pointer-events:none`, `z-index:0`, reduced-motion estático) |
| ISS-VIS-SAFEZONE-SHELL | ✅ Sin regresión (clearance mínimo 533px) |

## Veredicto

✅ **QA APROBADO** — la ilustración original de los 7 chakras (`HeroChakras`) queda **aprobada por QA** en `/` para ES y EN en 375/768/1440, con reduced-motion correcto y sin regresiones en las 7 rutas. Sin issues abiertos.
