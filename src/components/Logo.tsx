import Image from "next/image";

export default function Logo({
  className = "",
  size = 80,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <Image
      src="/imgs/logo.png"
      alt="Alas de Amor"
      width={size * 2}
      height={size}
      className={className}
      priority
      style={{ width: "auto", height: "auto", maxWidth: "100%" }}
    />
  );
}
