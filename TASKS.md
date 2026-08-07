# TASKS — Corrección de rostros en imágenes de /servicios
Generado por: agente tech-lead
Basado en: QA-ISSUES.md (Ronda 7, ISS-IMG-FACE-001, ISS-IMG-FACE-002)
Fecha: 2026-08-07

## Resumen técnico
El PO reportó 2 imágenes en /servicios con problemas de rostros: Meditación Guiada (gallery-1.jpg — cara de coach no visible) y Reiki (WhatsApp therapy photo — personas recortadas). Se deben reemplazar con imágenes alternativas que tengan rostros visibles, centrados y sin recorte.

## Tareas

### TI-1 — Reemplazar imagen de Meditación Guiada (terapias-meditacion.jpg)
**Tipo:** Imagen existente (reemplazar con alternativa)
**Archivo:** `public/imgs/services/terapias-meditacion.jpg`
**Página:** /servicios → Terapias → Meditación Guiada
**Descripción técnica:** Reemplazar la copia de gallery-1.jpg con una imagen que tenga el rostro de Liliana visible. Buscar en `imgs/couch/` (couch.jpeg, IMG_3438.HEIC) o en `imgs/services/therapies/` fotos alternativas donde la cara sea visible y esté centrada.
**DOR:**
- [ ] ISS-IMG-FACE-001 documentado en QA-ISSUES.md
- [ ] IMAGES.md confirma que terapias-meditacion.jpg es ⚠️ FALLBACK
**DOF:**
- [ ] Nueva imagen reemplaza a terapias-meditacion.jpg con nombre terapias-meditacion-v2.jpg
- [ ] Referencia en `src/lib/prices.ts` actualizada a la nueva ruta
- [ ] `npm run build` + `npm run lint` pasan
**Prioridad:** Alta

### TI-2 — Reemplazar imagen de Reiki (terapias-reiki.jpg)
**Tipo:** Imagen existente (reemplazar con alternativa)
**Archivo:** `public/imgs/services/terapias-reiki.jpg`
**Página:** /servicios → Terapias → Reiki
**Descripción técnica:** Reemplazar la foto de WhatsApp donde las personas están recortadas. Intercambiar con otra de las 3 fotos de terapia disponibles en `imgs/services/therapies/` que tenga mejor encuadre y rostros visibles.
**DOR:**
- [ ] ISS-IMG-FACE-002 documentado en QA-ISSUES.md
**DOF:**
- [ ] Nueva imagen reemplaza a terapias-reiki.jpg
- [ ] `npm run build` + `npm run lint` pasan
**Prioridad:** Alta

### T1 — Verificar object-fit en ServiceBlock (causa raíz del recorte)
**Archivos:** `src/app/servicios/page.tsx`
**Descripción técnica:** El ServiceBlock usa `object-fit: cover` en `<Image fill>`. Para imágenes con personas, esto puede recortar rostros. Evaluar si cambiar a `object-contain` o agregar `object-[position]` para controlar la posición del recorte. Como mínimo, asegurar que las imágenes de servicios con personas estén pre-recortadas/encuadradas correctamente en origen.
**DOR:**
- [ ] TI-1 y TI-2 completadas
**DOF:**
- [ ] Las nuevas imágenes no muestran rostros recortados en viewport 1280×900
- [ ] `npm run build` + `npm run lint` pasan
**Prioridad:** Media

## Dependencias
TI-1, TI-2 (paralelo) → T1