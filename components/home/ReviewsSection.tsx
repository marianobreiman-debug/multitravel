'use client';

import { useState } from 'react';

const REVIEWS = [
  {
    name: 'Martín Martínez',
    rating: 5,
    date: 'Hace 2 días',
    text: 'Excelente experiencia con Multitravel. El paquete a Cancún fue perfecto, todo organizado y sin contratiempos. El equipo de soporte siempre disponible.',
    avatar: 'MM',
    avatarBg: '#226FCB',
  },
  {
    name: 'Gabriel Martínez',
    rating: 5,
    date: 'Hace 1 semana',
    text: 'Viajamos a Florianópolis en familia y quedamos encantados. Muy buena relación precio-calidad y la atención personalizada marcó la diferencia.',
    avatar: 'GM',
    avatarBg: '#0891B2',
  },
  {
    name: 'Sophia Martínez',
    rating: 5,
    date: 'Hace 2 semanas',
    text: 'Segunda vez que contrato con Multitravel y siempre es una experiencia increíble. El paquete a Europa superó todas mis expectativas.',
    avatar: 'SM',
    avatarBg: '#7C3AED',
  },
  {
    name: 'Emilio Gómez',
    rating: 5,
    date: 'Hace 3 semanas',
    text: 'Recomiendo 100%. Los vuelos, hotel y traslados coordinados perfectamente. Fue el viaje de luna de miel que siempre soñamos. ¡Gracias!',
    avatar: 'EG',
    avatarBg: '#15803D',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < count ? 'text-[#F59E0B]' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function ReviewsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(REVIEWS.length - 1, c + 1));

  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <p className="text-[#226FCB] text-xs font-bold uppercase tracking-widest mb-1.5">Testimonios</p>
            <h2 className="text-[#0F172A] text-2xl font-extrabold">Lo que dicen nuestros viajeros</h2>
          </div>
          {/* Google Reviews badge */}
          <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-2.5 shadow-card self-start sm:self-auto">
            <svg viewBox="0 0 48 48" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
              <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
              <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
              <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
            </svg>
            <div>
              <div className="flex items-center gap-1">
                <StarRating count={5} />
                <span className="text-sm font-bold text-gray-800 ml-1">4.9</span>
              </div>
              <p className="text-[10px] text-gray-500 font-medium">Google Reviews</p>
            </div>
          </div>
        </div>

        {/* Cards row */}
        <div className="relative">
          <button
            onClick={prev}
            disabled={current === 0}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-card flex items-center justify-center hover:shadow-card-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {REVIEWS.map((review, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 shadow-card border border-gray-100 flex flex-col gap-3"
              >
                {/* Top: avatar + name + rating */}
                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0"
                    style={{ background: review.avatarBg }}
                  >
                    {review.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-900 font-bold text-sm truncate">{review.name}</p>
                    <StarRating count={review.rating} />
                  </div>
                </div>
                {/* Review text */}
                <p className="text-gray-600 text-sm leading-relaxed flex-1">"{review.text}"</p>
                <p className="text-gray-400 text-xs font-medium">{review.date}</p>
              </div>
            ))}
          </div>

          <button
            onClick={next}
            disabled={current >= REVIEWS.length - 1}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-200 rounded-full shadow-card flex items-center justify-center hover:shadow-card-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
