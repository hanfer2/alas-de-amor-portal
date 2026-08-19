# SPEC — Visibilidad de redes sociales en el portal
Generado por: agente po
Fecha: 2026-08-19
Estado: ✅ Aprobado automáticamente por negocio para esta iteración

## Objetivo de negocio
Hoy las redes sociales del portal pasan desapercibidas: solo aparecen como cuatro
iconos grises pequeños en el Footer (Facebook, WhatsApp, Instagram, Email) y no
existe TikTok. En el mundo actual una empresa no existe sin presencia en redes
sociales; por lo tanto el portal debe dar visibilidad a las redes en la mayor
cantidad de partes posibles, con colores distintivos por red para que sean
atractivos y reconocibles, y con contenido social embebido en el Blog.

## Usuario objetivo
Visitante que llega al portal buscando terapias holísticas y confianza en la
marca. Las redes sociales son prueba de comunidad y actividad; deben verse como
un puente natural hacia la comunidad de Liliana Rodas.

## Redes sociales incluidas
- Facebook: `https://www.facebook.com/liliana.rodas.9615`
- Instagram: `https://instagram.com/alasdeamor`
- WhatsApp: `https://wa.me/573043732955`
- Email: `mailto:Lilo_rodas87@hotmail.com`
- **TikTok (NUEVA): `https://www.tiktok.com/@lilianarodas155?lang=es-419`**
  - Nombre de usuario: `@lilianarodas155`
  - Se agrega a `src/lib/config.ts` como `social.tiktok` y queda documentada en
    `.env.example` como `NEXT_PUBLIC_SOCIAL_TIKTOK` (opcional, con fallback).

## Alcance
### Incluye
- Agregar TikTok a la configuración y a todas las superficies de redes.
- Revisar y organizar las superficies actuales de redes:
  - Footer (actual: iconos grises pequeños en la primera columna).
  - Contacto (solo WhatsApp actualmente).
  - Testimonios (solo WhatsApp al compartir).
  - Header (no tiene redes).
  - ContactLauncher (solo WhatsApp).
- Proponer nuevas superficies de visibilidad, con la mayor cobertura posible:
  - Hero de inicio (sección de confianza o badge de comunidad).
  - Sección "Síguenos en redes" dedicada.
  - CTA/pie de cada página donde tenga sentido.
  - Blog: sección de redes y **embeds de publicaciones de Instagram y TikTok**.
- Asignar un color distintivo por red social (facebook azul, instagram degradado
  rosa/morado/naranja, tiktok negro/cian/rojo, whatsapp verde, email neutro)
  dentro del lenguaje visual del portal, respetando contraste accesible.
- Documentar iconos SVG inline originales (o de uso libre) para cada red,
  incluido TikTok, sin dependencias externas.
- Evaluar viabilidad técnica de embeds de Instagram/TikTok en el Blog
  (oEmbed/iframe oficial) y proponer la implementación más estable.

### Excluye
- No cambiar copy de servicios, precios, formularios, agenda ni WhatsApp.
- No modificar Header/Footer globalmente si se decide mantener estructura; los
  cambios se limitan a sumar superficies y estilizar redes existentes.
- No crear raster nuevo; iconos en SVG inline.
- No publicar posts de redes dentro del portal; solo enlaces y (si es viable)
  embeds oficiales en Blog.

## Criterios de aceptación (CA)
- CA1: TikTok está presente y funcional en todas las superficies de redes.
- CA2: Las redes son visibles en al menos 3 zonas del portal además del Footer
  (inicio, blog, contacto y/o página dedicada) y se ven intencionales, no
  ocultas.
- CA3: Cada red tiene color o degradado distintivo, icono SVG claro y label
  accesible (`aria-label` con nombre de la red), con contraste >= 3:1 sobre su
  fondo.
- CA4: El Blog puede mostrar contenido social embebido (Instagram/TikTok) o, si
  no es viable técnicamente, al menos una sección de redes con los enlaces
  visibles y explicados.
- CA5: Footer conserva funcionalidad y navegación; los iconos de redes ganan
  color y tamaño sin romper layout (responsive 375/768/1440).
- CA6: `npm run lint` y `npm run build` pasan; sin overflow horizontal; ES/EN
  correctos; teclado y foco visibles; links con `noopener noreferrer`.
- CA7: No hay regresión en Header, menú, Footer, precios, formularios, agenda,
  WhatsApp ni ContactLauncher.

## Reglas de diseño para el diseñador
- Los iconos de redes deben ser reconocibles de inmediato por silueta y color;
  tamaño mínimo 44x44px en superficies táctiles y 40x40px en desktop.
- No usar color como único indicador: cada enlace debe tener `aria-label` y, en
  superficies donde haya espacio, texto visible del nombre de la red.
- Los degradados de marca (violeta/dorado) pueden convivir con los colores de
  cada red, pero el color de la red debe ser el protagonista en su propio icono.
- En el Blog, los embeds deben cargar de forma diferida (lazy), no bloquear la
  carga de la página, respetar `prefers-reduced-motion` y no estirar el layout.
- El diseñador debe entregar un HTML de prueba (`design-proposals/redes-sociales/index.html`)
  que muestre todas las superficies propuestas y la paleta por red.