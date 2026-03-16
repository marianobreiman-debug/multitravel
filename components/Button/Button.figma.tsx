/**
 * Figma Code Connect — Button
 *
 * Conecta los componentes Figma con el Button de código.
 * Ejecutar para publicar: npm run figma:connect
 *
 * Docs: https://www.figma.com/developers/code-connect
 */
import figma from '@figma/code-connect';
import { Button } from './Button';

// ── Botones/Generales (Primary) ──────────────────────────────────
figma.connect(
  Button,
  'https://www.figma.com/design/awAiQ74drBGZImHlXtIdPN/Lorien?node-id=2863:30301',
  {
    props: {
      children: figma.string('Label'),
    },
    example: ({ children }) => (
      <Button variant="primary" size="md">
        {children ?? 'Buscar'}
      </Button>
    ),
  },
);

// ── Botones/Secundario (Secondary / Outlined) ────────────────────
figma.connect(
  Button,
  'https://www.figma.com/design/awAiQ74drBGZImHlXtIdPN/Lorien?node-id=2863:30302',
  {
    props: {
      children:  figma.string('buttonText'),
      iconLeft:  figma.boolean('iconLeft'),
      iconRight: figma.boolean('iconRight'),
    },
    example: ({ children }) => (
      <Button variant="secondary" size="sm">
        {children ?? 'Button CTA'}
      </Button>
    ),
  },
);
