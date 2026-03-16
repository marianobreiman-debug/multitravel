import type { Metadata } from 'next';
import PlaceholderPage from '@/components/ds/PlaceholderPage';

export const metadata: Metadata = { title: 'Thank You Page — Templates' };

export default function ThankYouTemplatePage() {
  return (
    <PlaceholderPage title="Thank You Page" description="Página de confirmación exitosa de reserva con resumen, booking reference y próximos pasos." section="Templates" status="draft" sections={[{ icon: '✓', title: 'Confirmación Visual', description: 'Ícono de éxito + número de reserva + mensaje de confirmación.' }, { icon: '◫', title: 'Resumen de Reserva', description: 'Detalle completo del viaje confirmado.' }, { icon: '→', title: 'Próximos Pasos', description: 'Check-in online, descarga de itinerario, agregar al calendario.' }, { icon: '⭐', title: 'Upsell Post-Compra', description: 'Sugerencias de hoteles, seguros u otros servicios.' }]} />
  );
}
