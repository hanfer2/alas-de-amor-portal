export function AngelFeathers({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 200" fill="none" className={className} aria-hidden="true">
      <path d="M190 18C158 20 126 42 101 73C88 57 69 53 54 67C39 81 42 104 60 113C72 119 83 114 91 105C88 91 91 76 101 65C111 54 125 49 140 51C142 77 134 103 120 124C107 143 92 156 72 166C99 168 125 155 143 133C158 114 169 89 173 59C179 47 184 37 190 30V18Z" fill="url(#angelGrad)" stroke="#0f6675" strokeWidth="3" />
      <path d="M210 18C242 20 274 42 299 73C312 57 331 53 346 67C361 81 358 104 340 113C328 119 317 114 309 105C312 91 309 76 299 65C289 54 275 49 260 51C258 77 266 103 280 124C293 143 308 156 328 166C301 168 275 155 257 133C242 114 231 89 227 59C221 47 216 37 210 30V18Z" fill="url(#angelGrad)" stroke="#b4233f" strokeWidth="3" />
      <path d="M116 82C133 90 145 99 154 111M284 82C267 90 255 99 246 111" stroke="#f2c46d" strokeWidth="5" strokeLinecap="round" opacity="0.95" />
      <defs>
        <linearGradient id="angelGrad" x1="0" y1="0" x2="400" y2="200">
          <stop stopColor="#4c1d95" />
          <stop offset="0.55" stopColor="#0f6675" />
          <stop offset="1" stopColor="#f2c46d" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function EnergyWaves({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 200" fill="none" className={className} aria-hidden="true">
      <path d="M34 54C118 23 184 35 244 86C271 109 291 117 318 111" stroke="#0f6675" strokeWidth="3" strokeLinecap="round" />
      <path d="M28 101C121 69 185 79 243 116C270 133 294 139 326 128" stroke="#b4233f" strokeWidth="3" strokeLinecap="round" />
      <path d="M52 153C137 119 201 122 251 144C275 155 299 158 335 144" stroke="#b7791f" strokeWidth="3" strokeLinecap="round" />
      <path d="M318 111l20-13m-20 13 4 20M326 128l20-11m-20 11 5 18M335 144l20-7m-20 7 8 15" stroke="#4c1d95" strokeWidth="2" strokeLinecap="round" />
      <path d="M335 107l8 10-4 14-10-8 4-14Z" fill="#f2c46d" stroke="#8a5a00" strokeWidth="2" />
      <defs>
        <radialGradient id="waveGrad">
          <stop offset="0%" stopColor="#0f6675" />
          <stop offset="55%" stopColor="#4c1d95" />
          <stop offset="100%" stopColor="#b4233f" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export function LotusMandala({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden="true">
      <path d="M100 168C73 150 48 125 42 95C38 73 51 57 70 61C83 64 93 76 100 91C107 76 117 64 130 61C149 57 162 73 158 95C152 125 127 150 100 168Z" fill="#fff1f3" stroke="#b4233f" strokeWidth="3" />
      <path d="M100 150C79 129 66 108 68 85C70 68 84 60 96 70C101 74 103 82 100 91C97 82 99 74 104 70C116 60 130 68 132 85C134 108 121 129 100 150Z" fill="#e7f7f8" stroke="#0f6675" strokeWidth="3" />
      <path d="M100 47C109 61 112 75 100 94C88 75 91 61 100 47Z" fill="#fff1f3" stroke="#b4233f" strokeWidth="3" />
      <circle cx="100" cy="101" r="16" fill="#f2c46d" stroke="#8a5a00" strokeWidth="3" />
      <defs>
        <linearGradient id="lotusGrad" x1="0" y1="0" x2="200" y2="200">
          <stop stopColor="#b4233f" />
          <stop offset="0.55" stopColor="#4c1d95" />
          <stop offset="1" stopColor="#f2c46d" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function SparkleStars({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 150" fill="none" className={className} aria-hidden="true">
      <path d="M34 37C62 22 79 34 99 56C119 34 136 22 164 37C139 48 123 62 112 83C105 96 93 96 86 83C75 62 59 48 34 37Z" fill="#fff1f3" stroke="#b4233f" strokeWidth="3" />
      <path d="M366 37C338 22 321 34 301 56C281 34 264 22 236 37C261 48 277 62 288 83C295 96 307 96 314 83C325 62 341 48 366 37Z" fill="#fff1f3" stroke="#b4233f" strokeWidth="3" />
      <path d="M199 25v36M181 43h36" stroke="#0f6675" strokeWidth="3" strokeLinecap="round" />
      <path d="M200 70l7 13 14 2-10 10 3 14-14-7-14 7 3-14-10-10 14-2 7-13Z" fill="#f2c46d" stroke="#8a5a00" strokeWidth="2" />
      <defs>
        <linearGradient id="starGrad" x1="0" y1="0" x2="400" y2="150">
          <stop stopColor="#b7791f" />
          <stop offset="0.55" stopColor="#f2c46d" />
          <stop offset="1" stopColor="#b4233f" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function DovePeace({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 120" fill="none" className={className} aria-hidden="true">
      <path d="M36 78C57 59 81 48 109 49C128 50 147 56 164 61C183 67 202 64 221 54C216 78 195 91 167 89C144 87 123 77 103 73C84 69 65 77 48 91C38 97 31 89 36 78Z" fill="#fff1f3" stroke="#b4233f" strokeWidth="3" />
      <path d="M102 51C119 28 151 17 184 20C164 32 148 46 128 63C117 71 104 66 102 51Z" fill="#e7f7f8" stroke="#0f6675" strokeWidth="3" />
      <circle cx="184" cy="34" r="7" fill="#f2c46d" stroke="#8a5a00" strokeWidth="2" />
      <path d="M225 56l14 4-13 6M45 80l-13-4 7 12" stroke="#b7791f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="doveGrad" x1="0" y1="0" x2="300" y2="120">
          <stop stopColor="#b4233f" />
          <stop offset="0.55" stopColor="#4c1d95" />
          <stop offset="1" stopColor="#0f6675" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function CalendarWings({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 150 150" fill="none" className={className} aria-hidden="true">
      <path d="M35 45C17 30 10 28 5 31C18 45 24 59 37 67M115 45C133 30 140 28 145 31C132 45 126 59 113 67" stroke="#0f6675" strokeWidth="3" strokeLinecap="round" />
      <rect x="35" y="25" width="80" height="95" rx="6" fill="#fff8e8" stroke="#b4233f" strokeWidth="3" />
      <line x1="35" y1="55" x2="115" y2="55" stroke="#b7791f" strokeWidth="3" />
      <line x1="55" y1="15" x2="55" y2="35" stroke="#b4233f" strokeWidth="3" strokeLinecap="round" />
      <line x1="95" y1="15" x2="95" y2="35" stroke="#b4233f" strokeWidth="3" strokeLinecap="round" />
      <path d="M53 78h44M53 96h26" stroke="#0f6675" strokeWidth="3" strokeLinecap="round" />
      <circle cx="49" cy="78" r="3" fill="#f2c46d" stroke="#8a5a00" strokeWidth="1.5" />
      <circle cx="49" cy="96" r="3" fill="#f2c46d" stroke="#8a5a00" strokeWidth="1.5" />
      <defs>
        <linearGradient id="calGrad" x1="0" y1="0" x2="150" y2="150">
          <stop stopColor="#8a5a00" />
          <stop offset="0.5" stopColor="#b7791f" />
          <stop offset="1" stopColor="#0f6675" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function EditorialMarker({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 150" fill="none" className={className} aria-hidden="true">
      <path d="M42 25C58 18 78 18 100 28V125C78 115 58 115 42 122V25Z" fill="#fff8e8" stroke="#0f6675" strokeWidth="3" />
      <path d="M100 28C122 18 142 18 158 25V122C142 115 122 115 100 125V28Z" fill="#f5f3ff" stroke="#b4233f" strokeWidth="3" />
      <path d="M100 28V125" stroke="#b7791f" strokeWidth="3" />
      <path d="M58 48h27M58 63h29M58 78h20M115 48h27M115 63h25M115 78h20" stroke="#4c1d95" strokeWidth="3" strokeLinecap="round" />
      <path d="M137 18v-12l12 8 12-8v38" fill="#b4233f" stroke="#8a1c35" strokeWidth="2" strokeLinejoin="round" />
      <path d="M164 44l6 12 13 2-10 9 3 13-12-6-12 6 3-13-10-9 13-2 6-12Z" fill="#f2c46d" stroke="#8a5a00" strokeWidth="2" />
      <defs>
        <linearGradient id="bookGrad" x1="0" y1="0" x2="200" y2="150">
          <stop stopColor="#0f6675" />
          <stop offset="0.5" stopColor="#4c1d95" />
          <stop offset="1" stopColor="#b4233f" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function FloatingOrbs({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`} aria-hidden="true">
      <div className="absolute w-72 h-72 rounded-full bg-reiki-300/20 blur-3xl top-10 -left-20 animate-float-slow" />
      <div className="absolute w-56 h-56 rounded-full bg-reiki-200/15 blur-3xl top-40 right-10 animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute w-40 h-40 rounded-full bg-reiki-100/15 blur-3xl bottom-20 left-1/3 animate-float-delay" style={{ animationDelay: "4s" }} />
    </div>
  );
}

export function CredentialIcon({ variant, className = "" }: { variant: number; className?: string }) {
  const paths = [
    <><circle cx="24" cy="24" r="7" /><path d="M24 5v8M24 35v8M5 24h8M35 24h8M10 10l6 6M32 32l6 6M38 10l-6 6M16 32l-6 6" /></>,
    <><circle cx="24" cy="10" r="4" /><circle cx="11" cy="31" r="4" /><circle cx="37" cy="31" r="4" /><path d="M24 14v8M20 20l-7 7M28 20l7 7" /></>,
    <><path d="M24 5v34M12 19c4-5 8-7 12-7s8 2 12 7M12 29c4-5 8-7 12-7s8 2 12 7" /><circle cx="24" cy="24" r="3" fill="currentColor" /></>,
    <><circle cx="24" cy="24" r="13" /><circle cx="19" cy="21" r="2" fill="currentColor" /><circle cx="29" cy="21" r="2" fill="currentColor" /><path d="M18 29c4 3 8 3 12 0M18 11c2-6 10-6 12 0" /></>,
    <><path d="M24 5l4 9 10 1-8 7 3 10-9-5-9 5 3-10-8-7 10-1 4-9Z" /><path d="M24 27v12M19 34h10" /></>,
    <><path d="M24 5l4 10 10 4-10 4-4 10-4-10-10-4 10-4 4-10Z" /><path d="M24 15v8M20 19h8" /></>,
  ];
  return <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">{paths[variant % paths.length]}</svg>;
}
