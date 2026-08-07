# SPEC — Meditación Guiada Online
Generado por: agente po
Fecha: 2026-08-07
Estado: ✅ Aprobado

## Objetivo de negocio
Agregar un nuevo servicio de "Meditación Guiada Online" al catálogo de terapias en /servicios. Es una sesión virtual de meditación guiada por Liliana a través de videollamada, permitiendo a clientes que no pueden asistir presencialmente acceder a los beneficios de la meditación desde cualquier lugar.

## Usuario objetivo
Visitante del portal que busca terapia pero no puede desplazarse al espacio físico. Clientes remotos, nacionales e internacionales.

## Alcance
### Incluye
- Nuevo ítem "Meditación Guiada Online" en la categoría Terapias de /servicios
- Precio: 70.000 COP
- Duración: 45 minutos (videollamada)
- Nueva imagen para el ServiceBlock (generar vía diseñador)
- Textos i18n en ES y EN
- Visible en el dropdown de /agendar

### NO incluye
- Sistema de videollamada integrado (se usa WhatsApp/Zoom externo)
- Página de checkout o pago
- Calendario de disponibilidad

## Historia(s) de usuario
- Como cliente remoto, quiero agendar una meditación guiada online para recibir los beneficios de la terapia sin desplazarme.

## Criterios de aceptación
- [ ] CA1: El visitante ve "Meditación Guiada Online" en la sección Terapias de /servicios
- [ ] CA2: Muestra precio 70.000 COP (o equivalente USD en EN)
- [ ] CA3: Muestra duración "45 minutos (videollamada)"
- [ ] CA4: Tiene una imagen coherente (meditación + elemento digital/virtual)
- [ ] CA5: Aparece en el dropdown de /agendar
- [ ] CA6: Sin errores de consola, sin romper build

## Contenido / copy
- ES título: "Meditación Guiada Online"
- ES desc: "Sesión de meditación guiada en vivo por videollamada con Liliana. Conéctate desde donde estés y recibe una experiencia de calma, conexión y sanación energética a distancia."
- ES duración: "45 minutos (videollamada)"
- EN título: "Online Guided Meditation"
- EN desc: "Live guided meditation session via video call with Liliana. Connect from anywhere and receive an experience of calm, connection, and energetic healing at a distance."
- EN duración: "45 minutes (video call)"

## Imágenes necesarias
| Página | Sección / Componente | Descripción visual | ¿Existe en IMAGES.md? | Acción |
|--------|---------------------|--------------------|---------------------|--------|
| /servicios | Terapias → ServiceBlock "Meditación Guiada Online" | Silueta meditando frente a una pantalla/portal de luz, conexión digital etérea, tonos violeta y dorado | ❌ No | Diseñador: generar `gen-terapias-meditacion-online.webp` |

## Notas y restricciones
- Paleta violeta/índigo, SIN verde, SIN amarillo
- La imagen debe evocar tanto meditación como conexión digital/virtual
