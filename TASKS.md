# TASKS — Visibilidad de redes sociales en el portal

Generado por: agente tech-lead
Fecha: 2026-08-19
Base: `SPECS.md` (Visibilidad de redes sociales), `UI-IMPROVEMENTS.md` (sección «Redes Sociales — Visibilidad integral»), `design-proposals/redes-sociales/index.html`, `src/lib/config.ts`, `src/components/Footer.tsx`, `src/components/ContactLauncher.tsx`, `src/app/page.tsx`, `src/app/blog/page.tsx`, `src/app/contacto/page.tsx`, `src/app/testimonios/page.tsx`, `src/app/globals.css`, `.env.example`
Estado: Plan técnico listo para implementación
Número de tareas: **9**

## Aprobaciones y alcance

- La aprobación de `SPECS.md` ya está concedida automáticamente para esta iteración.
- La aprobación de `UI-IMPROVEMENTS.md` (sección «Redes Sociales — Visibilidad integral») y de su HTML de prueba `design-proposals/redes-sociales/index.html` ya está concedida automáticamente para esta ocasión.
- Este archivo solo define trabajo técnico; no implementa código de aplicación ni modifica otro archivo.
- La implementación debe satisfacer los criterios de aceptación CA1–CA7 de `SPECS.md` conservando el contenido y comportamiento actuales.
- El orden base es T1 y T2, luego T3-T8, y finalmente T9. T3, T5 y T6 son de prioridad alta y bloquean el cierre si el Footer, la sección «Síguenos» o el Blog con embeds no cumplen sus DOF.

## Invariantes obligatorios

- Conservar blanco cálido, degradados violetas, orbes y lenguaje etéreo global; no reemplazar `warm-white`, `gradient-hero`, `gradient-spiritual`, `gradient-card` ni los fondos aprobados.
- Conservar Header, Footer, menú móvil, navegación, logo, flags, skip link y sus estados; no cambiar la estructura ni el z-index global del Header (`z-50`).
- Conservar copy, claves existentes de `src/locales/es.json` y `src/locales/en.json`, idioma ES/EN, títulos, descripciones, fechas, precios, monedas, duración y CTA existentes. Las claves nuevas solo se **agregan** dentro de la sección `social` (ver T3), nunca se renombran ni eliminan existentes.
- Conservar formularios, validaciones, server actions, agenda, precios de `src/lib/prices.ts`, WhatsApp, enlaces y `ContactLauncher`; no disparar acciones durante la inspección.
- **Header y ContactLauncher quedan sin cambios** (decisión aprobada en `design-proposals/redes-sociales/index.html` secciones 08 y 09: la navegación no se satura y el launcher es un widget de conversión, no una vitrina social). Documentar esta decisión, no alterar estos archivos.
- Usar Georgia para títulos y `Inter` para cuerpo, controles y metadata. No agregar fuentes.
- Mantener los SVG decorativos con `aria-hidden="true"`; el texto y los controles deben comunicar el significado por sí mismos. Ninguna superficie depende solo del color: cada enlace social lleva `aria-label` con el nombre de la red y, donde hay espacio, label visible.
- No usar color como único indicador semántico. Los gráficos relevantes deben tener silueta, borde o forma distinguible.
- No introducir `nowrap`, truncamiento, crop accidental, overflow horizontal ni placas que tapen CTA, campos o metadata.

## Política de assets

- El tratamiento predeterminado es SVG/CSS inline: glifos de las cinco redes (Facebook, Instagram, TikTok, WhatsApp, Email), chips, gradientes por red, fallbacks de embed y cards de perfil. Copiar los SVG exactos de `design-proposals/redes-sociales/index.html` (símbolos `i-fb`, `i-ig`, `i-tt`, `i-wa`, `i-mail`).
- No crear assets raster nuevos para esta iteración. Si el Diseñador demuestra que SVG/CSS no basta, debe abrir antes una TI independiente (`TI-RASTER-XX`) con briefing de ruta, propósito semántico, composición, dimensiones, formato, peso, paleta, encuadre, anonimato/originalidad, accesibilidad y criterio de validación; el asset debe documentarse en `IMAGES.md` antes de que `dev` lo consuma.
- No usar el HTML de `design-proposals/redes-sociales/index.html` como código de producción ni integrar sus placeholders; es referencia visual aprobada.
- Los embeds del Blog usan únicamente integración oficial: oEmbed de Meta (Graph API `instagram_oembed` v25.0, tokenless) y iframe player oficial de TikTok. Sin librerías externas en el bundle del portal; `embed.js` de Instagram solo se inyecta una vez vía IntersectionObserver (lazy).
- No publicar posts de redes dentro del portal: solo enlaces y, en Blog, embeds oficiales con fallback a card de perfil.

## Evidencia visual común para todos los DOF

Cada tarea T1-T9 debe aplicar la skill `visual-harmony-audit` y adjuntar evidencia del área modificada. La evidencia mínima es:

- Screenshots de viewport en 375 px, 768 px y 1280 px o 1440 px, en ES y EN cuando el texto pueda cambiar de línea.
- Bounding boxes de Header, H1, subtítulo/descripción, icono o imagen, CTA y el bloque funcional cercano; anotar coordenadas y viewport.
- `computedStyle` de `color`, `opacity`, `filter`, `transform`, `z-index`, `object-fit`, `object-position`, `font-family`, `font-size`, `font-weight` y `line-height`.
- Estado con assets lazy cargados y estado con `prefers-reduced-motion: reduce`.
- Contraste calculado sobre el peor pixel real del fondo detrás de cada texto o gráfico: texto normal mínimo 4.5:1, texto grande mínimo 3:1 y gráfico relevante mínimo 3:1. No aceptar el promedio del degradado. Para los chips: glifo blanco sobre color de red según la tabla de `design-proposals/redes-sociales/index.html` (FB 4.2:1, TikTok 21:1, WhatsApp 4.1:1, Email 11:1; Instagram se mitiga con anillo `#B13A8A` de 2 px + label redundante y QA mide el píxel real).
- Verificación de z-index y safe zone: ningún elemento cruza Header o menú, ningún copy queda bajo blur y ningún CTA, formulario o enlace pierde su área de interacción.
- Verificación de crop, `object-fit`, `object-position`, proporción y ausencia de layout shift o overflow horizontal.
- Verificación de coherencia imagen-contenido: el recurso debe reforzar el título y la sección, no ser un placeholder genérico ni un símbolo semánticamente vacío.

## Tareas

### T1 — Config: TikTok en `src/lib/config.ts` + `.env.example`

**Estado:** ✅ Implementada
**Prioridad:** Alta (bloquea T2 y todas las superficies)
**CAs:** CA1, CA6
**Archivos objetivo:** `src/lib/config.ts`, `.env.example`

**Objetivo técnico:**

- Añadir `social.tiktok` a `config` en `src/lib/config.ts` siguiendo el patrón existente de `social.facebook`/`social.instagram`:
  - `tiktok: process.env.NEXT_PUBLIC_SOCIAL_TIKTOK || "https://www.tiktok.com/@lilianarodas155?lang=es-419"`.
- Documentar `NEXT_PUBLIC_SOCIAL_TIKTOK` en `.env.example` dentro de la sección `# ---- Redes Sociales ----`, junto a las claves existentes.
- No tocar ninguna otra clave de `config` ni el resto de `.env.example`.

**DOR:**

- `SPECS.md` define la URL y el usuario `@lilianarodas155`; se confirmó que `src/lib/config.ts` no tiene aún `social.tiktok` y que `.env.example` no lo documenta.
- El patrón de lectura de env con fallback en `config.ts` queda sin cambios; no hay secretos ni token involucrados.

**DOF:**

- `src/lib/config.ts` exporta `config.social.tiktok` y el valor con env ausente es exactamente `https://www.tiktok.com/@lilianarodas155?lang=es-419`.
- `.env.example` contiene `NEXT_PUBLIC_SOCIAL_TIKTOK=` con la URL de fallback como valor documentado y comentado.
- `npm run lint` y `npm run build` pasan; `git diff` de estos dos archivos contiene únicamente las líneas añadidas de T1.

**Dependencias y riesgos:** Es la primera tarea; T2-T8 la consumen. Riesgo bajo: si el fallback llevara `#` u otro carácter no codificado, `dev` debe codificarlo con `encodeURIComponent` solo cuando corresponda (mantener la URL tal cual como fallback por decisión de `SPECS.md`).

### T2 — Componente reutilizable `SocialLinks.tsx`

**Estado:** ✅ Implementada
**Prioridad:** Alta (bloquea T3, T4, T5, T6, T7, T8)
**CAs:** CA1, CA3
**Archivos objetivo:** `src/components/SocialLinks.tsx` (nuevo)

**Objetivo técnico:**

- Crear `src/components/SocialLinks.tsx` con las 5 redes y exportar un único componente `SocialLinks` reutilizable en Footer, Hero, sección «Síguenos», Blog, Contacto y Testimonios.
- **API del componente (propuesta firme):**
  - `networks?: Array<"facebook" | "instagram" | "tiktok" | "whatsapp" | "email">` (por defecto las 5).
  - `variant?: "chip" | "quiet" | "card"` (por defecto `chip`; `card` es para la sección «Síguenos» de `/`).
  - `showLabel?: boolean` y `showHandle?: boolean` para superficies con espacio (Footer labels, Contacto con handle).
  - `className?: string` para margen/alineación del wrapper.
- **Datos por red (constantes internas del componente):**
  - Destinos: Facebook `config.social.facebook`; Instagram `config.social.instagram`; TikTok `config.social.tiktok`; WhatsApp `https://wa.me/${config.contact.whatsapp}`; Email `mailto:${config.contact.email}`.
  - Handles: `@liliana.rodas.9615`, `@alasdeamor`, `@lilianarodas155`, `+57 304 3732955`, `Lilo_rodas87@hotmail.com`.
- **Paleta por red (fija, aprobada):** Facebook `#1877F2`; Instagram `linear-gradient(135deg, #F58529, #DD2A7B 50%, #8134AF)` con anillo `#B13A8A` de 2 px; TikTok `#010101` con acentos `#25F4EE`/`#FE2C55` en el glifo; WhatsApp `#128C7E` (`#25D366` solo como acento/hover, nunca como fondo); Email `#4c1d95`.
- **Chips:** `h-12 w-12` (48 px táctil) y `lg:h-11 lg:w-11` (44 px desktop ≥1024); variante `quiet` (Hero) con chip blanco y glifo en el color de la red, 40 px; variante `card` con chip 64 px + nombre + handle + enlace «Visitar/Escribir» (`social.visit`/`social.write`).
- **Glifos SVG inline originales** (copiados de `design-proposals/redes-sociales/index.html`): "f" de Facebook, cámara de Instagram (stroke), nota musical de TikTok con acentos cian/rojo, burbuja+teléfono de WhatsApp (stroke), sobre de Email (stroke). Todos con `aria-hidden="true"`; `fill="currentColor"` o `stroke="currentColor"` según el glifo.
- **Accesibilidad:** cada enlace lleva `aria-label` con el nombre de la red (p. ej. `TikTok @lilianarodas155`) y, cuando `showLabel` está activo, label visible; enlaces externos con `target="_blank"` y `rel="noopener noreferrer"`; `mailto` sin `target`; `focus-visible` con outline de 2 px y offset 2 px.
- Para el label «Visitar»/«Escribir» de la variante `card`, usar `useTranslations` con `social.visit` y `social.write` (claves nuevas de T3); los nombres de red son nombres propios y no se traducen.

**DOR:**

- T1 aprobada (`config.social.tiktok` disponible).
- Los 5 SVG y la paleta fueron copiados de la sección «SVG finales» y «Paleta por red» de `design-proposals/redes-sociales/index.html`, sin modificaciones de trazo.
- Se confirma que no existe `SocialLinks.tsx` y que el proyecto no tiene librería de iconos instalada (los iconos actuales del Footer son SVG inline).

**DOF:**

- Aplicar la evidencia visual común en un entorno aislado (p. ej. en el Footer temporal o con el HTML de prueba) a 375/768/1440: bounding boxes de cada chip en las variantes `chip`, `quiet` y `card`.
- Los 5 chips cumplen tamaño mínimo 44 px (48 táctil), glifo blanco sobre el color de red (o glifo de color sobre blanco en `quiet`), contraste de gráfico ≥3:1 en el peor pixel real (IG medido con el píxel más oscuro del degradado; el anillo `#B13A8A` + label redundante son parte del DOF).
- Cada enlace expone `aria-label` con el nombre de la red, los 5 destinos coinciden con `config` y todos los externos llevan `noopener noreferrer`; `mailto` no abre ventana nueva.
- SVG con `aria-hidden="true"`, sin dependencias externas, sin `use` a `<symbol>` global (SVG autocontenidos por instancia), teclado y foco visibles, reduced motion sin ocultar glifos y sin overflow horizontal en ES/EN.

**Dependencias y riesgos:** T1. Riesgo: aplicar `ring-offset` o `ring` a Instagram en todos los chips puede verse pesado en `card`; `dev` debe usar `ring-offset-1` y validar por screenshot. El componente no debe depender de `t()` para los nombres de red (nombres propios).

### T3 — Footer: heading «Síguenos en redes» + chips de color, sin romper grid

**Estado:** ✅ Implementada
**Prioridad:** Crítica/Alta (gate CA5)
**CAs:** CA1, CA3, CA5
**Archivos objetivo:** `src/components/Footer.tsx`, `src/locales/es.json`, `src/locales/en.json` (solo añadir claves `social`)

**Objetivo técnico:**

- En `src/components/Footer.tsx`, columna 1 (`lg:col-span-2`), sustituir el bloque de 4 iconos grises actuales (líneas 39-82) por:
  - Heading visible «Síguenos en redes» (`social.followTitle`, ES/EN) con jerarquía coherente con `footer.navigation`/`footer.services`.
  - `<SocialLinks />` en variante `chip` (5 redes, incluye TikTok) con `showLabel` activo y label visible por chip en desktop; fila `flex flex-wrap gap-3` bajo la descripción, sin tocar el grid de 4 columnas ni las columnas de Navegación/Servicios.
- Añadir a `es.json` y `en.json` (sin renombrar claves existentes) la sección:
  - `social.followTitle`: «Síguenos en redes» / «Follow us on social media».
  - `social.followSubtitle`: «Contenido diario de sanación, meditaciones guiadas y la comunidad que crece con Liliana Rodas.» / «Daily healing content, guided meditations and the community growing with Liliana Rodas.»
  - `social.heroCaption`: «Síguenos» / «Follow us» (para T4).
  - `social.visit`: «Visitar» / «Visit»; `social.write`: «Escribir» / «Message» (para T2/T5).
  - `social.blogTitle`: «Vida en redes» / «Life on social media»; `social.blogSubtitle`: «Publicaciones de la comunidad y contenido de Liliana.» / «Community posts and content from Liliana.» (para T6).
- No modificar `footer.description`, `footer.navigation`, `footer.services`, `footer.rights`, `footer.therapy`, el copyright ni la barra inferior.

**DOR:**

- T1 y T2 aprobadas; `SocialLinks` con variante `chip` y `showLabel` disponible.
- Se verificaron las claves `footer.*` en ES/EN y el grid del Footer (4 columnas, columna 1 `lg:col-span-2`); las nuevas claves van en una sección `social` nueva.

**DOF:**

- Aplicar la evidencia visual común: Footer en ES y EN a 375/768/1440 con bounding boxes del heading, la fila de 5 chips, la descripción y las dos columnas de navegación/servicios.
- Los 5 chips de color (incluido TikTok) son visibles e interactivos, ≥44 px, con label visible o `aria-label`, contraste por píxel real ≥3:1, `noopener noreferrer` en externos.
- El grid conserva 4 columnas en desktop y 1-2 en móvil; no hay overflow horizontal, no cambia la altura total más allá de la fila social, y la navegación/Footer mantiene foco y teclado idénticos.
- Reduced motion deja la fila estática; alternar ES/EN no rompe wraps ni la fila de chips; `npm run lint` y `npm run build` pasan.

**Dependencias y riesgos:** T1-T2. Riesgo: el heading y los chips no deben tapar ni desplazar la descripción; la fila `flex-wrap` debe envolver en 375 px sin cortar labels. No cambiar el z-index ni la estructura del Footer.

### T4 — Hero de inicio: mini-fila de redes quiet bajo los CTAs

**Estado:** ✅ Implementada
**Prioridad:** Media-Alta
**CAs:** CA2, CA3
**Archivos objetivo:** `src/app/page.tsx`, `src/components/SocialLinks.tsx` (uso)

**Objetivo técnico:**

- En `src/app/page.tsx`, dentro de `hero-copy`, inmediatamente después del bloque de los dos CTAs (líneas 127-140), añadir una mini-fila discreta de 5 redes con `variant="quiet"` (glifo del color de la red sobre chip blanco suave, 40 px), sin competir con la conversión.
- Añadir un caption `visually-hidden` con `social.heroCaption` («Síguenos») como etiqueta de la fila; opcionalmente un `role="list"` con `role="listitem"` por enlace.
- No modificar logo, H1, badge, descripción, foto, rail de chakras ni los dos CTA; la fila queda debajo de los CTA y encima del borde inferior del hero.

**DOR:**

- T1-T3 aprobadas; `SocialLinks` con `variant="quiet"` disponible y caption `social.heroCaption` en ES/EN.
- Se confirmó que el hero de `/` usa `hero-copy` (`z-index: 1`) y que la fila no invade la foto (columna derecha).

**DOF:**

- Aplicar la evidencia visual común en 375/768/1440 (ES y EN): bounding boxes de la fila quiet, los CTA, la foto y el rail de chakras; la fila no se solapa con los CTAs ni con la foto.
- Los 5 glifos quiet son distinguibles por silueta y color (sin depender solo del color), ≥40 px de área de clic (44 px efectivo con padding si aplica), foco visible y teclado alcanzable.
- El hero mantiene su LCP (foto) sin cambios, no hay overflow horizontal, reduced motion no oculta la fila y la conversión (Agenda tu Cita / Ver Servicios) sigue siendo el foco visual dominante.

**Dependencias y riesgos:** T1-T3. Riesgo: la fila quiet puede confundirse con el badge «Terapia Holística Certificada»; `dev` debe separarla con margen superior ≥16 px y mantenerla visualmente secundaria (sin `hover` agresivo ni sombras fuertes).

### T5 — Sección «Síguenos» al final de `/` (tras testimonios)

**Estado:** ✅ Implementada
**Prioridad:** Crítica/Alta (gate CA2)
**CAs:** CA2, CA3
**Archivos objetivo:** `src/app/page.tsx`, `src/components/SocialLinks.tsx` (variante `card`)

**Objetivo técnico:**

- Añadir al final de `/` (después de la sección de testimonios, línea 413, y antes del cierre del wrapper) una sección dedicada «Síguenos en redes»:
  - Heading `social.followTitle` + subtítulo `social.followSubtitle` centrados (coherente con el patrón de headings de `/`).
  - 5 cards con `variant="card"` de `SocialLinks`: chip 64 px con color de red, nombre de la red, handle y enlace «Visitar/Escribir» (`social.visit`/`social.write`).
  - Grid `grid-cols-1 sm:grid-cols-2 lg:grid-cols-5` con `gap` y fondo del mismo lenguaje visual (alternar `bg-warm-white` o `gradient-spiritual` según balance de la página; no cambiar fondos aprobados).
- No modificar testimonios, ni el CTA central, ni el orden de las secciones existentes.

**DOR:**

- T1-T3 aprobadas; `SocialLinks` con `variant="card"` y las claves `social.*` disponibles.
- Se confirmó que la sección de testimonios de `/` cierra en la línea 413 y que el wrapper raíz es `relative overflow-hidden`.

**DOF:**

- Aplicar la evidencia visual común en 375/768/1440 (ES/EN): la sección aparece como última sección de `/` antes del Footer, con grid 1/2/5 columnas según viewport.
- Las 5 cards muestran chip 64 px con color de red, nombre, handle y enlace visible; en 375 px las cards se apilan sin overflow ni crop; en 1440 px quedan las 5 en fila.
- Cada card es un enlace completo con `aria-label`, `noopener noreferrer` en externos, foco visible y teclado; contraste de glifo ≥3:1 en el peor pixel real; reduced motion sin ocultar nada.
- No hay regresión en el CTA «Agendar Ahora», testimonios ni Footer; `npm run lint` y `npm run build` pasan.

**Dependencias y riesgos:** T1-T4. Riesgo: 5 cards en una fila a 1024 px pueden quedar estrechas; `dev` debe fijar el quiebre en `lg` (1024 px) y validar 1024 y 1440 px, no solo 1440. El enlace «Escribir» de WhatsApp/Email no debe abrir ventana nueva.

### T6 — Blog: banda «Vida en redes» + embeds oficiales de Instagram y TikTok

**Estado:** ✅ Implementada
**Prioridad:** Crítica/Alta (gate CA4)
**CAs:** CA4, CA6, CA7
**Archivos objetivo:** `src/app/api/instagram-oembed/route.ts` (nuevo), `src/components/SocialEmbeds.tsx` (nuevo), `src/app/blog/page.tsx`, `src/lib/config.ts`, `.env.example`

**Objetivo técnico:**

- **Config:** añadir a `config.social` dos campos opcionales con fallback vacío:
  - `blogInstagramPost: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM_POST || ""`
  - `blogTikTokVideo: process.env.NEXT_PUBLIC_SOCIAL_TIKTOK_VIDEO || ""`
  - Documentar ambas en `.env.example` en la sección Redes Sociales. Con valor vacío, los slots muestran la card de perfil (fallback).
- **Route Handler `/api/instagram-oembed`** (`src/app/api/instagram-oembed/route.ts`, GET, `export const runtime = "nodejs"`):
  - Recibe `?url=` (post de Instagram), valida: solo `https:`, host `www.instagram.com`/`instagram.com`, pathname que comience con `/p/`, `/reel/` o `/tv/` (con ID alfanumérico), rechazando cualquier otra entrada con 400.
  - Llama a `GET https://graph.facebook.com/v25.0/instagram_oembed?url=<encoded>` **sin token** (tokenless desde 2026-06-15) con caché de 24 h (fetch con `next: { revalidate: 86400 }` o caché propia equivalente).
  - Devuelve JSON `{ html, author_name, author_url }` con `Content-Type: application/json`. Antes de devolver, **elimina cualquier `<script`/`<iframe`/`<link` del `html`** (solo se conserva el `blockquote.instagram-media`); ante error de upstream, post privado o URL inválida devuelve `{ error }` con código apropiado (400/502) sin excepción sin controlar.
- **Componente `SocialEmbeds.tsx`** (`"use client"`):
  - Slots: Instagram post (oEmbed) y TikTok video (iframe). Ambos con caja de proporción fija para no estirar el layout.
  - Instagram: IntersectionObserver sobre el slot; al entrar en viewport, fetch `/api/instagram-oembed?url=<post>` **una sola vez**; inyecta el `blockquote` vía `dangerouslySetInnerHTML` (ya sin scripts) e inyecta `https://www.instagram.com/embed.js` **una sola vez** (guard con flag en `window` o comprobando la existencia del script). Fallback a card de perfil si hay error, el post es privado o no hay URL configurada.
  - TikTok: iframe oficial `https://www.tiktok.com/player/v1/{id}?music_info=1&description=1` con el ID numérico extraído de `config.social.blogTikTokVideo`; `loading="lazy"`, `allow="fullscreen; autoplay; encrypted-media"`, sin autoplay con sonido, dentro de caja `aspect-ratio: 9/16` con alto mínimo reservado (sin layout shift). Fallback a card de perfil si no hay URL configurada o el ID no es válido.
  - Card de perfil de fallback (para ambos): chip del color de la red + nombre + handle + enlace al perfil (reutiliza `SocialLinks` o su patrón), sin assets raster.
  - Respeta `prefers-reduced-motion`: los embeds solo se cargan por interacción/observación, no se animan; no hay autoplay con sonido.
- **Banda «Vida en redes» en `/blog`:** entre la grilla de posts (cierra en la línea 118) y la sección de newsletter (línea 119), añadir la banda con heading `social.blogTitle` + subtítulo `social.blogSubtitle`, fila de 5 enlaces (`SocialLinks` variante `chip`) y los 2 slots de embed (`SocialEmbeds`), en `grid md:grid-cols-2` en desktop y 1 columna en móvil.
- No modificar posts, fechas, links, newsletter, `preventDefault`, categorías ni el formato ES/EN del Blog.

**DOR:**

- T1-T3 aprobadas; claves `social.blogTitle`/`social.blogSubtitle` disponibles en ES/EN.
- Se confirmó que no existe `src/app/api/` (se crea por primera vez) y que el proyecto no tiene librerías de embeds instaladas; el route handler no requiere `INSTAGRAM_*` token ni secretos.

**DOF:**

- **API:** `GET /api/instagram-oembed?url=https://www.instagram.com/p/<id>/` devuelve JSON con `html` (blockquote sin `<script>`), 200 y cabeceras correctas; URL inválida o host no permitido devuelve 400; upstream caído o post privado devuelve error JSON sin romper el render.
- **Embeds:** en viewport desktop el bloque de Instagram renderiza el blockquote y `embed.js` se inyecta una sola vez (comprobar con contador en `window`); el iframe de TikTok aparece con `aspect-ratio: 9/16`, `loading="lazy"`, sin layout shift al entrar (misma caja reservada antes/después de cargar), `prefers-reduced-motion` respetado.
- **Fallbacks:** con `blogInstagramPost`/`blogTikTokVideo` vacíos o con errores simulados (desconexión, 4xx/5xx), ambos slots muestran la card de perfil con chip + nombre + handle + enlace funcional, sin imagen rota ni overflow.
- **Banda:** «Vida en redes» aparece entre posts y newsletter a 375/768/1440 en ES/EN, sin tocar posts, newsletter, categorías ni metadata; contraste por píxel real ≥3:1, foco y teclado en todos los enlaces, `noopener noreferrer` en externos.
- `npm run lint`, `npm run build` pasan; no hay secretos en el repo y `git diff --check` no reporta errores.

**Dependencias y riesgos:** T1-T5. Riesgos: (a) el `html` del oEmbed puede variar; por eso se limita al `blockquote` y se eliminan scripts antes de inyectar; (b) los `frame-ancestors` de Meta pueden bloquear en algunos entornos — por eso el primario es el oEmbed oficial y el iframe directo no se usa; (c) sin URLs reales de videos, los slots deben quedar como fallback (nunca como huecos vacíos); (d) `dangerouslySetInnerHTML` solo recibe HTML filtrado del route handler propio.

### T7 — Contacto: card «Síguenos en redes» bajo la tarjeta de info

**Estado:** ✅ Implementada
**Prioridad:** Media-Alta
**CAs:** CA2
**Archivos objetivo:** `src/app/contacto/page.tsx`, `src/components/SocialLinks.tsx` (uso)

**Objetivo técnico:**

- En `ContactInfo` de `src/app/contacto/page.tsx`, añadir una card «Síguenos en redes» **inmediatamente después** de la tarjeta `contacto.info.title` (líneas 94-222) y antes de la tarjeta de horario, siguiendo el patrón `gradient-card rounded-3xl p-8 shadow-lg ... border`.
- La card contiene heading `social.followTitle` y `<SocialLinks />` con `showLabel` y `showHandle` (chip 48/44 px + nombre + handle), en fila `flex flex-wrap gap-3`; en desktop cada enlace mínimo 170 px según el prototipo.
- No modificar el formulario, el sticky lateral, la imagen, los canales existentes, los labels ni `ContactLauncher`.

**DOR:**

- T1-T3 aprobadas; `SocialLinks` con labels y handles disponible; se confirmó la estructura de `ContactInfo` (tarjeta de info líneas 94-222, tarjeta de horario 223-254).

**DOF:**

- Aplicar la evidencia visual común en 375/768/1440 (ES/EN): la nueva card aparece bajo la información de contacto, sin tapar el formulario ni el sticky lateral, con bounding boxes de heading, chips, handles y enlaces.
- Los 5 enlaces son accesibles por teclado, con `aria-label`, `noopener noreferrer` en externos, `mailto` sin ventana nueva, contraste ≥3:1 en el peor pixel real y labels legibles (texto normal ≥4.5:1 sobre `gradient-card`).
- En 375 px la fila envuelve sin overflow; en 1440 px los enlaces no exceden el ancho de la columna; reduced motion no oculta la card; sin regresión en formulario, sticky, WhatsApp ni canales.

**Dependencias y riesgos:** T1-T5. Riesgo: la card nueva incrementa la altura de la columna derecha; debe mantenerse bajo el formulario y no empujar el sticky lateral; `dev` valida 768 px donde la columna es única.

### T8 — Testimonios: fila discreta de perfiles (Instagram, Facebook, TikTok)

**Estado:** ✅ Implementada
**Prioridad:** Media-Alta
**CAs:** CA2, CA7
**Archivos objetivo:** `src/app/testimonios/page.tsx`, `src/components/SocialLinks.tsx` (uso, subconjunto)

**Objetivo técnico:**

- En la sección «Comparte Tu Experiencia» de `/testimonios` (líneas 118-144), **mantener intacto** el CTA de WhatsApp «Dejar Testimonio» (líneas 130-142).
- Debajo del CTA, añadir una fila discreta de 3 perfiles: Instagram, Facebook y TikTok, usando `SocialLinks` con `networks={["instagram", "facebook", "tiktok"]}`, chips pequeños con label, `aria-label` con el nombre de la red, `noopener noreferrer`.
- La fila es secundaria y discreta (menor peso visual que el CTA); no añade copy visible nuevo (los nombres de red son nombres propios).

**DOR:**

- T1-T3 aprobadas; `SocialLinks` soporta `networks` con subconjunto; se confirmó que la sección share conserva título, subtítulo y botón WhatsApp en ES/EN.

**DOF:**

- Aplicar la evidencia visual común en 375/768/1440 (ES/EN): bounding boxes del CTA de WhatsApp (sin cambios) y de la fila de 3 perfiles, que queda claramente secundaria.
- Los 3 enlaces son accesibles por teclado, con `aria-label`, `noopener noreferrer`, contraste ≥3:1 y foco visible; en 375 px la fila envuelve sin overflow y no compite con el botón.
- Reduced motion no oculta la fila; el CTA de WhatsApp conserva su estilo, posición, copy y destino; `npm run lint` y `npm run build` pasan.

**Dependencias y riesgos:** T1-T5. Riesgo: la fila no debe parecer un CTA secundario igual de grande que el botón de WhatsApp; `dev` usa chips pequeños (40 px o menos) y tipografía menor, y valida visualmente que el botón conserva el dominio.

### T9 — Regresión integral y QA de redes sociales

**Estado:** 🔄 Parcial — `npm run lint` y `npm run build` pasan; `/`, `/blog`, `/contacto` y `/testimonios` responden 200 con las superficies nuevas (verificado por HTTP). Pendiente evidencia visual QA: screenshots 375/768/1440 ES/EN, teclado completo, `prefers-reduced-motion` y Playwright.
**Prioridad:** Bloqueante
**Alcance:** `/`, `/blog`, `/contacto`, `/testimonios`, Footer, Header, menú móvil, `ContactLauncher`, formularios, precios, i18n, embeds, SEO y seguridad

**Objetivo técnico:** Ejecutar la validación final con la skill `visual-harmony-audit`, Playwright/browser tooling y los comandos del proyecto; no introducir correcciones nuevas no asignadas. Todo hallazgo debe volver a T1-T8 con ID `ISS-SOC-*` estable.

**DOR:** T1-T8 tienen evidencia de DOF, el HTML aprobado fue usado solo como referencia, no existen TI raster pendientes y el entorno puede ejecutar `npm run lint`, `npm run build` y el servidor de producción local.

**DOF visual y funcional:**

- Capturar `/`, `/blog`, `/contacto` y `/testimonios` en ES y EN en 375, 768 y 1280/1440; revisar después de lazy load y con `prefers-reduced-motion: reduce`. Verificar además el Footer en todas las rutas (es global).
- Para cada superficie registrar bounding boxes de Header, H1, chips de redes, cards «Síguenos», banda del Blog, slots de embed, formularios y CTA; registrar computed styles completos de la skill: color, opacity, filter, transform, z-index, font-family, font-size, font-weight y line-height.
- Medir el peor pixel real detrás de cada chip, label, handle y texto nuevo: exigir 4.5:1 para texto normal (labels/handles), 3:1 para texto grande y 3:1 para gráficos (glifos). Instagram se mide sobre el píxel más oscuro del degradado con el anillo `#B13A8A` activo.
- Confirmar **TikTok presente y funcional** en Footer, Hero, sección «Síguenos», Blog, Contacto y Testimonios (CA1) y **≥3 zonas además del Footer** (CA2: Home, Blog, Contacto y Testimonios).
- Confirmar cero overflow horizontal y cero layout shift perceptible, en especial en los slots de embed de `/blog` (caja reservada `aspect-ratio: 9/16` y alto mínimo) y en la fila de chips del Footer a 375 px.
- Probar embeds: cache 24 h del route handler, inyección única de `embed.js` (contador en `window`), iframe de TikTok `loading="lazy"` con `allow="fullscreen; autoplay; encrypted-media"`, y **fallbacks a card de perfil** con `blogInstagramPost`/`blogTikTokVideo` vacíos o con errores simulados (4xx/5xx/desconexión).
- Probar teclado completo: skip link, navegación Header y Footer, cambio de idioma, menú móvil, foco visible en todos los chips/cards/embeds, formularios, newsletter, CTAs y enlaces externos; Escape y cierre por ruta siguen funcionando.
- Probar seguridad: `noopener noreferrer` en todos los enlaces externos nuevos, `mailto` sin ventana nueva, el route handler valida el URL (solo `instagram.com/p|reel|tv`), el `html` devuelto no contiene `<script>`, no hay secretos ni tokens en el repo y no se renderiza entrada de formularios como HTML.
- Probar SEO: las rutas conservan title único, meta description no vacía, `html lang` correcto en ES/EN, alternates/metadata global y structured data sin errores; los enlaces nuevos no rompen `metadataBase`.
- Probar performance: no agregar fuentes ni raster por defecto, no aumentar significativamente el bundle, `embed.js` solo cuando el slot es observable, iframes `loading="lazy"` y animaciones decorativas desactivables con reduced motion.
- Verificar que los fondos cálidos, degradados violetas, orbes, Header, Footer, menú, copy, i18n, precios, formularios, agenda, WhatsApp, `ContactLauncher`, `Header` y `ContactLauncher` sin cambios son funcionalmente idénticos a la línea base (CA7).
- Ejecutar `npm run lint` y `npm run build`; guardar salida y commit diff limpio de archivos fuera del alcance. Ejecutar `git diff --check`.

**Criterio de cierre:** No hay PASS por `naturalWidth > 0`, consola limpia o ausencia de overflow solamente. Se requiere evidencia visual real de las superficies nuevas, todos los CAs de `SPECS.md` verificados (CA1-CA7), invariantes intactas y cero hallazgos bloqueantes.

**Dependencias y riesgos:** Depende de T1-T8. El mayor riesgo es una regresión del shell compartido (Footer) o un embed que falle en EN/mobile; no cerrar con pruebas solo en Home y Blog. Los `frame-ancestors` de terceros pueden variar por entorno; el fallback a card de perfil es obligatorio y debe probarse con red simulada.

## Matriz de dependencias y riesgos

| Tarea | Depende de | Riesgo principal | Mitigación |
|---|---|---|---|
| T1 | — | URL de fallback incorrecta | Fallback fijado por `SPECS.md`; validar en runtime |
| T2 | T1 | Chips dependen solo del color; glifo de IG con bajo contraste en naranja | `aria-label` + label visible + anillo `#B13A8A`; QA mide píxel real |
| T3 | T1-T2 | Fila de chips rompe grid o envolvente en 375 px | `flex-wrap gap-3`, 48/44 px, screenshots 375/768/1440 |
| T4 | T1-T3 | Fila quiet compite con conversión | Variante quiet 40 px + caption sr-only + separación ≥16 px |
| T5 | T1-T4 | 5 cards estrechas a 1024 px | Quiebre `lg` y validación en 1024 y 1440 px |
| T6 | T1-T5 | `embed.js` duplicado, layout shift, oEmbed inyecta scripts, frame-ancestors | IntersectionObserver + flag único, caja `aspect-ratio` reservada, strip de `<script>` en el route handler, fallback a perfil |
| T7 | T1-T5 | Card empuja el sticky lateral en 768 px | Columna única validada; card bajo formulario |
| T8 | T1-T5 | Fila de perfiles compite con CTA WhatsApp | Chips pequeños + tipografía menor + CTA intacto |
| T9 | T1-T8 | Regresión de shell compartido o embed en EN/mobile | Regresión completa ES/EN, embeds con fallback probado, `git diff --check` |

## Checkpoints de entrega

### Dev

- `dev` implementa T1-T8 en una feature branch, sin modificar copy existente, i18n existente, precios, formularios, agenda, WhatsApp, `ContactLauncher`, Header, menú ni metadata.
- `dev` adjunta evidencia de cada DOF y marca explícitamente cualquier excepción de asset; una TI raster pendiente bloquea la implementación de esa dependencia.
- `dev` documenta que Header y `ContactLauncher` permanecen sin cambios por decisión aprobada del prototipo.

### PR

- El PR contiene solo cambios de aplicación necesarios para T1-T8, i18n nuevo dentro de `social`, documentación de env en `.env.example` y evidencia de screenshots/computed styles.
- El PR incluye resultados de lint, build, ES/EN, responsive, fallbacks de embed y el `git diff --check` limpio; no integra el HTML de prueba como producción.

### Tech-Lead

- Revisa diff, invariantes, CAs CA1-CA7, contraste del peor pixel, semanticidad de iconos, sanitización del route handler y criterios de performance/seguridad.
- Ejecuta o valida T9 antes de aprobar merge; devuelve cualquier hallazgo a la tarea responsable, sin aceptar cambios globales no justificados.

### QA

- Tras deploy, QA carga `visual-harmony-audit`, `frontend-design-review`, `accessibility` y `browser-testing-with-devtools` cuando corresponda.
- QA repite T9 en las rutas afectadas y dos idiomas, reporta coordenadas/computed styles y no declara PASS por carga de assets solamente; los fallbacks de embed se prueban con red simulada.

**Siguiente agente:** `dev`, comenzando por T1 y T2 y continuando con T3-T8 en el orden indicado, seguido de T9 antes del PR.