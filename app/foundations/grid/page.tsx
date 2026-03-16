import type { Metadata } from 'next';
import PageHeader from '@/components/ds/PageHeader';

export const metadata: Metadata = { title: 'Grid & Layout — Foundations' };

const BREAKPOINTS = [
  { name: 'Mobile S', bp: '375px', cols: 4,  gutter: '16px', margin: '16px',  container: '343px' },
  { name: 'Mobile L', bp: '430px', cols: 4,  gutter: '16px', margin: '20px',  container: '390px' },
  { name: 'Tablet',   bp: '768px', cols: 8,  gutter: '20px', margin: '32px',  container: '704px' },
  { name: 'Desktop',  bp: '1024px',cols: 12, gutter: '24px', margin: '40px',  container: '944px' },
  { name: 'Wide',     bp: '1280px',cols: 12, gutter: '24px', margin: '64px',  container: '1152px' },
  { name: 'Full HD',  bp: '1440px',cols: 12, gutter: '24px', margin: 'auto',  container: '1200px (max)' },
];

const LAYOUT_ZONES = [
  { name: 'Top Navigation',    height: '64px',    sticky: true,  note: 'Header fijo. Contiene logo, nav principal y acciones globales.' },
  { name: 'Search Bar',        height: '80–120px', sticky: false, note: 'Área de búsqueda. En home es hero; en resultados sticky bajo el header.' },
  { name: 'Filter Sidebar',    height: 'fluid',   sticky: true,  note: 'Sidebar de filtros en desktop (240–280px). En mobile: bottom sheet o drawer.' },
  { name: 'Results Area',      height: 'fluid',   sticky: false, note: 'Grid de resultados. Ocupa el espacio disponible tras el sidebar.' },
  { name: 'Price / CTA Panel', height: '80–96px', sticky: true,  note: 'Panel de precio y acción principal en mobile. Sticky al bottom.' },
  { name: 'Footer',            height: 'auto',    sticky: false, note: 'Footer global. Se oculta en mobile en páginas de checkout.' },
];

const COLUMN_CONFIGS = [
  {
    name: 'Full-width',
    cols: '1 / -1',
    desc: 'Ocupa todos los columnas disponibles. Usado en heroes, banners y secciones de ancho completo.',
    example: 'Hero section, image banners, section separators',
    visual: 12,
  },
  {
    name: 'Content (8 cols)',
    cols: '3 / 11',
    desc: 'Centrado en las 8 columnas centrales en desktop. Máxima legibilidad para texto.',
    example: 'Artículos, páginas informativas, confirmaciones',
    visual: 8,
  },
  {
    name: 'Sidebar + Content',
    cols: '— / —',
    desc: '3 columnas sidebar + 9 columnas contenido. Layout típico de resultados en desktop.',
    example: 'SERP (Search Engine Results Page), filtros + cards',
    visual: 9,
  },
  {
    name: 'Two-column equal',
    cols: '6 + 6',
    desc: 'Dos áreas iguales. Usado en comparaciones, feat doble o form + preview.',
    example: 'Comparadores, checkout split, login/registro',
    visual: 6,
  },
  {
    name: 'Cards grid (3 cols)',
    cols: '4 + 4 + 4',
    desc: 'Tres columnas iguales. Grid de tarjetas en desktop.',
    example: 'Hotel cards, activity cards, destacados',
    visual: 4,
  },
];

export default function GridPage() {
  return (
    <>
      <PageHeader
        title="Grid & Layout"
        description="Sistema de columnas, gutters, contenedor y reglas de layout para el producto digital de Multitravel. 12 columnas en desktop, 4 en mobile."
        section="Foundations"
        status="stable"
        version="0.1"
        updatedAt="Marzo 2025"
      />

      {/* Overview */}
      <div className="ds-section">
        <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.7, maxWidth: 700 }}>
          El sistema de layout de Lorien usa una <strong>grilla de 12 columnas en desktop</strong> y{' '}
          <strong>4 columnas en mobile</strong>. El gutter y los márgenes laterales escalan con el breakpoint
          para mantener densidad visual adecuada en cada dispositivo. El contenedor máximo es <strong>1200px</strong>.
        </p>
      </div>

      {/* Grid by Breakpoint */}
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">Grilla por breakpoint</h2>
          <p className="ds-section__desc">Columnas, gutters y márgenes en cada punto de quiebre del sistema.</p>
        </div>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
          <table className="ds-token-table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Breakpoint</th>
                <th>Columnas</th>
                <th>Gutter</th>
                <th>Margen lateral</th>
                <th>Contenedor</th>
              </tr>
            </thead>
            <tbody>
              {BREAKPOINTS.map(bp => (
                <tr key={bp.name}>
                  <td style={{ fontWeight: 600, fontSize: 13 }}>{bp.name}</td>
                  <td><code className="ds-code" style={{ fontSize: 11 }}>≥ {bp.bp}</code></td>
                  <td>
                    <span style={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                      {Array.from({ length: bp.cols }, (_, i) => (
                        <span key={i} style={{ width: 6, height: 14, background: 'var(--brand-border)', borderRadius: 1 }} />
                      ))}
                      <span style={{ marginLeft: 6, fontSize: 12, fontWeight: 700, color: 'var(--brand)' }}>{bp.cols}</span>
                    </span>
                  </td>
                  <td><code className="ds-code" style={{ fontSize: 11 }}>{bp.gutter}</code></td>
                  <td><code className="ds-code" style={{ fontSize: 11 }}>{bp.margin}</code></td>
                  <td style={{ fontSize: 12, color: 'var(--text-3)' }}>{bp.container}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Visual Grid Preview */}
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">Diagrama de columnas</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {/* Desktop 12 cols */}
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '20px 24px' }}>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-3)', marginBottom: 12 }}>
              Desktop — 12 columnas — gutter 24px
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 4 }}>
              {Array.from({ length: 12 }, (_, i) => (
                <div key={i} style={{
                  height: 32, background: 'var(--brand-light)', border: '1px solid var(--brand-border)',
                  borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{ fontSize: 10, color: 'var(--brand)', fontWeight: 700 }}>{i + 1}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tablet 8 cols */}
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '20px 24px' }}>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-3)', marginBottom: 12 }}>
              Tablet — 8 columnas — gutter 20px
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: 4 }}>
              {Array.from({ length: 8 }, (_, i) => (
                <div key={i} style={{
                  height: 32, background: 'var(--surface-2)', border: '1px solid var(--border-2)',
                  borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{ fontSize: 10, color: 'var(--text-3)', fontWeight: 700 }}>{i + 1}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile 4 cols */}
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '20px 24px' }}>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-3)', marginBottom: 12 }}>
              Mobile — 4 columnas — gutter 16px
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 4, maxWidth: 320 }}>
              {Array.from({ length: 4 }, (_, i) => (
                <div key={i} style={{
                  height: 32, background: '#FFF7ED', border: '1px solid #FED7AA',
                  borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{ fontSize: 10, color: '#C2410C', fontWeight: 700 }}>{i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Column Configurations */}
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">Configuraciones de columnas</h2>
          <p className="ds-section__desc">Patrones recurrentes de uso de columnas para diferentes tipos de contenido.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {COLUMN_CONFIGS.map(cfg => (
            <div key={cfg.name} style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)', padding: '16px 20px',
              display: 'grid', gridTemplateColumns: '200px 1fr 1fr', gap: 20, alignItems: 'center',
            }}>
              {/* Visual */}
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 8 }}>{cfg.name}</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 2 }}>
                  {Array.from({ length: 12 }, (_, i) => {
                    const active = cfg.visual === 12 ? true
                      : cfg.name === 'Content (8 cols)' ? (i >= 2 && i < 10)
                      : cfg.name === 'Sidebar + Content' ? (i >= 3)
                      : cfg.name === 'Two-column equal' ? (i < 6)
                      : (i < 4);
                    return (
                      <div key={i} style={{
                        height: 12, borderRadius: 2,
                        background: active ? 'var(--brand)' : 'var(--surface-2)',
                        border: `1px solid ${active ? 'var(--brand)' : 'var(--border)'}`,
                      }} />
                    );
                  })}
                </div>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--brand)', marginBottom: 4 }}>
                  {cfg.cols}
                </div>
                <div style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.6 }}>{cfg.desc}</div>
              </div>
              <div style={{ fontSize: 12, color: 'var(--text-3)', lineHeight: 1.6 }}>
                <strong style={{ color: 'var(--text-2)' }}>Ejemplos:</strong><br />{cfg.example}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Layout zones */}
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">Zonas de layout de página</h2>
          <p className="ds-section__desc">Estructura base de las páginas del producto Multitravel.</p>
        </div>
        {/* Page anatomy diagram */}
        <div style={{
          background: 'var(--surface)', border: '1px solid var(--border)',
          borderRadius: 'var(--radius-xl)', padding: 24, marginBottom: 20,
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, maxWidth: 600 }}>
            {/* Header */}
            <div style={{
              height: 40, borderRadius: 8, background: 'var(--brand)',
              display: 'flex', alignItems: 'center', paddingLeft: 16,
            }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: 'white' }}>Top Navigation (64px · sticky)</span>
            </div>
            {/* Search */}
            <div style={{
              height: 32, borderRadius: 6, background: '#EFF6FF',
              border: '1px dashed var(--brand-border)',
              display: 'flex', alignItems: 'center', paddingLeft: 16,
            }}>
              <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--brand)' }}>Search Bar (80–120px)</span>
            </div>
            {/* Sidebar + Content */}
            <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: 4, height: 100 }}>
              <div style={{
                borderRadius: 6, background: 'var(--surface-2)',
                border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ fontSize: 10, fontWeight: 600, color: 'var(--text-3)', textAlign: 'center', padding: 4 }}>
                  Filter<br />Sidebar<br />(240px)
                </span>
              </div>
              <div style={{
                borderRadius: 6, background: 'var(--surface-2)',
                border: '1px solid var(--border)',
                display: 'flex', flexDirection: 'column', gap: 4, padding: 8,
              }}>
                {[1, 2, 3].map(i => (
                  <div key={i} style={{ height: 20, borderRadius: 4, background: 'var(--border)' }} />
                ))}
              </div>
            </div>
            {/* CTA panel mobile indicator */}
            <div style={{
              height: 28, borderRadius: 6, background: '#FFF7ED',
              border: '1px dashed #FED7AA',
              display: 'flex', alignItems: 'center', paddingLeft: 16,
            }}>
              <span style={{ fontSize: 11, fontWeight: 600, color: '#C2410C' }}>Price / CTA Panel (mobile · sticky bottom)</span>
            </div>
            {/* Footer */}
            <div style={{
              height: 24, borderRadius: 6, background: 'var(--surface-2)',
              border: '1px solid var(--border)',
              display: 'flex', alignItems: 'center', paddingLeft: 16,
            }}>
              <span style={{ fontSize: 11, color: 'var(--text-3)' }}>Footer</span>
            </div>
          </div>
        </div>

        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
          <table className="ds-token-table">
            <thead>
              <tr>
                <th>Zona</th>
                <th>Altura</th>
                <th>Sticky</th>
                <th>Notas</th>
              </tr>
            </thead>
            <tbody>
              {LAYOUT_ZONES.map(z => (
                <tr key={z.name}>
                  <td style={{ fontWeight: 600, fontSize: 13 }}>{z.name}</td>
                  <td><code className="ds-code" style={{ fontSize: 11 }}>{z.height}</code></td>
                  <td>
                    <span style={{
                      fontSize: 11, fontWeight: 700, padding: '2px 8px',
                      borderRadius: 'var(--radius-pill)',
                      background: z.sticky ? 'var(--brand-light)' : 'var(--surface-2)',
                      color: z.sticky ? 'var(--brand)' : 'var(--text-3)',
                    }}>
                      {z.sticky ? 'Sí' : 'No'}
                    </span>
                  </td>
                  <td style={{ fontSize: 12, color: 'var(--text-3)', lineHeight: 1.5 }}>{z.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Container */}
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">Contenedor</h2>
          <p className="ds-section__desc">Reglas del contenedor responsivo central.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {[
            {
              title: 'Max-width global',
              desc: 'El contenedor tiene un máximo de 1200px. En pantallas más anchas, el contenido queda centrado con márgenes automáticos.',
              code: '.container {\n  max-width: 1200px;\n  margin-inline: auto;\n  padding-inline: var(--margin);\n}',
            },
            {
              title: 'Full-bleed vs. contained',
              desc: 'Algunos elementos (hero images, banners, nav bar) rompen intencionalmente el contenedor para ocupar el ancho completo de la pantalla.',
              code: '.full-bleed {\n  width: 100vw;\n  margin-left: calc(-1 * var(--margin));\n}',
            },
          ].map(item => (
            <div key={item.title} style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)', overflow: 'hidden',
            }}>
              <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--border)' }}>
                <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 6 }}>{item.title}</div>
                <div style={{ fontSize: 13, color: 'var(--text-3)', lineHeight: 1.6 }}>{item.desc}</div>
              </div>
              <pre style={{ margin: 0, padding: '14px 20px', fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--text-2)', lineHeight: 1.7, background: 'var(--surface-2)' }}>
                {item.code}
              </pre>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Implementation */}
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">Implementación CSS</h2>
        </div>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
          <div style={{ padding: '10px 16px', background: 'var(--surface-2)', borderBottom: '1px solid var(--border)', fontSize: 12, fontWeight: 600, color: 'var(--text-3)' }}>
            Grilla CSS con custom properties
          </div>
          <pre style={{ margin: 0, padding: '20px', fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--text-2)', lineHeight: 1.7, overflowX: 'auto' }}>
{`:root {
  --cols: 4;
  --gutter: 16px;
  --margin: 16px;
}

@media (min-width: 768px) {
  :root { --cols: 8; --gutter: 20px; --margin: 32px; }
}

@media (min-width: 1024px) {
  :root { --cols: 12; --gutter: 24px; --margin: 40px; }
}

@media (min-width: 1280px) {
  :root { --margin: 64px; }
}

@media (min-width: 1440px) {
  :root { --margin: auto; }
}

/* Grid container */
.grid {
  display: grid;
  grid-template-columns: repeat(var(--cols), 1fr);
  gap: var(--gutter);
  padding-inline: var(--margin);
  max-width: 1200px;
  margin-inline: auto;
}

/* Span helpers */
.col-full   { grid-column: 1 / -1; }
.col-8      { grid-column: 3 / 11; }         /* centrado desktop */
.col-sidebar { grid-column: span 3; }
.col-main   { grid-column: span 9; }

@media (max-width: 1023px) {
  .col-sidebar,
  .col-main { grid-column: 1 / -1; }
}`}
          </pre>
        </div>
      </div>

      {/* Do / Don't */}
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">Do / Don&apos;t</h2>
        </div>
        <div className="ds-do-dont">
          <div className="ds-do-dont__do">
            <div className="ds-do-dont__label">Do</div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                'Usar siempre la grilla de columnas para posicionar contenido. Evitar márgenes manuales.',
                'Probar todos los layouts en los 6 breakpoints del sistema.',
                'Colapsar el sidebar de filtros a drawer o bottom sheet en mobile (< 1024px).',
                'Mantener el max-width de 1200px para el contenedor principal.',
                'Usar full-bleed conscientemente: solo para elementos que refuerzan la narrativa visual.',
              ].map((item, i) => (
                <li key={i} style={{ fontSize: 13, color: 'var(--text-2)', display: 'flex', gap: 8, lineHeight: 1.6 }}>
                  <span style={{ color: '#16A34A', fontWeight: 700, flexShrink: 0 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="ds-do-dont__dont">
            <div className="ds-do-dont__label">Don&apos;t</div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                'No usar posicionamiento absoluto para layout estructural.',
                'No crear breakpoints intermedios no definidos en el sistema.',
                'No ocultar contenido crítico en mobile. Reorganizar, no eliminar.',
                'No superar las 3 columnas de cards en desktop — se pierde legibilidad.',
                'No crear grillas anidadas sin justificación. La complejidad aumenta exponencialmente.',
              ].map((item, i) => (
                <li key={i} style={{ fontSize: 13, color: 'var(--text-2)', display: 'flex', gap: 8, lineHeight: 1.6 }}>
                  <span style={{ color: '#DC2626', fontWeight: 700, flexShrink: 0 }}>✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
