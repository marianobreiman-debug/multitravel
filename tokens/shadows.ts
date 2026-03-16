/**
 * Shadow tokens — extraídos de Figma "Lorien"
 */
export const shadows = {
  sm:      '0px 1px 2px rgba(0, 0, 0, 0.05)',          // shadow/neutral/sm
  blueLg:  '0px 0px 30px rgba(13, 78, 136, 0.10)',     // Shadows/Blue/Light
} as const;

export type Shadows = typeof shadows;
