import PageHeader from './PageHeader';
import CodeBlock from './CodeBlock';
import type { NavStatus } from '@/lib/navigation';

interface DoItem { label: string; description: string; }
interface DontItem { label: string; description: string; }

interface ComponentPageProps {
  title: string;
  description: string;
  section: string;
  status?: NavStatus;
  version?: string;
  updatedAt?: string;
  figmaNode?: string;
  whenToUse?: string[];
  whenNotToUse?: string[];
  anatomy?: React.ReactNode;
  variants?: React.ReactNode;
  states?: React.ReactNode;
  accessibility?: string[];
  responsive?: string;
  dos?: DoItem[];
  donts?: DontItem[];
  code?: string;
  codeLanguage?: string;
  tokens?: Array<{ name: string; value: string; description: string }>;
  notes?: string[];
  children?: React.ReactNode;
}

export default function ComponentPage({
  title,
  description,
  section,
  status = 'draft',
  version,
  updatedAt,
  figmaNode,
  whenToUse,
  whenNotToUse,
  anatomy,
  variants,
  states,
  accessibility,
  responsive,
  dos,
  donts,
  code,
  codeLanguage,
  tokens,
  notes,
  children,
}: ComponentPageProps) {
  return (
    <div className="ds-comp-page">
      <PageHeader
        title={title}
        description={description}
        section={section}
        status={status}
        version={version}
        updatedAt={updatedAt}
        figmaNode={figmaNode}
      />

      {/* Cuándo usar / no usar */}
      {(whenToUse || whenNotToUse) && (
        <div className="ds-section">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {whenToUse && (
              <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: 20 }}>
                <div style={{ fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--stable-text)', marginBottom: 10, display: 'flex', gap: 6, alignItems: 'center' }}>
                  <span>✓</span> Cuándo usar
                </div>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {whenToUse.map((item, i) => (
                    <li key={i} style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.5, display: 'flex', gap: 8 }}>
                      <span style={{ color: 'var(--stable)', flexShrink: 0, marginTop: 2 }}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {whenNotToUse && (
              <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: 20 }}>
                <div style={{ fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--deprecated-text)', marginBottom: 10, display: 'flex', gap: 6, alignItems: 'center' }}>
                  <span>✕</span> Cuándo no usar
                </div>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {whenNotToUse.map((item, i) => (
                    <li key={i} style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.5, display: 'flex', gap: 8 }}>
                      <span style={{ color: 'var(--deprecated)', flexShrink: 0, marginTop: 2 }}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Anatomía */}
      {anatomy && (
        <div className="ds-section">
          <div className="ds-section__header">
            <h2 className="ds-section__title">Anatomía</h2>
            <p className="ds-section__desc">Estructura visual del componente y sus partes.</p>
          </div>
          {anatomy}
        </div>
      )}

      {/* Variantes */}
      {variants && (
        <div className="ds-section">
          <div className="ds-section__header">
            <h2 className="ds-section__title">Variantes</h2>
          </div>
          {variants}
        </div>
      )}

      {/* Estados */}
      {states && (
        <div className="ds-section">
          <div className="ds-section__header">
            <h2 className="ds-section__title">Estados</h2>
          </div>
          {states}
        </div>
      )}

      {/* Do / Don't */}
      {(dos || donts) && (
        <div className="ds-section">
          <div className="ds-section__header">
            <h2 className="ds-section__title">Do / Don&apos;t</h2>
            <p className="ds-section__desc">Guía de uso correcto e incorrecto.</p>
          </div>
          <div className="ds-do-dont">
            {dos && dos.map((item, i) => (
              <div key={i} className="ds-do-dont__item ds-do-dont__item--do">
                <div className="ds-do-dont__label">✓ Do</div>
                <div className="ds-do-dont__content">
                  <strong style={{ display: 'block', marginBottom: 4 }}>{item.label}</strong>
                  {item.description}
                </div>
              </div>
            ))}
            {donts && donts.map((item, i) => (
              <div key={i} className="ds-do-dont__item ds-do-dont__item--dont">
                <div className="ds-do-dont__label">✕ Don&apos;t</div>
                <div className="ds-do-dont__content">
                  <strong style={{ display: 'block', marginBottom: 4 }}>{item.label}</strong>
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Accesibilidad */}
      {accessibility && (
        <div className="ds-section">
          <div className="ds-section__header">
            <h2 className="ds-section__title">Accesibilidad</h2>
          </div>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {accessibility.map((item, i) => (
              <li key={i} style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.6, display: 'flex', gap: 10 }}>
                <span style={{ color: 'var(--brand)', flexShrink: 0 }}>♿</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Responsive */}
      {responsive && (
        <div className="ds-section">
          <div className="ds-section__header">
            <h2 className="ds-section__title">Comportamiento Responsive</h2>
          </div>
          <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.6 }}>{responsive}</p>
        </div>
      )}

      {/* Código */}
      {code && (
        <div className="ds-section">
          <div className="ds-section__header">
            <h2 className="ds-section__title">Código</h2>
          </div>
          <CodeBlock code={code} language={codeLanguage ?? 'tsx'} />
        </div>
      )}

      {/* Tokens */}
      {tokens && tokens.length > 0 && (
        <div className="ds-section">
          <div className="ds-section__header">
            <h2 className="ds-section__title">Tokens relacionados</h2>
          </div>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
            <table className="ds-token-table">
              <thead>
                <tr>
                  <th>Token</th>
                  <th>Valor</th>
                  <th>Descripción</th>
                </tr>
              </thead>
              <tbody>
                {tokens.map((token, i) => (
                  <tr key={i}>
                    <td><code className="ds-code">{token.name}</code></td>
                    <td><span className="ds-mono">{token.value}</span></td>
                    <td style={{ color: 'var(--text-3)', fontSize: 13 }}>{token.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Notas */}
      {notes && notes.length > 0 && (
        <div className="ds-section">
          <div className="ds-section__header">
            <h2 className="ds-section__title">Notas de implementación</h2>
          </div>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {notes.map((note, i) => (
              <li key={i} style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.6, display: 'flex', gap: 10 }}>
                <span style={{ color: 'var(--brand)', flexShrink: 0 }}>→</span>
                {note}
              </li>
            ))}
          </ul>
        </div>
      )}

      {children}
    </div>
  );
}
