# SPEC — Refactor Épico: Portal Etéreo y Fluido
Generado por: agente po
Fecha: 2026-08-07
Estado: ✅ Aprobado

## Objetivo de negocio
Elevar la experiencia visual de todo el portal al estándar de sitios modernos de bienestar: scrolling suave (Lenis), animaciones de entrada al scroll (Framer Motion), fondos de mesh gradient animados, micro-interacciones en tarjetas, y split layout en /contacto (igual que /agendar). El portal debe sentirse como un espacio de sanación digital, no como un sitio web estático.

## Usuario objetivo
Visitante del portal que experimenta calma y fluidez al navegar. Las transiciones suaves y las animaciones orgánicas refuerzan la marca de terapia holística.

## Alcance
### Incluye
- Smooth scrolling global con Lenis (fricción suave, sensación de deslizamiento)
- Animaciones de fade-in-up al scroll en todas las páginas (Framer Motion)
- Mesh gradients animados (fondos de aurora) en hero sections
- Micro-interacciones en tarjetas de servicios (glow hover, lift suave)
- Split layout en /contacto (imagen lateral + form)
- Hero de /inicio con tipografía grande + gradiente animado
- Componente reutilizable `<FadeInWrapper>` para animaciones DRY

### NO incluye
- Cambios en textos existentes
- Cambios en lógica de formularios
- Nuevas funcionalidades de negocio
- Imágenes IA nuevas (se reutiliza fallback de /agendar para /contacto)

## Historia(s) de usuario
- Como visitante, quiero navegar el portal con transiciones suaves que me transmitan calma y profesionalismo.

## Criterios de aceptación
- [ ] CA1: El scroll en todas las páginas es suave (Lenis activo en layout.tsx)
- [ ] CA2: Los elementos (títulos, tarjetas) hacen fade-in-up al entrar en viewport
- [ ] CA3: El héroe de / tiene un mesh gradient animado de fondo
- [ ] CA4: Las tarjetas de /servicios tienen glow hover (sombra violeta expandida + lift)
- [ ] CA5: /contacto tiene split layout 2 columnas con imagen lateral + form
- [ ] CA6: 0 errores de consola en todas las páginas
- [ ] CA7: Performance: no hay regresión en LCP/CLS
- [ ] CA8: Responsive 375px funciona sin overflow
- [ ] CA9: build + lint pasan

## Imágenes necesarias
| Página | Sección | Descripción | ¿Existe? | Acción |
|--------|---------|-------------|----------|--------|
| /contacto | Columna izquierda | Imagen etérea cálida de contacto/conexión | ❌ No | Reutilizar `gen-agendar-lateral.jpg` como fallback temporal |
