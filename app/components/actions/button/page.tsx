import type { Metadata } from 'next';
import ComponentPage from '@/components/ds/ComponentPage';

export const metadata: Metadata = { title: 'Button — Actions' };

const CODE = `import { Button } from '@lorien/components';

// Variantes
<Button variant="primary">Buscar vuelos</Button>
<Button variant="secondary">Ver más</Button>
<Button variant="ghost">Cancelar</Button>

// Tamaños
<Button size="sm">Pequeño</Button>
<Button size="md">Mediano</Button>
<Button size="lg">Grande</Button>

// Con ícono
<Button variant="primary" iconLeft={<SearchIcon />}>
  Buscar
</Button>

// Estados
<Button disabled>Deshabilitado</Button>
<Button loading>Cargando...</Button>`;

export default function ButtonPage() {
  return (
    <ComponentPage
      title="Button"
      description="El Button es el componente de acción principal del sistema. Comunica la acción disponible y su jerarquía visual en el flujo."
      section="Components / Actions"
      status="stable"
      version="0.1"
      updatedAt="Marzo 2025"
      figmaNode="2863:30301"
      whenToUse={[
        'Para acciones principales de un flujo o formulario (CTA primario).',
        'Para acciones secundarias que complementan al primario.',
        'Para acciones de confirmación o navegación importantes.',
        'Cuando el usuario necesita una acción clara y visible.',
      ]}
      whenNotToUse={[
        'Para navegación entre páginas sin acción asociada — usar Link.',
        'Para acciones destructivas sin confirmación previa.',
        'Cuando hay más de 2 botones del mismo nivel en una misma área.',
        'Para texto inline — usar el componente Link.',
      ]}
      anatomy={
        <div className="ds-preview-canvas" style={{ flexDirection: 'column', gap: 24 }}>
          <div style={{
            background: 'var(--brand)',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '100px',
            fontWeight: 700,
            fontSize: 14,
            display: 'flex',
            gap: 8,
            alignItems: 'center',
            position: 'relative',
          }}>
            <span style={{ position: 'absolute', top: -20, left: 20, fontSize: 10, color: 'var(--text-4)', whiteSpace: 'nowrap' }}>① Icon (opcional)</span>
            <span>⊞</span>
            <span>Buscar vuelos</span>
            <span style={{ position: 'absolute', top: -20, right: 20, fontSize: 10, color: 'var(--text-4)', whiteSpace: 'nowrap' }}>② Label</span>
          </div>
          <div style={{ fontSize: 12, color: 'var(--text-3)', textAlign: 'center' }}>
            Padding: 10px 20px · Radius: 100px (pill) · Font: 14px/700
          </div>
        </div>
      }
      variants={
        <div className="ds-preview-canvas" style={{ gap: 12, flexWrap: 'wrap' }}>
          <button style={{ background: 'var(--brand)', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '100px', fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>
            Primary
          </button>
          <button style={{ background: 'white', color: 'var(--brand)', border: '2px solid var(--brand)', padding: '10px 20px', borderRadius: '100px', fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>
            Secondary
          </button>
          <button style={{ background: 'transparent', color: 'var(--brand)', border: 'none', padding: '10px 20px', borderRadius: '100px', fontWeight: 700, fontSize: 14, cursor: 'pointer', textDecoration: 'underline' }}>
            Ghost
          </button>
          <button style={{ background: '#EF0539', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '100px', fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>
            Danger
          </button>
        </div>
      }
      states={
        <div className="ds-preview-canvas" style={{ gap: 12, flexWrap: 'wrap' }}>
          {[
            { label: 'Default',    style: { background: 'var(--brand)', color: 'white', opacity: 1 } },
            { label: 'Hover',      style: { background: '#1D62B5', color: 'white', opacity: 1 } },
            { label: 'Active',     style: { background: '#164D96', color: 'white', opacity: 1 } },
            { label: 'Focus',      style: { background: 'var(--brand)', color: 'white', outline: '3px solid var(--brand-border)', outlineOffset: 2 } },
            { label: 'Disabled',   style: { background: 'var(--brand)', color: 'white', opacity: 0.4, cursor: 'not-allowed' } },
            { label: 'Loading',    style: { background: 'var(--brand)', color: 'white', opacity: 0.8, cursor: 'wait' } },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <button style={{
                ...s.style as React.CSSProperties,
                border: 'none', padding: '10px 20px',
                borderRadius: '100px', fontWeight: 700, fontSize: 13,
              }}>
                {s.label === 'Loading' ? '⟳ Cargando' : 'Button'}
              </button>
              <span style={{ fontSize: 11, color: 'var(--text-4)' }}>{s.label}</span>
            </div>
          ))}
        </div>
      }
      dos={[
        {
          label: 'Usar verbos de acción claros',
          description: '"Buscar vuelos", "Confirmar reserva", "Agregar pasajero". El texto debe describir qué pasa al hacer clic.',
        },
        {
          label: 'Un solo primario por vista',
          description: 'La acción principal debe ser única y destacada. El resto son secondary o ghost.',
        },
      ]}
      donts={[
        {
          label: 'No usar textos vagos',
          description: 'Evitar "Click aquí", "Continuar" sin contexto, "OK". El texto debe ser específico.',
        },
        {
          label: 'No apilar múltiples primarios',
          description: 'No poner 3 botones Primary en la misma sección. Genera confusión sobre la acción principal.',
        },
      ]}
      accessibility={[
        'Siempre incluir texto descriptivo — evitar botones con solo ícono sin aria-label.',
        'El ratio de contraste mínimo es 4.5:1 para texto sobre fondo.',
        'El estado focus debe ser visible con outline de al menos 3px.',
        'Usar role="button" si el elemento no es un <button> nativo.',
        'El estado disabled debe incluir aria-disabled="true".',
        'Botones de carga deben incluir aria-busy="true" y aria-label actualizado.',
      ]}
      responsive="En mobile, los buttons pueden ocupar el 100% del ancho disponible (full-width) para facilitar el tap. En desktop mantienen su ancho natural. El tamaño mínimo de tap area es 44×44px."
      code={CODE}
      tokens={[
        { name: '--btn-radius', value: '100px (pill)', description: 'Radio del botón' },
        { name: '--blue-600', value: '#226FCB', description: 'Color de fondo primary' },
        { name: '--blue-800', value: '#0D4E88', description: 'Color hover primary' },
        { name: '--font-weight-bold', value: '700', description: 'Peso tipográfico del label' },
      ]}
      notes={[
        'El componente está implementado en /components/Button/Button.tsx',
        'Figma Code Connect publicado en node 2863:30301 y 2863:30302',
        'Usar siempre el componente — no re-crear el botón con estilos inline.',
        'Las variantes primary, secondary y ghost cubren el 95% de los casos de uso.',
      ]}
    />
  );
}
