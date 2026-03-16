import React from 'react';
import styles from './Input.module.css';

export interface InputProps {
  /** Texto pequeño encima del valor (ej: "Origen", "Destino") */
  label?: string;
  /** Valor actual seleccionado o escrito */
  value?: string;
  /** Placeholder cuando no hay valor */
  placeholder?: string;
  /** Ícono a la izquierda (24×24 SVG / React node) */
  icon?: React.ReactNode;
  /** Muestra chevron de dropdown a la derecha */
  dropdown?: boolean;
  /** Estado de error */
  error?: boolean;
  /** Mensaje de error */
  errorMessage?: string;
  /** Deshabilitado */
  disabled?: boolean;
  /** onChange — se dispara al seleccionar o escribir */
  onChange?: (value: string) => void;
  /** onClick — útil para abrir pickers */
  onClick?: () => void;
  className?: string;
}

export function Input({
  label,
  value,
  placeholder,
  icon,
  dropdown    = false,
  error       = false,
  errorMessage,
  disabled    = false,
  onChange,
  onClick,
  className,
}: InputProps) {
  const fieldClasses = [
    styles.field,
    error    ? styles.error    : '',
    disabled ? styles.disabled : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={styles.wrapper}>
      <div
        className={fieldClasses}
        onClick={!disabled ? onClick : undefined}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick && !disabled ? 0 : undefined}
        onKeyDown={
          onClick && !disabled
            ? (e) => e.key === 'Enter' && onClick()
            : undefined
        }
      >
        {icon && <span className={styles.icon}>{icon}</span>}

        <div className={styles.textBlock}>
          {label && <span className={styles.label}>{label}</span>}
          {onChange ? (
            <input
              className={styles.value}
              style={{ border: 'none', outline: 'none', background: 'transparent', padding: 0, width: '100%' }}
              value={value ?? ''}
              placeholder={placeholder}
              disabled={disabled}
              onChange={(e) => onChange(e.target.value)}
            />
          ) : (
            <span className={styles.value} style={{ color: value ? undefined : 'var(--color-grey-600)' }}>
              {value ?? placeholder}
            </span>
          )}
        </div>

        {dropdown && (
          <span className={styles.chevron} aria-hidden>
            {/* Chevron SVG — reemplazar con ícono de Vuesax si se usa la librería */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        )}
      </div>

      {error && errorMessage && (
        <span className={styles.errorMsg}>{errorMessage}</span>
      )}
    </div>
  );
}
