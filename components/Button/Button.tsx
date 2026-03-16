import React from 'react';
import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'secondary';
export type ButtonSize    = 'lg' | 'md' | 'sm';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style del botón.
   *  - `primary`   → relleno azul (#0D4E88) — Botones/Generales en Figma
   *  - `secondary` → outlined crimson (#FF5C7F) — Botones/Secundario en Figma
   */
  variant?: ButtonVariant;
  /** Tamaño del botón.
   *  - `lg` → 18px, padding 20px 24px
   *  - `md` → 16px, padding 19px 24px (match Figma exacto)
   *  - `sm` → 14px, height 40px
   */
  size?: ButtonSize;
  /** Ocupa el 100% del ancho del contenedor */
  fullWidth?: boolean;
  /** Ícono opcional a la izquierda del label */
  iconLeft?: React.ReactNode;
  /** Ícono opcional a la derecha del label */
  iconRight?: React.ReactNode;
}

export function Button({
  variant   = 'primary',
  size      = 'md',
  fullWidth = false,
  iconLeft,
  iconRight,
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} {...props}>
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
