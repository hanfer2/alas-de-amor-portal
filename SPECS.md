# SPEC — Armonía visual integral del portal
Generado por: agente po
Fecha: 2026-08-18
Estado: ✅ Aprobado

## Objetivo de negocio
Mejorar el contraste, la jerarquía visual y la percepción de calidad de todo el
portal Alas de Amor. La implementación cubrirá las siete rutas y el shell
compartido, con atención especial a las cards de **Sanaciones**, las cards de
`/testimonios` y los títulos/subtítulos de las secciones hero.

El visitante debe identificar rápidamente títulos, descripción, iconos,
metadata y llamadas a la acción sin perder los degradados violetas, el menú ni
la atmósfera etérea que ya forman parte de la marca.

La propuesta debe tomar como referencia la comunicación visual del oráculo:
lavanda, azul claro, rosa, rojo coral, dorado, alas y tipografía editorial,
integrándola con los tokens actuales de la marca en lugar de reemplazarlos.

## Usuario objetivo
Visitante del portal que compara terapias, intenta entender qué ofrece cada
servicio y busca señales visuales de confianza antes de agendar o leer un
testimonio.

## Alcance
### Incluye
- Propuesta visual del `disenador` antes de cualquier implementación.
- Revisión de color y contraste para cards, secciones, títulos, subtítulos e
  iconos de `/`, `/nosotros`, `/servicios`, `/agendar`, `/contacto`,
  `/testimonios` y `/blog`, incluyendo Header, Footer y menú móvil cuando
  afecten la armonía visual.
- Implementación integral del sistema visual aprobado en todo el portal, no
  solo en Sanaciones y Testimonios.
- Nueva jerarquía de card donde icono, título, descripción, metadata, precio y
  CTA tengan roles visuales diferenciados.
- Nueva familia de iconos/ilustraciones para las tres cards de Sanaciones,
  con más riqueza visual y color, manteniendo consistencia entre sí.
- Tratamiento de títulos grandes inspirado en la tipografía editorial/script de
  las referencias de oráculo, con legibilidad en español e inglés.
- Seis avatares generados, anónimos y diferenciados para las seis cards de
  testimonios actuales.
- Estrellas de rating en dorado, visibles y accesibles.
- Armonización de títulos grandes y descripciones en todas las pantallas para
  que no compartan un color de bajo énfasis.
- Iconos decorativos de secciones/hero más coloridos, visibles y expresivos,
  aplicando la misma armonía visual aprobada para las cards.
- Documentación de assets nuevos en `IMAGES.md`.

### NO incluye (fuera de alcance)
- Cambiar copy, nombres, precios, duración o contenido clínico de servicios.
- Cambiar el flujo de agenda, WhatsApp, formularios o el ContactLauncher.
- Eliminar o reemplazar el fondo blanco cálido, los degradados violetas, los
  orbes, el Header, el Footer, el menú móvil o el lenguaje visual global; deben
  conservarse y armonizarse con la propuesta.
- Presentar rostros generados como fotografías de clientes reales.
- Copiar literalmente textos, logos, rostros, tipografías propietarias o
  composiciones de las imágenes de referencia.
- Implementar código antes de que el usuario revise y apruebe la propuesta del
  `disenador`.
- Sustituir toda la paleta actual por una paleta roja, azul o dorada.
- Limitar la implementación final a `/servicios` y `/testimonios`; el alcance
  aprobado es el portal completo.

## Historia(s) de usuario
- Como visitante, quiero distinguir visualmente el título, la explicación y la
  acción de cada sanación para entenderla y decidir si deseo agendar.
- Como visitante, quiero ver iconos expresivos y coherentes con cada sanación
  para reconocer rápidamente la intención de la card.
- Como visitante, quiero leer títulos grandes con personalidad de oráculo sin
  perder legibilidad en mobile, desktop, español o inglés.
- Como visitante, quiero percibir testimonios humanos y confiables mediante
  avatares ilustrativos anónimos y una valoración de estrellas doradas.
- Como responsable de marca, quiero que los nuevos colores amplíen la
  identidad de Alas de Amor sin romper sus tonos violeta, crema y etéreos.
- Como visitante, quiero que los títulos y descripciones de cada pantalla
  tengan contraste y jerarquía distintos para entender qué es principal.
- Como responsable de marca, quiero que los iconos decorativos de todas las
  pantallas tengan color y presencia suficientes para no desaparecer sobre los
  degradados existentes.

## Criterios de aceptación (lenguaje de negocio, verificables)
- [ ] CA1: El `disenador` entrega `UI-IMPROVEMENTS.md` antes de cualquier
  cambio de código, con propuesta de paleta, cards, iconos, tipografía,
  avatares y estrellas.
- [ ] CA2: La propuesta incluye valores de color y una matriz de contraste
  para títulos, cuerpo, metadata, CTA, fondos e iconos; cada combinación de
  texto normal cumple al menos 4.5:1 y texto grande al menos 3:1.
- [ ] CA3: La propuesta distingue visualmente icono, título, descripción,
  metadata/precio y CTA; no dependen de un único color para comunicar
  jerarquía.
- [ ] CA4: La propuesta presenta tres iconos/ilustraciones diferenciables para
  Sanación niño interior, Sanación mamá y Sanación papá, alineados con los
  conceptos y con un lenguaje visual común.
- [ ] CA5: La propuesta toma como referencias explícitas el oráculo indicado,
  `public/imgs/image22.jpeg` y `public/imgs/image19.jpeg`, y explica qué se
  reutiliza de su color, atmósfera o tipografía sin copiar sus elementos.
- [ ] CA6: La propuesta define títulos grandes con personalidad editorial,
  fallback legible y comportamiento responsive en 375px y desktop.
- [ ] CA7: La propuesta define seis avatares generados, anónimos, diversos y
  no identificables como personas reales, uno por testimonio actual.
- [ ] CA8: Las estrellas de rating se proponen en dorado con contraste
  suficiente y una alternativa accesible equivalente a la valoración visual.
- [ ] CA9: Todo asset nuevo tiene nombre, formato, dimensión, peso objetivo,
  ubicación y uso propuesto para incorporarlo a `IMAGES.md`.
- [ ] CA10: La propuesta mantiene la identidad de marca actual y limita los
  acentos nuevos a dorado, rojo coral y azul claro/aqua controlado; no usa
  neón, amarillo puro ni verde saturado.
- [ ] CA11: El usuario aprueba explícitamente `UI-IMPROVEMENTS.md`; solo
  después el Tech-Lead puede convertirlo en `TASKS.md`.
- [ ] CA12: La implementación posterior conserva responsive, accesibilidad,
  i18n ES/EN, navegación, precios, agenda y regresión de las 7 rutas.
- [ ] CA13: La propuesta revisada y la implementación cubren las siete rutas,
  además del Header, Footer y menú móvil, con una matriz de pantallas afectadas.
- [ ] CA14: La propuesta conserva explícitamente los fondos cálidos, degradados
  violetas, orbes, menú y shell actuales; ningún cambio de fondo global se
  aprueba como parte de esta iniciativa.
- [ ] CA15: En títulos como `Quiénes Somos`, el título y la descripción tienen
  contraste, peso y color diferenciados; el resultado conserva armonía sobre el
  degradado existente y se valida en 375px y desktop.
- [ ] CA16: Los iconos decorativos de hero/sección y los iconos de cards tienen
  color, contraste y presencia suficientes para ser visibles sobre cada fondo;
  no se acepta un SVG monocromático de baja opacidad como estado principal.
- [ ] CA17: La propuesta revisada registra como decisiones aprobadas Variante A,
  avatares actuales, acentos dorado/coral/aqua y uso de Georgia para títulos;
  cualquier desviación debe volver a negocio antes del Tech-Lead.

## Contenido / copy (si aplica)
No se solicita copy nuevo. Se conservan los textos actuales de `es.json` y
`en.json`; el trabajo inicial es visual y de jerarquía.

La valoración existente de cada testimonio es `5`; debe seguir representándose
visualmente como cinco estrellas doradas y exponerse de forma accesible sin
inventar una valoración distinta.

Decisiones de negocio aprobadas para la propuesta revisada:

- Variante A para las cards de Sanaciones.
- Avatares ilustrativos/anónimos propuestos por el Diseñador.
- Acentos dorado, rojo coral y azul claro/aqua controlado.
- Georgia como tipografía display aceptada para títulos grandes, con fallback
  serif seguro y legible.
- Aplicación del sistema visual en el portal completo.
- Conservación del fondo blanco cálido, degradados violetas, menú y shell
  globales actuales.

## Imágenes necesarias

| Página | Sección / Componente | Descripción visual | ¿Existe en IMAGES.md? | Acción |
|--------|---------------------|--------------------|-----------------------|--------|
| `/servicios` | Categoría Sanaciones → icono Sanación niño interior | Icono/ilustración expresivo, espiritual y legible en card; símbolo de cuidado, transformación o alas; violeta, dorado, rojo coral y azul claro de marca | ❌ No | El `disenador` debe proponer y generar `gen-sanaciones-icon-nina.webp` o formato vectorial equivalente |
| `/servicios` | Categoría Sanaciones → icono Sanación mamá | Icono/ilustración diferenciado para vínculo materno, cálido y no literal; mismo sistema visual | ❌ No | El `disenador` debe proponer y generar `gen-sanaciones-icon-mama.webp` o formato vectorial equivalente |
| `/servicios` | Categoría Sanaciones → icono Sanación papá | Icono/ilustración diferenciado para vínculo paterno, equilibrado y no literal; mismo sistema visual | ❌ No | El `disenador` debe proponer y generar `gen-sanaciones-icon-papa.webp` o formato vectorial equivalente |
| `/testimonios` | Card de María G. → avatar | Rostro generado, anónimo, cálido y natural; no representa a una persona real identificable | ❌ No | Generar `gen-testimonio-avatar-01.webp` |
| `/testimonios` | Card de Carlos R. → avatar | Rostro generado, anónimo y visualmente distinto del resto; diversidad de edad y expresión | ❌ No | Generar `gen-testimonio-avatar-02.webp` |
| `/testimonios` | Card de Ana P. → avatar | Rostro generado, anónimo y coherente con lectura angelical | ❌ No | Generar `gen-testimonio-avatar-03.webp` |
| `/testimonios` | Card de Laura M. → avatar | Rostro generado, anónimo y coherente con bienestar y equilibrio | ❌ No | Generar `gen-testimonio-avatar-04.webp` |
| `/testimonios` | Card de Daniel S. → avatar | Rostro generado, anónimo y coherente con calma y meditación | ❌ No | Generar `gen-testimonio-avatar-05.webp` |
| `/testimonios` | Card de Isabella R. → avatar | Rostro generado, anónimo y coherente con crecimiento espiritual | ❌ No | Generar `gen-testimonio-avatar-06.webp` |

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

- El problema actual está en `/servicios`, categoría **Sanaciones**:
  el fallback usa un SVG concéntrico monocromático (`text-reiki-400` con
  opacidad baja), y el color de icono, título y contenido no crea énfasis.
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
- Los títulos grandes deben usar Georgia (o su fallback serif seguro) para
  tomar la intención editorial del oráculo, conservar legibilidad y funcionar
  en ES/EN. No se debe sustituir por una script ornamental en copy funcional.
- Los rostros generados son avatares ilustrativos/anónimos; no deben afirmar
  que son fotografías de clientes reales ni usar likeness de personas reales.
- Cada asset nuevo debe quedar documentado en `IMAGES.md`, con formato
  preferente WebP, peso objetivo menor a 200 KB para avatares/iconos y
  dimensiones aproximadas de 400×400 o 512×512.
- Antes de que el Tech-Lead escriba `TASKS.md`, el `disenador` debe producir
  una propuesta revisada de `UI-IMPROVEMENTS.md` y su HTML visual, con matriz
  del portal completo, jerarquía de títulos, iconos de hero/sección, cards,
  avatares y estrellas. No se implementa código antes de revisar esa propuesta.
- No cambiar copy funcional, precios, enlaces de agenda ni comportamiento de
  formularios como parte de esta iniciativa.

## Preguntas obligatorias para el Diseñador

- ¿Cómo se aplica la Variante A a cada pantalla y categoría sin convertir
  todas las secciones en una copia idéntica de la card de Sanaciones?
- ¿Qué par de colores, peso y tamaño separa el título de la descripción en
  títulos como `Quiénes Somos` sobre el degradado existente, y qué ratios de
  contraste obtiene en ES/EN y 375px/desktop?
- ¿Qué tratamiento concreto recibe cada icono decorativo de hero/sección para
  ganar color y presencia sin modificar el fondo global, los degradados, el
  menú ni el shell?
- ¿Qué acento usa cada pantalla y qué regla evita que dorado, coral o aqua se
  conviertan en ruido visual o texto de bajo contraste?
- ¿Qué escalas, pesos y line-height de Georgia se aplican a H1, H2, títulos de
  card y descripción para conservar la jerarquía en las siete rutas?
- ¿Cómo se mantienen los seis avatares aprobados como ilustraciones anónimas y
  qué fallback se muestra si un asset no carga?

## Entregable previo a implementación

El siguiente paso obligatorio es invocar al agente `disenador` para producir
`UI-IMPROVEMENTS.md` en modo propuesta. Ese documento debe incluir:

1. Paleta propuesta con valores y matriz de contraste para texto, fondos,
   títulos, metadata, iconos y estrellas.
2. Variante A seleccionada para Sanaciones y cómo se adapta al portal
   completo; B/C quedan documentadas solo como alternativas descartadas.
3. Sistema de iconos/ilustraciones de las tres Sanaciones y catálogo de iconos
   decorativos de las siete pantallas, con más color, contraste y presencia.
4. Tratamiento de títulos grandes y descripciones inspirado en las referencias,
   usando Georgia, incluyendo valores concretos, fallback y responsive.
5. Tratamiento de los seis avatares y estrellas doradas en testimonios.
6. Demostración explícita de que los fondos cálidos, degradados violetas,
   orbes, Header, Footer y menú no se reemplazan.
7. Lista de assets nuevos y actualización propuesta para `IMAGES.md`.

No se debe invocar al `tech-lead` ni al `dev` hasta que el usuario apruebe la
propuesta visual del `disenador`.
