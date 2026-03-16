import type { Metadata } from 'next';
import PlaceholderPage from '@/components/ds/PlaceholderPage';

export const metadata: Metadata = { title: 'Search Box — Patterns' };

export default function SearchPatternPage() {
  return (
    <PlaceholderPage
      title="Search Box"
      description="Patrón de caja de búsqueda principal para vuelos, hoteles, paquetes o traslados. El componente más crítico del flujo de conversión."
      section="Patterns"
      status="draft"
      note="Este patrón combina múltiples inputs (origen, destino, fechas, pasajeros), tabs de vertical, y el botón CTA principal de búsqueda."
      sections={[
        { icon: '⊡', title: 'Anatomía', description: 'Tabs de vertical + campos de origen/destino + selector de fechas + pasajeros + botón buscar.' },
        { icon: '◫', title: 'Variantes por Vertical', description: 'Search Box para vuelos, hoteles, autos, paquetes. Campos distintos por caso.' },
        { icon: '↔', title: 'Comportamiento Responsive', description: 'Versión desktop (horizontal) vs mobile (vertical apilado).' },
        { icon: '◉', title: 'Estados del Formulario', description: 'Vacío, con selección parcial, válido listo para buscar, con error.' },
        { icon: '⊞', title: 'Integración de Componentes', description: 'Input (label doble), DatePicker, Dropdown de pasajeros, Button primary.' },
        { icon: '♿', title: 'Accesibilidad', description: 'Orden de tabulación, focus management, anuncios de screen reader.' },
      ]}
    />
  );
}
