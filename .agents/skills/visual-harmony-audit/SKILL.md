---
name: visual-harmony-audit
description: Audita iconos, imágenes, títulos y decoraciones visuales en interfaces existentes. Úsala cuando un elemento se vea feo, borroso, cortado, sobrepuesto, fuera de lugar, desconectado de la marca o con poco contraste; exige evidencia por screenshot, DOM y viewport.
---

# Visual Harmony Audit

Audita una interfaz existente como una persona real de negocio: no basta con
que un asset cargue. Debe tener intención, encuadre, contraste, presencia y
relación clara con el título, la descripción y la acción de su pantalla.

## Alcance obligatorio

Revisa cada ruta y cada bloque visual relevante, no solo la pantalla principal:

- `/`
- `/nosotros`
- `/servicios`
- `/agendar`
- `/contacto`
- `/testimonios`
- `/blog`
- `Header`, menú móvil, `Footer` y componentes decorativos compartidos

## Criterios de evaluación

Para cada hero, título, subtítulo, icono, imagen y card verifica:

1. **Encaje semántico:** el recurso comunica la sección y no parece un
   placeholder genérico, un objeto sin relación o una imagen de otra pantalla.
2. **Composición:** no está cortado, aplastado, descentrado ni con demasiado
   espacio muerto; `object-fit`, `object-position` y el contenedor son adecuados.
3. **Capas y z-index:** no queda detrás del Header, encima del menú, sobre el
   copy, fuera del viewport ni interfiere con CTA, formulario o navegación.
4. **Visibilidad:** no desaparece por `opacity`, blur, gradiente o color similar;
   no se considera correcto un icono casi invisible.
5. **Contraste:** título y descripción tienen color, peso y tamaño distintos;
   texto normal alcanza 4.5:1 y texto grande 3:1 sobre el pixel desfavorable
   del fondo real.
6. **Armonía:** colores, bordes, halos, sombras y tipografía pertenecen al
   sistema de marca y al lenguaje visual de la propuesta aprobada.
7. **Energía visual:** el icono tiene una silueta legible a su tamaño real,
   suficiente color y un detalle intencional; rechaza símbolos pobres,
   concéntricos o monocromos cuando sean el foco de una sección.
8. **Responsive:** funciona a 375 px, 768 px y desktop mínimo 1280 px; no se
   corta ni cambia de significado al cambiar de viewport.
9. **Contenido:** la descripción respira, no toca bordes difuminados y tiene
   separación mínima de 12 px respecto al título; el texto no queda sobre una
   zona de blur sin placa local.

## Evidencia mínima

Para cada ruta captura o inspecciona:

- Screenshot del viewport en 375 px y 1280/1440 px.
- Bounding boxes de Header, H1, subtítulo, icono/imagen y CTA.
- `computedStyle` de `color`, `opacity`, `filter`, `transform`, `z-index`,
  `object-fit`, `object-position`, `font-family`, `font-size`, `font-weight` y
  `line-height`.
- Estado después de cargar lazy assets y estado con `prefers-reduced-motion`.
- Estado ES y EN cuando el texto pueda cambiar de línea.

## Taxonomía estable de issues

Usa el mismo ID entre rondas:

- `ISS-VIS-OVERLAP-[ruta]-[elemento]`: sobre Header, menú, CTA o contenido.
- `ISS-VIS-CROP-[ruta]-[elemento]`: cortado, mal encuadrado o fuera de viewport.
- `ISS-VIS-BLUR-[ruta]-[elemento]`: difuminado por blur, opacity o degradado.
- `ISS-VIS-CONTRAST-[ruta]-[elemento]`: colores demasiado parecidos o ratio insuficiente.
- `ISS-VIS-OUT-OF-PLACE-[ruta]-[elemento]`: recurso desconectado del contenido.
- `ISS-VIS-LOW-ENERGY-[ruta]-[elemento]`: icono pobre, invisible o genérico.
- `ISS-VIS-SPACING-[ruta]-[elemento]`: copy pegado al borde o jerarquía sin aire.

Cada issue debe incluir ruta, componente, viewport, coordenadas, screenshot,
estilos observados, por qué afecta negocio y criterio de corrección. No uses
"se ve feo" sin describir la causa observable.

## Gate de Diseñador

El Diseñador debe auditar el portal completo antes de proponer parches. Para
cada pantalla entrega una fila de matriz con: título, descripción, icono/imagen,
problema, tratamiento de color, tratamiento de encuadre y estado responsive.
Toda propuesta visual incluye el HTML de prueba obligatorio con variantes,
capturas y placeholders claramente marcados.

## Gate de QA

QA no puede declarar PASS por `naturalWidth > 0` solamente. Debe revisar el
resultado visual real contra esta skill y reportar cualquier recurso cargado
pero incorrecto, borroso, cortado, sobrepuesto, invisible o desconectado.
Usa también `frontend-design-review`, `frontend-design`, `accessibility` y
`browser-testing-with-devtools` cuando corresponda.
