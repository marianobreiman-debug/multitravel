'use client';

import { useState } from 'react';

const CATEGORIES = [
  {
    id: 'vuelos',
    label: 'Vuelos',
    links: [
      'Vuelos a Brasil', 'Vuelos a Cancún', 'Vuelos a Miami', 'Vuelos a Madrid',
      'Vuelos a Barcelona', 'Vuelos a Lima', 'Vuelos a Bogotá', 'Vuelos a Santiago',
      'Vuelos a Montevideo', 'Vuelos a Asunción', 'Vuelos a La Paz', 'Vuelos a Caracas',
    ],
  },
  {
    id: 'paquetes',
    label: 'Paquetes turísticos',
    links: [
      'Paquetes a Florianópolis', 'Paquetes a Cancún', 'Paquetes a Punta Cana',
      'Paquetes a Europa', 'Paquetes a Disney', 'Paquetes a Bariloche',
      'Paquetes a Mendoza', 'Paquetes a Iguazú', 'Paquetes a Cusco',
      'Paquetes a Cartagena', 'Paquetes a Río de Janeiro', 'Paquetes a Buenos Aires',
    ],
  },
  {
    id: 'hoteles',
    label: 'Hoteles y Alojamientos',
    links: [
      'Hoteles en Buenos Aires', 'Hoteles en Bariloche', 'Hoteles en Mendoza',
      'Hoteles en Río de Janeiro', 'Hoteles en Cancún', 'Hoteles en Miami',
      'Hoteles en Madrid', 'Hoteles en Barcelona', 'Hoteles en Iguazú',
      'Hoteles en Salta', 'Hoteles en Córdoba', 'Hoteles en Rosario',
    ],
  },
  {
    id: 'argentina',
    label: 'Destinos Argentina',
    links: [
      'Vuelos a Bariloche', 'Vuelos a Mendoza', 'Vuelos a Salta',
      'Vuelos a Iguazú', 'Vuelos a Córdoba', 'Vuelos a Mar del Plata',
      'Vuelos a Tucumán', 'Vuelos a Neuquén', 'Vuelos a Rosario',
      'Vuelos a Comodoro Rivadavia', 'Vuelos a Ushuaia', 'Vuelos a Resistencia',
    ],
  },
];

export function SeoLinksSection() {
  const [activeTab, setActiveTab] = useState('vuelos');
  const activeCategory = CATEGORIES.find((c) => c.id === activeTab)!;
  const half = Math.ceil(activeCategory.links.length / 4);

  return (
    <section className="py-12 bg-[#F1F5F9]">
      <div className="max-w-[1280px] mx-auto px-6">
        <h2 className="text-[#0F172A] text-xl font-extrabold mb-6">Más opciones para tu viaje</h2>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`text-sm font-semibold px-4 py-2 rounded-xl border transition-all ${
                activeTab === cat.id
                  ? 'bg-[#226FCB] text-white border-[#226FCB]'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-[#226FCB] hover:text-[#226FCB]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Links grid: 4 columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[0, 1, 2, 3].map((colIdx) => (
            <ul key={colIdx} className="flex flex-col gap-1.5">
              {activeCategory.links
                .slice(colIdx * half, (colIdx + 1) * half)
                .map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-[#226FCB] hover:text-[#0D4E88] text-sm font-medium hover:underline transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
