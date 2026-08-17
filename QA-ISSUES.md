# QA ISSUES — Ronda 11 (Liquid Gooey)
Fecha: 2026-08-17
Deploy verificado: https://alas-de-amor-portal.vercel.app
Resultado global: ✅ APROBADO — prototipo acotado; no recomendado aún para tarjetas/dissolve global

## Casos de prueba

| # | Caso | Resultado | Evidencia |
|---|------|-----------|-----------|
| CP1 | 7 rutas cargan sin errores | ✅ | 0 console errors capturados durante navegación networkidle |
| CP2 | Menú móvil abre/cierra | ✅ | `aria-expanded`, Open/Close menu y navegación visibles |
| CP3 | Mobile sin overflow | ✅ | viewport 375px, `scrollWidth: 360` |
| CP4 | WhatsApp conserva href real | ✅ | enlace `wa.me` presente; no se hizo click para evitar envío externo |
| CP5 | Reduced motion | ✅ | `prefers-reduced-motion: reduce` emulado y detectado |
| CP6 | Imágenes sin roturas | ✅ | 0 imágenes rotas en rutas auditadas |
| CP7 | Bundle/build | ✅ | build y lint OK; dependencia MIT, React >=18, 511 KB desempaquetada |
| CP8 | Servicios afectados sin regresión | ✅ | /servicios cargó con contenido y sin errores |

## Verificaciones del prototipo

- `liquid-gooey@0.1.0` cargado correctamente.
- Menú móvil conserva botones reales, `aria-label`, `aria-expanded` y enlaces.
- WhatsApp conserva `href`, `target="_blank"` y `rel="noopener noreferrer"`.
- No se aplicó `dissolve` a imágenes ni filtros al texto.
- No se probó Safari físico en este entorno: `⚠️ NO VERIFICABLE`.
- No se hizo click en WhatsApp porque es una acción externa real.

## Decisión

✅ **Aprobado como prototipo acotado** para menú móvil y acción WhatsApp.

No se recomienda todavía aplicar `liquid-gooey` a tarjetas de servicios ni
activar `dissolve` hasta obtener medición real de Safari, bundle y Core Web
Vitals en un entorno de preview estable.

## Issues abiertos

Ninguno bloqueante.

## Riesgos pendientes

- La comprobación de Vercel quedó en cola durante el merge; el sitio desplegado
  respondió correctamente en la verificación posterior.
- Ejecutar `npm audit` y revisar las vulnerabilidades existentes antes de
  ampliar el uso de la dependencia.
