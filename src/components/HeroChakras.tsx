export function HeroChakras({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 440" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="chakraBodyFill" x1="0" y1="0" x2="0" y2="440" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ffffff"/>
          <stop offset="0.5" stopColor="#fefcfb"/>
          <stop offset="1" stopColor="#fff8e8"/>
        </linearGradient>
        <linearGradient id="chakraBrandStroke" x1="0" y1="0" x2="300" y2="440" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#4c1d95"/>
          <stop offset="0.5" stopColor="#0f6675"/>
          <stop offset="1" stopColor="#b7791f"/>
        </linearGradient>
        <radialGradient id="chakraGoldCore" cx="0.5" cy="0.42" r="0.75">
          <stop offset="0" stopColor="#fbe9b6"/>
          <stop offset="0.55" stopColor="#f2c46d"/>
          <stop offset="1" stopColor="#b7791f"/>
        </radialGradient>
        <radialGradient id="chakraHaloRed" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0.7" stopColor="#d63333" stopOpacity="0.30"/>
          <stop offset="1" stopColor="#d63333" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="chakraHaloOrange" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0.7" stopColor="#f0761e" stopOpacity="0.30"/>
          <stop offset="1" stopColor="#f0761e" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="chakraHaloYellow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0.7" stopColor="#f2b400" stopOpacity="0.30"/>
          <stop offset="1" stopColor="#f2b400" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="chakraHaloGreen" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0.7" stopColor="#1fa35c" stopOpacity="0.30"/>
          <stop offset="1" stopColor="#1fa35c" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="chakraHaloBlue" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0.7" stopColor="#2f6fe0" stopOpacity="0.30"/>
          <stop offset="1" stopColor="#2f6fe0" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="chakraHaloIndigo" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0.7" stopColor="#4f46e5" stopOpacity="0.30"/>
          <stop offset="1" stopColor="#4f46e5" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="chakraHaloViolet" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0.7" stopColor="#8b5cf6" stopOpacity="0.30"/>
          <stop offset="1" stopColor="#8b5cf6" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="chakraCoreRed" cx="0.5" cy="0.45" r="0.7">
          <stop offset="0" stopColor="#f07575"/>
          <stop offset="0.6" stopColor="#d63333"/>
          <stop offset="1" stopColor="#a42020"/>
        </radialGradient>
        <radialGradient id="chakraCoreOrange" cx="0.5" cy="0.45" r="0.7">
          <stop offset="0" stopColor="#ffb066"/>
          <stop offset="0.6" stopColor="#f0761e"/>
          <stop offset="1" stopColor="#b84e08"/>
        </radialGradient>
        <radialGradient id="chakraCoreYellow" cx="0.5" cy="0.45" r="0.7">
          <stop offset="0" stopColor="#ffe082"/>
          <stop offset="0.6" stopColor="#f2b400"/>
          <stop offset="1" stopColor="#b8860b"/>
        </radialGradient>
        <radialGradient id="chakraCoreGreen" cx="0.5" cy="0.45" r="0.7">
          <stop offset="0" stopColor="#86e0ae"/>
          <stop offset="0.6" stopColor="#1fa35c"/>
          <stop offset="1" stopColor="#117a43"/>
        </radialGradient>
        <radialGradient id="chakraCoreBlue" cx="0.5" cy="0.45" r="0.7">
          <stop offset="0" stopColor="#8fb6ff"/>
          <stop offset="0.6" stopColor="#2f6fe0"/>
          <stop offset="1" stopColor="#1e47a8"/>
        </radialGradient>
        <radialGradient id="chakraCoreIndigo" cx="0.5" cy="0.45" r="0.7">
          <stop offset="0" stopColor="#aeb6ff"/>
          <stop offset="0.6" stopColor="#4f46e5"/>
          <stop offset="1" stopColor="#372fa8"/>
        </radialGradient>
        <radialGradient id="chakraCoreViolet" cx="0.5" cy="0.45" r="0.7">
          <stop offset="0" stopColor="#d1c4ff"/>
          <stop offset="0.6" stopColor="#8b5cf6"/>
          <stop offset="1" stopColor="#5b21b6"/>
        </radialGradient>
        <path id="chakraPetal" d="M0 -20 C9 -7, 9 7, 0 20 C-9 7, -9 -7, 0 -20 Z"/>
        <path id="chakraPetalSlim" d="M0 -20 C5.5 -7, 5.5 7, 0 20 C-5.5 7, -5.5 -7, 0 -20 Z"/>
        <path id="chakraRay" d="M0 -23 L0 -30" stroke="#b7791f" strokeWidth="3" strokeLinecap="round"/>
      </defs>

      <ellipse cx="150" cy="432" rx="64" ry="7" fill="#4c1d95" opacity="0.10"/>
      <path d="M108 420 Q150 433 192 420" stroke="#b4233f" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M122 428 Q150 437 178 428" stroke="#0f6675" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.8"/>

      <path d="M150 120 L150 394" stroke="#b7791f" strokeWidth="2.5" strokeDasharray="1 7" strokeLinecap="round" opacity="0.85"/>
      <circle cx="150" cy="184" r="2.2" fill="#f2c46d"/>
      <circle cx="150" cy="242" r="2.2" fill="#f2c46d"/>
      <circle cx="150" cy="300" r="2.2" fill="#f2c46d"/>
      <circle cx="150" cy="356" r="2.2" fill="#f2c46d"/>

      <path d="M135 84 L165 84 L173 100 C196 110 214 128 224 150 C234 172 238 200 236 232 C233 280 220 330 200 358 L150 378 L100 358 C80 330 67 280 64 232 C62 200 66 172 76 150 C86 128 104 110 127 100 L135 84 Z" fill="url(#chakraBodyFill)" stroke="url(#chakraBrandStroke)" strokeWidth="3" strokeLinejoin="round"/>
      <path d="M127 100 C136 108 164 108 173 100" stroke="#f2c46d" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M78 148 l5 5 -5 5 -5 -5 Z" fill="#b4233f" opacity="0.85"/>
      <path d="M222 148 l5 5 -5 5 -5 -5 Z" fill="#b4233f" opacity="0.85"/>
      <circle cx="150" cy="86" r="26" fill="url(#chakraBodyFill)" stroke="url(#chakraBrandStroke)" strokeWidth="3"/>

      <g transform="translate(150 384)">
        <circle r="36" fill="url(#chakraHaloRed)"/>
        <circle r="25" fill="none" stroke="#d63333" strokeWidth="2" strokeDasharray="2 5" opacity="0.7"/>
        <g fill="#fff8e8" stroke="#b4233f" strokeWidth="2">
          <use href="#chakraPetal" transform="rotate(0) scale(0.85)"/>
          <use href="#chakraPetal" transform="rotate(90) scale(0.85)"/>
          <use href="#chakraPetal" transform="rotate(180) scale(0.85)"/>
          <use href="#chakraPetal" transform="rotate(270) scale(0.85)"/>
        </g>
        <circle r="12" fill="#fefcfb" stroke="#a42020" strokeWidth="2"/>
        <rect x="-7" y="-7" width="14" height="14" transform="rotate(45)" fill="none" stroke="#a42020" strokeWidth="2"/>
        <circle r="6" fill="url(#chakraCoreRed)" stroke="#8a1c1c" strokeWidth="2"/>
        <circle r="2" fill="#f2c46d"/>
      </g>

      <g transform="translate(150 326)">
        <circle r="36" fill="url(#chakraHaloOrange)"/>
        <circle r="25" fill="none" stroke="#f0761e" strokeWidth="2" strokeDasharray="2 5" opacity="0.7"/>
        <g fill="#fff8e8" stroke="#b7791f" strokeWidth="2">
          <use href="#chakraPetal" transform="rotate(0) scale(0.9)"/>
          <use href="#chakraPetal" transform="rotate(60) scale(0.9)"/>
          <use href="#chakraPetal" transform="rotate(120) scale(0.9)"/>
          <use href="#chakraPetal" transform="rotate(180) scale(0.9)"/>
          <use href="#chakraPetal" transform="rotate(240) scale(0.9)"/>
          <use href="#chakraPetal" transform="rotate(300) scale(0.9)"/>
        </g>
        <circle r="11" fill="#fefcfb" stroke="#b84e08" strokeWidth="2"/>
        <path d="M0 -8 A9 9 0 1 0 0 8 A5 5 0 1 1 0 -8 Z" fill="url(#chakraCoreOrange)" stroke="#b84e08" strokeWidth="2"/>
        <circle r="2.5" fill="#f2c46d"/>
      </g>

      <g transform="translate(150 268)">
        <circle r="40" fill="url(#chakraHaloYellow)"/>
        <circle r="30" fill="none" stroke="#f2b400" strokeWidth="2" strokeDasharray="2 5" opacity="0.7"/>
        <g stroke="#b7791f">
          <use href="#chakraRay" transform="rotate(0)"/>
          <use href="#chakraRay" transform="rotate(36)"/>
          <use href="#chakraRay" transform="rotate(72)"/>
          <use href="#chakraRay" transform="rotate(108)"/>
          <use href="#chakraRay" transform="rotate(144)"/>
          <use href="#chakraRay" transform="rotate(180)"/>
          <use href="#chakraRay" transform="rotate(216)"/>
          <use href="#chakraRay" transform="rotate(252)"/>
          <use href="#chakraRay" transform="rotate(288)"/>
          <use href="#chakraRay" transform="rotate(324)"/>
        </g>
        <circle r="22" fill="#fff8e8" stroke="#8a5a00" strokeWidth="3"/>
        <circle r="13" fill="url(#chakraCoreYellow)" stroke="#b8860b" strokeWidth="2"/>
        <circle r="3.5" fill="#ffffff" stroke="#8a5a00" strokeWidth="2"/>
      </g>

      <g transform="translate(150 208)">
        <circle r="42" fill="url(#chakraHaloGreen)"/>
        <circle r="32" fill="none" stroke="#1fa35c" strokeWidth="2" strokeDasharray="2 5" opacity="0.7"/>
        <g fill="#fff8e8" stroke="#0f6675" strokeWidth="2">
          <use href="#chakraPetal" transform="rotate(0) scale(1.2)"/>
          <use href="#chakraPetal" transform="rotate(30) scale(1.2)"/>
          <use href="#chakraPetal" transform="rotate(60) scale(1.2)"/>
          <use href="#chakraPetal" transform="rotate(90) scale(1.2)"/>
          <use href="#chakraPetal" transform="rotate(120) scale(1.2)"/>
          <use href="#chakraPetal" transform="rotate(150) scale(1.2)"/>
          <use href="#chakraPetal" transform="rotate(180) scale(1.2)"/>
          <use href="#chakraPetal" transform="rotate(210) scale(1.2)"/>
          <use href="#chakraPetal" transform="rotate(240) scale(1.2)"/>
          <use href="#chakraPetal" transform="rotate(270) scale(1.2)"/>
          <use href="#chakraPetal" transform="rotate(300) scale(1.2)"/>
          <use href="#chakraPetal" transform="rotate(330) scale(1.2)"/>
        </g>
        <circle r="17" fill="#fefcfb" stroke="#117a43" strokeWidth="2"/>
        <path d="M0 -12 L10 7 L-10 7 Z" fill="none" stroke="#0f6675" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M0 12 L-10 -7 L10 -7 Z" fill="none" stroke="#b4233f" strokeWidth="2" strokeLinejoin="round"/>
        <circle r="9" fill="url(#chakraCoreGreen)" stroke="#117a43" strokeWidth="2"/>
        <circle r="2.5" fill="#f2c46d"/>
      </g>

      <g transform="translate(150 152)">
        <circle r="38" fill="url(#chakraHaloBlue)"/>
        <circle r="28" fill="none" stroke="#2f6fe0" strokeWidth="2" strokeDasharray="2 5" opacity="0.7"/>
        <g fill="#fff8e8" stroke="#0f6675" strokeWidth="2">
          <use href="#chakraPetalSlim" transform="rotate(0) scale(0.95)"/>
          <use href="#chakraPetalSlim" transform="rotate(22.5) scale(0.95)"/>
          <use href="#chakraPetalSlim" transform="rotate(45) scale(0.95)"/>
          <use href="#chakraPetalSlim" transform="rotate(67.5) scale(0.95)"/>
          <use href="#chakraPetalSlim" transform="rotate(90) scale(0.95)"/>
          <use href="#chakraPetalSlim" transform="rotate(112.5) scale(0.95)"/>
          <use href="#chakraPetalSlim" transform="rotate(135) scale(0.95)"/>
          <use href="#chakraPetalSlim" transform="rotate(157.5) scale(0.95)"/>
          <use href="#chakraPetalSlim" transform="rotate(180) scale(0.95)"/>
          <use href="#chakraPetalSlim" transform="rotate(202.5) scale(0.95)"/>
          <use href="#chakraPetalSlim" transform="rotate(225) scale(0.95)"/>
          <use href="#chakraPetalSlim" transform="rotate(247.5) scale(0.95)"/>
          <use href="#chakraPetalSlim" transform="rotate(270) scale(0.95)"/>
          <use href="#chakraPetalSlim" transform="rotate(292.5) scale(0.95)"/>
          <use href="#chakraPetalSlim" transform="rotate(315) scale(0.95)"/>
          <use href="#chakraPetalSlim" transform="rotate(337.5) scale(0.95)"/>
        </g>
        <circle r="14" fill="#fefcfb" stroke="#1e47a8" strokeWidth="2"/>
        <path d="M0 10 L-8 -5 L8 -5 Z" fill="none" stroke="#0f6675" strokeWidth="2" strokeLinejoin="round"/>
        <circle r="8" fill="url(#chakraCoreBlue)" stroke="#1e47a8" strokeWidth="2"/>
        <circle r="2" fill="#f2c46d"/>
      </g>

      <g transform="translate(150 94)">
        <circle r="32" fill="url(#chakraHaloIndigo)"/>
        <circle r="23" fill="none" stroke="#4f46e5" strokeWidth="2" strokeDasharray="2 5" opacity="0.7"/>
        <g fill="#fff8e8" stroke="#7c3aed" strokeWidth="2">
          <use href="#chakraPetal" transform="rotate(270) scale(0.75)"/>
          <use href="#chakraPetal" transform="rotate(90) scale(0.75)"/>
        </g>
        <circle r="12" fill="#fefcfb" stroke="#372fa8" strokeWidth="2"/>
        <path d="M-8 0 C-4 -5.5, 4 -5.5, 8 0 C4 5.5, -4 5.5, -8 0 Z" fill="#ffffff"/>
        <circle r="4" fill="url(#chakraCoreIndigo)" stroke="#372fa8" strokeWidth="2"/>
        <circle r="1.5" fill="#f2c46d"/>
      </g>

      <g transform="translate(150 60)">
        <circle r="52" fill="url(#chakraHaloViolet)"/>
        <circle r="44" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="2 6" opacity="0.75"/>
        <g fill="#fff8e8" stroke="#4c1d95" strokeWidth="2">
          <use href="#chakraPetalSlim" transform="rotate(0) scale(2)"/>
          <use href="#chakraPetalSlim" transform="rotate(22.5) scale(2)"/>
          <use href="#chakraPetalSlim" transform="rotate(45) scale(2)"/>
          <use href="#chakraPetalSlim" transform="rotate(67.5) scale(2)"/>
          <use href="#chakraPetalSlim" transform="rotate(90) scale(2)"/>
          <use href="#chakraPetalSlim" transform="rotate(112.5) scale(2)"/>
          <use href="#chakraPetalSlim" transform="rotate(135) scale(2)"/>
          <use href="#chakraPetalSlim" transform="rotate(157.5) scale(2)"/>
          <use href="#chakraPetalSlim" transform="rotate(180) scale(2)"/>
          <use href="#chakraPetalSlim" transform="rotate(202.5) scale(2)"/>
          <use href="#chakraPetalSlim" transform="rotate(225) scale(2)"/>
          <use href="#chakraPetalSlim" transform="rotate(247.5) scale(2)"/>
          <use href="#chakraPetalSlim" transform="rotate(270) scale(2)"/>
          <use href="#chakraPetalSlim" transform="rotate(292.5) scale(2)"/>
          <use href="#chakraPetalSlim" transform="rotate(315) scale(2)"/>
          <use href="#chakraPetalSlim" transform="rotate(337.5) scale(2)"/>
        </g>
        <g fill="#fff1f3" stroke="#7c3aed" strokeWidth="2">
          <use href="#chakraPetalSlim" transform="rotate(15) scale(1.3)"/>
          <use href="#chakraPetalSlim" transform="rotate(45) scale(1.3)"/>
          <use href="#chakraPetalSlim" transform="rotate(75) scale(1.3)"/>
          <use href="#chakraPetalSlim" transform="rotate(105) scale(1.3)"/>
          <use href="#chakraPetalSlim" transform="rotate(135) scale(1.3)"/>
          <use href="#chakraPetalSlim" transform="rotate(165) scale(1.3)"/>
          <use href="#chakraPetalSlim" transform="rotate(195) scale(1.3)"/>
          <use href="#chakraPetalSlim" transform="rotate(225) scale(1.3)"/>
          <use href="#chakraPetalSlim" transform="rotate(255) scale(1.3)"/>
          <use href="#chakraPetalSlim" transform="rotate(285) scale(1.3)"/>
          <use href="#chakraPetalSlim" transform="rotate(315) scale(1.3)"/>
          <use href="#chakraPetalSlim" transform="rotate(345) scale(1.3)"/>
        </g>
        <path d="M0 -30 L11 -8 L0 18 L-11 -8 Z" fill="url(#chakraCoreViolet)" stroke="#4c1d95" strokeWidth="2" strokeLinejoin="round"/>
        <circle cx="0" cy="-2" r="5" fill="url(#chakraGoldCore)" stroke="#8a5a00" strokeWidth="2"/>
        <circle r="1.5" fill="#ffffff" opacity="0.9"/>
      </g>

      <path d="M208 40 L212 46 L208 52 L204 46 Z" fill="#f2c46d" stroke="#8a5a00" strokeWidth="2"/>
      <path d="M92 44 L96 50 L92 56 L88 50 Z" fill="#fff8e8" stroke="#b4233f" strokeWidth="2"/>
      <circle cx="222" cy="62" r="2" fill="#0f6675"/>
    </svg>
  );
}
