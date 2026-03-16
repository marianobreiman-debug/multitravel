import type { Metadata } from 'next';
import PlaceholderPage from '@/components/ds/PlaceholderPage';

export const metadata: Metadata = { title: 'Result Cards — Patterns' };

export default function ResultCardsPage() {
  return (
    <PlaceholderPage
      title="Result Cards"
      description="Patrón de listado de resultados de búsqueda. Grid o lista de tarjetas con ordenamiento, filtros y comparación."
      section="Patterns"
      status="draft"
      sections={[
        { icon: '◫', title: 'Layout de resultados', description: 'Lista vertical vs grilla. Cuándo usar cada modo.' },
        { icon: '⊡', title: 'Ordenamiento', description: 'Barra de sort: precio, duración, mejor valorado.' },
        { icon: '▣', title: 'Card de resultado', description: 'Anatomía completa de la Flight Card en contexto de lista.' },
        { icon: '◳', title: 'Loading state', description: 'Skeleton loader durante la carga de resultados.' },
        { icon: '◌', title: 'Sin resultados', description: 'Estado vacío con sugerencias alternativas.' },
        { icon: '↔', title: 'Responsive', description: 'Adaptación a mobile: lista apilada, filtros en drawer.' },
      ]}
    />
  );
}
