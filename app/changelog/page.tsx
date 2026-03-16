import type { Metadata } from 'next';
import PageHeader from '@/components/ds/PageHeader';

export const metadata: Metadata = { title: 'Changelog' };

const ENTRIES = [
  {
    version: '0.1.0',
    date: 'Marzo 2025',
    tag: 'Lanzamiento inicial',
    tagType: 'new',
    sections: [
      {
        title: 'Sitio de documentación',
        items: [
          'Sitio interno del Design System (Next.js + TypeScript)',
          'Navegación completa: Brand, Foundations, Components, Patterns, Templates, Resources',
          'Sidebar persistente con búsqueda y estado activo',
          'Breadcrumb automático',
          'Sistema de badges de estado (Stable / Beta / Draft)',
        ],
      },
      {
        title: 'Foundations',
        items: [
          'Colors: paleta completa con 100+ tokens CSS (--blue-*, --red-*, --grey-*, etc.)',
          'Typography: Nunito (UI) + Outfit (Flight Cards), 9 niveles de escala',
          'Spacing: sistema de múltiplos de 4px',
          'Radius: 4 valores (tag 4px, input 12px, card 16px, pill 32px)',
          'Shadows: sm + blueLg',
          'Breakpoints: 6 puntos de quiebre (375px → 1440px)',
        ],
      },
      {
        title: 'Componentes',
        items: [
          'Button — variantes primary/secondary/ghost, todos los estados',
          'Input — label simple y doble, dropdown integrado',
          'Tag — variantes success/info/neutral/danger',
          'Switch — variantes blue/grey',
          'FlightCard — resultado de búsqueda de vuelo completo',
        ],
      },
      {
        title: 'Dev Tooling',
        items: [
          'Tokens TypeScript tipados (@lorien/tokens)',
          'CSS custom properties en styles/tokens.css',
          'Figma Code Connect configurado (.figmarc.json)',
          'Code Connect para Button, Input, Tag, Switch y FlightCard',
        ],
      },
    ],
  },
];

export default function ChangelogPage() {
  return (
    <>
      <PageHeader
        title="Changelog"
        description="Historial de cambios del sistema de diseño Lorien. Cada versión documenta qué se agregó, cambió o deprecó."
        status="stable"
        updatedAt="Marzo 2025"
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {ENTRIES.map(entry => (
          <div key={entry.version} style={{
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: 'var(--radius-xl)', overflow: 'hidden',
          }}>
            {/* Header */}
            <div style={{
              padding: '20px 28px',
              background: 'linear-gradient(135deg, var(--brand-dark) 0%, var(--brand) 100%)',
              display: 'flex', alignItems: 'center', gap: 14,
            }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: 18, color: 'white' }}>
                v{entry.version}
              </span>
              <span style={{
                background: 'rgba(255,255,255,0.2)', color: 'white',
                border: '1px solid rgba(255,255,255,0.3)',
                borderRadius: 'var(--radius-pill)', padding: '3px 10px',
                fontSize: 11, fontWeight: 600,
              }}>
                {entry.tag}
              </span>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', marginLeft: 'auto' }}>
                {entry.date}
              </span>
            </div>

            {/* Sections */}
            <div style={{ padding: '20px 28px', display: 'flex', flexDirection: 'column', gap: 24 }}>
              {entry.sections.map(section => (
                <div key={section.title}>
                  <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand)', marginBottom: 10 }}>
                    {section.title}
                  </div>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {section.items.map((item, i) => (
                      <li key={i} style={{ fontSize: 13, color: 'var(--text-2)', display: 'flex', gap: 10, lineHeight: 1.5 }}>
                        <span style={{ color: 'var(--brand)', flexShrink: 0, fontWeight: 700 }}>+</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Next */}
        <div style={{
          background: 'var(--surface)', border: '1px dashed var(--border-2)',
          borderRadius: 'var(--radius-xl)', padding: '24px 28px',
          display: 'flex', flexDirection: 'column', gap: 16,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: 18, color: 'var(--text-4)' }}>v0.2.0</span>
            <span className="ds-badge ds-badge--draft">Próximo</span>
          </div>
          <div style={{ fontSize: 13, color: 'var(--text-3)', lineHeight: 1.6 }}>
            <strong>Planificado:</strong> nuevos componentes (Alert, Tooltip, Modal),
            foundations completas (Borders, Grid, Motion),
            página de Colors en profundidad,
            primeros patrones documentados (Search Box, Result Cards).
          </div>
        </div>
      </div>
    </>
  );
}
