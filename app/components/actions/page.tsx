import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/ds/PageHeader';

export const metadata: Metadata = { title: 'Actions — Components' };

const COMPONENTS = [
  { label: 'Button', href: '/components/actions/button', status: 'stable', desc: 'Acción primaria, secundaria y ghost. El componente más usado del sistema.', figmaNode: '2863:30301' },
  { label: 'Link', href: '/components/actions/link', status: 'draft', desc: 'Enlace inline para navegación o acción sin jerarquía visual de button.' },
  { label: 'Icon Button', href: '/components/actions/icon-button', status: 'draft', desc: 'Botón con solo ícono para acciones secundarias en espacios reducidos.' },
];

export default function ActionsPage() {
  return (
    <>
      <PageHeader
        title="Actions"
        description="Componentes para desencadenar acciones del usuario. Buttons, links e icon buttons."
        section="Components"
        status="stable"
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {COMPONENTS.map((c, i) => (
          <Link key={c.href} href={c.href} style={{
            display: 'flex', alignItems: 'center', gap: 16, padding: '16px 20px',
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: 'var(--radius-xl)', textDecoration: 'none', color: 'inherit',
            transition: 'border-color 0.15s, box-shadow 0.15s',
          }}>
            <div style={{ width: 40, height: 40, background: c.status === 'stable' ? 'var(--brand-light)' : 'var(--surface-2)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, color: c.status === 'stable' ? 'var(--brand)' : 'var(--text-4)', fontWeight: 700, flexShrink: 0 }}>
              {c.label[0]}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--text)', marginBottom: 2 }}>{c.label}</div>
              <div style={{ fontSize: 13, color: 'var(--text-3)' }}>{c.desc}</div>
            </div>
            {c.figmaNode && <span className="ds-badge ds-badge--version" style={{ fontSize: 10 }}>Figma</span>}
            <span className={`ds-badge ds-badge--${c.status}`} style={{ fontSize: 10 }}>
              <span className="ds-badge__dot" />{c.status === 'stable' ? 'Stable' : 'Draft'}
            </span>
            <span style={{ color: 'var(--text-4)', fontSize: 14 }}>→</span>
          </Link>
        ))}
      </div>
    </>
  );
}
