# SPEC — Auditoría y corrección visual de iconos, imágenes y títulos
Generado por: agente po
Fecha: 2026-08-18
Estado: ✅ Aprobado automáticamente por negocio para esta iteración

## Objetivo de negocio
Eliminar los elementos visuales que se perciben pobres, borrosos, cortados,
fuera de lugar o desconectados de la armonía lograda con Georgia, los colores
de marca y los degradados violetas. La revisión debe cubrir el portal completo,
no solo las cards de servicios.

El resultado debe parecer una decisión visual intencional en cada pantalla:
los iconos e imágenes de los títulos deben apoyar el contenido, nunca invadir el
menú, perderse en el blur, quedar cortados o funcionar como decoración genérica.

## Usuario objetivo
Visitante del portal que navega rápidamente entre pantallas y necesita entender
qué representa cada sección sin distracciones visuales ni jerarquías confusas.

## Alcance
### Incluye
- Auditoría visual detallada de `/`, `/nosotros`, `/servicios`, `/agendar`,
  `/contacto`, `/testimonios` y `/blog` en 375px y desktop.
- Auditoría del Header, menú móvil, Footer y decoraciones compartidas.
- Revisión y corrección de cada icono/imagen asociado a un título, hero,
  sección, paso o card.
- Corrección del icono/imagen de Blog, que actualmente se percibe como un libro
  genérico, descontextualizado y desconectado de la armonía.
- Corrección del hero de Inicio, cuyo recurso está sobrepuesto al menú,
  cortado y no aporta significado suficiente.
- Corrección de títulos y descripciones cercanos a bordes difuminados: deben
  respirar y usar placa local si el degradado no garantiza legibilidad.
- Rediseño visual de los pasos 1, 2 y 3 de Agendar: números nítidos, con estilo,
  color y jerarquía, sin círculos borrosos o genéricos.
- Revisión de los iconos de Nosotros, Servicios, Contacto y Testimonios para
  que tengan presencia, color, silueta y relación semántica.
- Prototipo HTML visual obligatorio antes de cualquier implementación.
- Actualización posterior de assets y `IMAGES.md` si el Diseñador determina que
  un icono debe reemplazarse.

### NO incluye
- Cambiar copy, traducciones, precios, formularios, agenda, WhatsApp o
  ContactLauncher.
- Reemplazar los fondos cálidos, degradados violetas, orbes, Header, Footer o
  menú móvil globales.
- Aprobar un asset solo porque tiene `naturalWidth > 0`.
- Usar imágenes de referencia literalmente, logos copiados o rostros reales.
- Convertir todos los bloques del portal en la Variante A de Sanaciones.

## Historia(s) de usuario
- Como visitante, quiero que cada icono de título explique o refuerce la sección
  sin parecer un adorno aleatorio.
- Como visitante, quiero ver títulos y descripciones con suficiente espacio,
  contraste y separación para leerlos sin que el blur los desvanezca.
- Como visitante, quiero que el hero de Inicio y Blog se vean completos,
  equilibrados y conectados con la identidad de Alas de Amor.
- Como visitante, quiero reconocer los pasos 1, 2 y 3 de Agendar de inmediato
  por números claros y visualmente jerarquizados.
- Como negocio, quiero comparar una propuesta HTML real antes de aceptar cada
  corrección visual.

## Criterios de aceptación
- [ ] CA1: El Diseñador entrega `UI-IMPROVEMENTS.md` y un HTML de prueba con
  matriz de las 7 rutas, antes de implementación.
- [ ] CA2: Cada ruta tiene diagnóstico específico de título, descripción,
  icono/imagen, encuadre, z-index, opacidad, blur, contraste y separación.
- [ ] CA3: Ningún icono o imagen se corta, se superpone al Header/menú/CTA,
  queda fuera del viewport o pierde su propósito por `opacity`/blur.
- [ ] CA4: Blog recibe un tratamiento visual relacionado con lectura/editorial
  y la marca; no se acepta el libro genérico actual sin rediseño justificado.
- [ ] CA5: Inicio no muestra ningún recurso sobrepuesto al menú ni recortado;
  su imagen/icono tiene función visual clara y escala segura.
- [ ] CA6: En `/agendar`, los pasos 1, 2 y 3 tienen marcadores nítidos, color,
  borde/halo y jerarquía consistentes; el número no se ve borroso.
- [ ] CA7: En todas las rutas H1 y descripción tienen color, peso, tamaño,
  line-height y espacio diferenciados; el texto no toca zonas con blur.
- [ ] CA8: La propuesta y la implementación mantienen fondos, degradados,
  menú, Header, Footer, copy, i18n y comportamiento funcional actuales.
- [ ] CA9: Cada recurso visual conserva relación semántica con el título y el
  contenido de su sección; cualquier imagen decorativa es `aria-hidden` y no
  sustituye el texto.
- [ ] CA10: La comprobación visual se hace a 375px, 768px y 1280/1440px en ES
  y EN, con screenshots y bounding boxes como evidencia.
- [ ] CA11: Contraste: texto normal >=4.5:1, texto grande >=3:1 y gráficos
  relevantes >=3:1 sobre el fondo real; se usa placa local sin cambiar el hero
  si el degradado no cumple.
- [ ] CA12: QA aplica `visual-harmony-audit` y no declara PASS basándose solo en
  carga de assets o consola limpia.
- [ ] CA13: `npm run lint`, `npm run build`, regresión de 7 rutas, reduced-motion,
  teclado, SEO y seguridad pasan sin cambios funcionales.

## Decisiones aprobadas automáticamente para esta iteración
- Variante A de Sanaciones permanece aprobada.
- Avatares anónimos, acentos dorado/coral/aqua y Georgia permanecen aprobados.
- El fondo blanco cálido, degradados violetas, orbes, Header, Footer y menú no
  se modifican; solo se corrigen elementos que se apoyan sobre ellos.
- La aprobación de este spec y de la propuesta revisada del Diseñador queda
  autorizada automáticamente por la instrucción del negocio para este ciclo.

## Referencias visuales
- `imgs/store/oraculo/WhatsApp Image 2026-05-01 at 5.38.35 PM (1).jpeg`
- `public/imgs/image22.jpeg`
- `public/imgs/image19.jpeg`
- Capturas proporcionadas por negocio de Inicio, Blog, Contacto, Agendar y
  títulos sobre degradados.

## Reglas para el Diseñador
- Auditar las 7 rutas y producir una matriz uno a uno, no una recomendación
  genérica.
- Nombrar cada issue visual con IDs `ISS-VIS-*` estables.
- Entregar variantes HTML para Blog, Inicio y Agendar antes de implementar.
- Rechazar iconos sin silueta, color, contraste o relación semántica.
- Indicar si cada recurso se conserva, se rediseña como SVG o requiere asset
  nuevo documentado en `IMAGES.md`.

## Reglas para QA
- Cargar `visual-harmony-audit`, `frontend-design-review`, `frontend-design`,
  `accessibility` y `browser-testing-with-devtools`.
- Capturar screenshots de cada ruta en mobile y desktop.
- Reportar por coordenadas y computed styles: no usar "se ve feo" sin causa.
- Revisar específicamente Blog, Inicio, Agendar pasos y títulos pegados a blur.

## Flujo de esta iteración
1. PO: este spec queda aprobado automáticamente.
2. Diseñador: auditoría completa + `UI-IMPROVEMENTS.md` + HTML aprobado
   automáticamente para esta ocasión.
3. Tech-Lead: convierte cada hallazgo en tareas atómicas con DOF.
4. Dev: implementa en feature branch y crea PR.
5. Tech-Lead: revisa y mergea.
6. QA: espera el deploy, ejecuta la skill visual y corrige/rechaza hasta que
   todos los criterios pasen.
