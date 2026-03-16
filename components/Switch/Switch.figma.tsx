/**
 * Figma Code Connect — Switch
 * Figma node: 2863:30303
 */
import figma from '@figma/code-connect';
import { Switch } from './Switch';

figma.connect(
  Switch,
  'https://www.figma.com/design/awAiQ74drBGZImHlXtIdPN/Lorien?node-id=2863:30303',
  {
    props: {
      checked: figma.boolean('isSelected'),
    },
    example: ({ checked }) => (
      <Switch
        checked={checked ?? false}
        onChange={() => {}}
        label="Toggle"
      />
    ),
  },
);
