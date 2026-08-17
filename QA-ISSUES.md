# QA ISSUES — Ronda 15 (Contact Launcher)
Fecha: 2026-08-17
Deploy verificado: https://alas-de-amor-portal.vercel.app (PR #11)
Resultado global: ✅ APROBADO

## Casos ejecutados

| Caso | Resultado | Evidencia |
|------|-----------|-----------|
| Launcher transversal en 7 rutas | ✅ | Providers lo monta una sola vez; regresión completa |
| Estado cerrado accesible | ✅ | `aria-label="Abrir opciones de contacto"`, `aria-expanded` |
| Menú WhatsApp + Chat | ✅ | Aparecen exactamente las dos opciones |
| WhatsApp | ✅ | `href` `wa.me` presente; no se hizo click para evitar acción real |
| Chat | ✅ | Dialog muestra `Chat en construcción, por favor usar WhatsApp` |
| Cierre Escape | ✅ | Dialog desaparece al presionar Escape |
| Mobile | ✅ | viewport 375px, `scrollWidth: 360`, sin overflow |
| Regresión 7 rutas | ✅ | 0 errores capturados, 0 imágenes rotas |
| Traducciones | ✅ | Copy del launcher ES/EN disponible |

## Issues abiertos

Ninguno nuevo.

## Decisión

✅ Aprobado. El botón transversal funciona como prototipo de contacto. Chat no
realiza llamadas externas y WhatsApp mantiene su enlace real.

## Issues persistentes conocidos

- `ISS-001` hydration histórico en `/blog`: no apareció en esta ronda.
