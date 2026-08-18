# QA ISSUES — Ronda 16 (ContactLauncher visual)
Fecha: 2026-08-17
Deploy verificado: https://alas-de-amor-portal.vercel.app
Resultado global: ❌ RECHAZADO (3 issues visuales)

## Casos de prueba

| Caso | Resultado | Evidencia |
|------|-----------|-----------|
| Affordance del botón cerrado | ❌ ISS-UI-001 | Solo muestra `✦`; no comunica contacto/chat |
| Menú abierto alineado | ❌ ISS-UI-002 | Acciones y botón de cierre quedan desalineados verticalmente |
| Transición de estados | ❌ ISS-UI-003 | Montaje condicional produce aparición/desaparición brusca |
| WhatsApp conserva enlace | ✅ | `wa.me` presente |
| Chat muestra respuesta | ✅ | Copy correcto visible |
| Mobile sin overflow | ✅ | No se observó overflow en 375px |

## Issues abiertos

### ISS-UI-001 — El botón cerrado no comunica que es chat/contacto
**Severidad:** Media
**Ruta:** Todas las páginas → ContactLauncher cerrado
**Descripción:** El botón muestra únicamente un símbolo de estrella (`✦`). No
existe una affordance visual clara de conversación, contacto o WhatsApp. El
usuario debe adivinar qué acción abre.
**Evidencia:** screenshot proporcionado por PO.
**Estado:** 🔴 ABIERTO

### ISS-UI-002 — Acciones Liquid desalineadas al abrir
**Severidad:** Alta
**Ruta:** Todas las páginas → ContactLauncher abierto
**Descripción:** WhatsApp y Chat aparecen en una línea mientras el botón de
cierre queda separado debajo. El grupo no tiene un eje visual único y la
superficie Liquid no comunica una expansión ordenada.
**Evidencia:** screenshot proporcionado por PO: botón `×` debajo del grupo.
**Estado:** 🔴 ABIERTO

### ISS-UI-003 — Transición de apertura/cierre brusca
**Severidad:** Media
**Ruta:** Todas las páginas → ContactLauncher
**Descripción:** El menú abierto y el diálogo de Chat se montan/desmontan con
render condicional inmediato. La entrada no tiene una transición coordinada y
el cambio de posición se percibe abrupto.
**Evidencia:** screenshots de estado cerrado, abierto y chat.
**Estado:** 🔴 ABIERTO

## Issues cerrados previamente

- `ISS-001` hydration de `/blog`: cerrado en Ronda 14.

## Restricción de QA

No se hizo click en WhatsApp para evitar disparar una acción externa real.
