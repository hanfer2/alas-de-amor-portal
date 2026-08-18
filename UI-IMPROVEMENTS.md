# UI-IMPROVEMENTS - Armonia visual integral del portal
Generado por: agente disenador (modo auditor)
Fecha: 2026-08-18
Estado: ✅ APROBADA POR NEGOCIO - implementacion pendiente

## Proposito y alcance

Esta propuesta convierte las decisiones aprobadas en una especificacion visual
para Tech-Lead y Dev. No implementa codigo de aplicacion, no genera imagenes
finales y no modifica `SPECS.md` ni `IMAGES.md`.

El alcance posterior cubre las siete rutas y el shell compartido:

- `/`
- `/nosotros`
- `/servicios`
- `/agendar`
- `/contacto`
- `/testimonios`
- `/blog`
- `Header`, `Footer` y menu movil

Las decisiones de negocio ya cerradas son:

- **Variante A** para las tres cards de Sanaciones.
- **Avatares ilustrativos anonimos** para los seis testimonios.
- Acentos **dorado, rojo coral y azul claro/aqua controlado**.
- **Georgia** para titulos grandes, con fallback serif seguro y legible.
- Aplicacion del sistema visual al portal completo, no solo a `/servicios` y
  `/testimonios`.

La propuesta sigue pendiente de implementacion tecnica y de la verificacion QA.
La aprobacion de estas decisiones no autoriza a generar assets ni a ejecutar
parches antes de que Tech-Lead convierta esta especificacion en tareas.

## Prototipo HTML para decision

- **Ruta:** [`design-proposals/servicios-testimonios/index.html`](design-proposals/servicios-testimonios/index.html)
- **Aviso:** el HTML muestra `Prototipo no productivo` y todos los iconos y
  avatares siguen siendo placeholders de direccion de arte.
- **Apertura en Windows:** desde el Explorador, abrir
  `design-proposals\servicios-testimonios\index.html`; alternativamente,
  ejecutar `Start-Process .\design-proposals\servicios-testimonios\index.html`.
- **Restriccion:** es estatico, autocontenido, sin CDN, sin navegacion real y
  sin logica de CTA.

## Diagnostico auditado

La identidad actual es consistente, pero la jerarquia usa el mismo violeta para
demasiados roles y varias decoraciones tienen tan poca presencia que desaparecen
en el degradado. Hallazgos que motivan esta propuesta:

| Archivo:linea | Hallazgo | Implicacion de diseno |
|---|---|---|
| `src/app/globals.css:39-48` | `gold-*` repite la escala violeta. | No usar esos tokens como dorado hasta que Dev corrija su intencion con una decision tecnica separada. |
| `src/app/globals.css:141-149` | El focus global es de 2 px y la regla `:focus` elimina el outline base. | Validar focus-visible sobre superficies violetas y acentos, sin depender solo de color. |
| `src/app/globals.css:173-194` | `gradient-hero`, `gradient-spiritual`, `gradient-card` y `text-gradient` son el lenguaje global actual. | La propuesta trabaja encima de ellos; no los reemplaza. |
| `src/app/globals.css:200-202` | `.shadow-gold` usa un rgba violeta. | No presentar la sombra actual como dorada; corregirla solo durante implementacion aprobada. |
| `src/app/servicios/page.tsx:35-60` | Hero con `gradient-hero`, orbes y `EnergyWaves` de baja opacidad. | La decoracion debe ganar color y lectura, manteniendo el fondo. |
| `src/app/servicios/page.tsx:183-220` | `ServiceBlock` es una fila imagen + texto; metadata y CTA quedan separados. | Sanaciones necesita la anatomia de card A; las demas categorias conservan su personalidad. |
| `src/app/servicios/page.tsx:239-266` | Fallback SVG concentrico, monocromatico y con `opacity-30`. | Debe existir un fallback expresivo por sanacion, no un simbolo generico casi invisible. |
| `src/app/testimonios/page.tsx:1` | La card usa `gradient-card`, pero no tiene avatar dedicado ni sistema de rating dorado documentado. | Separar identidad, quote, terapia y rating; conservar `5 de 5`. |
| `src/app/nosotros/page.tsx:1` | El hero usa `LotusMandala` en `opacity-30` y pone titulo y subtitulo juntos sin una placa de contraste. | Probar titulo dominante y descripcion secundaria sobre el degradado existente. |
| `src/app/agendar/page.tsx:1` | `CalendarWings` se muestra en `opacity-25`; los pasos y formulario dependen de iconos violetas. | Dar jerarquia al icono de agenda y a los tres pasos sin cambiar el flujo. |
| `src/app/contacto/page.tsx:1` | `DovePeace` se muestra en `opacity-20` sobre `gradient-hero`. | Usar coral/aqua como detalle de presencia, no como fondo nuevo. |
| `src/app/blog/page.tsx:26-58` | `OpenBook` esta en `opacity-20`; categoria, fecha y titulo tienen enfasis cercano. | Diferenciar metadata, titulo y enlace mediante roles de color y peso. |
| `src/app/page.tsx:106-165` | `AngelFeathers` esta en `opacity-[0.07]`; el hero prioriza marca y foto. | El icono debe ser visible como atmosfera secundaria, nunca competir con la foto ni CTA. |
| `src/app/page.tsx:204-236` | Las cards de servicios usan iconos `currentColor` casi monocromos. | Aplicar un catalogo de iconos con halo y acento por card. |
| `src/components/HeroDecoration.tsx:1-140` | Las decoraciones usan gradientes violetas y opacidades de 0.20 a 0.40. | Mantener las formas, aumentar contraste local, grosor y mezcla de acentos de forma controlada. |
| `src/components/Header.tsx:49-71` | Header fijo, `glass`, nav y estados activos ya son parte del shell. | No cambiar estructura, menu, espaciado ni comportamiento; solo armonizar estados si Tech-Lead lo aprueba. |
| `src/components/Header.tsx:96-170` | Menu movil usa `Liquid`, `glass` y los mismos links. | La regresion debe comprobar apertura, foco, cierre por ruta y lectura en 375 px. |
| `src/components/Footer.tsx:29-127` | Footer usa degradado calido, enlaces violetas y cuatro iconos sociales. | No convertirlo en una nueva pagina; aplicar solo roles de acento y presencia iconografica. |

Referencias de direccion de arte: `imgs/store/oraculo/WhatsApp Image 2026-05-01
at 5.38.35 PM (1).jpeg`, `public/imgs/image22.jpeg` y
`public/imgs/image19.jpeg`. Se toman halo, capas, lavanda, aqua, coral, dorado y
jerarquia editorial; no se copian textos, logos, rostros, composiciones ni
tipografias propietarias.

## Guardrails globales

Estos elementos quedan fuera de cualquier cambio visual de esta iniciativa:

- fondo blanco calido / `warm-white`;
- degradados violetas (`gradient-hero`, `gradient-spiritual`, `gradient-card`);
- orbes flotantes y el lenguaje etereo;
- estructura, links, estados y comportamiento del Header;
- Footer y menu movil como shell compartido;
- copy, precios, duracion, i18n ES/EN, agenda, WhatsApp, formularios y
  `ContactLauncher`.

La armonia se aplica mediante **roles de color, tipografia, cards, bordes,
iconos y estados**, superpuestos al lenguaje existente. Un halo o placa local
para asegurar legibilidad no equivale a cambiar el fondo global. No se permite
resolver el contraste sustituyendo el degradado violetas por coral, aqua o
dorado.

## Sistema de color y contraste

Los valores son colores de trabajo de la propuesta. El Dev debe verificar el
resultado sobre el pixel mas desfavorable del degradado; un ratio calculado
contra blanco no autoriza texto flotante sobre cualquier zona del degradado.
Cuando el test real no cumpla, se usa una superficie local opaca `#fefcfb` o
`#f5f3ff` detras del grupo de texto, sin modificar el hero.

| Rol | Primer plano | Fondo de prueba | Ratio | Uso |
|---|---|---|---:|---|
| H1 dominante | `#1e1b4b` | `#fefcfb` | 15.63:1 | Titulo grande cuando no esta sobre una placa lavanda. |
| H1 alternativo | `#4c1d95` | `#f5f3ff` | 9.99:1 | Titulo editorial sobre superficie lavanda local. |
| Subtitulo / descripcion | `#1e1b4b` | `#fefcfb` | 15.63:1 | Texto normal, 16-18 px, nunca `reiki-400`. |
| Titulo de card | `#4c1d95` | `#f5f3ff` | 9.99:1 | Nombre del servicio, articulo o seccion. |
| Cuerpo sobre panel aqua | `#1e1b4b` | `#e7f7f8` | 14.51:1 | Descripcion y quote. |
| Cuerpo sobre panel coral | `#1e1b4b` | `#fff1f3` | 14.56:1 | Descripcion en card con acento coral. |
| Metadata dorada | `#8a5a00` | `#fefcfb` | 5.79:1 | Precio, fecha, etiqueta o `5 de 5`. |
| Aqua de interfaz | `#0f6675` | `#e7f7f8` | 6.00:1 | Eyebrow, borde y pequenos iconos con superficie aqua. |
| Coral sobrio | `#b4233f` | `#fefcfb` | 6.31:1 | Eyebrow, borde, comilla o estado puntual. |
| CTA | `#ffffff` | `#6d28d9` | 7.10:1 | Accion principal y estados de accion. |
| Estrella decorativa | `#b7791f` | `#fefcfb` | 3.56:1 | Grafico no textual a tamano grande; no usar para copy normal. |
| Icono no textual | `#0f6675`, `#b4233f` o `#8a5a00` | Tinte propio claro | >=3:1 | Forma visual con contorno y halo, no significado exclusivo por color. |

Reglas de uso:

- Titulo y descripcion siempre tienen color, tamano, peso y line-height
  distintos. No usar `text-gradient` como unico indicador del titulo.
- Sobre `gradient-hero`, el H1 y su descripcion se prueban en ES y EN. Si el
  degradado produce una zona menor a 3:1 para titulo grande o 4.5:1 para texto
  normal, se añade una placa local calida y se repite la medicion.
- `#b7791f` es para estrellas grandes y detalles; el texto dorado usa
  `#8a5a00`.
- No usar `#a78bfa`, `#c4b5fd`, `#fda4af` ni `#b7791f` como texto normal sobre
  `warm-white`.

## Jerarquia tipografica y respuesta

Georgia se usa en titulos de lectura y no en controles, precios, metadata ni
copy funcional largo. El fallback es `Georgia, "Times New Roman", ui-serif,
serif`; el cuerpo permanece en `Inter, system-ui, sans-serif`.

| Elemento | 375 px | Desktop | Peso | Line-height | Color primario |
|---|---:|---:|---:|---:|---|
| H1 de hero | 40 px, max. 3 lineas | 64-72 px | 700 | 0.98-1.05 | `#1e1b4b` o `#4c1d95` |
| H2 de seccion | 32 px | 40-48 px | 700 | 1.05-1.12 | `#4c1d95` |
| Titulo de card | 26 px | 30-32 px | 700 | 1.05-1.12 | `#4c1d95` |
| Subtitulo de hero | 16 px | 18 px | 500 | 1.5-1.6 | `#1e1b4b` |
| Descripcion de card | 16 px | 16-18 px | 400-500 | 1.5-1.6 | `#1e1b4b` |
| Metadata | 13-14 px | 13-14 px | 600-700 | 1.3 | `#8a5a00` o `#504b73` |
| CTA | 16 px | 16-18 px | 600-700 | 1.2 | Blanco sobre violeta |

La escala puede expresarse con `clamp`, pero debe comprobar las cadenas reales
de `es.json` y `en.json`: no fijar `nowrap`, no comprimir tracking para salvar
titulos largos y no permitir que el subtitulo parezca otro H1. En un titulo como
`Quiénes Somos`, el H1 queda en una linea dominante o dos como maximo, y la
descripcion se separa por al menos 12 px, con ancho menor y peso regular.

## Variante A y adaptacion sin copiar

### Sanaciones: decision cerrada

La **Variante A - carta editorial comparativa** es la recomendada y aceptada:

1. Tres cards iguales en desktop y una columna en 375 px.
2. Franja de acento de 6-8 px, icono de 96-112 px en halo, titulo, descripcion,
   metadata separada y CTA al final.
3. Fondo de card lavanda existente; cada item usa un acento puntual coral,
   aqua o dorado. El color nunca es el unico indicador: tambien cuentan nombre,
   icono y orden.
4. Altura flexible, con metadata y CTA alineados por layout, sin truncar
   descripcion ni alterar copy.

### Como se adapta al portal completo

No se copia la card tres veces en cada pagina. Se reutilizan cinco principios,
no una composicion unica:

- **Entrada:** cada ruta conserva su hero actual y agrega la pareja H1 /
  subtitulo con la escala tipografica comun.
- **Foco:** cada pantalla tiene una sola familia de iconos y un acento primario;
  el hero usa un icono grande y las cards usan una version compacta.
- **Contenedor:** las superficies existentes (`gradient-card`, `glass`,
  `warm-white`) permanecen; solo se diferencian borde, halo, metadata y CTA.
- **Lectura:** el contenido primario usa ciruela/violeta; metadata y acciones
  tienen roles independientes; no todo se convierte en tarjeta.
- **Accion:** se conserva el CTA y su destino actual. La forma puede ser pill,
  enlace editorial, paso numerado o boton de formulario segun el contexto.

Aplicacion por contexto:

- Home: cards breves de servicios, foto y testimonios; no convertir el hero de
  Liliana en una card A.
- Nosotros: bloque editorial de bio y credenciales; iconos de credencial
  compactos, no tres columnas de Sanaciones.
- Servicios: A solo para Sanaciones; terapias, talleres, lecturas, charlas y
  retiros mantienen sus filas hasta que una tarea futura defina otra variante.
- Agendar y Contacto: cards de pasos e informacion que priorizan conversion y
  legibilidad de formularios, no ornamento editorial pesado.
- Testimonios: cards de quote con avatar, rating y metadata humana.
- Blog: cards de articulo con categoria, fecha, titulo y enlace; no precio ni
  CTA de agenda dentro de cada articulo.

## Catalogo de iconos y decoraciones

El catalogo conserva las formas actuales, pero les da una presencia controlada:
halo claro local, dos o tres colores de acento, contorno de al menos 2 px en el
viewBox, y opacidad visual efectiva aproximada de 0.55-0.85 en la forma. La
decoracion sigue siendo `aria-hidden`; si un icono comunica una accion, el
control mantiene un nombre accesible independiente.

| Pantalla / lugar | Icono actual auditado | Tratamiento propuesto sin tocar fondo | Acento |
|---|---|---|---|
| `/` hero | `AngelFeathers`, `src/app/page.tsx:106-109` | Mantener alas grandes, subir presencia local con lavanda + aqua + dorado en vetas; wrapper con halo, sin cubrir foto ni CTA. | Aqua primario, dorado detalle |
| `/` cards de servicios | SVG `currentColor`, `src/app/page.tsx:204-236` | Seis simbolos de 32-64 px, halo individual y contorno visible; el titulo sigue siendo la etiqueta semantica. | Un acento por servicio |
| `/nosotros` hero y credenciales | `LotusMandala`, `src/app/nosotros/page.tsx:1` | Loto con centro coral/dorado y petalos lavanda; credenciales usan mini-iconos consistentes, no iconos invisibles. | Coral + dorado |
| `/servicios` hero | `EnergyWaves`, `src/app/servicios/page.tsx:35-39` | Conservar ondas concentricas, engrosar el anillo central y añadir aqua/coral en puntos; no convertirlo en fondo nuevo. | Aqua primario |
| `/servicios` cards | Fallback concentrico, `src/app/servicios/page.tsx:239-266` | Tres iconos ricos en color: alas/semilla, abrazo/flor abstractos y eje/sol; cada uno 96-112 px y con fallback vectorial propio. | Coral, aqua, dorado |
| `/agendar` hero y pasos | `CalendarWings`, `src/app/agendar/page.tsx:1` | Calendario con alas legibles, centro dorado y pequenos marcadores coral; pasos numerados con iconos de 40-56 px y placa clara. | Dorado primario |
| `/contacto` hero y contacto | `DovePeace`, `src/app/contacto/page.tsx:1` | Paloma de dos tonos con contorno mas firme y punto aqua; los iconos de email/WhatsApp conservan nombre y foco. | Coral primario, aqua detalle |
| `/testimonios` hero y cards | `SparkleStars`, `src/app/testimonios/page.tsx:1` | Estrellas con dorado visible y halo lavanda; cada card recibe avatar ilustrativo, comilla coral y rating dorado. | Dorado primario |
| `/blog` hero y cards | `OpenBook`, `src/app/blog/page.tsx:26-58` | Libro con lomo aqua, paginas lavanda y marcador coral; categorias son badges, no iconos competidores. | Aqua primario, coral detalle |
| Header / menu movil | Iconos inline del menu, `src/components/Header.tsx:96-170` | No cambiar menu ni Liquid. Solo asegurar icono de menu/cierre con contraste de focus y color violeta estable. | Violeta, sin nuevos fondos |
| Footer | Cuatro SVG sociales, `src/components/Footer.tsx:39-81` | Mantener estructura y enlaces; usar color por marca solo en hover, tamano 20 px y hit area 40 px. | Aqua/coral solo en hover |

Para los tres iconos de Sanaciones, todos los assets deben compartir proporcion
1:1, maximo cuatro colores saturados, lectura a 64 px y una version vectorial
simple como fallback. El concepto textual y el nombre del servicio siguen siendo
la fuente de significado; nunca se comunica una categoria solo por color.

## Regla de acentos

Cada pantalla tiene un acento primario y como maximo un acento secundario visible
en la misma agrupacion. El violeta sigue siendo el color de marca y de accion
principal.

| Pantalla | Primario | Secundario | Limite |
|---|---|---|---|
| `/` | Aqua | Dorado | Aqua en decoracion y detalles; CTA sigue violeta. |
| `/nosotros` | Coral | Dorado | Coral en eyebrow/comilla/linea, no en parrafos. |
| `/servicios` | Aqua | Coral o dorado por card | Un acento por card; no mezclar los tres en cada card. |
| `/agendar` | Dorado | Aqua | Dorado en disponibilidad/metadata, no en texto pequeno decorativo. |
| `/contacto` | Coral | Aqua | Coral guia contacto; aqua identifica canales secundarios. |
| `/testimonios` | Dorado | Coral | Dorado solo rating/detalle; quote y nombre permanecen ciruela. |
| `/blog` | Aqua | Coral | Aqua para categoria/lectura; coral solo para marcador o estado. |
| Header/Footer/menu | Violeta | Ninguno por defecto | No introducir acentos que compitan con navegacion. |

Regla cuantitativa: en una card o hero, el color de acento no debe ocupar mas
del 10-15% de la superficie visible ni aparecer en mas de dos roles. Los acentos
son borde, halo, icono, eyebrow o metadata; no son fondos globales ni texto
normal de bajo contraste. Hover y focus pueden intensificar el acento, pero
deben seguir siendo distinguibles sin color por forma, borde o texto.

## Avatares y fallback

Los seis avatares aprobados son ilustraciones anonimas, no fotografias de
clientes. Deben ser 1:1, 400x400, WebP preferente y menores a 200 KB; busto o
rostro simplificado, diversidad visual, sin nombres, logos, texto ni likeness
de personas reales. Los seis briefs aprobados se conservan para Maria G., Carlos
R., Ana P., Laura M., Daniel S. e Isabella R. en ese orden.

Fallback obligatorio si un avatar no carga:

1. Mostrar un circulo de halo lavanda con el mismo marco, 56-64 px.
2. Dentro, mostrar un monograma generado desde el nombre anonimizado o un
   simbolo abstracto de perfil, en `#4c1d95` sobre `#f5f3ff`.
3. Mantener visible nombre, localidad, terapia, quote y `Valoracion: 5 de 5`.
4. No mostrar un icono roto, una fotografia alternativa ni afirmar que el
   avatar es una persona real.

Las estrellas son cinco formas doradas, con `aria-label` o texto equivalente
`Valoracion: 5 de 5`; el valor no se altera. `#b7791f` solo se usa como grafico,
y `#8a5a00` para el texto.

## Assets propuestos, aun no generados

Esta lista es una propuesta para una futura actualizacion de `IMAGES.md`; no se
actualiza el inventario en esta fase.

| Nombre | Ruta publica | Dimensiones | Peso objetivo | Uso |
|---|---|---:|---:|---|
| `gen-sanaciones-icon-nina.webp` | `/imgs/services/gen-sanaciones-icon-nina.webp` | 512x512 | < 200 KB | Icono Variante A, nino interior |
| `gen-sanaciones-icon-mama.webp` | `/imgs/services/gen-sanaciones-icon-mama.webp` | 512x512 | < 200 KB | Icono Variante A, mama |
| `gen-sanaciones-icon-papa.webp` | `/imgs/services/gen-sanaciones-icon-papa.webp` | 512x512 | < 200 KB | Icono Variante A, papa |
| `gen-testimonio-avatar-01.webp` a `06.webp` | `/imgs/testimonials/` | 400x400 | < 200 KB cada uno | Avatares anonimos aprobados |

Cuando existan, `IMAGES.md` debe registrar ruta exacta, dimensiones y peso real,
prompt, fecha, herramienta y declaracion de ilustracion anonima. No generar ni
documentar esos archivos como existentes durante esta propuesta.

## Matriz del portal completo

Esta matriz es el contrato visual minimo para las siete rutas. Los nombres de
iconos son ejemplos del catalogo, no copy nuevo ni assets finales.

| Ruta | Hero / foco | Titulo dominante | Subtitulo secundario | Icono / tratamiento |
|---|---|---|---|---|
| `/` | Marca, foto de Liliana y CTA doble | Georgia 64/40 px, ciruela; la marca no se encapsula en card A | Inter 18/16 px, deep-plum, ancho menor | `AngelFeathers` multicolor tenue + iconos de seis servicios con halos |
| `/nosotros` | Presentacion y confianza profesional | `Quiénes Somos` como H1 separado visualmente | Descripcion debajo, 16-18 px y >=4.5:1 en placa si el gradiente lo exige | `LotusMandala` coral/dorado/lavanda; mini-iconos de credenciales |
| `/servicios` | Catalogo de terapias | H1 editorial y H2 por categoria | Descripcion de hero y de cada servicio en rol cuerpo | `EnergyWaves`; Variante A exclusivamente para Sanaciones |
| `/agendar` | Conversion y pasos | H1 claro, no ornamental en exceso | Instruccion breve con contraste normal | `CalendarWings` dorado/aqua; pasos numerados con iconos consistentes |
| `/contacto` | Contacto y formulario | H1 coral solo como detalle, texto base violeta | Descripcion orientada a accion, sin competir con formulario | `DovePeace` coral/aqua; iconos de canal con labels reales |
| `/testimonios` | Prueba social | H1 Georgia y quote cards con titulo menor | Descripcion sobria; terapia/localidad como metadata | `SparkleStars` dorado; avatar, comilla coral, cinco estrellas |
| `/blog` | Descubrimiento editorial | H1 Georgia, titulos de articulo H2 | Excerpt en Inter; fecha/categoria neutral | `OpenBook` aqua/coral; icono de lectura en enlace |

## Matriz de regresion visual

La implementacion no se considera lista hasta comprobar la siguiente matriz en
ES y EN, con viewport real de 375 px y desktop de al menos 1280 px.

| Area | 375 px | Desktop | Criterio de aprobacion |
|---|---|---|---|
| Shell global | Header fijo, menu abre/cierra, logo y flags no desbordan | Nav completa, estado activo y Footer alineado | Ningun cambio de estructura, links o comportamiento; focus visible. |
| H1/subtitulo en las 7 rutas | H1 max. 3 lineas; descripcion separada >=12 px | H1 dominante, descripcion secundaria y ancho legible | Ratios de la tabla cumplen en la zona real del degradado. |
| `/` | Foto, logo, dos CTA y decoracion no se solapan | Hero mantiene balance foto/copy y cards | AngelFeathers visible sin competir; video y testimonios no cambian. |
| `/nosotros` | `Quiénes Somos`, descripcion, retrato y certificaciones reflow | Bio, credenciales y galeria conservan ritmo | Lotus y mini-iconos no son monocromos ni invisibles. |
| `/servicios` | Sanaciones en una columna, CTA ancho sin overflow | Tres cards A comparables; otras categorias sin regresion | Icono, titulo, descripcion, metadata y CTA tienen roles distintos. |
| `/agendar` | Pasos y formulario sin scroll horizontal | Formulario y CTA siguen el flujo actual | CalendarWings y pasos no compiten con campos ni alteran agenda. |
| `/contacto` | Formulario, imagen y canales apilados correctamente | Dos columnas y tarjeta sticky conservadas | DovePeace y canales tienen contraste, labels y focus. |
| `/testimonios` | Cards en una columna; avatar no empuja quote fuera | Grilla de tres; seis avatares diferenciados | Cinco estrellas, texto accesible y fallback de avatar funcionan. |
| `/blog` | Cards y newsletter sin truncar ES/EN | Grilla de articulos y metadata equilibrada | Categoria, fecha, H2, excerpt y enlace no compiten. |
| Motion | `prefers-reduced-motion` elimina animaciones decorativas | Hover no cambia significado ni rating | Orbes, halos y sombras no son necesarios para entender contenido. |
| Assets | 404 simulado conserva layout y contenido | Carga WebP no cambia proporciones | Fallback de icono/avatar es legible y no muestra imagen rota. |

## Criterios de entrega para Tech-Lead y Dev

- Convertir esta propuesta en tareas sin alterar alcance, decisiones o
  guardrails.
- Crear tokens o clases reutilizables para roles, no valores aislados por ruta.
- Aplicar A solo a Sanaciones y trasladar sus principios a cada contexto, no su
  markup completo.
- Mantener copy, precios, enlaces, i18n, formularios, agenda y shell.
- Ejecutar prueba de contraste sobre superficies solidas y sobre el peor punto
  de cada degradado usado por texto.
- Verificar teclado, `prefers-reduced-motion`, ES/EN, 375 px y desktop.
- Generar y documentar assets solo en una fase posterior expresamente aprobada;
  mientras tanto, usar placeholders visibles y honestos.

La aprobacion de esta propuesta habilita la planificacion tecnica, no la
implementacion directa.
