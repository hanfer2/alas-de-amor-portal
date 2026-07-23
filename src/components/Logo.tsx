import Image from "next/image";

export default function Logo({ className = "w-10 h-10", size = 40 }: { className?: string; size?: number }) {
  return (
    <Image
      src="/imgs/logo.png"
      alt="Alas de Amor"
      width={size}
      height={size}
      className={className}
      priority
    />
  );
}
