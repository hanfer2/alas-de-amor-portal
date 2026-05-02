"use client";

import { useState } from "react";
import { useTranslations } from "@/hooks/useTranslations";

const serviceOptionKeys = [
  "services.reiki",
  "services.access",
  "services.angelical",
  "services.chakras",
  "services.meditacion",
  "services.facelight",
  "services.coaching",
  "services.oraculos",
];

export default function AppointmentForm() {
  const t = useTranslations();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const buildWhatsApp = () => {
    const text = `Hola! Me gustaría agendar una cita.%0A%0ANombre: ${formData.name}%0AServicio: ${formData.service}%0AFecha: ${formData.date}%0AEmail: ${formData.email}`;
    return `https://wa.me/573043732955?text=${text}`;
  };

  return (
    <div className="gradient-card rounded-3xl p-8 sm:p-12 shadow-xl shadow-spiritual-200/20 border border-white/50">
      <h2 className="font-display text-2xl font-bold text-spiritual-900 mb-8 text-center">
        {t("agendar.form.title")}
      </h2>

      {submitted ? (
        <div className="text-center py-12">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-display text-xl font-bold text-spiritual-800 mb-2">
            {t("agendar.form.success")}
          </h3>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-spiritual-700 mb-2">
              {t("agendar.form.name")}
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder={t("agendar.form.namePlaceholder")}
              className="w-full px-4 py-3 rounded-xl border border-spiritual-200 focus:border-spiritual-400 focus:ring-2 focus:ring-spiritual-200 outline-none transition-all bg-white/50"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-spiritual-700 mb-2">
                {t("agendar.form.email")}
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder={t("agendar.form.emailPlaceholder")}
                className="w-full px-4 py-3 rounded-xl border border-spiritual-200 focus:border-spiritual-400 focus:ring-2 focus:ring-spiritual-200 outline-none transition-all bg-white/50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-spiritual-700 mb-2">
                {t("agendar.form.phone")}
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder={t("agendar.form.phonePlaceholder")}
                className="w-full px-4 py-3 rounded-xl border border-spiritual-200 focus:border-spiritual-400 focus:ring-2 focus:ring-spiritual-200 outline-none transition-all bg-white/50"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-spiritual-700 mb-2">
                {t("agendar.form.service")}
              </label>
              <select
                required
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-spiritual-200 focus:border-spiritual-400 focus:ring-2 focus:ring-spiritual-200 outline-none transition-all bg-white/50"
              >
                <option value="">{t("agendar.form.servicePlaceholder")}</option>
                {serviceOptionKeys.map((key) => (
                  <option key={key} value={t(key)}>{t(key)}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-spiritual-700 mb-2">
                {t("agendar.form.date")}
              </label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-spiritual-200 focus:border-spiritual-400 focus:ring-2 focus:ring-spiritual-200 outline-none transition-all bg-white/50"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-spiritual-700 mb-2">
              {t("agendar.form.message")}
            </label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder={t("agendar.form.messagePlaceholder")}
              className="w-full px-4 py-3 rounded-xl border border-spiritual-200 focus:border-spiritual-400 focus:ring-2 focus:ring-spiritual-200 outline-none transition-all bg-white/50 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-spiritual-500 to-spiritual-600 text-white font-semibold text-lg shadow-lg shadow-spiritual-400/30 hover:shadow-xl hover:shadow-spiritual-400/40 hover:scale-[1.02] transition-all duration-300"
          >
            {t("agendar.form.submit")}
          </button>
        </form>
      )}

      <div className="mt-8 pt-8 border-t border-spiritual-100 text-center">
        <p className="text-spiritual-600 mb-4">{t("agendar.form.whatsapp")}</p>
        <a
          href={buildWhatsApp()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 hover:scale-105 transition-all"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
