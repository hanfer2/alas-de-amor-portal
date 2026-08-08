# UI-IMPROVEMENTS — Remover badges y compactar heroes de sub-páginas
Generado por: agente disenador (modo auditor)
Basado en: QA mediciones 2026-08-08
Fecha: 2026-08-08

## Diagnóstico visual
Todas las sub-páginas tienen un badge pill ("Terapias Holísticas", "Reserva tu Sesión", "Nuestra Historia", etc.) que ocupa 30px de altura más el margen inferior (mt-2 al título = 8px). Este badge repite información que ya está en el título principal y no aporta valor. Adicionalmente, el hero de 237px (41% vh) sigue siendo alto para páginas de contenido.

## Design tokens mapeados
- Badge: `inline-flex items-center px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-reiki-700 font-medium tracking-wider uppercase text-xs border border-white/30`
- Badge mide 30px de altura
- Margen badge→título: `mt-2` (8px)
- Padding hero actual: `pt-16 pb-4 gradient-hero`

## Matriz de cambios (Delta)

| # | Archivo | Elemento | Estado actual | Problema | Cambio | Prioridad |
|---|---------|----------|---------------|----------|--------|-----------|
| 1 | 6 sub-páginas | Badge `<span>` | 30px pill con texto redundante | No aporta información nueva, ocupa espacio vertical | Eliminar el span completo | Alta |
| 2 | 6 sub-páginas | Hero section | `pt-16 pb-4` | 237px (41% vh) | `pt-12 pb-4` | Alta |
| 3 | 6 sub-páginas | Título h1 | `mt-2` (dependía del badge) | Al quitar badge, ya no necesita margen superior | Cambiar a `mt-0` (el pt-12 del section ya da el espacio) | Media |

## Instrucciones para el Dev (parches atómicos)

### Parche 1 — Eliminar badge de las 6 sub-páginas (ALTA)
**Archivos:** `src/app/servicios/page.tsx`, `src/app/nosotros/page.tsx`, `src/app/agendar/page.tsx`, `src/app/contacto/page.tsx`, `src/app/testimonios/page.tsx`, `src/app/blog/page.tsx`
**Cambio:** Eliminar la línea completa del badge span y su contenido. Buscar y remover:
```jsx
<span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-reiki-700 font-medium tracking-wider uppercase text-xs border border-white/30">
  {t("xxx.hero.badge")}
</span>
```
**Riesgo:** Bajo — elemento puramente decorativo.
**Verificación QA:** No debe existir ningún badge pill en el hero de sub-páginas. Ahorro: ~38px (30px badge + 8px mt-2).

### Parche 2 — Reducir padding hero (ALTA)  
**Archivos:** mismas 6 sub-páginas
**Cambio:** Reemplazar `pt-16 pb-4 gradient-hero` por `pt-12 pb-4 gradient-hero`
**Testimonios:** Reemplazar `pt-14 pb-4 gradient-hero` por `pt-10 pb-4 gradient-hero`
**Riesgo:** Bajo.
**Verificación QA:** Hero height < 35% vh en 1280×900.

### Parche 3 — Ajustar margen del título (MEDIA)
**Archivos:** mismas 6 sub-páginas
**Cambio:** En el h1, cambiar `mt-2` por `mt-0` (el pt-12 del section ya da el espacio superior necesario).
**Riesgo:** Bajo.
**Verificación QA:** El título debe empezar a 48px del top (pt-12 = 48px), sin espacio extra.
