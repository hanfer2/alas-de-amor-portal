"use client";

import { useState } from "react";
import { useTranslations } from "@/hooks/useTranslations";

export default function ContactForm() {
  const t = useTranslations();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="gradient-card rounded-3xl p-8 sm:p-10 shadow-xl shadow-spiritual-200/20 border border-white/50">
      <h2 className="font-display text-2xl font-bold text-spiritual-900 mb-8">
        {t("contacto.form.title")}
      </h2>

      {submitted ? (
        <div className="text-center py-12">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-display text-xl font-bold text-spiritual-800">
            {t("contacto.form.success")}
          </h3>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-spiritual-700 mb-2">
              {t("contacto.form.name")}
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder={t("contacto.form.namePlaceholder")}
              className="w-full px-4 py-3 rounded-xl border border-spiritual-200 focus:border-spiritual-400 focus:ring-2 focus:ring-spiritual-200 outline-none transition-all bg-white/50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-spiritual-700 mb-2">
              {t("contacto.form.email")}
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder={t("contacto.form.emailPlaceholder")}
              className="w-full px-4 py-3 rounded-xl border border-spiritual-200 focus:border-spiritual-400 focus:ring-2 focus:ring-spiritual-200 outline-none transition-all bg-white/50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-spiritual-700 mb-2">
              {t("contacto.form.subject")}
            </label>
            <input
              type="text"
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              placeholder={t("contacto.form.subjectPlaceholder")}
              className="w-full px-4 py-3 rounded-xl border border-spiritual-200 focus:border-spiritual-400 focus:ring-2 focus:ring-spiritual-200 outline-none transition-all bg-white/50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-spiritual-700 mb-2">
              {t("contacto.form.message")}
            </label>
            <textarea
              rows={5}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder={t("contacto.form.messagePlaceholder")}
              className="w-full px-4 py-3 rounded-xl border border-spiritual-200 focus:border-spiritual-400 focus:ring-2 focus:ring-spiritual-200 outline-none transition-all bg-white/50 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-spiritual-500 to-spiritual-600 text-white font-semibold text-lg shadow-lg shadow-spiritual-400/30 hover:shadow-xl hover:shadow-spiritual-400/40 hover:scale-[1.02] transition-all duration-300"
          >
            {t("contacto.form.submit")}
          </button>
        </form>
      )}
    </div>
  );
}
