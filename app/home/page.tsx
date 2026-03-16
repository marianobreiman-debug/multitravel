import { Header } from '@/components/home/Header';
import { HeroSearch } from '@/components/home/HeroSearch';
import { PromoCarousel } from '@/components/home/PromoCarousel';
import { ReviewsSection } from '@/components/home/ReviewsSection';
import { PackagesSection } from '@/components/home/PackagesSection';
import { FlightOffersSection } from '@/components/home/FlightOffersSection';
import { HotelsSection } from '@/components/home/HotelsSection';
import { EditorialSection } from '@/components/home/EditorialSection';
import { FAQSection } from '@/components/home/FAQSection';
import { NewsletterSection } from '@/components/home/NewsletterSection';
import { SeoLinksSection } from '@/components/home/SeoLinksSection';
import { Footer } from '@/components/home/Footer';

export default function MultitravelHomePage() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Nunito', sans-serif" }}>
      {/* 1. Header — barra blanca independiente (Figma: node 9436:14691) */}
      <Header />

      {/* 2. Hero + Search — sección azul con buscador */}
      <HeroSearch />

      {/* 2. Promociones */}
      <PromoCarousel />

      {/* 3. Reviews */}
      <ReviewsSection />

      {/* 4. Paquetes */}
      <PackagesSection />

      {/* 5. Vuelos */}
      <FlightOffersSection />

      {/* 6. Hoteles */}
      <HotelsSection />

      {/* 7. Editorial */}
      <EditorialSection />

      {/* 8. FAQ */}
      <FAQSection />

      {/* 9. Newsletter */}
      <NewsletterSection />

      {/* 10. SEO Links */}
      <SeoLinksSection />

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}
