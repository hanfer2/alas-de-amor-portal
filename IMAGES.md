# IMAGES.md — Inventario de Imágenes del Portal

Curador: `disenador`
Última actualización: 2026-08-07
Propósito: fuente de verdad para el `dev` — cada imagen documentada con su ubicación exacta de uso.
Regla: antes de implementar cualquier imagen, consulta este archivo. Si no encuentras lo que necesitas, pídele al `disenador` que la genere.

---

## En uso (por página / componente)

### `src/components/Logo.tsx` — Logo del portal

| Archivo | Dim | Peso | Formato | Uso | Descripción |
|---------|-----|------|---------|-----|-------------|
| `/imgs/logo.png` | — | — | PNG | Logo principal en Header (todas las páginas) | Logo de Alas de Amor, carga prioritaria con `next/image` |

### `src/app/layout.tsx` — Metadata SEO

| Archivo | Dim | Peso | Formato | Uso | Descripción |
|---------|-----|------|---------|-----|-------------|
| `/imgs/team/liliana-profile.jpg` | — | — | JPG | `og:image` — OpenGraph preview (Facebook, WhatsApp, LinkedIn) | Foto de perfil de Liliana Rodas |
| `/imgs/image7.jpeg` | — | — | JPEG | `twitter:image` — Twitter Card preview | Imagen principal del portal (Liliana Rodas) |

### `src/components/StructuredData.tsx` — Schema.org JSON-LD

| Archivo | Dim | Peso | Formato | Uso | Descripción |
|---------|-----|------|---------|-----|-------------|
| `/imgs/team/liliana-profile.jpg` | — | — | JPG | `LocalBusiness.image` — datos estructurados para Google | URL absoluta (`https://alas-de-amor.vercel.app/imgs/team/liliana-profile.jpg`) |

### `/` — Home (`src/app/page.tsx`)

| Archivo | Dim | Peso | Formato | Uso | Descripción |
|---------|-----|------|---------|-----|-------------|
| `/imgs/team/liliana-profile.jpg` | — | — | JPG | Hero → foto circular de Liliana (`animate-float-slow`, glow shadow) | Perfil de Liliana Rodas |
| `/imgs/gallery/gallery-1.jpg` | — | — | JPG | About Preview → imagen principal (card grande redondeado) | Espacio de terapia holística |
| `/imgs/team/liliana-about.jpg` | — | — | JPG | About Preview → card secundario (bottom-right overlay) | Liliana con certificación profesional |

### `/nosotros` — Quiénes Somos (`src/app/nosotros/page.tsx`)

| Archivo | Dim | Peso | Formato | Uso | Descripción |
|---------|-----|------|---------|-----|-------------|
| `/imgs/team/liliana-profile.jpg` | — | — | JPG | Bio → retrato principal de Liliana (sombra, bordes redondeados) | Perfil de Liliana Rodas |
| `/imgs/certificado-2.jpg` | — | — | JPG | Certificados → galería grid | Certificado profesional |
| `/imgs/certificado-8.jpg` | — | — | JPG | Certificados → galería grid | Certificado profesional |
| `/imgs/certificado-9.jpg` | — | — | JPG | Certificados → galería grid | Certificado profesional |
| `/imgs/certificado-10.jpg` | — | — | JPG | Certificados → galería grid | Certificado profesional |
| `/imgs/certificado-11.jpg` | — | — | JPG | Certificados → galería grid | Certificado profesional |
| `/imgs/certificado-12.jpg` | — | — | JPG | Certificados → galería grid | Certificado profesional |
| `/imgs/certificado-13.jpg` | — | — | JPG | Certificados → galería grid | Certificado profesional |
| `/imgs/certificado-14.jpg` | — | — | JPG | Certificados → galería grid | Certificado profesional |
| `/imgs/gallery/gallery-2.jpg` | — | — | JPG | Experiencia → galería (span 2 cols) | Foto de espacio/experiencia |
| `/imgs/gallery/gallery-3.jpg` | — | — | JPG | Experiencia → galería thumbnail | Foto de espacio/experiencia |
| `/imgs/gallery/gallery-4.jpg` | — | — | JPG | Experiencia → galería thumbnail | Foto de espacio/experiencia |

---

### `/servicios` — ServiceBlock por categoría (`src/app/servicios/page.tsx`)

Curador: `disenador` | Fecha: 2026-08-07 | Total: 21 imágenes

#### Terapias (8 ítems)

| Archivo | Dim | Peso | Formato | Uso | Descripción |
|---------|-----|------|---------|-----|-------------|
| `imgs/services/terapias-reiki.jpg` | — | 152 KB | JPEG | ServiceBlock → Reiki | ⚠️ FALLBACK — foto real de sesión con manos y energía |
| `imgs/services/terapias-access.jpg` | — | 228 KB | JPEG | ServiceBlock → Barras Access | ⚠️ FALLBACK — foto real de sesión de Barras |
| `imgs/services/gen-servicios-combo.jpg` | — | 313 KB | JPEG | ServiceBlock → Combo Barras + Reiki | ⚠️ FALLBACK — gallery-9 reutilizada |
| `imgs/services/terapias-chakras.jpg` | — | 120 KB | JPEG | ServiceBlock → Alineación de Chakras | ⚠️ FALLBACK — foto real de trabajo energético |
| `imgs/services/terapias-meditacion.jpg` | — | 355 KB | JPEG | ServiceBlock → Meditación Guiada | ⚠️ FALLBACK — gallery-1 reutilizada |
| `imgs/services/gen-servicios-facelight.jpg` | — | 338 KB | JPEG | ServiceBlock → Facelight Energético | ⚠️ FALLBACK — gallery-10 reutilizada |
| `imgs/services/gen-servicios-coaching.jpg` | — | 259 KB | JPEG | ServiceBlock → Coaching Espiritual | ⚠️ FALLBACK — gallery-11 reutilizada |
| `imgs/services/gen-servicios-oraculos-terapia.jpg` | — | 1561 KB | JPEG | ServiceBlock → Oráculos | ⚠️ FALLBACK — foto real de cartas oráculo (IMG_3559) |

#### Talleres (3 ítems)

| Archivo | Dim | Peso | Formato | Uso | Descripción |
|---------|-----|------|---------|-----|-------------|
| `imgs/services/gen-talleres-medium.jpg` | — | 232 KB | JPEG | ServiceBlock → Medium | ⚠️ FALLBACK — gallery-2 reutilizada |
| `imgs/services/talleres-reiki.jpg` | — | 99 KB | JPEG | ServiceBlock → Reiki Usui | ⚠️ FALLBACK — gallery-5 reutilizada |
| `imgs/services/talleres-access.jpg` | — | 123 KB | JPEG | ServiceBlock → Taller Barras Access | ⚠️ FALLBACK — gallery-6 reutilizada |

#### Sanaciones (3 ítems)

| Archivo | Dim | Peso | Formato | Uso | Descripción |
|---------|-----|------|---------|-----|-------------|
| `imgs/services/gen-sanaciones-nina.jpg` | — | 223 KB | JPEG | ServiceBlock → Sanación niño interior | ⚠️ FALLBACK — gallery-3 reutilizada |
| `imgs/services/gen-sanaciones-mama.jpg` | — | 122 KB | JPEG | ServiceBlock → Sanación mamá | ⚠️ FALLBACK — gallery-4 reutilizada |
| `imgs/services/gen-sanaciones-papa.jpg` | — | 223 KB | JPEG | ServiceBlock → Sanación papá | ⚠️ FALLBACK — image18.jpeg reutilizada |

#### Lectura Angelical (3 ítems)

| Archivo | Dim | Peso | Formato | Uso | Descripción |
|---------|-----|------|---------|-----|-------------|
| `imgs/services/lectura-basica.jpg` | — | 206 KB | JPEG | ServiceBlock → Lectura angelical básica | ✅ Foto real — cartas y cristales (WhatsApp oráculo) |
| `imgs/services/lectura-angelical.jpg` | — | 224 KB | JPEG | ServiceBlock → Lectura Angelical | ✅ Foto real — lectura de cartas angélicas (WhatsApp oráculo) |
| `imgs/services/lectura-oraculo.jpg` | — | 1853 KB | JPEG | ServiceBlock → Lectura Oráculo Angelical | ✅ Foto real — cartas extendidas (IMG_3562) |

#### Charlas (2 ítems)

| Archivo | Dim | Peso | Formato | Uso | Descripción |
|---------|-----|------|---------|-----|-------------|
| `imgs/services/gen-charlas-1.jpg` | — | 99 KB | JPEG | ServiceBlock → Charla 1 | ⚠️ FALLBACK — image20.jpeg reutilizada |
| `imgs/services/gen-charlas-2.jpg` | — | 123 KB | JPEG | ServiceBlock → Charla 2 | ⚠️ FALLBACK — image21.jpeg reutilizada |

#### Retiros (2 ítems)

| Archivo | Dim | Peso | Formato | Uso | Descripción |
|---------|-----|------|---------|-----|-------------|
| `imgs/services/retiros-1.jpg` | — | 166 KB | JPEG | ServiceBlock → Retiro 1 | ⚠️ FALLBACK — gallery-7 reutilizada |
| `imgs/services/retiros-2.jpg` | — | 275 KB | JPEG | ServiceBlock → Retiro 2 | ⚠️ FALLBACK — gallery-8 reutilizada |

**Calidad de las imágenes:**
- ✅ 3 fotos reales (Lectura Angelical: fotos de cartas oráculo de Liliana)
- ⚠️ 4 fotos reales de terapia (Reiki, Access, Chakras, Oráculos-terapia — reutilizadas como fallback)
- ⚠️ 14 fallbacks de galería/imagen (no representan fielmente el servicio, requieren reemplazo futuro con IA)

---

### Sin imágenes actualmente (páginas que necesitan cobertura visual)

| Página | Estado | Recomendación |
|--------|--------|---------------|
| `/servicios` | ✅ Parcial — 21 imágenes (17 reales/gallery + 4 fallback) | ServiceBlock por categoría — ver sección abajo |
| `/agendar` | ❌ Sin imágenes | Banner decorativo para la sección del formulario |
| `/contacto` | ❌ Sin imágenes | Fondo sutil para la sección CTA o tarjeta de contacto |
| `/testimonios` | ❌ Sin imágenes | Fondo cálido para testimonios, decoración de comillas |
| `/blog` | ❌ Sin imágenes | Banners o thumbnails para artículos |

---

## Disponibles sin asignar

Imágenes que existen en `public/imgs/` pero no están referenciadas en el código.
El `disenador` puede reasignarlas si el contexto lo permite. El `dev` puede usarlas libremente.

| Archivo | Formato | Origen | Nota |
|---------|---------|--------|------|
| `image1.jpeg` — `image6.png` | JPEG/PNG | Extraídas de PPTX | Sin uso actual — banco de imágenes del material original |
| `image8.png` — `image17.jpeg` | PNG/JPEG | Extraídas de PPTX | Sin uso actual |
| `image18.jpeg` | JPEG | PPTX | ⚠️ USADA como fallback en gen-sanaciones-papa.jpg |
| `image19.jpeg` | JPEG | PPTX | Sin uso actual |
| `image20.jpeg` | JPEG | PPTX | ⚠️ USADA como fallback en gen-charlas-1.jpg |
| `image21.jpeg` | JPEG | PPTX | ⚠️ USADA como fallback en gen-charlas-2.jpg |
| `image22.jpeg` — `image26.jpeg` | JPEG | PPTX | Sin uso actual |
| `couch.jpeg` | JPEG | Foto real | Espacio de trabajo — mencionado en AGENTS.md, sin uso en código |
| `image7.jpeg` | JPEG | Foto real | Solo usada en Twitter Card metadata (`layout.tsx`), no en UI visible |
| `gallery/gallery-1.jpg` | JPG | Galería | ⚠️ USADA como fallback en terapias-meditacion.jpg |
| `gallery/gallery-2.jpg` | JPG | Galería | ⚠️ USADA como fallback en gen-talleres-medium.jpg |
| `gallery/gallery-3.jpg` | JPG | Galería | ⚠️ USADA como fallback en gen-sanaciones-nina.jpg |
| `gallery/gallery-4.jpg` | JPG | Galería | ⚠️ USADA como fallback en gen-sanaciones-mama.jpg |
| `gallery/gallery-5.jpg` | JPG | Galería | ⚠️ USADA como fallback en talleres-reiki.jpg |
| `gallery/gallery-6.jpg` | JPG | Galería | ⚠️ USADA como fallback en talleres-access.jpg |
| `gallery/gallery-7.jpg` | JPG | Galería | ⚠️ USADA como fallback en retiros-1.jpg |
| `gallery/gallery-8.jpg` | JPG | Galería | ⚠️ USADA como fallback en retiros-2.jpg |
| `gallery/gallery-9.jpg` | JPG | Galería | ⚠️ USADA como fallback en gen-servicios-combo.jpg |
| `gallery/gallery-10.jpg` | JPG | Galería | ⚠️ USADA como fallback en gen-servicios-facelight.jpg |
| `gallery/gallery-11.jpg` | JPG | Galería | ⚠️ USADA como fallback en gen-servicios-coaching.jpg |

---

## Generadas (IA)

| Archivo | Dim | Peso | Formato | Prompt | Uso | Descripción |
|---------|-----|------|---------|--------|-----|-------------|
| *(vacío — pendientes de generación. Ver `scripts/pending-prompts.txt`)* |

**Nota**: 18 de las 21 imágenes de /servicios son fallbacks temporales. Cuando `IMAGE_API_KEY` esté configurada, ejecutar `scripts/pending-prompts.txt` para generar las versiones IA definitivas.

---

## Convenciones

- **Prefijo `gen-`**: imágenes generadas por IA (ej: `gen-terapias-reiki.webp`)
- **Formato preferido**: WebP (menor peso, misma calidad visual)
- **Peso ideal**: < 200 KB para thumbnails, < 500 KB para banners/hero
- **Dimensiones estándar**:
  - Hero / banner: 1920×1080 o 1440×600
  - Tarjeta de servicio: 800×600
  - Fondo de sección: 1920×1200
  - Perfil / avatar: 400×400
  - Miniatura de blog: 600×400
- **Paleta**: violeta/índigo, dorado, crema, cálido-blanco, rosa-oro, ciruela-profundo
- **Prohibido**: verde, amarillo, neón, estilo corporativo frío
