import type { Metadata } from 'next';
import PlaceholderPage from '@/components/ds/PlaceholderPage';

export const metadata: Metadata = { title: 'Filters — Patterns' };

export default function FiltersPage() {
  return (
    <PlaceholderPage
      title="Filters"
      description="Panel de filtros para acotar resultados de búsqueda. Sidebar en desktop, drawer en mobile."
      section="Patterns"
      status="draft"
      sections={[
        { icon: '⊡', title: 'Tipos de filtro', description: 'Checkbox, range slider, switch, select para distintos atributos.' },
        { icon: '◫', title: 'Sidebar de filtros', description: 'Layout en desktop: sidebar fijo o colapsable a la izquierda.' },
        { icon: '▷', title: 'Drawer de filtros', description: 'En mobile: drawer completo con apply/reset.' },
        { icon: '◳', title: 'Filtros activos', description: 'Tags de filtros aplicados con opción de remover.' },
        { icon: '⊞', title: 'Reset y Apply', description: 'Comportamiento de "limpiar todo" y "aplicar filtros".' },
      ]}
    />
  );
}
