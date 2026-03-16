'use client';

import { useState } from 'react';

const FAQS = [
  {
    question: '¿Se puede solicitar Cuotas Multitravel en Black Friday?',
    answer: 'Sí, durante el evento Black Friday podés acceder a las cuotas sin interés de Multitravel en todos los productos participantes. Las condiciones específicas se publican antes del inicio del evento. Te recomendamos suscribirte a nuestro newsletter para recibir información anticipada.',
  },
  {
    question: '¿Qué destinos incluye la promoción de destinos en el 2026?',
    answer: 'La promoción abarca más de 200 destinos nacionales e internacionales, incluyendo Brasil, Caribe (Cancún, Punta Cana, Aruba), Europa (Barcelona, París, Roma, Lisboa), Estados Unidos, México y toda la Argentina. Consultá la sección de promociones para ver el listado completo actualizado.',
  },
  {
    question: '¿Aplica a quién? ¿A quién puedo pedir para elegir?',
    answer: 'Las promociones de Multitravel aplican a todos los usuarios registrados en nuestra plataforma. Para acceder a las cuotas sin interés, debés tener una tarjeta de crédito de los bancos participantes. El beneficio es transferible a cualquier pasajero que figure en la reserva.',
  },
  {
    question: '¿Me pueden reconfirmar todas las fechas de pago?',
    answer: 'Absolutamente. Una vez realizada tu reserva recibirás un email de confirmación con todas las fechas de pago detalladas, montos y métodos de pago disponibles. También podés consultar tus próximos vencimientos desde tu cuenta de usuario en la sección "Mis reservas".',
  },
  {
    question: '¿Hasta cuándo puedo comprar el viaje con datos premium?',
    answer: 'Los paquetes con datos premium tienen disponibilidad variable según el destino y la fecha de viaje. Generalmente podés adquirirlos con hasta 6 meses de anticipación. Para destinos de alta demanda como Caribe o Europa en temporada alta, recomendamos reservar con al menos 90 días de anticipación.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: title */}
          <div>
            <p className="text-[#226FCB] text-xs font-bold uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-[#0F172A] text-2xl font-extrabold leading-tight mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              ¿Tenés dudas? Acá encontrás respuesta a las preguntas más comunes de nuestros viajeros.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 border border-[#226FCB] text-[#226FCB] hover:bg-[#EFF6FF] font-bold text-sm py-2.5 px-5 rounded-xl transition-colors"
            >
              Ver todas las FAQs
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </a>
          </div>

          {/* Right: accordion */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-100 shadow-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                >
                  <span className="text-gray-900 font-semibold text-sm leading-snug pr-2">
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                      openIndex === idx ? 'bg-[#226FCB] text-white' : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    <svg className={`w-4 h-4 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </button>
                {openIndex === idx && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
