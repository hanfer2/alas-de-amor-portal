import type { ReactNode } from "react";

// Cabecera de página: el dibujo va a la altura del título (al lado en pantallas anchas, encima en el celular)
// y el subtítulo queda debajo, centrado.
export default function HeroTitle({
  icon,
  title,
  subtitle,
}: {
  icon: ReactNode;
  title: ReactNode;
  subtitle: ReactNode;
}) {
  return (
    <div className="hero-copy mx-auto max-w-4xl reveal">
      <div className="flex flex-col items-center justify-center gap-1 sm:flex-row sm:gap-6">
        <div className="hero-title-icon shrink-0" aria-hidden="true">
          {icon}
        </div>
        <h1 className="role-h1 mt-0 text-center sm:text-left">{title}</h1>
      </div>
      <p className="role-subtitle mx-auto mt-4 max-w-3xl text-center leading-relaxed">{subtitle}</p>
    </div>
  );
}
