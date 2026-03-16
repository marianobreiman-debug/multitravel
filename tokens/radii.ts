/**
 * Border radius tokens — extraídos de Figma "Lorien"
 */
export const radii = {
  none:   '0px',
  sm:     '4px',   // Tags
  md:     '8px',
  input:  '12px',  // Text Fields / Inputs
  card:   '16px',  // Cards / Price panel
  switch: '16px',  // Switch track
  pill:   '32px',  // Botones
  full:   '9999px',
} as const;

export type Radii = typeof radii;
