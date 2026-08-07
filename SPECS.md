# SPEC — Auditoría integral de calidad del portal
Generado por: agente po
Fecha: 2026-08-07
Estado: ✅ Aprobado

## Objetivo de negocio
El portal tiene 7 páginas en producción pero carece de una auditoría sistemática de calidad en los 4 ejes transversales que acabamos de instrumentar: SEO, accesibilidad, performance y seguridad. Necesitamos encontrar y documentar todas las falencias para tener un backlog de mejoras priorizado.

## Usuario objetivo
El equipo de desarrollo (nosotros) y los visitantes del portal, que se benefician de una experiencia más rápida, accesible, segura y mejor posicionada en buscadores.

## Alcance
### Incluye
- SEO: auditar title, meta description, OpenGraph, structured data (JSON-LD), sitemap, canonical URLs en las 7 páginas
- Accesibilidad: auditar con axe-core las 7 páginas, reportar violaciones serious/critical
- Performance: medir Core Web Vitals (LCP, CLS, TTFB) en las 7 páginas
- Seguridad: ejecutar al security-reviewer (secretos en git, headers HTTP, npm audit, XSS en form)
- Contenido: verificar que todas las páginas tengan contenido suficiente (>500 chars), sin placeholders, sin "lorem ipsum"
- Imágenes: verificar que no hay imágenes rotas, pesos >500 KB, o fallbacks incoherentes

### NO incluye (fuera de alcance)
- Rediseño visual de páginas
- Refactorización de código
- Nuevas funcionalidades

## Historia(s) de usuario
- Como mantenedor del portal, quiero conocer el estado real de calidad en SEO, accesibilidad, performance y seguridad para priorizar mejoras.

## Criterios de aceptación
- [ ] CA1: SEC-AUDIT.md generado sin hallazgos críticos (o documentados)
- [ ] CA2: QA-ISSUES.md con hallazgos de SEO (faltante de title, description, OG, JSON-LD)
- [ ] CA3: QA-ISSUES.md con hallazgos de accesibilidad (axe-core violations)
- [ ] CA4: QA-ISSUES.md con hallazgos de performance (LCP > 2.5s, CLS > 0.1)
- [ ] CA5: QA-ISSUES.md con hallazgos de contenido (páginas con <500 chars, placeholders)
- [ ] CA6: IMAGES.md actualizado con pesos reales y marcado de imágenes pesadas

## Imágenes necesarias
Ninguna nueva — auditoría de lo existente.

## Notas y restricciones
- No tocar código de producción salvo para correcciones documentadas en TASKS.md
- La auditoría de seguridad no debe disparar envíos reales de formulario
- El QA debe ejecutar los 16 checks de su batería actualizada
