import type { Metadata } from 'next';
import PlaceholderPage from '@/components/ds/PlaceholderPage';

export const metadata: Metadata = { title: 'Layout — Components' };

export default function LayoutPage() {
  return (
    <PlaceholderPage
      title="Layout"
      description="Componentes estructurales: container, divider, stack y grid para organizar páginas y secciones."
      section="Components"
      status="draft"
      sections={[
        { icon: '⊞', title: 'Container', description: 'Contenedor de ancho máximo con márgenes responsivos.' },
        { icon: '─', title: 'Divider', description: 'Separador horizontal o vertical entre secciones.' },
        { icon: '⬡', title: 'Stack', description: 'Layout flexible para alinear elementos en línea o columna.' },
        { icon: '⊡', title: 'Grid', description: 'Sistema de grilla CSS para layouts complejos.' },
      ]}
    />
  );
}
