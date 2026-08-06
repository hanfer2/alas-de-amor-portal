# SPEC — Precios y catálogo por categorías en /servicios
Generado por: agente po
Fecha: 2026-08-06
Estado: ✅ Aprobado

## Objetivo de negocio
Que el visitante vea el precio de cada terapia, taller, charla y retiro directamente en la página de servicios, en su moneda correcta (COP en español, USD en inglés), sin tener que llamar para preguntar. Esto reduce fricción en la decisión y transmite profesionalismo.

## Usuario objetivo
Visitante del portal que quiere conocer la oferta de Alas de Amor y decidir qué servicio contratar.

## Alcance

### Incluye
- Reorganizar la página `/servicios` en **categorías**:
  - **Terapias** (las 8 actuales: Reiki, Barras de Access, Lectura Oráculo Angelical, Chakras, Meditación, Facelight, Coaching, Oráculos)
  - **Talleres personalizados** (nuevos): Taller "Sanando tu niña interior", Lectura Oráculo Angelical, Medium, Reiki Usui, Barras Access
  - **Charlas** (nuevos, ítems individuales)
  - **Retiros espirituales** (nuevos, ítems individuales)
- Cada ítem de cada categoría muestra su **precio**.
- Los precios se almacenan SIEMPRE en pesos colombianos (COP).
- Cuando el idioma sea inglés (EN), el precio se muestra convertido a USD calculado a partir de una tasa de cambio.
- Cada ítem tiene descripción tomada de las **claves de idioma** (`es.json` / `en.json`), de modo que el texto pueda actualizarse sin tocar código.
- Mientras no exista la descripción final, se muestra un **texto provisional** en ambos idiomas.

### NO incluye
- Pagos en línea, checkout ni carrito (fuera de alcance).
- Base de datos de precios (aún no tenemos BD; se usa una estrategia local de carga de precios).
- Conversión a monedas distintas de COP y USD.
- Cambio de moneda configurable por el usuario (el cambio depende del idioma: ES→COP, EN→USD).

## Historia(s) de usuario
- Como visitante, quiero ver el precio de cada terapia, taller, charla y retiro en `/servicios`, para decidir cuál contratar sin llamar.
- Como visitante de habla inglesa, quiero ver los precios en USD, para entender el costo sin hacer la conversión yo mismo.
- Como administradora (Liliana), quiero actualizar descripciones desde los archivos de idioma, para cambiar textos sin tocar código.

## Criterios de aceptación (lenguaje de negocio, verificables)
- [ ] CA1: En `/servicios` se ven las categorías Terapias, Talleres personalizados, Charlas y Retiros espirituales, cada una con sus ítems.
- [ ] CA2: Cada ítem de cada categoría muestra un precio.
- [ ] CA3: En idioma español el precio se muestra en COP (pesos colombianos).
- [ ] CA4: Al cambiar a inglés (EN), el precio se muestra en USD, calculado a partir del valor COP con una tasa de cambio.
- [ ] CA5: Los precios NO dependen de los archivos de idioma: existen en una fuente única de precios en COP.
- [ ] CA6: Cada ítem toma su título y descripción de las claves de idioma; los talleres nuevos muestran texto provisional en ES y EN.
- [ ] CA7: La página funciona en móvil (375px) sin overflow horizontal.
- [ ] CA8: `npm run build` y `npm run lint` pasan sin errores; 0 errores de consola en el navegador.
- [ ] CA9: Si la tasa de cambio no puede obtenerse, se muestra el precio en COP con un aviso/fallback, sin romper la página.

## Contenido / copy (si aplica)

### Categorías y ítems (textos provisionales; se reemplazarán luego desde las claves de idioma)

**Terapias** (ya existentes, conservan su descripción actual en `servicios.*`):
1. Reiki
2. Barras de Access
3. Lectura Oráculo Angelical
4. Chakras
5. Meditación
6. Facelight
7. Coaching
8. Oráculos

**Talleres personalizados** (nuevos; descripción provisional por ahora):
1. Taller "Sanando tu niña interior" — *"Taller vivencial para sanar heridas de la infancia y reconectar con tu esencia."*
2. Lectura Oráculo Angelical — *"Lectura con cartas de ángeles para recibir orientación y mensajes de tus guías."*
3. Medium — *"Sesión de mediumnidad para conexión espiritual y mensajes de tus seres de luz."*
4. Reiki Usui — *"Sesión de Reiki Usui para equilibrar tu energía y promover la autosanación."*
5. Barras Access — *"Sesión de Barras de Access para liberar bloqueos y creencias limitantes."*

**Charlas** (nuevos; ítems individuales, textos y precios por definir):
1. Charla 1 — *texto por definir*
2. Charla 2 — *texto por definir*

**Retiros espirituales** (nuevos; ítems individuales, textos y precios por definir):
1. Retiro 1 — *texto por definir*
2. Retiro 2 — *texto por definir*

### Nota sobre precios provisionales
Los montos exactos en COP los define Liliana. Hasta que se carguen, la UI debe soportar un precio por ítem desde la fuente única de precios (puede iniciar con valores de ejemplo o vacío con etiqueta "Consultar").

## Notas y restricciones

### Estrategia de precios y conversión COP → USD (decisión clave)
- **Los precios NO van en los archivos de idioma.** Se guardan en una fuente única de precios en COP (por ejemplo, un módulo de datos local como `src/lib/prices.ts` o similar), lista para migrar a una BD en el futuro.
- **El valor canónico siempre es COP.** El USD es siempre un cálculo derivado.
- **Tasa de cambio**: se obtiene de un proveedor gratuito de tipo de cambio (ej. `open.er-api.com` / `exchangerate.host` / `fawazahmed0`), consultado en el cliente con caché (sessionStorage/TTL) y con un **valor de respaldo fijo** en `src/lib/config.ts` o env para cuando no haya red.
- **Formato de moneda**: usar `Intl.NumberFormat` con `currency: "COP"` / `"USD"`, nunca símbolos hardcodeados.
- No exponer API keys en el cliente; si se usa una key, irá en server-side (route handler / server action).
- Hydration: renderizar placeholder o precio por defecto hasta tener la tasa, para evitar mismatch de HTML entre servidor y cliente.

### Paleta y estilo
- Mantener la paleta violeta (`reiki-*`), SIN verde ni amarillo.
- Precio destacado de forma elegante (tipografía display, tono dorado/violeta) acorde al estilo etéreo.

### i18n
- Nuevas claves en `es.json` y `en.json` para: categorías (Terapias, Talleres, Charlas, Retiros), títulos y descripciones provisionales de los ítems nuevos, y etiquetas de precio.
- Las claves de descripción deben permitir reemplazo posterior sin tocar código.

## Preguntas abiertas
1. ¿Los precios exactos en COP de cada ítem? (Pueden iniciar con valores de ejemplo o etiqueta "Consultar").
2. ¿Los ítems de Talleres (Medium, Reiki Usui, Barras Access, Lectura Oráculo Angelical) son los mismos que las Terapias existentes o variantes distintas con precio diferente? El Tech Lead debe resolver el mapeo para evitar duplicados visuales.
3. ¿Cuántas charlas y retiros exactamente, y sus precios?
4. ¿El texto provisional de talleres se aprueba tal cual, o se ajusta?
