'use client';

import { useState } from 'react';

// ─── Figma asset URLs (válidos 7 días desde 2026-03-16)
const BG_IMAGE        = 'https://www.figma.com/api/mcp/asset/770f42b0-77cb-4930-a032-3fd7a3b5b6cd';
const ICON_ARROW_DOWN = 'https://www.figma.com/api/mcp/asset/50402091-1f1c-4753-880d-6f218e80f081';
const ICON_SWAP       = 'https://www.figma.com/api/mcp/asset/e047b965-5bb7-42b7-bf4b-60b4f6756bf9';
const ICON_BUSCAR     = 'https://www.figma.com/api/mcp/asset/269891f9-1043-4e94-8d88-33763dc2ae23';

// ─── Tab icons — vuesax/linear style
function VuelosIcon({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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

const TABS = [
  { id: 'vuelos',       label: 'Vuelos',       Icon: VuelosIcon },
  { id: 'alojamientos', label: 'Alojamientos', Icon: AlojamientosIcon },
  { id: 'paquetes',     label: 'Paquetes',     Icon: PaquetesIcon },
];

// ─── Typography tokens
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
  fontFamily:    "'Outfit', sans-serif",
  fontWeight:    500,
  fontSize:      14,
  lineHeight:    '20px',
  color:         '#272626',
  whiteSpace:    'nowrap',
  overflow:      'hidden',
  textOverflow:  'ellipsis',
};
const T_PLACEHOLDER: React.CSSProperties = {
  fontFamily:    "'Outfit', sans-serif",
  fontWeight:    400,
  fontSize:      14,
  lineHeight:    '20px',
  color:         '#8D8D8D',
  whiteSpace:    'nowrap',
  overflow:      'hidden',
  textOverflow:  'ellipsis',
};

// ─── Input segment
interface SegmentProps {
  label:         string;
  value?:        string;
  placeholder?:  string;
  width?:        number | string;
  flex?:         number;
  borderRadius?: string;
  paddingLeft?:  number;
  borderLeft?:   string;
  rightSlot?:    React.ReactNode;
}

function Segment({
  label, value, placeholder,
  width, flex,
  borderRadius = '12px',
  paddingLeft = 16,
  borderLeft,
  rightSlot,
}: SegmentProps) {
  return (
    <div
      style={{
        backgroundColor: '#F1F3F6',
        borderRadius,
        padding:        `8px 16px 8px ${paddingLeft}px`,
        display:        'flex',
        flexDirection:  'column',
        gap:            2,
        width,
        flex,
        flexShrink:     flex ? 1 : 0,
        boxSizing:      'border-box',
        cursor:         'pointer',
        minWidth:       0,
        borderLeft,
      }}
    >
      <span style={T_LABEL}>{label}</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 4, minWidth: 0 }}>
        <span style={value ? T_VALUE : T_PLACEHOLDER}>
          {value ?? placeholder}
        </span>
        {rightSlot}
      </div>
    </div>
  );
}

// ─── Responsive content wrapper
function ContentWrap({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div
      style={{
        maxWidth: 1240,
        width:    'calc(100% - 126px)',
        margin:   '0 auto',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ─── Breadcrumb
function ChevronRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
      <path d="M9 18l6-6-6-6" stroke="rgba(255,255,255,0.55)"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function Breadcrumb({ items }: { items: string[] }) {
  return (
    <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 16 }}>
      {items.map((crumb, i) => (
        <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {i < items.length - 1 ? (
            <a
              href={i === 0 ? '/home' : '#'}
              style={{
                fontFamily:     "'Outfit', sans-serif",
                fontWeight:     400,
                fontSize:       13,
                lineHeight:     '18px',
                color:          'rgba(255,255,255,0.65)',
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
                color:      'rgba(255,255,255,0.95)',
              }}
            >
              {crumb}
            </span>
          )}
          {i < items.length - 1 && <ChevronRight />}
        </span>
      ))}
    </nav>
  );
}

// ─── Props ──────────────────────────────────────────────────────────────────
interface HeroSearchProps {
  /** Optional background image URL (overrides the default Figma asset) */
  heroImage?:          string;
  /** Pre-filled origin value (editable) */
  initialOrigin?:      string;
  /** Pre-filled destination value (editable) */
  initialDestination?: string;
  /** Breadcrumb items shown above the title. If omitted, no breadcrumb is rendered. */
  breadcrumb?:         string[];
}

// ─────────────────────────────────────────────
export function HeroSearch({
  heroImage,
  initialOrigin,
  initialDestination,
  breadcrumb,
}: HeroSearchProps = {}) {
  const [activeTab, setActiveTab]     = useState('vuelos');
  const [origin, setOrigin]           = useState(initialOrigin      ?? '');
  const [destination, setDestination] = useState(initialDestination ?? '');

  const bgImage = heroImage ?? BG_IMAGE;

  return (
    <section
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

        {/* ── Breadcrumb (only when provided) ─────────────── */}
        {breadcrumb && breadcrumb.length > 0 && (
          <Breadcrumb items={breadcrumb} />
        )}

        {/* ── Title ───────────────────────────────────────── */}
        <h1
          style={{
            fontFamily:    "'Outfit', sans-serif",
            fontSize:      36,
            lineHeight:    '44px',
            letterSpacing: '-0.36px',
            color:         '#FFFFFF',
            margin:        '0 0 40px',
            padding:       0,
          }}
        >
          <span style={{ fontWeight: 500 }}>Ofertas de </span>
          <span style={{ fontWeight: 700 }}>3 cuotas sin interés</span>
          <br />
          <span style={{ fontWeight: 500 }}>en destinos internacionales</span>
        </h1>

        {/* ── Search block ─────────────────────────────────── */}
        <div>

          {/* Glass Texture 2 — tabs backdrop */}
          <div
            style={{
              display:        'inline-flex',
              alignItems:     'center',
              gap:            4,
              background:     'rgba(0,0,0,0.6)',
              borderRadius:   '32px 32px 0 0',
              padding:        '12px 20px',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
            }}
          >
            {TABS.map(({ id, label, Icon }) => {
              const active = activeTab === id;
              const color  = active ? '#FFFFFF' : '#DFDFDF';
              return (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  style={{
                    display:      'flex',
                    alignItems:   'center',
                    gap:          8,
                    padding:      '8px 20px',
                    borderRadius: active ? 48 : 12,
                    background:   active ? 'rgba(255,255,255,0.1)' : 'transparent',
                    border:       'none',
                    cursor:       'pointer',
                    fontFamily:   "'Outfit', sans-serif",
                    fontWeight:   active ? 600 : 400,
                    fontSize:     14,
                    lineHeight:   '20px',
                    color,
                    whiteSpace:   'nowrap',
                    transition:   'all 0.15s ease',
                  }}
                >
                  <Icon color={color} />
                  {label}
                </button>
              );
            })}
          </div>

          {/* Glass Texture 1 — form backdrop */}
          <div
            style={{
              background:          'rgba(0,0,0,0.6)',
              borderRadius:        '0 64px 64px 32px',
              padding:             12,
              boxSizing:           'border-box',
              display:             'flex',
              alignItems:         'stretch',
              backdropFilter:      'blur(6px)',
              WebkitBackdropFilter:'blur(6px)',
            }}
          >
            {/* ── White form card ─────────────────────────────── */}
            <div
              style={{
                flex:         1,
                background:   '#FFFFFF',
                borderRadius: '16px 64px 64px 16px',
                boxShadow:    '0px 6px 15px -2px rgba(39,38,38,0.12)',
                display:      'flex',
                alignItems:   'stretch',
                padding:      12,
                gap:          8,
                boxSizing:    'border-box',
                overflow:     'hidden',
              }}
            >
              {/* ── Left group ─────────────────────────────────── */}
              <div style={{ flex: 1, display: 'flex', gap: 8, alignItems: 'stretch', minWidth: 0 }}>

                {/* Tipo de vuelo */}
                <Segment
                  label="Tipo de vuelo"
                  value="Ida y vuelta"
                  width={140}
                  rightSlot={
                    <img
                      src={ICON_ARROW_DOWN}
                      alt=""
                      style={{ width: 24, height: 24, flexShrink: 0, marginLeft: 'auto' }}
                    />
                  }
                />

                {/* Origin + Destination — joined, swap button between */}
                <div style={{ position: 'relative', display: 'flex', flexShrink: 0 }}>
                  <Segment
                    label="Origen"
                    value={origin || undefined}
                    placeholder="Ingresa desde dónde viajas"
                    width={230}
                    borderRadius="12px 0 0 12px"
                  />
                  <Segment
                    label="Destino"
                    value={destination || undefined}
                    placeholder="Ingresa hacia dónde viajas"
                    width={230}
                    borderRadius="0 12px 12px 0"
                    paddingLeft={28}
                    borderLeft="1px solid #CACACA"
                  />
                  {/* Swap circular button */}
                  <button
                    aria-label="Intercambiar origen y destino"
                    onClick={() => {
                      setOrigin(destination);
                      setDestination(origin);
                    }}
                    style={{
                      position:       'absolute',
                      left:           '50%',
                      top:            '50%',
                      transform:      'translate(-50%, -50%)',
                      width:          28,
                      height:         28,
                      borderRadius:   '100px',
                      border:         '0.75px solid #CACACA',
                      background:     '#FFFFFF',
                      display:        'flex',
                      alignItems:     'center',
                      justifyContent: 'center',
                      cursor:         'pointer',
                      padding:        0,
                      zIndex:         2,
                      flexShrink:     0,
                      boxSizing:      'border-box',
                    }}
                  >
                    <img src={ICON_SWAP} alt="" style={{ width: 16, height: 16, transform: 'rotate(90deg)' }} />
                  </button>
                </div>

                {/* Fechas */}
                <Segment
                  label="Fechas"
                  placeholder="Selecciona cuando viajas"
                  flex={1}
                />
              </div>

              {/* Personas y clase */}
              <Segment
                label="Personas y clase"
                value="1 persona | Económica"
                width={152}
              />

              {/* Buscar */}
              <button
                style={{
                  width:          144,
                  flexShrink:     0,
                  alignSelf:      'stretch',
                  background:     'linear-gradient(107.03deg, #DF0032 15.19%, #FF2C4E 85.32%)',
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
                  padding:        '8px 16px',
                  boxSizing:      'border-box',
                }}
              >
                <img src={ICON_BUSCAR} alt="" style={{ width: 28, height: 28, flexShrink: 0 }} />
                Buscar
              </button>
            </div>
          </div>
        </div>

      </ContentWrap>
    </section>
  );
}
