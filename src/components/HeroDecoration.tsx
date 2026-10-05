// Ilustraciones decorativas de las cabeceras. Comparten el lenguaje del logo: plumas con degradado
// aguamarina y rosa, trazo blanco, corazón rojo y un brillo suave detrás. Cada SVG usa ids propios.

const FEATHER =
  "M0,0 C22,-12 66,-20 104,-25 C116,-26 125,-22 123,-16 C119,-8 96,-1 66,3 C36,6 14,4 0,0Z";
const HEART = "M0,14 C-26,-4 -20,-24 -8,-24 C-3,-24 0,-20 0,-16 C0,-20 3,-24 8,-24 C20,-24 26,-4 0,14Z";
const SPARKLE = "M0,-10 C1,-3 3,-1 10,0 C3,1 1,3 0,10 C-1,3 -3,1 -10,0 C-3,-1 -1,-3 0,-10Z";

type Tone = "aqua" | "rose";

function Defs({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={`${id}-aqua`} x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#3FB2BC" />
        <stop offset="1" stopColor="#7FD3D9" />
      </linearGradient>
      <linearGradient id={`${id}-rose`} x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#E8595B" />
        <stop offset="1" stopColor="#F9D6D6" />
      </linearGradient>
      <radialGradient id={`${id}-heart`} cx=".38" cy=".3" r=".9">
        <stop offset="0" stopColor="#FF6A6E" />
        <stop offset=".55" stopColor="#DB090C" />
        <stop offset="1" stopColor="#C8080C" />
      </radialGradient>
      <radialGradient id={`${id}-glow`} cx=".5" cy=".5" r=".5">
        <stop offset="0" stopColor="#F9D6D6" stopOpacity=".9" />
        <stop offset="1" stopColor="#F9D6D6" stopOpacity="0" />
      </radialGradient>
      <radialGradient id={`${id}-mist`} cx=".5" cy=".5" r=".5">
        <stop offset="0" stopColor="#C8F0F2" stopOpacity=".9" />
        <stop offset="1" stopColor="#C8F0F2" stopOpacity="0" />
      </radialGradient>
    </defs>
  );
}

function Feather({ id, tone, x, y, rot, s }: { id: string; tone: Tone; x: number; y: number; rot: number; s: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${s})`}>
      <path d={FEATHER} fill={`url(#${id}-${tone})`} stroke="#fff" strokeOpacity=".9" strokeWidth="1.3" />
      <path d="M6,0 C34,-6 74,-12 112,-19" fill="none" stroke="#fff" strokeOpacity=".6" strokeWidth="1.2" strokeLinecap="round" />
    </g>
  );
}

// Ala completa que se abre hacia la derecha; con flip=true se refleja hacia la izquierda.
function Wing({ id, x, y, s, flip = false, spread = 1 }: { id: string; x: number; y: number; s: number; flip?: boolean; spread?: number }) {
  const upper = [
    { rot: -18 * spread, k: 1 },
    { rot: -30 * spread, k: 0.86 },
    { rot: -42 * spread, k: 0.7 },
  ];
  const lower = [
    { rot: 4 * spread, k: 1 },
    { rot: 14 * spread, k: 0.86 },
    { rot: 24 * spread, k: 0.7 },
  ];
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -s : s} ${s})`}>
      {lower.map((f) => (
        <Feather key={`l${f.rot}`} id={id} tone="aqua" x={0} y={6} rot={f.rot} s={f.k} />
      ))}
      {upper.map((f) => (
        <Feather key={`u${f.rot}`} id={id} tone="rose" x={0} y={0} rot={f.rot} s={f.k} />
      ))}
    </g>
  );
}

function Heart({ id, x, y, s = 1 }: { id: string; x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d={HEART} fill={`url(#${id}-heart)`} stroke="#fff" strokeOpacity=".85" strokeWidth="1.4" />
      <ellipse cx="-9" cy="-13" rx="4.5" ry="2.6" fill="#fff" opacity=".55" transform="rotate(-30 -9 -13)" />
    </g>
  );
}

function Sparkle({ x, y, s = 1, color = "#7FD3D9" }: { x: number; y: number; s?: number; color?: string }) {
  return <path d={SPARKLE} fill={color} transform={`translate(${x} ${y}) scale(${s})`} />;
}

// Servicios: alas abiertas con un corazón al centro.
export function WingedWaves({ className = "" }: { className?: string }) {
  const id = "ww";
  return (
    <svg viewBox="0 0 280 170" fill="none" className={className} aria-hidden="true">
      <Defs id={id} />
      <ellipse cx="140" cy="90" rx="124" ry="68" fill={`url(#${id}-mist)`} />
      <circle cx="140" cy="88" r="46" fill={`url(#${id}-glow)`} />
      <Wing id={id} x={149} y={84} s={0.78} />
      <Wing id={id} x={131} y={84} s={0.78} flip />
      <Heart id={id} x={140} y={88} s={1} />
      <Sparkle x={22} y={34} s={1} />
      <Sparkle x={258} y={132} s={1.1} color="#F2A0A0" />
      <Sparkle x={40} y={140} s={0.6} color="#F2A0A0" />
      <Sparkle x={250} y={34} s={0.7} />
    </svg>
  );
}

// Nosotros: loto formado por plumas.
export function FeatherLotus({ className = "" }: { className?: string }) {
  const id = "fl";
  const back = [
    { rot: -90, k: 0.8 },
    { rot: -62, k: 0.7 },
    { rot: -118, k: 0.7 },
    { rot: -34, k: 0.56 },
    { rot: -146, k: 0.56 },
  ];
  const front = [
    { rot: -76, k: 0.62 },
    { rot: -104, k: 0.62 },
    { rot: -50, k: 0.5 },
    { rot: -130, k: 0.5 },
  ];
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden="true">
      <Defs id={id} />
      <circle cx="100" cy="100" r="92" fill={`url(#${id}-glow)`} />
      {back.map((f) => (
        <Feather key={f.rot} id={id} tone="aqua" x={100} y={150} rot={f.rot} s={f.k} />
      ))}
      {front.map((f) => (
        <Feather key={f.rot} id={id} tone="rose" x={100} y={152} rot={f.rot} s={f.k} />
      ))}
      <Heart id={id} x={100} y={140} s={0.62} />
      <path d="M52 166C74 176 126 176 148 166" stroke="#7FD3D9" strokeWidth="2.4" strokeLinecap="round" opacity=".75" />
      <path d="M68 178C86 185 114 185 132 178" stroke="#C8F0F2" strokeWidth="2.4" strokeLinecap="round" />
      <Sparkle x={30} y={52} s={0.9} />
      <Sparkle x={172} y={70} s={0.7} color="#F2A0A0" />
      <Sparkle x={160} y={26} s={0.5} />
    </svg>
  );
}

// Agendar: calendario con alas pequeñas y un día marcado con corazón.
export function WingedCalendar({ className = "" }: { className?: string }) {
  const id = "wc";
  const days = [0, 1, 2].flatMap((r) => [0, 1, 2].map((c) => ({ r, c })));
  return (
    <svg viewBox="0 0 200 160" fill="none" className={className} aria-hidden="true">
      <Defs id={id} />
      <circle cx="100" cy="82" r="76" fill={`url(#${id}-glow)`} />
      <Wing id={id} x={64} y={88} s={0.46} flip />
      <Wing id={id} x={136} y={88} s={0.46} />
      <rect x="62" y="28" width="76" height="98" rx="12" fill="#FFFBF8" stroke="#F2A0A0" strokeWidth="2" />
      <path d="M62 56V40a12 12 0 0 1 12-12h52a12 12 0 0 1 12 12v16Z" fill={`url(#${id}-rose)`} />
      <rect x="82" y="20" width="5" height="16" rx="2.5" fill="#7FD3D9" stroke="#fff" strokeWidth="1.2" />
      <rect x="113" y="20" width="5" height="16" rx="2.5" fill="#7FD3D9" stroke="#fff" strokeWidth="1.2" />
      {days.map(({ r, c }) =>
        r === 1 && c === 1 ? (
          <Heart key="h" id={id} x={100} y={89} s={0.34} />
        ) : (
          <rect key={`${r}${c}`} x={76 + c * 20} y={68 + r * 20} width="12" height="12" rx="4" fill="#C8F0F2" />
        ),
      )}
      <Sparkle x={34} y={34} s={0.8} />
      <Sparkle x={168} y={124} s={0.7} color="#F2A0A0" />
    </svg>
  );
}

// Contacto: sobre con sello de corazón y alas.
export function WingedEnvelope({ className = "" }: { className?: string }) {
  const id = "we";
  return (
    <svg viewBox="0 0 240 150" fill="none" className={className} aria-hidden="true">
      <Defs id={id} />
      <ellipse cx="120" cy="78" rx="108" ry="56" fill={`url(#${id}-mist)`} />
      <Wing id={id} x={80} y={88} s={0.52} flip />
      <Wing id={id} x={160} y={88} s={0.52} />
      <rect x="78" y="48" width="84" height="58" rx="10" fill="#FFFBF8" stroke="#F2A0A0" strokeWidth="2" />
      <path d="M82 56l38 30 38-30" stroke={`url(#${id}-aqua)`} strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
      <Heart id={id} x={120} y={90} s={0.42} />
      <Sparkle x={26} y={34} s={0.9} />
      <Sparkle x={214} y={118} s={0.8} color="#F2A0A0" />
      <Sparkle x={206} y={30} s={0.5} />
    </svg>
  );
}

// Testimonios: globo de conversación con corazón y alas.
export function HeartBubble({ className = "" }: { className?: string }) {
  const id = "hb";
  return (
    <svg viewBox="0 0 240 160" fill="none" className={className} aria-hidden="true">
      <Defs id={id} />
      <ellipse cx="120" cy="82" rx="108" ry="62" fill={`url(#${id}-mist)`} />
      <Wing id={id} x={88} y={66} s={0.55} flip spread={0.9} />
      <Wing id={id} x={152} y={66} s={0.55} spread={0.9} />
      <path d="M100 34h40a16 16 0 0 1 16 16v22a16 16 0 0 1-16 16h-18l-14 14v-14h-8a16 16 0 0 1-16-16V50a16 16 0 0 1 16-16Z" fill="#FFFBF8" stroke="#F2A0A0" strokeWidth="2" />
      <Heart id={id} x={120} y={60} s={0.8} />
      <Sparkle x={24} y={40} s={0.9} />
      <Sparkle x={216} y={126} s={0.9} color="#F2A0A0" />
      <Sparkle x={208} y={34} s={0.5} />
    </svg>
  );
}

// Blog: libro abierto con marcador de corazón y una pluma.
export function FeatherBook({ className = "" }: { className?: string }) {
  const id = "fb";
  return (
    <svg viewBox="0 0 200 150" fill="none" className={className} aria-hidden="true">
      <Defs id={id} />
      <circle cx="100" cy="82" r="72" fill={`url(#${id}-glow)`} />
      <path d="M100 52C84 42 58 42 38 50V118C58 110 84 110 100 120Z" fill="#FFFBF8" stroke="#F2A0A0" strokeWidth="2" strokeLinejoin="round" />
      <path d="M100 52C116 42 142 42 162 50V118C142 110 116 110 100 120Z" fill="#FFFBF8" stroke="#7FD3D9" strokeWidth="2" strokeLinejoin="round" />
      <path d="M52 66c12-3 24-2 34 3M52 80c12-3 24-2 34 3M52 94c12-3 24-2 34 3" stroke="#F9D6D6" strokeWidth="3" strokeLinecap="round" />
      <path d="M148 66c-12-3-24-2-34 3M148 80c-12-3-24-2-34 3" stroke="#C8F0F2" strokeWidth="3" strokeLinecap="round" />
      <Heart id={id} x={100} y={44} s={0.5} />
      <Feather id={id} tone="rose" x={128} y={104} rot={-58} s={0.62} />
      <Feather id={id} tone="aqua" x={132} y={104} rot={-40} s={0.5} />
      <Sparkle x={30} y={36} s={0.8} />
      <Sparkle x={176} y={30} s={0.6} color="#F2A0A0" />
    </svg>
  );
}

export function FloatingOrbs({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`} aria-hidden="true">
      <div className="absolute w-72 h-72 rounded-full bg-reiki-300/20 blur-3xl top-10 -left-20 animate-float-slow" />
      <div className="absolute w-56 h-56 rounded-full bg-aqua-200/40 blur-3xl top-40 right-10 animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute w-40 h-40 rounded-full bg-aqua-300/20 blur-3xl bottom-20 left-1/3 animate-float-delay" style={{ animationDelay: "4s" }} />
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
