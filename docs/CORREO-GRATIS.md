# Correo de los formularios, gratis

Los formularios de **Contacto** y **Agendar cita** envían un correo a Liliana. Para eso el sitio necesita un servicio de envío. Hay opciones gratuitas; la recomendada es **Resend**.

> **Estado inicial:** sin configurar nada, el formulario de contacto avisa que el correo no está disponible y remite a WhatsApp. El de citas abre WhatsApp con los datos y muestra el mismo aviso. Antes, el mensaje se perdía sin avisar.

## Opciones gratuitas (datos consultados el 2026-10-04)

| Servicio | Plan gratuito | Notas |
|---|---|---|
| **Resend** (recomendado) | 3.000 correos al mes y 100 al día, 1 dominio | Ya está integrado en el sitio. Sin dominio propio solo envía **a la dirección de tu cuenta** |
| Formspree | 50 envíos al mes | Se conecta con `EMAIL_WEBHOOK_URL`, sin código |
| Web3Forms | 250 envíos al mes | Necesita una clave en el cuerpo del mensaje; no está integrado hoy |

Para este sitio, 100 al día y 3.000 al mes sobran: cada cita o mensaje es un solo correo.

## Paso a paso con Resend (unos 10 minutos)

1. Crea la cuenta en resend.com **con el correo donde Liliana quiere recibir los avisos** (hoy `Lilo_rodas87@hotmail.com`). Debe ser ese mismo, porque sin dominio propio Resend solo entrega a la dirección de la cuenta.
2. En el panel de Resend, entra a **API Keys**, crea una con permiso de envío (*Sending access*) y cópiala. Empieza con `re_`.
3. En Vercel: proyecto **alas-de-amor-portal → Settings → Environment Variables**. Agrega `RESEND_API_KEY` con esa clave, marcada para *Production*, *Preview* y *Development*.
4. Haz un nuevo despliegue (Deployments → ⋯ → Redeploy). Las variables solo se leen al desplegar.
5. Prueba: envía un mensaje desde `/contacto`. Debe llegar a la bandeja (revisa también *Correo no deseado* la primera vez).

La clave es secreta: **no la pegues en el repositorio**, que es público, ni en un chat.

## Cuando haya dominio propio

1. En Resend: **Domains → Add Domain** y agrega los registros DNS que indique (en Vercel: Domains → DNS Records).
2. Cuando diga *Verified*, define en Vercel `RESEND_FROM` con una dirección de ese dominio, por ejemplo `Alas de Amor <citas@tudominio.com>`, y vuelve a desplegar.
3. Desde ese momento se puede enviar a cualquier dirección, no solo a la de la cuenta, con lo que `CONTACT_EMAIL` puede ser otra.

## Si se llena el límite

En el plan gratuito de Resend el envío se pausa al llegar al límite y no cobra extra. El sitio mostrará el aviso de "correo no disponible" y remitirá a WhatsApp.

## Qué hace el código

`src/app/actions/contact.ts` valida los datos en el servidor, descarta bots con un campo oculto y envía con Resend (o con `EMAIL_WEBHOOK_URL` si no hay clave). Las pruebas están en `tests/contact.test.mjs` (`npm test`).
