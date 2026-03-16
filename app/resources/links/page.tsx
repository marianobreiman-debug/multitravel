import type { Metadata } from 'next';
import PageHeader from '@/components/ds/PageHeader';

export const metadata: Metadata = { title: 'Links & Herramientas — Resources' };

const LINKS = [
  {
    category: 'Diseño',
    items: [
      { title: 'Figma — Lorien Design System', url: 'https://www.figma.com/design/awAiQ74drBGZImHlXtIdPN/Lorien', desc: 'Librería de componentes y tokens en Figma' },
      { title: 'Figma Variables', url: 'https://www.figma.com/design/awAiQ74drBGZImHlXtIdPN/Lorien?node-id=5915-54298', desc: 'Variables de color, tipografía y espaciado' },
    ],
  },
  {
    category: 'Desarrollo',
    items: [
      { title: 'Repositorio', url: '#', desc: 'Código fuente del design system (próximamente)' },
      { title: 'Storybook', url: '#', desc: 'Catálogo interactivo de componentes (próximamente)' },
      { title: 'npm package', url: '#', desc: '@lorien/components (próximamente)' },
    ],
  },
  {
    category: 'Documentación',
    items: [
      { title: 'Figma Code Connect', url: 'https://www.figma.com/community/plugin/1402785006537199534', desc: 'Plugin para conectar código con Figma' },
      { title: 'Next.js Docs', url: 'https://nextjs.org/docs', desc: 'Documentación oficial de Next.js' },
    ],
  },
];

export default function LinksPage() {
  return (
    <>
      <PageHeader
        title="Links & Herramientas"
        description="Acceso centralizado a todas las herramientas, repositorios y recursos del equipo."
        section="Resources"
        status="draft"
        updatedAt="Marzo 2025"
      />
      {LINKS.map(group => (
        <div key={group.category} className="ds-section">
          <div className="ds-section__header">
            <h2 className="ds-section__title">{group.category}</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {group.items.map(item => (
              <a
                key={item.title}
                href={item.url}
                target={item.url.startsWith('http') ? '_blank' : undefined}
                rel={item.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'flex', alignItems: 'center', gap: 14, padding: '14px 18px',
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)', textDecoration: 'none', color: 'inherit',
                  transition: 'border-color 0.15s',
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 13, color: item.url === '#' ? 'var(--text-3)' : 'var(--text)', marginBottom: 2 }}>
                    {item.title}
                    {item.url.startsWith('http') && <span style={{ marginLeft: 4, fontSize: 10, color: 'var(--text-4)' }}>↗</span>}
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--text-4)' }}>{item.desc}</div>
                </div>
                {item.url === '#' && <span className="ds-badge ds-badge--draft" style={{ fontSize: 10 }}>Próximamente</span>}
              </a>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
