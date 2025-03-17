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
import { motion } from "framer-motion";
import PromoImage from "@/components/marketing/PromoImage";

export default function SleepCoachLanding() {
  return (
    <ThemeProvider defaultTheme="light">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen bg-gradient-to-br from-white to-blue-50 dark:from-gray-950 dark:to-indigo-950 font-sans"
      >
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ProductsSection />
          <TestimonialsSection />
          <PricingSection />
          <div className="container mx-auto px-4 py-16">
            <PromoImage />
          </div>
        </main>
        <Footer />
        <Toaster />
      </motion.div>
    </ThemeProvider>
  );
}
