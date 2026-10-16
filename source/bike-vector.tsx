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
    <svg viewBox="0 0 520 300" className={className} style={style} aria-hidden="true">
      <defs>
        <linearGradient id="alsvid-frame-light" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={line} stopOpacity=".98" />
          <stop offset="1" stopColor={line} stopOpacity=".68" />
        </linearGradient>
      </defs>

      {/* subtle ground contact */}
      <ellipse cx="260" cy="267" rx="194" ry="10" fill={faint} opacity=".35" />

      {/* wheels */}
      <g className="bikeWheel" data-wheel style={{ transformOrigin: '86px 210px', transformBox: 'view-box' }}>
        <circle cx="86" cy="210" r="68" fill="none" stroke={line} strokeWidth="7" />
        <circle cx="86" cy="210" r="62" fill="none" stroke={soft} strokeWidth="1.5" opacity=".8" />
        <g stroke={soft} strokeWidth="1.2" opacity=".7">
          <line x1="86" y1="148" x2="86" y2="272" />
          <line x1="24" y1="210" x2="148" y2="210" />
          <line x1="42" y1="166" x2="130" y2="254" />
          <line x1="130" y1="166" x2="42" y2="254" />
          <line x1="56" y1="151" x2="116" y2="269" />
          <line x1="116" y1="151" x2="56" y2="269" />
        </g>
        <circle cx="86" cy="210" r="7" fill={line} />
      </g>

      <g className="bikeWheel" data-wheel style={{ transformOrigin: '434px 210px', transformBox: 'view-box' }}>
        <circle cx="434" cy="210" r="68" fill="none" stroke={line} strokeWidth="7" />
        <circle cx="434" cy="210" r="62" fill="none" stroke={soft} strokeWidth="1.5" opacity=".8" />
        <g stroke={soft} strokeWidth="1.2" opacity=".7">
          <line x1="434" y1="148" x2="434" y2="272" />
          <line x1="372" y1="210" x2="496" y2="210" />
          <line x1="390" y1="166" x2="478" y2="254" />
          <line x1="478" y1="166" x2="390" y2="254" />
          <line x1="404" y1="151" x2="464" y2="269" />
          <line x1="464" y1="151" x2="404" y2="269" />
        </g>
        <circle cx="434" cy="210" r="7" fill={line} />
      </g>

      {/* folding frame */}
      <g fill="none" stroke="url(#alsvid-frame-light)" strokeLinecap="round" strokeLinejoin="round">
        <path d="M86 210 L278 210 L222 116 L86 210" strokeWidth="9" />
        <path d="M222 116 L330 130 L278 210" strokeWidth="10" />
        <path d="M222 116 L330 130" strokeWidth="8" />
        <path d="M222 116 L180 184 L278 210" strokeWidth="7" opacity=".86" />
        <path d="M330 130 L434 210" strokeWidth="8" />
        <path d="M330 130 L346 194 L434 210" strokeWidth="5" opacity=".72" />
      </g>

      {/* folding hinge */}
      <circle cx="222" cy="116" r="13" fill="none" stroke={accent} strokeWidth="3" />
      <circle cx="222" cy="116" r="4" fill={line} />

      {/* integrated downtube battery */}
      <path d="M222 116 L278 202" stroke={line} strokeWidth="17" strokeLinecap="round" opacity=".18" />
      <path d="M226 119 L276 195" stroke={line} strokeWidth="4" strokeLinecap="round" opacity=".72" />

      {/* seat tube, seatpost and saddle */}
      <path d="M222 116 L207 72" stroke={line} strokeWidth="7" strokeLinecap="round" />
      <path d="M207 72 L213 48" stroke={line} strokeWidth="5" strokeLinecap="round" />
      <path d="M193 46 Q208 40 226 46" fill="none" stroke={line} strokeWidth="7" strokeLinecap="round" />

      {/* cockpit / handlebar */}
      <path d="M330 130 L339 91 L357 72" fill="none" stroke={line} strokeWidth="6" strokeLinecap="round" />
      <path d="M350 71 Q372 67 387 74" fill="none" stroke={line} strokeWidth="5" strokeLinecap="round" />
      <path d="M379 73 L393 63" fill="none" stroke={line} strokeWidth="4" strokeLinecap="round" />

      {/* front light */}
      <circle cx="385" cy="96" r="7" fill={accent} />
      <path d="M392 96 L412 96" stroke={accent} strokeWidth="2" opacity=".7" />

      {/* mid-drive motor + crank */}
      <path d="M254 199 Q278 184 302 198 L297 220 Q276 232 253 218 Z" fill={line} opacity=".2" />
      <circle cx="278" cy="210" r="20" fill="none" stroke={line} strokeWidth="4" />
      <g data-crank style={{ transformOrigin: '278px 210px', transformBox: 'view-box' }} stroke={line} strokeWidth="4" strokeLinecap="round">
        <path d="M278 210 L299 190" />
        <path d="M299 190 L312 190" />
      </g>
      <circle cx="278" cy="210" r="5" fill={line} />

      {/* chain */}
      <path d="M278 190 L86 190 M278 230 L86 230" fill="none" stroke={faint} strokeWidth="2" strokeDasharray="5 5" />
      <path d="M86 190 L86 230" fill="none" stroke={faint} strokeWidth="2" />
      <path d="M278 190 L278 230" fill="none" stroke={faint} strokeWidth="2" />

      {/* rear derailleur / dropout detail */}
      <path d="M86 210 L74 226 L86 232" fill="none" stroke={soft} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

      {/* pedal silhouette */}
      <circle cx="312" cy="190" r="3" fill={line} />

      {/* kickstand */}
      <path d="M260 217 L249 258" stroke={soft} strokeWidth="3" strokeLinecap="round" />

      {/* tiny brand mark / frame detail, intentionally no text */}
      <path d="M241 133 L257 157" stroke={accent} strokeWidth="3" strokeLinecap="round" opacity=".75" />
    </svg>
  );
}
