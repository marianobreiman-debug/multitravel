import type { Metadata } from 'next';
import PageHeader from '@/components/ds/PageHeader';
import CodeBlock from '@/components/ds/CodeBlock';

export const metadata: Metadata = { title: 'Snippets — Resources' };

export default function SnippetsPage() {
  return (
    <>
      <PageHeader
        title="Snippets"
        description="Fragmentos de código reutilizables para patrones comunes del sistema."
        section="Resources"
        status="draft"
        updatedAt="Marzo 2025"
      />

      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">Importar tokens</h2>
        </div>
        <CodeBlock code={`// En app/globals.css o layout.tsx
import '@/styles/tokens.css';`} language="typescript" />
      </div>

      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">Nuevo componente (template)</h2>
        </div>
        <CodeBlock
          filename="MyComponent.tsx"
          code={`import styles from './MyComponent.module.css';

interface MyComponentProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export default function MyComponent({
  variant = 'primary',
  children,
}: MyComponentProps) {
  return (
    <div className={\`\${styles.root} \${styles[variant]}\`}>
      {children}
    </div>
  );
}`}
          language="tsx"
        />
      </div>

      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">CSS Module template</h2>
        </div>
        <CodeBlock
          filename="MyComponent.module.css"
          code={`.root {
  /* Usar tokens del sistema */
  border-radius: var(--radius-card);
  padding: var(--space-4) var(--space-5);
  font-family: var(--font-sans);
  font-size: 14px;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.primary {
  background: var(--blue-600);
  color: var(--grey-white);
}

.primary:hover {
  background: var(--blue-800);
}`}
          language="css"
        />
      </div>

      <div className="ds-section">
        <div className="ds-section__header">
          <h2 className="ds-section__title">Status badge</h2>
          <p className="ds-section__desc">Badge de estado semántico para usar en interfaces.</p>
        </div>
        <CodeBlock
          code={`// Usando clases globales del sistema
<span className="ds-badge ds-badge--stable">
  <span className="ds-badge__dot" />
  Stable
</span>

// Variantes disponibles:
// ds-badge--stable | ds-badge--beta | ds-badge--draft
// ds-badge--deprecated | ds-badge--new | ds-badge--version`}
          language="tsx"
        />
      </div>

      <div className="ds-info-box ds-info-box--placeholder" style={{ marginTop: 16 }}>
        <span className="ds-info-box__icon">◷</span>
        <div>Más snippets se agregarán a medida que los patrones se estabilicen.</div>
      </div>
    </>
  );
}
