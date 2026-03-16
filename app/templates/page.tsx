import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/ds/PageHeader';

export const metadata: Metadata = { title: 'Templates' };

const TEMPLATES = [
  { icon: '⌂', title: 'Home Vertical', description: 'Página de inicio de una vertical (vuelos, hoteles): hero con search box, featured, banners.', href: '/templates/home', pages: ['Desktop', 'Mobile'] },
  { icon: '⊡', title: 'Landing de Contenido', description: 'Página de contenido editorial: artículo, guía de destino, blog post.', href: '/templates/landing', pages: ['Desktop', 'Mobile'] },
  { icon: '◫', title: 'Resultados', description: 'Página de listado de resultados con filtros, ordenamiento y paginación.', href: '/templates/results', pages: ['Desktop', 'Mobile', 'Tablet'] },
  { icon: '◉', title: 'Detalle de Producto', description: 'Detalle de un vuelo, hotel o paquete con info completa y CTA de reserva.', href: '/templates/product-detail', pages: ['Desktop', 'Mobile'] },
  { icon: '①②③', title: 'Checkout', description: 'Flujo completo de reserva multi-paso: datos, pago y confirmación.', href: '/templates/checkout', pages: ['Desktop', 'Mobile'] },
  { icon: '✓', title: 'Thank You Page', description: 'Página de confirmación de reserva con resumen y próximos pasos.', href: '/templates/thank-you', pages: ['Desktop', 'Mobile'] },
  { icon: '⊞', title: 'Mi Cuenta', description: 'Sección de usuario: mis reservas, mis alertas, datos personales.', href: '/templates/account', pages: ['Desktop', 'Mobile'] },
];

export default function TemplatesPage() {
  return (
    <>
      <PageHeader
        title="Templates"
        description="Páginas completas de referencia para el producto Multitravel. Combinan foundations, componentes y patrones en layouts reales."
        status="draft"
        updatedAt="Marzo 2025"
      />

      <div className="ds-info-box ds-info-box--placeholder" style={{ marginBottom: 36 }}>
        <span className="ds-info-box__icon">◷</span>
        <div>
          <strong>Templates en construcción.</strong> Estos templates se construirán una vez que
          foundations, componentes y patrones estén más maduros.
        </div>
      </div>

      <div className="ds-section-grid ds-section-grid--2">
        {TEMPLATES.map(t => (
          <Link key={t.href} href={t.href} className="ds-section-card">
            <div className="ds-section-card__icon">{t.icon}</div>
            <div className="ds-section-card__title">{t.title}</div>
            <p className="ds-section-card__desc">{t.description}</p>
            <div className="ds-section-card__footer">
              <div style={{ display: 'flex', gap: 4 }}>
                {t.pages.map(p => (
                  <span key={p} className="ds-badge ds-badge--version" style={{ fontSize: 10 }}>{p}</span>
                ))}
              </div>
              <span className="ds-section-card__arrow">→</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
