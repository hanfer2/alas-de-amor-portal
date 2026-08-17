# Informe — Liquid Gooey implementado
Fecha: 2026-08-17
Estado: Prototipo fase 1 aprobado por QA

## Dónde está aplicado

### 1. Menú móvil del Header
**Archivo:** `src/components/Header.tsx`

`Liquid` envuelve el grupo de acciones visible en mobile:

- Selector de idioma CO/US.
- Botón hamburguesa que cambia entre `Open menu` y `Close menu`.
- `Liquid.Item` independiente para el grupo de idiomas.
- `Liquid.Item` independiente para el botón del menú.

**Cuándo se ve:** solo en viewport mobile (`lg:hidden`). El Header desktop no
usa Liquid todavía.

**Comportamiento preservado:** `aria-label`, `aria-expanded`, foco, click,

### 2. Botón WhatsApp de agendamiento
**Archivo:** `src/components/AppointmentForm.tsx`

`Liquid` envuelve el botón WhatsApp ubicado al final de la tarjeta del
formulario de `/agendar`.

**Cuándo se ve:** al entrar en `/agendar`, debajo del formulario, en el bloque
"O agenda directamente por WhatsApp". El efecto es sutil porque el botón usa
una sola pieza Liquid; no se creó todavía un grupo Morph con varios botones.

**Comportamiento preservado:** `href` `wa.me`, `target="_blank"` y
`rel="noopener noreferrer"`. QA no hizo click para no disparar una acción real.

## Dónde NO está aplicado

- Header desktop.
- Tarjetas de `/servicios`.
- Imágenes o galerías.
- `BackToTop`.
- Formularios de `/contacto`.
- Efecto `dissolve`.

## Dependencia

- Paquete: `liquid-gooey@0.1.0`
- Licencia: MIT
- Peer dependencies: React `>=18`, React DOM `>=18`
- Tamaño desempaquetado reportado por npm: aproximadamente 511 KB.

## Validación de fase 1

- 7 rutas cargaron sin errores capturados por QA.
- Menú móvil abre y cierra.
- WhatsApp conserva su enlace real.
- Mobile 375px: `scrollWidth` 360, sin overflow.
- `prefers-reduced-motion` detectado.
- No se probará Safari en fase 2 por decisión del usuario.

## Lectura para fase 2

Para que el efecto sea visible y aporte valor, la siguiente fase debe aplicar
un grupo Morph real a una superficie con varias piezas relacionadas, no solo
envolver botones individuales. La recomendación es comenzar con un piloto
acotado en `/servicios`, no con las 21 tarjetas globalmente.
