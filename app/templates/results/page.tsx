import type { Metadata } from 'next';
import PlaceholderPage from '@/components/ds/PlaceholderPage';

export const metadata: Metadata = { title: 'Resultados — Templates' };

export default function ResultsTemplatePage() {
  return (
    <PlaceholderPage
      title="Resultados"
      description="Página de resultados de búsqueda con sidebar de filtros, barra de ordenamiento y lista de tarjetas."
      section="Templates"
      status="draft"
      sections={[
        { icon: '⊡', title: 'Header de Resultados', description: 'Resumen de búsqueda + botón de editar + conteo de resultados.' },
        { icon: '⊞', title: 'Layout Filtros + Cards', description: 'Sidebar de filtros (desktop) + grilla de result cards.' },
        { icon: '⊠', title: 'Barra de Ordenamiento', description: 'Selector de orden: precio, duración, popularidad.' },
        { icon: '◳', title: 'Estados de la página', description: 'Cargando, con resultados, sin resultados, error.' },
        { icon: '↔', title: 'Versión Mobile', description: 'Filtros en drawer, lista full-width, bottom nav con filtro activo.' },
      ]}
    />
  );
}
