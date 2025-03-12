import { ThemeProvider } from "./ThemeProvider";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProductsSection from "./ProductsSection";
import PricingSection from "./PricingSection";
import TestimonialsSection from "./TestimonialsSection";
import ConsultationForm from "./ConsultationForm";
import Footer from "./Footer";
import { Toaster } from "@/components/ui/toaster";

export default function SleepCoachLanding() {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen bg-white dark:bg-gray-950 font-sans">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ProductsSection />
          <TestimonialsSection />
          <PricingSection />
          <ConsultationForm />
        </main>
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}
