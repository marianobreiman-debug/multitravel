import type { Metadata } from 'next';
import PlaceholderPage from '@/components/ds/PlaceholderPage';

export const metadata: Metadata = { title: 'Checkout — Patterns' };

export default function CheckoutPatternPage() {
  return (
    <PlaceholderPage
      title="Checkout"
      description="Flujo completo de reserva y pago: stepper de pasos, resumen de compra, datos, pago y confirmación."
      section="Patterns"
      status="draft"
      sections={[
        { icon: '①②③', title: 'Stepper de pasos', description: 'Indicador visual del paso actual: Selección → Datos → Pago → Confirmación.' },
        { icon: '◫', title: 'Resumen de Compra', description: 'Panel lateral sticky con detalle de vuelo, precio y desglose de tarifas.' },
        { icon: '⊡', title: 'Datos de Pasajeros', description: 'Formulario de datos personales y documentos.' },
        { icon: '◉', title: 'Métodos de Pago', description: 'Tarjeta, cuotas, medios locales. Selección y formulario.' },
        { icon: '✓', title: 'Confirmación', description: 'Thank you page con resumen completo y próximos pasos.' },
        { icon: '↔', title: 'Responsive', description: 'Stepper horizontal (desktop) vs vertical/tabs (mobile).' },
      ]}
    />
  );
}
