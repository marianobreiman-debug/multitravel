import Link from 'next/link';
import type { NavStatus } from '@/lib/navigation';

interface SectionCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
  count?: string;
  status?: NavStatus;
  tag?: string;
}

const STATUS_LABELS: Record<NavStatus, string> = {
  stable: 'Stable', beta: 'Beta', draft: 'Draft', deprecated: 'Deprecated',
};

export default function SectionCard({
  title,
  description,
  href,
  icon,
  count,
  status,
  tag,
}: SectionCardProps) {
  return (
    <Link href={href} className="ds-section-card">
      <div className="ds-section-card__icon">{icon}</div>
      <div className="ds-section-card__title">{title}</div>
      <p className="ds-section-card__desc">{description}</p>
      <div className="ds-section-card__footer">
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          {count && <span className="ds-section-card__count">{count}</span>}
          {status && (
            <span className={`ds-badge ds-badge--${status}`} style={{ fontSize: 10 }}>
              {STATUS_LABELS[status]}
            </span>
          )}
          {tag && (
            <span className="ds-badge ds-badge--new" style={{ fontSize: 10 }}>{tag}</span>
          )}
        </div>
        <span className="ds-section-card__arrow">→</span>
      </div>
    </Link>
  );
}
