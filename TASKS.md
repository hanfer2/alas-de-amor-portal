# TASKS — Corrección técnica de armonía visual

Generado por: agente tech-lead
Fecha: 2026-08-18
Base: `SPECS.md`, `UI-IMPROVEMENTS.md`, `IMAGES.md`, `.agents/skills/visual-harmony-audit/SKILL.md`
Estado: T1-T8 implementadas; verificación final ejecutada sin cambios de T9
Número de tareas: **9**

## Aprobaciones y alcance

- La aprobación de `SPECS.md` ya está concedida automáticamente para esta ocasión.
- La aprobación de `UI-IMPROVEMENTS.md` y de su HTML de prueba ya está concedida automáticamente para esta ocasión.
- Este archivo solo define trabajo técnico; no implementa código de aplicación ni modifica otro archivo.
- La implementación debe corregir todos los IDs `ISS-VIS-*` de la matriz aprobada y conservar el contenido y comportamiento actuales.
- El orden base es T1 y T2, luego T3-T8, y finalmente T9. T3 y T5 son de prioridad alta y bloquean el cierre si Inicio o Blog conservan crop, overlap, baja energía o semántica visual vacía.

## Invariantes obligatorios

- Conservar blanco cálido, degradados violetas, orbes y lenguaje etéreo global; no reemplazar `warm-white`, `gradient-hero`, `gradient-spiritual`, `gradient-card` ni los fondos aprobados.
- Conservar Header, Footer, menú móvil, navegación, logo, flags, skip link y sus estados; no cambiar la estructura ni el z-index global del Header (`z-50`).
- Conservar copy, claves de `src/locales/es.json` y `src/locales/en.json`, idioma ES/EN, títulos, descripciones, fechas, precios, monedas, duración y CTA existentes.
- Conservar formularios, validaciones, server actions, agenda, precios de `src/lib/prices.ts`, WhatsApp, enlaces y `ContactLauncher`; no disparar acciones durante la inspección.
- Usar Georgia para títulos y `Inter` para cuerpo, controles y metadata. No agregar fuentes.
- Mantener los SVG decorativos con `aria-hidden="true"`; el texto y los controles deben comunicar el significado por sí mismos.
- No usar color como único indicador semántico. Los gráficos relevantes deben tener silueta, borde o forma distinguible.
- No introducir `nowrap`, truncamiento, crop accidental, overflow horizontal ni placas que tapen CTA, campos o metadata.

## Política de assets

- El tratamiento predeterminado es SVG/CSS inline: alas, ondas, loto, calendario, paloma, comillas, marcador editorial, iconos de credenciales, fallbacks, marcadores, conectores, halos y placas.
- Los assets ya documentados en `IMAGES.md` se conservan y solo se validan por encuadre, carga diferida, fallback, anonimato y relación con el contenido.
- No solicitar ni crear assets raster nuevos para esta iteración. Si el Diseñador demuestra que SVG/CSS no basta, debe abrir antes una TI independiente (`TI-RASTER-XX`) con briefing de ruta, propósito semántico, composición, dimensiones, formato, peso, paleta, encuadre, anonimato/originalidad, accesibilidad y criterio de validación; el asset debe documentarse en `IMAGES.md` antes de que `dev` lo consuma.
- No usar el HTML de `design-proposals/visual-harmony-audit/index.html` como código de producción ni integrar sus placeholders.

## Evidencia visual común para todos los DOF

Cada tarea T1-T9 debe aplicar la skill `visual-harmony-audit` y adjuntar evidencia del área modificada. La evidencia mínima es:

- Screenshots de viewport en 375 px, 768 px y 1280 px o 1440 px, en ES y EN cuando el texto pueda cambiar de línea.
- Bounding boxes de Header, H1, subtítulo/descripción, icono o imagen, CTA y el bloque funcional cercano; anotar coordenadas y viewport.
- `computedStyle` de `color`, `opacity`, `filter`, `transform`, `z-index`, `object-fit`, `object-position`, `font-family`, `font-size`, `font-weight` y `line-height`.
- Estado con assets lazy cargados y estado con `prefers-reduced-motion: reduce`.
- Contraste calculado sobre el peor pixel real del fondo detrás de cada texto o gráfico: texto normal mínimo 4.5:1, texto grande mínimo 3:1 y gráfico relevante mínimo 3:1. No aceptar el promedio del degradado.
- Verificación de z-index y safe zone: ningún elemento cruza Header o menú, ningún copy queda bajo blur y ningún CTA, formulario o enlace pierde su área de interacción.
- Verificación de crop, `object-fit`, `object-position`, proporción y ausencia de layout shift o overflow horizontal.
- Verificación de coherencia imagen-contenido: el recurso debe reforzar el título y la sección, no ser un placeholder genérico ni un símbolo semánticamente vacío.

## Tareas

### T1 — Safe zones y z-index de decoraciones compartidas

**Estado:** ✅ Implementada y verificada en runtime

**Prioridad:** Alta
**IDs:** `ISS-VIS-SAFEZONE-SHELL`, `ISS-VIS-SPACING-GLOBAL-HERO`, todos los `ISS-VIS-OVERLAP-*` y `ISS-VIS-CROP-*` de las siete rutas
**Archivos objetivo:** `src/components/HeroDecoration.tsx`, wrappers hero de `src/app/page.tsx`, `src/app/nosotros/page.tsx`, `src/app/servicios/page.tsx`, `src/app/agendar/page.tsx`, `src/app/contacto/page.tsx`, `src/app/testimonios/page.tsx`, `src/app/blog/page.tsx`, y solo reglas locales necesarias en `src/app/globals.css`

**Objetivo técnico:**

- Establecer en cada hero una franja segura debajo del Header fijo, equivalente a la altura observada del Header más 16 px, sin modificar Header, Footer ni menú.
- Mantener decoraciones en una capa local inferior (`z-index: 0`), contenido en capa superior (`z-index: 1`), `pointer-events: none` y `aria-hidden` en SVG/orbes.
- Reubicar las decoraciones dentro de rails o cajas locales relativas al hero, no con `top: 0` o posiciones que entren en la banda del Header. En mobile deben quedar completamente dentro del viewport.
- Evitar que blur, halos u orbes se dibujen sobre H1, descripción, CTA, foto, formulario o metadata; limitar la decoración a su área intencional sin alterar el fondo global.

**DOR:**

- T2 no puede aprobarse si la nueva jerarquía local impide medir safe zones y el pipeline de CSS sigue sin emitir los roles necesarios.
- Se conocen las alturas aproximadas auditadas del Header: 107-129 px mobile y 129 px desktop.
- Cada ruta mantiene su wrapper, navegación y contenido funcional sin cambios de copy.

**DOF:**

- Aplicar la evidencia visual común y demostrar con bounding boxes que ninguna decoración cruza el Header o el menú en 375/768/1280-1440.
- Inicio: alas completas, sin salir por la izquierda ni invadir logo, foto o CTA. Nosotros, Servicios, Agendar, Contacto, Testimonios y Blog: decoración completa debajo de la safe zone.
- Computed styles confirman `z-index`, `pointer-events`, `opacity`, `filter`, `transform` y ausencia de blur sobre copy; no hay crop interno por `overflow-hidden`.
- Con reduced motion, las formas permanecen visibles y estáticas; el teclado puede alcanzar todos los controles porque ninguna decoración intercepta pointer o foco.

**Dependencias y riesgos:** Precede T3-T8. Un `z-index` global o un cambio al Header rompe el alcance; cualquier solución que cambie el shell debe rechazarse.

### T2 — Jerarquía de títulos, descripciones y placas locales

**Estado:** ✅ Implementada y verificada en runtime

**Prioridad:** Alta
**IDs:** `ISS-VIS-CONTRAST-GLOBAL-ROLES`, `ISS-VIS-SPACING-GLOBAL-HERO`
**Archivos objetivo:** `src/app/globals.css` y los wrappers de copy de las siete rutas

**Objetivo técnico:**

- Verificar y corregir la emisión real de `.role-h1`, `.role-h2`, `.role-card-title`, `.role-subtitle`, `.role-description`, `.role-metadata`, `.role-icon`, `.role-cta` y `.hero-icon-halo` en Tailwind/PostCSS; no asumir que la regla declarada está servida.
- Mantener H1/H2 en Georgia y cuerpo en Inter, con color, peso, tamaño y line-height diferenciados; retirar la dependencia de `text-gradient` como único contraste o indicador de jerarquía.
- Separar H1 de subtítulo/descripción por al menos 12 px. Mantener wraps naturales en ES/EN, máximo tres líneas de H1 a 375 px cuando el contenido lo permita y sin truncar copy.
- Medir el peor pixel del degradado real. Añadir placa local opaca `#fefcfb` o `#f5f3ff`, con padding aproximado de 16x20 px y radio coherente, únicamente en los bloques que fallen; no cambiar degradados ni cubrir acciones.

**DOR:**

- T1 define las safe zones locales y todos los textos actuales de ES/EN fueron identificados sin crear claves ni copy.
- La matriz de contraste aprobada en `UI-IMPROVEMENTS.md` está disponible como referencia, pero la decisión final usa screenshot real.

**DOF:**

- Aplicar la evidencia visual común en las siete rutas; registrar computed styles de H1, subtítulo, descripción, metadata, CTA e iconos.
- Confirmar ratios 4.5:1 para texto normal y 3:1 para texto grande/gráfico en el peor pixel; si falla, la placa local debe hacer que cumpla sin alterar el fondo.
- Confirmar separación mínima de 12 px, orden semántico de headings, foco visible de al menos 2 px y lectura correcta tras alternar ES/EN y reduced motion.
- No se admiten zonas de descripción sobre `backdrop-blur`, orbes o gradientes que desvanezcan el texto.

**Dependencias y riesgos:** T1. Una regla utility no emitida o una placa aplicada globalmente puede producir regresiones de color y de layout; revisar por ruta y no usar selectores genéricos sin contexto.

### T3 — Corrección de Inicio

**Estado:** ✅ Implementada y verificada en runtime

**Prioridad:** Crítica/Alta
**IDs:** `ISS-VIS-OVERLAP-HOME-HERO`, `ISS-VIS-CROP-HOME-HERO`
**Archivos objetivo:** `src/app/page.tsx`, `src/components/HeroDecoration.tsx`, estilos de T1-T2

**Objetivo técnico:**

- Mantener la foto de Liliana, logo, badge, H1, descripción y los dos CTA sin modificar copy ni destinos.
- Convertir las alas en un aura de marca intencional, completa y semánticamente relacionada con acompañamiento; ubicarla en un rail de la columna de foto, bajo Header y detrás del contenido, con escala segura de hasta 280 px mobile y hasta 420 px desktop.
- Resolver el contraste de H1/descripción con la placa local de T2 solo si falla la medición real. No usar la decoración como sustituto del texto.
- Revisar los seis iconos de la preview de servicios y las estrellas de la preview para que tengan silueta, acento y contraste sin competir con foto, logo o CTAs.

**DOR:** T1 y T2 aprobadas; las claves `home.*`, destinos `/agendar`, `/servicios`, `/nosotros` y los tres testimonios de preview están congelados.

**DOF:**

- Aplicar la evidencia visual común con prioridad en 375/768/1440: bounding boxes de Header, logo, alas, foto, H1, descripción, badge y ambos CTA.
- No aceptar alas cortadas, fuera de viewport, sobrepuestas al menú, con opacity/blur que elimine la silueta ni visualmente desconectadas de la foto.
- Blog e Inicio son gate de alta prioridad: si Inicio aún muestra overlap o crop, el PR no puede avanzar a QA.
- ES/EN mantienen jerarquía H1 > descripción > CTA; reduced motion no oculta foto, iconos ni controles; no hay overflow horizontal ni cambio de LCP por un asset nuevo.

**Dependencias y riesgos:** T1-T2. El hero tiene múltiples focos; aumentar tamaño, opacidad o halo no debe hacer que la decoración supere la foto, la marca o la acción primaria.

### T4 — Corrección de Nosotros

**Estado:** ✅ Implementada y verificada en runtime

**Prioridad:** Alta
**IDs:** `ISS-VIS-LOW-ENERGY-NOSOTROS`, `ISS-VIS-OVERLAP-NOSOTROS-HERO`
**Archivos objetivo:** `src/app/nosotros/page.tsx`, `src/components/HeroDecoration.tsx`, estilos locales

**Objetivo técnico:**

- Mantener loto, retrato, bio, metas, credenciales, certificados, galerías, alt y orden de lectura.
- Dar al loto una silueta de flor abierta con núcleo dorado, contorno coral de al menos 2 px y centro aqua, dentro de una caja segura posterior al Header.
- Sustituir la repetición visual de seis sellos monocromos por seis variaciones SVG inline distinguibles a 24 px, asociadas a energía, barras, luz, mediumnidad, ángel y crecimiento; son apoyo decorativo y el texto conserva el significado.
- Aplicar separación y placa local de T2 solo si el peor punto del hero falla.

**DOR:** T1-T2 aprobadas; rutas de imágenes de retrato, certificados y galerías verificadas contra `IMAGES.md`; no se crean assets raster.

**DOF:**

- Aplicar la evidencia visual común y demostrar loto completo, H1/descripción legibles y sin cruce con Header a 375/768/1440.
- Cada credencial tiene silueta distinguible, contraste gráfico mínimo 3:1, `aria-hidden="true"` y no cambia el orden de lectura.
- Las imágenes existentes conservan `object-fit`, `object-position`, alt, proporción y fallback sin crop o layout shift; ES/EN no rompe tarjetas ni galería.

**Dependencias y riesgos:** T1-T2. Un icono más fuerte no debe competir con el retrato ni convertir las credenciales en información comunicada solo por color.

### T5 — Corrección de Servicios y Blog

**Estado:** ✅ Implementada y verificada en runtime

**Prioridad:** Crítica/Alta
**IDs Servicios:** `ISS-VIS-LOW-ENERGY-SERVICIOS`, `ISS-VIS-BLUR-SERVICIOS-FALLBACK`
**IDs Blog:** `ISS-VIS-LOW-ENERGY-BLOG`, `ISS-VIS-OUT-OF-PLACE-BLOG`, `ISS-VIS-OVERLAP-BLOG-HERO`
**Archivos objetivo:** `src/app/servicios/page.tsx`, `src/app/blog/page.tsx`, `src/components/HeroDecoration.tsx`, `src/lib/prices.ts` solo como lectura/verificación

**Objetivo técnico:**

- Servicios: redibujar `EnergyWaves` como ondas asimétricas que convergen en una semilla/chispa, con contornos aqua, coral y dorado de al menos 2 px; mantener categorías, filas, fotos, CTA, precios, moneda, tasa, caché y fallback de precio.
- Servicios: sustituir el fallback concéntrico de `ServiceBlock` por un placeholder SVG contextual por categoría, dentro de caja de proporción fija; ante 404 debe conservar tamaño, alt/semántica textual, contenido y no producir layout shift. Sanaciones conserva Variante A únicamente en sus tres cards y sus tres assets documentados.
- Blog, de prioridad alta: reemplazar visualmente `OpenBook` por un marcador editorial de páginas, lomo, cinta y líneas de lectura más una chispa/hoja mínima; resolverlo como SVG/CSS inline, nunca como icono genérico, miniatura o asset raster nuevo.
- Blog: colocar el marcador en rail seguro junto al título en desktop y encima del copy en mobile; debe quedar relacionado con categoría, fecha, título H2, excerpt y enlace. El SVG es decorativo (`aria-hidden`) y no puede ser semánticamente vacío: la información la comunican headings, metadata, excerpt y enlace existentes.
- No cambiar posts, fechas, links, newsletter, `preventDefault`, categorías, precios ni el formato ES/EN.

**DOR:** T1-T2 aprobadas; `catalog`, `formatPrice`, IDs, imágenes existentes, claves `servicios.*` y cuatro entradas de `blog.posts` comparadas en ambos idiomas; no se solicita raster.

**DOF:**

- Aplicar la evidencia visual común a Servicios y Blog en 375/768/1440, incluidos bounding boxes de Header, H1, descripción, decoración, H2, metadata, imagen/fallback, precio y CTA.
- Blog es gate de alta prioridad: no aceptar icono cortado, sobrepuesto al menú, perdido en blur, desconectado de la grilla o reducido a un símbolo semánticamente vacío. En ES/EN títulos, fechas, excerpts, newsletter y enlaces mantienen wraps naturales.
- Servicios conserva filas alternas y cinco categorías no-Sanaciones; ninguna imagen, precio, duración o CTA queda tapada. Fallbacks 404 mantienen caja estable y una forma contextual que no depende solo del color.
- Confirmar contraste real, z-index, `object-fit`/`object-position`, lazy load, reduced motion, teclado, no overflow y cero cambio de comportamiento de moneda/tasa.

**Dependencias y riesgos:** T1-T2. Un selector compartido no debe convertir todas las categorías en Variante A; condicionar la rama de Sanaciones por categoría y no tocar `src/lib/prices.ts`.

### T6 — Marcadores nítidos de los pasos de Agendar

**Estado:** ✅ Implementada y verificada en runtime

**Prioridad:** Alta
**IDs:** `ISS-VIS-SPACING-AGENDAR-STEPS`, `ISS-VIS-LOW-ENERGY-AGENDAR`
**Archivos objetivo:** `src/app/agendar/page.tsx`, `src/components/HeroDecoration.tsx`, estilos locales; `src/components/AppointmentForm.tsx` solo como superficie invariante de verificación

**Objetivo técnico:**

- Mantener exactamente tres pasos, sus claves, copy, orden y flujo.
- Diseñar marcadores 1/2/3 nítidos: 72x72 px desktop y 64x64 px mobile, fondo crema, borde exterior sólido de 3 px, anillo interior de 1 px, número Georgia 700 en ciruela y un acento controlado distinto por paso.
- No aplicar blur ni filter al número ni al contenedor del marcador. Añadir conector de 1 px solo entre marcadores en desktop; en mobile conservar columna apilada sin línea cruzando texto.
- Reubicar `CalendarWings` bajo la safe zone y mantenerlo decorativo; placa local de H1/descripción solo ante fallo de contraste.

**DOR:** T1-T2 aprobadas; contrato de `AppointmentForm`, catálogo y claves ES/EN revisados; no se modifica validación, server action, WhatsApp ni campos.

**DOF:**

- Aplicar la evidencia visual común en 375/768/1440 y medir bounding boxes de los tres marcadores, títulos y descripciones de paso, decoración, formulario, imagen y CTA.
- Los números 1/2/3 son legibles, no borrosos, tienen contraste gráfico mínimo 3:1 y mantienen caja estable en ES/EN; el H1 y descripción están separados al menos 12 px.
- Confirmar que formulario, foco, orden de teclado, validación, agenda y WhatsApp no cambian, no se abren durante QA y no generan overflow horizontal.
- Confirmar reduced motion estático sin ocultar pasos, imagen, formulario ni controles.

**Dependencias y riesgos:** T1-T2. Un tratamiento ornamental que compita con campos o CTA se rechaza; los controles de conversión prevalecen sobre la decoración.

### T7 — Corrección de Contacto

**Estado:** ✅ Implementada y verificada en runtime

**Prioridad:** Media-Alta
**IDs:** `ISS-VIS-LOW-ENERGY-CONTACTO`, `ISS-VIS-CONTRAST-CONTACTO`
**Archivos objetivo:** `src/app/contacto/page.tsx`, `src/components/HeroDecoration.tsx`, estilos locales; `src/components/ContactForm.tsx`, `src/components/ContactLauncher.tsx` solo como invariantes

**Objetivo técnico:**

- Mantener imagen lateral, formulario, canales, labels, tarjeta sticky, email, teléfono, ubicación, horario, WhatsApp y ContactLauncher.
- Redibujar `DovePeace` como marca compacta de paz/puente de aproximadamente 120x72 px, contorno coral, ala aqua y núcleo dorado, en caja segura y sin entrar en Header.
- Aplicar acentos locales controlados: aqua para teléfono/email, coral para WhatsApp, dorado para horario/ubicación; cada canal conserva label, borde o icono identificable y no depende solo del color.
- Separar H1/descripción y usar placa local solo si el contraste del degradado real falla.

**DOR:** T1-T2 aprobadas; contratos de `ContactForm`, `ContactLauncher` y `config.contact` verificados; no se crean assets raster ni nuevas integraciones.

**DOF:**

- Aplicar la evidencia visual común en 375/768/1440, con bounding boxes de Header, paloma, H1, descripción, formulario, canales y CTA.
- Paloma completa, legible a su tamaño real, fuera del Header y sin competir con formulario; H1/descripción alcanzan 4.5:1 en la superficie real.
- Labels, foco visible, navegación por teclado, enlaces externos con protección existente y estados de formulario se mantienen; coral no parece estado de error.
- Confirmar reduced motion, no overflow, `object-fit`/`object-position` de la imagen lateral y ausencia de ejecución de envío/WhatsApp durante la prueba.

**Dependencias y riesgos:** T1-T2. Un acento coral sobredimensionado puede dominar el botón o confundirse con error; limitarlo a detalles locales.

### T8 — Corrección del sistema de Testimonios

**Estado:** ✅ Implementada y verificada en runtime

**Prioridad:** Media-Alta
**IDs:** `ISS-VIS-LOW-ENERGY-TESTIMONIOS`, `ISS-VIS-BLUR-TESTIMONIOS-HERO`
**Archivos objetivo:** `src/app/testimonios/page.tsx`, `src/components/HeroDecoration.tsx`, estilos locales; assets y fallback según `IMAGES.md`

**Objetivo técnico:**

- Mantener seis testimonios, nombres, localidades, terapias, quotes, rating 5, CTA, compartir por WhatsApp y avatares anónimos documentados.
- Convertir `SparkleStars` en comillas grandes coral con chispa dorada y trazos aqua, como sistema visual editorial de testimonios; mantenerlo decorativo y no invasivo.
- Mantener avatar circular de 56-64 px, halo lavanda y fallback de monograma/símbolo ante 404; conservar todos los datos y no insinuar fotografía de una clienta real.
- Mantener cinco estrellas derivadas de `item.rating` y una alternativa accesible equivalente; dorado es gráfico, no texto normal de bajo contraste.

**DOR:** T1-T2 aprobadas; seis entradas y `rating: 5` comparados en ES/EN; seis rutas de avatar existen y están documentadas en `IMAGES.md`; no se crean raster nuevos.

**DOF:**

- Aplicar la evidencia visual común en 375/768/1440, con bounding boxes de Header, H1, descripción, comillas/destellos, avatar, estrellas, quote, metadata y CTA.
- El hero no compite con copy ni cards; no hay partículas invisibles, blur sobre descripción, crop ni overlap.
- Simular 404 por avatar: halo, monograma/símbolo, nombre, localidad, terapia, quote y rating permanecen sin imagen rota ni layout shift; cinco estrellas visibles y con nombre accesible equivalente.
- Verificar `aria-hidden` de decoración, alt/decisión decorativa de avatar, teclado, reduced motion, contraste gráfico mínimo 3:1 y no overflow en ES/EN.

**Dependencias y riesgos:** T1-T2. Un avatar ilustrativo no debe parecer evidencia fotográfica; un rating no puede depender únicamente de cinco símbolos o del color.

### T9 — Regresión visual, funcional y de entrega de las siete rutas

**Prioridad:** Bloqueante
**Alcance:** `/`, `/nosotros`, `/servicios`, `/agendar`, `/contacto`, `/testimonios`, `/blog`, Header, menú móvil, Footer, decoraciones compartidas, formularios, precios, i18n y `ContactLauncher`

**Objetivo técnico:** Ejecutar la validación final con la skill `visual-harmony-audit`, Playwright/browser tooling y los comandos del proyecto; no introducir correcciones nuevas no asignadas. Todo hallazgo debe volver a T1-T8 con ID `ISS-VIS-*` estable.

**DOR:** T1-T8 tienen evidencia de DOF, el HTML aprobado fue usado solo como referencia, no existen TI raster pendientes y el entorno puede ejecutar `npm run lint`, `npm run build` y el servidor de producción local.

**DOF visual y funcional:**

- Capturar las siete rutas en ES y EN en 375, 768 y 1280/1440; revisar después de lazy load y con `prefers-reduced-motion: reduce`.
- Para cada ruta registrar bounding boxes de Header, H1, subtítulo, icono/imagen, CTA y bloque funcional principal; registrar computed styles completos de la skill: color, opacity, filter, transform, z-index, object-fit, object-position, font-family, font-size, font-weight y line-height.
- Medir el peor pixel real detrás de H1, descripción, metadata, CTA, iconos y estrellas; exigir 4.5:1 texto normal, 3:1 texto grande y 3:1 gráficos. Validar que cada placa local aparece solo donde corresponde.
- Revisar explícitamente safe zones, z-index, blur, crop, silueta, intención semántica, coherencia imagen-contenido, `aria-hidden`, alt/fallback y ausencia de iconos invisibles, genéricos, cortados o sobrepuestos.
- Confirmar cero overflow horizontal y cero layout shift perceptible; validar `object-fit`/`object-position`, carga diferida, ausencia de blur sobre copy y LCP menor de 2.5 s cuando el entorno permita medirlo.
- Probar teclado completo: skip link, navegación Header y Footer, cambio de idioma, menú móvil, foco visible, formularios, newsletter, CTAs, enlaces externos y apertura/cierre de ContactLauncher; Escape y cierre por ruta deben seguir funcionando.
- Probar SEO: las siete rutas conservan title único, meta description no vacía, `html lang` correcto en ES/EN, alternates/metadata global y structured data sin errores; no modificar SEO para maquillar un fallo visual.
- Probar seguridad: no introducir HTML no sanitizado, nuevos endpoints ni secretos; conservar `noopener noreferrer` en externos, validaciones actuales y no renderizar entrada de formularios como HTML.
- Probar performance: no agregar fuentes ni raster por defecto, no aumentar significativamente el bundle, mantener animaciones decorativas desactivables y no aplicar filtros costosos sobre texto o controles.
- Simular 404 de los tres iconos de Sanaciones, seis avatares de Testimonios y fallbacks de imágenes relevantes de Servicios; layout, contenido, halo, alt/semántica y CTA permanecen estables sin imagen rota.
- Probar `not-found` y una ruta inexistente: fallback 404 carga sin consola roja, mantiene acceso a navegación/Footer y no deja pantalla vacía ni overflow.
- Verificar que fondos cálidos, degradados violetas, orbes, Header, Footer, menú, copy, i18n, precios, formularios, agenda, WhatsApp y ContactLauncher son funcionalmente idénticos a la línea base.
- Ejecutar `npm run lint` y `npm run build`; guardar salida y commit diff limpio de archivos fuera del alcance. Ejecutar `git diff --check`.

**Criterio de cierre:** No hay PASS por `naturalWidth > 0`, consola limpia o ausencia de overflow solamente. Se requiere evidencia visual real de las siete rutas, todos los IDs de auditoría resueltos, invariantes funcionales intactos y cero hallazgos bloqueantes.

**Dependencias y riesgos:** Depende de T1-T8. El mayor riesgo es una regresión del shell compartido o una corrección local que falle en EN/mobile; no cerrar con pruebas solo en Servicios y Testimonios.

## Checkpoints de entrega

### Dev

- `dev` implementa T1-T8 en una feature branch, sin modificar copy, i18n, precios, formularios, agenda, WhatsApp, ContactLauncher, Header, Footer o menú.
- `dev` adjunta evidencia de cada DOF y marca explícitamente cualquier excepción de asset; una TI raster pendiente bloquea la implementación de esa dependencia.

### PR

- El PR contiene solo cambios de aplicación necesarios para T1-T8, documentación de asset únicamente si existe TI aprobada y evidencia de screenshots/computed styles.
- El PR incluye resultados de lint, build, ES/EN, responsive y fallbacks; no integra el HTML de prueba como producción.

### Tech-Lead

- Revisa diff, invariantes, IDs `ISS-VIS-*`, safe zones, jerarquía, contraste del peor pixel, semanticidad de iconos y criterios de performance/seguridad.
- Ejecuta o valida T9 antes de aprobar merge; devuelve cualquier hallazgo a la tarea responsable, sin aceptar cambios globales no justificados.

### QA

- Tras deploy, QA carga `visual-harmony-audit`, `frontend-design-review`, `accessibility` y `browser-testing-with-devtools` cuando corresponda.
- QA repite T9 en las siete rutas y dos idiomas, reporta coordenadas/computed styles y no declara PASS por carga de assets solamente.

**Siguiente agente:** `dev`, comenzando por T1 y T2 y continuando con T3-T8 en el orden indicado.
