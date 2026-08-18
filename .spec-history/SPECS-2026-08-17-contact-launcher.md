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
Para cada imagen que la feature requiere, especificar:

| Página | Sección / Componente | Descripción visual | ¿Existe en IMAGES.md? | Acción |
|--------|---------------------|--------------------|-----------------------|--------|
| /servicios | Categoría Sanaciones → icono Sanación niño interior | Icono/ilustración rico en detalle, espiritual y legible en tarjeta; alas, figura interior o símbolo de cuidado; violeta, dorado, rojo coral y azul claro de marca | ❌ No | El `disenador` debe proponer y generar `gen-sanaciones-icon-nina.webp` o formato vectorial equivalente |
| /servicios | Categoría Sanaciones → icono Sanación mamá | Icono/ilustración diferenciado para vínculo materno, cálido y no literal; mismo sistema visual de la categoría | ❌ No | El `disenador` debe proponer y generar `gen-sanaciones-icon-mama.webp` o formato vectorial equivalente |
| /servicios | Categoría Sanaciones → icono Sanación papá | Icono/ilustración diferenciado para vínculo paterno, equilibrado y no literal; mismo sistema visual de la categoría | ❌ No | El `disenador` debe proponer y generar `gen-sanaciones-icon-papa.webp` o formato vectorial equivalente |
| /testimonios | Card de María G. → avatar | Rostro generado, anónimo, cálido y natural; no debe representar a una persona real identificable | ❌ No | El `disenador` debe generar `gen-testimonio-avatar-01.webp` |
| /testimonios | Card de Carlos R. → avatar | Rostro generado, anónimo y visualmente distinto del resto; diversidad de edad y expresión | ❌ No | El `disenador` debe generar `gen-testimonio-avatar-02.webp` |
| /testimonios | Card de Ana P. → avatar | Rostro generado, anónimo y coherente con el tono de lectura angelical | ❌ No | El `disenador` debe generar `gen-testimonio-avatar-03.webp` |
| /testimonios | Card de Laura M. → avatar | Rostro generado, anónimo y coherente con bienestar y equilibrio | ❌ No | El `disenador` debe generar `gen-testimonio-avatar-04.webp` |
| /testimonios | Card de Daniel S. → avatar | Rostro generado, anónimo y coherente con calma y meditación | ❌ No | El `disenador` debe generar `gen-testimonio-avatar-05.webp` |
| /testimonios | Card de Isabella R. → avatar | Rostro generado, anónimo y coherente con crecimiento espiritual | ❌ No | El `disenador` debe generar `gen-testimonio-avatar-06.webp` |

### Referencias visuales de negocio

El `disenador` debe estudiar estas referencias antes de elaborar la propuesta:

- `imgs/store/oraculo/WhatsApp Image 2026-05-01 at 5.38.35 PM (1).jpeg`:
  composición de producto, lavanda, azul claro, rosa, rojo coral y dorado.
- `public/imgs/image22.jpeg`: alas blancas sobre fondo pastel lavanda/azul/rosa;
  referencia para atmósfera y simbolismo.
- `public/imgs/image19.jpeg`: cartas de oráculo y tipografía editorial/script;
  referencia para títulos de alto impacto y jerarquía.

Estas referencias son dirección de arte. No se deben copiar textos, rostros,
logos ni composiciones protegidas en los nuevos assets.

## Notas y restricciones

- El problema prioritario está en `/servicios`, categoría **Sanaciones**:
  actualmente el color del icono, título y contenido no crea jerarquía, y el
  fallback es un SVG concéntrico monocromático de baja expresividad.
- La propuesta debe revisar la jerarquía visual de las cards y secciones,
  comenzando por Sanaciones y señalando qué cambios son reutilizables en las
  demás categorías de servicios.
- Mantener la base de marca actual: violeta/índigo, crema, cálido-blanco,
  rosa-oro y ciruela profundo. Se permite sumar dorado, rojo coral y azul
  claro inspirados en las referencias, evitando neón, amarillo puro y verde
  saturado.
- Título, descripción, icono y metadata de cada card deben tener roles de
  color distintos y contraste suficiente. El texto principal debe seguir
  siendo legible sobre fondos claros y translúcidos.
- Los títulos grandes deben tomar la intención editorial del oráculo, pero
  conservar legibilidad, soporte ES/EN y la familia tipográfica aprobada por
  el sistema. No se implementa una fuente nueva sin propuesta y licencia.
- Las estrellas de rating en `/testimonios` deben ser doradas, visibles y
  acompañarse de una alternativa accesible para lector de pantalla.
- Los rostros generados son avatares ilustrativos/anónimos; no deben afirmar
  que son fotografías de clientes reales ni usar likeness de personas reales.
- Cada asset nuevo debe quedar documentado en `IMAGES.md`, con formato
  preferente WebP, peso objetivo menor a 200 KB para avatares/iconos y
  dimensiones aproximadas de 400×400 o 512×512.
- Antes de que el Tech-Lead escriba `TASKS.md`, el `disenador` debe producir
  `UI-IMPROVEMENTS.md` con propuesta de paleta, contraste, anatomía de card,
  tipografía, iconos, avatares y estrellas. No se implementa código antes de
  revisar esa propuesta.
- No cambiar copy funcional, precios, enlaces de agenda ni comportamiento de
  formularios como parte de esta iniciativa.

## Preguntas abiertas

- ¿El negocio aprueba una tipografía display adicional si el `disenador`
  demuestra que la actual no reproduce bien la intención del oráculo y se
  confirma su licencia?
- ¿Se aprueba el uso de avatares generados como representación visual de los
  testimonios, dejando explícito que no son fotos de clientes reales?
- ¿La propuesta debe extender el nuevo sistema a todas las categorías de
  `/servicios` desde la primera iteración, o solo a Sanaciones con tokens
  reutilizables para una segunda fase?

## Entregable previo a implementación

El siguiente paso obligatorio es invocar al agente `disenador` para producir
`UI-IMPROVEMENTS.md` en modo propuesta. Ese documento debe incluir:

1. Paleta propuesta con valores y matriz de contraste para texto, fondos,
   títulos, metadata, iconos y estrellas.
2. Dos o tres variantes de card para Sanaciones y una recomendación final.
3. Sistema de iconos/ilustraciones de las tres Sanaciones, con preview o
   briefing de generación y reglas de consistencia.
4. Tratamiento de títulos grandes inspirado en las referencias de oráculo,
   incluyendo fallback tipográfico y comportamiento responsive.
5. Tratamiento de los seis avatares y estrellas doradas en testimonios.
6. Lista de assets nuevos y actualización propuesta para `IMAGES.md`.

No se debe invocar al `tech-lead` ni al `dev` hasta que el usuario apruebe la
propuesta visual del `disenador`.
