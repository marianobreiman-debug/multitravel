import React from 'react';
import styles from './Switch.module.css';

export interface SwitchProps {
  /** Estado actual del switch */
  checked: boolean;
  /** Callback al cambiar */
  onChange: (checked: boolean) => void;
  /** Label accesible (no visible) */
  label?: string;
  disabled?: boolean;
  className?: string;
}

export function Switch({ checked, onChange, label, disabled = false, className }: SwitchProps) {
  const trackClass = [
    styles.track,
    checked ? styles.trackOn : styles.trackOff,
  ].join(' ');

  return (
    <button
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      className={[styles.switchBtn, className ?? ''].filter(Boolean).join(' ')}
      onClick={() => onChange(!checked)}
    >
      <div className={trackClass}>
        <div className={styles.thumb} />
      </div>
    </button>
  );
}
