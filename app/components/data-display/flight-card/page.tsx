import type { Metadata } from 'next';
import ComponentPage from '@/components/ds/ComponentPage';

export const metadata: Metadata = { title: 'Flight Card — Data Display' };

const CODE = `import { FlightCard } from '@lorien/components';

<FlightCard
  airline="Aerolíneas Argentinas"
  airlineCode="AR"
  origin={{ code: "EZE", city: "Buenos Aires", time: "08:30" }}
  destination={{ code: "MIA", city: "Miami", time: "16:45" }}
  duration="9h 15m"
  stops={0}
  price={{ amount: 850, currency: "USD" }}
  cabinClass="Economy"
  onSelect={() => handleSelect(flight)}
/>`;

export default function FlightCardPage() {
  return (
    <ComponentPage
      title="Flight Card"
      description="Tarjeta de resultado de búsqueda de vuelo. Muestra aerolínea, ruta, duración, escalas y precio con opción de selección."
      section="Components / Data Display"
      status="stable"
      version="0.1"
      updatedAt="Marzo 2025"
      figmaNode="2863:31139"
      whenToUse={[
        'Para mostrar resultados de búsqueda de vuelos.',
        'En páginas de listado de vuelos disponibles.',
        'En comparación de opciones de vuelo.',
      ]}
      whenNotToUse={[
        'Para otros tipos de productos (hoteles, autos) — crear card específica.',
        'Para mostrar información de reserva confirmada — usar un resumen/detail view.',
      ]}
      anatomy={
        <div className="ds-preview-canvas" style={{ padding: 24 }}>
          <div style={{
            background: 'white',
            border: '1px solid var(--border)',
            borderRadius: 16,
            padding: '16px 20px',
            width: '100%',
            maxWidth: 480,
            boxShadow: '0 4px 24px 0 rgba(34, 111, 203, 0.12)',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 28, height: 28, background: 'var(--brand-light)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, color: 'var(--brand)' }}>AR</div>
                <span style={{ fontSize: 12, color: 'var(--text-3)' }}>Aerolíneas Argentinas</span>
              </div>
              <div style={{ fontSize: 11, color: 'var(--text-4)' }}>Economy</div>
            </div>
            {/* Route */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--text)', lineHeight: 1 }}>08:30</div>
                <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-3)' }}>EZE</div>
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                <div style={{ fontSize: 11, color: 'var(--text-4)' }}>9h 15m</div>
                <div style={{ height: 1, background: 'var(--border)', width: '100%', position: 'relative' }}>
                  <div style={{ position: 'absolute', right: 0, top: -4, width: 8, height: 8, borderRadius: '50%', background: 'var(--brand)' }} />
                </div>
                <div style={{ fontSize: 11, color: 'var(--stable-text)' }}>Directo</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--text)', lineHeight: 1 }}>16:45</div>
                <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-3)' }}>MIA</div>
              </div>
            </div>
            {/* Footer */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 8, borderTop: '1px solid var(--border)' }}>
              <div>
                <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--brand-dark)', lineHeight: 1 }}>USD 850</div>
                <div style={{ fontSize: 11, color: 'var(--text-4)' }}>por persona</div>
              </div>
              <button style={{ background: 'var(--brand)', color: 'white', border: 'none', padding: '8px 18px', borderRadius: '100px', fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>
                Seleccionar
              </button>
            </div>
          </div>
        </div>
      }
      accessibility={[
        'Incluir aria-label descriptivo: "Vuelo Aerolíneas Argentinas, Buenos Aires a Miami, 9h 15m directo, USD 850".',
        'El botón de selección debe tener texto descriptivo accesible.',
        'Los precios deben ser legibles por screen readers con formato correcto.',
      ]}
      responsive="En mobile, la card ocupa el 100% del ancho. El layout interno se adapta reduciendo el tamaño de fuente de los horarios y compactando el footer."
      code={CODE}
      tokens={[
        { name: '--radius-card', value: '16px', description: 'Radio de la tarjeta' },
        { name: '--shadow-blue-lg', value: '0 4px 24px rgba(34,111,203,0.24)', description: 'Sombra destacada de la card' },
        { name: '--blue-800', value: '#0D4E88', description: 'Color del precio' },
      ]}
      notes={[
        'Componente en /components/FlightCard/FlightCard.tsx',
        'Figma Code Connect en node 2863:31139',
        'La FlightCard usa la shadow blueLg para destacar sobre el fondo de página.',
      ]}
    />
  );
}
