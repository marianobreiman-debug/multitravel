import { Header } from '@/components/home/Header';

export default function PaquetesResultadosPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#F1F3F6', fontFamily: "'Outfit', sans-serif" }}>
      <Header />

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <main
        style={{
          maxWidth: 1240,
          width:    'calc(100% - 126px)',
          margin:   '0 auto',
          padding:  '48px 0 80px',
        }}
      >
        {/* Back link */}
        <a
          href="/home"
          style={{
            display:        'inline-flex',
            alignItems:     'center',
            gap:            6,
            fontFamily:     "'Outfit', sans-serif",
            fontWeight:     500,
            fontSize:       14,
            lineHeight:     '20px',
            color:          '#226FCB',
            textDecoration: 'none',
            marginBottom:   32,
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M5 12l7 7M5 12l7-7"
              stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Volver al inicio
        </a>

        {/* Page header */}
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
              marginBottom:  8,
            }}
          >
            Paquetes turísticos
          </span>
          <h1
            style={{
              fontFamily:    "'Outfit', sans-serif",
              fontWeight:    800,
              fontSize:      32,
              lineHeight:    '40px',
              letterSpacing: '-0.32px',
              color:         '#272626',
              margin:        '0 0 8px',
            }}
          >
            Resultados de búsqueda
          </h1>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400, fontSize: 16, color: '#8D8D8D', margin: 0 }}>
            Encontramos paquetes disponibles para tu búsqueda.
          </p>
        </div>

        {/* Placeholder results area */}
        <div
          style={{
            background:   '#FFFFFF',
            borderRadius: 24,
            padding:      80,
            display:      'flex',
            flexDirection:'column',
            alignItems:   'center',
            justifyContent:'center',
            gap:          16,
            boxShadow:    '0px 4px 12px 0px rgba(39,38,38,0.06)',
            minHeight:    400,
          }}
        >
          {/* Icon */}
          <div
            style={{
              width:          72,
              height:         72,
              borderRadius:   '50%',
              background:     '#F1F3F6',
              display:        'flex',
              alignItems:     'center',
              justifyContent: 'center',
            }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="7" width="20" height="14" rx="2" stroke="#226FCB" strokeWidth="1.5"/>
              <path d="M8 7V5a4 4 0 0 1 8 0v2" stroke="#226FCB" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M2 12h20" stroke="#226FCB" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M9 16h6" stroke="#226FCB" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>

          <div style={{ textAlign: 'center' }}>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700,
                fontSize:   20,
                lineHeight: '28px',
                color:      '#272626',
                margin:     '0 0 8px',
              }}
            >
              Página transaccional — Resultados de Paquetes
            </p>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 400,
                fontSize:   15,
                lineHeight: '22px',
                color:      '#8D8D8D',
                margin:     0,
                maxWidth:   480,
              }}
            >
              Acá se listarán los paquetes disponibles según los filtros de búsqueda aplicados. Sección en construcción.
            </p>
          </div>

          <a
            href="/home"
            style={{
              marginTop:      8,
              display:        'inline-flex',
              alignItems:     'center',
              gap:            8,
              background:     'linear-gradient(107deg, #226FCB, #0A559A)',
              color:          '#FFFFFF',
              fontFamily:     "'Outfit', sans-serif",
              fontWeight:     600,
              fontSize:       14,
              lineHeight:     '20px',
              padding:        '10px 24px',
              borderRadius:   40,
              textDecoration: 'none',
            }}
          >
            ← Volver al inicio
          </a>
        </div>
      </main>
    </div>
  );
}
