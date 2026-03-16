/**
 * Lorien Design System
 * Exporta todos los tokens y componentes desde un único punto de entrada.
 *
 * Uso en Next.js:
 *   import { Button, Tag, colors } from '@lorien/components';
 *   import '@lorien/styles/tokens.css';   // en layout.tsx
 */

// ── Tokens ────────────────────────────────────────────────────────
export * from './tokens';

// ── Components ───────────────────────────────────────────────────
export { Button }     from './components/Button';
export { Input }      from './components/Input';
export { Tag }        from './components/Tag';
export { Switch }     from './components/Switch';
export { FlightCard } from './components/FlightCard';

export type { ButtonProps, ButtonVariant, ButtonSize }                          from './components/Button';
export type { InputProps }                                                       from './components/Input';
export type { TagProps, TagVariant }                                             from './components/Tag';
export type { SwitchProps }                                                      from './components/Switch';
export type { FlightCardProps, FlightSegment, FlightType, BaggageItem }         from './components/FlightCard';
