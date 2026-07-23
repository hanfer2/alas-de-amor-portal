export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="logoGrad1" x1="4" y1="4" x2="52" y2="52">
          <stop stopColor="#8b5cf6" />
          <stop offset="0.5" stopColor="#7c3aed" />
          <stop offset="1" stopColor="#5b21b6" />
        </linearGradient>
        <linearGradient id="logoGrad2" x1="4" y1="4" x2="52" y2="52">
          <stop stopColor="#c4b5fd" />
          <stop offset="0.5" stopColor="#a78bfa" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>

      {/* Outer ring */}
      <circle cx="28" cy="28" r="27" fill="url(#logoGrad1)" opacity="0.15" />
      <circle cx="28" cy="28" r="26" stroke="url(#logoGrad1)" strokeWidth="1" opacity="0.4" />
      
      {/* Left wing */}
      <path
        d="M28 16C24 16 18 20 16 26C14 20 8 18 6 24C4 30 6 36 10 40C12 42 16 44 20 46C22 46 24 45 26 44C24 40 22 36 20 32C18 28 16 24 18 20C20 16 24 14 28 14V16Z"
        fill="url(#logoGrad1)"
        opacity="0.85"
      />
      <path d="M10 40C8 36 8 30 10 26" stroke="url(#logoGrad2)" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
      <path d="M14 42C12 38 11 32 12 28" stroke="url(#logoGrad2)" strokeWidth="0.8" strokeLinecap="round" opacity="0.45" />
      <path d="M18 44C16 39 15 34 16 30" stroke="url(#logoGrad2)" strokeWidth="0.8" strokeLinecap="round" opacity="0.45" />

      {/* Right wing */}
      <path
        d="M28 16C32 16 38 20 40 26C42 20 48 18 50 24C52 30 50 36 46 40C44 42 40 44 36 46C34 46 32 45 30 44C32 40 34 36 36 32C38 28 40 24 38 20C36 16 32 14 28 14V16Z"
        fill="url(#logoGrad1)"
        opacity="0.85"
      />
      <path d="M46 40C48 36 48 30 46 26" stroke="url(#logoGrad2)" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
      <path d="M42 42C44 38 45 32 44 28" stroke="url(#logoGrad2)" strokeWidth="0.8" strokeLinecap="round" opacity="0.45" />
      <path d="M38 44C40 39 41 34 40 30" stroke="url(#logoGrad2)" strokeWidth="0.8" strokeLinecap="round" opacity="0.45" />

      {/* Center circle with inner glow */}
      <circle cx="28" cy="25" r="7" fill="url(#logoGrad1)" />
      <circle cx="28" cy="25" r="5" fill="url(#logoGrad2)" />
      <circle cx="28" cy="24" r="2.5" fill="white" opacity="0.85" />

      {/* Heart in center */}
      <path
        d="M28 32C28 32 25 29 23 27C21 25 21 23 23 22C25 21 27 23 28 25C29 23 31 21 33 22C35 23 35 25 33 27C31 29 28 32 28 32Z"
        fill="white"
        opacity="0.5"
      />
    </svg>
  );
}
