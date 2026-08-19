"use client";

import { useId } from "react";
import { useTranslations } from "@/hooks/useTranslations";
import config from "@/lib/config";

export type SocialNetwork = "facebook" | "instagram" | "tiktok" | "whatsapp" | "email";
export type SocialLinksVariant = "chip" | "quiet" | "card";

type SocialMeta = {
  name: string;
  handle: string;
  href: string;
  external: boolean;
  chipClass: string;
  quietColorClass: string;
};

const ALL_NETWORKS: SocialNetwork[] = ["facebook", "instagram", "tiktok", "whatsapp", "email"];

const SOCIALS: Record<SocialNetwork, SocialMeta> = {
  facebook: {
    name: "Facebook",
    handle: "@liliana.rodas.9615",
    href: config.social.facebook,
    external: true,
    chipClass: "bg-[#1877F2]",
    quietColorClass: "text-[#1877F2]",
  },
  instagram: {
    name: "Instagram",
    handle: "@alasdeamor",
    href: config.social.instagram,
    external: true,
    chipClass: "bg-[linear-gradient(135deg,#F58529,#DD2A7B_50%,#8134AF)] ring-2 ring-inset ring-[#B13A8A]",
    quietColorClass: "",
  },
  tiktok: {
    name: "TikTok",
    handle: "@lilianarodas155",
    href: config.social.tiktok,
    external: true,
    chipClass: "bg-[#010101]",
    quietColorClass: "text-[#010101]",
  },
  whatsapp: {
    name: "WhatsApp",
    handle: "+57 304 3732955",
    href: `https://wa.me/${config.contact.whatsapp}`,
    external: true,
    chipClass: "bg-[#128C7E]",
    quietColorClass: "text-[#128C7E]",
  },
  email: {
    name: "Email",
    handle: "Lilo_rodas87@hotmail.com",
    href: `mailto:${config.contact.email}`,
    external: false,
    chipClass: "bg-[#4c1d95]",
    quietColorClass: "text-[#4c1d95]",
  },
};

export function getSocialMeta(network: SocialNetwork): SocialMeta {
  return SOCIALS[network];
}

type GlyphVariant = "chip" | "quiet" | "card" | "mini";

function InstagramQuietGlyph({ sizeClass }: { sizeClass: string }) {
  const rawId = useId();
  const gid = `ig-grad-${rawId.replace(/[^a-zA-Z0-9_-]/g, "")}`;
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" aria-hidden="true" className={sizeClass}>
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F58529" />
          <stop offset="0.5" stopColor="#DD2A7B" />
          <stop offset="1" stopColor="#8134AF" />
        </linearGradient>
      </defs>
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" stroke={`url(#${gid})`} />
      <circle cx="12" cy="12" r="4.1" stroke={`url(#${gid})`} />
      <circle cx="17.2" cy="6.8" r="1.1" fill={`url(#${gid})`} stroke="none" />
    </svg>
  );
}

function Glyph({ network, variant }: { network: SocialNetwork; variant: GlyphVariant }) {
  const sizeClass =
    variant === "card" ? "h-8 w-8" : variant === "quiet" ? "h-5 w-5" : variant === "mini" ? "h-4 w-4" : "h-6 w-6";

  switch (network) {
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={sizeClass}>
          <path d="M14.5 21.5v-7.2h2.4l.36-2.8h-2.76V9.6c0-.81.22-1.36 1.39-1.36h1.45V5.77c-.25-.03-1.12-.11-2.13-.11-2.11 0-3.55 1.29-3.55 3.65v2.19H9.5v2.8h2.16v7.2h2.84z" />
        </svg>
      );
    case "instagram":
      if (variant === "quiet") {
        return <InstagramQuietGlyph sizeClass={sizeClass} />;
      }
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className={sizeClass}>
          <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" />
          <circle cx="12" cy="12" r="4.1" />
          <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "tiktok":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={sizeClass}>
          <path
            fill="currentColor"
            d="M16.2 3.6c.1-1-1.3-1.7-2.1-1.2l-5.4 2.1c-.6.2-1 .8-1 1.4v8.4c-.3-.1-.7-.1-1-.1-1.8 0-3.3 1.4-3.3 3.2s1.5 3.2 3.3 3.2 3.3-1.4 3.3-3.2V9.1l4.9-1.9v4.7c-.3-.1-.7-.1-1-.1-1.8 0-3.3 1.4-3.3 3.2s1.5 3.2 3.3 3.2 3.3-1.4 3.3-3.2V3.6z"
          />
          <circle cx="5.4" cy="19.4" r="1.1" fill="#25F4EE" />
          <circle cx="16.6" cy="19.4" r="1.1" fill="#FE2C55" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={sizeClass}
        >
          <path d="M12 4.2c-4.7 0-8.5 3.6-8.5 8 0 1.6.5 3 1.3 4.2L4 20l3.8-1.2c1.2.6 2.6 1 4.2 1 4.7 0 8.5-3.6 8.5-8s-3.8-7.6-8.5-7.6z" />
          <path d="M9.4 9.1c-.3 1.2.2 2.6 1.2 3.6.9.9 2.3 1.5 3.5 1.2l.4-1.1-1.7-.9-1 .9c-.9-.5-1.6-1.2-2-2.1l.9-1-.9-1.7-1.1.5c-.2.1-.3.3-.4.7z" />
        </svg>
      );
    case "email":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={sizeClass}
        >
          <path d="M3 8l7.9 5.3a2 2 0 002.2 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
  }
}

function SocialLinkItem({
  network,
  variant,
  showLabel,
  showHandle,
}: {
  network: SocialNetwork;
  variant: SocialLinksVariant;
  showLabel: boolean;
  showHandle: boolean;
}) {
  const t = useTranslations();
  const meta = SOCIALS[network];
  const externalProps = meta.external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  const ariaLabel = showHandle || network === "tiktok" ? `${meta.name} ${meta.handle}` : meta.name;

  if (variant === "card") {
    const isWrite = network === "whatsapp" || network === "email";
    return (
      <a
        href={meta.href}
        {...externalProps}
        aria-label={ariaLabel}
        className="group flex flex-col items-center gap-3 rounded-3xl border border-reiki-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      >
        <span
          className={`flex h-16 w-16 items-center justify-center rounded-full text-white shadow-md ${meta.chipClass}`}
        >
          <Glyph network={network} variant="card" />
        </span>
        <span className="font-display text-lg font-bold text-reiki-800">{meta.name}</span>
        <span className="break-all text-sm text-reiki-600">{meta.handle}</span>
        <span className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-reiki-600 px-5 py-2 text-xs font-bold text-white">
          {t(isWrite ? "social.write" : "social.visit")}
          <svg
            className="h-3.5 w-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </a>
    );
  }

  if (variant === "quiet") {
    if (showLabel) {
      return (
        <a
          href={meta.href}
          {...externalProps}
          aria-label={ariaLabel}
          className="inline-flex items-center gap-2 rounded-full border border-reiki-100 bg-white py-1.5 pl-1.5 pr-4 text-sm font-semibold text-reiki-700 shadow-sm transition-shadow hover:shadow-md"
        >
          <span className={`flex h-9 w-9 items-center justify-center rounded-full text-white shadow-sm ${meta.chipClass}`}>
            <Glyph network={network} variant="mini" />
          </span>
          {meta.name}
        </a>
      );
    }
    return (
      <a
        href={meta.href}
        {...externalProps}
        aria-label={ariaLabel}
        className={`flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-reiki-100 transition-transform hover:scale-105 ${meta.quietColorClass}`}
      >
        <Glyph network={network} variant="quiet" />
      </a>
    );
  }

  if (showLabel) {
    return (
      <a
        href={meta.href}
        {...externalProps}
        aria-label={ariaLabel}
        className={`inline-flex items-center gap-2.5 rounded-full border border-reiki-100 bg-white py-1.5 pl-1.5 pr-4 text-sm shadow-sm transition-shadow hover:shadow-md ${
          showHandle ? "min-w-[10.625rem]" : ""
        }`}
      >
        <span className={`flex h-11 w-11 items-center justify-center rounded-full text-white shadow-sm ${meta.chipClass}`}>
          <Glyph network={network} variant="chip" />
        </span>
        <span className="font-semibold text-reiki-800">{meta.name}</span>
        {showHandle && <span className="text-reiki-500">{meta.handle}</span>}
      </a>
    );
  }

  return (
    <a
      href={meta.href}
      {...externalProps}
      aria-label={ariaLabel}
      className={`flex h-12 w-12 items-center justify-center rounded-full text-white shadow-md transition-transform hover:scale-105 lg:h-11 lg:w-11 ${meta.chipClass}`}
    >
      <Glyph network={network} variant="chip" />
    </a>
  );
}

type SocialLinksProps = {
  networks?: SocialNetwork[];
  variant?: SocialLinksVariant;
  showLabel?: boolean;
  showHandle?: boolean;
  className?: string;
};

export default function SocialLinks({
  networks = ALL_NETWORKS,
  variant = "chip",
  showLabel = false,
  showHandle = false,
  className = "",
}: SocialLinksProps) {
  const wrapperClass =
    variant === "card"
      ? `grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 ${className}`
      : `flex flex-wrap gap-3 ${variant === "quiet" ? "items-center " : ""}${className}`;

  return (
    <div className={wrapperClass}>
      {networks.map((network) => (
        <SocialLinkItem
          key={network}
          network={network}
          variant={variant}
          showLabel={showLabel}
          showHandle={showHandle}
        />
      ))}
    </div>
  );
}