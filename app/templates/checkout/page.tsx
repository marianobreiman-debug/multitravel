import type { Metadata } from 'next';
import PlaceholderPage from '@/components/ds/PlaceholderPage';

export const metadata: Metadata = { title: 'Checkout — Templates' };

export default function CheckoutTemplatePage() {
  return (
    <PlaceholderPage
      title="Checkout"
      description="Flujo completo de reserva: selección → datos de pasajeros → pago → confirmación."
      section="Templates"
      status="draft"
      sections={[
        { icon: '①②③', title: 'Paso 1: Revisión', description: 'Resumen del vuelo seleccionado + extras disponibles.' },
        { icon: '⊡', title: 'Paso 2: Datos', description: 'Formulario de pasajeros + contacto + preferencias.' },
        { icon: '◉', title: 'Paso 3: Pago', description: 'Métodos de pago + formulario de tarjeta + cuotas.' },
        { icon: '✓', title: 'Paso 4: Confirmación', description: 'Thank you page con booking reference y próximos pasos.' },
        { icon: '◫', title: 'Resumen Sticky', description: 'Panel derecho fijo con detalle de precio durante todo el checkout.' },
      ]}
    />
  );
}
