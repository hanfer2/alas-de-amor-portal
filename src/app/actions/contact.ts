"use server";

type AppointmentData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  message?: string;
  modality?: string;
  country?: string;
  source?: string;
  /** Campo trampa: las personas no lo ven; los bots suelen llenarlo. */
  website?: string;
};

type ContactData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  website?: string;
};

type Result = { success: boolean; error?: string };

const TO_EMAIL =
  process.env.CONTACT_EMAIL || process.env.NEXT_PUBLIC_CONTACT_EMAIL || "Lilo_rodas87@hotmail.com";
const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
// Sin dominio propio, Resend solo permite enviar desde onboarding@resend.dev y únicamente a la
// dirección de la cuenta de Resend. Con un dominio verificado se cambia RESEND_FROM.
const RESEND_FROM = process.env.RESEND_FROM || "Alas de Amor <onboarding@resend.dev>";
const WEBHOOK_URL = process.env.EMAIL_WEBHOOK_URL || "";

const NOT_CONFIGURED =
  "El envío por correo aún no está disponible. Por favor escríbenos por WhatsApp.";
const SEND_FAILED =
  "No pudimos enviar el correo en este momento. Por favor escríbenos por WhatsApp.";
const INVALID = "Revisa los datos del formulario e inténtalo de nuevo.";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const clean = (value: string | undefined, max: number) =>
  (value ?? "").replace(/[\r\n]+/g, " ").trim().slice(0, max);
const cleanBlock = (value: string | undefined, max: number) => (value ?? "").trim().slice(0, max);

type Mail = {
  type: "appointment" | "contact";
  subject: string;
  text: string;
  replyTo: string;
  payload: Record<string, unknown>;
};

async function deliver(mail: Mail): Promise<Result> {
  if (RESEND_API_KEY) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: RESEND_FROM,
          to: [TO_EMAIL],
          reply_to: mail.replyTo,
          subject: mail.subject,
          text: mail.text,
        }),
      });
      if (!res.ok) {
        console.error("[Email] Resend respondió", res.status, await res.text());
        return { success: false, error: SEND_FAILED };
      }
      return { success: true };
    } catch (e) {
      console.error("[Email] Error al llamar a Resend:", e);
      return { success: false, error: SEND_FAILED };
    }
  }

  if (WEBHOOK_URL) {
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...mail.payload, to: TO_EMAIL, subject: mail.subject, timestamp: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error(`El webhook respondió ${res.status}`);
      return { success: true };
    } catch (e) {
      console.error("[Email] Error en el webhook:", e);
      return { success: false, error: SEND_FAILED };
    }
  }

  // Antes se respondía "éxito" y el mensaje se perdía sin avisar.
  console.warn("[Email] No hay RESEND_API_KEY ni EMAIL_WEBHOOK_URL: el mensaje no se envió.");
  return { success: false, error: NOT_CONFIGURED };
}

export async function sendAppointmentEmail(data: AppointmentData): Promise<Result> {
  if (data.website) return { success: true }; // bot: se descarta en silencio

  const name = clean(data.name, 100);
  const email = clean(data.email, 150);
  const phone = clean(data.phone, 40);
  const service = clean(data.service, 120);
  if (!name || !phone || !service || !EMAIL_RE.test(email)) return { success: false, error: INVALID };

  const fields = {
    Nombre: name,
    Correo: email,
    "Teléfono / WhatsApp": phone,
    Servicio: service,
    "Fecha preferida": clean(data.date, 20) || "Sin definir",
    "Modalidad preferida": clean(data.modality, 40) || "Sin definir",
    País: clean(data.country, 60) || "Sin definir",
    "Cómo nos conoció": clean(data.source, 60) || "Sin definir",
  };
  const message = cleanBlock(data.message, 2000);
  const text =
    Object.entries(fields)
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n") + `\n\nMensaje:\n${message || "(sin mensaje)"}\n`;

  return deliver({
    type: "appointment",
    subject: `Nueva cita: ${service} - ${name}`,
    text,
    replyTo: email,
    payload: { type: "appointment", name, email, phone, service, message, ...fields },
  });
}

export async function sendContactEmail(data: ContactData): Promise<Result> {
  if (data.website) return { success: true };

  const name = clean(data.name, 100);
  const email = clean(data.email, 150);
  const subject = clean(data.subject, 150);
  const message = cleanBlock(data.message, 4000);
  if (!name || !message || !EMAIL_RE.test(email)) return { success: false, error: INVALID };

  return deliver({
    type: "contact",
    subject: `Contacto: ${subject || "Sin asunto"} - ${name}`,
    text: `Nombre: ${name}\nCorreo: ${email}\nAsunto: ${subject || "Sin asunto"}\n\nMensaje:\n${message}\n`,
    replyTo: email,
    payload: { type: "contact", name, email, subjectField: subject, message },
  });
}
