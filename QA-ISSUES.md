# QA ISSUES — Ronda 18 (ContactLauncher visual)
Fecha: 2026-08-18
Deploy verificado: https://alas-de-amor-portal.vercel.app (PR #12)
Resultado global: ✅ APROBADO (alcance PR #12; 0 issues funcionales abiertos)

## Casos de prueba

| # | Caso | Tarea/DOF | Criterio de éxito | Resultado |
|---|------|-----------|-------------------|-----------|
| CP1 | Affordance cerrada en `/agendar` | T1 DOF1-2 | SVG de conversación, label `Chat` y nombre accesible | ✅ |
| CP2 | Alineación mobile | T2 DOF1-2 | WhatsApp, Chat y trigger comparten eje derecho a 375px, sin overflow | ✅ |
| CP3 | Alineación desktop | T2 DOF1 | Opciones y trigger comparten eje derecho a 1440px | ✅ |
| CP4 | Entrada y salida | T3 DOF1 | Apertura/cierre con fade, scale y desplazamiento suave | ✅ |
| CP5 | Cierre por teclado y click fuera | T3 DOF2 | `Escape` y click fuera cierran menú/dialog | ✅ |
| CP6 | Reduced motion | T3 DOF3 | `prefers-reduced-motion: reduce` no ejecuta movimiento perceptible | ✅ |
| CP7 | Regresión de rutas | T4 DOF1-3 | 7 rutas, consola limpia, imágenes cargadas y sin overflow mobile | ✅ |
| CP8 | WhatsApp no se dispara | T4 DOF4 | Enlace presente, sin click ni apertura real | ✅ |

## Checklist DOF de TASKS.md

| Tarea | DOF | Resultado | Evidencia |
|-------|-----|-----------|-----------|
| T1 | Estado cerrado comunica chat/contacto | ✅ | `/agendar` a 375px muestra icono SVG y label `Chat` |
| T1 | Icono decorativo y nombre accesible | ✅ | SVG `aria-hidden="true"`; botón conserva `aria-label` y `aria-expanded` |
| T2 | Alineación desktop y mobile | ✅ | Mobile: opciones right `336`; desktop: opciones y trigger right `1401` |
| T2 | Sin overflow ni salto de layout | ✅ | `scrollWidth: 360` en viewport DOM de 360px mobile; `1425` en desktop de 1425px |
| T3 | Apertura/cierre suave | ✅ | `AnimatePresence` + `motion.div`, `opacity`, `scale`, `y`, duración `0.2s`; sin salto visible |
| T3 | Escape y click fuera | ✅ | Ambos estados terminaron con `dialogs: 0` y `aria-expanded="false"` |
| T3 | Reduced motion | ✅ | `matchMedia(...).matches: true`; transición configurada con duración `0` |
| T4 | 7 rutas sin errores de consola | ✅ | `/`, `/nosotros`, `/servicios`, `/testimonios`, `/blog`, `/agendar`, `/contacto`: 0 errores |
| T4 | 0 imágenes rotas | ✅ | `naturalWidth > 0` en todas las imágenes completas de las 7 rutas |
| T4 | 375px sin overflow | ✅ | `scrollWidth: 360` en las 7 rutas; no hubo respuestas >= 400 |
| T4 | WhatsApp no se dispara | ✅ | Solo se inspeccionó el `href`; no se hizo click |
| T4 | ISS-UI-001/002/003 re-verificados | ✅ | Los tres issues quedan corregidos abajo |

## Re-verificación de issues

| ID | Resultado | Evidencia |
|----|-----------|-----------|
| ISS-UI-001 | ✅ CORREGIDO | Cerrado muestra icono SVG de conversación + label visible `Chat` |
| ISS-UI-002 | ✅ CORREGIDO | 375px: WhatsApp `right: 264.125`, Chat `right: 336`, trigger `right: 336`; 1440px: opciones y trigger `right: 1401` |
| ISS-UI-003 | ✅ CORREGIDO | Framer Motion anima entrada/salida; no hubo salto visual ni errores; reduced motion usa duración `0` |

## Regresión

| Verificación | Resultado | Evidencia |
|--------------|-----------|-----------|
| 7 rutas | ✅ | Todas cargaron con `main` entre 451 y 4368 caracteres |
| Console errors | ✅ | 0 errores de consola y 0 `pageerror` en cada ruta |
| Network | ✅ | 0 respuestas con status >= 400 en las 7 rutas |
| Imágenes rotas | ✅ | 0 imágenes con `naturalWidth === 0` |
| Imágenes duplicadas | ✅ | Ningún `src` duplicado por ruta |
| Mobile 375px | ✅ | `document.documentElement.scrollWidth: 360` en las 7 rutas |
| Chat copy | ✅ | `Chat en construcción, por favor usar WhatsApp` |
| Escape | ✅ | Dialog desmontado y `aria-expanded="false"` |
| Click fuera | ✅ | Menú desmontado y `aria-expanded="false"` |
| Idioma ES/EN | ✅ | Switch en `/testimonios`: `lang es → en → es`; h1 cambió a `What Our Clients Say` |
| Reduced motion | ✅ | Preferencia emulada; `matchMedia` true y duración configurada en `0` |
| WhatsApp | ✅ | Enlace `https://wa.me/573043732955` presente; no se hizo click real |
| Formulario malicioso | ✅ | Input `<script>alert(1)</script>` se mantuvo como valor; 0 nodos script y 0 diálogos |

## Hallazgos fuera del alcance de PR #12

### ISS-LAYOUT-001 — H1 bajo header fijo en `/testimonios`
**Severidad:** Media
**Ruta:** `/testimonios` a 375px
**Descripción:** El borde superior del `h1` está en `y:104`, mientras el header fijo termina en `y:107`; existe una invasión de 3px.
**Evidencia:** `header.bottom: 107`, `h1.top: 104`; snapshot mobile `qa-ronda-16-testimonios-mobile.png`.
**Contador de persistencia:** 1 (primera vez)
**Estado:** 🔴 ABIERTO — fuera del alcance de PR #12

### ISS-SEC-001 — Headers de protección ausentes
**Severidad:** Alta
**Ruta:** Deploy raíz y `/contacto`
**Descripción:** La respuesta HTML no expone `Content-Security-Policy` ni `X-Content-Type-Options: nosniff`.
**Evidencia:** Headers de respuesta HTTP 200 de `/contacto`: no contienen ninguno de los dos headers requeridos por el checklist QA.
**Contador de persistencia:** 1 (primera vez)
**Estado:** 🔴 ABIERTO — fuera del alcance de PR #12

## Issues persistentes conocidos

- `ISS-001` hydration histórico en `/blog`: no fue capturado en esta ronda.
