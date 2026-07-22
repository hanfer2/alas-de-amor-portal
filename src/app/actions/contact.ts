"use server";

type AppointmentData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  message?: string;
};

type ContactData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Result = { success: boolean; error?: string };

const WEBHOOK_URL = process.env.EMAIL_WEBHOOK_URL || "";
const TO_EMAIL = process.env.CONTACT_EMAIL || "contacto@alasdeamor.com";

async function sendViaWebhook(payload: Record<string, unknown>): Promise<Result> {
  if (!WEBHOOK_URL) {
    console.log("[Email] No webhook configured. Payload:", JSON.stringify(payload, null, 2));
    return { success: true };
  }

  try {
    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) throw new Error(`Webhook responded with ${res.status}`);
    return { success: true };
  } catch (e) {
    console.error("[Email] Webhook error:", e);
    return { success: false, error: String(e) };
  }
}

export async function sendAppointmentEmail(data: AppointmentData): Promise<Result> {
  const payload = {
    type: "appointment",
    to: TO_EMAIL,
    subject: `Nueva cita: ${data.service} - ${data.name}`,
    name: data.name,
    email: data.email,
    phone: data.phone,
    service: data.service,
    date: data.date,
    message: data.message || "",
    timestamp: new Date().toISOString(),
  };

  return sendViaWebhook(payload);
}

export async function sendContactEmail(data: ContactData): Promise<Result> {
  const payload = {
    type: "contact",
    to: TO_EMAIL,
    subject: `Contacto: ${data.subject} - ${data.name}`,
    name: data.name,
    email: data.email,
    subjectField: data.subject,
    message: data.message,
    timestamp: new Date().toISOString(),
  };

  return sendViaWebhook(payload);
}
