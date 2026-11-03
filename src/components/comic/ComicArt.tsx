import React from "react";

/*
 * Original comic artwork, drawn entirely in code. Everything here is decorative,
 * so it is hidden from assistive tech.
 */

const round = (n: number) => Math.round(n * 10) / 10;

/** Builds a spider-web path: straight rays crossed by rings that sag toward the centre. */
const webPath = (
  cx: number,
  cy: number,
  radius: number,
  rays: number,
  rings: number,
  startDeg = 0,
  sweepDeg = 360,
) => {
  const closed = sweepDeg === 360;
  const step = sweepDeg / rays;
  const rayCount = closed ? rays : rays + 1;
  const point = (r: number, deg: number) => {
    const rad = (deg * Math.PI) / 180;
    return `${round(cx + r * Math.cos(rad))} ${round(cy + r * Math.sin(rad))}`;
  };

  let d = "";
  for (let i = 0; i < rayCount; i++) {
    d += `M${point(0, 0)}L${point(radius, startDeg + i * step)}`;
  }
  for (let ring = 1; ring <= rings; ring++) {
    const r = (radius * ring) / rings;
    for (let i = 0; i < rays; i++) {
      const a = startDeg + i * step;
      d += `M${point(r, a)}Q${point(r * 0.84, a + step / 2)} ${point(r, a + step)}`;
    }
  }
  return d;
};

const CORNER_WEB = webPath(0, 0, 300, 6, 6, 0, 90);

/** A web anchored in the top-left corner of its box. Flip it with a scale utility. */
export const WebCorner = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 300 300" className={`pointer-events-none ${className}`} aria-hidden="true">
    <path d={CORNER_WEB} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

/** Strands of web sagging from the top edge of a section. */
export const WebDivider = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 1200 44"
    preserveAspectRatio="none"
    className={`pointer-events-none absolute inset-x-0 top-0 h-7 w-full md:h-11 ${className}`}
    aria-hidden="true"
  >
    <g fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke">
      {Array.from({ length: 8 }, (_, i) => {
        const x = i * 150;
        return (
          <React.Fragment key={x}>
            <path vectorEffect="non-scaling-stroke" d={`M${x} 0Q${x + 75} 42 ${x + 150} 0`} />
            <path vectorEffect="non-scaling-stroke" d={`M${x} 0Q${x + 75} 22 ${x + 150} 0`} />
            <path vectorEffect="non-scaling-stroke" d={`M${x + 75} 0V32`} />
            <path vectorEffect="non-scaling-stroke" d={`M${x + 38} 0L${x + 50} 25`} />
            <path vectorEffect="non-scaling-stroke" d={`M${x + 112} 0L${x + 100} 25`} />
          </React.Fragment>
        );
      })}
    </g>
  </svg>
);

/* Uneven on purpose: a regular star reads as a badge, a jagged one as an impact. */
const BURST_RADII = [1, 0.66, 0.92, 0.6, 1.04, 0.68, 0.88, 0.62, 1, 0.64, 0.94, 0.6, 1.06, 0.66, 0.9, 0.62, 0.98, 0.68];
const BURST_POINTS = BURST_RADII.map((r, i) => {
  const a = (i / BURST_RADII.length) * Math.PI * 2;
  return `${round(100 + r * 94 * Math.cos(a))},${round(70 + r * 66 * Math.sin(a))}`;
}).join(" ");

interface BurstProps {
  word: string;
  className?: string;
  fill?: string;
  textFill?: string;
}

/** A sound effect in an ink-outlined starburst. */
export const Burst = ({ word, className = "", fill = "hsl(var(--pow-yellow))", textFill = "hsl(var(--spider-red))" }: BurstProps) => (
  <svg viewBox="-4 -4 208 148" className={`pointer-events-none overflow-visible ${className}`} aria-hidden="true">
    <polygon points={BURST_POINTS} fill={fill} stroke="hsl(var(--ink))" strokeWidth="5" strokeLinejoin="round" />
    <text
      x="100"
      y="86"
      textAnchor="middle"
      fontFamily="Bangers, Impact, sans-serif"
      fontSize="46"
      letterSpacing="1.5"
      fill={textFill}
      stroke="hsl(var(--ink))"
      strokeWidth="1.5"
    >
      {word}
    </text>
  </svg>
);

const SCENE_WEB = webPath(200, 200, 270, 14, 7, 8);
const MASK_WEB = webPath(500, 530, 560, 28, 10, 4);
const MASK_SHAPE =
  "M500 110C720 110 830 280 830 470C830 680 680 890 500 890C320 890 170 680 170 470C170 280 280 110 500 110Z";

/** A plain web mask on the panel's blue print. */
export const WebMask = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 1000 1000" className={`block h-full w-full ${className}`} role="img" aria-label="Red comic web mask">
    <defs>
      <pattern id="mask-dots" width="30" height="30" patternUnits="userSpaceOnUse">
        <circle cx="15" cy="15" r="6" fill="hsl(232 60% 18%)" />
      </pattern>
      <clipPath id="mask-clip">
        <path d={MASK_SHAPE} />
      </clipPath>
    </defs>
    <rect width="1000" height="1000" fill="hsl(var(--spider-blue))" />
    <rect width="1000" height="1000" fill="url(#mask-dots)" />
    <path d={MASK_SHAPE} fill="hsl(var(--spider-red))" />
    <g clipPath="url(#mask-clip)">
      <path d={MASK_WEB} fill="none" stroke="hsl(var(--ink))" strokeWidth="5" />
    </g>
    <path d={MASK_SHAPE} fill="none" stroke="hsl(var(--ink))" strokeWidth="16" />
    <g fill="#fff" stroke="hsl(var(--ink))" strokeWidth="22" strokeLinejoin="round">
      <path d="M465 545C400 565 270 525 225 395C310 385 440 435 465 545Z" />
      <path d="M535 545C600 565 730 525 775 395C690 385 560 435 535 545Z" />
    </g>
  </svg>
);

/** The cover scene: the only villain a software engineer fights, caught in a web. */
export const CaughtBug = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 400 400" className={`block h-full w-full ${className}`} aria-hidden="true">
    <rect width="400" height="400" fill="hsl(var(--spider-blue))" />
    <rect width="400" height="400" fill="url(#scene-dots)" />
    <defs>
      <pattern id="scene-dots" width="12" height="12" patternUnits="userSpaceOnUse">
        <circle cx="6" cy="6" r="2.4" fill="hsl(232 60% 18%)" />
      </pattern>
    </defs>

    <path d={SCENE_WEB} fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />

    <g transform="translate(200 212) rotate(-14) scale(1.25)">
      {/* legs, mirrored */}
      {[1, -1].map((side) => (
        <g key={side} transform={`scale(${side} 1)`} fill="none" stroke="hsl(var(--ink))" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M26 -16L68 -42L84 -74" />
          <path d="M34 8L86 6L108 -10" />
          <path d="M28 34L72 56L88 88" />
        </g>
      ))}
      {/* antennae */}
      <path d="M-10 -70Q-20 -96 -40 -100M10 -70Q20 -96 40 -100" fill="none" stroke="hsl(var(--ink))" strokeWidth="5" strokeLinecap="round" />
      {/* shell */}
      <ellipse cy="14" rx="42" ry="54" fill="hsl(var(--spider-red))" stroke="hsl(var(--ink))" strokeWidth="6" />
      <path d="M0 -38V66" stroke="hsl(var(--ink))" strokeWidth="5" />
      <circle cx="-20" cy="0" r="7" fill="hsl(var(--ink))" />
      <circle cx="20" cy="4" r="7" fill="hsl(var(--ink))" />
      <circle cx="-17" cy="36" r="6" fill="hsl(var(--ink))" />
      <circle cx="18" cy="38" r="6" fill="hsl(var(--ink))" />
      {/* head with knocked-out eyes */}
      <circle cy="-50" r="26" fill="hsl(var(--ink))" />
      <path d="M-16 -60L-5 -49M-5 -60L-16 -49M5 -60L16 -49M16 -60L5 -49" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
      {/* webbing wrapped over the body */}
      <g fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round">
        <path d="M-74 -14Q0 18 74 -20" />
        <path d="M-66 24Q0 58 70 18" />
        <path d="M-52 -46Q0 -24 54 -50" />
        <path d="M-42 60Q2 82 46 58" />
      </g>
    </g>
  </svg>
);
