import type { Metadata } from 'next';
import PageHeader from '@/components/ds/PageHeader';

export const metadata: Metadata = { title: 'Iconography — Foundations' };

const SIZES = [
  { size: '12px', name: 'XS',         use: 'Status dots inline, micro-indicadores dentro de badges compactos.',          token: '--icon-xs',    class: 'w-3 h-3' },
  { size: '16px', name: 'SM — Inline', use: 'Íconos dentro de texto, inputs, tags, badges. Alineados a baseline.',        token: '--icon-sm',    class: 'w-4 h-4' },
  { size: '20px', name: 'MD — Default',use: 'Tamaño base. Botones, menús de navegación, ítems de lista, breadcrumbs.',   token: '--icon-md',    class: 'w-5 h-5' },
  { size: '24px', name: 'LG — Display',use: 'Nav principal, acciones primarias destacadas, tab bars en mobile.',          token: '--icon-lg',    class: 'w-6 h-6' },
  { size: '32px', name: 'XL — Ilustración',use: 'Empty states, onboarding, sección de errores. No en UI funcional.',    token: '--icon-xl',    class: 'w-8 h-8' },
  { size: '48px', name: 'XXL — Hero',  use: 'Solo en ilustraciones decorativas de pantallas vacías o landing pages.',     token: '--icon-xxl',   class: 'w-12 h-12' },
];

const TRAVEL_ICONS = [
  { name: 'Plane', path: 'M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z', use: 'Vuelos, búsqueda de vuelos, resultados' },
  { name: 'Hotel', path: 'M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z', use: 'Hoteles, alojamientos, reservas' },
  { name: 'Car', path: 'M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z', use: 'Traslados, alquiler de autos' },
  { name: 'Location', path: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z', use: 'Destinos, origen, destino en búsqueda' },
  { name: 'Calendar', path: 'M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z', use: 'Fechas, check-in/check-out, calendario' },
  { name: 'Passengers', path: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z', use: 'Pasajeros, adultos, niños' },
  { name: 'Luggage', path: 'M17 6H7c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM9 4h6V3c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v1z', use: 'Equipaje, maletas, límite de peso' },
  { name: 'Star', path: 'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z', use: 'Rating, estrellas de hotel, favoritos' },
];

const COLOR_RULES = [
  { rule: 'Heredar del texto padre', css: 'color: inherit', use: 'Íconos dentro de botones, links, nav items. El ícono toma el color del texto automáticamente.' },
  { rule: 'Color de texto secundario', css: 'color: var(--text-3)', use: 'Íconos decorativos, indicadores sutiles, ítems deshabilitados.' },
  { rule: 'Color de marca', css: 'color: var(--brand)', use: 'Íconos de acción primaria, estado activo en nav, iconos en CTAs.' },
  { rule: 'Color de estado', css: 'color: var(--stable) / var(--beta) / ...', use: 'Íconos de feedback: check (success), warning, error. Siempre acompañados de texto.' },
  { rule: 'currentColor en SVG', css: 'fill: currentColor o stroke: currentColor', use: 'Configuración recomendada en SVGs del sistema. Permite herencia de color CSS.' },
];

const A11Y_RULES = [
  {
    pattern: 'Ícono decorativo (sin significado)',
    aria: 'aria-hidden="true"',
    example: 'Un ícono de flecha junto a un texto "Ver más". El texto ya lo explica.',
    code: '<svg aria-hidden="true" focusable="false">...</svg>',
  },
  {
    pattern: 'Ícono como único contenido de un botón',
    aria: 'aria-label en el botón',
    example: 'Botón de cierre con ícono X. Sin texto visible.',
    code: '<button aria-label="Cerrar modal">\n  <svg aria-hidden="true">...</svg>\n</button>',
  },
  {
    pattern: 'Ícono con título tooltip',
    aria: 'aria-describedby + role="img"',
    example: 'Ícono de info con tooltip en hover que explica el campo.',
    code: '<svg role="img" aria-describedby="tip-id">\n  <title id="tip-id">Más información</title>\n  ...\n</svg>',
  },
  {
    pattern: 'Ícono de estado (success, error)',
    aria: 'role="img" + aria-label',
    example: 'Ícono check junto a "Reserva confirmada". Combinar con texto visible.',
    code: '<svg role="img" aria-label="Éxito">...</svg>\n<span>Reserva confirmada</span>',
  },
];

export default function IconographyPage() {
  return (
    <>
      <PageHeader
        title="Iconography"
        description="Sistema de íconos de Lorien. Librería base, tamaños estandarizados, reglas de color, uso en componentes y guías de accesibilidad."
        section="Foundations"
        status="beta"
        version="0.1"
        updatedAt="Marzo 2025"
      />

      {/* Library decision */}
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">Librería base</h2>
          <p className="ds-section__desc">La librería de íconos recomendada para Lorien es Lucide React.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
          {[
            {
              name: 'Lucide React',
              status: 'Recomendado',
              statusColor: '#16A34A',
              statusBg: '#F0FDF4',
              pros: ['MIT license, open source', 'TypeScript nativo, tree-shakeable', '1400+ íconos consistentes', 'Stroke-based: fácil ajuste de grosor', 'Actualizaciones frecuentes', 'Integración trivial con React'],
              install: 'npm install lucide-react',
              import: "import { Plane, Hotel } from 'lucide-react'",
            },
            {
              name: 'Heroicons',
              status: 'Alternativa',
              statusColor: '#D97706',
              statusBg: '#FFFBEB',
              pros: ['MIT license, Tailwind CSS team', 'Solid + Outline variants', 'Limitado a ~300 íconos', 'Sin íconos de viaje específicos', 'Muy limpio y minimal'],
              install: 'npm install @heroicons/react',
              import: "import { PlaneIcon } from '@heroicons/react/24/outline'",
            },
            {
              name: 'Custom SVG',
              status: 'Complementario',
              statusColor: '#64748B',
              statusBg: '#F8FAFC',
              pros: ['Para íconos específicos de viaje', 'Branding diferencial', 'Requiere proceso de diseño', 'Mantener en Figma → export', 'Usar junto a Lucide, no reemplazar'],
              install: 'Exportar desde Figma como SVG',
              import: "import PlaneCustom from '@/icons/PlaneCustom'",
            },
          ].map(lib => (
            <div key={lib.name} style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)', overflow: 'hidden',
            }}>
              <div style={{ padding: '14px 16px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 700, fontSize: 14 }}>{lib.name}</span>
                <span style={{
                  fontSize: 11, fontWeight: 600, padding: '2px 8px',
                  borderRadius: 'var(--radius-pill)',
                  background: lib.statusBg, color: lib.statusColor,
                }}>
                  {lib.status}
                </span>
              </div>
              <div style={{ padding: '14px 16px' }}>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 14 }}>
                  {lib.pros.map((pro, i) => (
                    <li key={i} style={{ fontSize: 12, color: 'var(--text-2)', display: 'flex', gap: 6, lineHeight: 1.5 }}>
                      <span style={{ color: lib.statusColor, fontWeight: 700, flexShrink: 0 }}>·</span>
                      {pro}
                    </li>
                  ))}
                </ul>
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <code style={{ fontSize: 10, fontFamily: 'var(--font-mono)', background: 'var(--surface-2)', padding: '4px 8px', borderRadius: 4, color: 'var(--text-2)', display: 'block' }}>
                    {lib.install}
                  </code>
                  <code style={{ fontSize: 10, fontFamily: 'var(--font-mono)', background: 'var(--surface-2)', padding: '4px 8px', borderRadius: 4, color: 'var(--brand)', display: 'block' }}>
                    {lib.import}
                  </code>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Size system */}
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">Sistema de tamaños</h2>
          <p className="ds-section__desc">6 tamaños cubren todos los contextos de uso. MD (20px) es el tamaño por defecto.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {SIZES.map(s => (
            <div key={s.size} style={{
              display: 'grid', gridTemplateColumns: '80px 120px 120px 1fr',
              alignItems: 'center', gap: 16,
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)', padding: '12px 20px',
            }}>
              {/* Visual */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <svg
                  width={parseInt(s.size)}
                  height={parseInt(s.size)}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--brand)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  style={{ flexShrink: 0 }}
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <div>
                <code style={{ fontSize: 13, fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--brand)' }}>{s.size}</code>
                <div style={{ fontSize: 11, color: 'var(--text-3)', marginTop: 2 }}>{s.name}</div>
              </div>
              <code className="ds-code" style={{ fontSize: 11 }}>{s.class}</code>
              <span style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.5 }}>{s.use}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Travel icon set */}
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">Íconos de viaje — set base</h2>
          <p className="ds-section__desc">
            Los 8 íconos de dominio de viaje más usados en el producto. Se recomienda verificar en Lucide
            o crear custom SVGs para los que no tengan equivalente exacto.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
          {TRAVEL_ICONS.map(icon => (
            <div key={icon.name} style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)', padding: '16px', display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center',
            }}>
              <div style={{
                width: 56, height: 56, borderRadius: 'var(--radius-lg)',
                background: 'var(--brand-light)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--brand)">
                  <path d={icon.path} />
                </svg>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 4 }}>{icon.name}</div>
                <div style={{ fontSize: 11, color: 'var(--text-3)', lineHeight: 1.5 }}>{icon.use}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Color rules */}
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">Color en íconos</h2>
          <p className="ds-section__desc">
            Los íconos heredan el color del contexto. Siempre usar <code className="ds-code">currentColor</code> en el SVG
            para que la herencia CSS funcione correctamente.
          </p>
        </div>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
          <table className="ds-token-table">
            <thead>
              <tr><th>Regla</th><th>CSS</th><th>Cuándo usar</th></tr>
            </thead>
            <tbody>
              {COLOR_RULES.map(r => (
                <tr key={r.rule}>
                  <td style={{ fontWeight: 600, fontSize: 13 }}>{r.rule}</td>
                  <td><code className="ds-code" style={{ fontSize: 11 }}>{r.css}</code></td>
                  <td style={{ fontSize: 12, color: 'var(--text-3)', lineHeight: 1.5 }}>{r.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{
          marginTop: 16, background: 'var(--surface)', border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)', overflow: 'hidden',
        }}>
          <div style={{ padding: '10px 16px', background: 'var(--surface-2)', borderBottom: '1px solid var(--border)', fontSize: 12, fontWeight: 600, color: 'var(--text-3)' }}>
            SVG con currentColor (recomendado)
          </div>
          <pre style={{ margin: 0, padding: '16px', fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--text-2)', lineHeight: 1.7 }}>
{`<!-- SVG stroke-based (Lucide) -->
<svg
  width="20"
  height="20"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"   {/* ← hereda color CSS */}
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"
>
  ...
</svg>

<!-- SVG fill-based (custom) -->
<svg fill="currentColor" aria-hidden="true">
  <path d="..." />
</svg>`}
          </pre>
        </div>
      </div>

      {/* Uso en componentes */}
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">Uso en componentes</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
          {[
            {
              component: 'Button con ícono',
              rule: 'El ícono siempre a la izquierda del label. Gap de 6–8px. Tamaño 16px (SM) en botones compactos, 20px (MD) en botones estándar.',
              visual: (
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {['Buscar vuelo', 'Reservar'].map(label => (
                    <div key={label} style={{
                      display: 'flex', alignItems: 'center', gap: 6,
                      background: 'var(--brand)', color: 'white',
                      padding: '8px 16px', borderRadius: 'var(--radius-lg)',
                      fontSize: 13, fontWeight: 600,
                    }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                      </svg>
                      {label}
                    </div>
                  ))}
                </div>
              ),
            },
            {
              component: 'Input con ícono',
              rule: 'Ícono dentro del padding del input, no fuera. Posición izquierda para íconos de contexto (search, location), derecha para acciones (clear, toggle).',
              visual: (
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  border: '1px solid var(--border-2)', borderRadius: 12,
                  padding: '10px 14px', background: 'var(--surface)', maxWidth: 240,
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-3)" strokeWidth="2" strokeLinecap="round">
                    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  <span style={{ fontSize: 13, color: 'var(--text-4)' }}>Ciudad de origen</span>
                </div>
              ),
            },
            {
              component: 'Nav item con ícono',
              rule: 'Ícono 20px (MD), color heredado del item. En estado activo, el ícono toma el color de marca. Gap de 10px entre ícono y label.',
              visual: (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4, maxWidth: 180 }}>
                  {[
                    { label: 'Vuelos', active: true },
                    { label: 'Hoteles', active: false },
                  ].map(item => (
                    <div key={item.label} style={{
                      display: 'flex', alignItems: 'center', gap: 10,
                      padding: '8px 12px', borderRadius: 8,
                      background: item.active ? 'var(--brand-light)' : 'transparent',
                      color: item.active ? 'var(--brand)' : 'var(--text-3)',
                      fontSize: 13, fontWeight: item.active ? 700 : 400,
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                      </svg>
                      {item.label}
                    </div>
                  ))}
                </div>
              ),
            },
            {
              component: 'Icon-only button',
              rule: 'Siempre añadir aria-label. Área mínima de tap: 44×44px. El ícono visualmente puede ser 20px, pero el botón debe tener padding suficiente.',
              visual: (
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  {[
                    { color: 'var(--surface-2)', stroke: 'var(--text-2)' },
                    { color: 'var(--brand-light)', stroke: 'var(--brand)' },
                    { color: '#FFF1F2', stroke: '#DC2626' },
                  ].map((s, i) => (
                    <button key={i} aria-label="Acción" style={{
                      width: 40, height: 40, borderRadius: 8,
                      background: s.color, border: '1px solid var(--border)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={s.stroke} strokeWidth="2" strokeLinecap="round">
                        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  ))}
                </div>
              ),
            },
          ].map(item => (
            <div key={item.component} style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)', overflow: 'hidden',
            }}>
              <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--border)', background: 'var(--surface-2)' }}>
                <div style={{ fontWeight: 700, fontSize: 13 }}>{item.component}</div>
                <div style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 4, lineHeight: 1.5 }}>{item.rule}</div>
              </div>
              <div style={{ padding: '16px', display: 'flex', alignItems: 'center', minHeight: 80 }}>
                {item.visual}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accessibility */}
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">Accesibilidad</h2>
          <p className="ds-section__desc">
            La regla de oro: si el ícono comunica información, necesita texto alternativo.
            Si es decorativo, debe ocultarse de lectores de pantalla.
          </p>
        </div>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
          <table className="ds-token-table">
            <thead>
              <tr><th>Patrón</th><th>ARIA</th><th>Ejemplo</th><th>Código</th></tr>
            </thead>
            <tbody>
              {A11Y_RULES.map(r => (
                <tr key={r.pattern}>
                  <td style={{ fontWeight: 600, fontSize: 13 }}>{r.pattern}</td>
                  <td><code className="ds-code" style={{ fontSize: 10 }}>{r.aria}</code></td>
                  <td style={{ fontSize: 12, color: 'var(--text-3)', lineHeight: 1.5 }}>{r.example}</td>
                  <td>
                    <pre style={{ margin: 0, fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--text-2)', lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>
                      {r.code}
                    </pre>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
                'Usar Lucide React como fuente principal. Solo custom SVGs para íconos de dominio no cubiertos.',
                'Configurar SVGs con fill/stroke="currentColor" para heredar el color del contexto CSS.',
                'Agregar aria-hidden="true" en íconos puramente decorativos.',
                'Agregar aria-label en botones icon-only. El área de tap mínima es 44×44px.',
                'Usar el tamaño correcto para el contexto: 16px inline, 20px default, 24px nav/display.',
                'Mantener un catálogo de íconos custom en Figma con export SVG listo para handoff.',
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
                'No mezclar estilos de librerías distintas en la misma pantalla (Heroicons filled + Lucide outline).',
                'No usar íconos sin label de accesibilidad en acciones críticas (pagar, eliminar, confirmar).',
                'No usar icon fonts (Font Awesome, Material Icons) — no son accesibles ni tree-shakeable.',
                'No hardcodear colores en el SVG. Siempre currentColor para que la herencia CSS funcione.',
                'No escalar íconos fuera de los 6 tamaños del sistema.',
                'No usar íconos solos para comunicar estado de error/éxito sin texto de apoyo (daltonismo).',
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

      {/* Installation */}
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">Instalación y uso</h2>
        </div>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
          <div style={{ padding: '10px 16px', background: 'var(--surface-2)', borderBottom: '1px solid var(--border)', fontSize: 12, fontWeight: 600, color: 'var(--text-3)' }}>
            Lucide React — instalación y uso básico
          </div>
          <pre style={{ margin: 0, padding: '20px', fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--text-2)', lineHeight: 1.7, overflowX: 'auto' }}>
{`# Instalar
npm install lucide-react

# Uso básico
import { Plane, Hotel, MapPin, Calendar, Users } from 'lucide-react';

// Tamaño por defecto (24px) — usar size para ajustar
<Plane size={20} />

// Heredar color del componente padre
<Plane size={20} />  {/* color: inherit desde CSS del padre */}

// Color explícito con token
<Plane size={20} color="var(--brand)" />

// En un botón icon-only (accesible)
<button aria-label="Buscar vuelos" className="icon-btn">
  <Plane size={20} aria-hidden />
</button>

// Stroke width (Lucide default es 2)
<Plane size={20} strokeWidth={1.5} />  // más delgado, más elegante
<Plane size={20} strokeWidth={2.5} />  // más grueso, más énfasis`}
          </pre>
        </div>
      </div>
    </>
  );
}
