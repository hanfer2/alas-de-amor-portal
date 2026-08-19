# Auditoría de Armonía Visual

**Estado:** ✅ APROBADA AUTOMÁTICAMENTE — implementación pendiente
**Base:** `SPECS.md`, `TASKS.md`, `IMAGES.md`, `visual-harmony-audit`
**Fecha:** 2026-08-18
**Alcance:** `/`, `/nosotros`, `/servicios`, `/agendar`, `/contacto`, `/testimonios`, `/blog`

Este documento es una auditoría de diseño, no una implementación. El Tech-Lead puede convertir cada hallazgo en tareas atómicas con DOF. No se modificaron `src/`, `IMAGES.md`, `TASKS.md` ni `SPECS.md`.

## Decisión De Diseño

Conservar el blanco cálido, los degradados violetas, los orbes, Georgia para display, Inter para cuerpo, Header, Footer, menú, copy, i18n y flujos. La corrección debe actuar en el área local del recurso visual:

- Reservar una franja segura debajo del Header fijo antes de posicionar una decoración de hero.
- Sustituir símbolos genéricos por siluetas semánticas de 2 px o más, con dos acentos controlados y halo local.
- Separar H1 y descripción con al menos `12px`; usar una placa local `#fefcfb` o `#f5f3ff` cuando el peor punto del degradado no alcance contraste.
- Mantener los SVG decorativos con `aria-hidden="true"`; el texto, los labels y los controles siguen comunicando el significado.
- No convertir las rutas en la Variante A de Sanaciones. Esa variante queda limitada a sus tres cards según `TASKS.md`.

## Evidencia De Auditoría

Se inspeccionaron los siete `page.tsx`, `HeroDecoration.tsx`, `Header.tsx`, `Footer.tsx`, `globals.css`, `SPECS.md`, `TASKS.md` e `IMAGES.md`. También se recorrió el runtime local en ES/EN a 375, 768 y 1440 CSS px.

Hallazgos medidos en el DOM renderizado:

- `Header` queda fijo en `z-index: 50`; en desktop mide aproximadamente `129px` de alto y en mobile entre `107px` y `129px` según el estado del menú.
- La decoración de Inicio mide `500x250px` y parte de `y=0`; a 1440px ocupa aproximadamente `x=925..1425`, `y=0..250`, por lo que entra en toda la banda del Header. A 375px parte de `x=-140`, y el `overflow-hidden` del hero corta su silueta.
- Las decoraciones de hero de Nosotros, Servicios, Agendar, Contacto, Testimonios y Blog empiezan entre `y=20` y `y=46`, dentro de la banda del Header en mobile. No quedan por encima del menú gracias a `z-50`, pero quedan geométricamente invadiendo/siendo ocultadas por esa capa.
- El documento no presentó overflow horizontal en los tres viewports auditados; eso no corrige el problema de encuadre porque el recorte ocurre dentro de contenedores con `overflow-hidden`.
- El CSS servido por el runtime de auditoría no emitió las reglas `.role-h1`, `.role-h2`, `.role-subtitle`, `.role-description` y `.hero-icon-halo`, aunque están declaradas en `src/app/globals.css:173-293`. El H1 renderizado cayó a `Inter 16px / 400 / 24px` y la descripción a `Inter 16px / 400 / 24px`, sin la jerarquía declarada. El Tech-Lead debe verificar la emisión de estas clases en el build antes de aprobar T11/T12.
- `gradient-hero`, `gradient-spiritual`, los orbes y los degradados globales sí se conservaron en el runtime. El problema no requiere reemplazarlos.

La ausencia de overflow no se considera PASS. La decisión visual debe validar encuadre, contraste, z-index, presencia y relación semántica, no solo carga del asset o consola limpia.

## Matriz De Rutas

Cada fila es un diagnóstico específico de una ruta. Los IDs son estables y deben conservarse entre rondas.

| ID | Ruta | Archivo:línea | Elemento | Problema observable | Causa CSS/DOM | Propuesta exacta | Prioridad | Criterio QA |
|---|---|---|---|---|---|---|---|---|
| `ISS-VIS-OVERLAP-HOME-HERO` / `ISS-VIS-CROP-HOME-HERO` | `/` | `src/app/page.tsx:106-109`; `src/components/HeroDecoration.tsx:1-14`; `src/components/Header.tsx:49-54` | Alas decorativas del hero junto a logo, foto, H1 y descripción | El recurso aparece desde el borde superior, entra en la banda del menú y en mobile su lienzo de `500px` se sale por la izquierda; la silueta no explica qué representa. La descripción también queda visualmente subordinada al degradado y a la decoración. | `section` usa `pt-28` y `overflow-hidden`, pero la decoración es `absolute top-0 right-0`, sin zona segura ni z-index local. `AngelFeathers` es un SVG ancho (`400x200`) con opacidad efectiva baja; H1/descripción dependen de roles cuya emisión debe verificarse. | Mantener el SVG como aura de marca, pero ubicarlo dentro de un rail visual relativo de la columna de foto, debajo del Header: `inset` mínimo `16px` respecto al contenedor, `max-width:280px` en 375px y `420px` en desktop, `pointer-events:none`, z-index inferior al contenido. Alinear las alas con el círculo de Liliana para que signifiquen acompañamiento, no decoración suelta; envolver H1 + descripción en placa local solo si el peor píxel falla; conservar foto, logo y dos CTA. | Alta | A 375/768/1440 el bounding box no cruza la franja del Header ni los CTA, no hay crop, la silueta completa queda dentro del contenedor y el SVG mantiene `aria-hidden=true`. En ES/EN, H1 dominante, descripción separada `>=12px` y foto conservan su prioridad visual. |
| `ISS-VIS-LOW-ENERGY-NOSOTROS` / `ISS-VIS-OVERLAP-NOSOTROS-HERO` | `/nosotros` | `src/app/nosotros/page.tsx:33-65`; `src/components/HeroDecoration.tsx:36-64` | `LotusMandala` del hero, H1/descripción y mini-iconos de credenciales | El loto tiene presencia de adorno genérico, entra en el Header en mobile y sus formas se perciben tenues; todas las credenciales repiten el mismo sello monocromo, sin diferencia de significado. La descripción comparte poco aire con el título. | `absolute top-10 right-10`, `opacity-90` en el wrapper y pétalos con `opacity=0.62`; las seis cards repiten el mismo SVG de certificado en `page.tsx:182-198`; el hero queda expuesto a orbes/degradado. | Conservar el loto, pero darle una composición de flor abierta con núcleo dorado, contorno coral de `2px` y centro aqua; colocarlo en una caja segura posterior al Header. Separar H1/descripción `>=12px` y añadir placa local condicional. Para credenciales, usar seis variaciones SVG inline de contorno ligero (energía, barras, luz, mediumnidad, ángel, crecimiento), una por credencial, dentro del mismo halo; el texto sigue siendo la fuente semántica. | Alta | El H1 y descripción no quedan debajo del loto a 375px, respiran sobre una superficie medible y no pierden contraste; cada credencial tiene silueta distinguible a 24px, contraste de gráfico `>=3:1`, `aria-hidden=true` y no altera el orden de lectura. |
| `ISS-VIS-LOW-ENERGY-SERVICIOS` / `ISS-VIS-BLUR-SERVICIOS-FALLBACK` | `/servicios` | `src/app/servicios/page.tsx:36-62`, `:224-272`; `src/components/HeroDecoration.tsx:17-34` | `EnergyWaves`, H1/descripción, icono de hero y fallback de `ServiceBlock` | El hero parece una diana concéntrica sin relación clara con servicios; los fallbacks son círculos monocromos con `opacity=0.30` y no aportan significado a la categoría. H1 y descripción pueden perder jerarquía sobre el degradado en el inicio de la lista. | SVG concéntrico de baja densidad semántica; fallback compuesto por tres círculos y un punto, con blur alrededor y sin icono contextual. El hero de `600x200px` también invade la franja superior en mobile; roles tipográficos necesitan validación de emisión. | Mantener filas, categorías, precios y CTA. Redibujar `EnergyWaves` como tres ondas asimétricas que convergen en una chispa/semilla central, con contornos aqua, coral y dorado de `2px` y halo local. Cambiar el fallback por un placeholder SVG contextual por categoría, no concéntrico, dentro de una caja de proporción fija; en mobile limitar el hero a `min(360px, calc(100vw - 32px))` y ubicarlo debajo de la zona segura del Header. Dar placa local a H1/descripción si el contraste real falla. | Alta | A 375/768/1440 el icono completo queda visible sin desplazar ni cubrir H1, descripción, precios, fotos o CTA; el fallback 404 mantiene la misma caja sin layout shift; cada símbolo se entiende por forma y no por color solamente. |
| `ISS-VIS-SPACING-AGENDAR-STEPS` / `ISS-VIS-LOW-ENERGY-AGENDAR` | `/agendar` | `src/app/agendar/page.tsx:11-43`, `:57-74`; `src/components/HeroDecoration.tsx:106-124` | `CalendarWings`, H1/descripción y marcadores 1/2/3 | Los círculos 1/2/3 se sienten genéricos, pequeños y sin jerarquía; el número se pierde dentro del gradiente. El calendario del hero entra en la zona fija superior y la descripción queda demasiado próxima al fondo difuminado. | Marcador de `64x64px` con `role-icon-halo` + gradiente y `text-2xl`; no hay conector ni anillo nítido. `CalendarWings` usa `absolute top-10 right-16`; copy del hero depende de la superficie degradada. | Mantener los tres pasos y su copy. Usar marcador de `72x72px` desktop / `64x64px` mobile con fondo crema, borde exterior sólido de `3px`, anillo interior de `1px`, número Georgia `700` en ciruela y acento único por paso. Añadir conector de `1px` solo entre marcadores en desktop; en mobile conservar una columna/flujo apilado sin línea que cruce el texto. Mover `CalendarWings` a una caja posterior al Header, tratarlo como calendario + alas y envolver H1/descripción en placa local si el contraste real lo exige. | Alta | Los números tienen bounding box estable, no blur ni `filter`, alcanzan `>=3:1` como gráfico; H1/descripción quedan separados `>=12px`, se leen en ES/EN y no generan scroll horizontal a 375px. El formulario, foco y WhatsApp no cambian. |
| `ISS-VIS-LOW-ENERGY-CONTACTO` / `ISS-VIS-CONTRAST-CONTACTO` | `/contacto` | `src/app/contacto/page.tsx:12-44`, `:89-249`; `src/components/HeroDecoration.tsx:90-104` | `DovePeace`, H1/descripción e iconos de canales | La paloma es una silueta abstracta de baja lectura y queda en la franja del Header; teléfono, email, WhatsApp, ubicación y horario comparten el mismo halo aqua, por lo que pierden jerarquía y energía. La descripción queda expuesta al degradado antes del formulario. | Wrapper `absolute top-8 right-8` con `opacity-90`; paths de paloma con `opacity=0.58/0.62`; cuatro bloques reutilizan `role-icon-halo` sin `data-accent`; no hay placa local en el hero. | Mantener la imagen lateral, formulario, canales y sticky. Reducir la paloma a una marca de paz/puente de `120x72px` en una caja segura, con contorno coral + ala aqua + núcleo dorado. Aplicar un acento local controlado por canal: aqua para teléfono/email, coral para WhatsApp y dorado para horario/ubicación; separar H1/descripción `>=12px` y añadir placa local solo si el degradado falla; añadir borde/label visual, nunca depender solo del color. | Media-Alta | Paloma completa fuera de la franja del Header a 375/768/1440; H1/descripción conservan jerarquía y `>=4.5:1`; cada canal conserva label y foco independiente; iconos tienen silueta legible a 24px, no se confunden con estados de error. |
| `ISS-VIS-LOW-ENERGY-TESTIMONIOS` / `ISS-VIS-BLUR-TESTIMONIOS-HERO` | `/testimonios` | `src/app/testimonios/page.tsx:45-77`, `:149-198`; `src/components/HeroDecoration.tsx:66-88` | `SparkleStars`, H1/descripción, avatares, estrellas y fallback de avatar | Las estrellas del hero se leen como partículas sin relación con testimonios; los avatares sí cargan, pero el fallback de monograma y las cinco estrellas no forman un sistema visual único. La descripción del hero queda sobre el mismo campo degradado que las partículas. | `SparkleStars` usa diez formas pequeñas con opacidades de `0.35..0.55`; avatar/fallback comparte un círculo básico; la valoración se comunica principalmente por cinco SVG repetidos; el copy no tiene placa local condicional. | Mantener los seis testimonios, rating 5, quotes y avatares anónimos de `IMAGES.md`. Convertir el hero en comillas + destellos: dos comillas grandes de coral con una chispa dorada y trazos aqua, siempre decorativo. Separar H1/descripción `>=12px` y usar placa local si el peor punto falla. Mantener avatar circular de `56..64px`, halo lavanda y fallback de monograma; acompañar estrellas con texto accesible equivalente y borde de card, sin añadir copy visible nuevo. | Media-Alta | En mobile y desktop el hero no compite con H1/descripción ni cards; cada avatar 404 conserva halo, monograma, quote, nombre, localidad, terapia y rating; cinco estrellas visibles, `aria-label` equivalente y contraste de gráfico `>=3:1`. |
| `ISS-VIS-LOW-ENERGY-BLOG` / `ISS-VIS-OUT-OF-PLACE-BLOG` / `ISS-VIS-OVERLAP-BLOG-HERO` | `/blog` | `src/app/blog/page.tsx:26-58`; `src/components/HeroDecoration.tsx:126-143` | `OpenBook` del hero, H1/descripción y relación con las cards editoriales | El libro actual es un icono genérico, está separado del contenido, entra en la franja del Header y sus líneas internas se pierden; no comunica lectura editorial ni conecta con categoría/fecha/excerpt. La descripción no tiene una superficie estable frente al degradado. | `absolute bottom-5 right-10`, `opacity-90`, lienzo `200x150px` estirado a `208x160px`; relleno global degradado y líneas de texto con `opacity=0.55`; H1/descripción dependen de roles cuya emisión debe verificarse. | Reemplazar visualmente el libro por un marcador editorial: páginas abiertas, lomo, cinta/bookmark y tres líneas de lectura, con una chispa/hoja mínima que repita los acentos de las cards. Colocarlo en un rail seguro junto al título en desktop y encima del bloque de copy en mobile, nunca sobre nav ni metadata. Separar H1/descripción `>=12px` y añadir placa local condicional. Resolverlo como SVG/CSS inline placeholder; no crear una miniatura ni cambiar posts, fechas, links o newsletter. | Alta | A 375/768/1440 la silueta no entra en el Header, no se corta y queda relacionada espacialmente con la grilla; H1, descripción, categoría/fecha, H2, excerpt y enlace conservan wraps naturales y contraste en ES/EN; SVG `aria-hidden=true`. |

## Hallazgos Compartidos

| ID | Archivo:línea | Observación | Corrección exacta | QA |
|---|---|---|---|---|
| `ISS-VIS-CONTRAST-GLOBAL-ROLES` | `src/app/globals.css:173-293`; uso en las siete rutas | El sistema declara roles correctos, pero el CSS servido en la auditoría no los emitió: H1 y descripciones quedaron en Inter `16/400/24`. Además, los textos están sobre `gradient-hero` con orbes y no tienen placa local. | Verificar el pipeline Tailwind/PostCSS para que los roles se emitan realmente y aplicar la pareja declarada: H1 Georgia, H2 Georgia, descripción Inter. En cada hero envolver H1 + descripción en una zona segura; si el peor pixel del degradado falla, añadir placa local opaca con `padding:16px 20px`, radio `20px` y separación mínima de `12px`, sin cambiar el fondo. | Computed styles en ES/EN a 375/768/1440; H1 máximo tres líneas a 375px; texto normal `>=4.5:1`, grande `>=3:1`; repetir con `prefers-reduced-motion: reduce`. |
| `ISS-VIS-SPACING-GLOBAL-HERO` | `src/components/HeroDecoration.tsx:146-152`; `src/app/globals.css:325-345`; hero de cada ruta | Orbes con `blur-3xl` y degradados dinámicos quedan cerca del copy. Los badges de Inicio agregan `backdrop-blur-sm`, lo que puede borrar aún más la descripción cuando los planos coinciden. | No tocar el fondo ni eliminar orbes. Desplazar el copy a un plano liso mediante la placa local solo en las zonas que fallen; dejar decoración con `pointer-events:none`, `aria-hidden`, z-index inferior y un límite de opacidad de forma entre `0.55..0.85`, sin blur sobre el texto. | Medir el peor punto real detrás de H1, descripción, metadata, CTA, iconos y estrellas; ningún texto toca una zona difuminada; reduced motion deja formas estáticas sin ocultarlas. |
| `ISS-VIS-SAFEZONE-SHELL` | `src/components/Header.tsx:49-171`; `src/components/Footer.tsx:28-132` | Header y Footer no son el problema funcional, pero cualquier hero absoluto que use `top:0..40px` se compone debajo del Header fijo y parece cortado o superpuesto. | No modificar Header, Footer ni menú. Establecer en cada hero un safe inset local equivalente a la altura observada del Header + `16px`; mantener decoración `z-index:0` y contenido `z-index:1` dentro del hero. | Menú desktop/mobile abre y cierra igual; ningún SVG o imagen cruza el bounding box del Header; Footer, links, foco y navegación regresan sin cambios. |

## Inventario De Recursos

### Se resuelve con SVG/CSS, sin asset raster nuevo

- Marcador editorial de Blog, alas seguras de Inicio, ondas/semilla de Servicios, loto de Nosotros, calendario de Agendar, paloma de Contacto y comillas/destellos de Testimonios.
- Marcadores nítidos 1/2/3, conectores, halos, placas de copy, bordes, sombras y color de los iconos de canales.
- Variantes de credenciales y fallbacks de servicios/testimonios. Deben seguir siendo `aria-hidden` si son decorativos y tener caja estable en 404.

### Asset nuevo opcional, solo si Diseño lo exige tras el prototipo

No se requiere un raster nuevo para aprobar esta auditoría. Si el negocio prefiere una textura editorial real en Blog en vez del placeholder SVG, el Diseñador deberá entregar **un** `WebP` 600x400, menor de 200 KB, sin texto/logos ni rostros, documentado en `IMAGES.md`; no se debe iniciar como dependencia de implementación. La foto de Inicio y la imagen lateral de Agendar/Contacto se conservan.

### Assets ya aprobados, fuera del alcance de generación de esta auditoría

Los tres iconos de Sanaciones y los seis avatares anónimos descritos en `TASKS.md`/`IMAGES.md` se conservan y se validan por encuadre, fallback, anonimato y lectura. Este documento no crea otros archivos ni cambia el inventario.

## Matriz De Contraste

Ratios calculados sobre superficies sólidas con la fórmula WCAG. El valor sobre degradado real debe medirse en el peor pixel del screenshot; si falla, se usa la placa local aprobada.

| Uso | Foreground | Superficie de prueba | Ratio | Regla | Decisión |
|---|---|---|---:|---|---|
| Cuerpo / descripción | `#1e1b4b` | `#fefcfb` | 15.63:1 | 4.5:1 | Cumple |
| H1 / H2 | `#4c1d95` | `#fefcfb` | 10.71:1 | 3:1 grande | Cumple |
| Subtítulo | `#504b73` | `#fefcfb` | 7.91:1 | 4.5:1 | Cumple |
| Metadata dorada | `#8a5a00` | `#fff8e8` | 5.60:1 | 4.5:1 | Cumple |
| Icono aqua | `#0f6675` | `#fefcfb` | 6.46:1 | 3:1 gráfico | Cumple |
| Icono coral | `#b4233f` | `#fefcfb` | 6.31:1 | 3:1 gráfico | Cumple |
| Estrella / gráfico dorado | `#b7791f` | `#fefcfb` | 3.56:1 | 3:1 gráfico | Solo gráfico, no cuerpo |
| CTA blanco | `#ffffff` | `#7c3aed` | 5.70:1 | 4.5:1 | Cumple |
| Texto en lavender | `#1e1b4b` | `#f5f3ff` | 14.58:1 | 4.5:1 | Cumple |

**Gate pendiente:** validar cada combinación en el peor punto de `gradient-hero`, `gradient-spiritual`, `gradient-card` y detrás de orbes. No aprobar por el ratio del color promedio.

## Matriz De Viewport Y Composición

| Ruta | 375px | 768px | 1440px | Composición a aceptar |
|---|---|---|---|---|
| `/` | Alas completas dentro del rail; logo/foto/CTA sin cruce | Foto y copy en dos focos separados | Alas acompañan la foto, nunca el Header | Safe inset, foto primero, decoración secundaria |
| `/nosotros` | Loto bajo Header; H1 y descripción respiran | Loto no invade texto centrado | Loto ocupa esquina segura | Icono + copy con placa solo si mide mal |
| `/servicios` | Ondas no exceden `calc(100vw - 32px)`; filas sin overflow | Hero equilibrado y fallback estable | Categorías conservan filas alternas | Semántica de categoría, no diana |
| `/agendar` | Marcadores y formulario apilados, números nítidos | Tres pasos legibles sin línea invasiva | Conector entre pasos y formulario alineado | Números primero, decoración secundaria |
| `/contacto` | Paloma compacta; canales apilados | Imagen/formulario sin competencia | Dos columnas + tarjeta sticky intactas | Acento por canal sin color único |
| `/testimonios` | Comillas no invaden H1; cards de una columna | Cards con avatar y rating estables | Grilla respira; hero no compite | Avatar + quote + estrellas como sistema |
| `/blog` | Marcador editorial encima del copy, sin crop | Icono y H1 comparten rail seguro | Icono conectado al inicio de grilla | Lectura/editorial, no libro genérico |

## Prototipo Y Criterio De Pase

Abrir `design-proposals/visual-harmony-audit/index.html`. El HTML es autocontenido, no usa CDN, muestra placeholders SVG rotulados `SVG placeholder · no asset final` y contiene comparativas de Blog, Inicio, Agendar, títulos/descripciones y los iconos de Nosotros, Servicios, Contacto y Testimonios.

El Tech-Lead puede convertir esta matriz en tareas. La implementación posterior debe ejecutar `npm run lint`, `npm run build`, regresión ES/EN, screenshots con bounding boxes a 375/768/1440, teclado, reduced motion, SEO y simulación de 404 de los assets ya aprobados.

**Cierre:** ✅ APROBADA AUTOMÁTICAMENTE — implementación pendiente
