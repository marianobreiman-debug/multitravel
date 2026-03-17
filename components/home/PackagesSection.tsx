'use client';

import { useState, useEffect } from 'react';
import styles from './PackagesSection.module.css';

const PKG_GAP = 16;

// ─── Icons (inline SVG, vuesax linear 16×16) ────────────────────────────────

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function TagPlaneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function TagHotelIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M2 22V9l10-7 10 7v13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 22v-5h6v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function TagBusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="5" width="20" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M7 18v2m10-2v2M2 10h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="7" cy="15" r="1" fill="currentColor"/>
      <circle cx="17" cy="15" r="1" fill="currentColor"/>
    </svg>
  );
}

function TagShieldIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L3 7v6c0 5 4.5 9 9 10 4.5-1 9-5 9-10V7L12 2z"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function TagCoffeeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M17 8h1a4 4 0 0 1 0 8h-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

function TagStarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function TagActivityIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

const TAG_ICONS: Record<string, React.ReactNode> = {
  'Vuelos':        <TagPlaneIcon />,
  'Hotel':         <TagHotelIcon />,
  'Alojamiento':   <TagHotelIcon />,
  'Traslados':     <TagBusIcon />,
  'Actividades':   <TagActivityIcon />,
  'Asistencia':    <TagShieldIcon />,
  'Desayuno':      <TagCoffeeIcon />,
  'Todo incluido': <TagStarIcon />,
};

// ─── Data ────────────────────────────────────────────────────────────────────

interface Pkg {
  destination: string;
  country:     string;
  image:       string;
  badge?:      string;
  nights:      string;
  departures:  string;
  includes:    string[];
  price:       string;
  currency:    string;
  cta:         string;
  color:       string; // panel color — progresión celeste→azul→violeta→rosa→rojo
}

// Color progression: celeste → azul → azul-violeta → violeta → rosa → rojo
const PACKAGES: Pkg[] = [
  {
    destination: 'Buzios',
    country:     'Brasil',
    image:       'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80',
    badge:       'Flexibilidad garantizada',
    nights:      '3, 5 y 7 noches',
    departures:  'Salidas Abr - Nov',
    includes:    ['Vuelos', 'Alojamiento', 'Traslados'],
    price:       '899',
    currency:    'USD',
    cta:         'Ver oferta',
    color:       '#3DB8E8',   // celeste
  },
  {
    destination: 'Cancún',
    country:     'México',
    image:       'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=600&q=80',
    nights:      '7 noches',
    departures:  'Salidas todo el año',
    includes:    ['Vuelos', 'Alojamiento', 'Traslados', 'Actividades'],
    price:       '1.099',
    currency:    'USD',
    cta:         'Ver oferta',
    color:       '#267DE5',   // azul
  },
  {
    destination: 'Punta Cana',
    country:     'Rep. Dominicana',
    image:       'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80',
    nights:      '5 y 7 noches',
    departures:  'Salidas Nov - Mar',
    includes:    ['Vuelos', 'Alojamiento', 'Asistencia'],
    price:       '1.199',
    currency:    'USD',
    cta:         'Ver oferta',
    color:       '#5A4FE0',   // azul-violeta
  },
  {
    destination: 'Miami',
    country:     'Estados Unidos',
    image:       'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80',
    nights:      '7 noches',
    departures:  'Salidas Abr - Oct',
    includes:    ['Vuelos', 'Alojamiento', 'Asistencia'],
    price:       '999',
    currency:    'USD',
    cta:         'Ver oferta',
    color:       '#9B4FD6',   // violeta
  },
  {
    destination: 'Europa',
    country:     'Multi-destino',
    image:       'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80',
    badge:       'Más vendido',
    nights:      '10 y 14 noches',
    departures:  'Salidas May - Sep',
    includes:    ['Vuelos', 'Alojamiento', 'Traslados', 'Asistencia'],
    price:       '2.499',
    currency:    'USD',
    cta:         'Ver oferta',
    color:       '#D44FA0',   // rosa
  },
  {
    destination: 'Caribe',
    country:     'Multi-destino',
    image:       'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=600&q=80',
    nights:      '7 noches',
    departures:  'Salidas Oct/26',
    includes:    ['Vuelos', 'Alojamiento', 'Todo incluido'],
    price:       '1.399',
    currency:    'USD',
    cta:         'Ver paquetes',
    color:       '#E5334A',   // rojo
  },
];

// ─── Card ────────────────────────────────────────────────────────────────────

function PackageCard({ pkg }: { pkg: Pkg }) {
  return (
    <div
      className={styles.card}
      style={{
        display:       'flex',
        flexDirection: 'row',
        borderRadius:  24,
        overflow:      'hidden',
        boxShadow:     '0px 6px 15px -2px rgba(39,38,38,0.08)',
        height:        248,  // fixed height — consistent across all cards even with 2-line tags
      }}
    >
      {/* ── Image panel ───────────────────────────────────────────────────── */}
      <div className={styles.cardImage} style={{ width: 195, flexShrink: 0, position: 'relative' }}>
        <img
          src={pkg.image}
          alt={pkg.destination}
          style={{
            position:  'absolute',
            inset:     0,
            width:     '100%',
            height:    '100%',
            objectFit: 'cover',
          }}
        />
        {/* Gradient overlay for readability */}
        <div
          style={{
            position:   'absolute',
            inset:      0,
            background: 'linear-gradient(160deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.4) 100%)',
          }}
        />
        {/* Badge */}
        {pkg.badge && (
          <div
            style={{
              position:       'absolute',
              top:            10,
              left:           8,
              right:          8,
              background:     'rgba(0,0,0,0.45)',
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)',
              borderRadius:   8,
              padding:        '4px 8px',
              display:        'flex',
              alignItems:     'center',
              gap:            4,
            }}
          >
            <span style={{ color: '#fff', display: 'flex', flexShrink: 0 }}><ClockIcon /></span>
            <span
              style={{
                fontFamily:   "'Outfit', sans-serif",
                fontWeight:   500,
                fontSize:     11,
                lineHeight:   '14px',
                color:        '#FFFFFF',
                whiteSpace:   'nowrap',
                overflow:     'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {pkg.badge}
            </span>
          </div>
        )}
      </div>

      {/* ── Info panel ────────────────────────────────────────────────────── */}
      <div
        style={{
          flex:          1,
          background:    pkg.color,
          padding:       '14px 16px',
          display:       'flex',
          flexDirection: 'column',
          gap:           0,
          minWidth:      0,
        }}
      >
        {/* Country */}
        <span
          style={{
            fontFamily:    "'Outfit', sans-serif",
            fontWeight:    400,
            fontSize:      10,
            lineHeight:    '14px',
            color:         'rgba(255,255,255,0.65)',
            textTransform: 'uppercase',
            letterSpacing: '0.07em',
            display:       'block',
            marginBottom:  2,
          }}
        >
          {pkg.country}
        </span>

        {/* Destination */}
        <span
          style={{
            fontFamily:    "'Outfit', sans-serif",
            fontWeight:    800,
            fontSize:      20,
            lineHeight:    '26px',
            letterSpacing: '-0.2px',
            color:         '#FFFFFF',
            display:       'block',
            marginBottom:  6,
          }}
        >
          {pkg.destination}
        </span>

        {/* Nights · Departures */}
        <div
          style={{
            display:    'flex',
            alignItems: 'center',
            gap:        6,
            color:      '#FFFFFF',
            marginBottom: 10,
            flexWrap:   'wrap',
          }}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <MoonIcon />
            <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400, fontSize: 12, lineHeight: '16px', color: '#FFFFFF', whiteSpace: 'nowrap' }}>
              {pkg.nights}
            </span>
          </span>
          <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.35)' }}>•</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <CalendarIcon />
            <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400, fontSize: 12, lineHeight: '16px', color: '#FFFFFF', whiteSpace: 'nowrap' }}>
              {pkg.departures}
            </span>
          </span>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.15)', marginBottom: 10 }} />

        {/* "TU VIAJE INCLUYE" */}
        <span
          style={{
            fontFamily:    "'Outfit', sans-serif",
            fontWeight:    300,
            fontSize:      10,
            lineHeight:    '14px',
            color:         'rgba(255,255,255,0.6)',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            display:       'block',
            marginBottom:  6,
          }}
        >
          Tu viaje incluye
        </span>

        {/* Tags — minHeight keeps 2-row alignment across all cards */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 10, minHeight: 46 }}>
          {pkg.includes.map((item) => (
            <span
              key={item}
              style={{
                background:   'rgba(0,0,0,0.22)',
                borderRadius: 6,
                padding:      '2px 8px',
                display:      'flex',
                alignItems:   'center',
                gap:          4,
                color:        '#FFFFFF',
                fontFamily:   "'Outfit', sans-serif",
                fontWeight:   400,
                fontSize:     11,
                lineHeight:   '16px',
                whiteSpace:   'nowrap',
              }}
            >
              {TAG_ICONS[item]}
              {item}
            </span>
          ))}
        </div>

        {/* Price + CTA */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: 'auto' }}>
          <div>
            <div
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 400,
                fontSize:   10,
                lineHeight: '13px',
                color:      'rgba(255,255,255,0.65)',
                marginBottom: 1,
              }}
            >
              Precio por 2 Adultos
            </div>
            <div
              style={{
                fontFamily:    "'Outfit', sans-serif",
                fontWeight:    800,
                fontSize:      20,
                lineHeight:    '26px',
                letterSpacing: '-0.2px',
                color:         '#FFFFFF',
              }}
            >
              {pkg.currency} {pkg.price}
            </div>
            <div
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 400,
                fontSize:   10,
                lineHeight: '13px',
                color:      'rgba(255,255,255,0.55)',
                marginTop:  2,
              }}
            >
              + {pkg.currency} 200 Impuestos
            </div>
          </div>

          <a
            href="/home/paquetes"
            style={{
              background:     '#FFFFFF',
              borderRadius:   40,
              height:         34,
              padding:        '0 14px',
              border:         'none',
              cursor:         'pointer',
              fontFamily:     "'Outfit', sans-serif",
              fontWeight:     600,
              fontSize:       12,
              lineHeight:     '34px',
              color:          pkg.color,
              whiteSpace:     'nowrap',
              flexShrink:     0,
              textDecoration: 'none',
              display:        'inline-block',
            }}
          >
            {pkg.cta}
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────

export function PackagesSection() {
  const [active, setActive]     = useState(0);
  const [cardW, setCardW]       = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const calc = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // 16px padding each side → card fills full container width
      if (mobile) setCardW(window.innerWidth - 32);
    };
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);

  const maxIndex   = PACKAGES.length - 1;
  const translateX = active * (cardW + PKG_GAP);

  const prev = () => setActive(a => Math.max(0, a - 1));
  const next = () => setActive(a => Math.min(maxIndex, a + 1));

  const sectionPadding = isMobile ? '40px 0 32px' : '72px 0';

  return (
    <section style={{ padding: sectionPadding, background: '#FFFFFF' }}>
      <style>{`
        .packages-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        @media (max-width: 900px) {
          .packages-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className={styles.innerWrap}>
        {/* Header */}
        <div style={{ marginBottom: isMobile ? 24 : 40 }}>
          <span
            style={{
              fontFamily:    "'Outfit', sans-serif",
              fontWeight:    600,
              fontSize:      12,
              lineHeight:    '16px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color:         '#226FCB',
              display:       'block',
              marginBottom:  8,
            }}
          >
            Paquetes turísticos
          </span>
          <h2
            style={{
              fontFamily:    "'Outfit', sans-serif",
              fontWeight:    800,
              fontSize:      isMobile ? 22 : 32,
              lineHeight:    isMobile ? '30px' : '40px',
              letterSpacing: '-0.32px',
              color:         '#272626',
              margin:        0,
            }}
          >
            Armá tu viaje con todo incluido
          </h2>
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 400,
              fontSize:   isMobile ? 14 : 16,
              lineHeight: '24px',
              color:      '#8D8D8D',
              margin:     '8px 0 0',
            }}
          >
            Paquetes prearmados a los mejores destinos, con salidas todo el año.
          </p>
        </div>

        {/* ── Mobile: 1-card carousel ─────────────────────────────────────── */}
        {isMobile ? (
          <>
            <div style={{ overflow: 'hidden' }}>
              <div
                style={{
                  display:    'flex',
                  gap:        PKG_GAP,
                  transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform:  `translateX(-${translateX}px)`,
                }}
              >
                {PACKAGES.map((pkg) => (
                  <div key={pkg.destination} style={{ width: cardW > 0 ? cardW : '100%', flexShrink: 0 }}>
                    <PackageCard pkg={pkg} />
                  </div>
                ))}
              </div>
            </div>

            {/* Dots + counter */}
            <div
              style={{
                display:        'flex',
                justifyContent: 'center',
                alignItems:     'center',
                gap:            6,
                marginTop:      16,
              }}
            >
              {PACKAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    border:       'none',
                    borderRadius: 24,
                    cursor:       'pointer',
                    padding:      0,
                    transition:   'all 0.25s',
                    width:        i === active ? 20 : 10,
                    height:       10,
                    background:   i === active ? '#226FCB' : '#CACACA',
                  }}
                />
              ))}
            </div>

            {/* Prev / Next buttons below dots */}
            <div
              style={{
                display:        'flex',
                justifyContent: 'center',
                gap:            12,
                marginTop:      12,
              }}
            >
              <button
                onClick={prev}
                disabled={active === 0}
                style={{
                  width: 40, height: 40, borderRadius: '50%',
                  border: '1.5px solid #CACACA', background: '#FFFFFF',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: active === 0 ? 'not-allowed' : 'pointer',
                  opacity: active === 0 ? 0.35 : 1,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18l-6-6 6-6" stroke="#226FCB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                onClick={next}
                disabled={active >= maxIndex}
                style={{
                  width: 40, height: 40, borderRadius: '50%',
                  border: '1.5px solid #CACACA', background: '#FFFFFF',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: active >= maxIndex ? 'not-allowed' : 'pointer',
                  opacity: active >= maxIndex ? 0.35 : 1,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18l6-6-6-6" stroke="#226FCB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </>
        ) : (
          /* ── Desktop: 2-col × 3-row grid ──────────────────────────────── */
          <div className="packages-grid">
            {PACKAGES.map((pkg) => (
              <PackageCard key={pkg.destination} pkg={pkg} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
