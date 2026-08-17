# TASKS — Prototipo Liquid Gooey para interacciones del portal
Generado por: agente tech-lead
Basado en: SPECS.md (2026-08-17, ✅ Aprobado)
Fecha: 2026-08-17

## Resumen técnico
Se evaluará e integrará `liquid-gooey` de forma acotada, reversible y sin
aplicar filtros a texto, imágenes o focus rings. El primer prototipo cubrirá
el menú móvil y una acción real de WhatsApp; tarjetas de servicios y
`dissolve` quedan fuera de esta iteración hasta tener evidencia de rendimiento.

## Tareas

### T1 — Evaluar paquete antes de instalar
**Archivos:** `package.json`, `package-lock.json`
**Descripción técnica:** Verificar versión publicada de `liquid-gooey`, licencia,
peer dependencies, tamaño añadido al bundle y compatibilidad con Next.js 16,
React 19, Safari y `prefers-reduced-motion`. No instalar si la licencia o la
API no son compatibles.
**DOR:**
- [ ] README/API revisado: `Morph`, `Move`, `dissolve`, `Liquid.Item`
- [ ] Licencia y peer dependencies verificadas
- [ ] Estrategia de rollback definida: eliminar dependencia y wrappers
**DOF:**
- [ ] Dependencia instalada solo si la evaluación es satisfactoria
- [ ] `npm run build` + `npm run lint` pasan
- [ ] No se incrementa el bundle de forma injustificada
**Prioridad:** Alta
**Riesgo:** Alto — librería externa nueva y filtros SVG.

### T2 — Prototipo Liquid del menú móvil
**Archivos:** `src/components/Header.tsx`, componente auxiliar si aplica
**Descripción técnica:** Integrar `Liquid`/`Liquid.Item` en el grupo de
acciones del menú móvil sin cambiar la navegación. El botón debe conservar
`aria-expanded`, `aria-label`, focus visible, hit target y cierre al navegar.
La capa filtrada debe estar detrás del DOM real.
**DOR:**
- [ ] T1 aprobada
- [ ] El menú actual funciona antes de envolverlo
**DOF:**
- [ ] El menú abre/cierra con teclado, touch y click
- [ ] El texto y los iconos permanecen nítidos
- [ ] No hay overflow en 375px
- [ ] `prefers-reduced-motion: reduce` elimina/reduce la transición líquida
- [ ] Safari y desktop no muestran errores de consola
**Prioridad:** Alta

### T3 — Prototipo Liquid para acción real de WhatsApp
**Archivos:** `src/components/AppointmentForm.tsx` o componente reutilizable
**Descripción técnica:** Aplicar el efecto a un único botón existente de
WhatsApp, manteniendo `href`, `target`, `rel`, `aria-label` y el flujo actual.
No enviar datos reales durante QA.
**DOR:**
- [ ] T1 aprobada
- [ ] El enlace WhatsApp actual está identificado
**DOF:**
- [ ] Click y teclado conservan el enlace funcional
- [ ] El botón es legible y tiene contraste WCAG
- [ ] La capa liquid no filtra el texto ni el icono
- [ ] Reduced motion funciona
**Prioridad:** Alta

### T4 — Tokens y estados visuales del prototipo
**Archivos:** `src/app/globals.css`, componentes del prototipo
**Descripción técnica:** Usar `reiki-*`, `warm-white` y sombras existentes.
Definir estados hover, focus-visible, active, disabled y reduced-motion sin
introducir colores arbitrarios ni fondos opacos que oculten el efecto.
**DOF:**
- [ ] Contraste y focus visible verificados
- [ ] No hay verde, amarillo ni colores fuera del design system
- [ ] No se filtra texto, imágenes ni controles interactivos
**Prioridad:** Media

### T5 — Regresión completa y decisión de adopción
**Archivos:** `QA-ISSUES.md`, todos los componentes afectados
**Descripción técnica:** QA debe crear casos de prueba antes de validar. Medir
desktop, mobile touch, Safari si está disponible, reduced-motion, Core Web
Vitals, consola, navegación, accesibilidad y WhatsApp sin envío real.
**DOF:**
- [ ] 7 rutas cargan sin errores
- [ ] 0 imágenes rotas y 0 overflow horizontal
- [ ] LCP/CLS no empeoran de forma significativa
- [ ] Menú y WhatsApp siguen siendo accesibles y funcionales
- [ ] QA documenta una decisión: aprobar, iterar o descartar la librería
**Prioridad:** Alta

## Dependencias
T1 → T2, T3, T4 → T5

## Rollback
Si la librería genera errores, regresión de rendimiento, incompatibilidad
Safari o problemas de accesibilidad, eliminar la dependencia y los wrappers
Liquid; mantener los controles y estilos actuales.
