"use client";
import Image from "next/image";
import { useTranslations } from "@/hooks/useTranslations";
import { CredentialIcon, FeatherLotus, FloatingOrbs } from "@/components/HeroDecoration";
import HeroTitle from "@/components/HeroTitle";
export default function NosotrosPage() {
  const t = useTranslations();
  const credentialKeys = [
    { titleKey: "credentials.reiki.title", descKey: "credentials.reiki.desc" },
    {
      titleKey: "credentials.access.title",
      descKey: "credentials.access.desc",
    },
    {
      titleKey: "credentials.facelight.title",
      descKey: "credentials.facelight.desc",
    },
    {
      titleKey: "credentials.medium.title",
      descKey: "credentials.medium.desc",
    },
    {
      titleKey: "credentials.angelical.title",
      descKey: "credentials.angelical.desc",
    },
    {
      titleKey: "credentials.espiritual.title",
      descKey: "credentials.espiritual.desc",
    },
  ];
  return (
    <div className="relative overflow-hidden">
      {" "}
       <section className="hero-shell hero-compact relative gradient-hero overflow-hidden">
        {" "}
        <FloatingOrbs />{" "}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {" "}
           <HeroTitle
            icon={<FeatherLotus className="h-full w-full" />}
            title={<>
              {" "}
              {t("nosotros.hero.title")
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
            </>}
            subtitle={<>
              {" "}
              {t("nosotros.hero.subtitle")}{" "}
            </>}
          />{" "}
        </div>{" "}
      </section>{" "}
      <section className="relative py-24 band-ivory">
        {" "}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {" "}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {" "}
            <div className="relative order-2 lg:order-1 reveal">
              {" "}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-reiki-300/20">
                {" "}
                <Image
                  src="/imgs/team/liliana-profile.jpg"
                  alt={t("alt.lilianaAbout")}
                  width={1284}
                  height={1479}
                  className="w-full h-auto aspect-[6/7] object-cover object-top"
                />{" "}
              </div>{" "}
              <div className="absolute -bottom-6 -right-6 gradient-card rounded-2xl p-6 shadow-xl border border-white/50">
                {" "}
                <div className="text-4xl font-display font-bold text-gradient">
                  {" "}
                  {t("nosotros.about.yearsExperience")}{" "}
                </div>{" "}
                <div className="text-reiki-600 text-sm">
                  {" "}
                  {t("nosotros.about.yearsLabel")}{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="space-y-6 order-1 lg:order-2 reveal">
              {" "}
              <h2 className="role-h2">
                {" "}
                Liliana Rodas{" "}
              </h2>{" "}
              <p className="role-subtitle text-reiki-700">
                {" "}
                {t("nosotros.about.subtitle")}{" "}
              </p>{" "}
              <p className="role-description text-lg">
                {" "}
                {t("nosotros.about.bio1")}{" "}
              </p>{" "}
              <p className="role-description text-lg">
                {" "}
                {t("nosotros.about.bio2")}{" "}
              </p>{" "}
              <div className="bg-gradient-to-r from-reiki-50 to-reiki-50 rounded-2xl p-6 border border-reiki-100">
                {" "}
                  <h3 className="role-card-title text-lg mb-3">
                  {" "}
                  {t("nosotros.about.goalsTitle")}{" "}
                </h3>{" "}
                <ul className="space-y-3">
                  {" "}
                  {[0, 1, 2].map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      {" "}
                      <svg
                         className="role-icon w-5 h-5 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        {" "}
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />{" "}
                      </svg>{" "}
                       <span className="role-description">
                        {t(`nosotros.about.goals.${i}`)}
                      </span>{" "}
                    </li>
                  ))}{" "}
                </ul>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section className="relative py-24 gradient-spiritual">
        {" "}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {" "}
          <div className="text-center mb-16 reveal">
            {" "}
            <h2 className="role-h2 mt-0">
              {" "}
              {t("nosotros.credentials.title")
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
            </h2>{" "}
          </div>{" "}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {" "}
             {credentialKeys.map((cred, i) => (
              <div
                key={cred.titleKey}
                className="gradient-card rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-white/50 hover:-translate-y-1 reveal"
              >
                {" "}
                 <div className="role-icon-halo w-14 h-14 rounded-2xl flex items-center justify-center mb-6" data-accent={i % 3 === 1 ? "coral" : i % 3 === 2 ? "gold" : "aqua"}>
                  {" "}
                   <CredentialIcon variant={i} className="role-icon h-7 w-7" />
                   <svg
                     className="hidden"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                     strokeWidth="2"
                   >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />{" "}
                  </svg>{" "}
                </div>{" "}
                <h3 className="role-card-title text-xl mb-2">
                  {" "}
                  {t(cred.titleKey)}{" "}
                </h3>{" "}
                <p className="role-description text-sm">{t(cred.descKey)}</p>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section className="relative py-24 band-rose">
        {" "}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {" "}
          <div className="text-center mb-16 reveal">
            {" "}
            <h2 className="role-h2 mt-0">
              {" "}
              {t("nosotros.certificates.title")
                .split(" ")
                .map((word, i) => (
                  <span key={i}>
                    {" "}
                    {i === 2 ? (
                      <span className="text-gradient">{word} </span>
                    ) : (
                      `${word} `
                    )}{" "}
                  </span>
                ))}{" "}
            </h2>{" "}
          </div>{" "}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {" "}
            {[
              "certificado-8.jpg",
              "certificado-9.jpg",
              "certificado-10.jpg",
              "certificado-11.jpg",
              "certificado-12.jpg",
              "certificado-13.jpg",
              "certificado-14.jpg",
            ].map((img, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group reveal"
              >
                {" "}
                <Image
                  src={`/imgs/${img}`}
                  alt={`Certificate ${i + 1} of Alas de Amor`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />{" "}
                <div className="absolute inset-0 bg-gradient-to-t from-reiki-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section className="relative py-24 gradient-hero">
        {" "}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {" "}
          <div className="text-center mb-16 reveal">
            {" "}
            <h2 className="role-h2 mt-0">
              {" "}
              {t("nosotros.experience.title")
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
            </h2>{" "}
          </div>{" "}
          <div className="grid md:grid-cols-2 gap-8">
            {" "}
            {[
              { img: "gallery/gallery-2.jpg", position: "50% 15%" },
              { img: "gallery/gallery-3.jpg", position: "50% 25%" },
              { img: "gallery/gallery-4.jpg", position: "50% 50%" },
            ].map(({ img, position }, i) => (
              <div
                key={i}
                className={`relative rounded-3xl overflow-hidden shadow-xl reveal ${i === 0 ? "md:col-span-2 h-80" : "h-64"}`}
              >
                {" "}
                <Image
                  src={`/imgs/${img}`}
                  alt={`Experience ${i + 1} of Alas de Amor`}
                  fill
                  className="object-cover"
                  style={{ objectPosition: position }}
                />{" "}
                <div className="absolute inset-0 bg-gradient-to-t from-reiki-900/50 to-transparent" />{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
    </div>
  );
}
