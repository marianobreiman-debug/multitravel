export function EditorialSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text column */}
          <div>
            <p className="text-[#226FCB] text-xs font-bold uppercase tracking-widest mb-3">Sobre Multitravel</p>
            <h2 className="text-[#0F172A] text-3xl font-extrabold leading-tight mb-5">
              Toda tu travel plan
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              En Multitravel diseñamos experiencias de viaje únicas y personalizadas para cada cliente.
              Desde la búsqueda del mejor vuelo hasta el hotel ideal, nos encargamos de cada detalle
              para que solo tengas que disfrutar.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Con más de 15 años en el mercado turístico argentino, contamos con los mejores acuerdos
              con aerolíneas, cadenas hoteleras y operadores locales para ofrecerte precios únicos
              y experiencias inolvidables.
            </p>
            <div className="grid grid-cols-3 gap-6 mb-8 py-6 border-y border-gray-100">
              <div>
                <p className="text-[#0D4E88] font-black text-3xl">15+</p>
                <p className="text-gray-500 text-sm">Años de experiencia</p>
              </div>
              <div>
                <p className="text-[#0D4E88] font-black text-3xl">50K+</p>
                <p className="text-gray-500 text-sm">Viajeros satisfechos</p>
              </div>
              <div>
                <p className="text-[#0D4E88] font-black text-3xl">200+</p>
                <p className="text-gray-500 text-sm">Destinos disponibles</p>
              </div>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#226FCB] hover:bg-[#1A5FA0] text-white font-bold text-sm py-3 px-6 rounded-xl transition-colors"
            >
              Conocé más sobre nosotros
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </a>
          </div>

          {/* Image column */}
          <div className="relative">
            <div
              className="rounded-3xl overflow-hidden relative"
              style={{
                height: 420,
                background: 'linear-gradient(160deg, #0891B2 0%, #0D4E88 50%, #15803D 100%)',
              }}
            >
              {/* Decorative photo-like elements */}
              <div className="absolute inset-0 opacity-25"
                style={{
                  backgroundImage: `
                    radial-gradient(circle at 80% 20%, rgba(255,255,255,0.4) 0%, transparent 40%),
                    radial-gradient(circle at 20% 70%, rgba(0,0,0,0.3) 0%, transparent 40%)
                  `,
                }}
              />
              {/* Landscape mockup */}
              <div className="absolute inset-0 flex items-end justify-center pb-8 opacity-30">
                <svg viewBox="0 0 400 200" className="w-full" fill="none">
                  <path d="M0 160 Q100 100 200 130 Q300 160 400 100 L400 200 L0 200Z" fill="white" fillOpacity="0.2" />
                  <path d="M50 140 L120 60 L190 140Z" fill="white" fillOpacity="0.3" />
                  <path d="M200 130 L280 50 L360 130Z" fill="white" fillOpacity="0.25" />
                  <circle cx="100" cy="50" r="35" fill="white" fillOpacity="0.15" />
                  <path d="M40 120 Q80 80 120 100 Q160 120 200 90 Q240 60 280 80 Q320 100 360 70 L360 140 L40 140Z" fill="white" fillOpacity="0.1" />
                </svg>
              </div>
              {/* Overlay badge */}
              <div className="absolute top-6 left-6 bg-white rounded-2xl p-4 shadow-card-lg max-w-[160px]">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-full bg-[#226FCB] flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-bold text-xs">4.9 / 5.0</span>
                </div>
                <p className="text-gray-500 text-[10px] leading-tight">Calificación promedio de nuestros viajeros</p>
              </div>

              {/* Bottom info badge */}
              <div className="absolute bottom-6 right-6 bg-white rounded-2xl p-4 shadow-card-lg">
                <p className="text-[#0D4E88] font-black text-xl leading-none">50.000+</p>
                <p className="text-gray-500 text-xs mt-0.5">Viajeros felices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
