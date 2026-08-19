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

---

## Hero Home — Ilustración original de chakras

**Estado:** ✅ APROBADA AUTOMÁTICAMENTE por negocio — pendiente implementación
**Fecha:** 2026-08-19
**Alcance:** reemplazo del SVG `AngelFeathers` en el hero de `/` por una ilustración original de los 7 chakras alineados en la columna (raíz → coronilla).
**Prototipo:** `design-proposals/hero-chakras/index.html` (autocontenido, sin dependencias externas).

### Decisión de diseño

- Silueta humana abstracta y geométrica (cabeza + torso) centrada en el eje `x=150`, con columna energética dorada punteada y asiento/cojín en la base.
- 7 chakras equidistantes: raíz (y=384), sacro (326), plexo solar (268), corazón (208), garganta (152), tercer ojo (94), coronilla (60).
- Cada chakra es distinguible por **forma** (4/6/10/12/16/2/mil pétalos; cuadrado, media luna, rueda, hexagrama, triángulo, ojo, diamante) y por su núcleo tradicional; no depende solo del color.
- **Armadura de marca compartida**: disco/pétalos crema (`#fff8e8`/`#fefcfb`), contorno de marca (violeta `#4c1d95`/`#7c3aed`, dorado `#b7791f`/`#8a5a00`, aqua `#0f6675`, coral `#b4233f`), núcleo dorado `#f2c46d`/`#b7791f` como firma del sistema.
- **Acento tradicional como núcleo interno**: rojo, naranja, amarillo, verde, azul, índigo y violeta con degradado radial suave y halo local del mismo color.
- Trazos de 2–3px, gradientes suaves, halos sutiles y decorativo (`aria-hidden="true"`). El significado lo sigue entregando el texto del hero.

### SVG final

```svg
<svg viewBox="0 0 300 440" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs>
    <linearGradient id="chakraBodyFill" x1="0" y1="0" x2="0" y2="440" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#ffffff"/>
      <stop offset="0.5" stopColor="#fefcfb"/>
      <stop offset="1" stopColor="#fff8e8"/>
    </linearGradient>
    <linearGradient id="chakraBrandStroke" x1="0" y1="0" x2="300" y2="440" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#4c1d95"/>
      <stop offset="0.5" stopColor="#0f6675"/>
      <stop offset="1" stopColor="#b7791f"/>
    </linearGradient>
    <radialGradient id="chakraGoldCore" cx="0.5" cy="0.42" r="0.75">
      <stop offset="0" stopColor="#fbe9b6"/>
      <stop offset="0.55" stopColor="#f2c46d"/>
      <stop offset="1" stopColor="#b7791f"/>
    </radialGradient>
    <radialGradient id="chakraHaloRed" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0.7" stopColor="#d63333" stopOpacity="0.30"/>
      <stop offset="1" stopColor="#d63333" stopOpacity="0"/>
    </radialGradient>
    <radialGradient id="chakraHaloOrange" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0.7" stopColor="#f0761e" stopOpacity="0.30"/>
      <stop offset="1" stopColor="#f0761e" stopOpacity="0"/>
    </radialGradient>
    <radialGradient id="chakraHaloYellow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0.7" stopColor="#f2b400" stopOpacity="0.30"/>
      <stop offset="1" stopColor="#f2b400" stopOpacity="0"/>
    </radialGradient>
    <radialGradient id="chakraHaloGreen" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0.7" stopColor="#1fa35c" stopOpacity="0.30"/>
      <stop offset="1" stopColor="#1fa35c" stopOpacity="0"/>
    </radialGradient>
    <radialGradient id="chakraHaloBlue" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0.7" stopColor="#2f6fe0" stopOpacity="0.30"/>
      <stop offset="1" stopColor="#2f6fe0" stopOpacity="0"/>
    </radialGradient>
    <radialGradient id="chakraHaloIndigo" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0.7" stopColor="#4f46e5" stopOpacity="0.30"/>
      <stop offset="1" stopColor="#4f46e5" stopOpacity="0"/>
    </radialGradient>
    <radialGradient id="chakraHaloViolet" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0.7" stopColor="#8b5cf6" stopOpacity="0.30"/>
      <stop offset="1" stopColor="#8b5cf6" stopOpacity="0"/>
    </radialGradient>
    <radialGradient id="chakraCoreRed" cx="0.5" cy="0.45" r="0.7">
      <stop offset="0" stopColor="#f07575"/>
      <stop offset="0.6" stopColor="#d63333"/>
      <stop offset="1" stopColor="#a42020"/>
    </radialGradient>
    <radialGradient id="chakraCoreOrange" cx="0.5" cy="0.45" r="0.7">
      <stop offset="0" stopColor="#ffb066"/>
      <stop offset="0.6" stopColor="#f0761e"/>
      <stop offset="1" stopColor="#b84e08"/>
    </radialGradient>
    <radialGradient id="chakraCoreYellow" cx="0.5" cy="0.45" r="0.7">
      <stop offset="0" stopColor="#ffe082"/>
      <stop offset="0.6" stopColor="#f2b400"/>
      <stop offset="1" stopColor="#b8860b"/>
    </radialGradient>
    <radialGradient id="chakraCoreGreen" cx="0.5" cy="0.45" r="0.7">
      <stop offset="0" stopColor="#86e0ae"/>
      <stop offset="0.6" stopColor="#1fa35c"/>
      <stop offset="1" stopColor="#117a43"/>
    </radialGradient>
    <radialGradient id="chakraCoreBlue" cx="0.5" cy="0.45" r="0.7">
      <stop offset="0" stopColor="#8fb6ff"/>
      <stop offset="0.6" stopColor="#2f6fe0"/>
      <stop offset="1" stopColor="#1e47a8"/>
    </radialGradient>
    <radialGradient id="chakraCoreIndigo" cx="0.5" cy="0.45" r="0.7">
      <stop offset="0" stopColor="#aeb6ff"/>
      <stop offset="0.6" stopColor="#4f46e5"/>
      <stop offset="1" stopColor="#372fa8"/>
    </radialGradient>
    <radialGradient id="chakraCoreViolet" cx="0.5" cy="0.45" r="0.7">
      <stop offset="0" stopColor="#d1c4ff"/>
      <stop offset="0.6" stopColor="#8b5cf6"/>
      <stop offset="1" stopColor="#5b21b6"/>
    </radialGradient>
    <path id="chakraPetal" d="M0 -20 C9 -7, 9 7, 0 20 C-9 7, -9 -7, 0 -20 Z"/>
    <path id="chakraPetalSlim" d="M0 -20 C5.5 -7, 5.5 7, 0 20 C-5.5 7, -5.5 -7, 0 -20 Z"/>
    <path id="chakraRay" d="M0 -23 L0 -30" stroke="#b7791f" strokeWidth="3" strokeLinecap="round"/>
  </defs>

  <ellipse cx="150" cy="432" rx="64" ry="7" fill="#4c1d95" opacity="0.10"/>
  <path d="M108 420 Q150 433 192 420" stroke="#b4233f" strokeWidth="3" fill="none" strokeLinecap="round"/>
  <path d="M122 428 Q150 437 178 428" stroke="#0f6675" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.8"/>

  <path d="M150 120 L150 394" stroke="#b7791f" strokeWidth="2.5" strokeDasharray="1 7" strokeLinecap="round" opacity="0.85"/>
  <circle cx="150" cy="184" r="2.2" fill="#f2c46d"/>
  <circle cx="150" cy="242" r="2.2" fill="#f2c46d"/>
  <circle cx="150" cy="300" r="2.2" fill="#f2c46d"/>
  <circle cx="150" cy="356" r="2.2" fill="#f2c46d"/>

  <path d="M135 84 L165 84 L173 100 C196 110 214 128 224 150 C234 172 238 200 236 232 C233 280 220 330 200 358 L150 378 L100 358 C80 330 67 280 64 232 C62 200 66 172 76 150 C86 128 104 110 127 100 L135 84 Z" fill="url(#chakraBodyFill)" stroke="url(#chakraBrandStroke)" strokeWidth="3" strokeLinejoin="round"/>
  <path d="M127 100 C136 108 164 108 173 100" stroke="#f2c46d" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
  <path d="M78 148 l5 5 -5 5 -5 -5 Z" fill="#b4233f" opacity="0.85"/>
  <path d="M222 148 l5 5 -5 5 -5 -5 Z" fill="#b4233f" opacity="0.85"/>
  <circle cx="150" cy="86" r="26" fill="url(#chakraBodyFill)" stroke="url(#chakraBrandStroke)" strokeWidth="3"/>

  <g transform="translate(150 384)">
    <circle r="36" fill="url(#chakraHaloRed)"/>
    <circle r="25" fill="none" stroke="#d63333" strokeWidth="2" strokeDasharray="2 5" opacity="0.7"/>
    <g fill="#fff8e8" stroke="#b4233f" strokeWidth="2">
      <use href="#chakraPetal" transform="rotate(0) scale(0.85)"/>
      <use href="#chakraPetal" transform="rotate(90) scale(0.85)"/>
      <use href="#chakraPetal" transform="rotate(180) scale(0.85)"/>
      <use href="#chakraPetal" transform="rotate(270) scale(0.85)"/>
    </g>
    <circle r="12" fill="#fefcfb" stroke="#a42020" strokeWidth="2"/>
    <rect x="-7" y="-7" width="14" height="14" transform="rotate(45)" fill="none" stroke="#a42020" strokeWidth="2"/>
    <circle r="6" fill="url(#chakraCoreRed)" stroke="#8a1c1c" strokeWidth="2"/>
    <circle r="2" fill="#f2c46d"/>
  </g>

  <g transform="translate(150 326)">
    <circle r="36" fill="url(#chakraHaloOrange)"/>
    <circle r="25" fill="none" stroke="#f0761e" strokeWidth="2" strokeDasharray="2 5" opacity="0.7"/>
    <g fill="#fff8e8" stroke="#b7791f" strokeWidth="2">
      <use href="#chakraPetal" transform="rotate(0) scale(0.9)"/>
      <use href="#chakraPetal" transform="rotate(60) scale(0.9)"/>
      <use href="#chakraPetal" transform="rotate(120) scale(0.9)"/>
      <use href="#chakraPetal" transform="rotate(180) scale(0.9)"/>
      <use href="#chakraPetal" transform="rotate(240) scale(0.9)"/>
      <use href="#chakraPetal" transform="rotate(300) scale(0.9)"/>
    </g>
    <circle r="11" fill="#fefcfb" stroke="#b84e08" strokeWidth="2"/>
    <path d="M0 -8 A9 9 0 1 0 0 8 A5 5 0 1 1 0 -8 Z" fill="url(#chakraCoreOrange)" stroke="#b84e08" strokeWidth="2"/>
    <circle r="2.5" fill="#f2c46d"/>
  </g>

  <g transform="translate(150 268)">
    <circle r="40" fill="url(#chakraHaloYellow)"/>
    <circle r="30" fill="none" stroke="#f2b400" strokeWidth="2" strokeDasharray="2 5" opacity="0.7"/>
    <g stroke="#b7791f">
      <use href="#chakraRay" transform="rotate(0)"/>
      <use href="#chakraRay" transform="rotate(36)"/>
      <use href="#chakraRay" transform="rotate(72)"/>
      <use href="#chakraRay" transform="rotate(108)"/>
      <use href="#chakraRay" transform="rotate(144)"/>
      <use href="#chakraRay" transform="rotate(180)"/>
      <use href="#chakraRay" transform="rotate(216)"/>
      <use href="#chakraRay" transform="rotate(252)"/>
      <use href="#chakraRay" transform="rotate(288)"/>
      <use href="#chakraRay" transform="rotate(324)"/>
    </g>
    <circle r="22" fill="#fff8e8" stroke="#8a5a00" strokeWidth="3"/>
    <circle r="13" fill="url(#chakraCoreYellow)" stroke="#b8860b" strokeWidth="2"/>
    <circle r="3.5" fill="#ffffff" stroke="#8a5a00" strokeWidth="2"/>
  </g>

  <g transform="translate(150 208)">
    <circle r="42" fill="url(#chakraHaloGreen)"/>
    <circle r="32" fill="none" stroke="#1fa35c" strokeWidth="2" strokeDasharray="2 5" opacity="0.7"/>
    <g fill="#fff8e8" stroke="#0f6675" strokeWidth="2">
      <use href="#chakraPetal" transform="rotate(0) scale(1.2)"/>
      <use href="#chakraPetal" transform="rotate(30) scale(1.2)"/>
      <use href="#chakraPetal" transform="rotate(60) scale(1.2)"/>
      <use href="#chakraPetal" transform="rotate(90) scale(1.2)"/>
      <use href="#chakraPetal" transform="rotate(120) scale(1.2)"/>
      <use href="#chakraPetal" transform="rotate(150) scale(1.2)"/>
      <use href="#chakraPetal" transform="rotate(180) scale(1.2)"/>
      <use href="#chakraPetal" transform="rotate(210) scale(1.2)"/>
      <use href="#chakraPetal" transform="rotate(240) scale(1.2)"/>
      <use href="#chakraPetal" transform="rotate(270) scale(1.2)"/>
      <use href="#chakraPetal" transform="rotate(300) scale(1.2)"/>
      <use href="#chakraPetal" transform="rotate(330) scale(1.2)"/>
    </g>
    <circle r="17" fill="#fefcfb" stroke="#117a43" strokeWidth="2"/>
    <path d="M0 -12 L10 7 L-10 7 Z" fill="none" stroke="#0f6675" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M0 12 L-10 -7 L10 -7 Z" fill="none" stroke="#b4233f" strokeWidth="2" strokeLinejoin="round"/>
    <circle r="9" fill="url(#chakraCoreGreen)" stroke="#117a43" strokeWidth="2"/>
    <circle r="2.5" fill="#f2c46d"/>
  </g>

  <g transform="translate(150 152)">
    <circle r="38" fill="url(#chakraHaloBlue)"/>
    <circle r="28" fill="none" stroke="#2f6fe0" strokeWidth="2" strokeDasharray="2 5" opacity="0.7"/>
    <g fill="#fff8e8" stroke="#0f6675" strokeWidth="2">
      <use href="#chakraPetalSlim" transform="rotate(0) scale(0.95)"/>
      <use href="#chakraPetalSlim" transform="rotate(22.5) scale(0.95)"/>
      <use href="#chakraPetalSlim" transform="rotate(45) scale(0.95)"/>
      <use href="#chakraPetalSlim" transform="rotate(67.5) scale(0.95)"/>
      <use href="#chakraPetalSlim" transform="rotate(90) scale(0.95)"/>
      <use href="#chakraPetalSlim" transform="rotate(112.5) scale(0.95)"/>
      <use href="#chakraPetalSlim" transform="rotate(135) scale(0.95)"/>
      <use href="#chakraPetalSlim" transform="rotate(157.5) scale(0.95)"/>
      <use href="#chakraPetalSlim" transform="rotate(180) scale(0.95)"/>
      <use href="#chakraPetalSlim" transform="rotate(202.5) scale(0.95)"/>
      <use href="#chakraPetalSlim" transform="rotate(225) scale(0.95)"/>
      <use href="#chakraPetalSlim" transform="rotate(247.5) scale(0.95)"/>
      <use href="#chakraPetalSlim" transform="rotate(270) scale(0.95)"/>
      <use href="#chakraPetalSlim" transform="rotate(292.5) scale(0.95)"/>
      <use href="#chakraPetalSlim" transform="rotate(315) scale(0.95)"/>
      <use href="#chakraPetalSlim" transform="rotate(337.5) scale(0.95)"/>
    </g>
    <circle r="14" fill="#fefcfb" stroke="#1e47a8" strokeWidth="2"/>
    <path d="M0 10 L-8 -5 L8 -5 Z" fill="none" stroke="#0f6675" strokeWidth="2" strokeLinejoin="round"/>
    <circle r="8" fill="url(#chakraCoreBlue)" stroke="#1e47a8" strokeWidth="2"/>
    <circle r="2" fill="#f2c46d"/>
  </g>

  <g transform="translate(150 94)">
    <circle r="32" fill="url(#chakraHaloIndigo)"/>
    <circle r="23" fill="none" stroke="#4f46e5" strokeWidth="2" strokeDasharray="2 5" opacity="0.7"/>
    <g fill="#fff8e8" stroke="#7c3aed" strokeWidth="2">
      <use href="#chakraPetal" transform="rotate(270) scale(0.75)"/>
      <use href="#chakraPetal" transform="rotate(90) scale(0.75)"/>
    </g>
    <circle r="12" fill="#fefcfb" stroke="#372fa8" strokeWidth="2"/>
    <path d="M-8 0 C-4 -5.5, 4 -5.5, 8 0 C4 5.5, -4 5.5, -8 0 Z" fill="#ffffff"/>
    <circle r="4" fill="url(#chakraCoreIndigo)" stroke="#372fa8" strokeWidth="2"/>
    <circle r="1.5" fill="#f2c46d"/>
  </g>

  <g transform="translate(150 60)">
    <circle r="52" fill="url(#chakraHaloViolet)"/>
    <circle r="44" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="2 6" opacity="0.75"/>
    <g fill="#fff8e8" stroke="#4c1d95" strokeWidth="2">
      <use href="#chakraPetalSlim" transform="rotate(0) scale(2)"/>
      <use href="#chakraPetalSlim" transform="rotate(22.5) scale(2)"/>
      <use href="#chakraPetalSlim" transform="rotate(45) scale(2)"/>
      <use href="#chakraPetalSlim" transform="rotate(67.5) scale(2)"/>
      <use href="#chakraPetalSlim" transform="rotate(90) scale(2)"/>
      <use href="#chakraPetalSlim" transform="rotate(112.5) scale(2)"/>
      <use href="#chakraPetalSlim" transform="rotate(135) scale(2)"/>
      <use href="#chakraPetalSlim" transform="rotate(157.5) scale(2)"/>
      <use href="#chakraPetalSlim" transform="rotate(180) scale(2)"/>
      <use href="#chakraPetalSlim" transform="rotate(202.5) scale(2)"/>
      <use href="#chakraPetalSlim" transform="rotate(225) scale(2)"/>
      <use href="#chakraPetalSlim" transform="rotate(247.5) scale(2)"/>
      <use href="#chakraPetalSlim" transform="rotate(270) scale(2)"/>
      <use href="#chakraPetalSlim" transform="rotate(292.5) scale(2)"/>
      <use href="#chakraPetalSlim" transform="rotate(315) scale(2)"/>
      <use href="#chakraPetalSlim" transform="rotate(337.5) scale(2)"/>
    </g>
    <g fill="#fff1f3" stroke="#7c3aed" strokeWidth="2">
      <use href="#chakraPetalSlim" transform="rotate(15) scale(1.3)"/>
      <use href="#chakraPetalSlim" transform="rotate(45) scale(1.3)"/>
      <use href="#chakraPetalSlim" transform="rotate(75) scale(1.3)"/>
      <use href="#chakraPetalSlim" transform="rotate(105) scale(1.3)"/>
      <use href="#chakraPetalSlim" transform="rotate(135) scale(1.3)"/>
      <use href="#chakraPetalSlim" transform="rotate(165) scale(1.3)"/>
      <use href="#chakraPetalSlim" transform="rotate(195) scale(1.3)"/>
      <use href="#chakraPetalSlim" transform="rotate(225) scale(1.3)"/>
      <use href="#chakraPetalSlim" transform="rotate(255) scale(1.3)"/>
      <use href="#chakraPetalSlim" transform="rotate(285) scale(1.3)"/>
      <use href="#chakraPetalSlim" transform="rotate(315) scale(1.3)"/>
      <use href="#chakraPetalSlim" transform="rotate(345) scale(1.3)"/>
    </g>
    <path d="M0 -30 L11 -8 L0 18 L-11 -8 Z" fill="url(#chakraCoreViolet)" stroke="#4c1d95" strokeWidth="2" strokeLinejoin="round"/>
    <circle cx="0" cy="-2" r="5" fill="url(#chakraGoldCore)" stroke="#8a5a00" strokeWidth="2"/>
    <circle r="1.5" fill="#ffffff" opacity="0.9"/>
  </g>

  <path d="M208 40 L212 46 L208 52 L204 46 Z" fill="#f2c46d" stroke="#8a5a00" strokeWidth="2"/>
  <path d="M92 44 L96 50 L92 56 L88 50 Z" fill="#fff8e8" stroke="#b4233f" strokeWidth="2"/>
  <circle cx="222" cy="62" r="2" fill="#0f6675"/>
</svg>
```

### Justificación de composición y color

- **Columna legible:** los 7 nodos se distribuyen equidistantes sobre la columna dorada; la coronilla es el nodo más grande (doble corona 16+12 pétalos) porque es el que flota sobre la cabeza, y el tercer ojo es el único horizontal para marcar la frente.
- **Sistema antes que arcoíris:** la armadura crema + contorno de marca + núcleo dorado hace que los 7 chakras se lean como una familia de la marca. El color tradicional queda como núcleo interno, cumpliendo la regla «color de marca + color tradicional como acento interno» sin sacrificar identidad.
- **Contraste gráfico:** núcleos sobre crema ≥ 3:1 (naranja 3.2:1, verde 3.4:1, rojo 3.5:1, azul 4.0:1); el amarillo usa anillo oro profundo `#8a5a00` para soporte.
- **Trazo y textura:** 2–3px en silueta y nodos, halos radiales sutiles y destellos dorados mínimos; no hay desenfoque sobre texto.

### Nota de originalidad

La ilustración es 100% original y dibujada para este proyecto con primitivas geométricas (`<path>`, `<circle>`, `<use>`, gradientes propios). No copia ni reutiliza ningún asset, vector, foto, logo, banco de imágenes ni otra ilustración de chakras existente; los contadores de pétalos solo respetan la iconografía sánscrita clásica, que es de dominio público, pero cada trazo se redibujó desde cero. No hay assets externos, fuentes externas ni referencias a marcas.

### Integración (para `dev`)

- **Componente propuesto:** `src/components/HeroChakras.tsx` exportando `HeroChakras` (patrón idéntico a `AngelFeathers`: `({ className = "" }) => <svg viewBox="0 0 300 440" ... aria-hidden="true">`).
- **viewBox:** `0 0 300 440` (vertical, aspecto ~0.68).
- **Dónde:** en `src/app/page.tsx:145` reemplazar `<AngelFeathers className="h-full w-full" />` por `<HeroChakras className="h-full w-full" />` y ajustar el import en `src/app/page.tsx:7`.
- **CSS asociado:** en `src/app/globals.css:391-399` cambiar `aspect-ratio: 2` por `aspect-ratio: 0.68`, reducir `max-width` a `17.5rem` (280px desktop / 190px mobile), y en `src/app/page.tsx:144` pasar el rail de `rounded-full` a `rounded-[2rem]` conservando `bg-cream/70`, sombra y `p-2`. El rail queda `pointer-events-none` y `z-0`, debajo del contenido (`hero-copy` es `z-1`).
- **Verificación QA:** `npm run lint`, `npm run build`, regresión ES/EN y screenshots a 375/768/1440 sin crop ni scroll horizontal; SVG sigue `aria-hidden="true"`.

---

## Redes Sociales — Visibilidad integral

**Estado:** ✅ APROBADA AUTOMÁTICAMENTE por negocio — pendiente implementación
**Base:** `SPECS.md` (Visibilidad de redes sociales en el portal), `visual-harmony-audit`, `frontend-design`
**Fecha:** 2026-08-19
**Alcance:** Footer, Hero `/`, sección «Síguenos» en `/`, Blog con embeds, Contacto, Testimonios, ContactLauncher.
**Prototipo:** `design-proposals/redes-sociales/index.html` (autocontenido, sin CDN, responsive 375/768/1440).

Este documento es una propuesta de diseño, no una implementación. No se modificaron `src/`, `AGENTS.md`, agentes, `TASKS.md` ni `SPECS.md`. La integración queda descrita al final para `dev`.

### Inventario de superficies (antes → después)

| Superficie | Archivo actual | Antes | Después | CA |
|---|---|---|---|---|
| Footer | `src/components/Footer.tsx:39-82` | 4 iconos grises `40×40px` (`text-reiki-600`), sin TikTok, sin labels, columna 1 | 5 chips de color por red (`48px` táctil / `44px` desktop), glifo blanco, heading «Síguenos en redes», label visible por chip, TikTok nuevo, `noopener noreferrer`, sin romper grid | CA1, CA3, CA5 |
| Hero inicio | `src/app/page.tsx:127-140` | Sin redes | Mini-fila de 5 iconos `40px` (variante quiet: glifo de color de red sobre chip blanco suave) bajo los CTAs, caption sr-only «Síguenos en redes» | CA2, CA3 |
| Sección «Síguenos» | nueva, al final de `/` tras testimonios | No existe | Sección dedicada: 5 cards (chip `64px` + nombre + handle + enlace), grid 1/2/5 | CA2, CA3 |
| Blog | `src/app/blog/page.tsx` | Sin redes | Banda «Vida en redes» entre posts y newsletter: fila de 5 enlaces + 2 slots de embed (Instagram post + TikTok video) lazy con fallback a perfil | CA4 |
| Contacto | `src/app/contacto/page.tsx:89-256` | Solo canales (WhatsApp como fila de info) | Card «Síguenos en redes» bajo la tarjeta de información de contacto, 5 enlaces con chip + nombre + handle | CA2 |
| Testimonios | `src/app/testimonios/page.tsx:130-143` | Solo botón «Dejar Testimonio» (WhatsApp) | Se conserva el CTA de WhatsApp intacto + fila secundaria discreta de 3 perfiles (Instagram, Facebook, TikTok) con `aria-label` | CA7 |
| Header | `src/components/Header.tsx` | Sin redes | Sin cambios (decisión: no saturar navegación primaria) | CA7 |
| ContactLauncher | `src/components/ContactLauncher.tsx` | WhatsApp + Chat | Sin cambios (decisión: widget de conversión para agendar, no vitrina social) | CA7 |

### Paleta por red

| Red | Color / degradado | Glifo | Superficie del chip | Ratio glifo blanco | Handle / destino |
|---|---|---|---|---|---|
| Facebook | `#1877F2` | "f" | `#1877F2` | 4.2:1 ✓ | `/liliana.rodas.9615` |
| Instagram | `#F58529 → #DD2A7B → #8134AF` | cámara | degradado 135° + anillo `#B13A8A` (2px) | ≥3:1 ✓ (píxel peor naranja 2.5:1 mitigado con anillo + label redundante; QA mide píxel real) | `@alasdeamor` |
| TikTok | `#010101` + acentos `#25F4EE` / `#FE2C55` | nota musical | `#010101` | 21:1 ✓ | `@lilianarodas155` |
| WhatsApp | `#128C7E` (verde oscuro accesible; `#25D366` solo como acento) | burbuja + teléfono | `#128C7E` | 4.1:1 ✓ | `wa.me/573043732955` |
| Email | `#4c1d95` (ciruela de marca) | sobre | `#4c1d95` | 11:1 ✓ | `Lilo_rodas87@hotmail.com` |

**Regla de accesibilidad de color:** `#25D366` como fondo con glifo blanco queda en 1.9:1 y **no** se usa como chip; queda como acento (punto/burbuja del icono) y color de hover. Ninguna superficie depende solo del color: cada enlace tiene `aria-label` con el nombre de la red y, donde hay espacio, label visible.

### Decisiones de diseño

1. **Footer** — Mantiene el grid de 4 columnas. Los 5 chips viven en la columna 1 (span 2, bajo la descripción) como una fila `flex-wrap gap-3`. Chip circular con color de red, glifo blanco, `aria-label` = nombre de red y label visible a su lado en desktop. Se agrega heading «Síguenos en redes» y TikTok. Todos los links externos con `rel="noopener noreferrer"` y `target="_blank"`.
2. **Hero inicio** — Mini-fila discreta bajo los dos CTAs: 5 iconos `40px` en variante quiet (glifo de color de red sobre chip blanco suave + borde fino del color). No compite con CTAs ni con la foto; es indicador de comunidad. Caption sr-only.
3. **Sección «Síguenos»** — Se coloca al final de `/`, después de la sección de testimonios, como cierre social antes del Footer. 5 cards: chip grande `64px` con color de red, nombre, handle y enlace «Visitar». Grid 1 col (375) / 2 cols (768) / 5 cols (1440).
4. **Blog** — Banda «Vida en redes» entre la grilla de posts y la newsletter: fila de 5 enlaces + 2 slots de embed (Instagram post + TikTok video). Implementación en «Viabilidad de embeds» y en «Integración para `dev`».
5. **Contacto** — Card «Síguenos en redes» bajo la tarjeta de información de contacto, con los 5 enlaces (chip + nombre + handle). No toca formulario ni el sticky lateral.
6. **Testimonios** — Se conserva intacto el CTA «Dejar Testimonio» (WhatsApp). Debajo, una fila discreta de 3 enlaces a perfiles (Instagram, Facebook, TikTok) con `aria-label`. Sin cambio de copy ni de cards.
7. **ContactLauncher** — Se deja solo WhatsApp + Chat. Razón: es un widget de conversión para agendar; sumar objetivos sube el riesgo de taps erróneos en 375px y la altura del panel, y la vitrina social ya vive en Footer, Hero, Blog y Contacto. Mejora futura (fuera de alcance): tercer botón «Redes» que abra un mini-menú.
8. **Header** — Sin redes: la navegación ya tiene 7 ítems + conmutador de idioma; saturarla rompería el balance. Las redes no son navegación primaria.

### Viabilidad de embeds en el Blog (conclusión técnica)

**Instagram — VIABLE (oficial, vía oEmbed).** Desde el 2026-06-15 Meta permite llamar `GET https://graph.facebook.com/v25.0/instagram_oembed?url=<post>` **sin token** (anuncio oficial «Tokenless Access to Meta oEmbed APIs»). Devuelve el HTML oficial = `<blockquote class="instagram-media">` + script `https://www.instagram.com/embed.js`. El iframe directo `instagram.com/p/{código}/embed/` **no se recomienda como primario** porque los headers de la plataforma (`frame-ancestors`) pueden bloquearlo según entorno. Implementación estable: Route Handler de Next (`/api/instagram-oembed?url=…`) que llama a Graph API, cachea 24 h, y renderiza el blockquote; `embed.js` se inyecta una sola vez mediante IntersectionObserver cuando el slot entra en viewport (lazy). Fallback: card de perfil con avatar/handle si la llamada falla, el post es privado o la cuenta desactivó embeds.

**TikTok — VIABLE (oficial, vía embed player).** TikTok ofrece iframe oficial `https://www.tiktok.com/player/v1/{post_id}?music_info=1&description=1` (sin JS externo) y oEmbed `https://www.tiktok.com/oembed?url=<video>` que devuelve blockquote + `embed.js`. **Recomendado:** el iframe player puro (cero dependencias externas, `loading="lazy"`, `allow="fullscreen; autoplay; encrypted-media"`) dentro de una caja con `aspect-ratio: 9/16` y alto mínimo reservado (sin layout shift). El blockquote del oEmbed queda como fallback semántico. Requisito: URLs de videos públicos del perfil `@lilianarodas155` (IDs numéricos); el prototipo usa slots placeholder rotulados «embed oficial». Si aún no hay videos que compartir, la banda muestra cards de perfil con preview.

**Reglas transversales de embed:** lazy (`loading="lazy"` + IntersectionObserver), sin autoplay con sonido, `prefers-reduced-motion` respetado (los embeds se cargan por interacción, no se animan), caja con proporción fija para no estirar el layout, y fallback al perfil si el embed no carga. Sin librerías externas en el bundle del portal.

### SVG finales (inline, listos para copiar)

Uso: `fill="currentColor"` salvo donde se indique `stroke`; el color lo aplica el chip (`text-white`) o el glifo quiet (color de red). Todos con `aria-hidden="true"`; el significado lo entrega el `aria-label` del enlace y el label visible.

**Facebook — glifo "f"**

```svg
<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
  <path d="M14.5 21.5v-7.2h2.4l.36-2.8h-2.76V9.6c0-.81.22-1.36 1.39-1.36h1.45V5.77c-.25-.03-1.12-.11-2.13-.11-2.11 0-3.55 1.29-3.55 3.65v2.19H9.5v2.8h2.16v7.2h2.84z"/>
</svg>
```

**Instagram — cámara (glifo en stroke; en chip usar `text-white`)**

```svg
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
  <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5"/>
  <circle cx="12" cy="12" r="4.1"/>
  <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/>
</svg>
```

**TikTok — nota musical con acentos cian/rojo**

```svg
<svg viewBox="0 0 24 24" aria-hidden="true">
  <path fill="currentColor" d="M16.2 3.6c.1-1-1.3-1.7-2.1-1.2l-5.4 2.1c-.6.2-1 .8-1 1.4v8.4c-.3-.1-.7-.1-1-.1-1.8 0-3.3 1.4-3.3 3.2s1.5 3.2 3.3 3.2 3.3-1.4 3.3-3.2V9.1l4.9-1.9v4.7c-.3-.1-.7-.1-1-.1-1.8 0-3.3 1.4-3.3 3.2s1.5 3.2 3.3 3.2 3.3-1.4 3.3-3.2V3.6z"/>
  <circle cx="5.4" cy="19.4" r="1" fill="#25F4EE"/>
  <circle cx="16.8" cy="19.4" r="1" fill="#FE2C55"/>
</svg>
```

**WhatsApp — burbuja + teléfono (glifo en stroke; en chip usar `text-white`)**

```svg
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M12 4.2c-4.7 0-8.5 3.6-8.5 8 0 1.6.5 3 1.3 4.2L4 20l3.8-1.2c1.2.6 2.6 1 4.2 1 4.7 0 8.5-3.6 8.5-8s-3.8-7.6-8.5-7.6z"/>
  <path d="M9.4 9.1c-.3 1.2.2 2.6 1.2 3.6.9.9 2.3 1.5 3.5 1.2l.4-1.1-1.7-.9-1 .9c-.9-.5-1.6-1.2-2-2.1l.9-1-.9-1.7-1.1.5c-.2.1-.3.3-.4.7z"/>
</svg>
```

**Email — sobre (glifo en stroke; en chip usar `text-white`)**

```svg
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M3 8l7.9 5.3a2 2 0 002.2 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
</svg>
```

**Chips (patrón Tailwind para `dev`)**

```
chip = rounded-full flex items-center justify-center
       h-12 w-12 (móvil) / h-11 w-11 (desktop ≥1024)
       text-white shadow-md
       + color de red (bg-[#1877F2], bg-[#010101], bg-[#128C7E], bg-[#4c1d95])
       + Instagram: bg-[linear-gradient(135deg,#F58529,#DD2A7B_50%,#8134AF)]
         con ring-2 ring-[#B13A8A] ring-offset-2
       + focus-visible:outline-2 outline-offset-2
```

### Integración para `dev`

- **Config:** en `src/lib/config.ts` añadir `social.tiktok` (fallback `https://www.tiktok.com/@lilianarodas155?lang=es-419`) y documentar `NEXT_PUBLIC_SOCIAL_TIKTOK` en `.env.example` (ya iniciado por el PO).
- **Componente compartido:** crear `src/components/SocialLinks.tsx` con las 5 redes (chip + `aria-label` + label opcional), reutilizable en Footer, Hero, Síguenos, Blog, Contacto y Testimonios.
- **Sección «Síguenos»:** nuevo bloque al final de `/` (tras testimonios) consumiendo el componente con el prop `variant="card"`.
- **Blog embeds:** Route Handler `/api/instagram-oembed` (Graph API tokenless, cache 24 h) + componente `SocialEmbeds` con IntersectionObserver que inyecta `embed.js` una vez; TikTok como iframe `https://www.tiktok.com/player/v1/{id}?music_info=1&description=1` con `loading="lazy"`, caja `aspect-ratio: 9/16` y fallback a card de perfil. Slots placeholder hasta obtener URLs reales del perfil.
- **Verificación QA:** `npm run lint`, `npm run build`, regresión ES/EN, screenshots 375/768/1440 sin overflow ni crop, foco visible, teclado, `prefers-reduced-motion`, contraste ≥3:1 por píxel real, `noopener noreferrer`, y regresión en Header, menú, Footer, precios, formularios, agenda y WhatsApp.

**Cierre:** ✅ APROBADA AUTOMÁTICAMENTE por negocio — pendiente implementación.
