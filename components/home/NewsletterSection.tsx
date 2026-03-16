'use client';

import { useState } from 'react';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSent(true);
  };

  return (
    <section className="py-14 bg-white border-y border-gray-100">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left: Text */}
          <div className="text-center lg:text-left">
            <p className="text-[#226FCB] text-xs font-bold uppercase tracking-widest mb-2">Newsletter</p>
            <h2 className="text-[#0F172A] text-xl font-extrabold mb-1.5">
              Suscribite a nuestras novedades antes que nadie
            </h2>
            <p className="text-gray-500 text-sm">
              Recibí ofertas exclusivas, descuentos y las últimas novedades directo en tu mail.
            </p>
          </div>

          {/* Right: Form */}
          <div className="w-full lg:w-auto lg:min-w-[480px]">
            {sent ? (
              <div className="flex items-center gap-3 bg-[#F0FDF4] border border-[#BBF7D0] rounded-2xl px-6 py-4">
                <div className="w-8 h-8 bg-[#16A34A] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <p className="text-[#15803D] font-semibold text-sm">
                  ¡Listo! Te suscribiste correctamente. Pronto recibirás nuestras novedades.
                </p>
              </div>
            ) : (
              <>
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <div className="flex-1 relative">
                    <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Tu email"
                      required
                      className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl text-sm text-gray-700 outline-none focus:border-[#226FCB] focus:ring-2 focus:ring-[#226FCB]/10 transition-all placeholder-gray-400 font-medium"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#226FCB] hover:bg-[#1A5FA0] text-white font-black text-sm px-7 py-3.5 rounded-xl transition-colors whitespace-nowrap"
                  >
                    Suscribir
                  </button>
                </form>
                <p className="text-gray-400 text-[11px] mt-2.5 text-center lg:text-left">
                  Al suscribirte aceptás nuestra{' '}
                  <a href="#" className="text-[#226FCB] hover:underline">Política de Privacidad</a>.
                  Podés darte de baja cuando quieras.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
