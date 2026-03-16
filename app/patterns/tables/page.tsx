import type { Metadata } from 'next';
import PlaceholderPage from '@/components/ds/PlaceholderPage';

export const metadata: Metadata = { title: 'Tables & Lists — Patterns' };

export default function TablesPage() {
  return (
    <PlaceholderPage
      title="Tables & Lists"
      description="Patrones para mostrar datos tabulares y listados estructurados: mis reservas, historial, tarifas comparativas."
      section="Patterns"
      status="draft"
      sections={[
        { icon: '⊠', title: 'Tabla de Reservas', description: 'Listado de viajes: columnas, estados, acciones por fila.' },
        { icon: '◫', title: 'Lista de Ítems', description: 'Listado vertical de elementos con acciones (editar, eliminar).' },
        { icon: '⊞', title: 'Tabla Comparativa', description: 'Comparación de tarifas: columnas de criterio con checkmarks.' },
        { icon: '↔', title: 'Responsive', description: 'Tablas en mobile: scroll horizontal, o conversión a cards apiladas.' },
        { icon: '◳', title: 'Estados de Tabla', description: 'Loading (skeleton), vacío, error, con datos.' },
      ]}
    />
  );
}
