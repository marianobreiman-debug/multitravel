'use client';

import { useState } from 'react';

const PROMOS = [
  {
    id: 'cuotas',
    bg: 'linear-gradient(135deg, #0D4E88 0%, #226FCB 100%)',
    badge: '★ EXCLUSIVO',
    title: '3 CUOTAS',
    subtitle: 'SIN INTERÉS',
    description: 'Comprá tus paquetes, vuelos y hoteles en hasta 3 cuotas sin interés con tarjetas seleccionadas.',
    cta: 'Cuotas Multitravel',
    ctaBg: 'border-2 border-white/40 text-white hover:bg-white/15',
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
    ctaBg: 'border-2 border-white/40 text-white hover:bg-white/15',
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
    ctaBg: 'border-2 border-white/40 text-white hover:bg-white/15',
    accent: '#F87171',
  },
];

export function PromoCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + PROMOS.length) % PROMOS.length);
  const next = () => setCurrent((c) => (c + 1) % PROMOS.length);

  const getVisible = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(PROMOS[(current + i) % PROMOS.length]);
    }
    return items;
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
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
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-card flex items-center justify-center hover:shadow-card-lg hover:border-[#226FCB] transition-all"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {getVisible().map((promo, idx) => (
              <div
                key={promo.id + idx}
                className="rounded-2xl overflow-hidden relative"
                style={{
                  background: promo.bg,
                  minHeight: 200,
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
                    <p
                      className="font-black text-xl leading-tight"
                      style={{ color: promo.accent }}
                    >
                      {promo.subtitle}
                    </p>
                    <p className="text-white/70 text-sm mt-3 leading-relaxed">{promo.description}</p>
                  </div>
                  <a
                    href="#"
                    className={`mt-5 inline-block text-center text-sm font-bold py-2.5 px-6 rounded-xl transition-colors ${promo.ctaBg}`}
                  >
                    {promo.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Arrow right */}
          <button
            onClick={next}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-card flex items-center justify-center hover:shadow-card-lg hover:border-[#226FCB] transition-all"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {PROMOS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-pill transition-all ${i === current ? 'w-6 h-2.5 bg-[#226FCB]' : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
