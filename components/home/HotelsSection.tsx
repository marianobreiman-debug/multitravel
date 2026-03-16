'use client';

import { useState } from 'react';

const HOTELS = [
  {
    city: 'Río de Janeiro',
    country: 'Brasil',
    stars: 5,
    price: '$143.000',
    priceNote: 'por noche',
    gradient: 'linear-gradient(160deg, #0891B2 0%, #0D4E88 100%)',
    badge: '★ 5 estrellas',
  },
  {
    city: 'Buenos Aires',
    country: 'Argentina',
    stars: 4,
    price: '$145.000',
    priceNote: 'por noche',
    gradient: 'linear-gradient(160deg, #226FCB 0%, #1D4ED8 100%)',
    badge: '★ 4 estrellas',
  },
  {
    city: 'New York',
    country: 'Estados Unidos',
    stars: 4,
    price: '$320.000',
    priceNote: 'por noche',
    gradient: 'linear-gradient(160deg, #374151 0%, #111827 100%)',
    badge: '★ 4 estrellas',
  },
  {
    city: 'San Carlos de Bariloche',
    country: 'Argentina',
    stars: 5,
    price: '$80.000',
    priceNote: 'por noche',
    gradient: 'linear-gradient(160deg, #15803D 0%, #14532D 100%)',
    badge: '★ 5 estrellas',
  },
  {
    city: 'Cancún',
    country: 'México',
    stars: 5,
    price: '$210.000',
    priceNote: 'por noche',
    gradient: 'linear-gradient(160deg, #EA580C 0%, #C2410C 100%)',
    badge: '★ 5 estrellas',
  },
];

export function HotelsSection() {
  const [current, setCurrent] = useState(0);
  const visible = 4;
  const max = HOTELS.length - visible;

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(max, c + 1));

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <p className="text-[#226FCB] text-xs font-bold uppercase tracking-widest mb-1.5">Hoteles</p>
            <h2 className="text-[#0F172A] text-2xl font-extrabold">Hoteles en las mejores ciudades</h2>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-1 text-[#226FCB] text-sm font-bold hover:underline whitespace-nowrap mt-1">
            Ver todos <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/></svg>
          </a>
        </div>

        {/* Carousel */}
        <div className="relative">
          <button
            onClick={prev}
            disabled={current === 0}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-card flex items-center justify-center hover:shadow-card-lg transition-all disabled:opacity-30"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {HOTELS.slice(current, current + visible).map((hotel, idx) => (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden bg-white shadow-card border border-gray-100"
              >
                {/* Image area */}
                <div
                  className="relative h-40"
                  style={{ background: hotel.gradient }}
                >
                  {/* Texture */}
                  <div className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `radial-gradient(circle at 75% 25%, rgba(255,255,255,0.4) 0%, transparent 50%)`,
                    }}
                  />
                  {/* Hotel icon watermark */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-15">
                    <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/>
                    </svg>
                  </div>
                  {/* Dark gradient bottom */}
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)' }} />

                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 text-gray-700 text-[9px] font-black tracking-wider uppercase px-2 py-0.5 rounded-pill">
                      {hotel.badge}
                    </span>
                  </div>
                  {/* Favorite */}
                  <button className="absolute top-3 right-3 w-7 h-7 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                  </button>

                  {/* City overlay */}
                  <div className="absolute bottom-2 left-3 right-3">
                    <p className="text-white font-black text-sm leading-tight">{hotel.city}</p>
                    <p className="text-white/70 text-[10px]">{hotel.country}</p>
                  </div>
                </div>

                {/* Info row */}
                <div className="p-3 flex items-center justify-between">
                  <div>
                    <p className="text-gray-900 font-bold text-sm">{hotel.price}</p>
                    <p className="text-gray-500 text-[11px]">{hotel.priceNote}</p>
                  </div>
                  <a
                    href="#"
                    className="bg-[#226FCB] hover:bg-[#1A5FA0] text-white text-xs font-bold py-2 px-4 rounded-xl transition-colors"
                  >
                    Reservar
                  </a>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={next}
            disabled={current >= max}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-card flex items-center justify-center hover:shadow-card-lg transition-all disabled:opacity-30"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: max + 1 }).map((_, i) => (
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
