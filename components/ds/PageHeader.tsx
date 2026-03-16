import type { NavStatus } from '@/lib/navigation';

interface PageHeaderProps {
  title: string;
  description?: string;
  section?: string;
  status?: NavStatus;
  version?: string;
  updatedAt?: string;
  figmaNode?: string;
}

const STATUS_LABELS: Record<NavStatus, string> = {
  stable:     'Stable',
  beta:       'Beta',
  draft:      'Draft',
  deprecated: 'Deprecated',
};

export default function PageHeader({
  title,
  description,
  section,
  status = 'draft',
  version,
  updatedAt,
  figmaNode,
}: PageHeaderProps) {
  return (
    <header className="ds-page-header">
      {section && (
        <div className="ds-page-header__eyebrow">
          <span>{section}</span>
        </div>
      )}
      <h1 className="ds-page-header__title">{title}</h1>
      {description && (
        <p className="ds-page-header__desc">{description}</p>
      )}
      <div className="ds-page-header__meta">
        <span className={`ds-badge ds-badge--${status}`}>
          <span className="ds-badge__dot" />
          {STATUS_LABELS[status]}
        </span>
        {version && (
          <span className="ds-badge ds-badge--version">v{version}</span>
        )}
        {updatedAt && (
          <span className="ds-caption">Actualizado: {updatedAt}</span>
        )}
        {figmaNode && (
          <a
            href={`https://www.figma.com/design/awAiQ74drBGZImHlXtIdPN/Lorien?node-id=${figmaNode}`}
            target="_blank"
            rel="noopener noreferrer"
            className="ds-badge ds-badge--version"
            style={{ textDecoration: 'none' }}
          >
            ⊞ Figma
          </a>
        )}
      </div>
    </header>
  );
}
