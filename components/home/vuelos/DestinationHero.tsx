// ─── Destination Hero — same structure as HeroSearch but with destination image
// and "Vuelos a [Destination]" title + breadcrumb

interface Props {
  title:      string;
  country:    string;
  heroImage:  string;
  breadcrumb: string[];
}

function ChevronRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
      <path d="M9 18l6-6-6-6" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function DestinationHero({ title, country, heroImage, breadcrumb }: Props) {
  return (
    <section
      style={{
        position:           'relative',
        backgroundImage:    `linear-gradient(106.92deg, rgba(10,85,154,0.88) 0%, rgba(10,85,154,0.55) 50%, rgba(10,85,154,0.2) 100%), url(${heroImage})`,
        backgroundSize:     'cover',
        backgroundPosition: 'center 35%',
        backgroundRepeat:   'no-repeat',
        minHeight:          220,
        display:            'flex',
        alignItems:         'flex-end',
      }}
    >
      {/* Dark gradient overlay at bottom for readability */}
      <div
        style={{
          position:   'absolute',
          bottom:     0,
          left:       0,
          right:      0,
          height:     80,
          background: 'linear-gradient(to top, rgba(0,0,0,0.35), transparent)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth:    1240,
          width:       'calc(100% - 126px)',
          margin:      '0 auto',
          padding:     '40px 0 36px',
          position:    'relative',
          zIndex:      1,
        }}
      >
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          style={{
            display:    'flex',
            alignItems: 'center',
            gap:        4,
            marginBottom: 14,
          }}
        >
          {breadcrumb.map((crumb, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              {i < breadcrumb.length - 1 ? (
                <a
                  href={i === 0 ? '/home' : '#'}
                  style={{
                    fontFamily:     "'Outfit', sans-serif",
                    fontWeight:     400,
                    fontSize:       13,
                    lineHeight:     '18px',
                    color:          'rgba(255,255,255,0.7)',
                    textDecoration: 'none',
                  }}
                >
                  {crumb}
                </a>
              ) : (
                <span
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 500,
                    fontSize:   13,
                    lineHeight: '18px',
                    color:      '#FFFFFF',
                  }}
                >
                  {crumb}
                </span>
              )}
              {i < breadcrumb.length - 1 && <ChevronRight />}
            </span>
          ))}
        </nav>

        {/* Title */}
        <h1
          style={{
            fontFamily:    "'Outfit', sans-serif",
            fontWeight:    700,
            fontSize:      36,
            lineHeight:    '44px',
            letterSpacing: '-0.36px',
            color:         '#FFFFFF',
            margin:        '0 0 8px',
          }}
        >
          {title}
        </h1>

        {/* Country tag */}
        <div
          style={{
            display:      'inline-flex',
            alignItems:   'center',
            gap:          6,
            background:   'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            borderRadius: 24,
            padding:      '4px 14px',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
              fill="rgba(255,255,255,0.8)"/>
          </svg>
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 400,
              fontSize:   13,
              color:      'rgba(255,255,255,0.9)',
            }}
          >
            {country}
          </span>
        </div>
      </div>
    </section>
  );
}
