import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/ds/PageHeader';

export const metadata: Metadata = { title: 'Components' };

const CATEGORIES = [
  {
    id: 'actions', icon: '▷', title: 'Actions',
    description: 'Botones, links e icon buttons para acciones del usuario.',
    href: '/components/actions',
    components: [
      { label: 'Button', href: '/components/actions/button', status: 'stable', desc: 'CTA primario, secundario y ghost' },
      { label: 'Link', href: '/components/actions/link', status: 'draft', desc: 'Enlace inline y standalone' },
      { label: 'Icon Button', href: '/components/actions/icon-button', status: 'draft', desc: 'Botón solo con ícono' },
    ],
  },
  {
    id: 'forms', icon: '⊡', title: 'Forms',
    description: 'Inputs, selects, checkboxes, radios, switches y date pickers.',
    href: '/components/forms',
    components: [
      { label: 'Input', href: '/components/forms/input', status: 'stable', desc: 'Campo de texto con label y validación' },
      { label: 'Select', href: '/components/forms/select', status: 'draft', desc: 'Dropdown de selección' },
      { label: 'Checkbox', href: '/components/forms/checkbox', status: 'draft', desc: 'Selección múltiple' },
      { label: 'Radio', href: '/components/forms/radio', status: 'draft', desc: 'Selección única' },
      { label: 'Switch', href: '/components/forms/switch', status: 'stable', desc: 'Toggle on/off' },
      { label: 'Date Picker', href: '/components/forms/date-picker', status: 'draft', desc: 'Selector de fechas' },
    ],
  },
  {
    id: 'navigation', icon: '≡', title: 'Navigation',
    description: 'Tabs, breadcrumb, pagination y stepper.',
    href: '/components/navigation',
    components: [
      { label: 'Tabs', href: '/components/navigation/tabs', status: 'draft', desc: 'Navegación por pestañas' },
      { label: 'Breadcrumb', href: '/components/navigation/breadcrumb', status: 'draft', desc: 'Ruta de navegación' },
      { label: 'Pagination', href: '/components/navigation/pagination', status: 'draft', desc: 'Navegación por páginas' },
      { label: 'Stepper', href: '/components/navigation/stepper', status: 'draft', desc: 'Pasos de un flujo' },
    ],
  },
  {
    id: 'feedback', icon: '◎', title: 'Feedback',
    description: 'Alertas, toasts, skeletons, progress y spinners.',
    href: '/components/feedback',
    components: [
      { label: 'Alert', href: '/components/feedback/alert', status: 'draft', desc: 'Mensajes informativos y de estado' },
      { label: 'Toast', href: '/components/feedback/toast', status: 'draft', desc: 'Notificaciones flotantes' },
      { label: 'Skeleton', href: '/components/feedback/skeleton', status: 'draft', desc: 'Placeholder de carga' },
      { label: 'Progress', href: '/components/feedback/progress', status: 'draft', desc: 'Barra de progreso' },
      { label: 'Spinner', href: '/components/feedback/spinner', status: 'draft', desc: 'Indicador de carga circular' },
    ],
  },
  {
    id: 'data-display', icon: '◫', title: 'Data Display',
    description: 'Tags, badges, cards, flight cards y avatars.',
    href: '/components/data-display',
    components: [
      { label: 'Tag', href: '/components/data-display/tag', status: 'stable', desc: 'Etiqueta de estado o categoría' },
      { label: 'Badge', href: '/components/data-display/badge', status: 'draft', desc: 'Contador o indicador' },
      { label: 'Card', href: '/components/data-display/card', status: 'draft', desc: 'Contenedor de contenido' },
      { label: 'Flight Card', href: '/components/data-display/flight-card', status: 'stable', desc: 'Resultado de búsqueda de vuelo' },
      { label: 'Avatar', href: '/components/data-display/avatar', status: 'draft', desc: 'Representación de usuario' },
      { label: 'Accordion', href: '/components/data-display/accordion', status: 'draft', desc: 'Contenido expandible' },
    ],
  },
  {
    id: 'overlays', icon: '◻', title: 'Overlays',
    description: 'Modales, drawers, tooltips, popovers y dropdowns.',
    href: '/components/overlays',
    components: [
      { label: 'Modal', href: '/components/overlays/modal', status: 'draft', desc: 'Diálogo superpuesto' },
      { label: 'Drawer', href: '/components/overlays/drawer', status: 'draft', desc: 'Panel lateral deslizante' },
      { label: 'Tooltip', href: '/components/overlays/tooltip', status: 'draft', desc: 'Información contextual al hover' },
      { label: 'Popover', href: '/components/overlays/popover', status: 'draft', desc: 'Panel flotante con contenido rico' },
      { label: 'Dropdown', href: '/components/overlays/dropdown', status: 'draft', desc: 'Menú de opciones' },
    ],
  },
  {
    id: 'layout', icon: '⊞', title: 'Layout',
    description: 'Contenedor, divider, stack y grid para estructurar páginas.',
    href: '/components/layout',
    components: [
      { label: 'Container', href: '/components/layout/container', status: 'draft', desc: 'Contenedor de ancho máximo' },
      { label: 'Divider', href: '/components/layout/divider', status: 'draft', desc: 'Separador horizontal o vertical' },
      { label: 'Stack', href: '/components/layout/stack', status: 'draft', desc: 'Layout flexible en línea' },
      { label: 'Grid', href: '/components/layout/grid', status: 'draft', desc: 'Sistema de grilla' },
    ],
  },
];

const STATUS_LABELS: Record<string, string> = {
  stable: 'Stable', beta: 'Beta', draft: 'Draft',
};

export default function ComponentsPage() {
  const totalStable = CATEGORIES.flatMap(c => c.components).filter(c => c.status === 'stable').length;
  const total = CATEGORIES.flatMap(c => c.components).length;

  return (
    <>
      <PageHeader
        title="Components"
        description={`Biblioteca de componentes del sistema de diseño Lorien. ${totalStable} de ${total} componentes disponibles.`}
        status="stable"
        updatedAt="Marzo 2025"
      />

      {/* Stats */}
      <div style={{
        display: 'flex', gap: 12, marginBottom: 40, flexWrap: 'wrap',
      }}>
        {[
          { label: 'Total componentes', value: total },
          { label: 'Stable', value: totalStable, cls: 'stable' },
          { label: 'Draft', value: total - totalStable, cls: 'draft' },
          { label: 'Categorías', value: CATEGORIES.length },
        ].map((s, i) => (
          <div key={i} style={{
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)', padding: '12px 20px',
            display: 'flex', flexDirection: 'column', gap: 2,
          }}>
            <div style={{ fontSize: 22, fontWeight: 800, color: 'var(--text)', lineHeight: 1 }}>{s.value}</div>
            <div style={{ fontSize: 11, color: 'var(--text-4)' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Categories */}
      {CATEGORIES.map(cat => (
        <div key={cat.id} className="ds-section">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
            <div>
              <h2 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 4, display: 'flex', gap: 8, alignItems: 'center' }}>
                <span style={{ color: 'var(--brand)', fontSize: 14 }}>{cat.icon}</span>
                {cat.title}
                <span style={{ fontSize: 11, color: 'var(--text-4)', fontWeight: 400 }}>
                  {cat.components.filter(c => c.status === 'stable').length}/{cat.components.length}
                </span>
              </h2>
              <p style={{ fontSize: 13, color: 'var(--text-3)' }}>{cat.description}</p>
            </div>
            <Link href={cat.href} style={{ fontSize: 12, color: 'var(--brand)', fontWeight: 600, textDecoration: 'none', flexShrink: 0 }}>
              Ver categoría →
            </Link>
          </div>

          <div style={{
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: 'var(--radius-xl)', overflow: 'hidden',
          }}>
            {cat.components.map((comp, i) => (
              <Link
                key={comp.href}
                href={comp.href}
                className="ds-comp-list-item"
                style={{
                  borderBottom: i < cat.components.length - 1 ? '1px solid var(--border)' : 'none',
                  borderRadius: 0, margin: 0, padding: '12px 16px',
                }}
              >
                <div style={{
                  width: 28, height: 28, background: comp.status === 'stable' ? 'var(--brand-light)' : 'var(--surface-2)',
                  borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 11, color: comp.status === 'stable' ? 'var(--brand)' : 'var(--text-4)',
                  fontWeight: 700, flexShrink: 0,
                }}>
                  {comp.label[0]}
                </div>
                <div style={{ flex: 1 }}>
                  <span style={{ fontWeight: 600, fontSize: 13, color: 'var(--text)' }}>{comp.label}</span>
                  <span style={{ fontSize: 12, color: 'var(--text-3)', marginLeft: 8 }}>{comp.desc}</span>
                </div>
                <span className={`ds-badge ds-badge--${comp.status}`} style={{ fontSize: 10 }}>
                  <span className="ds-badge__dot" />
                  {STATUS_LABELS[comp.status]}
                </span>
                <span style={{ fontSize: 12, color: 'var(--text-4)' }}>→</span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
