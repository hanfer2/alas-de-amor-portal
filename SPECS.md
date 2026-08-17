# SPEC — Prototipo Liquid Gooey para interacciones del portal
Generado por: agente po
Fecha: 2026-08-17
Estado: ✅ Aprobado

## Objetivo de negocio
Evaluar si el lenguaje visual líquido de `liquid-gooey` puede elevar las
interacciones del portal sin sacrificar accesibilidad, claridad, rendimiento
ni el flujo real de WhatsApp. La primera entrega será un prototipo acotado,
no una aplicación global de la librería en todos los componentes.

## Usuario objetivo
Visitante del portal que usa el menú móvil, los botones principales y el
acceso de WhatsApp/chat desde móvil o escritorio.

## Alcance
### Incluye
- Evaluación técnica de `liquid-gooey` (`Morph`, `Move`, `dissolve`) y sus
  compatibilidades con Next.js 16, React 19, Safari, mobile y reduced motion.
- Prototipo de `Morph` para el menú móvil o un grupo de acciones del Header.
- Tratamiento visual del botón real de WhatsApp/chat, conservando su `href`,
  `window.open`, accesibilidad y comportamiento actual.
- Un único prototipo adicional de botón/grupo de acciones para comparar el
  efecto con el sistema visual actual.
- Uso exclusivo de la paleta y tokens existentes del portal.
- Validación de regresión en las 7 rutas y reporte QA específico de la librería.

### NO incluye (fuera de alcance)
- No aplicar `liquid-gooey` a todas las tarjetas de servicios en esta fase.
- No aplicar `dissolve` a imágenes reales hasta verificar coste de rendimiento,
  comportamiento en Safari y recorte de imágenes.
- No reemplazar Lenis, Framer Motion ni el sistema actual de `FadeInWrapper`.
- No cambiar el flujo real de WhatsApp ni enviar datos de prueba reales.
- No aprobar la librería para producción si el Tech-Lead detecta incompatibilidad
  o si QA encuentra regresiones críticas.

## Historia(s) de usuario
- Como visitante, quiero que el menú y las acciones principales respondan con
  una animación líquida suave para percibir una experiencia cuidada, sin perder
  claridad ni control.

## Criterios de aceptación
- [ ] CA1: El prototipo usa `liquid-gooey` solo en los componentes definidos por
  TASKS.md, sin modificar globalmente todos los botones.
- [ ] CA2: El botón de WhatsApp/chat sigue siendo un elemento DOM real, enfocable,
  con `aria-label`, `href` y acción funcional intactos.
- [ ] CA3: Texto, iconos, imágenes y focus rings permanecen nítidos; el filtro
  líquido se limita a la capa de silueta/decoración.
- [ ] CA4: En mobile, Safari y desktop el menú/acciones no tienen overflow,
  saltos de layout ni bloquean el scroll nativo.
- [ ] CA5: Con `prefers-reduced-motion: reduce`, las transiciones se reducen a
  cambios instantáneos o suaves sin movimiento líquido.
- [ ] CA6: QA verifica 0 errores de consola, 0 imágenes rotas y 0 regresiones
  en las 7 rutas.
- [ ] CA7: El bundle y los Core Web Vitals no presentan una regresión que
  justifique rechazar el prototipo.
- [ ] CA8: El Tech-Lead deja una decisión explícita: aprobar prototipo,
  iterar con cambios, o descartar la librería.

## Contenido / copy
No se agregan textos de negocio nuevos. Cualquier `aria-label` nuevo debe usar
las traducciones existentes o añadir claves ES/EN en la misma tarea.

## Imágenes necesarias
Ninguna para el prototipo inicial. No se usa `dissolve` sobre imágenes hasta
una fase posterior con criterios específicos.

## Notas y restricciones
- Referencia revisada: `https://gooey.jakubantalik.com/` y README de
  `liquid-gooey`.
- La librería separa silueta filtrada y contenido DOM nítido; respetar ese
  patrón para no degradar texto, imágenes, sombras ni accesibilidad.
- El Tech-Lead debe verificar primero el paquete, licencia, tamaño, API real,
  compatibilidad con React 19 y estrategia de rollback antes de instalarlo.
- El diseño debe continuar usando `reiki-*`, `warm-white`, glassmorphism y
  los radios/sombras existentes.

## Preguntas abiertas
- ¿Qué botón o grupo de acciones del Header se elegirá como segundo prototipo
  además del menú móvil/WhatsApp?
- ¿El paquete está aprobado para uso en producción después de revisar licencia,
  bundle y soporte Safari?
- ¿Se desea mantener el botón BackToTop con su implementación actual durante
  esta fase?
