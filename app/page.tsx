import type { Metadata } from 'next';
import Link from 'next/link';
import { systemStats } from '@/lib/navigation';

export const metadata: Metadata = {
  title: 'Lorien Design System — Multitravel',
};

const SECTIONS = [
  {
    icon: '◈',
    title: 'Brand',
    description: 'Logo, colores de marca, tipografía y guías de identidad visual de Multitravel.',
    href: '/brand',
    count: '5 guías',
    status: 'draft' as const,
  },
  {
    icon: '◉',
    title: 'Foundations',
    description: 'Tokens de diseño: colores, tipografía, espaciado, radios, sombras y más.',
    href: '/foundations',
    count: '10 foundations',
    status: 'stable' as const,
  },
  {
    icon: '▣',
    title: 'Components',
    description: 'Biblioteca de componentes reutilizables con variantes, estados y código.',
    href: '/components',
    count: '5 componentes',
    status: 'stable' as const,
  },
  {
    icon: '◫',
    title: 'Patterns',
    description: 'Patrones de UI recurrentes: header, búsqueda, filtros, checkout y más.',
    href: '/patterns',
    count: '10 patrones',
    status: 'draft' as const,
  },
  {
    icon: '▤',
    title: 'Templates',
    description: 'Páginas completas de referencia: home, resultados, detalle, checkout.',
    href: '/templates',
    count: '7 templates',
    status: 'draft' as const,
  },
  {
    icon: '⊡',
    title: 'Resources',
    description: 'Tokens, snippets, nomenclaturas y herramientas para desarrollo.',
    href: '/resources',
    count: '4 recursos',
    status: 'draft' as const,
  },
];

const FEATURED_COMPONENTS = [
  { label: 'Button', href: '/components/actions/button', status: 'stable', desc: 'Acciones primarias y secundarias' },
  { label: 'Input', href: '/components/forms/input', status: 'stable', desc: 'Campos de texto y formularios' },
  { label: 'Tag', href: '/components/data-display/tag', status: 'stable', desc: 'Etiquetas de estado y categoría' },
  { label: 'Switch', href: '/components/forms/switch', status: 'stable', desc: 'Toggle on/off' },
  { label: 'Flight Card', href: '/components/data-display/flight-card', status: 'stable', desc: 'Resultado de vuelo' },
];

const FEATURED_FOUNDATIONS = [
  { label: 'Colors', href: '/foundations/colors', icon: '⬤', desc: '5 paletas · 100+ valores' },
  { label: 'Typography', href: '/foundations/typography', icon: 'Aa', desc: 'Nunito + Outfit · 6 escalas' },
  { label: 'Spacing', href: '/foundations/spacing', icon: '⟺', desc: 'Base 4 · 20 valores' },
  { label: 'Shadows', href: '/foundations/shadows', icon: '◻', desc: 'sm · blueLg · 2 sombras' },
];

const STATUS_LABELS: Record<string, string> = {
  stable: 'Stable', beta: 'Beta', draft: 'Draft', deprecated: 'Deprecated',
};

const CHANGELOG = [
  {
    version: '0.1.0',
    date: 'Marzo 2025',
    tag: 'Inicial',
    items: [
      'Estructura base del design system Lorien',
      'Componentes: Button, Input, Tag, Switch, FlightCard',
      'Tokens: colores, tipografía, espaciado, radios, sombras',
      'Code Connect con Figma configurado',
      'Sitio de documentación interna',
    ],
  },
];

export default function HomePage() {
  const stableCount = systemStats.stableComponents;
  const total = systemStats.totalComponents;
  const progress = Math.round((stableCount / 30) * 100); // target: 30 components

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section>
        <div style={{
          background: 'linear-gradient(135deg, var(--brand-dark) 0%, var(--brand) 100%)',
          borderRadius: 'var(--radius-xl)',
          padding: '48px 48px',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          marginBottom: 0,
        }}>
          {/* Background decoration */}
          <div style={{
            position: 'absolute', top: -40, right: -40,
            width: 240, height: 240,
            background: 'rgba(255,255,255,0.04)',
            borderRadius: '50%',
          }} />
          <div style={{
            position: 'absolute', bottom: -60, right: 60,
            width: 160, height: 160,
            background: 'rgba(255,255,255,0.03)',
            borderRadius: '50%',
          }} />

          <div style={{ position: 'relative', maxWidth: 580 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 'var(--radius-pill)',
              padding: '4px 12px',
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: 20,
            }}>
              <span>◆</span>
              <span>v{systemStats.version} · {systemStats.lastUpdated}</span>
            </div>

            <h1 style={{
              fontSize: 36,
              fontWeight: 800,
              letterSpacing: '-0.5px',
              lineHeight: 1.15,
              marginBottom: 16,
              color: 'white',
            }}>
              Lorien<br />Design System
            </h1>

            <p style={{
              fontSize: 16,
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.8)',
              marginBottom: 28,
              maxWidth: 460,
            }}>
              La fuente única de verdad del sistema de diseño de Multitravel.
              Foundations, componentes, patrones y templates para diseño y desarrollo.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/foundations" style={{
                background: 'white',
                color: 'var(--brand-dark)',
                padding: '10px 20px',
                borderRadius: 'var(--radius-md)',
                fontSize: 13,
                fontWeight: 700,
                textDecoration: 'none',
                transition: 'opacity 0.15s',
              }}>
                Ver Foundations →
              </Link>
              <Link href="/components" style={{
                background: 'rgba(255,255,255,0.12)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.25)',
                padding: '10px 20px',
                borderRadius: 'var(--radius-md)',
                fontSize: 13,
                fontWeight: 600,
                textDecoration: 'none',
              }}>
                Ver Componentes
              </Link>
            </div>

            {/* Stats row */}
            <div style={{
              display: 'flex', gap: 24, marginTop: 32,
              paddingTop: 24,
              borderTop: '1px solid rgba(255,255,255,0.15)',
              flexWrap: 'wrap',
            }}>
              {[
                { value: total, label: 'Componentes' },
                { value: 6, label: 'Foundations' },
                { value: '100+', label: 'Tokens CSS' },
                { value: '2', label: 'Figma Librerías' },
              ].map(stat => (
                <div key={stat.label}>
                  <div style={{ fontSize: 22, fontWeight: 800, color: 'white', lineHeight: 1 }}>{stat.value}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', marginTop: 3 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Acceso Rápido ─────────────────────────────────────────── */}
      <section>
        <div style={{ marginBottom: 20 }}>
          <h2 className="ds-h2">Explorar el sistema</h2>
          <p className="ds-body" style={{ marginTop: 6 }}>
            Navega por las secciones principales del design system.
          </p>
        </div>
        <div className="ds-section-grid">
          {SECTIONS.map(s => (
            <Link key={s.href} href={s.href} className="ds-section-card">
              <div className="ds-section-card__icon">{s.icon}</div>
              <div className="ds-section-card__title">{s.title}</div>
              <p className="ds-section-card__desc">{s.description}</p>
              <div className="ds-section-card__footer">
                <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                  <span className="ds-section-card__count">{s.count}</span>
                  <span className={`ds-badge ds-badge--${s.status}`} style={{ fontSize: 10 }}>
                    {STATUS_LABELS[s.status]}
                  </span>
                </div>
                <span className="ds-section-card__arrow">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Estado del sistema ────────────────────────────────────── */}
      <section>
        <div style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-xl)',
          padding: 28,
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20, gap: 16, flexWrap: 'wrap' }}>
            <div>
              <h2 className="ds-h2" style={{ marginBottom: 4 }}>Estado del sistema</h2>
              <p className="ds-body">Progreso general de construcción del design system.</p>
            </div>
            <Link href="/changelog" style={{
              fontSize: 12, color: 'var(--brand)', fontWeight: 600,
              textDecoration: 'none', flexShrink: 0,
            }}>
              Ver changelog →
            </Link>
          </div>

          {/* Status counters */}
          <div style={{ display: 'flex', gap: 16, marginBottom: 20, flexWrap: 'wrap' }}>
            {[
              { label: 'Stable', count: stableCount, cls: 'stable' },
              { label: 'Beta', count: systemStats.betaComponents, cls: 'beta' },
              { label: 'Draft', count: systemStats.draftComponents, cls: 'draft' },
            ].map(s => (
              <div key={s.label} style={{
                display: 'flex', alignItems: 'center', gap: 8,
                background: `var(--${s.cls}-bg)`,
                border: `1px solid var(--${s.cls}-border)`,
                borderRadius: 'var(--radius-md)',
                padding: '8px 14px',
              }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: `var(--${s.cls})`, display: 'inline-block' }} />
                <span style={{ fontSize: 20, fontWeight: 800, color: `var(--${s.cls}-text)`, lineHeight: 1 }}>{s.count}</span>
                <span style={{ fontSize: 12, color: `var(--${s.cls}-text)`, opacity: 0.8 }}>{s.label}</span>
              </div>
            ))}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8,
              background: 'var(--surface-2)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-md)',
              padding: '8px 14px',
            }}>
              <span style={{ fontSize: 20, fontWeight: 800, color: 'var(--text-2)', lineHeight: 1 }}>{total}</span>
              <span style={{ fontSize: 12, color: 'var(--text-3)' }}>Total</span>
            </div>
          </div>

          {/* Progress bar */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
              <span style={{ fontSize: 12, color: 'var(--text-3)' }}>Progreso hacia v1.0 ({total}/30 componentes)</span>
              <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--brand)' }}>{progress}%</span>
            </div>
            <div style={{
              height: 6, background: 'var(--surface-2)',
              borderRadius: 'var(--radius-pill)', overflow: 'hidden',
            }}>
              <div style={{
                height: '100%', width: `${progress}%`,
                background: 'linear-gradient(90deg, var(--brand-dark), var(--brand))',
                borderRadius: 'var(--radius-pill)',
                transition: 'width 0.6s ease',
              }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Foundations destacadas ────────────────────────────────── */}
      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <div>
            <h2 className="ds-h2">Foundations</h2>
            <p className="ds-body" style={{ marginTop: 4 }}>Tokens y decisiones de diseño base.</p>
          </div>
          <Link href="/foundations" style={{ fontSize: 12, color: 'var(--brand)', fontWeight: 600, textDecoration: 'none' }}>
            Ver todas →
          </Link>
        </div>
        <div className="ds-section-grid">
          {FEATURED_FOUNDATIONS.map(f => (
            <Link key={f.href} href={f.href} className="ds-section-card">
              <div className="ds-section-card__icon" style={{ fontSize: 15, fontWeight: 800, fontFamily: 'var(--font-mono)' }}>
                {f.icon}
              </div>
              <div className="ds-section-card__title">{f.label}</div>
              <p className="ds-section-card__desc">{f.desc}</p>
              <div className="ds-section-card__footer">
                <span className="ds-badge ds-badge--stable" style={{ fontSize: 10 }}>Stable</span>
                <span className="ds-section-card__arrow">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Componentes destacados ────────────────────────────────── */}
      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <div>
            <h2 className="ds-h2">Componentes</h2>
            <p className="ds-body" style={{ marginTop: 4 }}>Componentes base listos para usar.</p>
          </div>
          <Link href="/components" style={{ fontSize: 12, color: 'var(--brand)', fontWeight: 600, textDecoration: 'none' }}>
            Ver todos →
          </Link>
        </div>
        <div style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
        }}>
          {FEATURED_COMPONENTS.map((comp, i) => (
            <Link
              key={comp.href}
              href={comp.href}
              className="ds-comp-list-item"
              style={{
                borderBottom: i < FEATURED_COMPONENTS.length - 1 ? '1px solid var(--border)' : 'none',
                borderRadius: 0,
                margin: 0,
              }}
            >
              <div style={{
                width: 32, height: 32,
                background: 'var(--brand-light)',
                borderRadius: 'var(--radius-md)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 12, color: 'var(--brand)',
                fontWeight: 700,
                flexShrink: 0,
              }}>
                {comp.label[0]}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 13, color: 'var(--text)' }}>{comp.label}</div>
                <div style={{ fontSize: 12, color: 'var(--text-3)' }}>{comp.desc}</div>
              </div>
              <span className={`ds-badge ds-badge--${comp.status}`} style={{ fontSize: 10 }}>
                <span className="ds-badge__dot" />
                {STATUS_LABELS[comp.status]}
              </span>
              <span style={{ fontSize: 12, color: 'var(--text-4)' }}>→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Changelog ─────────────────────────────────────────────── */}
      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <div>
            <h2 className="ds-h2">Últimas actualizaciones</h2>
            <p className="ds-body" style={{ marginTop: 4 }}>Historial de cambios del sistema.</p>
          </div>
          <Link href="/changelog" style={{ fontSize: 12, color: 'var(--brand)', fontWeight: 600, textDecoration: 'none' }}>
            Ver changelog →
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {CHANGELOG.map(entry => (
            <div key={entry.version} style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-xl)',
              padding: 24,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  fontSize: 14,
                  color: 'var(--brand-dark)',
                  background: 'var(--brand-light)',
                  border: '1px solid var(--brand-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '3px 10px',
                }}>
                  v{entry.version}
                </span>
                <span className="ds-badge ds-badge--new">{entry.tag}</span>
                <span style={{ fontSize: 12, color: 'var(--text-4)' }}>{entry.date}</span>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {entry.items.map((item, i) => (
                  <li key={i} style={{ fontSize: 13, color: 'var(--text-2)', display: 'flex', gap: 10, lineHeight: 1.5 }}>
                    <span style={{ color: 'var(--brand)', flexShrink: 0 }}>+</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTAs por audiencia ────────────────────────────────────── */}
      <section>
        <h2 className="ds-h2" style={{ marginBottom: 20 }}>Accesos rápidos por rol</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {/* Para Diseño */}
          <div style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-xl)',
            padding: 24,
          }}>
            <div style={{
              width: 40, height: 40,
              background: 'var(--brand-light)',
              border: '1px solid var(--brand-border)',
              borderRadius: 'var(--radius-lg)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 18, marginBottom: 14,
            }}>
              ⬡
            </div>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>
              Para Diseño
            </h3>
            <p style={{ fontSize: 13, color: 'var(--text-3)', lineHeight: 1.6, marginBottom: 16 }}>
              Accede a los tokens de Figma, guías de Brand y patrones de UI.
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {[
                { label: 'Figma Library', href: 'https://www.figma.com/design/awAiQ74drBGZImHlXtIdPN/Lorien', external: true },
                { label: 'Brand Guidelines', href: '/brand' },
                { label: 'Foundations', href: '/foundations' },
                { label: 'Patterns', href: '/patterns' },
              ].map(item => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    style={{ fontSize: 13, color: 'var(--brand)', textDecoration: 'none', display: 'flex', gap: 8, alignItems: 'center' }}
                  >
                    <span style={{ opacity: 0.6 }}>›</span>
                    {item.label}
                    {item.external && <span style={{ fontSize: 10, opacity: 0.6 }}>↗</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Para Desarrollo */}
          <div style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-xl)',
            padding: 24,
          }}>
            <div style={{
              width: 40, height: 40,
              background: '#F0FDF4',
              border: '1px solid var(--stable-border)',
              borderRadius: 'var(--radius-lg)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 18, marginBottom: 14,
            }}>
              ⌨
            </div>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>
              Para Desarrollo
            </h3>
            <p style={{ fontSize: 13, color: 'var(--text-3)', lineHeight: 1.6, marginBottom: 16 }}>
              Tokens CSS, snippets de código y guías de implementación.
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {[
                { label: 'Tokens & Variables', href: '/resources/tokens' },
                { label: 'Componentes + Código', href: '/components' },
                { label: 'Snippets reutilizables', href: '/resources/snippets' },
                { label: 'Nomenclaturas', href: '/resources/nomenclature' },
              ].map(item => (
                <li key={item.label}>
                  <Link href={item.href} style={{ fontSize: 13, color: 'var(--stable-text)', textDecoration: 'none', display: 'flex', gap: 8, alignItems: 'center' }}>
                    <span style={{ opacity: 0.6 }}>›</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}
