import type { Country } from '@/data/countries';

// ─── Destination card ─────────────────────────────────────────────────────────

function DestCard({ card, countrySlug }: {
  card: Country['destinations'][number];
  countrySlug: string;
}) {
  const href = card.hasDetailPage
    ? `/home/vuelos/${countrySlug}/${card.destinationSlug}`
    : '#';

  return (
    <div
      style={{
        background:    '#FFFFFF',
        borderRadius:  20,
        overflow:      'hidden',
        boxShadow:     '0px 4px 20px 0px rgba(39,38,38,0.10), 0px 1px 4px 0px rgba(39,38,38,0.06)',
        display:       'flex',
        flexDirection: 'column',
        position:      'relative',
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', height: 180, overflow: 'hidden' }}>
        <img
          src={card.image}
          alt={card.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        {/* Gradient overlay */}
        <div style={{
          position:   'absolute',
          bottom:     0, left: 0, right: 0,
          height:     80,
          background: 'linear-gradient(to top, rgba(0,0,0,0.55), transparent)',
        }} />
        {/* Destination name over image */}
        <div
          style={{
            position:   'absolute',
            bottom:     12,
            left:       16,
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 700,
            fontSize:   18,
            color:      '#FFFFFF',
            lineHeight: '24px',
            textShadow: '0 1px 4px rgba(0,0,0,0.3)',
          }}
        >
          {card.name}
        </div>
        {/* Coming soon badge */}
        {!card.hasDetailPage && (
          <div
            style={{
              position:     'absolute',
              top:          12,
              right:        12,
              background:   'rgba(0,0,0,0.55)',
              borderRadius: 20,
              padding:      '3px 10px',
              fontFamily:   "'Outfit', sans-serif",
              fontWeight:   500,
              fontSize:     11,
              color:        'rgba(255,255,255,0.85)',
              backdropFilter: 'blur(4px)',
            }}
          >
            Próximamente
          </div>
        )}
      </div>

      {/* Card body */}
      <div style={{ padding: '16px 20px 20px', display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {card.tags.map((tag) => (
            <span
              key={tag}
              style={{
                background:   '#F1F3F6',
                borderRadius: 20,
                padding:      '3px 10px',
                fontFamily:   "'Outfit', sans-serif",
                fontWeight:   500,
                fontSize:     11,
                color:        '#4A4A4A',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Price + flights */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400, fontSize: 11, color: '#8D8D8D', marginBottom: 1 }}>
              Desde
            </div>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 18, color: '#272626', lineHeight: '24px' }}>
              {card.fromPrice}
            </div>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400, fontSize: 11, color: '#8D8D8D' }}>
              {card.flightsCount} vuelos disponibles
            </div>
          </div>
        </div>

        {/* CTA */}
        <a
          href={href}
          style={{
            display:        'inline-flex',
            alignItems:     'center',
            justifyContent: 'center',
            marginTop:      'auto',
            background:     card.hasDetailPage
              ? 'linear-gradient(107deg, #226FCB, #0A559A)'
              : '#E8EAED',
            borderRadius:   32,
            height:         40,
            padding:        '0 20px',
            textDecoration: 'none',
            fontFamily:     "'Outfit', sans-serif",
            fontWeight:     600,
            fontSize:       14,
            color:          card.hasDetailPage ? '#FFFFFF' : '#AAAAAA',
            cursor:         card.hasDetailPage ? 'pointer' : 'default',
            pointerEvents:  card.hasDetailPage ? 'auto' : 'none',
            boxShadow:      card.hasDetailPage
              ? '0px 4px 12px 0px rgba(34,111,203,0.28)'
              : 'none',
            transition:     'opacity 0.15s ease',
          }}
        >
          {card.hasDetailPage ? 'Ver vuelos' : 'Próximamente'}
        </a>
      </div>
    </div>
  );
}

// ─── Country landing layout ───────────────────────────────────────────────────

interface Props {
  country: Country;
}

export function CountryLanding({ country }: Props) {
  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <span
          style={{
            fontFamily:    "'Outfit', sans-serif",
            fontWeight:    600,
            fontSize:      12,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color:         '#226FCB',
            display:       'block',
            marginBottom:  6,
          }}
        >
          {country.flag} Vuelos a {country.name}
        </span>
        <h1
          style={{
            fontFamily:    "'Outfit', sans-serif",
            fontWeight:    800,
            fontSize:      32,
            lineHeight:    '40px',
            letterSpacing: '-0.32px',
            color:         '#272626',
            margin:        '0 0 12px',
          }}
        >
          Destinos en {country.name}
        </h1>
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 400,
            fontSize:   16,
            lineHeight: '26px',
            color:      '#4A4A4A',
            margin:     0,
            maxWidth:   680,
          }}
        >
          {country.intro}
        </p>
      </div>

      {/* Destination cards grid */}
      <div
        style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap:                 24,
        }}
      >
        {country.destinations.map((card) => (
          <DestCard key={card.destinationSlug} card={card} countrySlug={country.slug} />
        ))}
      </div>
    </div>
  );
}
