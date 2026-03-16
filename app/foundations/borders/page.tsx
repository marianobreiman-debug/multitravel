import type { Metadata } from 'next';
import PageHeader from '@/components/ds/PageHeader';

export const metadata: Metadata = { title: 'Borders — Foundations' };

const WIDTHS = [
  { token: '--border-width-0',  value: '0px',  css: 'border: none',            use: 'Sin borde (contenido embebido, áreas de foco con outline)' },
  { token: '--border-width-1',  value: '1px',  css: 'border-width: 1px',        use: 'Borde estándar. Cards, inputs, dividers, dropdowns' },
  { token: '--border-width-2',  value: '2px',  css: 'border-width: 2px',        use: 'Énfasis o foco. Input focused, selected states, errores' },
  { token: '--border-width-4',  value: '4px',  css: 'border-width: 4px',        use: 'Acento decorativo. Left-border en alertas y callouts' },
];

const STYLES = [
  { name: 'solid',   preview: 'solid',  use: 'Estilo por defecto. Delimitación clara de contenedores e inputs.' },
  { name: 'dashed',  preview: 'dashed', use: 'Estados vacíos, drop zones, áreas de carga de archivos, placeholders.' },
  { name: 'dotted',  preview: 'dotted', use: 'Uso esporádico. Separadores decorativos dentro de un panel.' },
  { name: 'none',    preview: 'none',   use: 'Botones ghost, imágenes, secciones completamente planas.' },
];

const COLOR_TOKENS = [
  {
    category: 'Bordes generales',
    tokens: [
      { token: '--border',         hex: '#E2E8F0', use: 'Borde estándar. Cards, contenedores, dividers sutiles.' },
      { token: '--border-2',       hex: '#CBD5E1', use: 'Borde con más énfasis. Separadores activos, hover en tablas.' },
    ],
  },
  {
    category: 'Bordes de marca',
    tokens: [
      { token: '--brand-border',   hex: '#BFDBFE', use: 'Borde de elementos de foco de marca. Input focused (brand).' },
      { token: '--brand',          hex: '#226FCB', use: 'Borde activo o seleccionado. Radio/checkbox checked, selected card.' },
    ],
  },
  {
    category: 'Bordes de estado',
    tokens: [
      { token: '--stable-border',  hex: '#BBF7D0', use: 'Borde de estado éxito / confirmación.' },
      { token: '--beta-border',    hex: '#FDE68A', use: 'Borde de estado advertencia.' },
      { token: '--deprecated-border', hex: '#FECDD3', use: 'Borde de estado error / peligro.' },
      { token: '--draft-border',   hex: '#E2E8F0', use: 'Borde de estado neutro / deshabilitado.' },
    ],
  },
];

const CONTEXTS = [
  {
    component: 'Card',
    width: '1px',
    style: 'solid',
    color: '--border',
    radius: '--radius-xl (16px)',
    notes: 'Borde sutil para separar la card del fondo. Siempre paired con sombra suave.',
  },
  {
    component: 'Input (default)',
    width: '1px',
    style: 'solid',
    color: '--border-2',
    radius: '--radius-lg (12px)',
    notes: 'Borde visible pero no agresivo.',
  },
  {
    component: 'Input (focused)',
    width: '2px',
    style: 'solid',
    color: '--brand',
    radius: '--radius-lg (12px)',
    notes: 'Doble grosor + color brand para indicar foco activo.',
  },
  {
    component: 'Input (error)',
    width: '2px',
    style: 'solid',
    color: '--deprecated-border / red-600',
    radius: '--radius-lg (12px)',
    notes: 'Rojo para estado de error.',
  },
  {
    component: 'Dropdown / Select',
    width: '1px',
    style: 'solid',
    color: '--border',
    radius: '--radius-lg (12px)',
    notes: 'Igual al input. Al abrir el menú, borde inferior flat.',
  },
  {
    component: 'Alert / Callout',
    width: '4px left / 1px resto',
    style: 'solid',
    color: 'Estado correspondiente',
    radius: '--radius-md (8px)',
    notes: 'Left border grueso como acento visual de estado.',
  },
  {
    component: 'Tag',
    width: '1px',
    style: 'solid',
    color: 'Estado (stable/beta/error)',
    radius: '--radius-sm (4px)',
    notes: 'Borde sutil del color del estado del tag.',
  },
  {
    component: 'Divider horizontal',
    width: '1px',
    style: 'solid',
    color: '--border',
    radius: '0',
    notes: 'Separador entre secciones o ítems de lista.',
  },
];

export default function BordersPage() {
  return (
    <>
      <PageHeader
        title="Borders"
        description="Grosores, estilos y colores de borde del sistema. Reglas de uso por componente y contexto para mantener consistencia visual."
        section="Foundations"
        status="stable"
        version="0.1"
        updatedAt="Marzo 2025"
      />

      {/* Intro */}
      <div className="ds-section">
        <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.7, maxWidth: 700 }}>
          Los bordes en Lorien cumplen tres funciones: <strong>delimitar</strong> contenedores,
          <strong> comunicar estado</strong> (foco, error, selección) y <strong>crear jerarquía</strong> visual.
          El sistema define solo 4 grosores, 4 estilos y un set acotado de tokens de color para mantener coherencia.
        </p>
      </div>

      {/* Border Widths */}
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">Grosores</h2>
          <p className="ds-section__desc">4 valores de grosor cubren el 100% de los casos de uso del sistema.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {WIDTHS.map(w => (
            <div key={w.token} style={{
              display: 'grid', gridTemplateColumns: '200px 60px 180px 1fr',
              alignItems: 'center', gap: 16,
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)', padding: '14px 20px',
            }}>
              <code className="ds-code" style={{ fontSize: 12 }}>{w.token}</code>
              <span style={{
                display: 'flex', alignItems: 'center', gap: 8,
                fontSize: 13, fontWeight: 600, fontFamily: 'var(--font-mono)',
              }}>
                <span style={{
                  display: 'inline-block', width: 32, height: parseInt(w.value) || 0,
                  background: 'var(--brand)', borderRadius: 1,
                  minHeight: parseInt(w.value) === 0 ? 0 : parseInt(w.value),
                  outline: parseInt(w.value) === 0 ? '1px dashed var(--border-2)' : 'none',
                }} />
                {w.value}
              </span>
              <code style={{ fontSize: 11, color: 'var(--text-3)', fontFamily: 'var(--font-mono)' }}>{w.css}</code>
              <span style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.5 }}>{w.use}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Border Styles */}
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">Estilos</h2>
          <p className="ds-section__desc">Solid es el estilo por defecto. Los demás tienen usos muy específicos.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
          {STYLES.map(s => (
            <div key={s.name} style={{
              background: 'var(--surface)', borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border)', padding: 20, display: 'flex', flexDirection: 'column', gap: 12,
            }}>
              {/* preview */}
              <div style={{
                height: 48, borderRadius: 'var(--radius-md)',
                border: s.name === 'none' ? '1px dashed var(--border-2)' : `2px ${s.preview} var(--brand)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: s.name === 'none' ? 'var(--surface-2)' : 'var(--brand-light)',
              }}>
                <span style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--text-3)', fontWeight: 600 }}>
                  border-style: {s.name}
                </span>
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 4 }}>{s.name}</div>
                <div style={{ fontSize: 13, color: 'var(--text-3)', lineHeight: 1.6 }}>{s.use}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Color tokens */}
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">Tokens de color para bordes</h2>
          <p className="ds-section__desc">
            Siempre usar tokens semánticos. Nunca hardcodear valores hex en propiedades de borde.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {COLOR_TOKENS.map(group => (
            <div key={group.category}>
              <div style={{
                fontSize: 11, fontWeight: 700, textTransform: 'uppercase',
                letterSpacing: '0.06em', color: 'var(--brand)', marginBottom: 10,
              }}>
                {group.category}
              </div>
              <div style={{
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)', overflow: 'hidden',
              }}>
                <table className="ds-token-table">
                  <thead>
                    <tr>
                      <th>Token</th>
                      <th>Color</th>
                      <th>Hex</th>
                      <th>Uso</th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.tokens.map(t => (
                      <tr key={t.token}>
                        <td><code className="ds-code" style={{ fontSize: 11 }}>{t.token}</code></td>
                        <td>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <span style={{
                              width: 20, height: 20, borderRadius: 4,
                              background: t.hex, border: '1px solid var(--border)',
                              flexShrink: 0,
                            }} />
                          </div>
                        </td>
                        <td>
                          <code style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--text-3)' }}>
                            {t.hex}
                          </code>
                        </td>
                        <td style={{ fontSize: 13, color: 'var(--text-2)' }}>{t.use}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Usage by component */}
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">Uso por componente</h2>
          <p className="ds-section__desc">Referencia rápida de qué grosor, estilo y color aplica en cada contexto.</p>
        </div>
        <div style={{
          background: 'var(--surface)', border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)', overflow: 'hidden',
        }}>
          <table className="ds-token-table">
            <thead>
              <tr>
                <th>Componente</th>
                <th>Grosor</th>
                <th>Estilo</th>
                <th>Color</th>
                <th>Radio</th>
                <th>Notas</th>
              </tr>
            </thead>
            <tbody>
              {CONTEXTS.map(c => (
                <tr key={c.component}>
                  <td style={{ fontWeight: 600, fontSize: 13 }}>{c.component}</td>
                  <td><code className="ds-code" style={{ fontSize: 11 }}>{c.width}</code></td>
                  <td><code className="ds-code" style={{ fontSize: 11 }}>{c.style}</code></td>
                  <td><code className="ds-code" style={{ fontSize: 11 }}>{c.color}</code></td>
                  <td style={{ fontSize: 11, color: 'var(--text-3)' }}>{c.radius}</td>
                  <td style={{ fontSize: 12, color: 'var(--text-3)', lineHeight: 1.5 }}>{c.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Combinaciones visuales */}
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">Combinaciones visuales</h2>
          <p className="ds-section__desc">Ejemplos de cómo se ven los bordes en contexto real.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {/* Input states */}
          {[
            { label: 'Default', border: '1px solid #CBD5E1', shadow: 'none', note: 'border-2' },
            { label: 'Focus', border: '2px solid #226FCB', shadow: '0 0 0 3px rgba(34,111,203,0.15)', note: 'brand + ring' },
            { label: 'Error', border: '2px solid #DC2626', shadow: '0 0 0 3px rgba(220,38,38,0.12)', note: 'red-600 + ring' },
          ].map(state => (
            <div key={state.label} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-3)' }}>
                Input — {state.label}
              </div>
              <div style={{
                height: 44, borderRadius: 12, border: state.border,
                boxShadow: state.shadow, background: 'var(--surface)',
                display: 'flex', alignItems: 'center', padding: '0 14px',
              }}>
                <span style={{ fontSize: 13, color: 'var(--text-3)' }}>Vuelo de origen</span>
              </div>
              <code style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--text-4)' }}>{state.note}</code>
            </div>
          ))}

          {/* Card types */}
          {[
            { label: 'Card estándar', border: '1px solid #E2E8F0', bg: '#FFFFFF', note: '--border' },
            { label: 'Card seleccionada', border: '2px solid #226FCB', bg: '#EFF6FF', note: '--brand' },
            { label: 'Drop zone', border: '2px dashed #CBD5E1', bg: '#F8FAFC', note: '--border-2 dashed' },
          ].map(card => (
            <div key={card.label} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-3)' }}>
                {card.label}
              </div>
              <div style={{
                height: 64, borderRadius: 16, border: card.border,
                background: card.bg, display: 'flex', alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span style={{ fontSize: 12, color: 'var(--text-3)' }}>Contenido</span>
              </div>
              <code style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--text-4)' }}>{card.note}</code>
            </div>
          ))}
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
                'Usar siempre tokens de color (--border, --border-2, --brand) en lugar de valores hex directos.',
                'Usar 2px solo para estados que requieren énfasis visual: foco, error, selección activa.',
                'Combinar border-width con border-radius del sistema. No mezclar con radii fuera de escala.',
                'Agregar box-shadow de anillo (ring) cuando el borde 2px no sea suficientemente visible.',
                'Usar border-style: dashed exclusivamente para drop zones y estados vacíos.',
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
                'No crear variantes de borde fuera del sistema (3px, border-color custom en hex).',
                'No usar border-color para comunicar información crítica sin apoyo de icono o texto (daltonismo).',
                'No usar 4px de grosor como borde de caja completa — solo como acento lateral (left border) en alertas.',
                'No aplicar bordes en elementos completamente planos donde el contexto no lo requiere.',
                'No mezclar border-radius del sistema con bordes fuera de escala.',
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

      {/* Code */}
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">Código</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {[
            {
              label: 'Input estándar',
              code: `.input {
  border: 1px solid var(--border-2);
  border-radius: var(--radius-lg);
  transition: border-color var(--duration) var(--ease),
              box-shadow var(--duration) var(--ease);
}

.input:focus {
  border: 2px solid var(--brand);
  box-shadow: 0 0 0 3px rgba(34, 111, 203, 0.15);
  outline: none;
}

.input--error {
  border: 2px solid var(--deprecated-border);
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.12);
}`,
            },
            {
              label: 'Alert con left-border',
              code: `.alert {
  border: 1px solid var(--stable-border);
  border-left: 4px solid var(--stable);
  border-radius: var(--radius-md);
  background: var(--stable-bg);
  padding: 12px 16px;
}`,
            },
            {
              label: 'Drop zone / estado vacío',
              code: `.drop-zone {
  border: 2px dashed var(--border-2);
  border-radius: var(--radius-xl);
  background: var(--surface-2);
  padding: 32px;
  transition: border-color var(--duration) var(--ease),
              background var(--duration) var(--ease);
}

.drop-zone:hover,
.drop-zone--active {
  border-color: var(--brand-border);
  background: var(--brand-light);
}`,
            },
          ].map(ex => (
            <div key={ex.label} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              <div style={{ padding: '10px 16px', background: 'var(--surface-2)', borderBottom: '1px solid var(--border)', fontSize: 12, fontWeight: 600, color: 'var(--text-3)' }}>
                {ex.label}
              </div>
              <pre style={{ margin: 0, padding: '16px', fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--text-2)', lineHeight: 1.7, overflowX: 'auto' }}>
                {ex.code}
              </pre>
            </div>
          ))}
        </div>
      </div>

      {/* Tokens summary */}
      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">Resumen de tokens</h2>
        </div>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
          <table className="ds-token-table">
            <thead>
              <tr><th>Token</th><th>Valor</th><th>Categoria</th></tr>
            </thead>
            <tbody>
              {[
                { token: '--border',          val: '#E2E8F0',    cat: 'General' },
                { token: '--border-2',        val: '#CBD5E1',    cat: 'General (énfasis)' },
                { token: '--brand-border',    val: '#BFDBFE',    cat: 'Marca' },
                { token: '--stable-border',   val: '#BBF7D0',    cat: 'Estado: éxito' },
                { token: '--beta-border',     val: '#FDE68A',    cat: 'Estado: advertencia' },
                { token: '--deprecated-border', val: '#FECDD3',  cat: 'Estado: error' },
                { token: '--draft-border',    val: '#E2E8F0',    cat: 'Estado: neutro' },
                { token: '--duration',        val: '150ms',      cat: 'Transición (border-color)' },
                { token: '--ease',            val: 'cubic-bezier(0.4, 0, 0.2, 1)', cat: 'Transición (easing)' },
              ].map(t => (
                <tr key={t.token}>
                  <td><code className="ds-code" style={{ fontSize: 11 }}>{t.token}</code></td>
                  <td><code style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--text-3)' }}>{t.val}</code></td>
                  <td style={{ fontSize: 12, color: 'var(--text-3)' }}>{t.cat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
