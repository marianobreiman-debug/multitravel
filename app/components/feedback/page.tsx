import type { Metadata } from 'next';
import PlaceholderPage from '@/components/ds/PlaceholderPage';

export const metadata: Metadata = { title: 'Feedback — Components' };

export default function FeedbackPage() {
  return (
    <PlaceholderPage
      title="Feedback"
      description="Componentes de retroalimentación: alertas, toasts, skeletons, progress bars y spinners."
      section="Components"
      status="draft"
      sections={[
        { icon: '⚠', title: 'Alert', description: 'Mensajes de estado: info, success, warning, error.' },
        { icon: '◳', title: 'Toast', description: 'Notificaciones flotantes temporales.' },
        { icon: '▭', title: 'Skeleton', description: 'Placeholder animado durante la carga de contenido.' },
        { icon: '▬', title: 'Progress', description: 'Barra de progreso lineal o circular.' },
        { icon: '⟳', title: 'Spinner', description: 'Indicador de carga circular animado.' },
      ]}
    />
  );
}
