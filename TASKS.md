# TASKS — Precios y catálogo por categorías en /servicios
Generado por: agente tech-lead
Basado en: SPECS.md (2026-08-06, ✅ Aprobado)
Fecha: 2026-08-06

## Resumen técnico
Se crea una fuente única de precios en COP (`src/lib/prices.ts`) independiente del i18n, con una función de formato de moneda (`Intl.NumberFormat`) y una función de conversión COP→USD alimentada por una tasa obtenida de un proveedor gratuito con caché (sessionStorage) y fallback fijo desde config. La página `/servicios` se reorganiza en 4 categorías (Terapias, Talleres personalizados, Charlas, Retiros espirituales) usando un array de datos tipado que combina claves i18n para títulos/descripciones y precios COP desde `prices.ts`. Se agregan las claves i18n nuevas (categorías, talleres provisionales, etiquetas de precio). El dropdown de `/agendar` se enriquece con los nuevos ítems.

## Decisiones técnicas (resuelven las preguntas abiertas del spec)

1. **Precios**: se inician con valores de ejemplo en COP en `src/lib/prices.ts`. Cada ítem es `price: number | null`; si es `null` la UI muestra la etiqueta "Consultar" (`servicios.price.consult`).
2. **Duplicados terapias/talleres**: los ítems de "Talleres personalizados" (Medium, Reiki Usui, Barras Access, Lectura Oráculo Angelical, Taller Sanando tu niña interior) son entradas NUEVAS e independientes de las 8 terapias existentes, con su propia clave de precio, para permitir precios distintos y sin conflictos visuales.
3. **Charlas y Retiros**: ítems individuales genéricos ("Charla 1", "Charla 2", "Retiro 1", "Retiro 2") con texto provisional y `price: null` (Consultar) hasta que Liliana defina contenido.
4. **Texto provisional**: se usa el texto provisional del SPEC tal cual en `es.json`/`en.json`, listo para reemplazo posterior vía traducciones sin tocar código.
5. **Conversión**: tasa desde `open.er-api.com` (sin API key, gratis) consultada en el cliente, caché en `sessionStorage` (TTL 6h), fallback fijo `DEFAULT_USD_RATE` en `src/lib/config.ts` con valor inicial 0.00025 (aprox. 1 COP ≈ 0.00025 USD). Formato con `Intl.NumberFormat("es-CO",{currency:"COP"})` y `("en-US",{currency:"USD"})`.

## Tareas

### T1 — Crear fuente única de precios y formato de moneda
**Archivos:** `src/lib/prices.ts` (nuevo), `src/lib/config.ts` (agregar `DEFAULT_USD_RATE`)
**Descripción técnica:** Definir tipo `CatalogItem` y `Category` con campos `id`, `titleKey`, `descKey`, `price` (COP, `number | null`), `durationKey?`. Crear `prices` (mapa o array) con los 8 servicios existentes + 5 talleres + 2 charlas + 2 retiros. Exportar `formatCOP` y `formatUSD` usando `Intl.NumberFormat`. Exportar `useRate` (client hook) que obtiene la tasa COP→USD con caché y fallback.
**DOR:**
- [x] `src/lib/config.ts` existe y tiene objeto `config`
- [x] `src/locales/es.json` y `en.json` tienen la estructura de servicios actual (referencia)
**DOF:**
- [x] `prices.ts` exporta todos los ítems con sus precios COP (o null)
- [x] `formatCOP(150000)` produce "$ 150.000" y `formatUSD` produce el equivalente USD
- [x] `npm run lint` pasa sin errores
**Criterio de aceptación relacionado:** CA2, CA5
**Prioridad:** Alta
**Riesgo:** Definir mal el tipo obligaría a reescribir la página de servicios; se define con TypeScript strict desde el inicio.

### T2 — Agregar claves i18n nuevas (categorías, talleres, etiquetas de precio)
**Archivos:** `src/locales/es.json`, `src/locales/en.json`
**Descripción técnica:** Agregar bajo `servicios`: `categories` (`{terapias, talleres, charlas, retiros}`), `price.consult`, `price.from` y bloques para cada ítem nuevo: `talleres.{nina,angelical,medium,reiki,access}` con `desc` provisional (texto del SPEC), y `charlas.0/1`, `retiros.0/1` con `desc` provisional. No mover las claves de terapias existentes.
**DOR:**
- [x] `es.json` y `en.json` tienen `servicios.hero`, `servicios.cta`, `servicios.scheduleButton` (existen)
- [x] Los 8 bloques `servicios.reiki...oraculos` existen (referencia de estructura)
**DOF:**
- [x] `es.json` y `en.json` quedan como JSON válido (parsing sin error)
- [x] Cada clave nueva existe en AMBOS idiomas (misma estructura)
- [x] `npm run build` no falla por claves faltantes en runtime de la página de servicios
**Criterio de aceptación relacionado:** CA1, CA6
**Prioridad:** Alta
**Riesgo:** Bajo; riesgo de olvidar un idioma → se verifica parsing en ambos archivos.

### T3 — Reorganizar /servicios en categorías con precios
**Archivos:** `src/app/servicios/page.tsx`
**Descripción técnica:** Reemplazar el array estático `services` por la importación de los datos de `src/lib/prices.ts`. Renderizar 4 secciones (Terapias, Talleres personalizados, Charlas, Retiros) con encabezado de categoría (`servicios.categories.*`). Cada ítem muestra: badge de duración (si existe), título (`titleKey`), descripción (`descKey`), precio destacado (`formatCOP` o `formatUSD` según `lang` de `useLanguage()`, o "Consultar" si `price === null`), y el botón "Agendar" que ya existe. Mantener paleta violeta `reiki-*`, estilo de tarjeta actual, `reveal`/`ScrollReveal` y clases de dirección alternada.
**DOR:**
- [x] `src/lib/prices.ts` existe (T1)
- [x] Las claves i18n nuevas existen (T2)
**DOF:**
- [x] `/servicios` muestra 4 categorías con sus ítems y cada ítem tiene precio visible
- [x] En ES el precio se ve en COP; al cambiar a EN se ve en USD (valor distinto, calculado)
- [x] Los ítems con `price: null` muestran "Consultar"
- [ ] Responsive 375px sin overflow horizontal (verificación QA pendiente)
- [x] `npm run build` pasa sin errores
- [ ] 0 errores en consola del navegador (verificación QA pendiente)
**Criterio de aceptación relacionado:** CA1, CA2, CA3, CA4, CA6, CA7
**Prioridad:** Alta
**Riesgo:** Alto (regresión de diseño). Mitigación: respetar clases existentes y verificar visualmente con QA.

### T4 — Enriquecer dropdown de servicios en /agendar
**Archivos:** `src/components/AppointmentForm.tsx`
**Descripción técnica:** Reemplazar `serviceOptionKeys` estático por la lista de ítems de `src/lib/prices.ts` (todas las categorías), usando `titleKey` para el `t()`. Mantener el placeholder inicial y la validación actual.
**DOR:**
- [x] `prices.ts` exporta todos los ítems con `titleKey` (T1)
**DOF:**
- [x] El select de servicio en /agendar incluye las 8 terapias + 5 talleres + 2 charlas + 2 retiros
- [ ] Seleccionar un ítem nuevo no rompe el envío (WhatsApp + email) (verificación QA pendiente)
- [x] `npm run build` pasa sin errores
**Criterio de aceptación relacionado:** CA1 (consistencia del catálogo)
**Prioridad:** Media
**Riesgo:** Bajo; solo cambia la fuente de opciones.

### T5 — Manejo de fallback de tasa y estados de carga
**Archivos:** `src/lib/prices.ts` (hook `useRate`)
**Descripción técnica:** En el hook `useRate`: consultar `https://open.er-api.com/v6/latest/COP`; cachear en `sessionStorage` con TTL 6h; ante error/timeout usar `config.DEFAULT_USD_RATE` como fallback. Exponer `isFallback` para que la UI pueda mostrar una nota sutil (opcional). Evitar re-fetch por cada ítem (una sola consulta por sesión).
**DOR:**
- [x] `config.DEFAULT_USD_RATE` existe (T1)
**DOF:**
- [x] Si la API falla, los precios USD se calculan con el fallback sin romper la página
- [x] La tasa se consulta una sola vez por sesión (verificable en network)
- [ ] 0 errores de consola cuando la API no responde (verificación QA pendiente)
**Criterio de aceptación relacionado:** CA9
**Prioridad:** Alta
**Riesgo:** Rate limits o bloqueo CORS; fallback fijo cubre el caso. Timeout explícito (10s) para no colgar la página.

### T6 — Regresión de navegación e idiomas
**Archivos:** todos los anteriores (verificación)
**Descripción técnica:** Verificar que el cambio no rompa el resto del sitio: Header/Footer (usan `nosotros.services.*` para links), home (usa `servicios.*` en preview), y el switch de idioma en todas las páginas.
**DOR:**
- [x] T1-T5 completadas
**DOF:**
- [ ] Las otras 6 páginas siguen cargando sin errores (verificación QA pendiente)
- [ ] El switch ES/EN funciona en /servicios y las traducciones nuevas cambian (verificación QA pendiente)
- [x] `npm run build` y `npm run lint` pasan
**Criterio de aceptación relacionado:** CA7, CA8
**Prioridad:** Media
**Riesgo:** Regresión silenciosa en otras páginas; mitigación: QA ejecuta la batería completa.

## Dependencias
T1 → T2, T3 → T4 → T6 (T3 y T4 dependen de T1 y T2, pueden ir en paralelo tras ellos)

## Bloqueos
Ninguno técnico. El usuario debe confirmar después los precios reales en COP y el contenido de charlas/retiros, pero NO bloquean la implementación (se usa "Consultar" y texto provisional).
