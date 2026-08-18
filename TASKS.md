# TASKS — Armonía visual integral del portal

Generado por: agente tech-lead
Basado en: `SPECS.md` (2026-08-18) + `UI-IMPROVEMENTS.md` (2026-08-18)
Fecha: 2026-08-18
Estado: plan técnico listo para ejecución secuencial

## Resumen técnico

La implementación aplicará el sistema visual aprobado sobre las siete rutas (`/`,
`/nosotros`, `/servicios`, `/agendar`, `/contacto`, `/testimonios` y `/blog`) usando
roles reutilizables en `globals.css`, la familia existente de decoraciones en
`HeroDecoration.tsx` y clases explícitas para títulos, subtítulos, metadata, iconos,
estrellas y CTA. Variante A se aplicará únicamente a las tres cards de Sanaciones;
las demás categorías conservarán sus filas y su contenido.

Los nueve assets nuevos se generan y documentan antes de tocar el código que los
consume. Las seis tarjetas de `/testimonios` usarán avatares ilustrativos anónimos,
cinco estrellas doradas derivadas del valor existente `rating: 5` y un fallback de
avatar que conserve la información. No se crean claves i18n, copy, precios ni flujos
nuevos.

## Dependencias y orden de ejecución

1. `SPECS.md` y `UI-IMPROVEMENTS.md` están aprobados; `IMAGES.md` confirma que los
   tres iconos de Sanaciones y los seis avatares aún no existen.
2. Ejecutar `TI1` a `TI9` con el agente `disenador`.
3. Ejecutar `T10` para documentar los nueve archivos con datos reales en `IMAGES.md`.
4. Ejecutar `T11` y `T12`; `T13` puede prepararse después de `T11` y antes de las
   tareas de ruta.
5. Ejecutar `T14` a `T19` para la aplicación visual por contexto. `T20` y `T21`
   dependen además de `T10` porque integran assets nuevos.
6. Ejecutar `T22` como cierre único de regresión sobre el portal completo.

El HTML de `design-proposals/servicios-testimonios/index.html` es solo referencia
visual y debe seguir mostrando `Prototipo no productivo`; no se convierte
automáticamente en HTML ni componentes de producción.

## Guardrails obligatorios

- No modificar copy, nombres, duración, contenido clínico, precios ni formato de
  precios. `src/lib/prices.ts` es una dependencia de lectura y verificación, salvo
  la excepción explícita de T20: puede modificarse únicamente en los tres paths de
  imagen de Sanaciones: `/imgs/services/gen-sanaciones-icon-nina.webp`,
  `/imgs/services/gen-sanaciones-icon-mama.webp` y
  `/imgs/services/gen-sanaciones-icon-papa.webp`. En esa excepción deben mantenerse
  intactos los IDs `nina`/`mama`/`papa`, `titleKey`, `descKey`, los precios `180000`,
  el formato de precios, la tasa, la caché y toda la lógica; ninguna otra línea de
  `src/lib/prices.ts` se toca.
- No modificar el fondo blanco cálido, `warm-white`, `gradient-hero`,
  `gradient-spiritual`, `gradient-card`, los orbes ni el lenguaje etéreo global.
- No modificar estructura, links, estados ni comportamiento de `Header`, `Footer` o
  menú móvil; tampoco modificar `ContactLauncher`, formularios, agenda o WhatsApp.
- Usar Georgia para títulos grandes con fallback
  `Georgia, "Times New Roman", ui-serif, serif`; mantener Inter para cuerpo,
  controles, metadata y copy funcional.
- Usar como máximo un acento primario y uno secundario por agrupación, con dorado,
  coral y aqua controlados. No usar neón, amarillo puro, verde saturado ni un acento
  como único portador de significado.
- Validar el peor punto real de cada degradado usado detrás de texto. Si no cumple,
  usar una placa local opaca (`#fefcfb` o `#f5f3ff`) sin reemplazar el fondo.
- Mantener el contenido y la navegación en ES/EN, sin `nowrap`, sin truncar copy y
  sin crear una feature que no esté en los documentos aprobados.

## Tareas

### TI1 — Generar icono de Sanación niño interior

**Tipo:** Imagen nueva; generar vía agente `disenador`
**Archivo destino:** `public/imgs/services/gen-sanaciones-icon-nina.webp`
**Ruta pública:** `/imgs/services/gen-sanaciones-icon-nina.webp`
**Página / sección:** `/servicios` → categoría Sanaciones → Sanación niño interior
**Descripción técnica:** Crear una ilustración 1:1, legible a 64 px, basada en el
concepto de cuidado y transformación interior. Debe pertenecer al mismo sistema
visual que TI2 y TI3, sin representar una fotografía ni una persona identificable.
**DOR:**

- [ ] `IMAGES.md` fue consultado y no contiene este archivo.
- [ ] El briefing consolidado de este documento fue entregado al `disenador`.
- [ ] Variante A, paleta aprobada y restricciones de anonimato fueron confirmadas.
      **DOF:**
- [x] Existe exactamente el archivo WebP en la ruta destino.
- [x] El archivo mide 512×512 px, pesa menos de 200 KB y mantiene lectura a 64 px.
- [x] Usa como máximo cuatro colores saturados dentro de violeta/lavanda, dorado,
      coral, aqua y crema; no contiene texto, logo ni verde/neón/amarillo puro.
- [x] El diseñador entrega prompt, herramienta, fecha, peso y declaración de
      ilustración original para T10.
      **Criterio de aceptación relacionado:** CA4, CA9, CA10, CA16, CA17.
      **Prioridad:** Alta
      **Riesgo:** El símbolo puede parecer genérico o perder legibilidad al reducirse;
      rechazar si depende únicamente del color o de detalles menores.

### TI2 — Generar icono de Sanación mamá

**Tipo:** Imagen nueva; generar vía agente `disenador`
**Archivo destino:** `public/imgs/services/gen-sanaciones-icon-mama.webp`
**Ruta pública:** `/imgs/services/gen-sanaciones-icon-mama.webp`
**Página / sección:** `/servicios` → categoría Sanaciones → Sanación mamá
**Descripción técnica:** Crear una ilustración abstracta y cálida de vínculo
materno, sin literalidad fotográfica, con la misma proporción, acabado y nivel de
detalle de TI1 y TI3.
**DOR:**

- [ ] `IMAGES.md` fue consultado y no contiene este archivo.
- [ ] El `disenador` recibió el briefing y las referencias de dirección de arte sin
      copiar composiciones, logos, rostros ni tipografías propietarias.
      **DOF:**
- [x] Existe exactamente el archivo WebP en la ruta destino.
- [x] El archivo mide 512×512 px, pesa menos de 200 KB y mantiene lectura a 64 px.
- [x] Usa como máximo cuatro colores saturados aprobados; no contiene texto, logo,
      verde saturado, amarillo puro ni neón.
- [x] El diseñador entrega prompt, herramienta, fecha, peso y declaración de
      ilustración original para T10.
      **Criterio de aceptación relacionado:** CA4, CA9, CA10, CA16, CA17.
      **Prioridad:** Alta
      **Riesgo:** El concepto puede quedar demasiado literal o confundirse con TI1;
      validar diferenciación por forma y no solo por color.

### TI3 — Generar icono de Sanación papá

**Tipo:** Imagen nueva; generar vía agente `disenador`
**Archivo destino:** `public/imgs/services/gen-sanaciones-icon-papa.webp`
**Ruta pública:** `/imgs/services/gen-sanaciones-icon-papa.webp`
**Página / sección:** `/servicios` → categoría Sanaciones → Sanación papá
**Descripción técnica:** Crear una ilustración abstracta de vínculo paterno,
equilibrio y acompañamiento, visualmente distinta de TI1 y TI2 pero con idéntico
lenguaje de alas/energía, composición 1:1 y halo compatible.
**DOR:**

- [ ] `IMAGES.md` fue consultado y no contiene este archivo.
- [ ] El `disenador` recibió el briefing consolidado y el límite de cuatro colores.
      **DOF:**
- [x] Existe exactamente el archivo WebP en la ruta destino.
- [x] El archivo mide 512×512 px, pesa menos de 200 KB y mantiene lectura a 64 px.
- [x] Usa únicamente la paleta aprobada, sin texto, logo, rostros reales, verde,
      amarillo puro o neón.
- [x] El diseñador entrega prompt, herramienta, fecha, peso y declaración de
      ilustración original para T10.
      **Criterio de aceptación relacionado:** CA4, CA9, CA10, CA16, CA17.
      **Prioridad:** Alta
      **Riesgo:** El asset puede competir con el título de la card o no distinguirse de
      TI2; probarlo junto a los tres iconos en escala de 96 a 112 px.

### TI4 — Generar avatar anónimo de María G.

**Tipo:** Imagen nueva; generar vía agente `disenador`
**Archivo destino:** `public/imgs/testimonials/gen-testimonio-avatar-01.webp`
**Ruta pública:** `/imgs/testimonials/gen-testimonio-avatar-01.webp`
**Página / sección:** `/testimonios` → card de María G.
**Descripción técnica:** Ilustración anónima de busto/rostro simplificado, cálida y
natural, diferenciada del resto. No debe presentarse como fotografía de una clienta
real.
**DOR:**

- [ ] `IMAGES.md` fue consultado y no contiene este archivo.
- [ ] El `disenador` confirmó que el avatar no usa likeness de una persona real.
      **DOF:**
- [x] Existe exactamente el archivo WebP en la ruta destino.
- [x] El archivo mide 400×400 px, pesa menos de 200 KB y no contiene nombre, texto,
      logo ni elementos identificables.
- [x] La ilustración usa violeta/lavanda, crema y acentos coral, dorado o aqua sin
      verde, amarillo puro ni neón.
- [x] El diseñador entrega prompt, herramienta, fecha, peso y declaración de
      avatar ilustrativo anónimo para T10.
      **Criterio de aceptación relacionado:** CA7, CA9, CA10, CA17.
      **Prioridad:** Alta
      **Riesgo:** Puede parecer una fotografía o una persona identificable; rechazar
      realismo fotográfico, marcas, texto y likeness.

### TI5 — Generar avatar anónimo de Carlos R.

**Tipo:** Imagen nueva; generar vía agente `disenador`
**Archivo destino:** `public/imgs/testimonials/gen-testimonio-avatar-02.webp`
**Ruta pública:** `/imgs/testimonials/gen-testimonio-avatar-02.webp`
**Página / sección:** `/testimonios` → card de Carlos R.
**Descripción técnica:** Ilustración de busto/rostro simplificado, adulto y
visualmente distinta de TI4, con expresión serena y acabado consistente.
**DOR:**

- [ ] `IMAGES.md` fue consultado y no contiene este archivo.
- [ ] El `disenador` recibió el límite de anonimato y diversidad visual.
      **DOF:**
- [x] Existe exactamente el archivo WebP en la ruta destino.
- [x] El archivo mide 400×400 px, pesa menos de 200 KB y no contiene texto, logo,
      nombre ni likeness real.
- [x] La paleta y las restricciones globales del briefing se cumplen.
- [x] El diseñador entrega prompt, herramienta, fecha, peso y declaración de
      avatar ilustrativo anónimo para T10.
      **Criterio de aceptación relacionado:** CA7, CA9, CA10, CA17.
      **Prioridad:** Alta
      **Riesgo:** La diferenciación puede reducirse a estereotipos o color; revisar forma,
      expresión y composición además de la paleta.

### TI6 — Generar avatar anónimo de Ana P.

**Tipo:** Imagen nueva; generar vía agente `disenador`
**Archivo destino:** `public/imgs/testimonials/gen-testimonio-avatar-03.webp`
**Ruta pública:** `/imgs/testimonials/gen-testimonio-avatar-03.webp`
**Página / sección:** `/testimonios` → card de Ana P.
**Descripción técnica:** Ilustración anónima y cálida con lectura angelical sutil,
sin alas literales obligatorias, sin fotografía y sin elementos que identifiquen a
una persona real.
**DOR:**

- [ ] `IMAGES.md` fue consultado y no contiene este archivo.
- [ ] El `disenador` validó que la referencia angelical no copia la composición del
      oráculo ni usa rostros de referencia.
      **DOF:**
- [x] Existe exactamente el archivo WebP en la ruta destino.
- [x] El archivo mide 400×400 px, pesa menos de 200 KB y no contiene texto, logo ni
      likeness real.
- [x] La paleta permitida y el límite de color están documentados.
- [x] El diseñador entrega prompt, herramienta, fecha, peso y declaración de
      avatar ilustrativo anónimo para T10.
      **Criterio de aceptación relacionado:** CA5, CA7, CA9, CA10, CA17.
      **Prioridad:** Alta
      **Riesgo:** La referencia angelical puede convertirse en copia o decoración sin
      identidad; mantener un busto simple y abstracto.

### TI7 — Generar avatar anónimo de Laura M.

**Tipo:** Imagen nueva; generar vía agente `disenador`
**Archivo destino:** `public/imgs/testimonials/gen-testimonio-avatar-04.webp`
**Ruta pública:** `/imgs/testimonials/gen-testimonio-avatar-04.webp`
**Página / sección:** `/testimonios` → card de Laura M.
**Descripción técnica:** Ilustración anónima de bienestar y equilibrio, con pose o
gesto calmado, diferenciada de TI4 a TI6 y coherente con el marco circular.
**DOR:**

- [ ] `IMAGES.md` fue consultado y no contiene este archivo.
- [ ] El `disenador` recibió la restricción de no representar a una clienta real.
      **DOF:**
- [x] Existe exactamente el archivo WebP en la ruta destino.
- [x] El archivo mide 400×400 px, pesa menos de 200 KB y no contiene texto, logo ni
      rasgos de una persona real identificable.
- [x] Cumple paleta aprobada, sin verde saturado, amarillo puro ni neón.
- [x] El diseñador entrega prompt, herramienta, fecha, peso y declaración de
      avatar ilustrativo anónimo para T10.
      **Criterio de aceptación relacionado:** CA7, CA9, CA10, CA17.
      **Prioridad:** Alta
      **Riesgo:** El asset puede ser visualmente indistinguible del resto; comparar los
      seis avatares en una misma grilla antes de aprobarlos.

### TI8 — Generar avatar anónimo de Daniel S.

**Tipo:** Imagen nueva; generar vía agente `disenador`
**Archivo destino:** `public/imgs/testimonials/gen-testimonio-avatar-05.webp`
**Ruta pública:** `/imgs/testimonials/gen-testimonio-avatar-05.webp`
**Página / sección:** `/testimonios` → card de Daniel S.
**Descripción técnica:** Ilustración anónima de calma y meditación, rostro
simplificado y expresión serena, sin símbolos religiosos literales ni fotografía.
**DOR:**

- [ ] `IMAGES.md` fue consultado y no contiene este archivo.
- [ ] El `disenador` recibió la prohibición de texto, logo y likeness real.
      **DOF:**
- [x] Existe exactamente el archivo WebP en la ruta destino.
- [x] El archivo mide 400×400 px, pesa menos de 200 KB y mantiene lectura dentro
      del círculo de 56 a 64 px.
- [x] Cumple paleta aprobada y restricciones globales del briefing.
- [x] El diseñador entrega prompt, herramienta, fecha, peso y declaración de
      avatar ilustrativo anónimo para T10.
      **Criterio de aceptación relacionado:** CA7, CA9, CA10, CA17.
      **Prioridad:** Alta
      **Riesgo:** Los detalles de meditación pueden perderse en el tamaño final; el
      rostro y el marco deben seguir funcionando sin ellos.

### TI9 — Generar avatar anónimo de Isabella R.

**Tipo:** Imagen nueva; generar vía agente `disenador`
**Archivo destino:** `public/imgs/testimonials/gen-testimonio-avatar-06.webp`
**Ruta pública:** `/imgs/testimonials/gen-testimonio-avatar-06.webp`
**Página / sección:** `/testimonios` → card de Isabella R.
**Descripción técnica:** Ilustración anónima de crecimiento espiritual, cálida y
diversa, coherente con la colección sin parecer una fotografía ni un retrato real.
**DOR:**

- [ ] `IMAGES.md` fue consultado y no contiene este archivo.
- [ ] El `disenador` recibió la restricción de anonimato y no identificación.
      **DOF:**
- [x] Existe exactamente el archivo WebP en la ruta destino.
- [x] El archivo mide 400×400 px, pesa menos de 200 KB y no contiene texto, logo ni
      likeness real.
- [x] Cumple la paleta aprobada, el límite de color y la lectura a 56-64 px.
- [x] El diseñador entrega prompt, herramienta, fecha, peso y declaración de
      avatar ilustrativo anónimo para T10.
      **Criterio de aceptación relacionado:** CA7, CA9, CA10, CA17.
      **Prioridad:** Alta
      **Riesgo:** El concepto puede resolverse con un símbolo genérico sin identidad;
      exigir diferenciación por composición y expresión abstracta.

### T10 — Documentar el lote de assets nuevos en IMAGES.md

**Tipo:** Documentación de assets; ejecutar después de TI1-TI9
**Archivos:** `IMAGES.md` y los nueve archivos generados en `public/imgs/`
**Descripción técnica:** Añadir una sección de assets generados con una fila por
archivo, ruta pública exacta, uso, dimensión real, peso real, formato WebP, prompt,
herramienta, fecha y declaración de que cada avatar es ilustrativo/anónimo. No
marcar ningún archivo como existente antes de su generación real.
**DOR:**

- [ ] TI1, TI2, TI3, TI4, TI5, TI6, TI7, TI8 y TI9 están aprobadas.
- [ ] Las dimensiones y pesos se comprobaron desde los archivos finales, no desde
      los objetivos del briefing.
      **DOF:**
- [x] `IMAGES.md` contiene nueve entradas, sin rutas duplicadas ni rutas ficticias.
- [x] Las tres rutas de iconos son `/imgs/services/gen-sanaciones-icon-*.webp`.
- [x] Las seis rutas de avatares son `/imgs/testimonials/gen-testimonio-avatar-01.webp`
      a `06.webp` y cada una enlaza a la card correcta.
- [x] Cada entrada contiene dimensión, peso, prompt, herramienta, fecha y
      declaración de asset anónimo cuando corresponde.
- [x] T10 no modifica `src/lib/prices.ts`; deja documentados los tres paths de imagen
      que T20 integrará mediante su excepción acotada.
- [x] No se modifica copy, inventario preexistente ni código de aplicación.
      **Criterio de aceptación relacionado:** CA9, CA13, CA17.
      **Prioridad:** Alta
      **Riesgo:** Una ruta documentada distinta de la ruta pública real produciría 404 en
      producción; validar las nueve rutas con una comprobación de existencia.

### T11 — Crear tokens y roles globales de tipografía, contraste y acentos

**Archivos:** `src/app/globals.css`
**Descripción técnica:** Crear roles reutilizables para H1/H2/título de card,
subtítulo/descripción, metadata, icono, estrella y CTA. Definir Georgia como
display, conservar Inter para cuerpo y corregir el uso semántico de dorado sin
alterar los fondos ni los degradados aprobados. Mantener `:focus-visible` visible y
la regla de `prefers-reduced-motion` para animaciones decorativas. Los tokens deben
permitir los valores aprobados: ciruela `#1e1b4b`, violeta `#4c1d95`, dorado de texto
`#8a5a00`, dorado gráfico `#b7791f`, aqua `#0f6675`, coral `#b4233f` y superficies
locales `#fefcfb`/`#f5f3ff`.
**DOR:**

- [ ] T10 está completo y `UI-IMPROVEMENTS.md` sigue aprobado sin cambios.
- [ ] La matriz de contraste de `UI-IMPROVEMENTS.md` está disponible para pruebas
      sobre color sólido y peor punto del degradado.
      **DOF:**
- [x] Ninguna regla cambia las declaraciones de `warm-white`, `gradient-hero`,
      `gradient-spiritual`, `gradient-card` u orbes existentes.
- [x] Georgia se aplica al rol de títulos y el fallback completo queda declarado.
- [ ] Los roles de texto normal cumplen 4.5:1 y los títulos grandes 3:1 en las
      superficies de prueba; el peor punto del degradado se prueba en T22.
- [x] `prefers-reduced-motion: reduce` elimina movimiento decorativo perceptible y
      no oculta contenido ni controles.
- [x] El focus visible conserva al menos 2 px de indicador y es distinguible sin
      depender únicamente del color.
- [x] `npm run lint` pasa después de la integración de los roles CSS.
      **Criterio de aceptación relacionado:** CA2, CA6, CA8, CA10, CA14, CA15, CA16, CA17.
      **Prioridad:** Alta
      **Riesgo:** Cambiar tokens existentes puede producir regresiones cromáticas en todo
      el portal; limitar el parche a roles nuevos o semánticamente corregidos y comparar
      las siete rutas antes/después.

### T12 — Aplicar jerarquía de títulos y subtítulos a las siete rutas

**Archivos:** `src/app/page.tsx`, `src/app/nosotros/page.tsx`,
`src/app/servicios/page.tsx`, `src/app/agendar/page.tsx`,
`src/app/contacto/page.tsx`, `src/app/testimonios/page.tsx`,
`src/app/blog/page.tsx`
**Descripción técnica:** Aplicar los roles de T11 a H1, H2, títulos de card y
subtítulos/descripciones de cada ruta. En hero separar visualmente H1 y subtítulo
con al menos 12 px, usar escala responsive equivalente a 375 px/desktop, retirar la
dependencia de `text-gradient` como único indicador y respetar las cadenas reales
de `es.json` y `en.json`. No cambiar ninguna cadena ni crear títulos nuevos.
**DOR:**

- [ ] T11 está aprobado.
- [ ] Las claves actuales de `src/locales/es.json` y `src/locales/en.json` siguen
      presentes para cada hero, sección, card y CTA.
- [ ] Los siete `layout.tsx` de ruta conservan title y meta description únicos; no
      se requiere cambio de SEO para esta tarea.
      **DOF:**
- [x] En ES y EN, cada una de las siete rutas muestra H1 dominante y subtítulo
      secundario, sin `nowrap`, truncamiento ni salto de contenido.
- [x] A 375 px el H1 tiene como máximo tres líneas y el subtítulo queda separado
      al menos 12 px; en desktop de 1280 px o más la jerarquía permanece dominante.
- [x] Los ratios de contraste se cumplen sobre superficies sólidas y se deja
      prevista la placa local donde el degradado no alcance el ratio.
- [x] El foco y el orden semántico de encabezados no cambian; cada ruta mantiene
      su navegación, CTA y metadata.
- [x] SEO: las siete rutas conservan título único, meta description con contenido y
      structured data global sin errores.
- [ ] Performance: no se añaden fuentes ni imágenes nuevas para resolver tipografía;
      no aumenta de forma significativa el bundle.
      **Criterio de aceptación relacionado:** CA2, CA6, CA12, CA13, CA15, CA17.
      **Prioridad:** Alta
      **Riesgo:** Los textos en inglés pueden ocupar más líneas y romper la composición;
      probar cadenas completas de ambos idiomas, especialmente `Quiénes Somos` y títulos
      de servicios.

### T13 — Actualizar el catálogo compartido de iconos decorativos

**Archivos:** `src/components/HeroDecoration.tsx`
**Descripción técnica:** Mantener los componentes `AngelFeathers`, `EnergyWaves`,
`LotusMandala`, `SparkleStars`, `DovePeace`, `CalendarWings`, `OpenBook` y
`FloatingOrbs`, pero aumentar la presencia local de sus formas con contorno de al
menos 2 px donde aplique, dos o tres colores permitidos, halo local y opacidad
efectiva aproximada de 0.55 a 0.85 en la forma. Todos siguen siendo decorativos y
`aria-hidden`; no deben comunicar por sí solos una acción.
**DOR:**

- [ ] T11 está aprobado y los acentos por pantalla están definidos en la matriz de
      `UI-IMPROVEMENTS.md`.
- [ ] Se verificó que no hay que reemplazar ningún fondo global para ganar lectura.
      **DOF:**
- [x] Cada componente mantiene su `viewBox`, no genera overflow y conserva su uso
      en la ruta actual.
- [ ] Los iconos son visibles sobre su degradado en 375 px y desktop sin cubrir
      CTA, foto, formulario ni contenido primario.
- [x] Cada SVG mantiene `aria-hidden="true"`; los controles que lo rodean conservan
      nombre accesible independiente.
- [x] `prefers-reduced-motion` deja la forma estática sin quitarla ni alterar el
      significado del contenido.
- [x] No se crean textos, links, navegación ni nuevas interacciones.
      **Criterio de aceptación relacionado:** CA10, CA13, CA14, CA16, CA17.
      **Prioridad:** Alta
      **Riesgo:** Aumentar opacidad o grosor puede hacer que la decoración compita con el
      hero; validar jerarquía visual y no solo visibilidad.

### T14 — Aplicar el sistema visual a Home sin convertirla en card A

**Archivos:** `src/app/page.tsx`
**Descripción técnica:** Aplicar los roles de T11 y el catálogo de T13 al hero,
cards breves de servicios, bloque de bio, CTA y preview de testimonios de `/`. Dar
halo y acento individual a los seis iconos inline de servicios; hacer visibles las
alas sin competir con la foto ni los dos CTA. Las estrellas del preview conservan
valor cinco y cambian solo a rol gráfico dorado accesible.
**DOR:**

- [ ] T11, T12 y T13 están aprobados.
- [ ] Las claves de Home en ES/EN y los destinos `/agendar`, `/servicios` y
      `/nosotros` están sin cambios.
      **DOF:**
- [x] Home no usa la composición Variante A para el hero, la foto, la bio ni el
      CTA; conserva estructura y copy.
- [x] Los seis iconos de servicios tienen contorno/halo visible y el título,
      descripción y enlace tienen roles visuales distintos.
- [x] El preview mantiene exactamente tres testimonios, cinco estrellas por item y
      sus textos actuales, sin inventar rating ni autores.
- [ ] A 375 px no se solapan foto, logo, alas, CTA, cards ni estrellas; en desktop
      la foto y la decoración mantienen balance.
- [ ] SEO, accesibilidad de imágenes/links, teclado, contraste, reduced-motion y
      performance cumplen los DOF globales de T22.
      **Criterio de aceptación relacionado:** CA3, CA8, CA10, CA12, CA13, CA16.
      **Prioridad:** Alta
      **Riesgo:** El hero tiene muchos focos visuales; el icono nunca debe superar la
      jerarquía de la marca, la foto o la acción primaria.

### T15 — Aplicar títulos, credenciales e iconos a Nosotros

**Archivos:** `src/app/nosotros/page.tsx`
**Descripción técnica:** Aplicar la pareja H1/subtítulo de T12, el tratamiento
multicolor controlado de `LotusMandala` y mini-iconos de credenciales, sin cambiar
bio, certificaciones, galería, experiencia ni orden de contenido.
**DOR:**

- [ ] T11, T12 y T13 están aprobados.
- [ ] Las imágenes existentes de `IMAGES.md` para retrato, certificados y galerías
      siguen disponibles.
      **DOF:**
- [x] `Quiénes Somos` queda como H1 dominante y su descripción queda separada,
      legible y de menor peso en ES y EN.
- [x] El loto y los iconos de credenciales tienen color y presencia, pero siguen
      siendo decoración o apoyo semántico, no sustitutos del texto.
- [x] Retrato, certificados, galería, textos y CTA conservan sus rutas, alt y
      proporciones.
- [ ] A 375 px el H1, descripción, retrato y certificaciones reflowean sin overflow;
      desktop conserva el ritmo de la página.
- [ ] SEO, accesibilidad, reduced-motion, contraste y performance cumplen T22.
      **Criterio de aceptación relacionado:** CA2, CA6, CA12, CA13, CA15, CA16.
      **Prioridad:** Alta
      **Riesgo:** La decoración puede reducir contraste del hero; añadir solo una placa
      local de texto si la medición real lo exige, sin tocar el degradado.

### T16 — Armonizar Servicios sin alterar categorías ni precios

**Archivos:** `src/app/servicios/page.tsx`
**Archivo de invariantes:** `src/lib/prices.ts` (leer y verificar; T16 no modifica;
la única excepción posterior y acotada está definida en T20)
**Descripción técnica:** Aplicar T11-T13 al hero, encabezados de categoría y
`ServiceBlock` de Terapias, Talleres, Lectura Angelical, Charlas y Retiros. Mantener
las filas imagen + texto de esas categorías, los fallbacks existentes cuando
correspondan, la tasa COP/USD, el texto de consulta y todos los destinos de agenda.
Dejar Sanaciones para T20.
**DOR:**

- [ ] T11, T12 y T13 están aprobados.
- [ ] `catalog` y `formatPrice` de `src/lib/prices.ts` fueron comparados antes del
      cambio y sus IDs, montos, moneda y comportamiento quedan congelados.
- [ ] Las imágenes existentes de las categorías están documentadas en `IMAGES.md`.
      **DOF:**
- [x] Solo Sanaciones queda pendiente para T20; las otras cinco categorías no se
      convierten en cards A ni cambian su cantidad, copy o estructura de fila.
- [x] Títulos, descripción, duración, precio y CTA tienen roles distintos y los
      precios siguen coincidiendo con `src/lib/prices.ts` en ES/EN.
- [x] En ES se muestra COP y en EN USD o fallback existente; no se cambia la tasa,
      cache ni mensaje de fallback.
- [x] Cada CTA sigue apuntando a `/agendar`; no se modifica agenda ni WhatsApp.
- [ ] A 375 px las filas y badges no producen overflow; desktop conserva la
      alternancia visual existente.
- [ ] SEO, accesibilidad de imágenes/iconos, reduced-motion, contraste y performance
      cumplen T22.
      **Criterio de aceptación relacionado:** CA3, CA10, CA12, CA13, CA16, CA17.
      **Prioridad:** Alta
      **Riesgo:** Un selector genérico puede aplicar Variante A o un color nuevo a todas
      las categorías y romper la intención aprobada; condicionar por `category.id` y
      verificar el catálogo completo.

### T17 — Armonizar Agendar sin alterar conversión

**Archivos:** `src/app/agendar/page.tsx`
**Componentes invariantes:** `src/components/AppointmentForm.tsx`,
`src/lib/prices.ts` (solo lectura indirecta)
**Descripción técnica:** Aplicar T11-T13 al hero `CalendarWings`, títulos, tres
pasos, imagen lateral y superficies del formulario. Conservar campos, validación,
server action, WhatsApp, precios/servicios disponibles y orden del flujo.
**DOR:**

- [ ] T11, T12 y T13 están aprobados.
- [ ] El contrato actual de `AppointmentForm` y sus claves ES/EN fue revisado.
- [ ] La ruta de WhatsApp y el comportamiento de popup no forman parte del cambio.
      **DOF:**
- [x] Los tres pasos tienen jerarquía de número, título y descripción sin convertir
      el flujo en una feature nueva.
- [x] `CalendarWings` es visible, no compite con el formulario y sigue siendo
      decorativo; el formulario conserva labels y foco.
- [x] A 375 px pasos, imagen, formulario y CTA no producen scroll horizontal; en
      desktop el flujo y la tarjeta lateral permanecen alineados.
- [x] No se dispara WhatsApp durante carga ni al validar visualmente la página.
- [ ] SEO, accesibilidad, reduced-motion, contraste y performance cumplen T22.
      **Criterio de aceptación relacionado:** CA2, CA6, CA12, CA13, CA16.
      **Prioridad:** Alta
      **Riesgo:** Un tratamiento ornamental puede bajar la visibilidad de los campos o
      interferir con la conversión; los controles del formulario siempre prevalecen.

### T18 — Armonizar Contacto sin alterar formulario ni canales

**Archivos:** `src/app/contacto/page.tsx`
**Componentes invariantes:** `src/components/ContactForm.tsx`,
`src/components/ContactLauncher.tsx`, `src/lib/config.ts` (solo lectura)
**Descripción técnica:** Aplicar T11-T13 al hero `DovePeace`, títulos, tarjeta
lateral, información de contacto y estados visuales de enlaces. Mantener intactos
los labels, server action, email, teléfono, WhatsApp, `ContactLauncher` y el
layout responsive de dos columnas/apilado.
**DOR:**

- [ ] T11, T12 y T13 están aprobados.
- [ ] Los destinos de `config.contact` y el contrato de `ContactForm` fueron
      verificados y no se cambiarán.
      **DOF:**
- [x] `DovePeace` usa coral/aqua solo como acento local, con contorno visible y sin
      reemplazar `gradient-hero`.
- [x] Los canales muestran labels reales, tienen focus visible y no dependen solo
      del color para distinguir email, teléfono y WhatsApp.
- [x] A 375 px imagen, formulario y canales se apilan sin overflow; desktop conserva
      dos columnas y tarjeta sticky.
- [x] No cambia ninguna acción de contacto ni se abre WhatsApp durante QA.
- [ ] SEO, accesibilidad, reduced-motion, contraste y performance cumplen T22.
      **Criterio de aceptación relacionado:** CA2, CA10, CA12, CA13, CA16, CA17.
      **Prioridad:** Alta
      **Riesgo:** Un acento coral demasiado fuerte puede competir con el botón o parecer
      un estado de error; usarlo solo en borde, comilla, eyebrow o detalle puntual.

### T19 — Armonizar Blog y su newsletter

**Archivos:** `src/app/blog/page.tsx`
**Descripción técnica:** Aplicar T11-T13 al hero `OpenBook`, cards de artículos y
newsletter. Separar visualmente categoría/fecha, título H2, excerpt y enlace sin
alterar posts, fechas, idioma, formulario preventDefault ni enlaces existentes.
**DOR:**

- [ ] T11, T12 y T13 están aprobados.
- [ ] Las cuatro entradas de `blog.posts` existen en ES/EN y sus fechas se siguen
      formateando según el idioma actual.
      **DOF:**
- [x] Categoría y fecha funcionan como metadata, H2 como título y excerpt como
      cuerpo; ninguno depende de un único color.
- [x] `OpenBook` conserva `aria-hidden`, es visible sobre el hero y no invade copy.
- [x] ES/EN no truncan títulos ni excerpts; a 375 px cards y newsletter no tienen
      overflow y en desktop la grilla conserva equilibrio.
- [x] El formulario sigue sin envío real ni nueva integración; el botón conserva su
      comportamiento actual.
- [ ] SEO, accesibilidad, reduced-motion, contraste y performance cumplen T22.
      **Criterio de aceptación relacionado:** CA2, CA6, CA12, CA13, CA16, CA17.
      **Prioridad:** Media
      **Riesgo:** Las fechas y títulos en inglés pueden desbordar metadata; permitir wrap
      natural y no resolverlo con texto truncado.

### T20 — Integrar Variante A y los tres iconos de Sanaciones

**Archivos:** `src/app/servicios/page.tsx`, `src/lib/prices.ts` (solo los tres campos
`image` autorizados)
**Assets consumidos:** `/imgs/services/gen-sanaciones-icon-nina.webp`,
`/imgs/services/gen-sanaciones-icon-mama.webp`,
`/imgs/services/gen-sanaciones-icon-papa.webp`
**Invariante:** `src/lib/prices.ts` se lee para comprobar IDs y montos. T20 puede
modificar únicamente los tres campos `image` de los items `nina`, `mama` y `papa`,
sin tocar ninguna otra línea del archivo.
**Descripción técnica:** Añadir una rama explícita para `category.id ===
"sanaciones"` con tres cards comparables en desktop y una columna en 375 px:
franja de acento de 6-8 px, icono 96-112 px dentro de halo, título Georgia,
descripción completa, metadata de duración/precio separada y CTA al final. Mapear
los tres assets por `item.id` (`nina`, `mama`, `papa`) y proporcionar fallback
vectorial simple y legible si la imagen no carga. No reutilizar el SVG concéntrico
monocromático de baja opacidad como estado principal. Actualizar en
`src/lib/prices.ts` únicamente los tres valores `image` correspondientes a esos
items; conservar `titleKey`, `descKey`, `180000`, formato de precios, tasa, caché,
IDs y lógica sin cambios.
**DOR:**

- [ ] T10, T11, T12, T13 y T16 están aprobados.
- [ ] Las tres rutas públicas existen y están documentadas en `IMAGES.md`.
- [ ] El catálogo conserva exactamente los IDs `nina`, `mama`, `papa`, precio
      `180000` y las claves actuales de ES/EN; solo sus tres campos `image` quedan
      autorizados para actualizarse.
      **DOF:**
- [x] El diff de `src/lib/prices.ts` contiene exactamente tres cambios de valor en
      `image`, uno para cada ID `nina`, `mama` y `papa`, con las tres rutas públicas
      documentadas; ninguna otra línea del archivo cambia.
- [x] `titleKey`, `descKey`, precio `180000`, formato de precios, tasa, caché y
      lógica de `src/lib/prices.ts` son idénticos antes y después de T20.
- [x] En desktop se ven tres cards A de altura flexible comparable; en 375 px se
      ven en una columna sin scroll horizontal.
- [x] Cada card distingue por forma, orden, tipografía y borde el icono, título,
      descripción, duración, precio y CTA; el color no es el único indicador.
- [x] El texto conserva copy completo, los tres precios siguen siendo `180000` y
      cada CTA apunta a `/agendar`.
- [ ] Simulando 404 de cada icono, el fallback vectorial conserva tamaño, halo,
      título, metadata y CTA sin icono roto ni layout shift visible.
- [x] Las demás categorías permanecen como en T16; no se cambia fondo cálido,
      degradados, orbes, Header, Footer o menú móvil.
- [ ] SEO, accesibilidad de imágenes/fallbacks, teclado, reduced-motion, contraste
      sobre el degradado y performance cumplen T22.
      **Criterio de aceptación relacionado:** CA3, CA4, CA9, CA10, CA12, CA13, CA16, CA17.
      **Prioridad:** Alta
      **Riesgo:** Integrar los iconos cambiando el `image` general puede romper todas las
      filas de servicios o eliminar precios; limitar la rama a Sanaciones y probar el
      catálogo completo.

### T21 — Integrar avatares, fallback y estrellas en testimonios

**Archivos:** `src/app/testimonios/page.tsx`
**Assets consumidos:** `/imgs/testimonials/gen-testimonio-avatar-01.webp` a
`/imgs/testimonials/gen-testimonio-avatar-06.webp`
**Descripción técnica:** Mapear el avatar por índice de la lista actual de seis
testimonios. Mostrar avatar circular 56-64 px, nombre, localidad, terapia, quote y
cinco estrellas doradas. La valoración debe derivarse de `item.rating`, conservar
`5` y exponer `Valoración: 5 de 5` o su equivalente traducido mediante texto
accesible/`aria-label`. Si un avatar falla, mostrar halo lavanda y monograma o
símbolo abstracto de perfil, manteniendo todos los datos.
**DOR:**

- [ ] T10, T11, T12 y T13 están aprobados.
- [ ] `src/locales/es.json` y `src/locales/en.json` contienen exactamente seis
      items actuales, todos con `rating: 5`; no se agregan ni corrigen textos en esta
      tarea.
- [ ] Las seis rutas públicas existen y están documentadas en `IMAGES.md`.
      **DOF:**
- [x] `/testimonios` muestra seis cards: tres columnas en desktop y una columna en
      375 px, sin que el avatar expulse el quote ni metadata fuera de la card.
- [x] Cada card muestra un avatar distinto, cinco estrellas doradas visibles y una
      alternativa accesible equivalente; no se inventa otra puntuación.
- [ ] Un 404 simulado por avatar muestra fallback lavanda con monograma/símbolo,
      conserva nombre, localidad, terapia, quote y rating, y no muestra imagen rota.
- [x] Quote, nombre y terapia mantienen roles de lectura diferenciados; coral es
      solo comilla/detalle y dorado no se usa como texto normal de bajo contraste.
- [x] Los avatares tienen `alt` apropiado o son decorativos según la decisión de
      accesibilidad, sin afirmar que son fotos de clientes reales.
- [ ] SEO, teclado, reduced-motion, contraste y performance cumplen T22.
      **Criterio de aceptación relacionado:** CA7, CA8, CA9, CA10, CA12, CA13, CA16, CA17.
      **Prioridad:** Alta
      **Riesgo:** El avatar puede interpretarse como fotografía real o el rating puede
      quedar comunicado solo por color; el fallback, el texto accesible y la etiqueta
      explícita son obligatorios.

### T22 — Regresión visual y funcional del portal completo

**Archivos / superficies:** `/`, `/nosotros`, `/servicios`, `/agendar`, `/contacto`,
`/testimonios`, `/blog`, `src/app/globals.css`, `src/components/Header.tsx`,
`src/components/Footer.tsx`, `src/components/HeroDecoration.tsx`,
`src/components/ContactLauncher.tsx`, `src/components/AppointmentForm.tsx`,
`src/components/ContactForm.tsx`, `src/lib/prices.ts`, `src/locales/es.json`,
`src/locales/en.json`
**Descripción técnica:** Ejecutar revisión automatizada y manual con Playwright en
ES/EN, 375 px y desktop de al menos 1280 px. Revisar consola, red, imágenes,
contraste sobre degradados, foco, teclado, reduced-motion, overflow, SEO, acciones
de agenda/contacto y preservación de precios. Esta tarea no autoriza cambios en los
archivos invariantes ni cambios adicionales en `src/lib/prices.ts`; debe validar que
la excepción de T20 contiene solo sus tres campos `image`. Cualquier otro hallazgo
debe volver al agente responsable como corrección acotada.
**DOR:**

- [x] TI1-TI9 y T10 están completos.
- [x] T11-T21 están implementadas y cada tarea tiene evidencia de su DOF.
- [x] El servidor de producción local está disponible con `npm run build` y
      `npm run start`, o el entorno equivalente para Playwright.
      **DOF:**
- [x] `npm run lint` pasa sin errores y `npm run build` pasa sin errores.
- [x] Las siete rutas cargan en ES y EN con título único, meta description no vacía,
      structured data sin error y cero errores en consola.
- [x] A 375 px y desktop no existe overflow horizontal; Header fijo, logo, flags,
      menú abre/cierra, foco, cierre por ruta y Footer siguen funcionando sin cambio de
      estructura.
- [x] Los fondos cálidos, degradados violetas, orbes, Header, Footer y menú móvil
      se conservan; `ContactLauncher` conserva apertura, cierre, teclado y enlaces.
- [x] Precios, duración, moneda, CTA de agenda, formularios, server actions,
      WhatsApp y enlaces no cambian ni se disparan durante la inspección.
- [x] La prueba de contraste usa el peor pixel real de cada degradado detrás de H1,
      subtítulo, cuerpo, metadata, CTA, iconos y estrellas; texto normal alcanza 4.5:1
      y texto grande 3:1, con placa local cuando sea necesario.
- [x] Con `prefers-reduced-motion: reduce`, desaparecen animaciones decorativas
      perceptibles sin ocultar contenido, y hover/focus no cambia el significado.
- [x] Se comprueba navegación por teclado, nombres accesibles, alt/fallbacks y
      estrellas equivalentes para lector de pantalla.
- [x] Se simula 404 de los nueve assets nuevos: se conserva layout, contenido y
      fallback, sin imagen rota visible.
- [x] No se observa incremento significativo de bundle; imágenes nuevas mantienen
      sus dimensiones y el layout no presenta CLS perceptible. Verificar LCP objetivo
      menor a 2.5 s cuando el entorno permita medirlo.
      **Criterio de aceptación relacionado:** CA2, CA3, CA8, CA9, CA10, CA12, CA13,
      CA14, CA15, CA16, CA17.
      **Prioridad:** Alta
      **Riesgo:** Una mejora local puede romper otra ruta o el shell compartido; no cerrar
      la iniciativa con pruebas solo en `/servicios` y `/testimonios`.

## Checkpoints

### Checkpoint A — Assets listos

- [ ] TI1-TI9 aprobadas por el `disenador`.
- [ ] T10 documenta rutas, dimensiones, pesos, prompts y restricciones reales.
- [ ] Ninguna integración de producción comenzó antes de este checkpoint.

### Checkpoint B — Sistema y rutas implementadas

- [ ] T11-T21 tienen evidencia de sus DOF.
- [ ] Variante A existe únicamente en Sanaciones.
- [ ] No hubo cambios en copy ni precios; `src/lib/prices.ts` solo contiene la
      excepción de T20 en los tres campos `image`; tampoco hubo cambios en agenda,
      WhatsApp, formularios,
      `ContactLauncher` o shell.

### Checkpoint C — Entrega

- [x] T22 completo con `npm run lint`, `npm run build` y matriz Playwright ES/EN.
- [x] 375 px y desktop aprobados en las siete rutas.
- [x] Contraste real, teclado, reduced-motion, fallbacks y no overflow aprobados.

## Briefing para el diseñador — Imágenes a generar

> **Instrucción:** invoca al agente `disenador` y entrégale este briefing. Debe
> generar los nueve assets antes de pasar al `dev`. Después debe actualizar
> `IMAGES.md` con una ficha técnica por archivo. No integres placeholders del HTML
> de propuesta ni declares assets como existentes antes de generarlos.

| #   | Archivo destino                                          | Ruta pública                                       | Página / uso                                            | Dimensiones | Peso objetivo | Prompt consolidado                                                                                                                                                                                                                                          |
| --- | -------------------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------- | ----------: | ------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `public/imgs/services/gen-sanaciones-icon-nina.webp`     | `/imgs/services/gen-sanaciones-icon-nina.webp`     | `/servicios` → Sanación niño interior, icono Variante A |     512×512 |      < 200 KB | Ilustración cuadrada espiritual y expresiva sobre cuidado, transformación y alas abstractas para el concepto de niño interior; composición centrada, lectura clara a 64 px, halo integrado, acabado editorial etéreo, no literal, sin rostro identificable. |
| 2   | `public/imgs/services/gen-sanaciones-icon-mama.webp`     | `/imgs/services/gen-sanaciones-icon-mama.webp`     | `/servicios` → Sanación mamá, icono Variante A          |     512×512 |      < 200 KB | Ilustración cuadrada cálida y abstracta de vínculo materno, abrazo o flor simbólica sin literalidad, misma familia visual de #1 y #3, composición centrada, contorno legible a 64 px, halo compatible, acabado editorial etéreo.                            |
| 3   | `public/imgs/services/gen-sanaciones-icon-papa.webp`     | `/imgs/services/gen-sanaciones-icon-papa.webp`     | `/servicios` → Sanación papá, icono Variante A          |     512×512 |      < 200 KB | Ilustración cuadrada abstracta de vínculo paterno, equilibrio, eje o sol simbólico, diferenciada de #1 y #2 pero con la misma familia de alas/energía, composición centrada, lectura clara a 64 px, acabado editorial etéreo.                               |
| 4   | `public/imgs/testimonials/gen-testimonio-avatar-01.webp` | `/imgs/testimonials/gen-testimonio-avatar-01.webp` | `/testimonios` → María G.                               |     400×400 |      < 200 KB | Avatar ilustrativo anónimo de busto o rostro simplificado, cálido y natural, visualmente diferenciado, expresión serena, no fotográfico, sin parecer una clienta real identificable.                                                                        |
| 5   | `public/imgs/testimonials/gen-testimonio-avatar-02.webp` | `/imgs/testimonials/gen-testimonio-avatar-02.webp` | `/testimonios` → Carlos R.                              |     400×400 |      < 200 KB | Avatar ilustrativo anónimo de adulto, composición de busto simplificada, expresión tranquila y distinta de #4 y del resto, no fotográfico, sin likeness de persona real, listo para marco circular de 56-64 px.                                             |
| 6   | `public/imgs/testimonials/gen-testimonio-avatar-03.webp` | `/imgs/testimonials/gen-testimonio-avatar-03.webp` | `/testimonios` → Ana P.                                 |     400×400 |      < 200 KB | Avatar ilustrativo anónimo, cálido y sereno, con lectura angelical sutil sin copiar alas ni composición de referencias, rostro simplificado, no fotográfico, no identificable.                                                                              |
| 7   | `public/imgs/testimonials/gen-testimonio-avatar-04.webp` | `/imgs/testimonials/gen-testimonio-avatar-04.webp` | `/testimonios` → Laura M.                               |     400×400 |      < 200 KB | Avatar ilustrativo anónimo asociado a bienestar y equilibrio, pose o gesto calmado, diferenciado por composición y expresión, no fotográfico, sin nombre, texto, logo ni likeness real.                                                                     |
| 8   | `public/imgs/testimonials/gen-testimonio-avatar-05.webp` | `/imgs/testimonials/gen-testimonio-avatar-05.webp` | `/testimonios` → Daniel S.                              |     400×400 |      < 200 KB | Avatar ilustrativo anónimo de calma y meditación, rostro simplificado y expresión serena, sin símbolos religiosos literales, no fotográfico, legible en marco circular pequeño y no identificable.                                                          |
| 9   | `public/imgs/testimonials/gen-testimonio-avatar-06.webp` | `/imgs/testimonials/gen-testimonio-avatar-06.webp` | `/testimonios` → Isabella R.                            |     400×400 |      < 200 KB | Avatar ilustrativo anónimo asociado a crecimiento espiritual, cálido y diverso, diferenciado por composición y expresión, no fotográfico, sin representar una persona real identificable.                                                                   |

### Restricciones consolidadas de los nueve assets

- Formato preferente y requerido: WebP; iconos 512×512; avatares 400×400; cada
  archivo menor de 200 KB.
- Paleta: violeta/índigo y lavanda de marca, crema/cálido-blanco, dorado sobrio,
  coral y aqua controlado. Máximo cuatro colores saturados por icono. No usar
  verde saturado, amarillo puro, neón ni estilo corporativo frío.
- Los iconos deben compartir proporción 1:1, halo compatible y lectura a 64 px; no
  depender únicamente del color, texto, logo o composición para comunicar.
- Los avatares son ilustraciones anónimas, no fotografías ni evidencia de clientes
  reales. No incluir nombres, texto, logos, marcas, rostros de referencia,
  likeness, celebridades ni rasgos que permitan identificar a una persona real.
- No copiar textos, logos, rostros, tipografías propietarias ni composiciones de
  `imgs/store/oraculo/...`, `public/imgs/image22.jpeg` o
  `public/imgs/image19.jpeg`; esas imágenes solo orientan color, atmósfera y
  jerarquía editorial.
- Registrar en `IMAGES.md` ruta física, ruta pública, uso, dimensión real, peso real,
  prompt exacto, herramienta, fecha y la declaración de anonimato/ilustración.

## Siguiente agente

Plan listo en `TASKS.md`. **Siguiente paso urgente: invoca al `disenador` con el
briefing de imágenes.** Cuando TI1-TI9 y T10 estén completos, invoca al agente
`dev` para implementar T11-T21 en el orden indicado; después ejecuta T22 con QA.
