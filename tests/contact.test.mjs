// Pruebas de la acción del servidor que envía los correos de contacto y de citas.
// Se ejecutan con: npm test  (Node 22+, sin dependencias extra)
import { test } from "node:test";
import assert from "node:assert/strict";

let loads = 0;
// Las variables de entorno se leen al cargar el módulo: cada escenario lo importa de nuevo.
async function load(env = {}) {
  for (const k of ["RESEND_API_KEY", "RESEND_FROM", "EMAIL_WEBHOOK_URL", "CONTACT_EMAIL"]) delete process.env[k];
  Object.assign(process.env, env);
  return import(`../src/app/actions/contact.ts?load=${++loads}`);
}

function mockFetch(response = { ok: true, status: 200, text: async () => "" }) {
  const calls = [];
  globalThis.fetch = async (url, init) => {
    calls.push({ url, init, body: init?.body ? JSON.parse(init.body) : null });
    return response;
  };
  return calls;
}

const quiet = () => {
  console.warn = () => {};
  console.error = () => {};
};

const goodContact = { name: "María", email: "maria@example.com", subject: "Duda", message: "Hola, quiero información." };
const goodAppointment = {
  name: "María", email: "maria@example.com", phone: "+57 300 000 0000", service: "Reiki",
  date: "2026-11-01", message: "", modality: "Virtual", country: "España", source: "TikTok",
};

test("sin configuración NO responde éxito (antes el mensaje se perdía en silencio)", async () => {
  quiet();
  const calls = mockFetch();
  const { sendContactEmail } = await load();
  const r = await sendContactEmail(goodContact);
  assert.equal(r.success, false);
  assert.match(r.error, /WhatsApp/);
  assert.equal(calls.length, 0);
});

test("con RESEND_API_KEY envía a la dueña, con reply_to del cliente y remitente de prueba", async () => {
  const calls = mockFetch();
  const { sendContactEmail } = await load({ RESEND_API_KEY: "re_test_123" });
  const r = await sendContactEmail(goodContact);
  assert.equal(r.success, true);
  assert.equal(calls.length, 1);
  assert.equal(calls[0].url, "https://api.resend.com/emails");
  assert.equal(calls[0].init.headers.Authorization, "Bearer re_test_123");
  assert.deepEqual(calls[0].body.to, ["Lilo_rodas87@hotmail.com"]);
  assert.equal(calls[0].body.reply_to, "maria@example.com");
  assert.match(calls[0].body.from, /onboarding@resend\.dev/);
  assert.match(calls[0].body.text, /Hola, quiero información\./);
});

test("CONTACT_EMAIL y RESEND_FROM se pueden cambiar sin tocar código", async () => {
  const calls = mockFetch();
  const { sendContactEmail } = await load({
    RESEND_API_KEY: "re_x", CONTACT_EMAIL: "otra@ejemplo.com", RESEND_FROM: "Alas de Amor <citas@midominio.com>",
  });
  await sendContactEmail(goodContact);
  assert.deepEqual(calls[0].body.to, ["otra@ejemplo.com"]);
  assert.equal(calls[0].body.from, "Alas de Amor <citas@midominio.com>");
});

test("la cita incluye modalidad, país y cómo nos conoció", async () => {
  const calls = mockFetch();
  const { sendAppointmentEmail } = await load({ RESEND_API_KEY: "re_x" });
  const r = await sendAppointmentEmail(goodAppointment);
  assert.equal(r.success, true);
  const { text, subject } = calls[0].body;
  assert.match(subject, /Nueva cita: Reiki - María/);
  assert.match(text, /Modalidad preferida: Virtual/);
  assert.match(text, /País: España/);
  assert.match(text, /Cómo nos conoció: TikTok/);
});

test("si Resend rechaza el envío, se informa el fallo", async () => {
  quiet();
  mockFetch({ ok: false, status: 403, text: async () => '{"message":"testing emails"}' });
  const { sendContactEmail } = await load({ RESEND_API_KEY: "re_x" });
  const r = await sendContactEmail(goodContact);
  assert.equal(r.success, false);
  assert.match(r.error, /WhatsApp/);
});

test("el webhook sigue funcionando como alternativa", async () => {
  const calls = mockFetch();
  const { sendContactEmail } = await load({ EMAIL_WEBHOOK_URL: "https://formspree.io/f/abc" });
  const r = await sendContactEmail(goodContact);
  assert.equal(r.success, true);
  assert.equal(calls[0].url, "https://formspree.io/f/abc");
  assert.equal(calls[0].body.type, "contact");
});

test("el campo trampa descarta bots sin enviar nada", async () => {
  const calls = mockFetch();
  const { sendContactEmail } = await load({ RESEND_API_KEY: "re_x" });
  const r = await sendContactEmail({ ...goodContact, website: "http://spam.example" });
  assert.equal(r.success, true);
  assert.equal(calls.length, 0);
});

test("datos inválidos se rechazan en el servidor", async () => {
  const calls = mockFetch();
  const { sendContactEmail, sendAppointmentEmail } = await load({ RESEND_API_KEY: "re_x" });
  assert.equal((await sendContactEmail({ ...goodContact, email: "no-es-correo" })).success, false);
  assert.equal((await sendContactEmail({ ...goodContact, message: "   " })).success, false);
  assert.equal((await sendAppointmentEmail({ ...goodAppointment, phone: "" })).success, false);
  assert.equal(calls.length, 0);
});

test("saltos de línea en el nombre no pueden alterar el asunto", async () => {
  const calls = mockFetch();
  const { sendContactEmail } = await load({ RESEND_API_KEY: "re_x" });
  await sendContactEmail({ ...goodContact, name: "Ana\r\nBcc: robo@example.com" });
  assert.doesNotMatch(calls[0].body.subject, /[\r\n]/);
});
