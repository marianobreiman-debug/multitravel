import type { Metadata } from 'next';
import PageHeader from '@/components/ds/PageHeader';

export const metadata: Metadata = { title: 'Nomenclaturas — Resources' };

export default function NomenclaturePage() {
  return (
    <>
      <PageHeader
        title="Nomenclaturas"
        description="Convención de nombres para tokens, componentes, variantes, props y archivos del design system Lorien."
        section="Resources"
        status="draft"
        updatedAt="Marzo 2025"
      />

      {/* Tokens */}
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">Nomenclatura de tokens</h2>
          <p className="ds-section__desc">Estructura de nombres para CSS custom properties.</p>
        </div>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
          <table className="ds-token-table">
            <thead>
              <tr><th>Categoría</th><th>Patrón</th><th>Ejemplo</th></tr>
            </thead>
            <tbody>
              {[
                { cat: 'Color primitivo', pattern: '--[color]-[step]', example: '--blue-600, --grey-100' },
                { cat: 'Tipografía', pattern: '--font-[property]-[size]', example: '--font-size-lg, --font-weight-bold' },
                { cat: 'Espaciado', pattern: '--space-[step]', example: '--space-4, --space-8' },
                { cat: 'Radius', pattern: '--radius-[name]', example: '--radius-card, --radius-pill' },
                { cat: 'Sombra', pattern: '--shadow-[name]', example: '--shadow-sm, --shadow-blue-lg' },
                { cat: 'Breakpoint', pattern: '--bp-[size]', example: '--bp-md, --bp-xl' },
              ].map(r => (
                <tr key={r.cat}>
                  <td style={{ fontWeight: 600, fontSize: 13 }}>{r.cat}</td>
                  <td><code className="ds-code">{r.pattern}</code></td>
                  <td style={{ color: 'var(--text-3)', fontSize: 12 }}>{r.example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Components */}
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">Nomenclatura de componentes</h2>
        </div>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
          <table className="ds-token-table">
            <thead>
              <tr><th>Elemento</th><th>Convención</th><th>Ejemplo</th></tr>
            </thead>
            <tbody>
              {[
                { el: 'Nombre de componente', conv: 'PascalCase', ex: 'FlightCard, InputField' },
                { el: 'Archivo de componente', conv: 'PascalCase.tsx', ex: 'Button.tsx, Tag.tsx' },
                { el: 'CSS Module', conv: 'PascalCase.module.css', ex: 'Button.module.css' },
                { el: 'Props de variante', conv: 'variant="kebab-case"', ex: 'variant="primary", variant="blue"' },
                { el: 'Props booleanas', conv: 'is[Name] o [name]', ex: 'isDisabled, loading, checked' },
                { el: 'Event handlers', conv: 'on[Event]', ex: 'onClick, onChange, onSelect' },
                { el: 'Clases CSS', conv: 'camelCase en modules', ex: '.primaryButton, .isActive' },
                { el: 'Data attributes', conv: 'data-[name]', ex: 'data-variant, data-state' },
              ].map(r => (
                <tr key={r.el}>
                  <td style={{ fontWeight: 600, fontSize: 13 }}>{r.el}</td>
                  <td><code className="ds-code">{r.conv}</code></td>
                  <td style={{ color: 'var(--text-3)', fontSize: 12 }}>{r.ex}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Files */}
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">Estructura de archivos</h2>
          <p className="ds-section__desc">Organización recomendada para nuevos componentes.</p>
        </div>
        <div style={{ background: '#0F172A', borderRadius: 'var(--radius-lg)', padding: '20px 24px', fontFamily: 'var(--font-mono)', fontSize: 13, color: '#E2E8F0', lineHeight: 1.8 }}>
          <pre>{`components/
├── NombreComponente/
│   ├── NombreComponente.tsx        ← Componente principal
│   ├── NombreComponente.module.css ← Estilos
│   ├── NombreComponente.figma.tsx  ← Code Connect
│   ├── NombreComponente.test.tsx   ← Tests (futuro)
│   └── index.ts                    ← Barrel export`}</pre>
        </div>
      </div>
    </>
  );
}
