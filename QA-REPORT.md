# QA Report — Alas de Amor Portal

**URL:** https://alas-de-amor-portal.vercel.app  
**Branch:** `staging`  
**Date:** 2026-07-22  
**Environments:** Desktop (1280x900) / Mobile (375x812)

---

## Resumen

| Total Tests | Pass | Fail | Warn |
|-------------|------|------|------|
| 14 | 14 | 0 | 0 |

---

## 1. Navegación

### 1.1 Carga inicial (Full Page Load)

| Ruta | Contenido | Status | Notas |
|------|-----------|--------|-------|
| `/` | 1689 chars | ✅ PASS | Hero, servicios, CTA, testimonios visibles |
| `/nosotros` | 1310 chars | ✅ PASS | Bio, credenciales, certificados visibles |
| `/servicios` | 3369 chars | ✅ PASS | 8 servicios con beneficios visibles |
| `/testimonios` | 1247 chars | ✅ PASS | 6 testimonios con estrellas visibles |
| `/blog` | 938 chars | ✅ PASS | 4 posts + newsletter visibles |
| `/agendar` | 422 chars | ✅ PASS | Formulario de cita visible |
| `/contacto` | 325 chars | ✅ PASS | Formulario + info de contacto visibles |

### 1.2 Navegación cliente-side (sin recargar)

| Origen → Destino | Contenido | Reveal Elements | Status |
|-------------------|-----------|-----------------|--------|
| `/` → `/nosotros` | 1310 chars | 23 reveal / 2 visible | ✅ PASS |
| `/nosotros` → `/servicios` | 3369 chars | 18 reveal / 2 visible | ✅ PASS |
| `/servicios` → `/testimonios` | 1247 chars | 9 reveal / 1 visible | ✅ PASS |
| `/testimonios` → `/blog` | 938 chars | 6 reveal / 3 visible | ✅ PASS |
| `/blog` → `/agendar` | 422 chars | 2 reveal / 2 visible | ✅ PASS |
| `/agendar` → `/contacto` | 325 chars | 3 reveal / 3 visible | ✅ PASS |
| `/contacto` → `/` | 1689 chars | 15 reveal / 0 visible | ✅ PASS |

---

## 2. i18n (Internacionalización)

### 2.1 Cambio de idioma

| Acción | Resultado | Status |
|--------|-----------|--------|
| ES → EN (click 🇺🇸) | `html lang="en"` | ✅ PASS |
| EN → ES (click 🇨🇴) | `html lang="es"` | ✅ PASS |

### 2.2 Traducciones

| Componente | Estado | Notas |
|------------|--------|-------|
| Header nav links | ✅ | Traducidos correctamente |
| Footer service links | ✅ | Nombres de servicios en español |
| Footer raw keys | ✅ | Sin claves crudas (`services.*`) |
| Home content | ✅ | Badge, hero, services, testimonials |
| Nosotros content | ✅ | Bio, credenciales, certificados |
| Blog content | ✅ | Posts desde `blog.posts` del JSON |
| Form placeholders | ✅ | Placeholders traducidos |

---

## 3. Formularios

### 3.1 Agendar Cita (`/agendar`)

| Test | Resultado | Status |
|------|-----------|--------|
| Submit vacío → errores | 5 alertas de error | ✅ PASS |
| Campos con `aria-invalid` | Sí | ✅ PASS |
| Mensajes con `role="alert"` | Sí | ✅ PASS |
| Estados de error visuales | Borde rojo + texto | ✅ PASS |

### 3.2 Contacto (`/contacto`)

| Test | Resultado | Status |
|------|-----------|--------|
| Submit vacío → errores | 5 alertas de error | ✅ PASS |
| Campos con `aria-invalid` | Sí | ✅ PASS |
| Mensajes con `role="alert"` | Sí | ✅ PASS |
| Estados de error visuales | Borde rojo + texto | ✅ PASS |

---

## 4. Accesibilidad

| Item | Estado | Notas |
|------|--------|-------|
| Skip-to-content link | ✅ | `href="#main-content"`, visible on focus |
| `lang` dinámico en `<html>` | ✅ | Cambia con el idioma |
| `:focus-visible` styles | ✅ | Outline violeta en elementos enfocados |
| `prefers-reduced-motion` | ✅ | Respeta configuración del SO |
| Form `aria-invalid` + `aria-describedby` | ✅ | Ambos formularios |
| `role="alert"` en errores | ✅ | Anunciados a screen readers |
| `aria-label` en menú móvil | ✅ | "Open menu" / "Close menu" |
| `aria-expanded` en menú móvil | ✅ | true/false según estado |
| Imágenes con `alt` | ✅ | Alt descriptivos en todas las imágenes |

---

## 5. Consola

| Page | Console Errors | Status |
|------|---------------|--------|
| `/` | 0 | ✅ PASS |
| `/nosotros` | 0 | ✅ PASS |
| `/servicios` | 0 | ✅ PASS |
| `/testimonios` | 0 | ✅ PASS |
| `/blog` | 0 | ✅ PASS |
| `/agendar` | 0 | ✅ PASS |
| `/contacto` | 0 | ✅ PASS |

---

## 6. Responsive (375px Mobile)

| Item | Estado | Notas |
|------|--------|-------|
| Hamburguer menu visible | ✅ | Botón con `aria-expanded` |
| Menú se abre/cierra | ✅ | Animación fade-in |
| Navegación desde menú | ✅ | Cierra al clickear link |
| Header sticky | ✅ | Glass effect al hacer scroll |
| Contenido readable | ✅ | Tipografía escala correctamente |

---

## 7. Issues (Warnings)

### 7.1 ✅ Imágenes — Next.js Image Optimization (VERIFICADO)
Las imágenes existen en el repositorio (`/public/imgs/`) y Next.js las carga bajo demanda (lazy loading nativo del componente `<Image>`). La imagen principal (`liliana-profile.jpg`) carga con HTTP 200. El resto son below-the-fold y cargan al hacer scroll. **No es un bug.**

### 7.2 ✅ Reveal en Home — elementos below-the-fold (VERIFICADO)
Comportamiento esperado de IntersectionObserver: los `.reveal` debajo del fold se activan al hacer scroll. El hero usa `animate-fade-in-up` que es inmediato. **No es un bug.**

### 7.3 ✅ Language switcher en mobile (VERIFICADO)
El código tiene versiones separadas para desktop (`hidden lg:flex`) y mobile (`lg:hidden`). Ambas incluyen los flags. Verificado en código y en DOM a 375px. **No es un bug.**

---

## 8. Conclusión

**Veredicto:** ✅ Aprobado para producción

Todas las funcionalidades críticas pasan:
- Navegación cliente-side funciona correctamente en las 7 rutas
- Cambio de idioma actualiza `lang` y traducciones
- Formularios validan y muestran errores accesibles
- Sin errores de consola
- Accesibilidad WCAG 2.1 AA cubierta

---

## Checklist de Correcciones (FINALIZADO)

- [x] ~~Navegación cliente-side rota~~ → **FIXED** (key={pathname})
- [x] ~~Claves de traducción crudas en footer~~ → **FIXED** (nosotros.services.*)
- [x] ~~ScrollReveal no re-inicializaba~~ → **FIXED** (remount vía key)
- [x] ~~Formularios sin validación~~ → **FIXED** (validación + aria)
- [x] ~~lang estático en html~~ → **FIXED** (LangUpdater)
- [x] ~~Verificar carga de imágenes~~ → **VERIFIED** (Next.js lazy load, HTTP 200)
- [x] ~~Language switcher en mobile~~ → **VERIFIED** (ya implementado, sin bugs)

**Estado QA: ✅ APROBADO — 0 errores, 0 warnings**
