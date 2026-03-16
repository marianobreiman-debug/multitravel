import type { Metadata } from 'next';
import PlaceholderPage from '@/components/ds/PlaceholderPage';

export const metadata: Metadata = { title: 'Detalle de Producto — Templates' };

export default function ProductDetailTemplatePage() {
  return (
    <PlaceholderPage title="Detalle de Producto" description="Página de detalle de vuelo, hotel o paquete con información completa y CTA de reserva." section="Templates" status="draft" sections={[{ icon: '◉', title: 'Header de Producto', description: 'Nombre, rating, galería de imágenes, precio y CTA.' }, { icon: '≡', title: 'Tabs de Información', description: 'Descripción, itinerario, tarifas, política de cancelación.' }, { icon: '◫', title: 'Panel de Reserva', description: 'Sticky sidebar con precio, fechas seleccionadas y CTA.' }, { icon: '⊡', title: 'Extras y Servicios', description: 'Add-ons opcionales: equipaje, asiento, seguro.' }]} />
  );
}
