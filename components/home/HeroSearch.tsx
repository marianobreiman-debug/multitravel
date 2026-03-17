'use client';

import { useState } from 'react';
import styles from './HeroSearch.module.css';

// ─── Figma asset URLs (válidos 7 días desde 2026-03-16) ────────────────────
const BG_IMAGE        = 'https://www.figma.com/api/mcp/asset/770f42b0-77cb-4930-a032-3fd7a3b5b6cd';
const ICON_ARROW_DOWN = 'https://www.figma.com/api/mcp/asset/50402091-1f1c-4753-880d-6f218e80f081';
const ICON_SWAP       = 'https://www.figma.com/api/mcp/asset/e047b965-5bb7-42b7-bf4b-60b4f6756bf9';
const ICON_BUSCAR     = 'https://www.figma.com/api/mcp/asset/269891f9-1043-4e94-8d88-33763dc2ae23';

// Mobile banner image (Río de Janeiro — same as desktop default)
const MOBILE_BG = 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=800&q=80';

// ─── Vertical tab icons ────────────────────────────────────────────────────
function VuelosIcon({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
        stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function AlojamientosIcon({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M2 12V19" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 12V19" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 16h20" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 12h20" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 12V9a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v3" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.5 12V9.5A1.5 1.5 0 0 1 8 8h8a1.5 1.5 0 0 1 1.5 1.5V12" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function PaquetesIcon({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="8" width="20" height="14" rx="2" stroke={color} strokeWidth="1.5"/>
      <path d="M8 8V6a4 4 0 0 1 8 0v2" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 13v3m0 0v1m0-1h-2m2 0h2" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M2 13h20" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
function ActividadesIcon({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function TrasladosIcon({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="7" width="20" height="12" rx="2" stroke={color} strokeWidth="1.5"/>
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="8.5" cy="16" r="1.5" fill={color}/>
      <circle cx="15.5" cy="16" r="1.5" fill={color}/>
    </svg>
  );
}

// ─── Plane icon (Buscar button) ────────────────────────────────────────────
function PlaneIconSVG() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
      <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
        fill="white"/>
    </svg>
  );
}

// ─── Swap icon (vertical, mobile) ─────────────────────────────────────────
function SwapVerticalIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M7 16V4M7 4L3 8M7 4l4 4" stroke="#A1A1A1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 8v12M17 20l4-4M17 20l-4-4" stroke="#A1A1A1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ─── Arrow icons (mobile banner carousel) ─────────────────────────────────
function ArrowIcon({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d={dir === 'left' ? 'M15 18l-6-6 6-6' : 'M9 18l6-6-6-6'}
        stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── Desktop tab icons data ────────────────────────────────────────────────
const TABS = [
  { id: 'vuelos',       label: 'Vuelos',       Icon: VuelosIcon },
  { id: 'alojamientos', label: 'Alojamientos', Icon: AlojamientosIcon },
  { id: 'paquetes',     label: 'Paquetes',     Icon: PaquetesIcon },
];

// ─── Mobile vertical nav data (3 verticales principales) ──────────────────
const MOBILE_NAV = [
  { id: 'vuelos',       label: 'Vuelos',       Icon: VuelosIcon },
  { id: 'alojamientos', label: 'Alojamientos', Icon: AlojamientosIcon },
  { id: 'paquetes',     label: 'Paquetes',     Icon: PaquetesIcon },
];

const FLIGHT_TYPES = ['Ida y vuelta', 'Solo ida', 'Multidestino'];

// ─── Typography tokens ─────────────────────────────────────────────────────
const T_LABEL: React.CSSProperties = {
  fontFamily: "'Outfit', sans-serif",
  fontWeight: 500,
  fontSize:   12,
  lineHeight: '20px',
  color:      '#272626',
  display:    'block',
  whiteSpace: 'nowrap',
};
const T_VALUE: React.CSSProperties = {
  fontFamily:   "'Outfit', sans-serif",
  fontWeight:   500,
  fontSize:     14,
  lineHeight:   '20px',
  color:        '#272626',
  whiteSpace:   'nowrap',
  overflow:     'hidden',
  textOverflow: 'ellipsis',
};
const T_PLACEHOLDER: React.CSSProperties = {
  fontFamily:   "'Outfit', sans-serif",
  fontWeight:   400,
  fontSize:     14,
  lineHeight:   '20px',
  color:        '#8D8D8D',
  whiteSpace:   'nowrap',
  overflow:     'hidden',
  textOverflow: 'ellipsis',
};

// ─── Desktop: Input segment ────────────────────────────────────────────────
interface SegmentProps {
  label: string; value?: string; placeholder?: string;
  width?: number | string; flex?: number;
  borderRadius?: string; paddingLeft?: number; borderLeft?: string;
  rightSlot?: React.ReactNode;
}
function Segment({ label, value, placeholder, width, flex, borderRadius = '12px', paddingLeft = 16, borderLeft, rightSlot }: SegmentProps) {
  return (
    <div style={{ backgroundColor: '#F1F3F6', borderRadius, padding: `8px 16px 8px ${paddingLeft}px`, display: 'flex', flexDirection: 'column', gap: 2, width, flex, flexShrink: flex ? 1 : 0, boxSizing: 'border-box', cursor: 'pointer', minWidth: 0, borderLeft }}>
      <span style={T_LABEL}>{label}</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 4, minWidth: 0 }}>
        <span style={value ? T_VALUE : T_PLACEHOLDER}>{value ?? placeholder}</span>
        {rightSlot}
      </div>
    </div>
  );
}

// ─── Desktop: Responsive content wrapper ──────────────────────────────────
function ContentWrap({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{ maxWidth: 1240, width: 'calc(100% - 126px)', margin: '0 auto', ...style }}>
      {children}
    </div>
  );
}

// ─── Breadcrumb ────────────────────────────────────────────────────────────
function ChevronRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
      <path d="M9 18l6-6-6-6" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function Breadcrumb({ items }: { items: string[] }) {
  return (
    <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 16 }}>
      {items.map((crumb, i) => (
        <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {i < items.length - 1 ? (
            <a href={i === 0 ? '/home' : '#'} style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400, fontSize: 13, lineHeight: '18px', color: 'rgba(255,255,255,0.65)', textDecoration: 'none' }}>
              {crumb}
            </a>
          ) : (
            <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: 13, lineHeight: '18px', color: 'rgba(255,255,255,0.95)' }}>
              {crumb}
            </span>
          )}
          {i < items.length - 1 && <ChevronRight />}
        </span>
      ))}
    </nav>
  );
}

// ─── Mobile: single field ─────────────────────────────────────────────────
function MobileField({ label, value, placeholder, borderRadius = 12 }: { label: string; value?: string; placeholder?: string; borderRadius?: number | string }) {
  return (
    <div style={{ background: '#F1F3F6', borderRadius, padding: '8px 16px', cursor: 'pointer' }}>
      <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: 12, lineHeight: '20px', color: '#272626', margin: 0 }}>{label}</p>
      <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: value ? 500 : 400, fontSize: 14, lineHeight: '20px', color: value ? '#272626' : '#A1A1A1', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {value ?? placeholder}
      </p>
    </div>
  );
}

// ─── Compact mobile search (Figma 9477-49245) ──────────────────────────────
function CompactMobileSearch({ destination, passengers = 2 }: { destination?: string; passengers?: number }) {
  // Blue gradient text (matches Figma Gradient/Blue/02)
  const blueGrad: React.CSSProperties = {
    background:      'linear-gradient(141deg, #0A559A 13%, #226FCB 87%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };
  return (
    <div
      style={{
        background:         '#FFFFFF',
        border:             '1px solid #226FCB',
        borderRadius:       '24px 24px 32px 32px',
        padding:            16,
        display:            'flex',
        flexDirection:      'column',
        gap:                12,
        boxShadow:          '0px 6px 15px 0px rgba(39,38,38,0.08)',
      }}
    >
      {/* Row 1: location icon + origin/destination text */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {/* Location icon */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
          <path d="M12 13.43a3.12 3.12 0 1 0 0-6.24 3.12 3.12 0 0 0 0 6.24Z" stroke="url(#lgLoc)" strokeWidth="1.5"/>
          <path d="M3.62 8.49c1.97-8.66 14.8-8.65 16.76.01 1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 0 1-7.21 0c-2.76-2.66-5.92-6.97-4.77-12.05Z" stroke="url(#lgLoc2)" strokeWidth="1.5"/>
          <defs>
            <linearGradient id="lgLoc" x1="9" y1="7" x2="15" y2="14" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0A559A"/><stop offset="1" stopColor="#226FCB"/>
            </linearGradient>
            <linearGradient id="lgLoc2" x1="3" y1="4" x2="21" y2="20" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0A559A"/><stop offset="1" stopColor="#226FCB"/>
            </linearGradient>
          </defs>
        </svg>
        <p style={{ margin: 0, fontFamily: "'Outfit', sans-serif", fontSize: 14, lineHeight: '20px' }}>
          <span style={{ fontWeight: 400, color: '#272626' }}>Selecciona tu </span>
          <span style={{ fontWeight: 500, ...blueGrad }}>
            {destination ? `origen — ${destination}` : 'origen y destino'}
          </span>
        </p>
      </div>

      {/* Row 2: date + passengers */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        {/* Date */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
            <path d="M8 2v3M16 2v3M3.5 9.09h17M21 8.5V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z" stroke="url(#lgCal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
              <linearGradient id="lgCal" x1="3" y1="2" x2="21" y2="22" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0A559A"/><stop offset="1" stopColor="#226FCB"/>
              </linearGradient>
            </defs>
          </svg>
          <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', ...blueGrad, whiteSpace: 'nowrap' }}>
            Elegí una fecha
          </span>
        </div>
        {/* Passengers */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
            <path d="M18 7.16c-.06-.01-.13-.01-.19 0a3.65 3.65 0 1 1 .19 0ZM17.97 14.44c-1.01-.68-2.07-1.02-3.14-1.02-1.07 0-2.13.34-3.13 1.01" stroke="url(#lgUsr)" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M9.16 7.16c-.06-.01-.13-.01-.19 0a3.65 3.65 0 1 1 .19 0ZM6.08 14.44C4.48 15.51 3.19 17.18 3.19 18.86c0 1.19.67 2.14 2.02 2.14h7.58c1.34 0 2.02-.95 2.02-2.14 0-1.68-1.29-3.35-2.88-4.42" stroke="url(#lgUsr2)" strokeWidth="1.5" strokeLinecap="round"/>
            <defs>
              <linearGradient id="lgUsr" x1="12" y1="4" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0A559A"/><stop offset="1" stopColor="#226FCB"/>
              </linearGradient>
              <linearGradient id="lgUsr2" x1="2" y1="4" x2="15" y2="22" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0A559A"/><stop offset="1" stopColor="#226FCB"/>
              </linearGradient>
            </defs>
          </svg>
          <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', ...blueGrad }}>
            {passengers}
          </span>
        </div>
      </div>

      {/* Row 3: Buscar button */}
      <button
        style={{
          width:          '100%',
          height:         56,
          background:     'linear-gradient(122deg, #DF0032 15%, #FF2C4E 85%)',
          borderRadius:   56,
          border:         'none',
          cursor:         'pointer',
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'center',
          gap:            8,
          boxShadow:      '-4px 4px 12px 0px rgba(223,1,50,0.34), 4px 4px 12px 0px rgba(255,44,78,0.34)',
          fontFamily:     "'Outfit', sans-serif",
          fontWeight:     600,
          fontSize:       16,
          lineHeight:     '18px',
          color:          '#FFFFFF',
        }}
      >
        {/* Search icon */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.35-4.35" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Buscar
      </button>
    </div>
  );
}

// ─── Props ────────────────────────────────────────────────────────────────
interface HeroSearchProps {
  heroImage?:            string;
  initialOrigin?:        string;
  initialDestination?:   string;
  breadcrumb?:           string[];
  /** Override the hero headline copy (desktop + mobile banner) */
  heroTitle?:            string;
  /** Show compact mobile CTA card instead of full search form (for landing pages) */
  compactMobileSearch?:  boolean;
}

// ─── Component ────────────────────────────────────────────────────────────
export function HeroSearch({ heroImage, initialOrigin, initialDestination, breadcrumb, heroTitle, compactMobileSearch }: HeroSearchProps = {}) {
  const [activeTab,        setActiveTab]        = useState('vuelos');
  const [origin,           setOrigin]           = useState(initialOrigin      ?? '');
  const [destination,      setDestination]      = useState(initialDestination ?? '');
  const [flightType,       setFlightType]       = useState('Ida y vuelta');
  const [mobileActiveNav,  setMobileActiveNav]  = useState('vuelos');

  const bgImage = heroImage ?? BG_IMAGE;

  return (
    <>
      {/* ══════════════════════════════════════════
          DESKTOP (hidden on mobile ≤ 768px)
      ══════════════════════════════════════════ */}
      <section
        className={styles.desktopSection}
        style={{
          position:           'relative',
          backgroundImage:    `linear-gradient(106.92deg, #0A559A 21.81%, rgba(34,111,203,0) 65.578%), url(${bgImage})`,
          backgroundSize:     'cover',
          backgroundPosition: 'center',
          backgroundRepeat:   'no-repeat',
          overflow:           'visible',
        }}
      >
        <ContentWrap style={{ paddingTop: 32, paddingBottom: 60 }}>
          {breadcrumb && breadcrumb.length > 0 && <Breadcrumb items={breadcrumb} />}

          <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 36, lineHeight: '44px', letterSpacing: '-0.36px', color: '#FFFFFF', margin: '0 0 40px', padding: 0 }}>
            {heroTitle ? (
              <span style={{ fontWeight: 700 }}>{heroTitle}</span>
            ) : (
              <>
                <span style={{ fontWeight: 500 }}>Ofertas de </span>
                <span style={{ fontWeight: 700 }}>3 cuotas sin interés</span>
                <br />
                <span style={{ fontWeight: 500 }}>en destinos internacionales</span>
              </>
            )}
          </h1>

          <div>
            {/* Vertical tabs backdrop */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: 'rgba(0,0,0,0.6)', borderRadius: '32px 32px 0 0', padding: '12px 20px', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}>
              {TABS.map(({ id, label, Icon }) => {
                const active = activeTab === id;
                const color  = active ? '#FFFFFF' : '#DFDFDF';
                return (
                  <button key={id} onClick={() => setActiveTab(id)} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 20px', borderRadius: active ? 48 : 12, background: active ? 'rgba(255,255,255,0.1)' : 'transparent', border: 'none', cursor: 'pointer', fontFamily: "'Outfit', sans-serif", fontWeight: active ? 600 : 400, fontSize: 14, lineHeight: '20px', color, whiteSpace: 'nowrap', transition: 'all 0.15s ease' }}>
                    <Icon color={color} />
                    {label}
                  </button>
                );
              })}
            </div>

            {/* Form backdrop */}
            <div style={{ background: 'rgba(0,0,0,0.6)', borderRadius: '0 64px 64px 32px', padding: 12, boxSizing: 'border-box', display: 'flex', alignItems: 'stretch', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}>
              <div style={{ flex: 1, background: '#FFFFFF', borderRadius: '16px 64px 64px 16px', boxShadow: '0px 6px 15px -2px rgba(39,38,38,0.12)', display: 'flex', alignItems: 'stretch', padding: 12, gap: 8, boxSizing: 'border-box', overflow: 'hidden' }}>
                <div style={{ flex: 1, display: 'flex', gap: 8, alignItems: 'stretch', minWidth: 0 }}>
                  <Segment label="Tipo de vuelo" value="Ida y vuelta" width={140} rightSlot={<img src={ICON_ARROW_DOWN} alt="" style={{ width: 24, height: 24, flexShrink: 0, marginLeft: 'auto' }} />} />
                  <div style={{ position: 'relative', display: 'flex', flexShrink: 0 }}>
                    <Segment label="Origen" value={origin || undefined} placeholder="Ingresa desde dónde viajas" width={230} borderRadius="12px 0 0 12px" />
                    <Segment label="Destino" value={destination || undefined} placeholder="Ingresa hacia dónde viajas" width={230} borderRadius="0 12px 12px 0" paddingLeft={28} borderLeft="1px solid #CACACA" />
                    <button aria-label="Intercambiar" onClick={() => { setOrigin(destination); setDestination(origin); }} style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: 28, height: 28, borderRadius: '100px', border: '0.75px solid #CACACA', background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: 0, zIndex: 2, flexShrink: 0 }}>
                      <img src={ICON_SWAP} alt="" style={{ width: 16, height: 16, transform: 'rotate(90deg)' }} />
                    </button>
                  </div>
                  <Segment label="Fechas" placeholder="Selecciona cuando viajas" flex={1} />
                </div>
                <Segment label="Personas y clase" value="1 persona | Económica" width={152} />
                <button style={{ width: 144, flexShrink: 0, alignSelf: 'stretch', background: 'linear-gradient(107.03deg, #DF0032 15.19%, #FF2C4E 85.32%)', borderRadius: 56, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, boxShadow: '-4px 4px 12px 0px rgba(223,1,50,0.34), 4px 4px 12px 0px rgba(255,44,78,0.34)', fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 16, lineHeight: '18px', color: '#FFFFFF', padding: '8px 16px', boxSizing: 'border-box' }}>
                  <img src={ICON_BUSCAR} alt="" style={{ width: 28, height: 28, flexShrink: 0 }} />
                  Buscar
                </button>
              </div>
            </div>
          </div>
        </ContentWrap>
      </section>

      {/* ══════════════════════════════════════════
          MOBILE (hidden on desktop > 768px)
      ══════════════════════════════════════════ */}
      <section
        className={styles.mobileSection}
        style={{
          background:              '#051B30',
          borderBottomLeftRadius:  16,
          borderBottomRightRadius: 16,
          /* Header is position:relative in flow — no paddingTop needed */
        }}
      >
        {/* ── 1. Banner aspiracional ──────────────────────────────── */}
        <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
          {/* Background image */}
          <img
            src={bgImage !== BG_IMAGE ? bgImage : MOBILE_BG}
            alt="Destino"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />

          {/* Gradient overlay — transparent at top, dark at bottom */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0) 50%, #071d32 99%)' }} />

          {/* Text — bottom left */}
          <div style={{ position: 'absolute', bottom: 12, left: 16, right: 16 }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 18, lineHeight: '24px', letterSpacing: '-0.18px', color: '#FFFFFF', margin: 0 }}>
              {heroTitle ? (
                <span style={{ fontWeight: 700 }}>{heroTitle}</span>
              ) : (
                <>
                  <span style={{ fontWeight: 500 }}>Ofertas de </span>
                  <span style={{ fontWeight: 600 }}>3 cuotas sin interés</span>
                  <span style={{ fontWeight: 500 }}> en destinos internacionales</span>
                </>
              )}
            </p>
          </div>

          {/* Left arrow */}
          <button style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}>
            <ArrowIcon dir="left" />
          </button>

          {/* Right arrow */}
          <button style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}>
            <ArrowIcon dir="right" />
          </button>
        </div>

        {/* ── 2. Nav + Search (padded container) ─────────────────── */}
        <div style={{ padding: '12px 16px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>

          {/* ── Compact search — shown on landing pages ───────────── */}
          {compactMobileSearch ? (
            <CompactMobileSearch destination={initialDestination} />
          ) : (
          <>
          {/* ── Vertical nav tabs ─────────────────────────────────── */}
          <nav className={styles.mobileNavBar}>
            {MOBILE_NAV.map(({ id, label, Icon }) => {
              const active = mobileActiveNav === id;
              return (
                <button
                  key={id}
                  onClick={() => setMobileActiveNav(id)}
                  style={{
                    display:        'flex',
                    alignItems:     'center',
                    gap:            4,
                    padding:        '8px 12px',
                    borderRadius:   active ? 48 : 12,
                    background:     active ? 'rgba(255,255,255,0.1)' : 'transparent',
                    border:         'none',
                    cursor:         'pointer',
                    fontFamily:     "'Outfit', sans-serif",
                    fontWeight:     500,
                    fontSize:       14,
                    lineHeight:     '16px',
                    color:          active ? '#FFFFFF' : 'rgba(255,255,255,0.65)',
                    whiteSpace:     'nowrap',
                    flexShrink:     0,
                    transition:     'all 0.15s ease',
                  }}
                >
                  <Icon color={active ? '#FFFFFF' : 'rgba(255,255,255,0.65)'} />
                  {label}
                </button>
              );
            })}
          </nav>

          {/* ── Search card ───────────────────────────────────────── */}
          <div style={{ background: '#FFFFFF', borderRadius: 16, padding: 12, boxShadow: '0px 6px 15px 0px rgba(39,38,38,0.12)', position: 'relative', display: 'flex', flexDirection: 'column', gap: 8 }}>

            {/* Flight type tabs (Ida y vuelta | Solo ida | Multidestino) */}
            <div className={styles.flightTypeTabs}>
              <div className={styles.flightTypeTabsUnderline} />
              {FLIGHT_TYPES.map(type => (
                <button
                  key={type}
                  onClick={() => setFlightType(type)}
                  className={`${styles.flightTypeTab} ${flightType === type ? styles.flightTypeTabActive : styles.flightTypeTabInactive}`}
                >
                  <span>{type}</span>
                  <div className={styles.flightTypeTabBar} style={{ opacity: flightType === type ? 1 : 0 }} />
                </button>
              ))}
            </div>

            {/* Origin + Destination (grouped) — swap button anchored here */}
            <div style={{ position: 'relative' }}>
              {/* Rounded inputs — overflow:hidden for border-radius */}
              <div style={{ borderRadius: 12, overflow: 'hidden' }}>
                {/* Origen */}
                <div style={{ background: '#F1F3F6', padding: '8px 16px', cursor: 'pointer' }}>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: 12, lineHeight: '20px', color: '#272626', margin: 0 }}>Origen</p>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: origin ? 500 : 400, fontSize: 14, lineHeight: '20px', color: origin ? '#272626' : '#A1A1A1', margin: 0 }}>
                    {origin || 'Ingresa desde dónde viajas'}
                  </p>
                </div>
                {/* Divider */}
                <div style={{ height: 1, background: '#CACACA', marginLeft: 16 }} />
                {/* Destino */}
                <div style={{ background: '#F1F3F6', padding: '8px 16px', cursor: 'pointer' }}>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: 12, lineHeight: '20px', color: '#272626', margin: 0 }}>Destino</p>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: destination ? 500 : 400, fontSize: 14, lineHeight: '20px', color: destination ? '#272626' : '#A1A1A1', margin: 0 }}>
                    {destination || 'Ingresa hacia dónde viajas'}
                  </p>
                </div>
              </div>

              {/* Swap button — centered on divider between Origen and Destino */}
              {/* top: 56px = origin input height (8pt + 20 + 20 + 8pb) */}
              {/* transform: translateY(-50%) centers the 32px button on the 1px divider */}
              <button
                aria-label="Intercambiar origen y destino"
                onClick={() => { setOrigin(destination); setDestination(origin); }}
                style={{
                  position:       'absolute',
                  right:          12,
                  top:            56,
                  transform:      'translateY(-50%)',
                  width:          32,
                  height:         32,
                  borderRadius:   '100px',
                  border:         '1px solid #A1A1A1',
                  background:     '#FFFFFF',
                  display:        'flex',
                  alignItems:     'center',
                  justifyContent: 'center',
                  cursor:         'pointer',
                  padding:        0,
                  zIndex:         2,
                  boxShadow:      '0px 1px 4px rgba(0,0,0,0.08)',
                }}
              >
                <SwapVerticalIcon />
              </button>
            </div>

            {/* Fechas */}
            <MobileField label="Fechas" placeholder="Selecciona cuando viajas" />

            {/* Pasajeros y clase */}
            <MobileField label="Pasajeros y clase" value="1 pasajero | Económica" />

            {/* Buscar button */}
            <button
              style={{
                width:          '100%',
                height:         52,
                background:     'linear-gradient(124.86deg, #DF0032 15.19%, #FF2C4E 85.32%)',
                borderRadius:   48,
                border:         'none',
                cursor:         'pointer',
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'center',
                gap:            8,
                boxShadow:      '-4px 4px 12px 0px rgba(223,1,50,0.34), 4px 4px 12px 0px rgba(255,44,78,0.34)',
                fontFamily:     "'Outfit', sans-serif",
                fontWeight:     600,
                fontSize:       16,
                lineHeight:     '18px',
                color:          '#FFFFFF',
                position:       'relative',
              }}
            >
              <span>Buscar</span>
              {/* Plane icon positioned right of center */}
              <div style={{ position: 'absolute', right: 40 }}>
                <PlaneIconSVG />
              </div>
            </button>
          </div>
          </>
          )} {/* end compactMobileSearch ternary */}
        </div>
      </section>
    </>
  );
}
