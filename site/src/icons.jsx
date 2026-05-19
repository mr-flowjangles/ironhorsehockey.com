// icons.jsx — Drawn line-art / silhouette icons in the flyer's style.
// Single-color (currentColor) so they pick up parent text color cleanly.

const SkaterIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {/* Helmeted skater silhouette */}
    <path d="M22 12c1-2 4-3 6-3s4 1 5 3l1 5-2 4 4 3 7 2 4 6-2 6-5-1-6-3-1 6 4 5-1 4-7 1-3-4-4-7-5 2-7 1-3-3 1-5 6-3 7-4-1-5 1-5z" fill="currentColor" stroke="none" opacity="0.95" />
    {/* Stick */}
    <path d="M40 26L60 12" stroke="currentColor" strokeWidth="2.5" />
    <path d="M58 12l4-2" />
    {/* Skate blades */}
    <path d="M16 56h20M28 56h20" />
  </svg>
);

const PlaybookIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {/* X and O playbook marks with arrows */}
    <circle cx="14" cy="14" r="5" />
    <path d="M28 10l8 8M36 10l-8 8" />
    <circle cx="50" cy="14" r="5" />
    <path d="M14 22v10l12 8" />
    <polyline points="22,38 26,40 24,36" />
    <path d="M50 22c0 8-6 12-14 14" />
    <polyline points="34,34 36,36 38,32" />
    <circle cx="32" cy="50" r="3" fill="currentColor" />
    <path d="M44 50h12M52 46l4 4-4 4" />
  </svg>
);

const TrophyIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 10h24v10c0 8-5 14-12 14s-12-6-12-14V10z" />
    <path d="M20 14h-6c0 6 3 10 8 11" />
    <path d="M44 14h6c0 6-3 10-8 11" />
    <path d="M28 34v6h8v-6" />
    <path d="M22 46h20" />
    <path d="M18 54h28" />
  </svg>
);

const CalendarIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="16" rx="1" />
    <path d="M3 9h18M8 3v4M16 3v4" />
    <path d="M7 13h2M11 13h2M15 13h2M7 17h2M11 17h2" />
  </svg>
);

const PinIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-7.5 8-13a8 8 0 1 0-16 0c0 5.5 8 13 8 13z" />
    <circle cx="12" cy="9" r="3" />
  </svg>
);

const GroupIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="9" cy="8" r="3.2" />
    <circle cx="17" cy="9" r="2.5" />
    <path d="M3 19c0-3 3-5 6-5s6 2 6 5" />
    <path d="M15 19c0-2 2-4 4-4s2 1 2 3" />
  </svg>
);

const ClockIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

const CheckIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20,6 9,17 4,12" />
  </svg>
);

const ArrowIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="arr">
    <path d="M4 12h16M14 6l6 6-6 6" />
  </svg>
);

const MenuIcon = ({ size = 22, open }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
    {open ? (
      <>
        <path d="M6 6l12 12M18 6L6 18" />
      </>
    ) : (
      <>
        <path d="M3 7h18M3 12h18M3 17h18" />
      </>
    )}
  </svg>
);

const MailIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="1.5" />
    <path d="M3 7l9 7 9-7" />
  </svg>
);

// ── Brand marks ─────────────────────────────────────────────────────

// Stylized armored-horse crest (placeholder; user said they'll upload the real logo).
// Built as a chrome-lined geometric shield with a horse silhouette.
const CrestMark = ({ size = 44 }) => (
  <svg width={size} height={size * (54/44)} viewBox="0 0 88 108" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="crest-chrome" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"  stopColor="#E6ECF5" />
        <stop offset="35%" stopColor="#B8C4D6" />
        <stop offset="60%" stopColor="#5E6B83" />
        <stop offset="100%" stopColor="#A0AAC0" />
      </linearGradient>
      <linearGradient id="crest-blue" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#4E86FF" />
        <stop offset="100%" stopColor="#0A3FCC" />
      </linearGradient>
    </defs>
    {/* Outer shield */}
    <path
      d="M44 2 L82 14 L82 56 C82 78 64 96 44 104 C24 96 6 78 6 56 L6 14 Z"
      fill="url(#crest-blue)"
      stroke="#4E86FF"
      strokeWidth="1.5"
    />
    {/* Inner shield */}
    <path
      d="M44 10 L76 20 L76 56 C76 74 60 90 44 96 C28 90 12 74 12 56 L12 20 Z"
      fill="#04070F"
      stroke="rgba(255,255,255,0.18)"
      strokeWidth="0.8"
    />
    {/* Horse silhouette */}
    <g transform="translate(20, 22)" fill="url(#crest-chrome)" stroke="#0A1530" strokeWidth="0.7" strokeLinejoin="round">
      <path d="M14 4c-2 3-4 6-3 10l-2 3-4 2-2 4 2 3 6-1 1 5-3 5 2 4 8-1 5-5 6 1 4-4-1-7 4-5-1-6-3-3-6-1-2-3-3-2-2 0z" />
      {/* Mane fins */}
      <path d="M30 6l8-3-2 6-6 1z" fill="#1E63FF" stroke="#1E63FF" />
      <path d="M34 14l8-1-3 6-6-2z" fill="#1E63FF" stroke="#1E63FF" />
      {/* Eye */}
      <circle cx="20" cy="14" r="1.6" fill="#4E86FF" stroke="none" />
    </g>
    {/* Crossed sticks beneath */}
    <g stroke="#B8C4D6" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="78" x2="36" y2="92" />
      <line x1="70" y1="78" x2="52" y2="92" />
    </g>
    <circle cx="44" cy="92" r="3" fill="#04070F" stroke="#B8C4D6" strokeWidth="1.2" />
  </svg>
);

// Big poster horse — used on the hero. More elaborate, fills the artboard.
const HeroHorseArt = () => (
  <svg viewBox="0 0 600 600" fill="none" aria-hidden="true" style={{ width: "100%", height: "100%" }}>
    <defs>
      <radialGradient id="hero-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%"  stopColor="#1E63FF" stopOpacity="0.7" />
        <stop offset="60%" stopColor="#0A3FCC" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#0A3FCC" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="hero-shield" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"  stopColor="#4E86FF" />
        <stop offset="100%" stopColor="#0A2A99" />
      </linearGradient>
      <linearGradient id="hero-chrome" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"  stopColor="#FFFFFF" />
        <stop offset="30%" stopColor="#E6ECF5" />
        <stop offset="55%" stopColor="#5E6B83" />
        <stop offset="100%" stopColor="#B8C4D6" />
      </linearGradient>
      <pattern id="hero-grid" width="36" height="36" patternUnits="userSpaceOnUse">
        <path d="M36 0H0V36" fill="none" stroke="rgba(30,99,255,0.07)" strokeWidth="1" />
      </pattern>
    </defs>

    {/* Backdrop */}
    <rect width="600" height="600" fill="url(#hero-grid)" />
    <circle cx="300" cy="300" r="240" fill="url(#hero-glow)" />

    {/* Concentric ice rings */}
    {[120, 165, 210, 255].map((r, i) => (
      <circle
        key={r}
        cx="300" cy="300" r={r}
        fill="none"
        stroke="rgba(30, 99, 255, 0.18)"
        strokeWidth={i === 1 ? 1.5 : 0.6}
        strokeDasharray={i === 2 ? "2 6" : null}
      />
    ))}

    {/* Cardinal tick marks */}
    {[0, 90, 180, 270].map((deg) => (
      <g key={deg} transform={`rotate(${deg} 300 300)`}>
        <line x1="300" y1="40" x2="300" y2="60" stroke="rgba(30,99,255,0.6)" strokeWidth="1.5" />
      </g>
    ))}

    {/* Shield */}
    <path
      d="M300 130 L420 168 L420 320 C420 400 360 470 300 500 C240 470 180 400 180 320 L180 168 Z"
      fill="url(#hero-shield)"
      stroke="#4E86FF"
      strokeWidth="2"
    />
    <path
      d="M300 150 L405 184 L405 320 C405 394 350 458 300 484 C250 458 195 394 195 320 L195 184 Z"
      fill="#04070F"
      stroke="rgba(255,255,255,0.16)"
    />

    {/* Horse */}
    <g transform="translate(220, 190)">
      {/* Neck/body wedge */}
      <path d="M5 130 L20 60 L40 25 L80 10 L120 18 L150 42 L160 80 L140 130 L100 135 L60 132 Z"
        fill="url(#hero-chrome)" stroke="#04070F" strokeWidth="2" strokeLinejoin="round" />
      {/* Armor plates */}
      <path d="M48 70 L80 64 L74 96 L42 100 Z" fill="rgba(0,0,0,0.32)" stroke="#5E6B83" strokeWidth="1" />
      <path d="M82 64 L120 60 L122 92 L78 96 Z" fill="rgba(0,0,0,0.18)" stroke="#5E6B83" strokeWidth="1" />
      <path d="M40 102 L80 100 L78 132 L40 132 Z" fill="rgba(0,0,0,0.28)" stroke="#5E6B83" strokeWidth="1" />
      {/* Rivets */}
      {[
        [52,76],[68,76],[58,90],[92,72],[108,72],[100,88],
        [52,108],[68,108],[58,124],
      ].map(([x,y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="1.8" fill="#04070F" stroke="#E6ECF5" strokeWidth="0.5" />
      ))}
      {/* Mane fins (blue flame) */}
      <path d="M140 18 L170 0 L168 20 L150 26 Z" fill="#1E63FF" stroke="#4E86FF" strokeWidth="1" />
      <path d="M150 30 L186 18 L182 42 L154 44 Z" fill="#1E63FF" stroke="#4E86FF" strokeWidth="1" />
      <path d="M158 52 L196 46 L188 70 L160 64 Z" fill="#1E63FF" stroke="#4E86FF" strokeWidth="1" />
      <path d="M150 78 L186 78 L176 100 L154 96 Z" fill="#1E63FF" stroke="#4E86FF" strokeWidth="1" />
      {/* Ear */}
      <path d="M82 6 L92 -16 L100 8 Z" fill="url(#hero-chrome)" stroke="#04070F" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Eye */}
      <circle cx="76" cy="58" r="6" fill="#04070F" />
      <circle cx="76" cy="58" r="4" fill="#4E86FF" />
      <circle cx="78" cy="56" r="1.5" fill="#fff" />
      {/* Nostril */}
      <ellipse cx="32" cy="100" rx="3" ry="5" fill="#04070F" />
    </g>

    {/* Crossed sticks */}
    <g stroke="url(#hero-chrome)" strokeWidth="6" strokeLinecap="round">
      <line x1="208" y1="476" x2="284" y2="540" />
      <line x1="392" y1="476" x2="316" y2="540" />
    </g>
    <g stroke="#04070F" strokeWidth="2" strokeLinecap="round">
      <line x1="220" y1="486" x2="232" y2="496" />
      <line x1="240" y1="500" x2="252" y2="510" />
      <line x1="380" y1="486" x2="368" y2="496" />
      <line x1="360" y1="500" x2="348" y2="510" />
    </g>
    {/* Puck */}
    <ellipse cx="300" cy="546" rx="22" ry="7" fill="#04070F" stroke="#B8C4D6" strokeWidth="2" />
    <ellipse cx="300" cy="544" rx="22" ry="3" fill="#1E63FF" opacity="0.6" />

    {/* Spark dots */}
    {Array.from({ length: 40 }).map((_, i) => {
      const cx = (i * 47) % 600;
      const cy = (i * 89) % 600;
      const r = (i % 4) * 0.5 + 0.5;
      const op = ((i * 7) % 100) / 250 + 0.05;
      return <circle key={i} cx={cx} cy={cy} r={r} fill="#4E86FF" opacity={op} />;
    })}
  </svg>
);

Object.assign(window, {
  SkaterIcon, PlaybookIcon, TrophyIcon,
  CalendarIcon, PinIcon, GroupIcon, ClockIcon,
  CheckIcon, ArrowIcon, MenuIcon, MailIcon,
  CrestMark, HeroHorseArt,
});
