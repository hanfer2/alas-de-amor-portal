import Image from "next/image";

const variants = {
  // Logo completo con etiqueta: footer, portada, documentos
  full: { src: "/imgs/brand/logo.svg", width: 480, height: 340, alt: "Alas de Amor, terapia holística" },
  // Sin etiqueta y recortado: la etiqueta no se lee a la altura del header
  compact: { src: "/imgs/brand/logo-compact.svg", width: 432, height: 244, alt: "Alas de Amor" },
  // Solo alas y corazón: iconos y sellos
  symbol: { src: "/imgs/brand/symbol.svg", width: 300, height: 144, alt: "Alas de Amor" },
} as const;

export type LogoVariant = keyof typeof variants;

export default function Logo({
  className = "",
  variant = "full",
  priority = false,
}: {
  className?: string;
  variant?: LogoVariant;
  priority?: boolean;
}) {
  const { src, width, height, alt } = variants[variant];
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      unoptimized
    />
  );
}
