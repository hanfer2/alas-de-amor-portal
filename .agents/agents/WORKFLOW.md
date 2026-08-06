# WORKFLOW — Orquestación de Agentes

Flujo de trabajo con 3 agentes personalizados para el portal Alas de Amor.

## Los 3 agentes

| Agente | Archivo | Rol |
|--------|---------|-----|
| `po` | `.agents/agents/po.md` | Recibe tu contexto → genera `TASKS.md` con tareas + DOR + DOF |
| `dev` | `.agents/agents/dev.md` | Lee `TASKS.md` / `QA-ISSUES.md` → implementa y corrige código |
| `qa` | `.agents/agents/qa.md` | Ejecuta Playwright → verifica DOF → genera `QA-ISSUES.md` |

## El ciclo

```
TÚ
 │ "Quiero agregar X al portal"
 ▼
┌──────┐   TASKS.md (tareas + DOR + DOF)
│  PO  │ ──────────────────────────►
└──────┘
                                   ▼
                              ┌──────┐   código modificado
                              │ DEV  │ ──────────────────►
                              └──────┘
                                                              ▼
                                                         ┌──────┐   QA-ISSUES.md
                                                         │  QA  │ ───────────────►
                                                         └──────┘
                                                              │
                                    ┌─────────────────────────┤
                                    │ ❌ issues abiertos      │ ✅ todo pasa
                                    ▼                         ▼
                              ┌──────┐                    FIN ✅
                              │ DEV  │ (corrige, vuelve a QA)
                              └──────┘
                                    │
                          ⚠️ Issue persiste 3ª vez → 🚨 ESCALA A TI
```

## Cómo usarlo (paso a paso)

### 1. Iniciar un ciclo de trabajo

Dile al orquestador (yo) o invoca directamente:

> "Usa el agente `po`: quiero que el formulario de contacto también guarde en Supabase"

El PO generará `TASKS.md` con las tareas técnicas y criterios DOF/DOR específicos.

### 2. Ejecutar desarrollo

> "Usa el agente `dev`: implementa TASKS.md"

El Dev lee las tareas, verifica el DOR, implementa, corre `npm run build` + `lint`, y marca los DOF cumplidos.

### 3. Ejecutar QA

> "Usa el agente `qa`: verifica el deploy"

El QA ejecuta Playwright contra https://alas-de-amor-portal.vercel.app, prueba las 7 rutas, consola, network, responsive, formularios, idiomas, y cada DOF específico. Genera `QA-ISSUES.md`.

### 4. Iterar

- Si QA ❌ RECHAZA → vuelve al paso 2 (el Dev corrige QA-ISSUES.md primero).
- Si un issue persiste 3 veces → QA lo escala a ti con el análisis de por qué falla.
- Si QA ✅ APRUEBA → el ciclo termina.

## Reglas de los archivos compartidos

- `TASKS.md` — solo el PO lo crea/modifica estructura; el Dev marca checkboxes de DOF; el QA marca los verificados.
- `QA-ISSUES.md` — solo el QA lo genera; el Dev cambia estados a `✅ CORREGIDO`.
- Nunca borres estos archivos a mano a mitad de ciclo; son la memoria del flujo.

## Qué NO hacen los agentes

- Ningún agente hace `git push` sin que tú lo pidas explícitamente.
- El PO nunca toca código de la app.
- El QA nunca toca código de la app.
- El Dev nunca inventa tareas: solo trabaja sobre TASKS.md o QA-ISSUES.md.
