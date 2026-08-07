# TASKS — Actualización de precios y nuevos servicios en /servicios
Generado por: agente tech-lead
Basado en: SPECS.md (2026-08-06, ✅ Aprobado)
Fecha: 2026-08-06

## Resumen técnico
Se actualizan SOLO los precios y el catálogo en `src/lib/prices.ts` (fuente única en COP) y se agregan las claves i18n nuevas en `es.json`/`en.json`. Se crean 2 categorías nuevas ("Sanaciones" y "Lectura Angelical") y se reorganizan ítems entre categorías. La página `/servicios` no requiere cambios de estructura (ya itera `catalog` y usa `categoryColors`), solo agregar los colores de las categorías nuevas. El dropdown de `/agendar` ya itera `catalog`, por lo que se sincroniza automáticamente.

## Decisiones técnicas

1. **Precios**: se actualizan en `src/lib/prices.ts`. Barras Access 230000, Reiki 160000, Médium 90000, Sanación niño interior 180000 (renombrada desde nina 250000), Combo Barras+Reiki 265900 (nuevo), Sanación mamá 180000 (nuevo), Sanación papá 180000 (nuevo), Lectura angelical básica 50000 (nuevo).
2. **Reorganización de categorías**:
   - **Terapias**: se mantienen reiki(160000), access(230000), chakras, meditacion, facelight, coaching, oraculos + NUEVO combo(265900). Se SACA `angelical` (se mueve a Lectura Angelical).
   - **Talleres**: se mantienen medium(90000), reiki-usui(150000), access-taller(180000). Se SACA `nina` (→ Sanaciones) y `angelical-taller` (→ Lectura Angelical).
   - **NUEVA "Sanaciones"**: nina-renombrada a "Sanación niño interior"(180000), mamá(180000), papá(180000).
   - **NUEVA "Lectura Angelical"**: angelical(120000, desde Terapias), angelical-taller(120000, desde Talleres), basica(50000, nuevo).
   - Charlas y Retiros: sin cambios (price null).
3. **i18n**: se agregan claves de categorías (`servicios.categories.sanaciones`, `servicios.categories.lecturaAngelical`) y bloques de títulos/descripciones para: combo, sanaciones.nina/mama/papa, lecturaAngelical.basica/angelical/oraculo. Se conservan las claves existentes reutilizables (medium mantiene su desc).
4. **Color de categorías**: en `servicios/page.tsx` `categoryColors` agregar `sanaciones` y `lecturaAngelical` (tonos violeta, sin verde/amarillo).
5. **Sin cambios**: mecanismo de conversión COP→USD, formato, dropdown lógica (itera catalog), page.tsx estructura.

## Tareas

### T1 — Actualizar catálogo y precios en prices.ts
**Archivos:** `src/lib/prices.ts`
**Descripción técnica:** Actualizar array `catalog`:
- Terapias: reiki.price=160000, access.price=230000, agregar item combo (id `combo`, titleKey `servicios.combo.title`, descKey `servicios.combo.desc`, price 265900). Eliminar item `angelical`.
- Talleres: medium.price=90000; conservar reiki-usui y access-taller; eliminar items `nina` y `angelical-taller`.
- Nueva categoría `sanaciones` (titleKey `servicios.categories.sanaciones`): items `nina` (titleKey `servicios.sanaciones.nina.title`, descKey `servicios.sanaciones.nina.desc`, price 180000), `mama`, `papa` (mismas claves con sufijos).
- Nueva categoría `lecturaAngelical` (titleKey `servicios.categories.lecturaAngelical`): items `angelical` (titleKey/descKey `servicios.lecturaAngelical.angelical.*`, price 120000), `oraculo` (120000), `basica` (50000).
**DOR:**
- [x] `catalog` existe en `src/lib/prices.ts` (T1 previa)
- [x] `src/locales/es.json` y `en.json` existen
**DOF:**
- [x] `catalog` tiene las 6 categorías (Terapias, Talleres, Sanaciones, Lectura Angelical, Charlas, Retiros)
- [x] Precios correctos: reiki 160000, access 230000, combo 265900, medium 90000, nina/mama/papa 180000, basica 50000, angelical/oraculo 120000, reiki-usui 150000, access-taller 180000
- [x] No quedan ids huérfanos referenciados en i18n
- [x] `npm run lint` pasa sin errores
**Criterio de aceptación relacionado:** CA1, CA2, CA3, CA4
**Prioridad:** Alta
**Riesgo:** Medio — errores de id/key producen textos vacíos en la UI.

### T2 — Agregar claves i18n nuevas en es.json y en.json
**Archivos:** `src/locales/es.json`, `src/locales/en.json`
**Descripción técnica:** Bajo `servicios` agregar:
- `categories.sanaciones`, `categories.lecturaAngelical`
- `combo.title`, `combo.desc`
- `sanaciones.nina.title/desc`, `sanaciones.mama.title/desc`, `sanaciones.papa.title/desc`
- `lecturaAngelical.basica.title/desc`, `lecturaAngelical.angelical.title/desc`, `lecturaAngelical.oraculo.title/desc`
Textos provisionales según SPEC (copy section). En EN, traducción equivalente. No tocar claves existentes de otras categorías.
**DOR:**
- [ ] `es.json`/`en.json` son JSON válidos antes de editar
- [ ] Las claves `servicios.talleres.medium.title` y `.desc` existen (se reutilizan)
**DOF:**
- [ ] Ambos JSON siguen siendo válidos (parsing OK)
- [ ] Cada clave nueva existe en ES y EN (misma estructura)
- [ ] `npm run build` no falla por claves faltantes
**Criterio de aceptación relacionado:** CA1, CA2, CA3, CA5
**Prioridad:** Alta
**Riesgo:** Bajo — riesgo de olvidar un idioma.

### T3 — Agregar colores de categorías nuevas en servicios/page.tsx
**Archivos:** `src/app/servicios/page.tsx`
**Descripción técnica:** En `categoryColors` agregar entradas `sanaciones: "from-reiki-300 to-reiki-500"` y `lecturaAngelical: "from-reiki-400 to-reiki-600"`. No cambiar estructura de la página (ya renderiza categorías dinámicamente).
**DOR:**
- [ ] `categoryColors` existe en `servicios/page.tsx`
**DOF:**
- [ ] `sanaciones` y `lecturaAngelical` tienen color asignado
- [ ] `npm run build` pasa sin errores
- [ ] Paleta violeta (sin verde/amarillo)
**Criterio de aceptación relacionado:** CA1, CA2, CA3
**Prioridad:** Media
**Riesgo:** Bajo.

### T4 — Verificar sincronización del dropdown de /agendar
**Archivos:** `src/components/AppointmentForm.tsx` (verificación, sin cambio esperado)
**Descripción técnica:** El dropdown ya itera `catalog`, por lo que reflejará los cambios automáticamente. Verificar que no haya duplicados visibles (especialmente "Lectura Angelical"/"Lectura Oráculo Angelical" y "Barras Access" terapia vs taller, que ya se diferenciaron). Si hay duplicados de títulos entre categorías, ajustar títulos i18n para distinguirlos.
**DOR:**
- [ ] T1-T3 completadas
**DOF:**
- [ ] El select de /agendar muestra todos los ítems del nuevo catálogo sin duplicados exactos
- [ ] Seleccionar un ítem nuevo no rompe el form
- [ ] `npm run build` pasa sin errores
**Criterio de aceptación relacionado:** CA6
**Prioridad:** Media
**Riesgo:** Medio — posibles duplicados de títulos entre categorías.

### T5 — Regresión completa (build, lint, páginas)
**Archivos:** todos los anteriores (verificación)
**Descripción técnica:** Verificar build+lint y que las 6 páginas sigan cargando; verificar switch ES/EN en /servicios y en /agendar.
**DOR:**
- [ ] T1-T4 completadas
**DOF:**
- [ ] `npm run build` y `npm run lint` pasan
- [ ] Las otras páginas cargan sin errores
- [ ] Switch ES/EN en /servicios y /agendar funcionan
**Criterio de aceptación relacionado:** CA7
**Prioridad:** Media
**Riesgo:** Bajo.

## Dependencias
T1 → T2 (paralelas posibles: T2 no depende de T1 pero sí comparten archivos de catálogo/i18n; hacer T1 luego T2). T3 depende de nada (independiente). T4 depende de T1-T3. T5 depende de todas.

## Bloqueos
Ninguno. Los textos provisionales nuevos están definidos en el SPEC.
