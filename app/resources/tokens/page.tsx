import type { Metadata } from 'next';
import PageHeader from '@/components/ds/PageHeader';
import CodeBlock from '@/components/ds/CodeBlock';

export const metadata: Metadata = { title: 'Tokens & Variables — Resources' };

const IMPORT_CODE = `/* En tu globals.css o layout principal */
import '@/styles/tokens.css';

/* O si usás TypeScript */
import { colors } from '@lorien/tokens';`;

const USAGE_CODE = `/* Uso en CSS Modules */
.myComponent {
  background: var(--blue-800);
  color: var(--grey-white);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-blue-lg);
  padding: var(--space-4) var(--space-6);
}

/* Uso en estilos inline (React) */
const style = {
  background: 'var(--blue-600)',
  borderRadius: 'var(--radius-pill)',
};`;

const TOKEN_GROUPS = [
  { prefix: '--blue-', desc: 'Escala de azul primario (50–950)' },
  { prefix: '--red-', desc: 'Escala de rojo primario (50–950)' },
  { prefix: '--success-', desc: 'Escala de verde success (50–950)' },
  { prefix: '--warning-', desc: 'Escala de naranja warning (50–950)' },
  { prefix: '--destructive-', desc: 'Escala de rojo destructivo (50–950)' },
  { prefix: '--grey-', desc: 'Escala de grises neutros (white, 50–950)' },
  { prefix: '--font-family-', desc: 'Familias tipográficas' },
  { prefix: '--font-size-', desc: 'Tamaños de fuente (xs–3xl)' },
  { prefix: '--font-weight-', desc: 'Pesos tipográficos (regular–extrabold)' },
  { prefix: '--space-', desc: 'Espaciado en múltiplos de 4px (0–24)' },
  { prefix: '--radius-', desc: 'Radios de borde (tag, input, card, pill)' },
  { prefix: '--shadow-', desc: 'Sombras (sm, blue-lg)' },
  { prefix: '--bp-', desc: 'Breakpoints (xs–2xl)' },
];

export default function TokensResourcePage() {
  return (
    <>
      <PageHeader
        title="Tokens & Variables"
        description="Referencia completa de los CSS custom properties del sistema de diseño Lorien. Todos los valores disponibles para usar en componentes."
        section="Resources"
        status="stable"
        version="0.1"
        updatedAt="Marzo 2025"
      />

      {/* Import */}
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">Cómo importar</h2>
          <p className="ds-section__desc">Importar el archivo de tokens una vez en el layout raíz del proyecto.</p>
        </div>
        <CodeBlock code={IMPORT_CODE} language="css" filename="globals.css" />
      </div>

      {/* Usage */}
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">Cómo usar</h2>
          <p className="ds-section__desc">Referenciar tokens con <code className="ds-code">var(--token-name)</code> en cualquier CSS del proyecto.</p>
        </div>
        <CodeBlock code={USAGE_CODE} language="css" />
      </div>

      {/* Token groups */}
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">Grupos de tokens</h2>
          <p className="ds-section__desc">Todos los grupos disponibles en el archivo <code className="ds-code">styles/tokens.css</code>.</p>
        </div>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
          <table className="ds-token-table">
            <thead>
              <tr><th>Prefijo</th><th>Descripción</th><th>Archivo fuente</th></tr>
            </thead>
            <tbody>
              {TOKEN_GROUPS.map(g => (
                <tr key={g.prefix}>
                  <td><code className="ds-code">{g.prefix}*</code></td>
                  <td style={{ color: 'var(--text-3)', fontSize: 13 }}>{g.desc}</td>
                  <td><code className="ds-code" style={{ fontSize: 11 }}>styles/tokens.css</code></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* TypeScript */}
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">TypeScript tokens</h2>
          <p className="ds-section__desc">Para usar los tokens en código TypeScript (e.g. calcular valores programáticamente).</p>
        </div>
        <CodeBlock
          code={`import { colors, typography, spacing, radii, shadows } from '@lorien/tokens';

// Acceso tipado a los tokens
const primaryBlue = colors.blue[800]; // '#0d4e88'
const cardRadius = radii.card;        // '16px'
const shadowBlue = shadows.blueLg;   // '0 4px 24px rgba(34,111,203,0.24)'`}
          language="typescript"
          filename="tokens.ts"
        />
      </div>
    </>
  );
}
