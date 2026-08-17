# TASKS — Botón transversal Liquid: WhatsApp + Chat
Generado por: agente tech-lead
Basado en: SPECS.md (2026-08-17, ✅ Aprobado)
Fecha: 2026-08-17

## Resumen técnico
Crear un componente cliente único `ContactLauncher` montado desde
`Providers`, con estado cerrado/abierto/chat. Usará `liquid-gooey` para la
superficie, pero conservará botones y enlaces DOM reales. Añadirá copy ES/EN
en locales y no tocará la lógica existente de formularios.

## Tareas

### T1 — Crear ContactLauncher reutilizable
**Archivos:** `src/components/ContactLauncher.tsx`
**Descripción técnica:** Crear componente client con estado `isOpen` y
`showChat`. Estado cerrado: botón flotante accesible. Estado abierto: grupo
Liquid con opciones WhatsApp y Chat. Chat muestra una superficie visual con
respuesta fija y botón de cierre. Implementar Escape y click fuera con cleanup.
**DOR:**
- [x] `liquid-gooey` instalado y validado en fase 1
- [x] Config WhatsApp disponible en `src/lib/config.ts`
**DOF:**
- [ ] Botón tiene `aria-label`, `aria-expanded` y focus visible
- [ ] WhatsApp conserva `href`, `target` y `rel`
- [ ] Chat no hace requests ni abre servicios externos
- [ ] Escape y click fuera cierran el panel
- [ ] Reduced motion funciona

### T2 — Integrar una sola vez en Providers
**Archivos:** `src/components/Providers.tsx`
**Descripción técnica:** Montar `ContactLauncher` una sola vez junto a
`BackToTop`. Usar z-index coordinado para no tapar el Header ni el contenido.
**DOR:**
- [ ] T1 completada
**DOF:**
- [ ] Launcher aparece en las 7 rutas
- [ ] No existe duplicación por página
- [ ] No hay overflow horizontal en 375px

### T3 — Agregar traducciones ES/EN
**Archivos:** `src/locales/es.json`, `src/locales/en.json`
**Descripción técnica:** Agregar las claves `contactLauncher.*` definidas en
SPECS.md. No dejar claves visibles en el DOM.
**DOF:**
- [ ] ES muestra copy español
- [ ] EN muestra copy inglés
- [ ] Todas las claves resuelven en ambos locales

### T4 — Regresión y QA
**Archivos:** `QA-ISSUES.md`
**Descripción técnica:** QA debe crear casos antes de probar y validar 7
ráutas, desktop/mobile, teclado, reduced-motion, contraste, enlaces sin
disparar WhatsApp y consola.
**DOF:**
- [ ] `npm run build` + `npm run lint` pasan
- [ ] 7 rutas sin errores de consola
- [ ] 0 imágenes rotas
- [ ] CTA WhatsApp inspeccionado sin click real
- [ ] QA documenta decisión final

## Dependencias
T1 → T2 y T3 → T4
