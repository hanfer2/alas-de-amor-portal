# TASKS — Refactor Épico: Portal Etéreo y Fluido
Generado por: agente tech-lead
Basado en: SPECS.md (2026-08-07, ✅ Aprobado)
Fecha: 2026-08-07

## Resumen técnico
Se instalan 2 dependencias (`framer-motion`, `lenis`), se crean 2 componentes reutilizables (`FadeInWrapper`, `LenisProvider`), se integran en `layout.tsx`, y se refactorizan todas las páginas con los nuevos componentes, mesh gradients y micro-interacciones. /contacto recibe split layout (mismo patrón de /agendar).

## Tareas

### T1 — Instalar dependencias
**Archivos:** `package.json`
**Descripción técnica:** `npm install framer-motion lenis`. Verificar que no haya conflictos con versiones existentes.
**DOR:**
- [ ] Node.js v25.9.0 disponible
**DOF:**
- [ ] `framer-motion` y `lenis` aparecen en `package.json` dependencies
- [ ] `npm run build` pasa sin errores de import
**Prioridad:** Alta

### T2 — Crear FadeInWrapper (animaciones DRY)
**Archivos:** `src/components/FadeInWrapper.tsx` (nuevo)
**Descripción técnica:** Componente wrapper con `motion.div` de framer-motion: `initial={{ opacity: 0, y: 20 }}`, `whileInView={{ opacity: 1, y: 0 }}`, `viewport={{ once: true, margin: "-50px" }}`, `transition={{ duration: 0.8, ease: "easeOut" }}`. Acepta `children`, `className`, y `delay` opcional para stagger.
**DOF:**
- [ ] Componente renderiza hijos con animación fade-in-up al entrar en viewport
- [ ] Soporta prop `delay` para stagger (ej. delay={i * 0.1})
- [ ] `npm run build` pasa
**Prioridad:** Alta

### T3 — Crear LenisProvider (smooth scroll global)
**Archivos:** `src/components/LenisProvider.tsx` (nuevo)
**Descripción técnica:** Provider que inicializa Lenis con configuración de fricción suave (`lerp: 0.08`, `duration: 1.2`, `smoothWheel: true`). Usa `useEffect` + `useRef` para inicializar/destruir Lenis. Integra con `requestAnimationFrame`. No afecta SSR.
**DOF:**
- [ ] Scroll suave funciona en todas las páginas
- [ ] No rompe la navegación cliente-side de Next.js
- [ ] Se limpia correctamente al desmontar (useEffect cleanup)
- [ ] `npm run build` pasa
**Prioridad:** Alta

### T4 — Integrar en layout.tsx
**Archivos:** `src/app/layout.tsx`
**Descripción técnica:** Envolver `{children}` con `<LenisProvider>` y `<FadeInWrapper>` (solo Lenis va en layout; FadeInWrapper se usa por página). Reemplazar `className` del body para mesh gradient global.
**DOF:**
- [ ] Lenis activo globalmente
- [ ] Layout no rompe otras páginas
**Prioridad:** Alta

### T5 — Refactor / (home) — mesh gradient hero
**Archivos:** `src/app/page.tsx`
**Descripción técnica:** 
- Hero: mesh gradient animado de fondo (`bg-gradient-to-br from-violet-100 via-warm-white to-rose-gold-50` con animación `animate-gradient-shift`)
- Título enorme con Playfair Display (`text-6xl lg:text-8xl`)
- Botón principal con `animate-pulse` sutil
- Envolver secciones con `<FadeInWrapper>`
**DOF:**
- [ ] Hero tiene mesh gradient visible
- [ ] Títulos y tarjetas hacen fade-in-up al scroll
- [ ] `npm run build` pasa
**Prioridad:** Media

### T6 — Refactor /servicios — glow hover en tarjetas
**Archivos:** `src/app/servicios/page.tsx`
**Descripción técnica:** 
- Reemplazar `reveal` class por `<FadeInWrapper>` en cada ServiceBlock
- Agregar glow hover a la tarjeta de imagen: `transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_rgba(139,92,246,0.3)]`
- Mantener layout grid existente
**DOF:**
- [ ] Tarjetas hacen glow violeta al hover + lift suave
- [ ] Fade-in-up funciona al scroll
- [ ] `npm run build` pasa
**Prioridad:** Media

### T7 — Refactor /nosotros — fade-in secciones
**Archivos:** `src/app/nosotros/page.tsx`
**Descripción técnica:** Reemplazar `reveal` class por `<FadeInWrapper>` en secciones principales.
**DOF:**
- [ ] Secciones hacen fade-in-up al scroll
- [ ] `npm run build` pasa
**Prioridad:** Baja

### T8 — Split layout /contacto
**Archivos:** `src/app/contacto/page.tsx`, `src/locales/es.json`, `src/locales/en.json`
**Descripción técnica:** Aplicar mismo patrón de /agendar: grid 2 cols lg+, columna izquierda con imagen (`gen-agendar-lateral.jpg`) + mensaje, columna derecha con ContactForm. Agregar i18n `contacto.sidebar.title` y `.subtitle`.
**DOF:**
- [ ] /contacto tiene split layout en lg+
- [ ] En mobile se apila verticalmente
- [ ] Textos sidebar en ES/EN
- [ ] `npm run build` pasa
**Prioridad:** Alta

### T9 — Regresión
**Archivos:** todas las páginas
**Descripción técnica:** Verificar que las 7 páginas cargan sin errores, responsive funciona, y no hay regresión de performance.
**DOF:**
- [ ] 7 páginas con 0 errores consola
- [ ] Responsive 375px sin overflow
- [ ] LCP < 3s, CLS < 0.1
- [ ] `npm run build` + `npm run lint` pasan
**Prioridad:** Alta

## Dependencias
T1 → T2, T3 (paralelas) → T4 → T5, T6, T7, T8 (paralelas) → T9
