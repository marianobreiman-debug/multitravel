import React from 'react';
import styles from './Tag.module.css';

export type TagVariant = 'success' | 'info' | 'neutral' | 'danger';

export interface TagProps {
  /** Variante de color semántica.
   *  - `success` → verde claro (#DEFADE / #305030) — "Cancelación gratis" en Figma
   *  - `info`    → azul claro (#EAF3FF / #0D4E88)
   *  - `neutral` → gris
   *  - `danger`  → rojo claro
   */
  variant?: TagVariant;
  children: React.ReactNode;
  className?: string;
}

export function Tag({ variant = 'success', children, className }: TagProps) {
  const classes = [styles.tag, styles[variant], className ?? '']
    .filter(Boolean)
    .join(' ');

  return <span className={classes}>{children}</span>;
}
