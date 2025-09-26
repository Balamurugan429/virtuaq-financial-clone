import Navigation from '@/components/sections/navigation';
import HeroSection from '@/components/sections/hero';
import QueueManagementIntro from '@/components/sections/queue-management-intro';
import FeaturesOverview from '@/components/sections/features-overview';
import SmartQueueDetail from '@/components/sections/smart-queue-detail';
import EffortlessIntegrationSection from '@/components/sections/effortless-integration';
import OperationalEfficiency from '@/components/sections/operational-efficiency';
import PersonalizedBanking from '@/components/sections/personalized-banking';
import ContactForm from '@/components/sections/contact-form';
import DigitalBankingCarousel from '@/components/sections/digital-banking-carousel';
import UsedByBanks from '@/components/sections/used-by-banks';
import Footer from '@/components/sections/footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <QueueManagementIntro />
        <FeaturesOverview />
        <SmartQueueDetail />
        <EffortlessIntegrationSection />
        <OperationalEfficiency />
        <PersonalizedBanking />
        <ContactForm />
        <DigitalBankingCarousel />
        <UsedByBanks />
      </main>
      <Footer />
    </div>
  );
}