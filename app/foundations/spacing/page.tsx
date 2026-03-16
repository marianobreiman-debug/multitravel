import type { Metadata } from 'next';
import PageHeader from '@/components/ds/PageHeader';

export const metadata: Metadata = { title: 'Spacing — Foundations' };

const SPACING = [
  { name: '--space-0',   value: '0px',   px: 0 },
  { name: '--space-1',   value: '4px',   px: 4 },
  { name: '--space-2',   value: '8px',   px: 8 },
  { name: '--space-3',   value: '12px',  px: 12 },
  { name: '--space-4',   value: '16px',  px: 16 },
  { name: '--space-5',   value: '20px',  px: 20 },
  { name: '--space-6',   value: '24px',  px: 24 },
  { name: '--space-7',   value: '28px',  px: 28 },
  { name: '--space-8',   value: '32px',  px: 32 },
  { name: '--space-10',  value: '40px',  px: 40 },
  { name: '--space-12',  value: '48px',  px: 48 },
  { name: '--space-16',  value: '64px',  px: 64 },
  { name: '--space-20',  value: '80px',  px: 80 },
  { name: '--space-24',  value: '96px',  px: 96 },
];

export default function SpacingPage() {
  const maxPx = 96;
  return (
    <>
      <PageHeader
        title="Spacing"
        description="Sistema de espaciado basado en múltiplos de 4px. Usar siempre valores de la escala para márgenes, padding y gaps."
        section="Foundations"
        status="stable"
        updatedAt="Marzo 2025"
      />

      <div className="ds-info-box ds-info-box--info" style={{ marginBottom: 36 }}>
        <span className="ds-info-box__icon">ℹ</span>
        <div>
          <strong>Base 4px.</strong> Todos los valores son múltiplos de 4px.
          Usar siempre tokens del sistema — nunca valores arbitrarios.
        </div>
      </div>

      <div className="ds-section">
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
          {SPACING.map((s, i) => (
            <div key={s.name} style={{
              display: 'grid',
              gridTemplateColumns: '180px 1fr 80px',
              gap: 16,
              padding: '12px 20px',
              alignItems: 'center',
              borderBottom: i < SPACING.length - 1 ? '1px solid var(--border)' : 'none',
            }}>
              <code className="ds-code">{s.name}</code>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{
                  height: 16,
                  width: s.px === 0 ? 1 : `${(s.px / maxPx) * 100}%`,
                  maxWidth: '100%',
                  background: 'var(--brand)',
                  borderRadius: 2,
                  opacity: 0.7,
                  minWidth: s.px === 0 ? 1 : undefined,
                }} />
              </div>
              <span className="ds-mono" style={{ textAlign: 'right', color: 'var(--text-3)' }}>{s.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Uso */}
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">Guía de uso</h2>
        </div>
        <div className="ds-section-grid ds-section-grid--2">
          {[
            { title: 'Padding interno', desc: 'Usar space-3 (12px) o space-4 (16px) para padding interno de componentes pequeños. space-5 o space-6 para componentes medianos.' },
            { title: 'Gap entre elementos', desc: 'space-2 (8px) para elementos relacionados, space-4 (16px) entre grupos, space-8 (32px) entre secciones.' },
            { title: 'Márgenes de sección', desc: 'space-10 (40px) para separación entre secciones de página. space-12 (48px) entre secciones mayores.' },
            { title: 'Padding de página', desc: 'space-6 (24px) en mobile, space-12 (48px) en desktop para el contenedor principal.' },
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
