import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/ds/PageHeader';

export const metadata: Metadata = { title: 'Brand' };

const BRAND_SECTIONS = [
  {
    icon: '◈',
    title: 'Logo',
    description: 'Versiones del logo, área de seguridad, tamaños mínimos y aplicaciones.',
    href: '/brand/logo',
    count: '3 versiones',
  },
  {
    icon: '⬤',
    title: 'Colores de Marca',
    description: 'Paleta principal, combinaciones permitidas y usos sobre fondos.',
    href: '/brand/colors',
    count: '2 colores principales',
  },
  {
    icon: 'Aa',
    title: 'Tipografía de Marca',
    description: 'Familias tipográficas, jerarquía visual y guías de uso editorial.',
    href: '/brand/typography',
    count: '2 familias',
  },
  {
    icon: '◌',
    title: 'Composición',
    description: 'Reglas de composición visual, márgenes y proporciones de la marca.',
    href: '/brand/composition',
    count: 'Guías de layout',
  },
  {
    icon: '◉',
    title: 'Voz y Tono',
    description: 'Personalidad de la marca, principios de comunicación y ejemplos.',
    href: '/brand/voice',
    count: 'Guidelines editoriales',
  },
];

export default function BrandPage() {
  return (
    <>
      <PageHeader
        title="Brand"
        description="Guías de identidad visual de Multitravel. Todo lo necesario para aplicar la marca de forma consistente."
        status="draft"
        updatedAt="Marzo 2025"
      />

      <div className="ds-info-box ds-info-box--info" style={{ marginBottom: 36 }}>
        <span className="ds-info-box__icon">ℹ</span>
        <div>
          <strong>Brand Guidelines en construcción.</strong>
          {' '}Las guías de marca se completarán junto con el equipo de Brand.
          Por ahora la estructura y los apartados están listos.
        </div>
      </div>

      {/* Brand Overview */}
      <div className="ds-section">
        <div style={{
          background: 'linear-gradient(135deg, var(--brand-dark) 0%, var(--brand) 100%)',
          borderRadius: 'var(--radius-xl)',
          padding: '40px 40px',
          color: 'white',
          marginBottom: 32,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
          flexWrap: 'wrap',
        }}>
          <div>
            <div style={{ fontSize: 13, opacity: 0.7, marginBottom: 8, letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600 }}>
              Marca Principal
            </div>
            <div style={{ fontSize: 32, fontWeight: 900, letterSpacing: '-0.5px', lineHeight: 1 }}>
              Multitravel
            </div>
            <div style={{ fontSize: 14, opacity: 0.7, marginTop: 6 }}>
              Turismo · Digital · Web responsive
            </div>
          </div>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: 48, height: 48, background: '#0D4E88', borderRadius: 8, border: '2px solid rgba(255,255,255,0.2)' }} />
              <div style={{ fontSize: 10, opacity: 0.7, marginTop: 4 }}>Usafa</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: 48, height: 48, background: '#226FCB', borderRadius: 8, border: '2px solid rgba(255,255,255,0.2)' }} />
              <div style={{ fontSize: 10, opacity: 0.7, marginTop: 4 }}>Blue 600</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: 48, height: 48, background: '#EF0539', borderRadius: 8, border: '2px solid rgba(255,255,255,0.2)' }} />
              <div style={{ fontSize: 10, opacity: 0.7, marginTop: 4 }}>Red 600</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: 48, height: 48, background: 'white', borderRadius: 8, border: '2px solid rgba(255,255,255,0.2)' }} />
              <div style={{ fontSize: 10, opacity: 0.7, marginTop: 4 }}>White</div>
            </div>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">Guías de Marca</h2>
          <p className="ds-section__desc">Documentación completa de identidad visual.</p>
        </div>
        <div className="ds-section-grid">
          {BRAND_SECTIONS.map(s => (
            <Link key={s.href} href={s.href} className="ds-section-card">
              <div className="ds-section-card__icon">{s.icon}</div>
              <div className="ds-section-card__title">{s.title}</div>
              <p className="ds-section-card__desc">{s.description}</p>
              <div className="ds-section-card__footer">
                <span className="ds-section-card__count">{s.count}</span>
                <span className="ds-section-card__arrow">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
