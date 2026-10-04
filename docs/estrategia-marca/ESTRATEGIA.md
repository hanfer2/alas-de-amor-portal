# Alas de Amor · Estrategia de marca, redes, SEO y GEO

Fecha: 2026-10-04 · Fases 1 a 4 del plan de marca (diagnóstico, investigación, estrategia, producción)

> **Qué está verificado y qué no.**
> Verificado: el código y los textos del portal (repo), y las cifras de redes que dio Liliana el 2026-10-04.
> No verificado: las cuentas de redes por dentro (no tengo acceso), la web publicada y los tres sitios rivales (el entorno bloquea esos dominios y los buscadores no los devuelven). Todo lo que depende de eso va marcado como **hipótesis** o **pendiente**.

---

## Estado de implementación (PR #19)

| Ítem | Estado |
|---|---|
| sitemap, robots, metadatos en español, canonical, hreflang | Hecho |
| Una página por servicio (18) con FAQ y datos estructurados | Hecho |
| LocalBusiness con Cali + Person (Liliana) en `/nosotros` | Hecho |
| Imagen para redes 1200×630 (`public/imgs/og-default.jpg`) | Hecho |
| Frases médicas suavizadas en beneficios (ES y EN) | Hecho |
| Formulario de reserva: modalidad, país, "¿cómo nos conociste?" | Hecho |
| Alt de imágenes en español, enlaces del footer a cada servicio | Hecho |
| `/testimonios` y `/blog` en `noindex` hasta tener contenido real | Hecho (revertir al tener testimonios reales) |
| Logo y paleta | Hecho: propuesta 6 aplicada en header, footer, portada, íconos, imagen para redes y paleta clara del portal. Ver `GUIA-MARCA.md`. Falta que un diseñador lo pulse y subir el avatar a las redes |
| Marcar qué servicios son virtuales | Pendiente: confirmar con Liliana |
| Blog con artículos reales | Pendiente: Liliana debe aprobar el contenido |
| Dominio propio en Vercel, Search Console, Google Business Profile | Pendiente: acciones fuera del código |
| Página `/aliados` y paquetes para convenios | Pendiente: definir qué ofrece Liliana y a qué precio |
| Precios en COP, USD y EUR | Hecho: COP como base y equivalentes aproximados con la tasa del día |
| Video de portada | Hecho: 720p (3 MB → 0,7 MB), póster de marca y carga solo al verse. Pendiente: el contenido del video usa la marca anterior (violeta y dorado) y la frase "Cada enfermedad tiene un mensaje"; conviene reeditarlo |
| Limpieza de imágenes | Hecho: `public/` pasó de 23,6 MB a 11 MB sin romper ninguna imagen. Pendiente: 18 imágenes de servicios son copias temporales y deben reemplazarse por fotos reales |
| Testimonios | Hecho: se retiraron los de ejemplo; las secciones se llenan solas con `src/lib/testimonials.ts`. Pendiente: pedir testimonios reales |
| Correo de los formularios | Código listo (Resend gratis, con pruebas). Falta crear la cuenta y poner `RESEND_API_KEY` en Vercel: ver `docs/CORREO-GRATIS.md` |
| CI | Hecho: GitHub Actions (gratis, repo público) con lint, tipos, pruebas, build y rastreo de humo |

## 1. Punto de partida (datos reales)

| Canal | Dato | Lectura honesta |
|---|---|---|
| TikTok | 3.507 seguidores · 1.423 siguiendo · 17,6 K likes | Ratio seguidores/siguiendo 2,5. Likes por seguidor ≈ 5: la gente que llega sí reacciona. Hace live diario: es el activo más fuerte que tiene la marca. |
| Instagram `@alasde_de_amor_` | 1.098 seguidores · 1.658 siguiendo · 253 posts | Sigue a más cuentas de las que la siguen (ratio 0,66). Eso se lee como "follow para que me sigan" y resta autoridad a una marca de sanación. |
| Audiencia | Latinoamérica, EE. UU., España | Tres husos horarios y tres formas de hablar. |
| Ventas | Terapias, Oráculo | Los clientes llegan por recomendación y los recomendados son los que repiten. |
| Web | Portal en Vercel, 20 servicios con precio en COP | Ver sección 6. |

**Lo que NO sabemos aún y hay que medir (30 días de línea base):** alcance medio por video, % de vistas que vienen de seguidores vs. "Para ti", países principales, horas de más audiencia, cuántas citas vienen de cada canal. Sin esto cualquier meta de seguidores sería inventada.

## 2. Diagnóstico

1. **Identidad:** tres sistemas visuales (logo rojo/celeste, portal violeta/dorado, Oráculo pastel). Propuesta en `design-proposals/logo/`.
2. **El live diario no se aprovecha:** un live dura una hora y se ve una vez. Convertido en clips cortos, el mismo esfuerzo alimenta TikTok, Reels y Shorts.
3. **El servicio virtual casi no existe en la web:** de 20 servicios, solo "Meditación Guiada Online" dice que es virtual. Nadie que viva en Madrid o Miami entiende que puede reservar.
4. **Se vende el "qué" y no el "qué voy a sentir":** los textos son genéricos ("restaura el equilibrio").
5. **Afirmaciones de salud que conviene suavizar:** "alivia dolores", "fortalece el sistema inmunológico", "alivia migrañas". Son terapias complementarias; esas frases generan desconfianza, y las plataformas y la ley de publicidad en salud las miran. Mejor: "muchas personas la describen como…", "puede ayudarte a relajarte", más una nota "no reemplaza atención médica".
6. **Tono inconsistente:** casi todo está en "tú", pero el CTA de testimonios dice "Reserve ahora su sesión" (usted).
7. **Colisión de nombre:** "Alas de Amor" también es el nombre de `alasdeamor.co`, que tú listaste como rival. Para buscadores y para IA, dos entidades con el mismo nombre se confunden. Usar siempre **"Alas de Amor by Liliana Rodas"** (o "Liliana Rodas · Alas de Amor") en bio, web, perfil de Google y datos estructurados.

## 3. Investigación de rivales (pendiente de datos)

No pude abrir ni encontrar en buscadores `alasdeamor.co`, `clinicaalas.com` ni `psicohabitar.com`. **No voy a describirlos sin verlos.** Dos observaciones que sí puedo hacer, marcadas como hipótesis:

- Por sus nombres, `clinicaalas.com` y `psicohabitar.com` podrían ser servicios de psicología/clínica. Si es así, no son el mismo mercado: no compitas en autoridad clínica, compite en calidez, persona y espiritualidad.
- Un rival real en esta categoría suele ser una persona con identidad fuerte, no una clínica.

**Para completar esta fase** (cualquiera de las dos vías):
- Pásame capturas de la home y de la página de servicios de cada uno, y sus perfiles de TikTok/Instagram; o
- Pasa por cada uno con esta tabla y devuélvemela:

| Qué mirar | Rival 1 | Rival 2 | Rival 3 |
|---|---|---|---|
| ¿Qué vende y a quién (CO / exterior)? | | | |
| ¿Tiene terapias online y cómo las explica? | | | |
| Precios visibles (sí/no, rango) | | | |
| ¿Tiene convenios o empresas? | | | |
| Seguidores TikTok / Instagram y frecuencia | | | |
| Formatos que más repiten | | | |
| ¿Blog? ¿Fecha del último post? | | | |
| ¿Reseñas o testimonios en video? | | | |

También conviene añadir 3–5 **referentes individuales** (terapeutas con identidad fuerte, no clínicas) que tú ya conozcas y admires.

## 4. Estrategia

### 4.1 Posicionamiento (propuesta para validar con Liliana)

> **Alas de Amor: sanación energética con calidez, desde Colombia hacia el mundo. Terapias presenciales en Colombia y sesiones virtuales para donde estés.**

Tres promesas, en lenguaje de persona:
1. **Te explico lo que pasa en cada sesión** (sin misterio ni palabras vacías).
2. **Un espacio sin juicio.** Valor ya definido en el portal: "compasión sin juicio".
3. **Mensajes que sí puedes usar hoy** (Oráculo, carta del día).

### 4.2 Tono de voz
- **Cálido, cercano, directo, sin juicio.** Habla en "tú", siempre.
- **Español neutro con calor colombiano.** Con audiencia en 3 países, evita regionalismos fuertes ("parce", "chimba"). Sí cabe "bonito", "con cariño", "te acompaño".
- **Promete sensación, no curas.** "Muchas personas sienten calma", no "elimina la ansiedad".
- Evita: "energías de sanación universal" a secas, signos de exclamación en cadena, miedo ("si no haces esto…").

### 4.3 Pilares de contenido

| # | Pilar | Qué es | Formato principal | Objetivo |
|---|---|---|---|---|
| 1 | **Del live al clip** | Los mejores 30–60 s de cada live | Reel/TikTok/Short | Alcance |
| 2 | **Qué pasa en una sesión** | Reiki, Barras Access, lectura, facelight: duración, qué se siente, para quién | Video corto + carrusel | Reservas |
| 3 | **Carta del día / Oráculo Zaquiel** | Una carta, un mensaje, una invitación | Reel 15 s + historia | Venta del Oráculo y alcance |
| 4 | **Voces de clientes** | Testimonios reales en audio/video/captura | Reel, historia destacada | Confianza y recomendación |
| 5 | **Liliana, la persona** | Su formación, su espacio, su historia | Reel + carrusel | Identidad |

### 4.4 Formatos y frecuencia realista (sin presupuesto)
Liliana ya hace live diario. No se le pide más producción, solo **reutilizar**:

| Qué | Frecuencia | Dónde |
|---|---|---|
| Live (se mantiene) | Diario | TikTok |
| Clips cortados del live | 3 por semana | TikTok + Reels + Shorts |
| Carta del día | 3 por semana | Reel/TikTok, historia |
| Testimonio o captura de cliente | 1 por semana | Historias + destacadas |
| Carrusel educativo | 1 por semana | Instagram |

**Horarios (hipótesis, a validar con TikTok Analytics).** Colombia es UTC-5 todo el año. Hoy España va 7 h adelante (6 h desde el 25 de octubre) y EE. UU. Este va 1 h adelante (igual a Colombia desde el 1 de noviembre). Un live a las **8 pm** en Colombia cae a las 3 am en España. Prueba durante 2 semanas tres franjas y compara asistentes y seguidores nuevos:
- 7:00 am COL (= tarde en España, mañana en EE. UU.)
- 1:00 pm COL (= noche en España, tarde en EE. UU.)
- 8:00 pm COL (mejor para Colombia y EE. UU.)

### 4.5 Instagram y TikTok: arreglos inmediatos
- Dejar de seguir cuentas que no aportan (bajar de 1.658 a un número menor que los seguidores, poco a poco).
- Bio con una promesa, ubicación y un solo enlace (a WhatsApp o a `/servicios`): *"Terapeuta holística · Reiki · Lectura angelical · Oráculo · Sesiones online y presenciales en Colombia"*.
- Destacadas fijas: **Servicios · Online · Testimonios · Oráculo · Cómo reservar**.
- Fijar en TikTok el video "Qué pasa en una sesión de Reiki".
- Verificar que el handle de Instagram coincide en bio, web y datos estructurados (ver sección 6, punto 8).

## 5. Impulsar cada objetivo

### 5.1 Terapias virtuales (LatAm, EE. UU., España)
- **Qué es virtual y qué no, explícito en cada servicio:**
  | Servicio | ¿Virtual? |
  |---|---|
  | Reiki | Sí, a distancia (a confirmar con Liliana) |
  | Lectura angelical / Oráculo / Medium | Sí |
  | Coaching espiritual | Sí |
  | Meditación guiada | Sí (ya existe) |
  | Alineación de chakras | A distancia posible (confirmar) |
  | Sanaciones niño/niña interior, mamá, papá | Sí (confirmar) |
  | Barras Access | **Presencial** (requiere contacto) |
  | Facelight | **Presencial** (requiere contacto) |
- **Precios en USD y EUR visibles.** El portal ya convierte COP a USD; falta mostrarlo como oferta explícita para el exterior y añadir EUR.
- **Modalidad en el formulario de reserva:** presencial / virtual, y país. Hoy el formulario no lo pide.
- **Hacer del live el embudo:** al final de cada live, una frase fija: *"Si quieres una sesión conmigo, escríbeme 'SESIÓN' por WhatsApp"*.
- **Contenido que dice "desde donde estés":** videos mostrando cómo se ve una sesión virtual (cámara, qué necesitas, qué se siente).

### 5.2 Presencial en Colombia
**Falta la ciudad.** No hay ciudad ni dirección en ninguna parte del portal. Sin ella no hay SEO local ni Google Business Profile posibles. **Dime en qué ciudad atiende** y qué zona.

- **Google Business Profile** con nombre "Alas de Amor by Liliana Rodas", categoría de terapeuta alternativa, fotos del espacio (`public/imgs/couch.jpeg` ya existe), horario y enlace de reserva.
- **Convenios (tipos de aliado, por orden de facilidad):**
  1. Estudios de yoga, pilates y gimnasios: taller mensual de meditación o Reiki.
  2. Spas, centros de estética y hoteles boutique: sesión de bienestar para huéspedes.
  3. Empresas pequeñas y medianas: charla de manejo de estrés + sesiones breves ("pausa de bienestar").
  4. Colegios y jardines: charla para madres y padres (encaja con "sanación mamá/papá").
  5. Cajas de compensación familiar y alcaldías: talleres comunitarios (hay que revisar su convocatoria de cada una).
- **Oferta para aliados:** una página `/aliados` con 3 paquetes (charla 1 h, taller 2 h, jornada de bienestar), cotización por WhatsApp y 2–3 testimonios.
- **Talleres:** los ya definidos en el portal ("Sanando tu niña interior", "Reiki Usui", "Barras Access"). Fechas fijas mensuales y cupo limitado generan urgencia real.
- **Retiros:** hoy dicen "Contenido por definir". Quítalos de la web hasta tener fecha, lugar y precio; una promesa vacía resta confianza.

### 5.3 Recomendación entre clientes (tu motor principal)
Si los recomendados son los que repiten, ese canal se cuida y se acelera:
1. **Pedir el testimonio justo después de la sesión.** Mensaje de WhatsApp (plantilla abajo).
2. **"Sesión regalo":** tarjeta digital de regalo para que un cliente le regale una sesión a alguien querido. Es recomendación con intención de compra.
3. **Beneficio para quien recomienda:** por ejemplo, cuando la persona recomendada completa su primera sesión, quien recomendó recibe un descuento en la siguiente. (Define el beneficio con Liliana; no cambia el precio base.)
4. **Preguntar siempre "¿cómo nos conociste?"** en el formulario y al agendar por WhatsApp. Sin este dato no hay forma de saber qué funciona.

**Plantilla de mensaje post-sesión:**
> Hola [nombre], gracias por confiar en mí hoy 🤍 Si tu sesión te dejó algo bonito, ¿me regalas un audio o unas líneas contándome cómo te sentiste? Con tu permiso lo comparto en mis redes (sin tu apellido si prefieres). Y si conoces a alguien que lo necesite, con gusto lo acompaño.

### 5.4 Productos (más allá del Oráculo)
Ordenados por esfuerzo y por qué sirven con audiencia en el exterior (el envío físico internacional es caro y lento: conviene empezar por lo digital):

| Producto | Tipo | Por qué | Esfuerzo |
|---|---|---|---|
| **Oráculo Zaquiel digital** (lectura del día en app o PDF + audio) | Digital | Se vende al exterior sin envío | Bajo |
| **Meditaciones guiadas en audio** (hay tazones tibetanos en `imgs/sound/`) | Digital | Se crean una vez y se venden siempre | Bajo |
| **Lectura personalizada por audios** (5–10 min por WhatsApp) | Servicio digital | Precio de entrada accesible para el primer contacto | Bajo |
| **Paquetes de 3 o 4 sesiones** | Servicio | Fideliza a quien ya repite | Bajo |
| **Tarjeta de regalo digital** | Digital | Alimenta la recomendación | Bajo |
| **Taller grabado** ("Sanando tu niña interior") | Digital | Reutiliza un taller que ya existe | Medio |
| **Comunidad mensual** (canal de WhatsApp o Telegram + un live exclusivo) | Suscripción | Ingreso recurrente | Medio |
| **Kit de ritual** (carta + vela + guía) | Físico | Para Colombia | Medio |
| **Cuaderno/diario angelical** | Físico bajo demanda | Complementa el Oráculo | Medio-alto |

**Dato que me falta:** costo, stock y envío actual del Oráculo, y a qué países se puede enviar hoy.

## 6. SEO y GEO

### 6.1 Qué encontré en el repo (verificado)
1. **No existen `robots.ts` ni `sitemap.ts`** en `src/app/`. Google no recibe mapa del sitio.
2. **Hreflang incorrecto:** en `layout.tsx` ambos idiomas (`es-CO` y `en-US`) apuntan a `/`. El inglés solo cambia con un botón y `localStorage` en la misma URL, así que **Google solo ve español** y el hreflang declarado no corresponde a nada.
3. **Metadatos principales en inglés** (título "Holistic Therapy…", descripción, palabras clave, Open Graph) para un público que busca en español. Solo `/servicios` tiene descripción en español.
4. **Dominio no coincide:** `metadataBase` y los datos estructurados apuntan a `alas-de-amor.vercel.app`, mientras que la web real es `alas-de-amor-portal.vercel.app`. Los canónicos y la imagen OG apuntan a otro sitio.
5. **Una sola página para 20 servicios.** No existe `/servicios/reiki`, `/servicios/barras-access`, etc. Es imposible posicionar "reiki online" o "lectura angelical" sin una URL por servicio.
6. **Datos estructurados incompletos:** `LocalBusiness` sin ciudad ni dirección, sin `Person` para Liliana, sin credenciales, sin `Offer` con precio, sin `FAQPage`, sin zona de servicio ni canal virtual, sin TikTok en `sameAs`.
7. **Blog sin contenido real** (4 posts de 2024, textos de 2 líneas).
8. **Handle de Instagram dudoso:** el código enlaza `instagram.com/alasdeamor` (en `config.ts` y en los datos estructurados), pero la cuenta que me diste es `@alasde_de_amor_`. Hay que confirmar cuál es la correcta y corregir.
9. **Textos alternativos de imágenes en inglés** en un sitio en español.
10. **Sin dominio propio.** El sitio vive en un subdominio de Vercel, que acumula poca autoridad y es difícil de recordar.

### 6.2 Plan SEO (orden de impacto)
1. **Una página por servicio**, en español, con: qué es, qué se siente, duración, precio (COP/USD/EUR), si es virtual o presencial, preguntas frecuentes, un testimonio real y botón de reserva. Primeras 4: Reiki, Barras Access, Lectura angelical, Meditación guiada online.
2. **Títulos y descripciones en español** con la intención de búsqueda: *"Reiki online y presencial en [ciudad] · Alas de Amor by Liliana Rodas"*.
3. **`sitemap.ts` + `robots.ts`**, y canónicos corregidos al dominio real.
4. **Dominio propio** (por ejemplo `alasdeamor.com` si está libre, o `lilianarodas.com`). Ojo con `alasdeamor.co`: confirma que no sea marca registrada de otro antes de comprar.
5. **Blog útil** (1 artículo al mes, 600–900 palabras): "¿Qué es el Reiki y qué se siente?", "Barras Access: qué pasa en una sesión", "Cómo leer una carta del Oráculo", "Terapias online: ¿funcionan a distancia?".
6. **Google Business Profile** (presencial) + enlaces desde TikTok/Instagram a las páginas de servicio.
7. **Inglés:** solo vale la pena si hay demanda real en EE. UU. de personas que prefieren inglés. La audiencia de EE. UU. y España probablemente busque en español. Primero medir; si se hace, con rutas propias `/en/...`.

### 6.3 GEO (que ChatGPT, Perplexity y Google AI te citen)
Según varias guías de 2026 (fuentes abajo, son blogs de marketing, no estudios), los motores de IA citan negocios que tienen: identidad consistente, respuestas fáciles de citar, datos estructurados y menciones de terceros. Traducido a Alas de Amor:

1. **Entidad clara y consistente.** Mismo nombre, misma descripción, misma ciudad y misma foto en web, Google Business, TikTok, Instagram y Facebook. Descripción de una línea idéntica: *"Alas de Amor by Liliana Rodas: terapeuta holística, Master Reiki, facilitadora de Barras Access y coach angelical, en [ciudad], Colombia, con sesiones online."*
2. **Preguntas y respuestas en la web** (`FAQPage`): "¿Cuánto dura una sesión?", "¿El Reiki funciona a distancia?", "¿Qué necesito para una sesión virtual?", "¿Cuánto cuesta?", "¿Sustituye a un médico?".
3. **Datos estructurados completos:** `ProfessionalService` + `Person` (Liliana, con certificaciones reales: hay 8 certificados en el repo) + `Service` con `Offer` y precio + `areaServed` (Colombia, EE. UU., España) + canal virtual + `sameAs` con TikTok, Instagram y Facebook correctos.
4. **No marques reseñas ni calificaciones agregadas** a menos que sean reales y verificables. Los testimonios actuales de la web: confirma con Liliana que son reales y que tiene permiso de publicarlos. Si no, quítalos.
5. **Menciones de terceros:** pide a clientes y aliados que la nombren en sus perfiles; aparece en directorios de terapeutas; participa en 1–2 podcasts o lives de otros.
6. **Permitir rastreadores** de buscadores e IA en `robots`. Un archivo `llms.txt` es opcional y su efecto no está demostrado; no lo trataría como prioridad.

## 7. Producción: material listo para usar

### 7.1 Tres guiones de video (30–45 s)

**1) "Qué pasa en una sesión de Reiki"**
- Gancho (0–3 s): *"Si nunca has hecho Reiki, esto es exactamente lo que pasa."*
- Cuerpo: llegas, te acuestas vestida/o, hablamos 5 minutos de cómo estás; pongo mis manos sin presión; algunas personas sienten calor, otras se duermen, otras lloran, y todas están bien; dura unos 60 minutos.
- Cierre: *"Si quieres probar, escríbeme SESIÓN. Hay opción virtual y presencial."*
- Visual: tu espacio, manos, sin música alta.

**2) "Escoge una carta"**
- Gancho: *"Escoge del 1 al 3. Este mensaje es para ti."*
- Cuerpo: tres cartas del Oráculo Zaquiel boca abajo, giras una, lees la frase, la explicas en una frase simple.
- Cierre: *"Si este mensaje te tocó, cuéntamelo abajo. El Oráculo Zaquiel está disponible, escríbeme."*
- Visual: la baraja (diseño pastel con alas lavanda).

**3) "Sesión virtual: lo que necesitas"**
- Gancho: *"¿Una terapia energética por videollamada? Sí, y así es."*
- Cuerpo: un lugar tranquilo, auriculares, una manta, 45 minutos; qué sientes tú, qué hago yo.
- Cierre: *"Te atiendo desde Colombia para donde estés. Link en mi bio."*

### 7.2 Calendario de ejemplo (semana tipo)

| Día | TikTok | Instagram |
|---|---|---|
| Lunes | Live + clip "Escoge una carta" | Reel (mismo clip) + historia |
| Martes | Live | Historia: testimonio |
| Miércoles | Live + clip "Qué pasa en una sesión" | Carrusel educativo |
| Jueves | Live | Historia: bastidores |
| Viernes | Live + clip del mejor momento del live | Reel (mismo clip) |
| Sábado | Live | Historia: carta del día |
| Domingo | Descanso o live corto | Historia: invitación a la semana |

### 7.3 Llamados a la acción (rotar)
- *"Escríbeme SESIÓN por WhatsApp."*
- *"Guarda este video para tu próxima carta."*
- *"Cuéntame abajo qué sentiste."*
- *"Envíaselo a alguien que lo necesite."* (empuja la recomendación)

### 7.4 Hashtags (3–5 por publicación; probar y medir)
`#reiki` `#lecturaangelical` `#oraculo` `#sanacionenergetica` `#terapiaholistica` `#meditacionguiada` `#reikionline` `#barrasdeaccess` `#sanacionninointerior` + el de la ciudad cuando la definamos.

## 8. Medición (qué mirar cada semana)

| Métrica | Dónde | Para qué |
|---|---|---|
| Asistentes promedio por live y seguidores nuevos por live | TikTok Analytics | Qué franja y qué tema funcionan |
| Alcance y % de vistas por "Para ti" | TikTok / Instagram | Si crecemos más allá de los seguidores |
| Visitas al perfil y clics al enlace | Ambos | Interés real |
| Conversaciones nuevas por WhatsApp con "SESIÓN" | WhatsApp Business | Embudo real |
| Citas por canal ("¿cómo nos conociste?") | Formulario y WhatsApp | Qué canal vende |
| % de citas virtuales vs. presenciales y país | Formulario | Cumplimiento del objetivo virtual |
| Testimonios nuevos al mes | Manual | Salud del motor de recomendación |
| Impresiones y clics en Search Console | Google | Resultado del SEO |

**Meta:** establecer línea base en 30 días. Después fijamos metas con números reales, no antes.

## 9. Plan 30 / 60 / 90 días

**Días 1–30 (orden y línea base)**
- Decidir logo (propuestas A/B/C) y paleta; actualizar fotos de perfil y bio en los 3 canales.
- Corregir Instagram: handle, destacadas, dejar de seguir cuentas sin aporte.
- Empezar a cortar 3 clips por semana de los lives.
- Probar 3 franjas horarias de live.
- Pedir testimonios con la plantilla; añadir "¿cómo nos conociste?" al formulario.
- Dar los datos pendientes (ciudad, Oráculo, rivales).

**Días 31–60 (servicios y SEO base)**
- 4 páginas de servicio con FAQ y datos estructurados.
- `sitemap`, `robots`, metadatos en español, canónicos corregidos, hreflang corregido.
- Google Business Profile.
- Mostrar modalidad virtual/presencial y precios en USD/EUR.
- Primer producto digital (lectura por audios o Oráculo digital).

**Días 61–90 (crecer)**
- Dominio propio y redirección.
- Página `/aliados` y primeros 5 contactos de convenio.
- Primer taller con fecha fija.
- Programa de recomendación y tarjeta de regalo.
- 2 artículos de blog.
- Revisar métricas y fijar metas.

## 10. Datos que aún necesito
1. Ciudad y zona de atención en Colombia.
2. Capturas o texto de los 3 rivales (sección 3) y de 3–5 referentes que admires.
3. Analítica de TikTok (países, horas) e Instagram (alcance de los últimos 30 días).
4. Costo, stock, envío y países de envío actuales del Oráculo.
5. Confirmar qué servicios se dan virtual (tabla 5.1).
6. Confirmar si los testimonios del portal son reales y están autorizados.
7. Confirmar el handle correcto de Instagram y el de TikTok.
8. Si hay dominio propio o piensan comprarlo.

---

### Fuentes consultadas (2026-10-04)
- [Tendencias TikTok 2026: la era de la autenticidad (KCH Comunicación)](https://kchcomunicacion.com/?p=313969)
- [Vanguardia: lo que está redefiniendo el contenido en TikTok, 2026](https://www.vanguardia.com/entretenimiento/tendencias/2026/02/09/esto-es-tendencia-en-2026-lo-que-esta-redefiniendo-el-contenido-en-tiktok/)
- [Identidad digital y comunicación de influencers de bienestar en Hispanoamérica](https://e-revistas.uc3m.es/index.php/RECS/article/view/9315)
- [GEO: guía para pequeños negocios (beancount.io, 2026-07)](https://beancount.io/blog/2026/07/16/generative-engine-optimization-geo-small-business-guide)
- [GEO: qué significa para tu web en 2026 (DEV Community)](https://dev.to/karthic2914/geo-what-generative-engine-optimization-means-for-your-website-in-2026-1na4)
- [Guía de GEO 2026 (AINORA)](https://ainora.lt/blog/what-is-generative-engine-optimization)

Las guías de GEO son contenido de marketing, no investigación revisada por pares; úsalas como orientación y mide resultados propios.
