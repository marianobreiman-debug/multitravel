'use client';

import type { FlightDateOffer } from '@/data/destinations';
import styles from './FlightDateCards.module.css';

// ─── Airline logo placeholder (IATA code styled badge) ───────────────────────

function AirlineBadge({ code }: { code: string }) {
  const colors: Record<string, { bg: string; text: string }> = {
    AR: { bg: '#73BFFF', text: '#003F8C' },
    LA: { bg: '#E00', text: '#fff' },
    AA: { bg: '#0078D7', text: '#fff' },
    AF: { bg: '#002395', text: '#fff' },
    CM: { bg: '#00438B', text: '#fff' },
    AV: { bg: '#E31837', text: '#fff' },
    IB: { bg: '#CF0A2C', text: '#fff' },
    LH: { bg: '#05164D', text: '#FFD700' },
    KL: { bg: '#009EE0', text: '#fff' },
    FO: { bg: '#FF6B00', text: '#fff' },
    JA: { bg: '#00B4D8', text: '#fff' },
    UA: { bg: '#002244', text: '#fff' },
    G3: { bg: '#FF6600', text: '#fff' },
  };
  const c = colors[code] ?? { bg: '#226FCB', text: '#fff' };
  return (
    <div
      style={{
        width:          44,
        height:         44,
        borderRadius:   10,
        background:     c.bg,
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        flexShrink:     0,
      }}
    >
      <span
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 700,
          fontSize:   13,
          color:      c.text,
          letterSpacing: '-0.5px',
        }}
      >
        {code}
      </span>
    </div>
  );
}

// ─── Icons ───────────────────────────────────────────────────────────────────

function PlaneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
        stroke="#8D8D8D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="#8D8D8D" strokeWidth="1.5"/>
      <path d="M12 7v5l3 3" stroke="#8D8D8D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="18" rx="2" stroke="#8D8D8D" strokeWidth="1.5"/>
      <path d="M16 2v4M8 2v4M3 10h18" stroke="#8D8D8D" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

// ─── Single flight card ───────────────────────────────────────────────────────

function FlightCard({ offer, destination }: { offer: FlightDateOffer; destination: string }) {
  const isBest = offer.badge === 'Más vendido';

  return (
    <div
      style={{
        background:   '#FFFFFF',
        borderRadius: 20,
        boxShadow:    '0px 2px 8px 0px rgba(39,38,38,0.06)',
        padding:      '20px 20px 20px 20px',
        display:      'flex',
        flexDirection: 'column',
        gap:          16,
        position:     'relative',
        overflow:     'hidden',
      }}
    >
      {/* Badge */}
      {offer.badge && (
        <div
          style={{
            position:   'absolute',
            top:        16,
            right:      16,
            background: isBest ? '#226FCB' : '#2EB92E',
            borderRadius: 24,
            padding:    '3px 10px',
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 600,
            fontSize:   11,
            color:      '#FFFFFF',
          }}
        >
          {offer.badge}
        </div>
      )}

      {/* Top row: airline + route */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <AirlineBadge code={offer.airlineLogo} />
        <div>
          <div
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 600,
              fontSize:   15,
              lineHeight: '20px',
              color:      '#272626',
            }}
          >
            {offer.airline}
          </div>
          <div
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 400,
              fontSize:   12,
              color:      '#8D8D8D',
              marginTop:  2,
            }}
          >
            Buenos Aires → {destination}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: '#F1F3F6', margin: '0 -20px' }} />

      {/* Flight details grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 16px' }}>

        {/* Ida */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 2 }}>
            <CalendarIcon />
            <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: 11, color: '#8D8D8D', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Salida</span>
          </div>
          <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 14, color: '#272626' }}>
            {offer.departure}
          </div>
        </div>

        {/* Vuelta */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 2 }}>
            <CalendarIcon />
            <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: 11, color: '#8D8D8D', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Regreso</span>
          </div>
          <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 14, color: '#272626' }}>
            {offer.return}
          </div>
        </div>

        {/* Duración vuelo */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 2 }}>
            <ClockIcon />
            <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: 11, color: '#8D8D8D', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Duración</span>
          </div>
          <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 14, color: '#272626' }}>
            {offer.duration_h}
          </div>
        </div>

        {/* Escala */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 2 }}>
            <PlaneIcon />
            <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: 11, color: '#8D8D8D', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Escala</span>
          </div>
          <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 14, color: offer.stops === 'Directo' ? '#2EB92E' : '#272626' }}>
            {offer.stops}
            {offer.stopDetail && (
              <span style={{ fontWeight: 400, color: '#8D8D8D', fontSize: 12 }}> {offer.stopDetail}</span>
            )}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: '#F1F3F6', margin: '0 -20px' }} />

      {/* Bottom: price + CTA */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
        <div>
          <div
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 400,
              fontSize:   11,
              color:      '#8D8D8D',
              marginBottom: 2,
            }}
          >
            {offer.priceLabel}
          </div>
          <div
            style={{
              fontFamily:    "'Outfit', sans-serif",
              fontWeight:    700,
              fontSize:      22,
              lineHeight:    '28px',
              letterSpacing: '-0.22px',
              color:         '#272626',
            }}
          >
            {offer.price}
          </div>
        </div>

        <a
          href="#"
          style={{
            display:        'inline-flex',
            alignItems:     'center',
            justifyContent: 'center',
            background:     'linear-gradient(107deg, #226FCB, #0A559A)',
            borderRadius:   32,
            height:         40,
            padding:        '0 20px',
            textDecoration: 'none',
            fontFamily:     "'Outfit', sans-serif",
            fontWeight:     600,
            fontSize:       14,
            color:          '#FFFFFF',
            whiteSpace:     'nowrap',
            flexShrink:     0,
            boxShadow:      '0px 4px 12px 0px rgba(34,111,203,0.30)',
          }}
        >
          Seleccionar
        </a>
      </div>
    </div>
  );
}

// ─── Grid of flight date cards ────────────────────────────────────────────────

interface Props {
  offers:      FlightDateOffer[];
  destination: string;
}

export function FlightDateCards({ offers, destination }: Props) {
  return (
    <div className={styles.grid}>
      {offers.map((offer) => (
        <FlightCard key={offer.id} offer={offer} destination={destination} />
      ))}
    </div>
  );
}
