'use client';

import { useState, useRef, useEffect } from 'react';

const PROMOS = [
  {
    id: 'cuotas',
    bg: 'linear-gradient(135deg, #0D4E88 0%, #226FCB 100%)',
    badge: '★ EXCLUSIVO',
    title: '3 CUOTAS',
    subtitle: 'SIN INTERÉS',
    description: 'Comprá tus paquetes, vuelos y hoteles en hasta 3 cuotas sin interés con tarjetas seleccionadas.',
    cta: 'Cuotas Multitravel',
    accent: '#FCD34D',
  },
  {
    id: 'multineta',
    bg: 'linear-gradient(135deg, #1D4ED8 0%, #0891B2 100%)',
    badge: '🌍 DESTINOS',
    title: 'MULTIESTA',
    subtitle: 'TUS DESTINOS SOÑADOS',
    description: 'Cancún · Punta Cana · Miami · Europa · Brasil y mucho más. Encontrá tu próxima aventura.',
    cta: 'Cuotas Multitravel',
    accent: '#34D399',
  },
  {
    id: 'blackfriday',
    bg: 'linear-gradient(135deg, #111827 0%, #1F2937 60%, #374151 100%)',
    badge: '🔥 OFERTA LIMITADA',
    title: 'BLACK',
    subtitle: 'FRIDAY',
    description: 'Las mejores ofertas del año en vuelos, paquetes y hoteles. Descuentos de hasta 50% OFF.',
    cta: 'Canal Multitravel',
    accent: '#F87171',
  },
];

const GAP             = 16;
const VISIBLE_DESKTOP = 3;
const VISIBLE_MOBILE  = 1;

export function PromoCarousel() {
  const [current, setCurrent]     = useState(0);
  const [cardW, setCardW]         = useState(0);
  const [isMobile, setIsMobile]   = useState(false);
  const outerRef                  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calc = () => {
      if (!outerRef.current) return;
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      const totalW = outerRef.current.offsetWidth;
      const vis    = mobile ? VISIBLE_MOBILE : VISIBLE_DESKTOP;
      setCardW((totalW - GAP * (vis - 1)) / vis);
    };
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);

  const maxIndex   = isMobile ? PROMOS.length - 1 : 0;
  const translateX = current * (cardW + GAP);

  const prev = () => setCurrent(c => Math.max(0, c - 1));
  const next = () => setCurrent(c => Math.min(maxIndex, c + 1));

  const effectiveW = cardW > 0 ? cardW : undefined;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-8">
          <p className="text-[#226FCB] text-xs font-bold uppercase tracking-widest mb-1.5">Promociones</p>
          <h2 className="text-[#0F172A] text-2xl font-extrabold">
            Descuentos y promociones exclusivas de Multitravel en 2026
          </h2>
        </div>

        {/* Carousel wrapper */}
        <div className="relative">
          {/* Arrow left */}
          <button
            onClick={prev}
            disabled={current === 0}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-card flex items-center justify-center hover:shadow-card-lg hover:border-[#226FCB] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Track */}
          <div ref={outerRef} style={{ overflow: 'hidden' }}>
            <div
              style={{
                display:    'flex',
                gap:        GAP,
                transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                transform:  `translateX(-${translateX}px)`,
              }}
            >
              {PROMOS.map((promo) => (
                <div
                  key={promo.id}
                  className="rounded-2xl overflow-hidden relative flex-shrink-0"
                  style={{
                    background: promo.bg,
                    minHeight:  200,
                    width:      effectiveW,
                  }}
                >
                  {/* Decorative circles */}
                  <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/5" />
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white/5" />

                  <div className="relative p-6 flex flex-col h-full min-h-[200px]">
                    <span
                      className="inline-block text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-pill mb-3 self-start"
                      style={{ color: promo.accent, background: 'rgba(0,0,0,0.25)' }}
                    >
                      {promo.badge}
                    </span>
                    <div className="flex-1">
                      <p className="text-white font-black text-3xl leading-none">{promo.title}</p>
                      <p className="font-black text-xl leading-tight" style={{ color: promo.accent }}>
                        {promo.subtitle}
                      </p>
                      <p className="text-white/70 text-sm mt-3 leading-relaxed">{promo.description}</p>
                    </div>
                    <a
                      href="#"
                      className="mt-5 inline-block text-center text-sm font-bold py-2.5 px-6 rounded-xl transition-colors border-2 border-white/40 text-white hover:bg-white/15"
                    >
                      {promo.cta}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow right */}
          <button
            onClick={next}
            disabled={current >= maxIndex}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-card flex items-center justify-center hover:shadow-card-lg hover:border-[#226FCB] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        {/* Dots — only meaningful on mobile */}
        <div className="flex justify-center gap-2 mt-6">
          {PROMOS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                borderRadius: 24,
                border:       'none',
                cursor:       'pointer',
                padding:      0,
                transition:   'all 0.25s',
                width:        i === current ? 20 : 10,
                height:       10,
                background:   i === current ? '#226FCB' : '#D1D5DB',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
