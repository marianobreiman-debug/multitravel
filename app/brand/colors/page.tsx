import type { Metadata } from 'next';
import PlaceholderPage from '@/components/ds/PlaceholderPage';

export const metadata: Metadata = { title: 'Colores de Marca — Brand' };

export default function BrandColorsPage() {
  return (
    <PlaceholderPage
      title="Colores de Marca"
      description="Paleta cromática de Multitravel, combinaciones permitidas y aplicaciones sobre distintos fondos."
      section="Brand"
      status="draft"
      sections={[
        { icon: '⬤', title: 'Paleta Principal', description: 'Blue Usafa (#0D4E88), Blue Normal (#226FCB) y Red (#EF0539).' },
        { icon: '◌', title: 'Paleta de Apoyo', description: 'Grises, whites y colores secundarios para interfaces.' },
        { icon: '⊞', title: 'Combinaciones Aprobadas', description: 'Combinaciones de color permitidas para fondo + texto.' },
        { icon: '◻', title: 'Sobre Fondo Claro', description: 'Aplicación del color de marca sobre fondos blancos y grises.' },
        { icon: '⬛', title: 'Sobre Fondo Oscuro', description: 'Versiones en negativo para fondos azules y oscuros.' },
        { icon: '◈', title: 'Sobre Fotografía', description: 'Aplicación con overlay sobre imágenes fotográficas.' },
      ]}
    />
  );
}
