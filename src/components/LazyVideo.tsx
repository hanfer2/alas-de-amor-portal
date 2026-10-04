"use client";

import { useEffect, useRef } from "react";

type LazyVideoProps = {
  src: string;
  poster: string;
  label: string;
  className?: string;
};

// El video no se descarga hasta que entra en pantalla: mientras tanto se ve el póster.
// Se reproduce en silencio al verse y se pausa al salir; con "reducir movimiento" nunca arranca solo.
export default function LazyVideo({ src, poster, label, className = "" }: LazyVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            /* el navegador puede bloquear la reproducción automática: el póster y los controles siguen disponibles */
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      aria-label={label}
      controls
      muted
      playsInline
      loop
      preload="none"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
