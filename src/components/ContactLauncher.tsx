"use client";

import { useEffect, useRef, useState } from "react";
import { Liquid } from "liquid-gooey";
import { useTranslations } from "@/hooks/useTranslations";
import config from "@/lib/config";

export default function ContactLauncher() {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        setShowChat(false);
      }
    };
    const handlePointerDown = (event: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setShowChat(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  const toggle = () => {
    setIsOpen((value) => !value);
    setShowChat(false);
  };

  return (
    <div ref={rootRef} className="fixed bottom-24 right-6 z-40">
      {showChat ? (
        <div
          role="dialog"
          aria-label={t("contactLauncher.chat.title")}
          className="mb-3 w-72 rounded-3xl border border-white/50 bg-white/95 p-5 shadow-xl shadow-reiki-900/10 backdrop-blur-sm"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="font-display text-lg font-bold text-reiki-900">
                {t("contactLauncher.chat.title")}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-reiki-700">
                {t("contactLauncher.chat.message")}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowChat(false)}
              aria-label={t("contactLauncher.close")}
              className="rounded-full p-2 text-reiki-600 transition-colors hover:bg-reiki-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-reiki-600"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <a
            href={`https://wa.me/${config.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-reiki-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-reiki-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-reiki-600"
          >
            {t("contactLauncher.whatsapp")}
          </a>
        </div>
      ) : null}

      {isOpen ? (
        <Liquid
          blur={6}
          contrast={18}
          fill="var(--color-warm-white)"
          shadow="0 8px 24px rgba(91,33,182,0.18)"
          className="mb-3 flex items-center gap-2 rounded-full"
        >
          <Liquid.Item>
            <a
              href={`https://wa.me/${config.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("contactLauncher.whatsapp")}
              className="inline-flex items-center rounded-full bg-reiki-600 px-4 py-3 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-reiki-600"
            >
              {t("contactLauncher.whatsapp")}
            </a>
          </Liquid.Item>
          <Liquid.Item>
            <button
              type="button"
              onClick={() => setShowChat(true)}
              aria-label={t("contactLauncher.chat.label")}
              className="inline-flex items-center rounded-full bg-reiki-100 px-4 py-3 text-sm font-semibold text-reiki-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-reiki-600"
            >
              {t("contactLauncher.chat.label")}
            </button>
          </Liquid.Item>
        </Liquid>
      ) : null}

      <Liquid
        blur={6}
        contrast={18}
        fill="var(--color-reiki-600)"
        shadow="0 8px 24px rgba(91,33,182,0.28)"
        className="inline-flex rounded-full"
      >
        <Liquid.Item>
          <button
            type="button"
            onClick={toggle}
            aria-label={t("contactLauncher.toggle")}
            aria-expanded={isOpen}
            aria-haspopup="dialog"
            className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-transparent text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-reiki-600"
          >
            <span aria-hidden="true" className="text-xl">
              {isOpen ? "×" : "✦"}
            </span>
          </button>
        </Liquid.Item>
      </Liquid>
    </div>
  );
}
