import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/ds/PageHeader';

export const metadata: Metadata = { title: 'Resources' };

const RESOURCES = [
  { icon: '≡', title: 'Nomenclaturas', description: 'Convención de nombres para tokens, componentes, variantes y archivos.', href: '/resources/nomenclature', status: 'draft' as const },
  { icon: '⬤', title: 'Tokens & Variables', description: 'Referencia completa de todos los CSS custom properties del sistema.', href: '/resources/tokens', status: 'stable' as const },
  { icon: '⌨', title: 'Snippets', description: 'Fragmentos de código reutilizables para patrones comunes.', href: '/resources/snippets', status: 'draft' as const },
  { icon: '⊡', title: 'Links & Herramientas', description: 'Figma, repo, Storybook, documentación técnica y herramientas del equipo.', href: '/resources/links', status: 'draft' as const },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        title="Resources"
        description="Recursos técnicos y de implementación del design system. Tokens, nomenclaturas, snippets y herramientas."
        status="draft"
        updatedAt="Marzo 2025"
      />
      <div className="ds-section-grid">
        {RESOURCES.map(r => (
          <Link key={r.href} href={r.href} className="ds-section-card">
            <div className="ds-section-card__icon">{r.icon}</div>
            <div className="ds-section-card__title">{r.title}</div>
            <p className="ds-section-card__desc">{r.description}</p>
            <div className="ds-section-card__footer">
              <span className={`ds-badge ds-badge--${r.status}`} style={{ fontSize: 10 }}>
                <span className="ds-badge__dot" />{r.status === 'stable' ? 'Stable' : 'Draft'}
              </span>
              <span className="ds-section-card__arrow">→</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
