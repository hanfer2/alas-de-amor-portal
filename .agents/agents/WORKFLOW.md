# WORKFLOW — Orquestación de Agentes

Flujo de trabajo con 5 agentes personalizados para el portal Alas de Amor.

## Los 4 agentes del ciclo principal (Spec → Plan → Dev → QA)

| Agente | Archivo | Rol | Produce |
|--------|---------|-----|---------|
| `po` | `.agents/agents/po.md` | Especificación funcional (QUÉ y POR QUÉ) | `SPECS.md` |
| `tech-lead` | `.agents/agents/tech-lead.md` | Plan técnico (CÓMO, tareas + DOR/DOF) | `TASKS.md` |
| `dev` | `.agents/agents/dev.md` | Implementación y correcciones | Código |
| `qa` | `.agents/agents/qa.md` | Verificación con Playwright | `QA-ISSUES.md` |

## Agente de diseño — bajo demanda

| Agente | Archivo | Rol | Produce |
|--------|---------|-----|---------|
| `disenador` | `.agents/agents/disenador.md` | Diseño gráfico IA (generación de imágenes) | `public/imgs/gen-*.webp` |

El `disenador` NO forma parte del ciclo Spec → QA. Se invoca **bajo demanda** cuando necesitas una imagen nueva que no existe en el banco de fotos reales. Puede usarse en cualquier momento: durante el desarrollo (`dev`), durante la especificación (`po`), o por iniciativa tuya.

### Cuándo usar al diseñador

- "Necesito una imagen para la sección de meditación"
- "Genera un banner para la página de servicios"
- "No tenemos foto de \[terapia\], crea una"
- "Quiero un fondo etéreo para el hero"

## Trazabilidad de imágenes (ciclo completo)

Las imágenes siguen el mismo ciclo Spec → Plan → Dev → QA, atravesando los 5 agentes:

```
PO                    TECH-LEAD             DISEÑADOR         DEV                   QA
│                     │                     │                 │                     │
│ "Necesito banner   │                     │                 │                     │
│  para /servicios"  │                     │                 │                     │
├─► SPECS.md         │                     │                 │                     │
│   Imágenes         │                     │                 │                     │
│   necesarias:      │                     │                 │                     │
│   - gen-servicios- │                     │                 │                     │
│     hero.webp      │                     │                 │                     │
│                    │                     │                 │                     │
│                    ├─► TASKS.md          │                 │                     │
│                    │   TI — Generar      │                 │                     │
│                    │   banner servicios  │                 │                     │
│                    │   Archivo: gen-     │                 │                     │
│                    │   servicios-hero    │                 │                     │
│                    │   DOF: visible en   │                 │                     │
│                    │   /servicios hero   │                 │                     │
│                    │                     │                 │                     │
│                    │                     ├─► gen-servicios │                     │
│                    │                     │   -hero.webp    │                     │
│                    │                     │   + ficha en    │                     │
│                    │                     │   IMAGES.md     │                     │
│                    │                     │                 │                     │
│                    │                     │                 ├─► src/app/servicios │
│                    │                     │                 │   page.tsx:         │
│                    │                     │                 │   <Image src="/imgs/│
│                    │                     │                 │   gen-servicios-    │
│                    │                     │                 │   hero.webp" />     │
│                    │                     │                 │                     │
│                    │                     │                 │                     ├─► QA-ISSUES.md
│                    │                     │                 │                     │   ISS-IMG:
│                    │                     │                 │                     │   ¿gen-servicios-
│                    │                     │                 │                     │   hero.webp está
│                    │                     │                 │                     │   en /servicios
│                    │                     │                 │                     │   → hero?
│                    │                     │                 │                     │   ✅ naturalWidth>0
```

**Puntos de verificación en cada etapa:**

| Agente | Archivo | Responsabilidad con imágenes |
|--------|---------|------------------------------|
| `po` | `SPECS.md` → "Imágenes necesarias" | Define qué imágenes requiere la feature, consulta `IMAGES.md` para no pedir duplicados |
| `tech-lead` | `TASKS.md` → tareas `TI` | Crea una tarea por cada imagen (nueva = `disenador`, existente = integración). Las TI van antes que las tareas que las usan |
| `disenador` | `scripts/generate-image.mjs` + `IMAGES.md` | Genera la imagen y documenta su ficha técnica con uso exacto |
| `dev` | `src/app/**/page.tsx` | Integra la imagen EXACTAMENTE donde dice IMAGES.md. Si no existe, pide al `disenador` |
| `qa` | `QA-ISSUES.md` → `ISS-IMG-*` | Verifica que cada imagen del inventario esté en su lugar, sin roturas, con la ruta correcta |

## El ciclo

```
TÚ
 │ "Quiero agregar X al portal"
 ▼
┌──────────┐   SPECS.md (objetivo, usuario, criterios de aceptación)
│    PO    │ ──────────────────────────────────────────►
└──────────┘
                                                        ▼
                                                  ┌───────────┐   TASKS.md (tareas + DOR + DOF)
                                                  │ TECH-LEAD │ ──────────────────────────►
                                                  └───────────┘
                                                                                          ▼
                                                                                     ┌──────┐
                                                                                     │ DEV  │ código
                                                                                     └──────┘
                                                                                          ▼
                                                                                     ┌──────┐
                                                                                     │  QA  │ QA-ISSUES.md
                                                                                     └──────┘
                                                                                          │
                                                        ┌─────────────────────────────────┤
                                                        │ ❌ issues                       │ ✅ pasa
                                                        ▼                                 ▼
                                                  ┌──────┐                            FIN ✅
                                                  │ DEV  │ corrige → vuelve a QA
                                                  └──────┘
                                                        │
                                              ⚠️ persiste 3ª vez → 🚨 TE ESCALA
```

## Cómo usarlo (paso a paso)

### Paso 1 — Especificación (PO)

> "Usa el agente `po`: quiero que los visitantes puedan ver precios de cada terapia"

El PO te hará preguntas aclaratorias si hace falta, y generará `SPECS.md`. **Revísalo y apruébalo** antes de continuar.

### Paso 2 — Plan técnico (Tech Lead)

> "Usa el agente `tech-lead`: genera el plan para el spec aprobado"

Genera `TASKS.md` con tareas atómicas, archivos a tocar, DOR y DOF verificables. Si hay imágenes nuevas, incluye el "Briefing para el diseñador".

### Paso 3 — Diseño de imágenes (Diseñador, solo si el SPEC pide imágenes nuevas)

Si el SPEC pidió imágenes nuevas, el `tech-lead` ya escribió un "Briefing para el diseñador" en TASKS.md. **Antes de pasar al `dev`**, ejecuta:

> "Usa el agente `disenador`: procesa el briefing de imágenes en TASKS.md"

El diseñador copia fotos reales, reutiliza existentes, o genera IA. Actualiza `IMAGES.md`.

### Paso 4 — Desarrollo (Dev) + PR

> "Usa el agente `dev`: implementa TASKS.md"

Implementa, consulta `IMAGES.md` para las imágenes, corre `npm run build` + `npm run lint`, marca DOF cumplidos. **Crea un PR** con `gh pr create`. NO hace push directo.

### Paso 5 — Revisión de PR (Tech Lead)

> "Usa el agente `tech-lead`: revisa el PR #[número]"

El Tech Lead revisa el código como Senior Reviewer: evalúa clean code, arquitectura, y cumplimiento de DOF. Puede:
- ✅ **Aprobar**: el dev hace merge y sigue a QA
- ❌ **Rechazar**: deja comentarios específicos, el dev corrige y vuelve a paso 4

### Paso 6 — Verificación (QA)

> "Usa el agente `qa`: verifica el deploy"

**Primero crea casos de prueba** basados en TASKS.md. Luego ejecuta Playwright contra el deploy, verifica cada DOF, aplica validación de calidad de imágenes (rostros, duplicados, coherencia), genera `QA-ISSUES.md`.

### Paso 7 — Iterar

- ❌ QA rechaza → vuelve al Paso 3 (el Dev corrige `QA-ISSUES.md` primero, siempre antes que nuevas tareas).
- ⚠️ Un issue persiste 3 veces → QA te escala con el análisis de por qué falla.
- ✅ QA aprueba → ciclo terminado.

## Archivos de estado (la "memoria" del flujo)

| Archivo | Lo escribe | Lo lee |
|---------|-----------|--------|
| `SPECS.md` | `po` | `tech-lead`, tú |
| `TASKS.md` | `tech-lead` | `dev`, `qa`, tú |
| `QA-ISSUES.md` | `qa` | `dev`, tú |
| `IMAGES.md` | `disenador` | `dev`, tú |
| `public/imgs/gen-*.webp` | `disenador` | `dev`, tú |

## Skills de apoyo

Instaladas skills en `.agents/skills/`, `.agents/skills/` (user) y `.opencode/skills/` (system) — verifica el conteo real con `ls` antes de citarlo en un documento, ya que cambia con el tiempo. Cada agente usa las más relevantes a su rol:

### Por agente

| Agente | Skills asignadas |
|--------|-----------------|
| **`po`** | `spec-driven-development`, `idea-refine`, `interview-me`, `doubt-driven-development`, `documentation-and-adrs` |
| **`tech-lead`** | `planning-and-task-breakdown`, `api-and-interface-design`, `security-and-hardening`, `ci-cd-and-automation`, `shipping-and-launch`, `code-review-and-quality`, `seo`, `observability-and-instrumentation` |
| **`disenador`** | `frontend-design`, `tailwind-css-patterns`, `tailwind`, `css-animations` |
| **`dev`** | `frontend-ui-engineering`, `incremental-implementation`, `code-simplification`, `source-driven-development`, `typescript-advanced-types`, `git-workflow-and-versioning`, `accessibility`, `performance-optimization`, `test-driven-development`, `next-best-practices`, `next-cache-components`, `react-best-practices`, `nodejs-backend-patterns`, `security-and-hardening`, `tailwind-css-patterns` |
| **`qa`** | `browser-testing-with-devtools`, `accessibility`, `code-review-and-quality`, `test-driven-development`, `frontend-design`, `performance-optimization`, `seo` |

### Transversales (todos los agentes)

| Skill | Uso |
|-------|-----|
| `using-agent-skills` | Meta-skill para descubrir qué skill aplicar según el contexto |
| `debugging-and-error-recovery` | Debugging sistemático de causa raíz |
| `doubt-driven-development` | Revisión adversarial de decisiones antes de commitear |
| `context-engineering` | Optimización de contexto entre sesiones |
| `documentation-and-adrs` | Registro de decisiones de arquitectura |

## Ejemplo concreto: nuevo módulo con imágenes

> PO: "Crear módulo de extractos financieros. Nueva página /extractos con diseño actual pero imágenes nuevas: header, tabla, estado vacío."

```
1. PO escribe SPECS.md
   └─ "Imágenes necesarias": gen-extractos-header.webp, gen-extractos-table.webp, gen-extractos-empty.webp

2. TECH-LEAD escribe TASKS.md con:
   ├─ TI-1: gen-extractos-header (nueva)
   ├─ TI-2: gen-extractos-table (nueva)
   ├─ TI-3: gen-extractos-empty (nueva)
   ├─ T1: crear página /extractos
   └─ "Briefing para el diseñador" con tabla de 3 filas

3. DISEÑADOR procesa el briefing → genera 3 imágenes → actualiza IMAGES.md

4. DEV lee TASKS.md + IMAGES.md → integra las 3 imágenes en /extractos

5. QA verifica que las 3 imágenes están en /extractos con naturalWidth > 0
   └─ Si falta gen-extractos-header → ISS-IMG-001
```

## Reglas del sistema

- Ningún agente hace `git push` sin que tú lo pidas explícitamente.
- El `po` y el `tech-lead` nunca tocan código de la app.
- El `qa` nunca toca código de la app.
- El `dev` nunca inventa tareas: solo trabaja sobre `TASKS.md` o `QA-ISSUES.md`.
- Sin `SPECS.md` aprobado, el `tech-lead` no genera tareas.
- El `disenador` nunca sobrescribe imágenes existentes; todas sus salidas usan el prefijo `gen-`.
- El `disenador` requiere variables de entorno (`IMAGE_API_PROVIDER`, `IMAGE_API_KEY`, `IMAGE_MODEL`) configuradas en `.env.local`.
