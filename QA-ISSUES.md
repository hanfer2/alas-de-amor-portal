# QA ISSUES — Ronda 12
Fecha: 2026-08-17
Deploy verificado: https://alas-de-amor-portal.vercel.app
Resultado global: ✅ APROBADO

## Casos ejecutados

| Caso | Resultado | Evidencia |
|------|-----------|-----------|
| 7 rutas cargan | ✅ | `/`, `/nosotros`, `/servicios`, `/agendar`, `/contacto`, `/testimonios`, `/blog` |
| Consola | ✅ | 0 errores capturados durante navegación `networkidle` |
| Imágenes | ✅ | 0 imágenes rotas en las 7 rutas |
| Contenido | ✅ | Todas las rutas superan 100 caracteres visibles |
| Menú Liquid móvil | ✅ | `Open menu` → `Close menu`, `aria-expanded`, navegación visible |
| Mobile overflow | ✅ | viewport 375px, `scrollWidth: 360`, sin overflow |
| WhatsApp | ✅ | enlace `wa.me` presente; no se hizo click para evitar acción externa real |
| Reduced motion | ✅ | `prefers-reduced-motion: reduce` emulado y detectado |
| ES/EN metadata | ✅ | titles únicos por ruta conservados |

## Decisión

✅ Prototipo `liquid-gooey` aprobado para menú móvil y botón WhatsApp.

No se recomienda ampliar todavía a tarjetas de servicios ni `dissolve` sin
validación física en Safari y mediciones de bundle/Core Web Vitals.

## Issues abiertos

Ninguno nuevo.

## Issues persistentes conocidos

- `ISS-001`: hydration #418 reportado históricamente en `/blog`; no fue
  capturado durante esta navegación QA. Mantener el ID y re-verificar en la
  siguiente ronda.
