export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="wingGrad" x1="4" y1="4" x2="52" y2="52">
          <stop stopColor="#a78bfa" />
          <stop offset="0.5" stopColor="#8b5cf6" />
          <stop offset="1" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="wingGrad2" x1="4" y1="4" x2="52" y2="52">
          <stop stopColor="#c4b5fd" />
          <stop offset="0.5" stopColor="#a78bfa" />
          <stop offset="1" stopColor="#34d399" />
        </linearGradient>
      </defs>
      {/* Left wing */}
      <path
        d="M28 14C24 14 18 18 16 24C14 18 8 16 6 22C4 28 6 34 10 38C12 40 16 42 20 44C22 44 24 43 26 42C24 38 22 34 20 30C18 26 16 22 18 18C20 14 24 12 28 12V14Z"
        fill="url(#wingGrad)"
        opacity="0.85"
      />
      {/* Left feather details */}
      <path d="M10 38C8 34 8 28 10 24" stroke="url(#wingGrad2)" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <path d="M14 40C12 36 11 30 12 26" stroke="url(#wingGrad2)" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <path d="M18 42C16 37 15 32 16 28" stroke="url(#wingGrad2)" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      
      {/* Right wing */}
      <path
        d="M28 14C32 14 38 18 40 24C42 18 48 16 50 22C52 28 50 34 46 38C44 40 40 42 36 44C34 44 32 43 30 42C32 38 34 34 36 30C38 26 40 22 38 18C36 14 32 12 28 12V14Z"
        fill="url(#wingGrad)"
        opacity="0.85"
      />
      {/* Right feather details */}
      <path d="M46 38C48 34 48 28 46 24" stroke="url(#wingGrad2)" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <path d="M42 40C44 36 45 30 44 26" stroke="url(#wingGrad2)" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <path d="M38 42C40 37 41 32 40 28" stroke="url(#wingGrad2)" strokeWidth="1" strokeLinecap="round" opacity="0.5" />

      {/* Center heart / glow */}
      <circle cx="28" cy="24" r="5" fill="url(#wingGrad)" />
      <circle cx="28" cy="24" r="3.5" fill="url(#wingGrad2)" />
      <circle cx="28" cy="23" r="1.5" fill="white" opacity="0.9" />
      
      {/* Subtle heart shape in center */}
      <path
        d="M28 28C28 28 25 25 23 23C21 21 21 19 23 18C25 17 27 19 28 21C29 19 31 17 33 18C35 19 35 21 33 23C31 25 28 28 28 28Z"
        fill="white"
        opacity="0.6"
      />
    </svg>
  );
}
