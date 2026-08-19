"use client";

import { useEffect, useRef, useState } from "react";
import config from "@/lib/config";
import SocialLinks, { getSocialMeta, type SocialNetwork } from "@/components/SocialLinks";

declare global {
  interface Window {
    __alasInstagramEmbedLoaded?: boolean;
    instgrm?: { Embeds?: { process?: () => void } };
  }
}

function getTikTokId(url: string): string | null {
  const clean = url.trim();
  const match = clean.match(/\/(video|item)\/(\d+)/);
  if (match) return match[2];
  return /^\d+$/.test(clean) ? clean : null;
}

function ensureInstagramEmbedScript() {
  if (window.__alasInstagramEmbedLoaded) {
    window.instgrm?.Embeds?.process?.();
    return;
  }
  window.__alasInstagramEmbedLoaded = true;
  const existing = document.getElementById("alas-instagram-embed-js");
  if (existing) return;
  const script = document.createElement("script");
  script.id = "alas-instagram-embed-js";
  script.async = true;
  script.src = "https://www.instagram.com/embed.js";
  script.onload = () => window.instgrm?.Embeds?.process?.();
  document.body.appendChild(script);
}

function LoadingBox({ label }: { label: string }) {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-2xl bg-reiki-50 text-reiki-600">
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}

function ProfileCard({ network }: { network: SocialNetwork }) {
  const meta = getSocialMeta(network);
  const externalProps = meta.external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <a
      href={meta.href}
      {...externalProps}
      aria-label={`${meta.name} ${meta.handle}`}
      className="flex w-full max-w-[280px] flex-col items-center gap-3 rounded-3xl border border-reiki-100 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
    >
      <SocialLinks variant="chip" networks={[network]} className="justify-center" />
      <span className="font-display text-lg font-bold text-reiki-800">{meta.name}</span>
      <span className="break-all text-sm text-reiki-600">{meta.handle}</span>
    </a>
  );
}

function InstagramSlot() {
  const boxRef = useRef<HTMLDivElement>(null);
  const postUrl = config.social.blogInstagramPost;
  const [html, setHtml] = useState("");
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const box = boxRef.current;
    if (!box || !postUrl) return;

    let cancelled = false;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        fetch(`/api/instagram-oembed?url=${encodeURIComponent(postUrl)}`)
          .then((res) => {
            if (!res.ok) throw new Error("oembed-error");
            return res.json();
          })
          .then((data) => {
            if (cancelled) return;
            if (!data || typeof data.html !== "string" || !data.html.includes("instagram-media")) {
              setFailed(true);
              return;
            }
            setHtml(data.html);
            ensureInstagramEmbedScript();
          })
          .catch(() => {
            if (!cancelled) setFailed(true);
          });
      },
      { rootMargin: "300px 0px" }
    );

    observer.observe(box);
    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [postUrl]);

  if (!postUrl || failed) {
    return (
      <div className="flex h-[480px] w-full items-center justify-center overflow-hidden rounded-2xl border border-reiki-100 bg-white/90 p-4">
        <ProfileCard network="instagram" />
      </div>
    );
  }

  return (
    <div
      ref={boxRef}
      className="flex h-[480px] w-full items-center justify-center overflow-hidden rounded-2xl border border-reiki-100 bg-white/90 p-4"
    >
      {html ? (
        <div className="w-full max-w-[540px]" dangerouslySetInnerHTML={{ __html: html }} />
      ) : (
        <LoadingBox label="Instagram" />
      )}
    </div>
  );
}

function TikTokSlot() {
  const videoUrl = config.social.blogTikTokVideo;
  const videoId = getTikTokId(videoUrl);

  if (!videoId) {
    return (
      <div className="flex aspect-[9/16] max-h-[560px] w-full items-center justify-center overflow-hidden rounded-2xl border border-reiki-100 bg-white/90 p-4">
        <ProfileCard network="tiktok" />
      </div>
    );
  }

  return (
    <div className="aspect-[9/16] max-h-[560px] w-full overflow-hidden rounded-2xl border border-reiki-100 bg-black">
      <iframe
        src={`https://www.tiktok.com/player/v1/${videoId}?music_info=1&description=1`}
        title="TikTok video"
        loading="lazy"
        allow="fullscreen; autoplay; encrypted-media; picture-in-picture; web-share"
        className="h-full w-full"
      />
    </div>
  );
}

export default function SocialEmbeds() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <InstagramSlot />
      <TikTokSlot />
    </div>
  );
}