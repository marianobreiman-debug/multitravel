/**
 * Figma Code Connect — Tag
 * Figma node: 2863:31392 → 225:7563
 */
import figma from '@figma/code-connect';
import { Tag } from './Tag';

figma.connect(
  Tag,
  'https://www.figma.com/design/awAiQ74drBGZImHlXtIdPN/Lorien?node-id=2863:31392',
  {
    props: {
      children: figma.string('Label'),
    },
    example: ({ children }) => (
      <Tag variant="success">{children ?? 'Cancelación gratis'}</Tag>
    ),
  },
);
