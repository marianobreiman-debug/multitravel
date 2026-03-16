import { Header } from '@/components/home/Header';
import { DestinationPageSkeleton } from '@/components/home/vuelos/Skeleton';

export default function DestinationPageLoading() {
  return (
    <div style={{ minHeight: '100vh', background: '#F4F6F8' }}>
      <Header />
      <DestinationPageSkeleton />
    </div>
  );
}
