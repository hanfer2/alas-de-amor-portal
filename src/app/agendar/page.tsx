"use client";
import Image from "next/image";
import AppointmentForm from "@/components/AppointmentForm";
import { useTranslations } from "@/hooks/useTranslations";
import { CalendarWings, FloatingOrbs } from "@/components/HeroDecoration";
export default function AgendarPage() {
  const t = useTranslations();
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-warm-white to-violet-50/30">
      {" "}
       <section className="hero-shell relative pb-4 gradient-hero overflow-hidden">
        {" "}
        <FloatingOrbs />{" "}
         <div className="hero-decoration-rail hero-calendar-rail flex items-center justify-center rounded-full bg-cream/70 p-2 shadow-[0_0_0_1px_rgba(180,35,63,0.16),0_12px_30px_rgba(76,29,149,0.12)]">
          {" "}
          <CalendarWings className="w-36 h-36" />{" "}
        </div>{" "}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {" "}
           <div className="hero-copy text-center max-w-3xl mx-auto reveal">
            {" "}
            <h1 className="role-h1 mt-0">
              {" "}
              {t("agendar.hero.title")
                .split(" ")
                .map((word, i) => (
                  <span key={i}>
                    {" "}
                    {i === 1 ? (
                      <span className="text-gradient">{word} </span>
                    ) : (
                      `${word} `
                    )}{" "}
                  </span>
                ))}{" "}
            </h1>{" "}
            <p className="role-subtitle mt-4 leading-relaxed">
              {" "}
              {t("agendar.hero.subtitle")}{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-warm-white" />{" "}
      </section>{" "}
      <section className="relative py-12 lg:py-20">
        {" "}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {" "}
          <div className="text-center mb-12 lg:mb-16 reveal">
            {" "}
            <h2 className="role-h2 mb-4">
              {" "}
              {t("agendar.steps.title")}{" "}
            </h2>{" "}
            <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-reiki-300 to-reiki-500" />{" "}
          </div>{" "}
           <div className="steps-grid grid sm:grid-cols-3 gap-8 mb-16 lg:mb-20 reveal">
            {" "}
            {[1, 2, 3].map((n) => (
              <div key={n} className="text-center group">
                {" "}
                 <div className={`step-marker mx-auto mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${n === 1 ? "step-marker--coral" : n === 2 ? "step-marker--aqua" : "step-marker--gold"}`}>
                  {" "}
                  {n}{" "}
                </div>{" "}
                <h3 className="role-card-title text-xl mb-2">
                  {" "}
                  {t(`agendar.steps.step${n}.title`)}{" "}
                </h3>{" "}
                <p className="role-description text-sm">
                  {" "}
                  {t(`agendar.steps.step${n}.desc`)}{" "}
                </p>{" "}
              </div>
            ))}{" "}
          </div>{" "}
          <div className="grid lg:grid-cols-2 gap-12 items-start reveal">
            {" "}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-reiki-300/20 lg:sticky lg:top-24 order-last lg:order-first">
              {" "}
              <Image
                src="/imgs/gen-agendar-lateral.jpg"
                alt={t("agendar.sidebar.title")}
                width={600}
                height={800}
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />{" "}
              <div className="absolute inset-0 bg-gradient-to-t from-reiki-900/60 via-transparent to-transparent" />{" "}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                {" "}
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-3">
                  {" "}
                  {t("agendar.sidebar.title")}{" "}
                </h3>{" "}
                <p className="text-white/80 text-sm leading-relaxed">
                  {" "}
                  {t("agendar.sidebar.subtitle")}{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div>
              {" "}
              <AppointmentForm />{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-warm-white" />{" "}
      </section>{" "}
    </div>
  );
}
