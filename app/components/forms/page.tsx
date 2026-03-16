import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/ds/PageHeader';

export const metadata: Metadata = { title: 'Forms — Components' };

const COMPONENTS = [
  { label: 'Input', href: '/components/forms/input', status: 'stable', desc: 'Campo de texto con label y validación de estado' },
  { label: 'Select', href: '/components/forms/select', status: 'draft', desc: 'Dropdown de selección de una opción' },
  { label: 'Checkbox', href: '/components/forms/checkbox', status: 'draft', desc: 'Selección múltiple de opciones' },
  { label: 'Radio', href: '/components/forms/radio', status: 'draft', desc: 'Selección única dentro de un grupo' },
  { label: 'Switch', href: '/components/forms/switch', status: 'stable', desc: 'Toggle on/off de estado binario' },
  { label: 'Date Picker', href: '/components/forms/date-picker', status: 'draft', desc: 'Selector de fechas y rangos' },
];

export default function FormsPage() {
  return (
    <>
      <PageHeader
        title="Forms"
        description="Componentes de captura de datos: inputs, selects, checkboxes, radios, switches y selectores de fecha."
        section="Components"
        status="stable"
      />
      <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
        {COMPONENTS.map((c, i) => (
          <Link key={c.href} href={c.href} style={{
            display: 'flex', alignItems: 'center', gap: 16, padding: '14px 20px',
            textDecoration: 'none', color: 'inherit',
            borderBottom: i < COMPONENTS.length - 1 ? '1px solid var(--border)' : 'none',
          }}>
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
