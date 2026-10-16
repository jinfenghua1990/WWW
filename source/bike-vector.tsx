import type { CSSProperties } from 'react';

/**
 * ALSVID FC1-inspired folding e-bike vector.
 * 20" wheels, compact folding frame, integrated battery, mid-drive,
 * realistic cockpit and drivetrain details.
 */
export function BikeVector({
  tone = 'dark',
  className,
  style,
}: {
  tone?: 'dark' | 'light' | undefined;
  className?: string | undefined;
  style?: CSSProperties | undefined;
}) {
  const line = tone === 'light' ? 'rgba(255,255,255,.94)' : '#20252b';
  const soft = tone === 'light' ? 'rgba(255,255,255,.52)' : '#89919a';
  const faint = tone === 'light' ? 'rgba(255,255,255,.26)' : '#c5cad0';
  const accent = tone === 'light' ? 'rgba(255,255,255,.72)' : '#0b61ff';

  return (
    <svg viewBox="0 0 1000 560" className={className} style={style} aria-hidden="true">
      <defs>
        <linearGradient id="alsvid-frame-light" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={line} stopOpacity=".98" />
          <stop offset="1" stopColor={line} stopOpacity=".68" />
        </linearGradient>
      </defs>

      {/* subtle ground contact */}
      <ellipse cx="500" cy="500" rx="390" ry="12" fill={faint} opacity=".3" />

      {/* wheels — proportions follow the supplied reference image */}
      <g className="bikeWheel" data-wheel style={{ transformOrigin: '170px 410px', transformBox: 'view-box' }}>
        <circle cx="170" cy="410" r="105" fill="none" stroke={line} strokeWidth="7" />
        <circle cx="170" cy="410" r="97" fill="none" stroke={soft} strokeWidth="1.5" opacity=".72" />
        <g stroke={soft} strokeWidth="1.2" opacity=".72">
          <line x1="170" y1="313" x2="170" y2="507" />
          <line x1="73" y1="410" x2="267" y2="410" />
          <line x1="101" y1="341" x2="239" y2="479" />
          <line x1="239" y1="341" x2="101" y2="479" />
          <line x1="121" y1="323" x2="219" y2="497" />
          <line x1="219" y1="323" x2="121" y2="497" />
        </g>
        <circle cx="170" cy="410" r="8" fill={line} />
      </g>

      <g className="bikeWheel" data-wheel style={{ transformOrigin: '830px 410px', transformBox: 'view-box' }}>
        <circle cx="830" cy="410" r="105" fill="none" stroke={line} strokeWidth="7" />
        <circle cx="830" cy="410" r="97" fill="none" stroke={soft} strokeWidth="1.5" opacity=".72" />
        <g stroke={soft} strokeWidth="1.2" opacity=".72">
          <line x1="830" y1="313" x2="830" y2="507" />
          <line x1="733" y1="410" x2="927" y2="410" />
          <line x1="761" y1="341" x2="899" y2="479" />
          <line x1="899" y1="341" x2="761" y2="479" />
          <line x1="781" y1="323" x2="879" y2="497" />
          <line x1="879" y1="323" x2="781" y2="497" />
        </g>
        <circle cx="830" cy="410" r="8" fill={line} />
      </g>

      {/* frame */}
      <g fill="none" stroke="url(#alsvid-frame-light)" strokeLinecap="round" strokeLinejoin="round">
        <path d="M170 410 L505 410 L615 315 L170 410" strokeWidth="12" />
        <path d="M615 315 L760 220 L830 410" strokeWidth="12" />
        <path d="M615 315 L505 410" strokeWidth="9" />
        <path d="M615 315 L550 410 L505 410" strokeWidth="7" opacity=".82" />
        <path d="M760 220 L795 335 L830 410" strokeWidth="9" />
      </g>

      {/* folding hinge */}
      <circle cx="615" cy="315" r="17" fill="none" stroke={accent} strokeWidth="3" />
      <circle cx="615" cy="315" r="5" fill={line} />

      {/* integrated battery / central tube */}
      <path d="M615 315 L505 410" stroke={line} strokeWidth="24" strokeLinecap="round" opacity=".18" />
      <path d="M616 319 L513 402" stroke={line} strokeWidth="5" strokeLinecap="round" opacity=".72" />

      {/* seatpost + saddle */}
      <path d="M615 315 L560 155" stroke={line} strokeWidth="9" strokeLinecap="round" />
      <path d="M560 155 L570 105" stroke={line} strokeWidth="6" strokeLinecap="round" />
      <path d="M535 100 Q560 91 592 102" fill="none" stroke={line} strokeWidth="10" strokeLinecap="round" />

      {/* cockpit / tall folding stem */}
      <path d="M760 220 L770 155 L785 105" fill="none" stroke={line} strokeWidth="8" strokeLinecap="round" />
      <path d="M785 105 L782 68" stroke={line} strokeWidth="7" strokeLinecap="round" />
      <path d="M770 65 Q792 55 818 69" fill="none" stroke={line} strokeWidth="8" strokeLinecap="round" />
      <path d="M810 69 L836 82" stroke={line} strokeWidth="5" strokeLinecap="round" />

      {/* front light */}
      <circle cx="785" cy="155" r="8" fill={accent} />
      <path d="M793 155 L818 155" stroke={accent} strokeWidth="2" opacity=".72" />

      {/* mid-drive motor + crank */}
      <path d="M468 399 Q505 370 542 398 L534 434 Q503 454 469 431 Z" fill={line} opacity=".18" />
      <circle cx="505" cy="410" r="27" fill="none" stroke={line} strokeWidth="5" />
      <g data-crank style={{ transformOrigin: '505px 410px', transformBox: 'view-box' }} stroke={line} strokeWidth="5" strokeLinecap="round">
        <path d="M505 410 L536 381" />
        <path d="M536 381 L554 381" />
      </g>
      <circle cx="505" cy="410" r="6" fill={line} />

      {/* chain */}
      <path d="M505 383 L170 383 M505 437 L170 437" fill="none" stroke={faint} strokeWidth="2.5" strokeDasharray="7 7" />
      <path d="M170 383 L170 437 M505 383 L505 437" fill="none" stroke={faint} strokeWidth="2.5" />

      {/* rear dropout / derailleur */}
      <path d="M170 410 L151 435 L170 444" fill="none" stroke={soft} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

      {/* kickstand */}
      <path d="M478 419 L460 480" stroke={soft} strokeWidth="4" strokeLinecap="round" />

      {/* tiny frame detail, no text */}
      <path d="M640 292 L660 322" stroke={accent} strokeWidth="3" strokeLinecap="round" opacity=".72" />
    </svg>
  );
}
