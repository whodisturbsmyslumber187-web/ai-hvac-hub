import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBanner from "@/components/TrustBanner";
import ServicesSection from "@/components/ServicesSection";
import MaintenancePricing from "@/components/MaintenancePricing";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { EmergencyBanner, FirstTimePopup, ExitIntentPopup } from "@/components/LeadPopups";

const Index = () => (
  <main>
    <EmergencyBanner />
    <Navbar />
    <HeroSection />
    <TrustBanner />
    <ServicesSection />
    <MaintenancePricing />
    <AboutSection />
    <TestimonialsSection />
    <LeadCaptureSection />
    <CTABanner />
    <Footer />
    <FloatingButtons />
    <FirstTimePopup />
    <ExitIntentPopup />
  </main>
);

export default Index;
