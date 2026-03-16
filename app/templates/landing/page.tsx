import type { Metadata } from 'next';
import PlaceholderPage from '@/components/ds/PlaceholderPage';

export const metadata: Metadata = { title: 'Landing de Contenido — Templates' };

export default function LandingTemplatePage() {
  return (
    <PlaceholderPage title="Landing de Contenido" description="Página editorial para guías de destino, artículos y contenido de inspiración de viaje." section="Templates" status="draft" sections={[{ icon: '◈', title: 'Hero Editorial', description: 'Imagen full-width con headline y subtítulo.' }, { icon: '≡', title: 'Cuerpo de Artículo', description: 'Tipografía editorial, imágenes inline, blockquotes.' }, { icon: '◫', title: 'Módulos de CTA', description: 'Bloques de conversión insertados en el flujo del artículo.' }, { icon: '⊡', title: 'Contenido Relacionado', description: 'Grid de artículos o destinos relacionados.' }]} />
  );
}
