# SPEC — Actualización de precios y nuevos servicios en /servicios
Generado por: agente po
Fecha: 2026-08-06
Estado: ✅ Aprobado

## Objetivo de negocio
Actualizar los precios de las terapias al listado real de Liliana y agregar los nuevos servicios (Sanaciones, Lectura angelical básica, Combo Barras + Reiki), manteniendo el catálogo organizado por categorías para que los visitantes vean la oferta completa con sus precios en COP (y USD en inglés).

## Usuario objetivo
Visitante del portal que consulta precios de servicios en /servicios y agenda desde /agendar.

## Alcance

### Incluye
- Actualizar precios de terapias existentes:
  - **Barras Access**: 180.000 → **230.000** COP
  - **Reiki**: 150.000 → **160.000** COP
- Agregar **Combo Barras + Reiki** (**265.900** COP) como ítem en la categoría **Terapias**.
- Agregar **Médium** → precio **90.000** COP (actualizar el ítem existente en Talleres).
- Crear **nueva categoría "Sanaciones"** con 3 ítems:
  - **Sanación niño interior** — **180.000** COP (renombrada y movida desde Talleres; antes "Taller Sanando tu niña interior" a 250.000)
  - **Sanación mamá** — **180.000** COP (nuevo)
  - **Sanación papá** — **180.000** COP (nuevo)
- Crear **categoría única "Lectura Angelical"** que consolide las lecturas angelicales (para poder agregar más variantes a futuro):
  - **Lectura angelical básica** — **50.000** COP (nuevo)
  - **Lectura Angelical** — **120.000** COP (movida desde Terapias)
  - **Lectura Oráculo Angelical** — **120.000** COP (movida desde Talleres)
- Mantener los **talleres de formación "Reiki Usui" (150.000)** y **"Taller Barras Access" (180.000)** con sus precios actuales (son talleres para enseñar a hacer las terapias, distintos de las terapias).
- Mantener sin cambios: Chakras (130.000), Meditación (90.000), Facelight (110.000), Coaching (160.000), Oráculos (100.000), Charlas y Retiros ("Consultar").
- Mantener el dropdown de /agendar sincronizado con el catálogo.

### NO incluye
- Cambios de diseño/estilo de la página de servicios.
- Cambios al mecanismo de conversión COP→USD (ya implementado).
- Nuevas categorías más allá de Sanaciones y Lectura Angelical.
- Pagos en línea.

## Historia(s) de usuario
- Como visitante, quiero ver los precios correctos y actualizados de cada terapia, para decidir sin llamar.
- Como visitante, quiero encontrar las Sanaciones (niño interior, mamá, papá) y las Lecturas angelicales en su propia sección, para comparar variantes.
- Como administradora (Liliana), quiero que el combo Barras + Reiki tenga su propio precio, para ofrecer el paquete.

## Criterios de aceptación (lenguaje de negocio, verificables)
- [ ] CA1: En /servicios, la categoría Terapias muestra: Reiki $160.000, Barras Access $230.000, Combo Barras + Reiki $265.900, Chakras, Meditación, Facelight, Coaching y Oráculos con sus precios.
- [ ] CA2: La categoría "Sanaciones" existe y muestra niño interior, mamá y papá, cada uno a $180.000.
- [ ] CA3: La categoría "Lectura Angelical" existe y muestra la básica a $50.000, Lectura Angelical a $120.000 y Lectura Oráculo Angelical a $120.000.
- [ ] CA4: En la categoría Talleres, Médium muestra $90.000; Reiki Usui y Taller Barras Access mantienen $150.000 y $180.000.
- [ ] CA5: En inglés (EN) todos los precios se muestran convertidos a USD (mecanismo existente, sin cambios).
- [ ] CA6: El dropdown de /agendar refleja el catálogo actualizado sin duplicados ni ítems huérfanos.
- [ ] CA7: Móvil 375px sin overflow; build y lint pasan; 0 errores de consola.

## Contenido / copy (textos nuevos provisionales)

### Nuevos ítems
- **Combo Barras + Reiki** — desc: "Sesión combinada de Barras de Access y Reiki para una sanación integral y profunda."
- **Sanación niño interior** — desc: "Sesión de sanación para liberar heridas de la infancia y reconectar con tu niño interior."
- **Sanación mamá** — desc: "Sesión de sanación energética enfocada en la conexión y bienestar de la madre."
- **Sanación papá** — desc: "Sesión de sanación energética enfocada en la conexión y bienestar del padre."
- **Lectura angelical básica** — desc: "Lectura angelical de nivel básico para recibir orientación de tus ángeles."
- **Médium** — desc: "Sesión de mediumnidad para conexión espiritual y mensajes de tus seres de luz." (mantiene texto existente, cambia solo el precio)

### Categorías nuevas
- "Sanaciones" (ES) / "Healings" (EN)
- "Lectura Angelical" (ES) / "Angelic Reading" (EN)

## Notas y restricciones
- Los precios se actualizan SOLO en `src/lib/prices.ts` (fuente única en COP). NO se tocan los archivos de idioma para precios.
- Los títulos/descripciones nuevos se agregan a `es.json` y `en.json` (i18n).
- Se elimina/mueve el ítem "Taller Sanando tu niña interior" (nina) de Talleres → Sanaciones como "Sanación niño interior".
- Se mueve "Lectura Angelical" (angelical) de Terapias → categoría Lectura Angelical.
- Se mueve "Lectura Oráculo Angelical" (angelical-taller) de Talleres → categoría Lectura Angelical.
- Paleta violeta (reiki-*), sin verde/amarillo. El combo puede usar el color de Terapias.
- El dropdown de /agendar se alimenta del catálogo; se debe verificar que al mover ítems de categoría no queden referencias huérfanas.

## Preguntas abiertas
Ninguna (resueltas con las decisiones anteriores).
