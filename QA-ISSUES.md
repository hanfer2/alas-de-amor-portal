# QA ISSUES — Ronda 13 (Liquid Gooey fase 2)
Fecha: 2026-08-17
Deploy verificado: https://alas-de-amor-portal.vercel.app
Resultado global: ✅ APROBADO — piloto Terapias

## Casos de prueba

| Caso | Resultado | Evidencia |
|------|-----------|-----------|
| Liquid solo en Terapias | ✅ | `/servicios` muestra el filtro Liquid en la superficie piloto; categorías posteriores mantienen su estructura |
| 7 rutas cargan | ✅ | `/`, `/nosotros`, `/servicios`, `/agendar`, `/contacto`, `/testimonios`, `/blog` |
| Consola | ✅ | 0 errores capturados durante navegación `networkidle` |
| Imágenes | ✅ | 0 imágenes rotas; 24 imágenes detectadas en `/servicios` |
| CTA a `/agendar` | ✅ | Links de ServiceBlock conservan destino |
| Mobile | ✅ | Fase 1: viewport 375px, `scrollWidth: 360`, sin overflow |
| Reduced motion | ✅ | Fase 1 emulada y validada; garantía preservada en fase 2 |
| DOM real | ✅ | headings, precios, imágenes y links siguen siendo nodos DOM |
| Safari | ⚠️ NO VERIFICABLE | Fuera de alcance por decisión del usuario |

## Decisión

✅ **Aprobado el piloto Liquid Gooey en Terapias.**

No se autoriza todavía la extensión a Talleres, Sanaciones, Lectura Angelical,
Charlas o Retiros, ni el uso de `dissolve` sobre imágenes. Requiere una nueva
fase con medición específica.

## Issues abiertos

Ninguno nuevo.

## Issues persistentes conocidos

- `ISS-001`: hydration #418 histórico en `/blog`; conservar el ID y verificar
  en la próxima ronda. No fue capturado por el listener de esta navegación.
