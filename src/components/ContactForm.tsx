"use client";

import { useState } from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { sendContactEmail } from "@/app/actions/contact";

type FormErrors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export default function ContactForm() {
  const t = useTranslations();
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!formData.name.trim()) e.name = "El nombre es obligatorio";
    if (!formData.email.trim()) {
      e.email = "El correo es obligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      e.email = "Ingresa un correo válido";
    }
    if (!formData.subject.trim()) e.subject = "El asunto es obligatorio";
    if (!formData.message.trim()) e.message = "El mensaje es obligatorio";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSending(true);
    setSendError("");

    try {
      const result = await sendContactEmail({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      if (!result.success) {
        setSendError(result.error || "Error al enviar el mensaje");
        setSending(false);
        return;
      }
    } catch {
      setSendError("Error de conexión al enviar el formulario");
      setSending(false);
      return;
    }

    setSending(false);
    setSubmitted(true);
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full px-4 py-3 rounded-xl border ${
      errors[field]
        ? "border-red-400 focus:border-red-500 focus:ring-red-200"
        : "border-reiki-200 focus:border-reiki-400 focus:ring-reiki-200"
    } focus:ring-2 outline-none transition-all bg-white/60`;

  return (
    <div className="gradient-card rounded-3xl p-8 sm:p-10 shadow-xl shadow-reiki-200/20 border border-white/50">
      <h2 className="font-display text-2xl font-bold text-reiki-900 mb-8">
        {t("contacto.form.title")}
      </h2>

      {submitted ? (
        <div className="text-center py-12" role="alert">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-heal-400 to-heal-600 flex items-center justify-center">
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="font-display text-xl font-bold text-reiki-800">
            {t("contacto.form.success")}
          </p>
          {sendError && (
            <p className="text-red-500 text-sm mt-3 bg-red-50 rounded-xl px-4 py-2 inline-block">
              {sendError}
            </p>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div>
            <label className="block text-sm font-medium text-reiki-700 mb-2" htmlFor="contact-name">
              {t("contacto.form.name")}
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder={t("contacto.form.namePlaceholder")}
              className={inputClass("name")}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "contact-name-error" : undefined}
            />
            {errors.name && (
              <p id="contact-name-error" className="text-red-500 text-sm mt-1" role="alert">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-reiki-700 mb-2" htmlFor="contact-email">
              {t("contacto.form.email")}
            </label>
            <input
              id="contact-email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder={t("contacto.form.emailPlaceholder")}
              className={inputClass("email")}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "contact-email-error" : undefined}
            />
            {errors.email && (
              <p id="contact-email-error" className="text-red-500 text-sm mt-1" role="alert">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-reiki-700 mb-2" htmlFor="contact-subject">
              {t("contacto.form.subject")}
            </label>
            <input
              id="contact-subject"
              type="text"
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              placeholder={t("contacto.form.subjectPlaceholder")}
              className={inputClass("subject")}
              aria-invalid={!!errors.subject}
              aria-describedby={errors.subject ? "contact-subject-error" : undefined}
            />
            {errors.subject && (
              <p id="contact-subject-error" className="text-red-500 text-sm mt-1" role="alert">{errors.subject}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-reiki-700 mb-2" htmlFor="contact-message">
              {t("contacto.form.message")}
            </label>
            <textarea
              id="contact-message"
              rows={5}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder={t("contacto.form.messagePlaceholder")}
              className={inputClass("message")}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "contact-message-error" : undefined}
            />
            {errors.message && (
              <p id="contact-message-error" className="text-red-500 text-sm mt-1" role="alert">{errors.message}</p>
            )}
          </div>

          {sendError && (
            <p className="text-red-500 text-sm text-center bg-red-50 rounded-xl px-4 py-2" role="alert">
              {sendError}
            </p>
          )}

          <button
            type="submit"
            disabled={sending}
            className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-reiki-500 to-reiki-600 text-white font-semibold text-lg shadow-lg shadow-reiki-400/30 hover:shadow-xl hover:shadow-reiki-400/40 hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {sending ? (
              <span className="inline-flex items-center gap-2">
                <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                {t("contacto.form.submitting")}
              </span>
            ) : (
              t("contacto.form.submit")
            )}
          </button>
        </form>
      )}
    </div>
  );
}
