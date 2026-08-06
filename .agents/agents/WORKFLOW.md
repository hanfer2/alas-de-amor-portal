# WORKFLOW — Orquestación de Agentes

Flujo de trabajo con 4 agentes personalizados para el portal Alas de Amor.

## Los 4 agentes

| Agente | Archivo | Rol | Produce |
|--------|---------|-----|---------|
| `po` | `.agents/agents/po.md` | Especificación funcional (QUÉ y POR QUÉ) | `SPECS.md` |
| `tech-lead` | `.agents/agents/tech-lead.md` | Plan técnico (CÓMO, tareas + DOR/DOF) | `TASKS.md` |
| `dev` | `.agents/agents/dev.md` | Implementación y correcciones | Código |
| `qa` | `.agents/agents/qa.md` | Verificación con Playwright | `QA-ISSUES.md` |

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

Genera `TASKS.md` con tareas atómicas, archivos a tocar, DOR y DOF verificables.

### Paso 3 — Desarrollo (Dev)

> "Usa el agente `dev`: implementa TASKS.md"

Implementa, corre `npm run build` + `npm run lint`, marca DOF cumplidos. Nunca hace push sin que lo pidas.

### Paso 4 — Verificación (QA)

> "Usa el agente `qa`: verifica el deploy"

Ejecuta Playwright contra el deploy, verifica cada DOF, genera `QA-ISSUES.md`.

### Paso 5 — Iterar

- ❌ QA rechaza → vuelve al Paso 3 (el Dev corrige `QA-ISSUES.md` primero, siempre antes que nuevas tareas).
- ⚠️ Un issue persiste 3 veces → QA te escala con el análisis de por qué falla.
- ✅ QA aprueba → ciclo terminado.

## Archivos de estado (la "memoria" del flujo)

| Archivo | Lo escribe | Lo lee |
|---------|-----------|--------|
| `SPECS.md` | `po` | `tech-lead`, tú |
| `TASKS.md` | `tech-lead` | `dev`, `qa`, tú |
| `QA-ISSUES.md` | `qa` | `dev`, tú |

## Skills de apoyo (addyosmani/agent-skills)

Instaladas 24 skills en `.agents/skills/`. Los agentes las usan cuando aplica:

| Skill | Agente que más la usa |
|-------|----------------------|
| `spec-driven-development` | `po` |
| `planning-and-task-breakdown` | `tech-lead` |
| `frontend-ui-engineering`, `incremental-implementation`, `debugging-and-error-recovery` | `dev` |
| `browser-testing-with-devtools`, `test-driven-development` | `qa` |
| `code-review-and-quality`, `performance-optimization`, `security-and-hardening` | todos |

## Reglas del sistema

- Ningún agente hace `git push` sin que tú lo pidas explícitamente.
- El `po` y el `tech-lead` nunca tocan código de la app.
- El `qa` nunca toca código de la app.
- El `dev` nunca inventa tareas: solo trabaja sobre `TASKS.md` o `QA-ISSUES.md`.
- Sin `SPECS.md` aprobado, el `tech-lead` no genera tareas.
