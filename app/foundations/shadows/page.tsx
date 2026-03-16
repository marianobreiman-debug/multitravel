import type { Metadata } from 'next';
import PageHeader from '@/components/ds/PageHeader';

export const metadata: Metadata = { title: 'Shadows — Foundations' };

export default function ShadowsPage() {
  return (
    <>
      <PageHeader
        title="Shadows"
        description="Sistema de sombras de Lorien. Dos niveles de elevación para comunicar jerarquía visual en la interfaz."
        section="Foundations"
        status="stable"
        updatedAt="Marzo 2025"
        figmaNode="5915-54298"
      />

      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">Sombras del sistema</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {[
            {
              name: '--shadow-sm',
              label: 'Shadow SM',
              value: '0 1px 3px 0 rgba(0,0,0,0.10), 0 1px 2px -1px rgba(0,0,0,0.10)',
              desc: 'Elevación mínima. Para inputs, buttons y elementos flotantes sutiles.',
              usage: 'Input, Button, Dropdown item',
              figmaName: 'sm',
            },
            {
              name: '--shadow-blue-lg',
              label: 'Shadow Blue LG',
              value: '0 4px 24px 0 rgba(34, 111, 203, 0.24)',
              desc: 'Elevación media con tinte azul de marca. Para cards activas, modales y Flight Card.',
              usage: 'FlightCard, Modal, Card selected',
              figmaName: 'blueLg',
            },
          ].map(s => (
            <div key={s.name}>
              <div style={{
                background: 'var(--surface)',
                borderRadius: 'var(--radius-xl)',
                padding: 32,
                textAlign: 'center',
                boxShadow: s.value,
                border: '1px solid var(--border)',
                marginBottom: 16,
              }}>
                <div style={{ width: 64, height: 64, background: 'var(--surface-2)', borderRadius: 'var(--radius-lg)', margin: '0 auto' }} />
              </div>
              <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--text)', marginBottom: 4 }}>{s.label}</div>
              <code className="ds-code" style={{ display: 'block', marginBottom: 8, fontSize: 11 }}>{s.name}</code>
              <div style={{ fontSize: 12, color: 'var(--text-3)', lineHeight: 1.6, marginBottom: 8 }}>{s.desc}</div>
              <div style={{ fontSize: 11, color: 'var(--text-4)', marginBottom: 6 }}>
                <strong>Figma:</strong> {s.figmaName}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-4)', background: 'var(--surface-2)', padding: '6px 10px', borderRadius: 'var(--radius-md)', lineHeight: 1.4 }}>
                {s.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">Principios de uso</h2>
        </div>
        <div className="ds-section-grid ds-section-grid--2">
          {[
            { title: 'Elevación semántica', desc: 'Usar sombras para comunicar jerarquía y elevación, no decoración. Un elemento con más sombra está visualmente más arriba.' },
            { title: 'Consistencia', desc: 'Usar siempre los tokens del sistema. No crear sombras ad hoc con valores arbitrarios.' },
            { title: 'Shadow Blue para brand', desc: 'La sombra azul refuerza la marca en elementos de alto impacto. Reservarla para cards de resultado y elementos destacados.' },
            { title: 'Sin sombra = plano', desc: 'Elementos sin sombra pertenecen al plano base. Buttons no seleccionados, dividers, texto no necesitan sombra.' },
          ].map((g, i) => (
            <div key={i} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: 20 }}>
              <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 6, color: 'var(--text)' }}>{g.title}</div>
              <div style={{ fontSize: 13, color: 'var(--text-3)', lineHeight: 1.6 }}>{g.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
