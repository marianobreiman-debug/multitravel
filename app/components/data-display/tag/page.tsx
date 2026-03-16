import type { Metadata } from 'next';
import ComponentPage from '@/components/ds/ComponentPage';

export const metadata: Metadata = { title: 'Tag — Data Display' };

const CODE = `import { Tag } from '@lorien/components';

// Variantes semánticas
<Tag variant="success">Disponible</Tag>
<Tag variant="info">Informativo</Tag>
<Tag variant="neutral">Neutral</Tag>
<Tag variant="danger">Cancelado</Tag>

// Con ícono
<Tag variant="success" icon={<CheckIcon />}>
  Confirmado
</Tag>`;

export default function TagPage() {
  return (
    <ComponentPage
      title="Tag"
      description="Etiqueta semántica para comunicar estado, categoría o información adicional. Cuatro variantes de color con significado semántico definido."
      section="Components / Data Display"
      status="stable"
      version="0.1"
      updatedAt="Marzo 2025"
      figmaNode="2863:31392"
      whenToUse={[
        'Para indicar el estado de un elemento: disponible, cancelado, pendiente.',
        'Para categorizar contenido: tipo de vuelo, clase de servicio.',
        'Para mostrar información adicional compacta en tarjetas y listas.',
      ]}
      whenNotToUse={[
        'Para acciones — usar Button.',
        'Para información extensa — usar Alert o Badge con texto.',
        'Como sustituto de un label de formulario.',
      ]}
      variants={
        <div className="ds-preview-canvas" style={{ gap: 10 }}>
          {[
            { label: 'Success', bg: '#F0FDF4', color: '#15803D', border: '#BBF7D0' },
            { label: 'Info', bg: '#EFF6FF', color: '#1E4A8A', border: '#BFDBFE' },
            { label: 'Neutral', bg: '#F8FAFC', color: '#475569', border: '#E2E8F0' },
            { label: 'Danger', bg: '#FFF1F2', color: '#BE123C', border: '#FECDD3' },
          ].map(v => (
            <div key={v.label} style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center' }}>
              <div style={{
                background: v.bg, color: v.color,
                border: `1px solid ${v.border}`,
                borderRadius: 4, padding: '4px 8px',
                fontSize: 12, fontWeight: 600,
                display: 'flex', gap: 4, alignItems: 'center',
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: v.color, display: 'inline-block' }} />
                {v.label}
              </div>
              <span style={{ fontSize: 10, color: 'var(--text-4)' }}>{v.label.toLowerCase()}</span>
            </div>
          ))}
        </div>
      }
      dos={[
        { label: 'Usar el color semántico correcto', description: 'Success = positivo/disponible, Danger = negativo/cancelado, Info = informativo, Neutral = sin valoración.' },
      ]}
      donts={[
        { label: 'No usar tags solo por color', description: 'Cada variante tiene un significado semántico. No usar Danger (rojo) para algo que no es negativo.' },
      ]}
      accessibility={[
        'Si el tag comunica estado, incluir el texto del estado en el label o usar aria-label.',
        'No depender solo del color para comunicar el estado — incluir texto descriptivo.',
      ]}
      code={CODE}
      tokens={[
        { name: '--success-100', value: '#defade', description: 'Fondo tag success' },
        { name: '--success-600', value: '#23a423', description: 'Color texto/dot tag success' },
        { name: '--red-100', value: '#fde6eb', description: 'Fondo tag danger' },
        { name: '--red-600', value: '#ef0539', description: 'Color texto/dot tag danger' },
        { name: '--radius-tag', value: '4px', description: 'Radio del tag' },
      ]}
      notes={[
        'Componente en /components/Tag/Tag.tsx',
        'Figma Code Connect en node 2863:31392',
      ]}
    />
  );
}
