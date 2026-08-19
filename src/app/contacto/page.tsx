"use client";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { useTranslations } from "@/hooks/useTranslations";
import config from "@/lib/config";
import { DovePeace, FloatingOrbs } from "@/components/HeroDecoration";
import SocialLinks from "@/components/SocialLinks";
export default function ContactoPage() {
  const t = useTranslations();
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-warm-white to-violet-50/30">
      {" "}
       <section className="hero-shell relative pb-4 gradient-hero overflow-hidden">
        {" "}
        <FloatingOrbs />{" "}
         <div className="hero-decoration-rail hero-dove-rail flex items-center justify-center rounded-full bg-cream/70 p-2 shadow-[0_0_0_1px_rgba(180,35,63,0.16),0_12px_30px_rgba(76,29,149,0.12)]">
          {" "}
          <DovePeace className="w-64 h-28" />{" "}
        </div>{" "}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {" "}
           <div className="hero-copy text-center max-w-3xl mx-auto reveal">
            {" "}
            <h1 className="role-h1 mt-0">
              {" "}
              {t("contacto.hero.title")
                .split(" ")
                .map((word, i) => (
                  <span key={i}>
                    {" "}
                    {i === 0 ? (
                      <span className="text-gradient">{word} </span>
                    ) : (
                      `${word} `
                    )}{" "}
                  </span>
                ))}{" "}
            </h1>{" "}
            <p className="role-subtitle mt-4 leading-relaxed">
              {" "}
              {t("contacto.hero.subtitle")}{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-warm-white" />{" "}
      </section>{" "}
      <section className="relative py-12 lg:py-20">
        {" "}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {" "}
          <div className="grid lg:grid-cols-2 gap-12 items-start reveal">
            {" "}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-reiki-300/20 lg:sticky lg:top-24 order-last lg:order-first">
              {" "}
              <Image
                src="/imgs/gen-agendar-lateral.jpg"
                alt={t("contacto.sidebar.title")}
                width={600}
                height={800}
                className="w-full h-[400px] lg:h-[550px] object-cover"
              />{" "}
              <div className="absolute inset-0 bg-gradient-to-t from-reiki-900/60 via-transparent to-transparent" />{" "}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                {" "}
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-3">
                  {" "}
                  {t("contacto.sidebar.title")}{" "}
                </h3>{" "}
                <p className="text-white/80 text-sm leading-relaxed">
                  {" "}
                  {t("contacto.sidebar.subtitle")}{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div>
              {" "}
              <ContactForm />{" "}
              <div className="mt-8 reveal">
                {" "}
                <ContactInfo />{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-warm-white" />{" "}
      </section>{" "}
    </div>
  );
}
function ContactInfo() {
  const t = useTranslations();
  return (
    <div className="space-y-8">
      {" "}
      <div className="gradient-card rounded-3xl p-8 shadow-lg shadow-reiki-200/20 border border-white/50">
        {" "}
        <h3 className="role-card-title text-xl mb-6">
          {" "}
          {t("contacto.info.title")}{" "}
        </h3>{" "}
        <div className="space-y-6">
          {" "}
          <div className="flex items-start gap-4">
            {" "}
                <div className="role-icon-halo w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" data-accent="aqua">
              {" "}
              <svg
                   className="role-icon w-6 h-6"
                   aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />{" "}
              </svg>{" "}
            </div>{" "}
            <div>
              {" "}
              <p className="font-medium text-reiki-800">
                {t("contacto.info.phone")}
              </p>{" "}
              <p className="text-reiki-600">{config.contact.phone}</p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="flex items-start gap-4">
            {" "}
                <div className="role-icon-halo w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" data-accent="aqua">
              {" "}
              <svg
                   className="role-icon w-6 h-6"
                   aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />{" "}
              </svg>{" "}
            </div>{" "}
            <div>
              {" "}
              <p className="font-medium text-reiki-800">
                {t("contacto.info.email")}
              </p>{" "}
              <p className="text-reiki-600">{config.contact.email}</p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="flex items-start gap-4">
            {" "}
                <div className="role-icon-halo w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" data-accent="coral">
              {" "}
              <svg
                   className="role-icon w-6 h-6"
                   aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {" "}
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />{" "}
              </svg>{" "}
            </div>{" "}
            <div>
              {" "}
              <p className="font-medium text-reiki-800">
                {t("contacto.info.whatsapp")}
              </p>{" "}
              <a
                href={`https://wa.me/${config.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-reiki-600 hover:text-reiki-700"
              >
                {" "}
                {config.contact.phone}{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
          <div className="flex items-start gap-4">
            {" "}
                <div className="role-icon-halo w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" data-accent="gold">
              {" "}
              <svg
                   className="role-icon w-6 h-6"
                   aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />{" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />{" "}
              </svg>{" "}
            </div>{" "}
            <div>
              {" "}
              <p className="font-medium text-reiki-800">
                {t("contacto.info.location")}
              </p>{" "}
              <p className="text-reiki-600">Colombia</p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="gradient-card rounded-3xl p-8 shadow-lg shadow-reiki-200/20 border border-white/50">
        {" "}
        <h3 className="role-card-title text-xl mb-6">
          {" "}
          {t("social.followTitle")}{" "}
        </h3>{" "}
        <SocialLinks variant="chip" showLabel showHandle />{" "}
      </div>{" "}
      <div className="gradient-card rounded-3xl p-8 shadow-lg shadow-reiki-200/20 border border-white/50">
        {" "}
        <div className="flex items-start gap-4">
          {" "}
          <div className="role-icon-halo w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" data-accent="gold">
            {" "}
            <svg
              className="w-6 h-6 text-reiki-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />{" "}
            </svg>{" "}
          </div>{" "}
          <div>
            {" "}
            <h3 className="role-card-title text-lg mb-2">
              {t("contacto.info.hours")}
            </h3>{" "}
            <p className="text-reiki-600">
              {t("contacto.info.hoursDetail")}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
