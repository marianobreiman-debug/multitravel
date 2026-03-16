import React from 'react';
import styles from './FlightCard.module.css';

export type FlightType = 'direct' | 'layover1' | 'layover2';

export interface FlightSegment {
  iata:     string;  // Ej: "AEP", "BRC"
  time:     string;  // Ej: "08:45"
  /** "+1" si llega al día siguiente */
  dayDelta?: string;
}

export interface BaggageItem {
  /** Tipo de bulto — personal, carry-on, checked */
  type: 'personal' | 'carry-on' | 'checked';
  icon: React.ReactNode;
}

export interface FlightCardProps {
  /** Nombre de la aerolínea */
  airline:     string;
  /** Ícono/logo de la aerolínea (18×18) */
  airlineIcon?: React.ReactNode;
  /** Tipo de vuelo */
  flightType:  FlightType;
  /** Duración total, ej: "4h 23m" */
  duration:    string;
  /** Segmento de origen */
  origin:      FlightSegment;
  /** Segmento de destino */
  destination: FlightSegment;
  /** Muestra ícono de cambio de aeropuerto en destino */
  airportChange?: boolean;
  /** Items de equipaje */
  baggage?:    BaggageItem[];
  /** Card seleccionada */
  selected?:   boolean;
  /** Callback al cambiar selección */
  onSelect?:   (selected: boolean) => void;
  /** Callback al presionar "Detalle" */
  onDetail?:   () => void;
  className?:  string;
}

const flightTypeLabel: Record<FlightType, { label: string; className: string }> = {
  direct:   { label: 'Directo',   className: styles.badgeDirect   },
  layover1: { label: '1 escala',  className: styles.badgeLayover  },
  layover2: { label: '2 escalas', className: styles.badgeLayover  },
};

export function FlightCard({
  airline,
  airlineIcon,
  flightType,
  duration,
  origin,
  destination,
  airportChange = false,
  baggage       = [],
  selected      = false,
  onSelect,
  onDetail,
  className,
}: FlightCardProps) {
  const badge = flightTypeLabel[flightType];

  return (
    <div className={[styles.card, className ?? ''].filter(Boolean).join(' ')}>
      {/* Selector de selección */}
      <input
        type="checkbox"
        className={styles.selector}
        checked={selected}
        onChange={(e) => onSelect?.(e.target.checked)}
        aria-label={`Seleccionar vuelo ${airline} ${origin.iata}-${destination.iata}`}
      />

      <div className={styles.inner}>
        {/* Fila superior */}
        <div className={styles.topRow}>
          {airlineIcon && (
            <span className={styles.airlineIcon}>{airlineIcon}</span>
          )}
          <span className={styles.airlineName}>{airline}</span>
          <span className={badge.className}>{badge.label}</span>
        </div>

        {/* Fila de horarios */}
        <div className={styles.flightRow}>
          <div className={styles.timeBlock}>
            <span className={styles.iata}>{origin.iata}</span>
            <span className={styles.time}>{origin.time}</span>
          </div>

          <div className={styles.durationBlock}>
            <span className={styles.durationText}>Duración</span>
            <div className={styles.durationLine} />
            <span className={styles.durationText}>{duration}</span>
          </div>

          <div className={styles.destBlock}>
            <div className={styles.destHeader}>
              <span className={styles.iata}>{destination.iata}</span>
              {airportChange && (
                <span
                  aria-label="Cambio de aeropuerto"
                  title="Cambio de aeropuerto"
                  style={{ color: 'var(--color-primary-red-600)', fontSize: '12px' }}
                >
                  ⚠
                </span>
              )}
            </div>
            <div style={{ display: 'flex', gap: '2px', alignItems: 'flex-end' }}>
              <span className={styles.time}>{destination.time}</span>
              {destination.dayDelta && (
                <span className={styles.timePlus}>{destination.dayDelta}</span>
              )}
            </div>
          </div>

          {/* Columna derecha: equipaje + link detalle */}
          <div className={styles.rightCol}>
            {baggage.length > 0 && (
              <div className={styles.baggageRow}>
                {baggage.map((b, i) => (
                  <span key={i} className={styles.baggageIcon} aria-label={b.type}>
                    {b.icon}
                  </span>
                ))}
              </div>
            )}
            {onDetail && (
              <button className={styles.detailLink} onClick={onDetail}>
                Detalle
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
