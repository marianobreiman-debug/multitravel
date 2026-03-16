import type { Metadata } from 'next';
import PageHeader from '@/components/ds/PageHeader';

export const metadata: Metadata = { title: 'Motion — Foundations' };

const TOKENS = [
  { name: '--duration-fast',   value: '100ms', use: 'Microinteracciones: hover, focus-ring, ripple' },
  { name: '--duration',        value: '150ms', use: 'Transiciones estándar de UI (default)' },
  { name: '--duration-normal', value: '200ms', use: 'Aparición de elementos, tooltips, tags' },
  { name: '--duration-slow',   value: '300ms', use: 'Modales, drawers, paneles laterales' },
  { name: '--duration-slower', value: '500ms', use: 'Animaciones de carga, celebración, onboarding' },
  { name: '--ease',            value: 'cubic-bezier(0.4, 0, 0.2, 1)',    use: 'Easing estándar (Material ease). Default para casi todo.' },
  { name: '--ease-in',         value: 'cubic-bezier(0.4, 0, 1, 1)',      use: 'Para elementos que salen de pantalla.' },
  { name: '--ease-out',        value: 'cubic-bezier(0, 0, 0.2, 1)',      use: 'Para elementos que entran a pantalla.' },
  { name: '--ease-spring',     value: 'cubic-bezier(0.34, 1.56, 0.64, 1)', use: 'Spring effect. Badges, selected states, feedback activo.' },
];

const PATTERNS = [
  {
    name: 'Fade',
    property: 'opacity',
    from: '0',
    to: '1',
    duration: '--duration-normal (200ms)',
    easing: '--ease-out',
    use: 'Tooltips, dropdowns, modales, notificaciones. El más seguro y accesible.',
    code: `.fade-enter {
  opacity: 0;
  transition: opacity var(--duration-normal) var(--ease-out);
}
.fade-enter-active { opacity: 1; }
.fade-exit { opacity: 1; }
.fade-exit-active {
  opacity: 0;
  transition: opacity var(--duration) var(--ease-in);
}`,
  },
  {
    name: 'Slide Up',
    property: 'transform + opacity',
    from: 'translateY(8px) + opacity 0',
    to: 'translateY(0) + opacity 1',
    duration: '--duration-normal (200ms)',
    easing: '--ease-out',
    use: 'Bottom sheets, drawers de mobile, menús contextuales, snackbars.',
    code: `.slide-up-enter {
  opacity: 0;
  transform: translateY(8px);
  transition:
    opacity var(--duration-normal) var(--ease-out),
    transform var(--duration-normal) var(--ease-out);
}
.slide-up-enter-active {
  opacity: 1;
  transform: translateY(0);
}`,
  },
  {
    name: 'Scale',
    property: 'transform',
    from: 'scale(0.95)',
    to: 'scale(1)',
    duration: '--duration (150ms)',
    easing: '--ease-spring',
    use: 'Modales, popover cards, elementos seleccionados. Sensación de profundidad.',
    code: `.scale-enter {
  opacity: 0;
  transform: scale(0.95);
  transition:
    opacity var(--duration) var(--ease),
    transform var(--duration) var(--ease-spring);
}
.scale-enter-active {
  opacity: 1;
  transform: scale(1);
}`,
  },
  {
    name: 'Expand (altura)',
    property: 'height / max-height',
    from: '0',
    to: 'auto',
    duration: '--duration-slow (300ms)',
    easing: '--ease',
    use: 'Accordions, secciones colapsables, detalles expandibles.',
    code: `.expand {
  max-height: 0;
  overflow: hidden;
  transition: max-height var(--duration-slow) var(--ease);
}
.expand--open {
  max-height: 600px; /* valor safe mayor al contenido real */
}`,
  },
  {
    name: 'Skeleton shimmer',
    property: 'background-position',
    from: '-200% 0',
    to: '200% 0',
    duration: '1500ms (loop)',
    easing: 'linear',
    use: 'Loading states de cards, listas, tablas. Sustituye spinners en contenido largo.',
    code: `@keyframes shimmer {
  from { background-position: -200% 0; }
  to   { background-position:  200% 0; }
}

.skeleton {
  background: linear-gradient(
    90deg,
    var(--surface-2) 25%,
    var(--border) 50%,
    var(--surface-2) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s linear infinite;
  border-radius: var(--radius-sm);
}`,
  },
  {
    name: 'Spin (loading)',
    property: 'transform: rotate',
    from: '0deg',
    to: '360deg',
    duration: '700ms (loop)',
    easing: 'linear',
    use: 'Spinner de carga inline. Botones en estado loading, indicadores de proceso.',
    code: `@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

.spinner {
  width: 16px;
  height: 16px;
  border: 2px solid var(--brand-border);
  border-top-color: var(--brand);
  border-radius: 50%;
  animation: spin 700ms linear infinite;
}`,
  },
];

const INTERACTION_MAP = [
  { interaction: 'Hover en botón', property: 'background-color', duration: '--duration (150ms)', easing: '--ease' },
  { interaction: 'Focus en input', property: 'border-color + box-shadow', duration: '--duration (150ms)', easing: '--ease' },
  { interaction: 'Toggle switch', property: 'transform + background-color', duration: '--duration-normal (200ms)', easing: '--ease-spring' },
  { interaction: 'Abrir dropdown', property: 'opacity + transform', duration: '--duration-normal (200ms)', easing: '--ease-out' },
  { interaction: 'Abrir modal', property: 'opacity + scale', duration: '--duration-slow (300ms)', easing: '--ease-spring' },
  { interaction: 'Cerrar modal', property: 'opacity + scale', duration: '--duration (150ms)', easing: '--ease-in' },
  { interaction: 'Drawer de filtros', property: 'transform (slideX)', duration: '--duration-slow (300ms)', easing: '--ease-out' },
  { interaction: 'Notificación / toast', property: 'opacity + translateY', duration: '--duration-normal (200ms)', easing: '--ease-out' },
  { interaction: 'Skeleton shimmer', property: 'background-position', duration: '1500ms loop', easing: 'linear' },
  { interaction: 'Spinner de carga', property: 'rotate', duration: '700ms loop', easing: 'linear' },
  { interaction: 'Checkbox checked', property: 'scale + opacity (checkmark)', duration: '--duration-fast (100ms)', easing: '--ease-spring' },
  { interaction: 'Card hover lift', property: 'transform + box-shadow', duration: '--duration (150ms)', easing: '--ease' },
];

export default function MotionPage() {
  return (
    <>
      <PageHeader
        title="Motion"
        description="Principios, tokens y patrones de animación de Lorien. El movimiento tiene propósito: guiar atención, dar feedback y mostrar relaciones espaciales."
        section="Foundations"
        status="stable"
        version="0.1"
        updatedAt="Marzo 2025"
      />

      {/* Principios */}
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">Principios de motion</h2>
        </div>
        <div className="ds-section-grid">
          {[
            {
              icon: '⚡',
              title: 'Propósito ante todo',
              desc: 'Cada animación debe tener un motivo funcional: orientar al usuario, confirmar una acción o revelar contenido. Evitar el movimiento decorativo puro.',
            },
            {
              icon: '⏱',
              title: 'Brevedad',
              desc: 'Las animaciones deben ser cortas y precisas. Las transiciones más largas de 300ms deben justificarse. No hacer esperar al usuario.',
            },
            {
              icon: '◉',
              title: 'Consistencia',
              desc: 'Usar siempre los tokens del sistema (--duration-*, --ease-*). Prohibido inventar duraciones o easings ad-hoc en cada componente.',
            },
            {
              icon: '♿',
              title: 'Accesibilidad',
              desc: 'Siempre respetar prefers-reduced-motion. El movimiento es progressive enhancement, nunca bloqueante.',
            },
            {
              icon: '↗',
              title: 'Dirección coherente',
              desc: 'Los elementos que entran/salen deben hacerlo en la dirección lógica: dropdowns hacia abajo, drawers desde el borde, modales desde el centro.',
            },
            {
              icon: '⊡',
              title: 'Performance',
              desc: 'Animar solo propiedades GPU-accelerated: transform y opacity. Evitar animaciones de width, height, margin o top/left.',
            },
          ].map((p, i) => (
            <div key={i} style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)', padding: 20,
            }}>
              <div style={{ fontSize: 24, marginBottom: 12 }}>{p.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 8 }}>{p.title}</div>
              <div style={{ fontSize: 13, color: 'var(--text-3)', lineHeight: 1.6 }}>{p.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tokens */}
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">Tokens de motion</h2>
          <p className="ds-section__desc">Duraciones y funciones de easing disponibles en el sistema.</p>
        </div>
        {/* Duraciones */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--brand)', marginBottom: 12 }}>
            Duraciones
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {TOKENS.filter(t => t.name.includes('duration')).map(t => (
              <div key={t.name} style={{
                display: 'grid', gridTemplateColumns: '220px 100px 1fr',
                alignItems: 'center', gap: 16,
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)', padding: '10px 16px',
              }}>
                <code className="ds-code" style={{ fontSize: 11 }}>{t.name}</code>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{
                    height: 8, borderRadius: 4, background: 'var(--brand)',
                    width: `${(parseInt(t.value) / 500) * 80 + 8}px`,
                    minWidth: 8,
                  }} />
                  <code style={{ fontSize: 12, fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--brand)' }}>
                    {t.value}
                  </code>
                </div>
                <span style={{ fontSize: 13, color: 'var(--text-3)' }}>{t.use}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Easings */}
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--brand)', marginBottom: 12 }}>
            Funciones de easing
          </div>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
            <table className="ds-token-table">
              <thead>
                <tr><th>Token</th><th>Valor</th><th>Uso</th></tr>
              </thead>
              <tbody>
                {TOKENS.filter(t => t.name.includes('ease')).map(t => (
                  <tr key={t.name}>
                    <td><code className="ds-code" style={{ fontSize: 11 }}>{t.name}</code></td>
                    <td><code style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--text-3)' }}>{t.value}</code></td>
                    <td style={{ fontSize: 12, color: 'var(--text-3)' }}>{t.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Easing visualization */}
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">Visualización de easings</h2>
          <p className="ds-section__desc">Representación esquemática de la curva de velocidad de cada easing.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
          {[
            { name: '--ease', label: 'Standard', desc: 'Comienza rápido, termina suave. Para la mayoría de transiciones UI.', color: 'var(--brand)', path: 'M 0 80 C 16 80 0 0 80 0' },
            { name: '--ease-in', label: 'Ease In', desc: 'Comienza lento, acelera al final. Para elementos que salen.', color: '#DC2626', path: 'M 0 80 C 32 80 80 0 80 0' },
            { name: '--ease-out', label: 'Ease Out', desc: 'Comienza rápido, desacelera. Para elementos que entran.', color: '#16A34A', path: 'M 0 80 C 0 80 48 0 80 0' },
            { name: '--ease-spring', label: 'Spring', desc: 'Overshoots ligeramente. Para acciones activas y feedback.', color: '#D97706', path: 'M 0 80 C 27 80 51 -10 80 0' },
          ].map(e => (
            <div key={e.name} style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)', padding: 16, display: 'flex', flexDirection: 'column', gap: 12,
            }}>
              <svg width="80" height="80" viewBox="0 0 80 80" style={{ overflow: 'visible' }}>
                <rect width="80" height="80" rx="4" fill="var(--surface-2)" />
                <path d={e.path} fill="none" stroke={e.color} strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="0" cy="80" r="4" fill={e.color} />
                <circle cx="80" cy="0" r="4" fill={e.color} />
              </svg>
              <div>
                <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 2 }}>{e.label}</div>
                <code style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--text-3)' }}>{e.name}</code>
                <div style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 6, lineHeight: 1.5 }}>{e.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation Patterns */}
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">Patrones de animación</h2>
          <p className="ds-section__desc">Los 6 patrones base del sistema. Cada componente usa uno o una combinación de estos.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {PATTERNS.map(p => (
            <div key={p.name} style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)', overflow: 'hidden',
            }}>
              <div style={{
                padding: '14px 20px', background: 'var(--surface-2)',
                borderBottom: '1px solid var(--border)',
                display: 'grid', gridTemplateColumns: '140px 1fr 1fr 1fr',
                gap: 16, alignItems: 'center',
              }}>
                <div style={{ fontWeight: 700, fontSize: 14 }}>{p.name}</div>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-3)', marginBottom: 2 }}>Propiedad</div>
                  <code style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--text-2)' }}>{p.property}</code>
                </div>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-3)', marginBottom: 2 }}>Duración</div>
                  <code style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--brand)' }}>{p.duration}</code>
                </div>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-3)', marginBottom: 2 }}>Easing</div>
                  <code style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--text-2)' }}>{p.easing}</code>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
                <div style={{ padding: '14px 20px', borderRight: '1px solid var(--border)' }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-3)', marginBottom: 6 }}>Uso</div>
                  <div style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.6 }}>{p.use}</div>
                </div>
                <pre style={{ margin: 0, padding: '14px 20px', fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--text-2)', lineHeight: 1.6, background: 'var(--surface-2)', overflowX: 'auto' }}>
                  {p.code}
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interaction map */}
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">Mapa de interacciones</h2>
          <p className="ds-section__desc">Referencia rápida: qué duración y easing usa cada interacción del producto.</p>
        </div>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
          <table className="ds-token-table">
            <thead>
              <tr>
                <th>Interacción</th>
                <th>Propiedad CSS</th>
                <th>Duración</th>
                <th>Easing</th>
              </tr>
            </thead>
            <tbody>
              {INTERACTION_MAP.map(item => (
                <tr key={item.interaction}>
                  <td style={{ fontWeight: 600, fontSize: 13 }}>{item.interaction}</td>
                  <td><code style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--text-3)' }}>{item.property}</code></td>
                  <td><code className="ds-code" style={{ fontSize: 11 }}>{item.duration}</code></td>
                  <td><code className="ds-code" style={{ fontSize: 11 }}>{item.easing}</code></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Accessibility */}
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">Accesibilidad (prefers-reduced-motion)</h2>
        </div>
        <div style={{
          background: '#FFF7ED', border: '1px solid #FED7AA',
          borderLeft: '4px solid #F97316',
          borderRadius: 'var(--radius-lg)', padding: '16px 20px', marginBottom: 20,
        }}>
          <div style={{ fontWeight: 700, fontSize: 13, color: '#C2410C', marginBottom: 6 }}>Obligatorio</div>
          <div style={{ fontSize: 13, color: '#7C2D12', lineHeight: 1.7 }}>
            Toda animación que no sea puramente funcional (comunicar estado, mostrar carga) debe estar
            envuelta en una media query que respete <code style={{ background: '#FED7AA', padding: '1px 5px', borderRadius: 3 }}>prefers-reduced-motion: reduce</code>.
            Las personas con vestibular disorders pueden sufrir mareos con movimiento excesivo en pantalla.
          </div>
        </div>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
          <div style={{ padding: '10px 16px', background: 'var(--surface-2)', borderBottom: '1px solid var(--border)', fontSize: 12, fontWeight: 600, color: 'var(--text-3)' }}>
            Patrón estándar — prefers-reduced-motion
          </div>
          <pre style={{ margin: 0, padding: '20px', fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--text-2)', lineHeight: 1.7 }}>
{`/* Animaciones estándar */
.component {
  transition: opacity var(--duration-normal) var(--ease-out),
              transform var(--duration-normal) var(--ease-out);
}

/* Reducir para usuarios sensibles al movimiento */
@media (prefers-reduced-motion: reduce) {
  .component {
    transition: opacity var(--duration-fast) linear;
    /* Eliminar transform: mantener solo feedback esencial (opacity) */
  }
}

/* Para animaciones en loop (shimmer, spin) */
@media (prefers-reduced-motion: reduce) {
  .skeleton,
  .spinner {
    animation: none;
    /* Reemplazar shimmer con fondo estático */
    background: var(--surface-2);
  }
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
                'Animar solo transform y opacity para máxima performance en GPU.',
                'Usar --ease-out para elementos que entran; --ease-in para los que salen.',
                'Respetar siempre prefers-reduced-motion con fallback estático o minimal.',
                'Combinar duración corta + spring para estados activos (selected, checked).',
                'Usar skeleton shimmer en lugar de spinner para bloques grandes de contenido.',
                'Mantener duraciones de hover ≤ 150ms para que la UI se sienta instantánea.',
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
                'No animar width, height, margin o top/left — son costosas para el layout engine.',
                'No usar duraciones > 500ms sin ser una animación de onboarding o celebración.',
                'No crear keyframes personalizados para transiciones simples — usar los patrones base.',
                'No poner animaciones en elementos fuera de pantalla (carga innecesaria).',
                'No usar --ease-spring en elementos que salen de pantalla — se siente incongruente.',
                'No omitir la media query prefers-reduced-motion en componentes con animación.',
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
