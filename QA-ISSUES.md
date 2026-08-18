# QA ISSUES — Ronda 19 (re-verificación post-PR #13)
Fecha: 2026-08-18
Deploy verificado: https://alas-de-amor-portal.vercel.app (PR #13 mergeado en staging)
Resultado global: ✅ APROBADO

## Casos de prueba

| # | Caso | Tarea/Issue | Criterio de éxito | Resultado |
|---|------|-------------|-------------------|-----------|
| CP1 | Header y hero en `/testimonios` | ISS-LAYOUT-001 | `h1.top >= header.bottom` a 375px | ✅ |
| CP2 | Headers HTTP en `/contacto` | ISS-SEC-001 | CSP y `X-Content-Type-Options: nosniff` presentes | ✅ |
| CP3 | Regresión de 7 rutas | T4 | 0 errores, imágenes cargadas y sin overflow | ✅ |
| CP4 | Launcher en `/agendar` | ISS-UI-001/002/003 | Affordance, alineación y transiciones conservadas | ✅ |
| CP5 | Interacción segura | T4 | Escape, click fuera, reduced-motion; sin WhatsApp real | ✅ |

## Re-verificación de issues

| ID | Resultado | Evidencia |
|----|-----------|-----------|
| ISS-UI-001 | ✅ CORREGIDO | Botón cerrado muestra icono de conversación + label `Chat` |
| ISS-UI-002 | ✅ CORREGIDO | WhatsApp right `264.125`, Chat right `336`, trigger right `336` en 375px |
| ISS-UI-003 | ✅ CORREGIDO | Entrada/salida, Escape, click fuera y reduced-motion funcionan |
| ISS-LAYOUT-001 | ✅ CORREGIDO | `/testimonios`: `header.bottom:107`, `h1.top:144`, `overlap:false` |
| ISS-SEC-001 | ✅ CORREGIDO | `/contacto` HTTP 200 incluye CSP y `X-Content-Type-Options: nosniff` |

## Regresión

| Verificación | Resultado | Evidencia |
|--------------|-----------|-----------|
| 7 rutas | ✅ | `/`, `/nosotros`, `/servicios`, `/testimonios`, `/blog`, `/agendar`, `/contacto` |
| Console errors/warnings | ✅ | 0 errores y 0 warnings capturados en deploy |
| Network | ✅ | 0 respuestas con status >= 400 |
| Imágenes rotas | ✅ | 0 imágenes con `naturalWidth === 0` |
| Imágenes duplicadas | ✅ | Ningún `src` duplicado por ruta |
| Mobile 375px | ✅ | `scrollWidth: 360` en las 7 rutas |
| Chat copy | ✅ | `Chat en construcción, por favor usar WhatsApp` |
| Escape | ✅ | Dialog desmontado y `aria-expanded="false"` |
| Click fuera | ✅ | Menú desmontado y `aria-expanded="false"` |
| Reduced motion | ✅ | `matchMedia(...).matches: true`; sin movimiento perceptible |
| Idioma ES/EN | ✅ | `/testimonios`: `lang es → en → es`; h1 cambió a `What Our Clients Say` |
| WhatsApp | ✅ | Enlace presente; no se hizo click real |
| Formulario malicioso | ✅ | Input `<script>alert(1)</script>` no creó script ni diálogo |
| Seguridad | ✅ | CSP, `nosniff`, `X-Frame-Options`, Referrer-Policy y Permissions-Policy presentes |

## Issues abiertos

Ninguno.

## Issues persistentes conocidos

- `ISS-001` hydration histórico en `/blog`: no fue capturado en esta ronda.

## Ronda 20 — corrección puntual

| ID | Resultado | Evidencia |
|----|-----------|-----------|
| ISS-UI-004 | ✅ CORREGIDO — pendiente de re-verificación QA | Roles reutilizables `.role-h1` y `.role-subtitle` diferenciados en `globals.css`; validación completa pendiente |
