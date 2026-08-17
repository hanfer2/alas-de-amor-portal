# SPEC — Liquid Gooey fase 2: piloto visual en servicios
Generado por: agente po
Fecha: 2026-08-17
Estado: ✅ Aprobado

## Objetivo de negocio
Continuar el prototipo `liquid-gooey` en una superficie donde el efecto sea
visible y aporte una identidad diferenciada: un piloto controlado sobre los
servicios. La fase debe validar si el lenguaje Morph mejora la percepción de
las acciones sin volver confusa la navegación ni degradar rendimiento.

## Usuario objetivo
Visitante que explora `/servicios` y necesita identificar rápidamente el
servicio, su imagen, precio y acción de agendamiento.

## Alcance
### Incluye
- Piloto en una sola categoría de `/servicios` (recomendación: Terapias).
- Aplicar `Morph` a un grupo visual pequeño y relacionado por ServiceBlock,
  por ejemplo imagen, badge de precio y acción asociada.
- Mantener texto, imágenes, `alt`, enlaces y botones como DOM real y nítido.
- Mantener el sistema de colores `reiki-*`, radios, sombras y responsive actual.
- Mantener soporte mobile y `prefers-reduced-motion`.
- QA visual y técnico para decidir si se extiende a las demás categorías.

### NO incluye (fuera de alcance)
- No aplicar el efecto a las 21 tarjetas en esta primera iteración.
- No usar `dissolve` sobre fotografías en esta fase.
- No modificar precios, textos, rutas de agendamiento ni imágenes del inventario.
- No probar Safari en esta fase, según decisión del usuario.
- No aprobar la extensión global automáticamente: requiere decisión posterior.

## Historia(s) de usuario
- Como visitante, quiero que la interacción de una terapia tenga una respuesta
  visual líquida y clara para percibir una experiencia cuidada sin perder la
  información ni la acción de agendar.

## Criterios de aceptación
- [ ] CA1: Solo la categoría piloto usa Liquid Gooey; las demás permanecen sin
  cambios funcionales ni visuales no solicitados.
- [ ] CA2: El texto, imagen, precio, focus ring y CTA permanecen nítidos y
  accesibles.
- [ ] CA3: El CTA conserva navegación a `/agendar` y no dispara acciones reales
  durante QA.
- [ ] CA4: El piloto funciona en desktop y mobile sin overflow ni saltos de
  layout.
- [ ] CA5: `prefers-reduced-motion: reduce` desactiva o simplifica el efecto.
- [ ] CA6: No hay errores de consola ni imágenes rotas en las 7 rutas.
- [ ] CA7: QA documenta si se aprueba la extensión al resto de categorías.

## Imágenes necesarias
Ninguna. Se reutiliza el inventario actual.

## Notas y restricciones
- El Tech-Lead debe definir el grupo exacto de nodos antes de que Dev toque
  `ServiceBlock`; no se permite envolver el componente completo sin evaluar su
  layout alternado.
- El efecto debe limitarse a la silueta Liquid. No aplicar filtros CSS al texto
  ni a las imágenes.
- El botón de WhatsApp y el menú de fase 1 no deben romperse.

## Preguntas abiertas
- ¿Aprobamos el piloto recomendado únicamente para `Terapias` antes de
  extenderlo a Talleres, Sanaciones y Lectura Angelical?
