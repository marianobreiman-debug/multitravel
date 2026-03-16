import type { Metadata } from 'next';
import PlaceholderPage from '@/components/ds/PlaceholderPage';

export const metadata: Metadata = { title: 'Mi Cuenta — Templates' };

export default function AccountTemplatePage() {
  return (
    <PlaceholderPage
      title="Mi Cuenta"
      description="Sección de usuario autenticado: mis reservas, mis alertas, datos personales y preferencias."
      section="Templates"
      status="draft"
      sections={[
        { icon: '⊞', title: 'Layout Mi Cuenta', description: 'Sidebar de navegación de cuenta + área de contenido.' },
        { icon: '◫', title: 'Mis Reservas', description: 'Lista de reservas activas, pasadas y canceladas.' },
        { icon: '⚠', title: 'Mis Alertas', description: 'Alertas de precio activas con notificación de cambios.' },
        { icon: '⊡', title: 'Datos Personales', description: 'Formulario de perfil + documento + preferencias.' },
        { icon: '◌', title: 'Estados Vacíos', description: 'Sin reservas, sin alertas — con CTA para comenzar.' },
      ]}
    />
  );
}
