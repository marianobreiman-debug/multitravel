/**
 * Figma Code Connect — Input (Text Fields/Inputs)
 * Figma node: 2863:30300 / 1237:37796
 */
import figma from '@figma/code-connect';
import { Input } from './Input';

figma.connect(
  Input,
  'https://www.figma.com/design/awAiQ74drBGZImHlXtIdPN/Lorien?node-id=2863:30300',
  {
    props: {
      label:    figma.string('Label'),
      value:    figma.string('Value'),
      dropdown: figma.boolean('dropdown'),
    },
    example: ({ label, value, dropdown }) => (
      <Input
        label={label ?? 'Origen'}
        value={value}
        dropdown={dropdown ?? true}
        icon={
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
          </svg>
        }
      />
    ),
  },
);
