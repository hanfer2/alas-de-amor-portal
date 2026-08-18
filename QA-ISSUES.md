# QA ISSUES — Ronda 17 (ContactLauncher visual)
Fecha: 2026-08-18
Deploy verificado: https://alas-de-amor-portal.vercel.app (PR #12)
Resultado global: ✅ APROBADO

## Re-verificación de issues

| ID | Resultado | Evidencia |
|----|-----------|-----------|
| ISS-UI-001 | ✅ CORREGIDO | Botón cerrado muestra icono de conversación + label `Chat` |
| ISS-UI-002 | ✅ CORREGIDO | WhatsApp, Chat y trigger comparten eje derecho en 375px |
| ISS-UI-003 | ✅ CORREGIDO | Entrada/salida usa AnimatePresence + motion; no hubo errores |

## Regresión

| Verificación | Resultado |
|--------------|-----------|
| 7 rutas | ✅ |
| Console errors | ✅ 0 capturados |
| Imágenes rotas | ✅ 0 |
| Mobile 375px | ✅ `scrollWidth: 360` |
| Chat copy | ✅ `Chat en construcción, por favor usar WhatsApp` |
| Escape | ✅ Dialog se cierra |
| WhatsApp | ✅ enlace presente; no se hizo click real |
| QA visual | ✅ affordance y alineación corregidas |

## Issues abiertos

Ninguno nuevo.

## Issues persistentes conocidos

- `ISS-001` hydration histórico en `/blog`: no fue capturado en esta ronda.
