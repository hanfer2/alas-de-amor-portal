# UI-IMPROVEMENTS — Auditoría completa del portal
Generado por: agente disenador (modo auditor)
Fecha: 2026-08-08

## Diagnóstico visual
El portal tiene una base sólida (paleta violeta etérea, glassmorphism, Lenis, FadeInWrapper) pero sufre de inconsistencia acumulada: 10+ patrones duplicados sin abstracción, 2 sistemas de inputs incompatibles entre formularios, 4 páginas sin bottom fade en el hero, 10 variantes de botones distintas, y la página de inicio usa una estructura de hero completamente diferente a las sub-páginas. El contacto no tiene text-gradient en el título.

## Design tokens mapeados
- **Paleta activa**: `reiki-50` a `reiki-950`, `warm-white`, `cream`, `rose-gold` (sin uso), `violet-50`, `indigo-900`
- **Alias redundantes**: `spiritual-*`, `heal-*`, `gold-*` = idénticos a `reiki-*`. `shadow-gold` usa púrpura, no dorado.
- **Tipografía**: Inter (sans), Playfair Display (display)
- **Espaciado**: `p-4` a `p-16`, `gap-4` a `gap-20`
- **Sombras**: `shadow-sm` a `shadow-2xl`, con variantes `shadow-reiki-*/*` y `shadow-indigo-900/5`
- **Cards**: `gradient-card` (translúcido) o `bg-white/90` — sin regla consistente
- **Gradientes**: `gradient-hero` (incluye rosa `#fce7f3` fuera de paleta), `gradient-spiritual`, `gradient-card`, `text-gradient`

## Matriz de cambios (Delta)

| # | Severidad | Qué | Archivo | Estado actual | Problema | Cambio |
|---|-----------|-----|---------|---------------|----------|--------|
| 1 | HIGH | Input consistency | AppointmentForm.tsx:227-228,242 | Date/textarea usan `border-reiki-200 bg-white/60` | Diferente de los text inputs (`bg-gray-50 border-gray-100`) | Unificar con `inputClass()` |
| 2 | HIGH | Missing bottom fade | servicios:39, agendar:13, contacto:14 | Sin fade después del hero | Contenido choca con hero | Agregar `<div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-warm-white" />` antes de `</section>` |
| 3 | HIGH | Contacto title sin gradient | contacto/page.tsx:23-24 | `<h1>{t("contacto.hero.title")}</h1>` | Sin efecto visual, inconsistente | Agregar `.split(" ").map()` con text-gradient |
| 4 | MEDIUM | Badge home vs sub-pages | page.tsx:109 | `bg-white/60 text-sm` + pulsing dot | Home es diferente de las 6 sub-páginas | Unificar con el badge de sub-páginas o hacer badge home deliberadamente distinto por ser landing |
| 5 | MEDIUM | Button hover variants | Varios | `scale-105`, `scale-[1.02]`, `-translate-y-0.5`, `scale-110` | 4 variantes de hover | Estandarizar a `scale-105` (el más usado) |
| 6 | LOW | Certificates rounded | nosotros/page.tsx:178 | `rounded-2xl` | Diferente del estándar `rounded-3xl` | Cambiar a `rounded-3xl` |
| 7 | LOW | Input bg ContactForm | ContactForm.tsx:80-85 | `bg-white/60 border-reiki-200` | Diferente de AppointmentForm `bg-gray-50 border-gray-100` | Unificar ambos forms al mismo sistema de inputs |

## Instrucciones para el Dev (parches atómicos)

### Parche 1 — Unificar inputs dentro de AppointmentForm (HIGH)
**Archivo:** `src/components/AppointmentForm.tsx`
**Líneas:** 227-228 (date input), 242 (textarea)
**Cambio:** Reemplazar las clases hardcodeadas de date y textarea por llamadas a `inputClass("service")` y `inputClass("message")`.
**Antes (date):** `className="w-full px-4 py-3 rounded-xl border border-reiki-200 focus:border-reiki-400 focus:ring-2 focus:ring-reiki-200 outline-none transition-all bg-white/60"`
**Después (date):** `className={inputClass("service")}`
**Riesgo:** Bajo — solo cambia estilo visual, no lógica.
**Verificación QA:** Date input y textarea deben verse exactamente igual que los text inputs (mismo bg, mismo border, mismo focus ring).

### Parche 2 — Agregar bottom fade a servicios, agendar, contacto (HIGH)
**Archivos:** `src/app/servicios/page.tsx`, `src/app/agendar/page.tsx`, `src/app/contacto/page.tsx`
**Cambio:** Insertar antes del `</section>` del hero: `<div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-warm-white" />`
**Riesgo:** Bajo — elemento puramente decorativo.
**Verificación QA:** El degradado del hero debe transicionar suavemente al contenido blanco debajo.

### Parche 3 — Agregar text-gradient al título de contacto (HIGH)
**Archivo:** `src/app/contacto/page.tsx`
**Línea:** 23-26
**Cambio:** Reemplazar `<h1>{t("contacto.hero.title")}</h1>` por el patrón split+map con text-gradient en word index 1.
**Antes:**
```jsx
<h1 className="font-display text-5xl sm:text-6xl font-bold text-reiki-900 mt-3">
  {t("contacto.hero.title")}
</h1>
```
**Después:**
```jsx
<h1 className="font-display text-5xl sm:text-6xl font-bold text-reiki-900 mt-3">
  {t("contacto.hero.title").split(" ").map((word, i) => (
    <span key={i}>
      {i === 1 ? <span className="text-gradient">{word} </span> : `${word} `}
    </span>
  ))}
</h1>
```
**Riesgo:** Bajo — solo afecta una palabra ("Contacto").
**Verificación QA:** La palabra "Contacto" debe tener el gradiente violeta.

### Parche 4 — Estandarizar hover de botones (MEDIUM)
**Archivos:** `src/components/AppointmentForm.tsx:255`, `src/components/ContactForm.tsx`
**Cambio:** Reemplazar `hover:-translate-y-0.5` y `hover:scale-[1.02]` por `hover:scale-105`.
**Riesgo:** Bajo.
**Verificación QA:** Todos los botones de submit deben tener la misma micro-interacción.

### Parche 5 — Unificar input bg entre formularios (LOW)
**Archivo:** `src/components/ContactForm.tsx`
**Línea:** ~80 (función inputClass)
**Cambio:** Reemplazar `bg-white/60 border-reiki-200` por `bg-gray-50 border-gray-100` para igualar AppointmentForm.
**Riesgo:** Bajo.
**Verificación QA:** Los inputs de Contacto deben verse igual que los de Agendar.
