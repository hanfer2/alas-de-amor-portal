# UI-IMPROVEMENTS — ContactLauncher
Generado por: agente disenador (modo auditor)
Basado en: QA-ISSUES.md Ronda 16
Fecha: 2026-08-17

## Diagnóstico visual
El launcher funciona técnicamente, pero la affordance cerrada muestra solo
`✦`, por lo que no comunica chat/contacto. Al abrir, el grupo Liquid queda
desconectado visualmente del botón principal y el estado de cierre aparece
debajo sin un eje claro. El montaje condicional de React produce una entrada
y salida bruscas, sin continuidad espacial.

## Design tokens mapeados
- **Paleta:** `reiki-600`, `reiki-100`, `warm-white`, sombras violeta.
- **Forma:** `rounded-full` en acciones; `rounded-3xl` en dialog.
- **Posición:** `fixed bottom-24 right-6 z-40`.
- **Movimiento existente:** Liquid Gooey; no añadir otro motor físico.
- **Motor recomendado para transición:** Framer Motion ya instalado y con
  `prefers-reduced-motion` disponible.

## Matriz de cambios

| ID | Archivo:línea | Estado actual | Problema | Cambio propuesto | Prioridad |
|----|---------------|---------------|----------|------------------|-----------|
| ISS-UI-001 | `ContactLauncher.tsx:118-128` | Botón solo muestra `✦` | Affordance ambigua | Icono de chat + etiqueta visible corta (`Chat`/`Contactar`) | Alta |
| ISS-UI-002 | `ContactLauncher.tsx:42,78-131` | Grupo y trigger en flujo separado | Cierre queda desalineado y el grupo parece desprendido | `flex flex-col items-end`; grupo `self-end`; reservar eje y ancho | Alta |
| ISS-UI-003 | `ContactLauncher.tsx:43,78` | Condicionales montan/desmontan paneles | Entrada y salida bruscas | `AnimatePresence` + `motion.div` con opacity/scale/y; reduced-motion instantáneo | Alta |

## Instrucciones para el Dev

### Parche 1 — Affordance de chat
**Archivo:** `src/components/ContactLauncher.tsx`
**Cambio:** Sustituir `✦` por icono SVG de burbuja de conversación con
`aria-hidden="true"` y un label visual corto. Mantener el `aria-label` y
`aria-expanded`. El botón debe comunicar contacto/chat incluso cerrado.
**Verificación:** screenshot del estado cerrado muestra una burbuja/chat,
no una estrella abstracta.

### Parche 2 — Alinear grupo y trigger
**Archivo:** `src/components/ContactLauncher.tsx:42,78-131`
**Cambio:** root: `flex flex-col items-end`; grupo de opciones: `self-end` y
un ancho estable; el trigger permanece alineado al borde derecho del grupo.
No usar posiciones negativas ni `translate` que rompan mobile.
**Verificación:** en 375px y desktop, WhatsApp, Chat y cierre comparten eje
derecho; no quedan elementos flotando debajo o desplazados a la izquierda.

### Parche 3 — Transición coordinada
**Archivo:** `src/components/ContactLauncher.tsx`
**Cambio:** importar `AnimatePresence` y `motion` desde `framer-motion`.
Envolver menú y dialog con `AnimatePresence`, usando entrada:
`initial={{ opacity: 0, y: 8, scale: 0.96 }}` y salida equivalente. Usar
`transition={{ duration: 0.2, ease: "easeOut" }}`. Con reduced motion,
usar duración 0 o render estático.
**Verificación:** abrir/cerrar no genera salto brusco; Escape y click fuera
siguen cerrando correctamente.

## Fuera de alcance
- No cambiar enlaces reales de WhatsApp.
- No cambiar copy del mensaje de chat.
- No aplicar Liquid a otras partes del portal.
