import type { Metadata } from 'next';
import PlaceholderPage from '@/components/ds/PlaceholderPage';

export const metadata: Metadata = { title: 'Empty States — Patterns' };

export default function EmptyStatesPage() {
  return (
    <PlaceholderPage
      title="Empty States"
      description="Diseño de estados vacíos: sin resultados, error, sin datos de usuario, estado inicial de sección."
      section="Patterns"
      status="draft"
      sections={[
        { icon: '◌', title: 'Sin Resultados', description: 'Búsqueda sin resultados con sugerencias de acción.' },
        { icon: '⚠', title: 'Error de Carga', description: 'Cuando el contenido no pudo cargarse. Opción de reintentar.' },
        { icon: '⊡', title: 'Sección Vacía', description: 'Mi cuenta, mis reservas o alertas sin datos aún.' },
        { icon: '◈', title: 'Primeros Pasos', description: 'Estado inicial que guía al usuario a comenzar a usar la funcionalidad.' },
        { icon: '◉', title: 'Anatomía', description: 'Ícono + título + descripción + CTA primario. Estructura estándar.' },
      ]}
    />
  );
}
