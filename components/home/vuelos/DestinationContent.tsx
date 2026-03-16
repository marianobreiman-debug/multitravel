import type { DestinationContent as Content } from '@/data/destinations';

// ─── Generic destination editorial content ────────────────────────────────────

interface Props {
  content:     Content;
  destination: string;
}

function InfoCard({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div
      style={{
        background:   '#FFFFFF',
        borderRadius: 16,
        padding:      '20px 20px',
        display:      'flex',
        alignItems:   'center',
        gap:          14,
        boxShadow:    '0px 2px 8px 0px rgba(39,38,38,0.05)',
      }}
    >
      <div
        style={{
          width:          48,
          height:         48,
          borderRadius:   12,
          background:     '#F1F3F6',
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'center',
          fontSize:       24,
          flexShrink:     0,
        }}
      >
        {icon}
      </div>
      <div>
        <div
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 500,
            fontSize:   11,
            color:      '#8D8D8D',
            textTransform: 'uppercase',
            letterSpacing: '0.07em',
            marginBottom: 2,
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 600,
            fontSize:   14,
            color:      '#272626',
            lineHeight: '20px',
          }}
        >
          {value}
        </div>
      </div>
    </div>
  );
}

function HighlightCard({ icon, label, desc }: { icon: string; label: string; desc: string }) {
  return (
    <div
      style={{
        background:   '#FFFFFF',
        borderRadius: 16,
        padding:      '24px 20px',
        boxShadow:    '0px 2px 8px 0px rgba(39,38,38,0.05)',
      }}
    >
      <div style={{ fontSize: 28, marginBottom: 12 }}>{icon}</div>
      <div
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 700,
          fontSize:   15,
          color:      '#272626',
          marginBottom: 6,
          lineHeight: '20px',
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 400,
          fontSize:   13,
          color:      '#8D8D8D',
          lineHeight: '18px',
        }}
      >
        {desc}
      </div>
    </div>
  );
}

export function DestinationContent({ content, destination }: Props) {
  return (
    <div style={{ marginTop: 0 }}>

      {/* Section header */}
      <div style={{ marginBottom: 28 }}>
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
          Información del destino
        </span>
        <h2
          style={{
            fontFamily:    "'Outfit', sans-serif",
            fontWeight:    700,
            fontSize:      24,
            lineHeight:    '32px',
            letterSpacing: '-0.24px',
            color:         '#272626',
            margin:        '0 0 12px',
          }}
        >
          {content.title}
        </h2>
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 400,
            fontSize:   15,
            lineHeight: '24px',
            color:      '#4A4A4A',
            margin:     0,
            maxWidth:   740,
          }}
        >
          {content.intro}
        </p>
      </div>

      {/* Quick info cards */}
      <div
        style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap:                 14,
          marginBottom:        40,
        }}
      >
        <InfoCard icon="🗓️" label="Mejor época"   value={content.bestTime} />
        <InfoCard icon="💵" label="Moneda"         value={content.currency} />
        <InfoCard icon="🗣️" label="Idioma"         value={content.language} />
        <InfoCard icon="💡" label="Consejo viajero" value={content.tip} />
      </div>

      {/* Highlights */}
      <div style={{ marginBottom: 16 }}>
        <h3
          style={{
            fontFamily:    "'Outfit', sans-serif",
            fontWeight:    700,
            fontSize:      20,
            lineHeight:    '28px',
            letterSpacing: '-0.2px',
            color:         '#272626',
            margin:        '0 0 20px',
          }}
        >
          ¿Qué hacer en {destination}?
        </h3>
        <div
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap:                 14,
          }}
        >
          {content.highlights.map((h, i) => (
            <HighlightCard key={i} icon={h.icon} label={h.label} desc={h.desc} />
          ))}
        </div>
      </div>

    </div>
  );
}
