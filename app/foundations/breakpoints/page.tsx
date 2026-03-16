import type { Metadata } from 'next';
import PageHeader from '@/components/ds/PageHeader';

export const metadata: Metadata = { title: 'Breakpoints — Foundations' };

const BREAKPOINTS = [
  { name: 'xs', token: '--bp-xs',  value: '375px',  desc: 'Móvil pequeño (iPhone SE)',    cols: 4,  margin: '16px' },
  { name: 'sm', token: '--bp-sm',  value: '640px',  desc: 'Móvil grande / phablet',        cols: 4,  margin: '20px' },
  { name: 'md', token: '--bp-md',  value: '768px',  desc: 'Tablet vertical',               cols: 8,  margin: '24px' },
  { name: 'lg', token: '--bp-lg',  value: '1024px', desc: 'Tablet horizontal / laptop',   cols: 12, margin: '32px' },
  { name: 'xl', token: '--bp-xl',  value: '1280px', desc: 'Desktop estándar',              cols: 12, margin: '40px' },
  { name: '2xl',token: '--bp-2xl', value: '1440px', desc: 'Desktop wide',                  cols: 12, margin: '48px' },
];

export default function BreakpointsPage() {
  return (
    <>
      <PageHeader
        title="Breakpoints"
        description="Puntos de quiebre del sistema responsive. Diseño mobile-first con 6 breakpoints para adaptar el producto a cualquier dispositivo."
        section="Foundations"
        status="draft"
        updatedAt="Marzo 2025"
      />

      <div className="ds-info-box ds-info-box--info" style={{ marginBottom: 36 }}>
        <span className="ds-info-box__icon">ℹ</span>
        <div>
          <strong>Mobile-first.</strong> Diseñar siempre desde el breakpoint más pequeño hacia el más grande. Las media queries usan <code className="ds-code">min-width</code>.
        </div>
      </div>

      <div className="ds-section">
        {/* Visual diagram */}
        <div style={{ display: 'flex', gap: 2, marginBottom: 32, alignItems: 'flex-end' }}>
          {BREAKPOINTS.map((bp, i) => (
            <div key={bp.name} style={{ flex: i + 1, minWidth: 0, textAlign: 'center' }}>
              <div style={{
                height: `${20 + (i + 1) * 10}px`,
                background: `rgba(34, 111, 203, ${0.15 + i * 0.12})`,
                borderRadius: '4px 4px 0 0',
                border: '1px solid var(--brand-border)',
                borderBottom: 'none',
              }} />
              <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--brand)', padding: '4px 0' }}>{bp.name}</div>
              <div style={{ fontSize: 9, color: 'var(--text-4)' }}>{bp.value}</div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
          <table className="ds-token-table">
            <thead>
              <tr><th>Nombre</th><th>Token</th><th>Min-width</th><th>Columnas</th><th>Margen</th><th>Descripción</th></tr>
            </thead>
            <tbody>
              {BREAKPOINTS.map(bp => (
                <tr key={bp.name}>
                  <td><span style={{ fontWeight: 700, color: 'var(--brand)' }}>{bp.name}</span></td>
                  <td><code className="ds-code">{bp.token}</code></td>
                  <td><span className="ds-mono">{bp.value}</span></td>
                  <td><span className="ds-mono">{bp.cols}</span></td>
                  <td><span className="ds-mono">{bp.margin}</span></td>
                  <td style={{ color: 'var(--text-3)', fontSize: 13 }}>{bp.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">Uso en CSS</h2>
        </div>
        <div style={{ background: '#0F172A', borderRadius: 'var(--radius-lg)', padding: '20px 24px', fontFamily: 'var(--font-mono)', fontSize: 13, color: '#E2E8F0', lineHeight: 1.7 }}>
          <pre>{`/* Mobile first: estilos base para xs */
.container {
  padding: 0 16px;
}

/* sm: 640px+ */
@media (min-width: 640px) {
  .container { padding: 0 20px; }
}

/* md: 768px+ */
@media (min-width: 768px) {
  .container { padding: 0 24px; }
}

/* lg: 1024px+ */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 32px;
  }
}`}</pre>
        </div>
      </div>
    </>
  );
}
