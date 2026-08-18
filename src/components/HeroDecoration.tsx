export function AngelFeathers({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 200" fill="none" className={className} aria-hidden="true">
      <path d="M180 10C160 10 130 30 110 60C100 45 80 35 65 50C50 65 55 85 68 95C75 100 85 100 92 95C88 80 90 65 98 55C105 45 115 40 128 40C135 60 130 85 125 105C115 125 100 140 80 150C95 155 115 150 130 135C140 125 148 108 152 90C158 75 160 55 162 40C168 35 175 30 180 25V10Z" fill="url(#angelGrad)" opacity="0.58" stroke="#0f6675" strokeWidth="2" />
      <path d="M220 10C240 10 270 30 290 60C300 45 320 35 335 50C350 65 345 85 332 95C325 100 315 100 308 95C312 80 310 65 302 55C295 45 285 40 272 40C265 60 270 85 275 105C285 125 300 140 320 150C305 155 285 150 270 135C260 125 252 108 248 90C242 75 240 55 238 40C232 35 225 30 220 25V10Z" fill="url(#angelGrad)" opacity="0.58" stroke="#b7791f" strokeWidth="2" />
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
      <circle cx="300" cy="100" r="80" stroke="url(#waveGrad)" strokeWidth="3" opacity="0.65" />
      <circle cx="300" cy="100" r="120" stroke="url(#waveGrad)" strokeWidth="2" opacity="0.46" />
      <circle cx="300" cy="100" r="160" stroke="url(#waveGrad)" strokeWidth="2" opacity="0.34" />
      <circle cx="300" cy="100" r="40" stroke="#b4233f" strokeWidth="3" opacity="0.7" />
      <circle cx="300" cy="100" r="6" fill="#f2c46d" stroke="#8a5a00" strokeWidth="2" opacity="0.9" />
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
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <ellipse
          key={i}
          cx={100 + Math.cos((angle * Math.PI) / 180) * 35}
          cy={100 + Math.sin((angle * Math.PI) / 180) * 35}
          rx="12"
          ry="30"
          transform={`rotate(${angle} ${100 + Math.cos((angle * Math.PI) / 180) * 35} ${100 + Math.sin((angle * Math.PI) / 180) * 35})`}
          fill="url(#lotusGrad)"
          stroke="#b4233f"
          strokeWidth="1.5"
          opacity="0.62"
        />
      ))}
      <circle cx="100" cy="100" r="22" fill="url(#lotusGrad)" stroke="#8a5a00" strokeWidth="2" opacity="0.72" />
      <circle cx="100" cy="100" r="10" fill="#f2c46d" stroke="#8a5a00" strokeWidth="2" opacity="0.9" />
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
      {[[40,30,4],[120,80,6],[200,25,3],[280,70,5],[350,40,4],[60,110,3],[180,130,4],[300,120,5],[150,50,2],[250,100,3]].map(([x,y,r], i) => (
        <g key={i} opacity={0.35 + (i % 3) * 0.1}>
          <path
            d={`M${x} ${y - r}L${x + r * 0.3} ${y - r * 0.3}L${x + r} ${y}L${x + r * 0.3} ${y + r * 0.3}L${x} ${y + r}L${x - r * 0.3} ${y + r * 0.3}L${x - r} ${y}L${x - r * 0.3} ${y - r * 0.3}Z`}
            fill="url(#starGrad)"
            stroke="#8a5a00"
            strokeWidth="1"
          />
        </g>
      ))}
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
      <path d="M40 80C50 70 80 50 100 40C110 35 140 30 160 28C180 26 200 30 210 35C220 40 225 50 220 55C215 60 200 62 180 60C160 58 140 52 120 48C100 44 80 50 70 55C60 60 55 70 50 75C42 82 38 78 40 80Z" fill="url(#doveGrad)" opacity="0.62" stroke="#b4233f" strokeWidth="2" />
      <path d="M120 45C130 30 160 20 190 18C200 17 210 22 200 28C190 34 160 42 130 48C120 50 115 52 120 45Z" fill="url(#doveGrad)" opacity="0.58" stroke="#0f6675" strokeWidth="2" />
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
      <rect x="35" y="25" width="80" height="95" rx="6" stroke="url(#calGrad)" strokeWidth="3" opacity="0.7" />
      <line x1="35" y1="55" x2="115" y2="55" stroke="#b7791f" strokeWidth="2" opacity="0.8" />
      <line x1="55" y1="15" x2="55" y2="35" stroke="#b4233f" strokeWidth="2" opacity="0.72" />
      <line x1="95" y1="15" x2="95" y2="35" stroke="#b4233f" strokeWidth="2" opacity="0.72" />
      <path d="M60 30L50 10C48 6 52 4 55 8L63 26" fill="url(#calGrad)" stroke="#b7791f" strokeWidth="2" opacity="0.7" />
      <path d="M90 30L100 10C102 6 98 4 95 8L87 26" fill="url(#calGrad)" stroke="#0f6675" strokeWidth="2" opacity="0.7" />
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

export function OpenBook({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 150" fill="none" className={className} aria-hidden="true">
      <path d="M40 30C50 25 70 20 100 22C130 24 150 28 160 35V120C150 115 130 110 100 108C70 106 50 110 40 115V30Z" fill="url(#bookGrad)" opacity="0.62" stroke="#0f6675" strokeWidth="2" />
      <path d="M40 30C50 35 70 40 100 38C130 36 150 32 160 35" stroke="#b4233f" strokeWidth="2" opacity="0.7" />
      <line x1="100" y1="22" x2="100" y2="108" stroke="#b7791f" strokeWidth="2" opacity="0.8" />
      <line x1="55" y1="45" x2="95" y2="43" stroke="#4c1d95" strokeWidth="1.5" opacity="0.55" />
      <line x1="55" y1="58" x2="90" y2="56" stroke="#4c1d95" strokeWidth="1.5" opacity="0.55" />
      <line x1="55" y1="71" x2="88" y2="69" stroke="#4c1d95" strokeWidth="1.5" opacity="0.55" />
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
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      <div className="absolute w-72 h-72 rounded-full bg-reiki-300/20 blur-3xl top-10 -left-20 animate-float-slow" />
      <div className="absolute w-56 h-56 rounded-full bg-reiki-200/15 blur-3xl top-40 right-10 animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute w-40 h-40 rounded-full bg-reiki-100/15 blur-3xl bottom-20 left-1/3 animate-float-delay" style={{ animationDelay: "4s" }} />
    </div>
  );
}
