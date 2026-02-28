import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBanner from "@/components/TrustBanner";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => (
  <main>
    <Navbar />
    <HeroSection />
    <TrustBanner />
    <ServicesSection />
    <AboutSection />
    <TestimonialsSection />
    <LeadCaptureSection />
    <CTABanner />
    <Footer />
    <FloatingButtons />
  </main>
);

export default Index;
