import NavigationBar from "@/components/sections/navigation-bar";
import HeroSection from "@/components/sections/hero-section";
 import MortgageSolutionsSection from "@/components/sections/mortgage-solutions-section";
 import ServicesSection from "@/components/sections/services-section";
import FaqSection from "@/components/sections/faq-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
 import ContactUsSection from "@/components/sections/contact-us-section";
import FooterSection from "@/components/sections/footer-section";

export default function HomePage() {
  return (
    <>
      <NavigationBar />
      <main>
        <HeroSection />
         <MortgageSolutionsSection />
        <ServicesSection />
        <FaqSection />
        <TestimonialsSection />
        <ContactUsSection />
      </main>
      <FooterSection />
    </>
  );
}