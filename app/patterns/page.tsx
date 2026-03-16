import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/ds/PageHeader';

export const metadata: Metadata = { title: 'Patterns' };

const PATTERNS = [
  { icon: '≡', title: 'Header', description: 'Encabezado principal con logo, navegación y acciones de usuario.', href: '/patterns/header', complexity: 'Media' },
  { icon: '⌕', title: 'Search Box', description: 'Caja de búsqueda de vuelos, hoteles o paquetes con fechas y pasajeros.', href: '/patterns/search', complexity: 'Alta' },
  { icon: '◫', title: 'Result Cards', description: 'Grilla o listado de resultados de búsqueda con filtros y ordenamiento.', href: '/patterns/result-cards', complexity: 'Alta' },
  { icon: '⊡', title: 'Filters', description: 'Panel de filtros lateral o en drawer para acotar resultados.', href: '/patterns/filters', complexity: 'Media' },
  { icon: '⊞', title: 'Forms', description: 'Formularios de checkout, registro y datos de pasajeros.', href: '/patterns/forms', complexity: 'Alta' },
  { icon: '◉', title: 'Checkout', description: 'Flujo de pago multi-paso: resumen, datos, pago, confirmación.', href: '/patterns/checkout', complexity: 'Alta' },
  { icon: '▭', title: 'Banners', description: 'Banners de comunicación, promociones y alertas de sistema.', href: '/patterns/banners', complexity: 'Baja' },
  { icon: '◌', title: 'Empty States', description: 'Estados vacíos: sin resultados, error, sin datos de usuario.', href: '/patterns/empty-states', complexity: 'Baja' },
  { icon: '◻', title: 'Modals & Drawers', description: 'Patrones de uso de overlays: confirmación, detalle, selección.', href: '/patterns/modals', complexity: 'Media' },
  { icon: '⊠', title: 'Tables & Lists', description: 'Tablas de datos, listas de reservas y listados de elementos.', href: '/patterns/tables', complexity: 'Media' },
];

const COMPLEXITY_COLORS: Record<string, string> = {
  'Baja': 'stable', 'Media': 'beta', 'Alta': 'draft',
};

export default function PatternsPage() {
  return (
    <>
      <PageHeader
        title="Patterns"
        description="Bloques de UI recurrentes en el producto de Multitravel. Combinaciones de componentes que resuelven necesidades funcionales concretas."
        status="draft"
        updatedAt="Marzo 2025"
      />

      <div className="ds-info-box ds-info-box--info" style={{ marginBottom: 36 }}>
        <span className="ds-info-box__icon">ℹ</span>
        <div>
          Los patrones combinan múltiples componentes para resolver casos de uso completos.
          Cada patrón documenta las decisiones de diseño, variantes y comportamiento responsive.
        </div>
      </div>

      <div className="ds-section-grid ds-section-grid--2">
        {PATTERNS.map(p => (
          <Link key={p.href} href={p.href} className="ds-section-card">
            <div className="ds-section-card__icon">{p.icon}</div>
            <div className="ds-section-card__title">{p.title}</div>
            <p className="ds-section-card__desc">{p.description}</p>
            <div className="ds-section-card__footer">
              <div style={{ display: 'flex', gap: 6 }}>
                <span className="ds-badge ds-badge--draft" style={{ fontSize: 10 }}>Draft</span>
                <span className={`ds-badge ds-badge--${COMPLEXITY_COLORS[p.complexity]}`} style={{ fontSize: 10 }}>
                  Complejidad: {p.complexity}
                </span>
              </div>
              <span className="ds-section-card__arrow">→</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
