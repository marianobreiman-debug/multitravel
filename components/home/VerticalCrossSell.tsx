import Link from 'next/link';

interface VerticalCrossSellProps {
  currentVertical: 'vuelos' | 'alojamientos';
  countrySlug: string;
  countryName: string;
  citySlug?:   string;
  cityName?:   string;
  heroImage?:  string;
}

const CONFIG = {
  vuelos: {
    targetVertical: 'alojamientos',
    badge:          'ALOJAMIENTOS',
    badgeEmoji:     '🏨',
    headline:       (name: string) => `Completá tu viaje a ${name}`,
    subtext:        'Reservá tu alojamiento y viajá con todo organizado desde un solo lugar.',
    cta:            (name: string) => `Ver alojamientos en ${name}`,
    accent:         '#226FCB',
    gradient:       'linear-gradient(135deg, #0D4E88 0%, #226FCB 100%)',
    badgeBg:        'rgba(34,111,203,0.20)',
  },
  alojamientos: {
    targetVertical: 'vuelos',
    badge:          'VUELOS',
    badgeEmoji:     '✈️',
    headline:       (name: string) => `Reservá tu vuelo a ${name}`,
    subtext:        'Encontrá los mejores precios en vuelos y llegá a tu destino con Multitravel.',
    cta:            (name: string) => `Ver vuelos a ${name}`,
    accent:         '#FF2C4E',
    gradient:       'linear-gradient(135deg, #DF0032 0%, #FF2C4E 100%)',
    badgeBg:        'rgba(223,0,50,0.20)',
  },
} as const;

export function VerticalCrossSell({
  currentVertical,
  countrySlug,
  countryName,
  citySlug,
  cityName,
  heroImage,
}: VerticalCrossSellProps) {
  const cfg         = CONFIG[currentVertical];
  const displayName = cityName ?? countryName;
  const mirrorUrl   = `/home/${cfg.targetVertical}/${countrySlug}${citySlug ? `/${citySlug}` : ''}`;
  const hasImage    = Boolean(heroImage);

  return (
    <section style={{ padding: '64px 0 80px', background: '#F4F6F8' }}>
      <style>{`
        .vcs-wrap    { max-width: 1240px; margin: 0 auto; padding: 0 63px; }
        .vcs-card    {
          border-radius: 24px; overflow: hidden; min-height: 232px;
          background: #051B30; position: relative;
          display: flex; align-items: stretch;
        }
        .vcs-content {
          position: relative; z-index: 2;
          padding: 48px 56px;
          display: flex; flex-direction: column; justify-content: center; gap: 18px;
          flex: 0 0 ${hasImage ? '58%' : '100%'};
        }
        .vcs-img-col { flex: 0 0 42%; position: relative; overflow: hidden; }
        .vcs-img-col img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .vcs-img-fade {
          position: absolute; inset: 0; z-index: 1;
          background: linear-gradient(to right, #051B30 0%, rgba(5,27,48,0.65) 45%, rgba(5,27,48,0.05) 100%);
        }
        .vcs-cta {
          display: inline-flex; align-self: flex-start; align-items: center;
          gap: 8px; text-decoration: none; border-radius: 48px;
          padding: 13px 26px; margin-top: 4px;
          font-family: 'Outfit', sans-serif; font-weight: 700; font-size: 15px;
          color: #fff; transition: opacity 0.2s;
        }
        .vcs-cta:hover { opacity: 0.88; }
        @media (max-width: 768px) {
          .vcs-wrap    { padding: 0 16px; }
          .vcs-card    { min-height: auto; flex-direction: column; border-radius: 20px; }
          .vcs-content { flex: unset; padding: 32px 24px; gap: 14px; }
          .vcs-img-col { display: none; }
          .vcs-cta     { align-self: stretch; justify-content: center; }
        }
      `}</style>

      <div className="vcs-wrap">
        <div className="vcs-card">

          {/* Decorative circles */}
          <div style={{ position:'absolute', top:-50, right:200, width:220, height:220, borderRadius:'50%', background:'rgba(255,255,255,0.03)', zIndex:0 }} />
          <div style={{ position:'absolute', bottom:-70, left:'35%', width:260, height:260, borderRadius:'50%', background:'rgba(255,255,255,0.03)', zIndex:0 }} />
          <div style={{ position:'absolute', top:-20, left:-30, width:140, height:140, borderRadius:'50%', background:'rgba(255,255,255,0.025)', zIndex:0 }} />

          {/* ── Content ─────────────────────────────────────────────── */}
          <div className="vcs-content">

            {/* Badge */}
            <span style={{
              display:       'inline-flex',
              alignSelf:     'flex-start',
              alignItems:    'center',
              gap:           6,
              fontFamily:    "'Outfit', sans-serif",
              fontWeight:    700,
              fontSize:      11,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color:         cfg.accent,
              background:    cfg.badgeBg,
              padding:       '5px 12px',
              borderRadius:  24,
            }}>
              <span>{cfg.badgeEmoji}</span>
              {cfg.badge}
            </span>

            {/* Headline */}
            <h2 style={{
              fontFamily:    "'Outfit', sans-serif",
              fontWeight:    800,
              fontSize:      28,
              lineHeight:    '36px',
              letterSpacing: '-0.28px',
              color:         '#FFFFFF',
              margin:        0,
            }}>
              {cfg.headline(displayName)}
            </h2>

            {/* Subtext */}
            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 400,
              fontSize:   15,
              lineHeight: '22px',
              color:      'rgba(255,255,255,0.65)',
              margin:     0,
            }}>
              {cfg.subtext}
            </p>

            {/* CTA */}
            <Link href={mirrorUrl} className="vcs-cta" style={{ background: cfg.gradient }}>
              {cfg.cta(displayName)}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* ── Image panel ─────────────────────────────────────────── */}
          {hasImage && (
            <div className="vcs-img-col">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={heroImage} alt={displayName} />
              <div className="vcs-img-fade" />
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
