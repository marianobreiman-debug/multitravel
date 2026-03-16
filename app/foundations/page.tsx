import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/ds/PageHeader';

export const metadata: Metadata = { title: 'Foundations' };

const FOUNDATIONS = [
  {
    icon: '⬤',
    title: 'Colors',
    description: 'Paleta completa del sistema: Primary Blue, Red, Greyscale, Success, Warning y más.',
    href: '/foundations/colors',
    count: '100+ tokens',
    status: 'stable' as const,
    preview: ['#0D4E88', '#226FCB', '#EF0539', '#23A423', '#F07306', '#272626'],
  },
  {
    icon: 'Aa',
    title: 'Typography',
    description: 'Familias, escalas de tamaño, pesos, line-height y letter-spacing.',
    href: '/foundations/typography',
    count: '2 familias · 6 escalas',
    status: 'stable' as const,
    preview: null,
  },
  {
    icon: '⟺',
    title: 'Spacing',
    description: 'Sistema de espaciado basado en múltiplos de 4px para márgenes, padding y gaps.',
    href: '/foundations/spacing',
    count: '20 valores',
    status: 'stable' as const,
    preview: null,
  },
  {
    icon: '⌒',
    title: 'Radius',
    description: 'Radios de borde: pill, card, input, tag y sus valores en pixels.',
    href: '/foundations/radius',
    count: '4 valores',
    status: 'stable' as const,
    preview: null,
  },
  {
    icon: '◻',
    title: 'Shadows',
    description: 'Sombras del sistema: sm y blueLg para distintos niveles de elevación.',
    href: '/foundations/shadows',
    count: '2 sombras',
    status: 'stable' as const,
    preview: null,
  },
  {
    icon: '□',
    title: 'Borders',
    description: 'Grosores de borde, estilos y combinaciones con colores del sistema.',
    href: '/foundations/borders',
    count: 'En definición',
    status: 'draft' as const,
    preview: null,
  },
  {
    icon: '⊞',
    title: 'Grid & Layout',
    description: 'Sistema de columnas, gutters, márgenes y breakpoints para layouts responsivos.',
    href: '/foundations/grid',
    count: 'En definición',
    status: 'draft' as const,
    preview: null,
  },
  {
    icon: '↔',
    title: 'Breakpoints',
    description: 'Puntos de quiebre para mobile, tablet y desktop con sus anchos mínimos.',
    href: '/foundations/breakpoints',
    count: '4 breakpoints',
    status: 'draft' as const,
    preview: null,
  },
  {
    icon: '◼',
    title: 'Iconography',
    description: 'Sistema de íconos: librería, tamaños y guías de uso.',
    href: '/foundations/iconography',
    count: 'En definición',
    status: 'draft' as const,
    preview: null,
  },
  {
    icon: '≈',
    title: 'Motion',
    description: 'Principios de animación: duraciones, easings y cuándo usar movimiento.',
    href: '/foundations/motion',
    count: 'En definición',
    status: 'draft' as const,
    preview: null,
  },
];

const STATUS_LABELS = { stable: 'Stable', beta: 'Beta', draft: 'Draft', deprecated: 'Deprecated' };

export default function FoundationsPage() {
  const stable = FOUNDATIONS.filter(f => f.status === 'stable');
  const draft = FOUNDATIONS.filter(f => f.status === 'draft');

  return (
    <>
      <PageHeader
        title="Foundations"
        description="Los bloques base del sistema de diseño. Tokens, decisiones de diseño y guías de implementación para el producto digital de Multitravel."
        status="stable"
        updatedAt="Marzo 2025"
      />

      {/* Stable */}
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">
            Disponibles
            <span className="ds-badge ds-badge--stable" style={{ marginLeft: 10, verticalAlign: 'middle', fontSize: 11 }}>
              <span className="ds-badge__dot" />Stable
            </span>
          </h2>
          <p className="ds-section__desc">Foundations con tokens definidos y listos para usar.</p>
        </div>
        <div className="ds-section-grid">
          {stable.map(f => (
            <Link key={f.href} href={f.href} className="ds-section-card">
              <div className="ds-section-card__icon" style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 14 }}>
                {f.icon}
              </div>
              {f.preview && (
                <div style={{ display: 'flex', gap: 3, marginBottom: 4 }}>
                  {f.preview.map(c => (
                    <div key={c} style={{ width: 16, height: 16, borderRadius: 4, background: c, border: '1px solid rgba(0,0,0,0.08)' }} />
                  ))}
                </div>
              )}
              <div className="ds-section-card__title">{f.title}</div>
              <p className="ds-section-card__desc">{f.description}</p>
              <div className="ds-section-card__footer">
                <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                  <span className="ds-section-card__count">{f.count}</span>
                  <span className={`ds-badge ds-badge--${f.status}`} style={{ fontSize: 10 }}>{STATUS_LABELS[f.status]}</span>
                </div>
                <span className="ds-section-card__arrow">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Draft */}
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">
            En construcción
            <span className="ds-badge ds-badge--draft" style={{ marginLeft: 10, verticalAlign: 'middle', fontSize: 11 }}>
              Draft
            </span>
          </h2>
          <p className="ds-section__desc">Foundations planificadas, listas para completar.</p>
        </div>
        <div className="ds-section-grid">
          {draft.map(f => (
            <Link key={f.href} href={f.href} className="ds-section-card" style={{ opacity: 0.75 }}>
              <div className="ds-section-card__icon" style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 14 }}>
                {f.icon}
              </div>
              <div className="ds-section-card__title">{f.title}</div>
              <p className="ds-section-card__desc">{f.description}</p>
              <div className="ds-section-card__footer">
                <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                  <span className="ds-section-card__count">{f.count}</span>
                  <span className={`ds-badge ds-badge--${f.status}`} style={{ fontSize: 10 }}>{STATUS_LABELS[f.status]}</span>
                </div>
                <span className="ds-section-card__arrow">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
