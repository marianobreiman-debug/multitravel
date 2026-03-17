'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './HotelsSection.module.css';

// ─── Clock icon (vuesax/linear style) ────────────────────────────────────────
function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.5" />
      <path d="M12 7v5l3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── Chevron icon for arrows ──────────────────────────────────────────────────
function ChevronIcon({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d={dir === 'left' ? 'M15 18l-6-6 6-6' : 'M9 18l6-6-6-6'}
        stroke="#272626"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
interface Hotel {
  city:        string;
  country:     string;
  badge:       string;
  image:       string;
  origPrice:   string;
  discount:    string;
  finalPrice:  string;
}

const HOTELS: Hotel[] = [
  {
    city:       'Río de Janeiro',
    country:    'Brasil',
    badge:      'Cancelación gratis',
    image:      'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=600&q=80',
    origPrice:  '$ 2.500.000',
    discount:   '24% OFF',
    finalPrice: '$ 150.000',
  },
  {
    city:       'Buenos Aires',
    country:    'Argentina',
    badge:      'Cancelación gratis',
    image:      'https://images.unsplash.com/photo-1612294037637-ec328d0e075e?auto=format&fit=crop&w=600&q=80',
    origPrice:  '$ 1.800.000',
    discount:   '15% OFF',
    finalPrice: '$ 120.000',
  },
  {
    city:       'Nueva York',
    country:    'Estados Unidos',
    badge:      'Cancelación gratis',
    image:      'https://images.unsplash.com/photo-1490644658840-3f2e3f8c5625?auto=format&fit=crop&w=600&q=80',
    origPrice:  '$ 3.200.000',
    discount:   '20% OFF',
    finalPrice: '$ 270.000',
  },
  {
    city:       'San Carlos de Bariloche',
    country:    'Argentina',
    badge:      'Desayuno incluido',
    image:      'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=600&q=80',
    origPrice:  '$ 980.000',
    discount:   '18% OFF',
    finalPrice: '$ 80.000',
  },
  {
    city:       'Cancún',
    country:    'México',
    badge:      'Hasta 12 cuotas',
    image:      'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=600&q=80',
    origPrice:  '$ 2.100.000',
    discount:   '30% OFF',
    finalPrice: '$ 180.000',
  },
  {
    city:       'Miami',
    country:    'Estados Unidos',
    badge:      'Reserva flexible',
    image:      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80',
    origPrice:  '$ 5.500.000',
    discount:   '22% OFF',
    finalPrice: '$ 290.000',
  },
];

const VISIBLE_DESKTOP = 4;
const VISIBLE_MOBILE  = 1;
const GAP             = 16;

// ─── Card ─────────────────────────────────────────────────────────────────────
function HotelCard({ hotel }: { hotel: Hotel }) {
  return (
    <div
      style={{
        position:     'relative',
        height:       260,
        borderRadius: 16,
        overflow:     'hidden',
        flexShrink:   0,
      }}
    >
      {/* Background image */}
      <img
        src={hotel.image}
        alt={hotel.city}
        loading="lazy"
        style={{
          position:   'absolute',
          inset:      0,
          width:      '100%',
          height:     '100%',
          objectFit:  'cover',
        }}
      />

      {/* Full-card gradient overlay — top transparent → bottom dark */}
      <div
        style={{
          position:   'absolute',
          inset:      0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.85) 100%)',
        }}
      />

      {/* Badge — centered at top */}
      <div
        style={{
          position:       'absolute',
          top:            16,
          left:           '50%',
          transform:      'translateX(-50%)',
          background:     'rgba(0,0,0,0.4)',
          borderRadius:   8,
          padding:        '4px 8px',
          display:        'flex',
          alignItems:     'center',
          gap:            4,
          whiteSpace:     'nowrap',
        }}
      >
        <ClockIcon />
        <span
          style={{
            fontFamily:  "'Outfit', sans-serif",
            fontWeight:  500,
            fontSize:    12,
            color:       '#FFFFFF',
            lineHeight:  '16px',
          }}
        >
          {hotel.badge}
        </span>
      </div>

      {/* Bottom panel — dark frosted strip */}
      <div
        style={{
          position:    'absolute',
          bottom:      0,
          left:        0,
          right:       0,
          height:      114,
          background:  'rgba(0,0,0,0.60)',
          borderTop:   '1px solid rgba(255,255,255,0.12)',
          padding:     '7px 16px 12px',
          display:     'flex',
          flexDirection: 'column',
          gap:         8,
        }}
      >
        {/* City name */}
        <p
          style={{
            fontFamily:    "'Outfit', sans-serif",
            fontWeight:    600,
            fontSize:      18,
            lineHeight:    '24px',
            letterSpacing: '-0.18px',
            color:         '#FFFFFF',
            margin:        0,
          }}
        >
          {hotel.city}
        </p>

        {/* Price row + CTA */}
        <div
          style={{
            display:        'flex',
            alignItems:     'flex-end',
            justifyContent: 'space-between',
            gap:            8,
          }}
        >
          {/* Prices */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            <span
              style={{
                fontFamily:  "'Outfit', sans-serif",
                fontWeight:  400,
                fontSize:    10,
                lineHeight:  '14px',
                color:       '#FFFFFF',
                textTransform: 'uppercase',
              }}
            >
              Desde
            </span>
            {/* Strikethrough + discount */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <span
                style={{
                  fontFamily:      "'Outfit', sans-serif",
                  fontWeight:      500,
                  fontSize:        14,
                  lineHeight:      '16px',
                  color:           '#FF5C7F',
                  textDecoration:  'line-through',
                  whiteSpace:      'nowrap',
                }}
              >
                {hotel.origPrice}
              </span>
              <span style={{ color: '#55D355', fontWeight: 500, fontSize: 14, lineHeight: '16px', fontFamily: "'Outfit', sans-serif" }}>|</span>
              <span
                style={{
                  fontFamily:  "'Outfit', sans-serif",
                  fontWeight:  500,
                  fontSize:    14,
                  lineHeight:  '16px',
                  color:       '#55D355',
                  whiteSpace:  'nowrap',
                }}
              >
                {hotel.discount}
              </span>
            </div>
            {/* Final price */}
            <p
              style={{
                fontFamily:    "'Outfit', sans-serif",
                fontWeight:    800,
                fontSize:      20,
                lineHeight:    '28px',
                letterSpacing: '-0.2px',
                color:         '#FFFFFF',
                margin:        0,
                whiteSpace:    'nowrap',
              }}
            >
              {hotel.finalPrice}
            </p>
          </div>

          {/* CTA button */}
          <button
            style={{
              background:    '#FFFFFF',
              border:        'none',
              borderRadius:  40,
              height:        40,
              padding:       '0 16px',
              fontFamily:    "'Outfit', sans-serif",
              fontWeight:    500,
              fontSize:      12,
              color:         '#226FCB',
              cursor:        'pointer',
              whiteSpace:    'nowrap',
              flexShrink:    0,
            }}
          >
            Ver ofertas
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export function HotelsSection() {
  const [active, setActive]     = useState(0);
  const trackRef                = useRef<HTMLDivElement>(null);
  const outerRef                = useRef<HTMLDivElement>(null);
  const [cardW, setCardW]       = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Calculate card width dynamically based on container width + breakpoint
  useEffect(() => {
    const calc = () => {
      if (!outerRef.current) return;
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      const totalW  = outerRef.current.offsetWidth;
      const visible = mobile ? VISIBLE_MOBILE : VISIBLE_DESKTOP;
      setCardW((totalW - GAP * (visible - 1)) / visible);
    };
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);

  const maxIndex   = isMobile ? HOTELS.length - VISIBLE_MOBILE : HOTELS.length - VISIBLE_DESKTOP;
  const translateX = active * (cardW + GAP);

  const prev = () => setActive(a => Math.max(0, a - 1));
  const next = () => setActive(a => Math.min(maxIndex, a + 1));

  return (
    <section
      style={{
        background: '#DFEEFF',
        padding:    '32px 0 40px',
      }}
    >
      <div className={styles.innerWrap}>
        {/* Header */}
        <div
          style={{
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'space-between',
            marginBottom:   24,
          }}
        >
          <p
            style={{
              fontFamily:    "'Outfit', sans-serif",
              fontWeight:    700,
              fontSize:      20,
              lineHeight:    '28px',
              letterSpacing: '-0.2px',
              color:         '#272626',
              margin:        0,
            }}
          >
            Hoteles en las mejores ciudades
          </p>
          <a
            href="#"
            style={{
              fontFamily:  "'Outfit', sans-serif",
              fontWeight:  600,
              fontSize:    13,
              color:       '#226FCB',
              display:     'inline-flex',
              alignItems:  'center',
              gap:         4,
            }}
          >
            Ver todos
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#226FCB" strokeWidth="2.5" strokeLinecap="round"><path d="M8.25 4.5l7.5 7.5-7.5 7.5"/></svg>
          </a>
        </div>

        {/* Carousel */}
        <div style={{ position: 'relative' }}>
          {/* Left arrow */}
          <button
            onClick={prev}
            disabled={active === 0}
            style={{
              position:       'absolute',
              left:           -24,
              top:            '50%',
              transform:      'translateY(-50%)',
              zIndex:         10,
              width:          48,
              height:         48,
              borderRadius:   '50%',
              background:     '#FFFFFF',
              border:         '1.5px solid #E2E8F0',
              display:        'flex',
              alignItems:     'center',
              justifyContent: 'center',
              cursor:         active === 0 ? 'not-allowed' : 'pointer',
              opacity:        active === 0 ? 0.35 : 0.85,
              boxShadow:      '0px 4px 12px rgba(13,78,136,0.12)',
              transition:     'all 0.2s',
            }}
          >
            <ChevronIcon dir="left" />
          </button>

          {/* Track */}
          <div ref={outerRef} style={{ overflow: 'hidden' }}>
            <div
              ref={trackRef}
              style={{
                display:    'flex',
                gap:        GAP,
                transform:  `translateX(-${translateX}px)`,
                transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {HOTELS.map((hotel, i) => (
                <div
                  key={i}
                  style={{
                    width:     cardW > 0 ? cardW : undefined,
                    flexShrink: 0,
                  }}
                >
                  <HotelCard hotel={hotel} />
                </div>
              ))}
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            disabled={active >= maxIndex}
            style={{
              position:       'absolute',
              right:          -24,
              top:            '50%',
              transform:      'translateY(-50%)',
              zIndex:         10,
              width:          48,
              height:         48,
              borderRadius:   '50%',
              background:     '#FFFFFF',
              border:         '1.5px solid #E2E8F0',
              display:        'flex',
              alignItems:     'center',
              justifyContent: 'center',
              cursor:         active >= maxIndex ? 'not-allowed' : 'pointer',
              opacity:        active >= maxIndex ? 0.35 : 0.85,
              boxShadow:      '0px 4px 12px rgba(13,78,136,0.12)',
              transition:     'all 0.2s',
            }}
          >
            <ChevronIcon dir="right" />
          </button>
        </div>

        {/* Dots */}
        <div
          style={{
            display:        'flex',
            justifyContent: 'center',
            alignItems:     'center',
            gap:            6,
            marginTop:      20,
          }}
        >
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
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
      </div>
    </section>
  );
}
