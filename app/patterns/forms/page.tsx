import type { Metadata } from 'next';
import PlaceholderPage from '@/components/ds/PlaceholderPage';

export const metadata: Metadata = { title: 'Forms — Patterns' };

export default function FormsPatternPage() {
  return (
    <PlaceholderPage
      title="Forms"
      description="Patrones de formulario para checkout: datos de pasajeros, documentos, contacto y preferencias de viaje."
      section="Patterns"
      status="draft"
      sections={[
        { icon: '⊡', title: 'Datos de Pasajero', description: 'Formulario completo: nombre, documento, fecha de nacimiento, nationality.' },
        { icon: '⊞', title: 'Datos de Contacto', description: 'Email, teléfono y preferencias de comunicación.' },
        { icon: '◉', title: 'Validación en Tiempo Real', description: 'Cuándo y cómo mostrar errores: on blur vs on submit.' },
        { icon: '◫', title: 'Multi-pasajero', description: 'Patrón para repetir el formulario por cada pasajero.' },
        { icon: '⊠', title: 'Resumen de Datos', description: 'Vista de resumen antes de confirmar.' },
      ]}
    />
  );
}
