'use client';

import { useState } from 'react';

// ─── Icons ───────────────────────────────────────────────────────────────────

function PlaneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
      <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
        stroke="#797878" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="12" cy="12" r="9" stroke="#0D4E88" strokeWidth="1.5"/>
      <path d="M12 7v5l3 3" stroke="#0D4E88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ChevronIcon({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d={dir === 'left' ? 'M15 18l-6-6 6-6' : 'M9 18l6-6-6-6'}
        stroke="#226FCB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── Campaign badge ("pro viaje" style) ──────────────────────────────────────

function CampaignBadge() {
  return (
    <div
      style={{
        width:          44,
        height:         44,
        borderRadius:   10,
        background:     'linear-gradient(145deg, #0A3F6F 0%, #1560B0 100%)',
        display:        'flex',
        flexDirection:  'column',
        alignItems:     'center',
        justifyContent: 'center',
        boxShadow:      '0px 6px 15px 0px rgba(39,38,38,0.12)',
        flexShrink:     0,
      }}
    >
      <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 9, color: '#FFFFFF', lineHeight: '11px', letterSpacing: '0.02em' }}>
        pro
      </span>
      <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 10, color: '#BDDBFF', lineHeight: '12px', letterSpacing: '-0.01em' }}>
        viaje≡
      </span>
    </div>
  );
}

// ─── Data ────────────────────────────────────────────────────────────────────

interface Offer {
  id:            number;
  image:         string;
  flightType:    string;
  destination:   string;
  badge:         string;
  originalPrice: string;
  discount:      string;
  finalPrice:    string;
  slug:          string;
}

const OFFERS: Offer[] = [
  {
    id:            1,
    image:         'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=300&q=80',
    flightType:    'Ida y vuelta',
    destination:   'Río de Janeiro',
    badge:         'Desayuno incluido',
    originalPrice: '$ 2.500.000',
    discount:      '24% OFF',
    finalPrice:    '$ 150.000',
    slug:          'brasil/rio-de-janeiro',
  },
  {
    id:            2,
    image:         'https://images.unsplash.com/photo-1612294037637-ec328d0e075e?auto=format&fit=crop&w=300&q=80',
    flightType:    'Solo ida',
    destination:   'Buenos Aires',
    badge:         'Almuerzo incluido',
    originalPrice: '$ 1.800.000',
    discount:      '15% OFF',
    finalPrice:    '$ 120.000',
    slug:          'argentina/buenos-aires',
  },
  {
    id:            3,
    image:         'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=300&q=80',
    flightType:    'Ida y vuelta',
    destination:   'S. C. de Bariloche',
    badge:         'Cena incluida',
    originalPrice: '$ 3.000.000',
    discount:      '20% OFF',
    finalPrice:    '$ 250.000',
    slug:          'argentina/bariloche',
  },
  {
    id:            4,
    image:         'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=300&q=80',
    flightType:    'Ida y vuelta',
    destination:   'Cancún',
    badge:         'Equipaje incluido',
    originalPrice: '$ 4.200.000',
    discount:      '30% OFF',
    finalPrice:    '$ 180.000',
    slug:          'mexico/cancun',
  },
  {
    id:            5,
    image:         'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=300&q=80',
    flightType:    'Ida y vuelta',
    destination:   'Miami',
    badge:         'Tarifa promocional',
    originalPrice: '$ 5.500.000',
    discount:      '22% OFF',
    finalPrice:    '$ 290.000',
    slug:          'eeuu/miami',
  },
  {
    id:            6,
    image:         'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=300&q=80',
    flightType:    'Solo ida',
    destination:   'París',
    badge:         'Cuotas sin interés',
    originalPrice: '$ 8.900.000',
    discount:      '18% OFF',
    finalPrice:    '$ 410.000',
    slug:          'francia/paris',
  },
];

const VISIBLE   = 3;
const GAP       = 16;
const MAX_INDEX = OFFERS.length - VISIBLE; // 3

// ─── Card ────────────────────────────────────────────────────────────────────

function FlightCard({ offer }: { offer: Offer }) {
  return (
    <div
      style={{
        background:   '#FFFFFF',
        borderRadius: 24,
        boxShadow:    '0px 4px 20px 0px rgba(39,38,38,0.10), 0px 1px 4px 0px rgba(39,38,38,0.06)',
        display:      'flex',
        flexDirection:'row',
        alignItems:   'stretch',
        overflow:     'hidden',
        height:       192,
        flexShrink:   0,
      }}
    >
      {/* ── Image ────────────────────────────────────────────────────────── */}
      <div style={{ width: 120, flexShrink: 0, position: 'relative', overflow: 'hidden' }}>
        <img
          src={offer.image}
          alt={offer.destination}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>

      {/* ── Content ──────────────────────────────────────────────────────── */}
      <div
        style={{
          flex:           1,
          display:        'flex',
          flexDirection:  'column',
          justifyContent: 'space-between',
          padding:        '12px 12px 12px 12px',
          position:       'relative',
          minWidth:       0,
        }}
      >
        {/* Campaign badge — absolute top-right */}
        <div style={{ position: 'absolute', top: 12, right: 12, zIndex: 1 }}>
          <CampaignBadge />
        </div>

        {/* Top block */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, paddingRight: 52 }}>
          {/* Flight type */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <PlaneIcon />
            <span
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 400,
                fontSize:   12,
                lineHeight: '16px',
                color:      '#797878',
                whiteSpace: 'nowrap',
              }}
            >
              {offer.flightType}
            </span>
          </div>

          {/* Destination */}
          <div
            style={{
              fontFamily:    "'Outfit', sans-serif",
              fontWeight:    600,
              fontSize:      17,
              lineHeight:    '22px',
              letterSpacing: '-0.17px',
              color:         '#272626',
              whiteSpace:    'nowrap',
              overflow:      'hidden',
              textOverflow:  'ellipsis',
            }}
          >
            {offer.destination}
          </div>

          {/* Badge */}
          <div
            style={{
              display:      'inline-flex',
              alignItems:   'center',
              gap:          6,
              background:   '#BDDBFF',
              borderRadius: 4,
              padding:      '3px 8px',
              width:        'fit-content',
            }}
          >
            <ClockIcon />
            <span
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 500,
                fontSize:   11,
                lineHeight: '16px',
                color:      '#0D4E88',
                whiteSpace: 'nowrap',
              }}
            >
              {offer.badge}
            </span>
          </div>
        </div>

        {/* Bottom block: price left + CTA right */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 8 }}>
          {/* Price */}
          <div>
            <div
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 400,
                fontSize:   11,
                lineHeight: '14px',
                color:      '#051B30',
                marginBottom: 2,
              }}
            >
              Desde
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 2 }}>
              <span
                style={{
                  fontFamily:     "'Outfit', sans-serif",
                  fontWeight:     500,
                  fontSize:       12,
                  lineHeight:     '16px',
                  color:          '#FF5C7F',
                  textDecoration: 'line-through',
                  textDecorationSkipInk: 'none',
                }}
              >
                {offer.originalPrice}
              </span>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: 12, color: '#2EB92E' }}>|</span>
              <span
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 600,
                  fontSize:   12,
                  lineHeight: '16px',
                  color:      '#2EB92E',
                }}
              >
                {offer.discount}
              </span>
            </div>
            <div
              style={{
                fontFamily:    "'Outfit', sans-serif",
                fontWeight:    700,
                fontSize:      20,
                lineHeight:    '26px',
                letterSpacing: '-0.2px',
                color:         '#272626',
              }}
            >
              {offer.finalPrice}
            </div>
          </div>

          {/* CTA */}
          <a
            href={`/home/vuelos/${offer.slug}`}
            style={{
              display:      'inline-flex',
              alignItems:   'center',
              justifyContent: 'center',
              background:   '#226FCB',
              borderRadius: 32,
              height:       36,
              padding:      '0 14px',
              textDecoration: 'none',
              fontFamily:   "'Outfit', sans-serif",
              fontWeight:   500,
              fontSize:     13,
              lineHeight:   '16px',
              color:        '#FFFFFF',
              whiteSpace:   'nowrap',
              flexShrink:   0,
              cursor:       'pointer',
            }}
          >
            Ver vuelo
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────

export function FlightOffersSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => Math.max(0, i - 1));
  const next = () => setActive((i) => Math.min(MAX_INDEX, i + 1));

  // Each card occupies 1/3 of the 1240px container minus 2 gaps
  // cardWidth = (1240 - GAP*(VISIBLE-1)) / VISIBLE
  const CARD_W = (1240 - GAP * (VISIBLE - 1)) / VISIBLE; // ≈ 402.67px

  return (
    <section style={{ padding: '64px 0', background: '#F4F6F8' }}>
      {/* ── Content wrapper ─────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: 1240,
          width:    'calc(100% - 126px)',
          margin:   '0 auto',
        }}
      >
        {/* Header row */}
        <div
          style={{
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'space-between',
            marginBottom:   24,
          }}
        >
          <h2
            style={{
              fontFamily:    "'Outfit', sans-serif",
              fontWeight:    600,
              fontSize:      22,
              lineHeight:    '28px',
              letterSpacing: '-0.22px',
              color:         '#272626',
              margin:        0,
            }}
          >
            Las mejores ofertas en vuelos
          </h2>

          {/* Arrow buttons — desktop top-right */}
          <div style={{ display: 'flex', gap: 8 }}>
            <button
              onClick={prev}
              disabled={active === 0}
              style={{
                width:          40,
                height:         40,
                borderRadius:   '50%',
                border:         '1.5px solid #CACACA',
                background:     '#FFFFFF',
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'center',
                cursor:         active === 0 ? 'not-allowed' : 'pointer',
                opacity:        active === 0 ? 0.4 : 1,
                transition:     'opacity 0.2s',
                flexShrink:     0,
              }}
              aria-label="Anterior"
            >
              <ChevronIcon dir="left" />
            </button>
            <button
              onClick={next}
              disabled={active === MAX_INDEX}
              style={{
                width:          40,
                height:         40,
                borderRadius:   '50%',
                border:         '1.5px solid #CACACA',
                background:     '#FFFFFF',
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'center',
                cursor:         active === MAX_INDEX ? 'not-allowed' : 'pointer',
                opacity:        active === MAX_INDEX ? 0.4 : 1,
                transition:     'opacity 0.2s',
                flexShrink:     0,
              }}
              aria-label="Siguiente"
            >
              <ChevronIcon dir="right" />
            </button>
          </div>
        </div>

        {/* Carousel track */}
        <div style={{ overflow: 'hidden' }}>
          <div
            style={{
              display:    'flex',
              gap:        `${GAP}px`,
              transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
              transform:  `translateX(calc(-${active} * (${CARD_W}px + ${GAP}px)))`,
            }}
          >
            {OFFERS.map((offer) => (
              <div key={offer.id} style={{ width: CARD_W, flexShrink: 0 }}>
                <FlightCard offer={offer} />
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div
          style={{
            display:        'flex',
            justifyContent: 'center',
            alignItems:     'center',
            gap:            6,
            marginTop:      24,
          }}
        >
          {Array.from({ length: MAX_INDEX + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Ir a página ${i + 1}`}
              style={{
                width:        i === active ? 20 : 10,
                height:       10,
                borderRadius: 24,
                border:       i === active ? '1px solid rgba(255,255,255,0.6)' : 'none',
                background:   i === active ? '#226FCB' : '#CACACA',
                cursor:       'pointer',
                padding:      0,
                transition:   'all 0.25s ease',
                flexShrink:   0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
