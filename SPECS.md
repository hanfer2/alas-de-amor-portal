# SPEC — Refactor visual de /agendar (Split Layout + Fix i18n)
Generado por: agente po
Fecha: 2026-08-07
Estado: ✅ Aprobado

## Objetivo de negocio
Elevar la calidad visual de la página de agendamiento a un nivel profesional usando un diseño a dos columnas (Split Layout) que transmita confianza antes del formulario. Corregir el bug de claves i18n visibles en el select de servicios.

## Usuario objetivo
Visitante del portal que está a un paso de agendar. La columna izquierda con imagen y mensaje de confianza reduce la fricción y aumenta la conversión.

## Alcance
### Incluye
- Refactor visual de /agendar: split layout 2 columnas en lg+
- Columna izquierda: imagen lateral etérea + mensaje de calma + info de contacto directa
- Columna derecha: formulario con glassmorphism (tarjeta flotante)
- Estilo etéreo en inputs: fondos suaves, bordes tenues, focus ring violeta
- Botón de submit con gradiente vibrante y micro-interacción hover
- Fix del bug: select muestra claves i18n en lugar de texto traducido
- Fondo de la página con gradiente sutil (warm-white → violet-50)

### NO incluye
- Cambios en el componente Logo o Header
- Cambios en otras páginas
- Modificaciones en la lógica del formulario (envío, validación, WhatsApp)

## Historia(s) de usuario
- Como visitante, quiero sentir confianza y calma al llenar el formulario de agendamiento para completar mi reserva sin fricción visual.

## Criterios de aceptación
- [ ] CA1: En pantallas lg+, la página muestra 2 columnas (imagen a la izquierda, form a la derecha)
- [ ] CA2: La columna izquierda tiene una imagen etérea sin rostros, mensaje de calma y datos de contacto
- [ ] CA3: El formulario tiene glassmorphism (fondo translúcido, blur, borde sutil)
- [ ] CA4: Los inputs tienen estilo etéreo (bg-gray-50, border suave, focus ring violeta)
- [ ] CA5: El select de servicios muestra NOMBRES traducidos, no claves i18n (`services.reiki`)
- [ ] CA6: El botón de submit tiene gradiente y micro-interacción
- [ ] CA7: Responsive: en mobile (<lg) se apila verticalmente
- [ ] CA8: 0 errores de consola, 0 hydration errors
- [ ] CA9: build + lint pasan

## Contenido / copy
- ES columna izquierda título: "Tu bienestar comienza aquí"
- ES columna izquierda subtítulo: "Cada sesión es un espacio seguro para tu sanación. Liliana te acompañará con calidez y profesionalismo en cada paso del camino."
- EN columna izquierda título: "Your well-being starts here"
- EN columna izquierda subtítulo: "Every session is a safe space for your healing. Liliana will accompany you with warmth and professionalism every step of the way."

## Imágenes necesarias
| Página | Sección / Componente | Descripción visual | ¿Existe en IMAGES.md? | Acción |
|--------|---------------------|--------------------|---------------------|--------|
| /agendar | Columna izquierda → imagen lateral | Imagen etérea cálida, silueta en espacio de sanación, luz violeta y dorada, sin rostros, atmósfera de calma y confianza | ❌ No | Diseñador: generar `gen-agendar-lateral.webp` (600×800) |

## Notas y restricciones
- Paleta violeta/índigo, dorado, crema — SIN verde, SIN amarillo
- Glassmorphism sutil, no exagerado
- Mantener la funcionalidad del form intacta (validación, WhatsApp, server action)
