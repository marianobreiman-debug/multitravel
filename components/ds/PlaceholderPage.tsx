import PageHeader from './PageHeader';
import type { NavStatus } from '@/lib/navigation';

interface PlaceholderSection {
  title: string;
  description: string;
  icon?: string;
}

interface PlaceholderPageProps {
  title: string;
  description: string;
  section?: string;
  status?: NavStatus;
  figmaNode?: string;
  sections?: PlaceholderSection[];
  note?: string;
}

export default function PlaceholderPage({
  title,
  description,
  section,
  status = 'draft',
  figmaNode,
  sections = [],
  note,
}: PlaceholderPageProps) {
  return (
    <>
      <PageHeader
        title={title}
        description={description}
        section={section}
        status={status}
        figmaNode={figmaNode}
      />

      {note && (
        <div className="ds-info-box ds-info-box--info" style={{ marginBottom: 32 }}>
          <span className="ds-info-box__icon">ℹ</span>
          <span>{note}</span>
        </div>
      )}

      <div
        className="ds-info-box ds-info-box--placeholder"
        style={{ marginBottom: sections.length > 0 ? 40 : 0 }}
      >
        <span className="ds-info-box__icon">◷</span>
        <div>
          <strong>Página en construcción</strong>
          <br />
          Esta sección está diseñada y lista para completar con contenido real. La estructura y
          los apartados ya están definidos.
        </div>
      </div>

      {sections.length > 0 && (
        <div className="ds-section">
          <div className="ds-section__header">
            <h2 className="ds-section__title">Contenido planificado</h2>
            <p className="ds-section__desc">
              Estos son los apartados que se documentarán en esta página.
            </p>
          </div>
          <div className="ds-section-grid">
            {sections.map((s, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--surface)',
                  border: '1px dashed var(--border-2)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 6,
                }}
              >
                {s.icon && <div style={{ fontSize: 20, marginBottom: 4 }}>{s.icon}</div>}
                <div style={{ fontWeight: 600, fontSize: 13, color: 'var(--text)' }}>{s.title}</div>
                <div style={{ fontSize: 12, color: 'var(--text-3)', lineHeight: 1.5 }}>{s.description}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
