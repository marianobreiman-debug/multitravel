import { Header } from '@/components/home/Header';
import { CountryPageSkeleton } from '@/components/home/vuelos/Skeleton';

export default function CountryPageLoading() {
  return (
    <div style={{ minHeight: '100vh', background: '#F4F6F8' }}>
      <Header />
      <CountryPageSkeleton />
    </div>
  );
}
