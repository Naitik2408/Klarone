import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import StepsSection from "@/components/sections/StepsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import TopSoldSection from "@/components/sections/TopSoldSection";
import StatsSection from "@/components/sections/StatsSection";
import PricingSection from "@/components/sections/PricingSection";
import CtaSection from "@/components/sections/CtaSection";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white text-black overflow-hidden">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <StepsSection />
        <ServicesSection />
        <FeaturesSection />
        <TopSoldSection />
        <PricingSection />
        <StatsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
