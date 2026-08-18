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
