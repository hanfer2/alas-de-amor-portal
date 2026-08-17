# SPEC — Botón transversal Liquid: WhatsApp + Chat
Generado por: agente po
Fecha: 2026-08-17
Estado: ✅ Aprobado

## Objetivo de negocio
Agregar una vía de contacto transversal visible en todas las pantallas del
portal. Un botón flotante Liquid permitirá elegir entre WhatsApp, que seguirá
siendo el canal funcional actual, y Chat, que tendrá una experiencia visual
lista pero informará que todavía está en construcción.

## Usuario objetivo
Visitante del portal que necesita resolver rápidamente cómo contactar a Alas
de Amor desde cualquier página y dispositivo.

## Alcance
### Incluye
- Botón flotante transversal disponible en las 7 rutas.
- Estado cerrado: botón Liquid con etiqueta accesible de contacto/chat.
- Estado abierto: menú Liquid con dos opciones:
  - **WhatsApp**: conserva el enlace real `wa.me` y abre una nueva pestaña.
  - **Chat**: abre una superficie visual de chat y responde exactamente:
    `Chat en construcción, por favor usar WhatsApp`.
- Cierre por botón, click fuera y tecla Escape.
- Soporte mobile 375px y desktop.
- Respeto de `prefers-reduced-motion` y focus visible.
- Integración con los tokens existentes `reiki-*`, `warm-white` y glassmorphism.

### NO incluye (fuera de alcance)
- Backend, WebSocket, bot o proveedor externo de chat.
- Persistencia de conversaciones.
- Envío de mensajes desde el chat ficticio.
- Cambios en el flujo existente de formularios o WhatsApp.
- Aplicación de `liquid-gooey` a todas las tarjetas del portal.

## Historia(s) de usuario
- Como visitante, quiero encontrar contacto desde cualquier pantalla para
  elegir WhatsApp o conocer el estado del futuro chat.

## Criterios de aceptación
- [ ] CA1: El botón aparece en `/`, `/nosotros`, `/servicios`, `/agendar`,
  `/contacto`, `/testimonios` y `/blog`.
- [ ] CA2: El botón cerrado tiene `aria-label`, focus visible y no cubre el
  contenido principal ni `BackToTop`.
- [ ] CA3: Al abrirlo aparecen exactamente las opciones WhatsApp y Chat.
- [ ] CA4: WhatsApp mantiene `href`, `target="_blank"` y no se rompe el
  enlace actual.
- [ ] CA5: Chat no realiza llamadas externas y muestra exactamente:
  `Chat en construcción, por favor usar WhatsApp`.
- [ ] CA6: El panel puede cerrarse con Escape, click fuera y botón de cierre.
- [ ] CA7: En 375px no hay overflow ni colisión con el menú móvil o contenido.
- [ ] CA8: Con `prefers-reduced-motion`, las transiciones Liquid se reducen o
  desactivan sin perder funcionalidad.
- [ ] CA9: QA verifica 0 errores de consola, 0 imágenes rotas y regresión en
  las 7 rutas.
- [ ] CA10: `npm run build` y `npm run lint` pasan.

## Contenido / copy

### ES
- Botón cerrado: `Abrir opciones de contacto`
- Opción WhatsApp: `WhatsApp`
- Opción Chat: `Chat`
- Respuesta: `Chat en construcción, por favor usar WhatsApp`

### EN
- Botón cerrado: `Open contact options`
- Opción WhatsApp: `WhatsApp`
- Opción Chat: `Chat`
- Respuesta: `Chat under construction, please use WhatsApp`

## Imágenes necesarias
Ninguna. El componente usa iconos SVG accesibles y la superficie Liquid.

## Notas y restricciones
- El componente debe ser reutilizable y montarse una sola vez en el shell
  global (`Providers` o equivalente), no duplicarse en cada página.
- El z-index debe coexistir con Header y BackToTop.
- El contenido interactivo debe permanecer como DOM real; Liquid no debe
  filtrar texto, iconos ni focus rings.
- No probar envíos reales durante QA; el click de WhatsApp debe verificarse
  inspeccionando el enlace sin abrirlo.

## Preguntas abiertas
Ninguna para esta primera versión.
