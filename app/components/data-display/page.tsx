import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/ds/PageHeader';

export const metadata: Metadata = { title: 'Data Display — Components' };

const COMPONENTS = [
  { label: 'Tag', href: '/components/data-display/tag', status: 'stable', desc: 'Etiqueta semántica de estado o categoría' },
  { label: 'Badge', href: '/components/data-display/badge', status: 'draft', desc: 'Contador o indicador numérico' },
  { label: 'Card', href: '/components/data-display/card', status: 'draft', desc: 'Contenedor de contenido estructurado' },
  { label: 'Flight Card', href: '/components/data-display/flight-card', status: 'stable', desc: 'Resultado de búsqueda de vuelo completo' },
  { label: 'Avatar', href: '/components/data-display/avatar', status: 'draft', desc: 'Representación de usuario o entidad' },
  { label: 'Accordion', href: '/components/data-display/accordion', status: 'draft', desc: 'Secciones de contenido expandible/colapsable' },
];

export default function DataDisplayPage() {
  return (
    <>
      <PageHeader
        title="Data Display"
        description="Componentes para mostrar información: tags, badges, cards, flight cards, avatars y accordions."
        section="Components"
        status="stable"
      />
      <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
        {COMPONENTS.map((c, i) => (
          <Link key={c.href} href={c.href} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '14px 20px', textDecoration: 'none', color: 'inherit', borderBottom: i < COMPONENTS.length - 1 ? '1px solid var(--border)' : 'none' }}>
            <div style={{ width: 32, height: 32, background: c.status === 'stable' ? 'var(--brand-light)' : 'var(--surface-2)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, color: c.status === 'stable' ? 'var(--brand)' : 'var(--text-4)', fontWeight: 700, flexShrink: 0 }}>{c.label[0]}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--text)', marginBottom: 2 }}>{c.label}</div>
              <div style={{ fontSize: 12, color: 'var(--text-3)' }}>{c.desc}</div>
            </div>
            <span className={`ds-badge ds-badge--${c.status}`} style={{ fontSize: 10 }}><span className="ds-badge__dot" />{c.status === 'stable' ? 'Stable' : 'Draft'}</span>
            <span style={{ color: 'var(--text-4)' }}>→</span>
          </Link>
        ))}
      </div>
    </>
  );
}
