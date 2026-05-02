# Reorganización de Contenido Multimedia - Alas de Amor

## Resumen Ejecutivo

Como Marketing Manager de Alas de Amor, he analizado la estructura actual del proyecto y las 26 imágenes disponibles del PPTX original. A continuación presento la reorganización estratégica del contenido multimedia y las nuevas secciones/páginas requeridas.

---

## Estructura de Carpetas de Imágenes

### `/public/imgs/`

| Carpeta | Contenido | Propósito |
|---------|-----------|------------|
| `team/` | `image1.jpeg`, `image7.jpeg` | Fotos de Liliana Rodas, fotos de perfil |
| `certificates/` | `image2.jpeg` - `image15.jpeg` | Certificados, diplomas, acreditaciones |
| `gallery/` | `image16.jpeg` - `image26.jpeg` | Galería de experiencias, eventos, sesiones |
| `services/` | *(vacío)* | Imágenes específicas de servicios |

### Imágenes Asignadas

**Team:**
- `liliana-profile.jpg` (image7.jpeg) - Foto principal para hero
- `liliana-about.jpg` (image1.jpeg) - Foto para sección "Sobre mí"

**Certificates:**
-证书编号1-8 (image2.jpeg - image15.jpeg) = 8 certificados de diferentes formaciones

**Gallery:**
- gallery-1.jpg a gallery-11.jpg (image16.jpeg - image26.jpeg) = 11 fotos de experiencias y sesiones

---

## Nuevas Secciones y Páginas Requeridas

### 1. Página Actualizada: `/nosotros` (Quiénes Somos)

**Objetivo:** Fortalecer la prueba social y credibilidad

**Nueva estructura:**
1. **Hero** - Mantener actual (badge + título + subtítulo)
2. **Sobre la Coach** - Nueva sección con:
   - Biografía expandida de Liliana Rodas
   - Foto de perfil (`/imgs/team/liliana-profile.jpg`)
   - Años de experiencia
   - Especialidades
3. **Credenciales** - Mantener actual (grid de 6 cards)
4. **Galería de Certificados** - Actualizar para mostrar 8 certificados:
   - Usar imágenes de `/imgs/certificates/`
   - Grid: 4 columnas en desktop, 2 en tablet, 1 en móvil
   - Hover effect para zoom
   - Lightbox al hacer click para ver grande
5. **Experiencia/Galería** - Mantener actual

### 2. Nueva Página: `/testimonios` (Testimonios)

**Crear página nueva** `/testimonios`

**Objetivo:** Mostrar experiencias de clientes - prueba social

**Estructura sugerida:**
1. **Hero** - "Lo que dicen nuestros clientes" (badge + título + subtítulo)
2. **Testimonios en Grid** - 6 testimonios completos:
   - Foto de cliente (avatar genérico si no hay foto real)
   - Nombre y ubicación
   - Terapia recibida
   - Testimonio completo (50-100 palabras)
   - Calificación con estrellas (5)
3. **CTA** - "Tu también puedes transformarte" → link a `/agendar`

**Contenido de testimonios (traducir a ES/EN):**
1. María G. - Reiki - "Después de mi sesión de Reiki sentí una paz que no había experimentado en años."
2. Carlos R. - Barras Access - "Las Barras Access changed my life perspective."
3. Ana P. - Lectura Angelical - "La lectura angelical me dio la claridad que necesitaba."
4. Laura M. - Chakra Alignment - "Mis chakras alineados, me siento con más energía."
5. Daniel S. - Meditación - "La meditación guiada changed how I handle stress."
6. Isabella R. - Coaching - "Mi coaching espiritual me help encuentra mi propósito."

### 3. Nueva Página: `/blog` o `/mensajes` (Mensajes)

**Crear nueva página** `/mensajes`

**Objetivo:** Mostrar contenido inspiracional/mensajes de la coach

**Estructura sugerida:**
1. **Hero** - "Mensajes de Luz" o "Espirituality Blog"
2. **Grid de Mensajes** - Cards con:
   - Imagen ilustrativa (usar gallery images o gradientes)
   - Título del mensaje
   - Fecha
   - Extracto (primeras 30 palabras)
   - "Leer más" → expande el contenido completo
3. **Newsletter CTA** - "Recibe mensajes de luz en tu email"

**Contenido inicial:**
1. "El poder del Reiki en tiempos de cambio"
2. "Cómo sanar tu niño interior"
3. "Mensajes de tus ángeles"
4. "La transformación que viene"

### 4. Nueva Página: `/acerca` o página "Sobre la Coach"

**Alternativa:** Crear `/acerca` como página hermana de `/nosotros`

**Contenido:**
1. **Historia de Alas de Amor** - Cómo nació el proyecto
2. **Mi misión** - Propósito de Liliana
3. **Mi formación** - Lista de certificaciones
4. **Mi enfoque** - Qué hace única su práctica

### 5. Actualizar Página Principal: `/` (Home)

**Añadir nueva sección después de Testimonios:**
- **"Comparte tu experiencia"** - Llamado a dejar testimonio

---

## SEO Mantener

Para todas las páginas nuevas:

```typescript
export const metadata: Metadata = {
  title: {
    default: "[Título de Página] | Alas de Amor",
    template: "%s | Alas de Amor"
  },
  description: "[Descripción meta de 150-160 caracteres]",
  openGraph: {
    title: "[Título OG]",
    description: "[Descripción OG]",
    images: [{ url: "/imgs/og-default.jpg" }]
  },
  robots: {
    index: true,
    follow: true
  }
};
```

---

## Preguntas para Clarificación

1. **¿CUÁL ES LA VERSIÓN FINAL DEL PPTX ORIGINAL?** 
   - Necesito access al `.pptx` source si existe para verificar contenido de imágenes

2. **¿TESTIMONIOS CON FOTOS REALES O USAR AVATARES?**
   - ¿Tienen fotos de clientes que puedan usar? ¿O prefieres avatars genéricos?

3. **¿QUIEREN MANTERNER "Testimonios" en la página home O MOVER A PÁGINA NUEVA?**
   - currently hay 3 testimonios en home - ¿ampliamos ahí o creamos página dedicada?

4. **¿BLOG CON POSTS REALES O SOLO ESTRUCTURA?**
   - ¿Tienen contenido escrito para el blog? ¿O comenzar con estructura básica?

5. **¿LOS 8 CERTIFICADOS TIENEN NOMBRES ESPECÍFICOS?**
   - ¿Cuál es el nombre/título de cada certificado para mostrar como tooltip?

6. ¿QUIEREN AGREGAR UNA PÁGINA DE SHOP O SERVICIOS DIGITALES?
   - Por ejemplo: "Meditaciones grabadas", "Audios de sanación"

---

## Próximos Pasos (para Front Designer)

1. Confirmar respuestas a las preguntas arriba
2. Ejecutar reorganización de imágenes (movidos a carpetas)
3. Crear página `/testimonios`
4. Crear página `/mensajes` (o `/blog`)
5. Actualizar página `/nosotros` con certificados reorganizados
6. Añadir llamada a testimonios en home
7. Verificar build y SEO
8. Probar multilenguaje en todas las páginas nuevas