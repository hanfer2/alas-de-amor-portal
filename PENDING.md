# Pendientes — Alas de Amor Portal

---

## 1. Integración con Supabase (Base de Datos + Auth + Storage)

### ¿Por qué Supabase?

| Característica | Plan Free |
|---------------|-----------|
| Base de datos PostgreSQL | 500 MB |
| Usuarios autenticados | Ilimitados |
| API REST automática | Ilimitada |
| Tiempo real (WebSockets) | 200 conexiones concurrentes |
| Almacenamiento de archivos | 1 GB |
| Edge Functions | 500,000 invocaciones/mes |
| Proyectos gratuitos | 2 (dev + prod) |

> ⚠️ Los proyectos gratuitos se pausan tras 1 semana de inactividad. Para producción real, considera el plan Pro ($25/mes).

---

### Paso 1: Crear proyecto en Supabase

1. Ir a https://supabase.com/dashboard
2. Crear nueva organización y proyecto
3. Elegir región (recomendado: `us-east-1` o la más cercana a Colombia)
4. Esperar a que la BD se aprovisione (~2 min)
5. Guardar las credenciales: `SUPABASE_URL` y `SUPABASE_ANON_KEY`

---

### Paso 2: Configurar variables de entorno

Agregar en `.env.local` y en Vercel (Settings → Environment Variables):

```bash
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOi...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOi...    # Solo server-side
```

Actualizar `.env.example` con las nuevas keys comentadas.

---

### Paso 3: Instalar dependencias

```bash
npm install @supabase/supabase-js
```

---

### Paso 4: Crear cliente de Supabase

Crear `src/lib/supabase.ts`:

```ts
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // Server-side (admin)
);

// Cliente público (client-side, respeta RLS)
export const supabasePublic = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
```

---

### Paso 5: Crear tablas (SQL)

Ejecutar en el SQL Editor de Supabase:

```sql
-- Tabla de contactos (formulario de contacto)
CREATE TABLE contacts (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabla de citas (formulario de agendar)
CREATE TABLE appointments (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service TEXT NOT NULL,
  preferred_date DATE NOT NULL,
  message TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabla de testimonios (gestionables desde admin)
CREATE TABLE testimonials (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  location TEXT,
  therapy TEXT,
  quote TEXT NOT NULL,
  rating INT DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  approved BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabla de suscriptores al newsletter
CREATE TABLE subscribers (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  subscribed_at TIMESTAMPTZ DEFAULT NOW()
);

-- Habilitar Row Level Security
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;

-- Políticas: solo insert (cualquiera puede enviar formularios)
CREATE POLICY "Allow inserts for anyone" ON contacts FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow inserts for anyone" ON appointments FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow inserts for anyone" ON subscribers FOR INSERT WITH CHECK (true);

-- Política: solo leer testimonios aprobados
CREATE POLICY "Allow read approved" ON testimonials FOR SELECT USING (approved = true);
CREATE POLICY "Allow inserts for anyone" ON testimonials FOR INSERT WITH CHECK (true);
```

---

### Paso 6: Reemplazar server actions

Modificar `src/app/actions/contact.ts` para guardar en Supabase + enviar email:

```ts
"use server";

import { supabase } from "@/lib/supabase";

export async function sendAppointmentEmail(data: { ... }) {
  // 1. Guardar en BD
  const { error } = await supabase.from("appointments").insert({
    name: data.name,
    email: data.email,
    phone: data.phone,
    service: data.service,
    preferred_date: data.date,
    message: data.message || null,
  });

  if (error) return { success: false, error: error.message };

  // 2. Enviar email (webhook existente, igual que ahora)
  // ... código actual ...

  return { success: true };
}

export async function sendContactEmail(data: { ... }) {
  const { error } = await supabase.from("contacts").insert({ ... });
  if (error) return { success: false, error: error.message };
  // ... enviar email ...
  return { success: true };
}
```

---

### Paso 7: Reemplazar JSON estático de testimonios

- Cargar testimonios desde Supabase en vez de `es.json` / `en.json`
- Usar `supabasePublic.from("testimonials").select("*").eq("approved", true)`
- Agregar loading state mientras se cargan

---

### Paso 8: Conectar newsletter

- Agregar `supabasePublic.from("subscribers").insert({ email })` en el handler del formulario
- Validar email único (la constraint UNIQUE de la BD lo maneja)

---

### Paso 9: Dashboard simple (opcional, futuro)

- Crear ruta protegida `/admin` con login (usando Supabase Auth)
- CRUD de testimonios (aprobar/rechazar)
- Ver contactos y citas recibidas
- Exportar CSV

---

## 2. Otros pendientes

### 2.1. Imágenes de placeholder
- Las imágenes de servicios en `/servicios` son placeholders (círculos SVG)
- Buscar en Unsplash/Pexels imágenes libres de derechos con temática Reiki
- Guardar en `/public/imgs/services/`

### 2.2. Blog con CMS
- Opción A: Crear tabla `blog_posts` en Supabase y un editor simple
- Opción B: Usar Markdown/MDX con archivos locales
- Opción C: Integrar un headless CMS (Strapi, Directus)

### 2.3. Google Analytics
- Agregar `@next/third-parties/google` para GA4
- Variable de entorno: `NEXT_PUBLIC_GA_ID`

### 2.4. Sitemap automático
- Usar `next-sitemap` o crear `src/app/sitemap.ts`
- Incluir rutas dinámicas del blog (cuando exista)

### 2.5. PWA / Manifest
- Agregar `manifest.json` para instalación como app
- Service worker para caché offline

### 2.6. Tests
- Unit tests con Vitest + React Testing Library
- E2E con Playwright (ya configurado)

---

## 3. Variables de entorno actuales

Ver `.env.example` para todas las variables disponibles.

```bash
# Ya implementadas:
NEXT_PUBLIC_SITE_URL
NEXT_PUBLIC_CONTACT_PHONE
NEXT_PUBLIC_CONTACT_WHATSAPP
NEXT_PUBLIC_CONTACT_EMAIL
NEXT_PUBLIC_SOCIAL_FACEBOOK
NEXT_PUBLIC_SOCIAL_INSTAGRAM
NEXT_PUBLIC_BUSINESS_NAME
NEXT_PUBLIC_BUSINESS_COUNTRY
NEXT_PUBLIC_BUSINESS_HOURS
EMAIL_WEBHOOK_URL

# Futuras (Supabase):
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
```

---

*Última actualización: 2026-07-22*
