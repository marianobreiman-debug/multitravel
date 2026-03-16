import type { Metadata } from 'next';
import PlaceholderPage from '@/components/ds/PlaceholderPage';

export const metadata: Metadata = { title: 'Navigation — Components' };

export default function NavigationPage() {
  return (
    <PlaceholderPage
      title="Navigation"
      description="Componentes de navegación: tabs, breadcrumb, pagination y stepper para flujos multi-paso."
      section="Components"
      status="draft"
      sections={[
        { icon: '⊡', title: 'Tabs', description: 'Pestañas para navegar entre vistas relacionadas.' },
        { icon: '›', title: 'Breadcrumb', description: 'Ruta de navegación contextual.' },
        { icon: '‹›', title: 'Pagination', description: 'Navegación entre páginas de resultados.' },
        { icon: '①②③', title: 'Stepper', description: 'Indicador de pasos en flujos de checkout o registro.' },
      ]}
    />
  );
}
