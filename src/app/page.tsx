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
        <section id="hero" className="scroll-mt-[90px]"><HeroSection /></section>
        <section id="intro" className="scroll-mt-[90px]"><QueueManagementIntro /></section>
        <section id="features" className="scroll-mt-[90px]"><FeaturesOverview /></section>
        <section id="smart-queue" className="scroll-mt-[90px]"><SmartQueueDetail /></section>
        <section id="integration" className="scroll-mt-[90px]"><EffortlessIntegrationSection /></section>
        <section id="efficiency" className="scroll-mt-[90px]"><OperationalEfficiency /></section>
        <section id="personalized" className="scroll-mt-[90px]"><PersonalizedBanking /></section>
        <section id="contact" className="scroll-mt-[90px]"><ContactForm /></section>
        <section id="carousel" className="scroll-mt-[90px]"><DigitalBankingCarousel /></section>
        <section id="used-by" className="scroll-mt-[90px]"><UsedByBanks /></section>
      </main>
      <div id="footer"><Footer /></div>
    </div>
  );
}