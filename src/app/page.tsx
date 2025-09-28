import NavigationBar from "@/components/sections/navigation-bar";
import HeroSection from "@/components/sections/hero-section";
import MortgageSolutionsSection from "@/components/sections/mortgage-solutions-section";
import CtaBannerSection from "@/components/sections/cta-banner-section";
import RecentListings from "@/components/sections/recent-listings";
import AboutSection from "@/components/sections/about-section";
import CeoVideoSection from "@/components/sections/ceo-video-section";
import ProcessSection from "@/components/sections/process-section";
import ServicesSection from "@/components/sections/services-section";
import WhyChooseSection from "@/components/sections/why-choose-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import CtaSection from "@/components/sections/cta-section";
import FaqSection from "@/components/sections/faq-section";
import ContactUsSection from "@/components/sections/contact-us-section";
import FooterSection from "@/components/sections/footer-section";

export default function HomePage() {
  return (
    <>
      <NavigationBar />
      <main>
        <HeroSection />
        <MortgageSolutionsSection />
        <CtaBannerSection />
        {/* <RecentListings /> */}
         {/* <div className="bg-background py-[120px]">
          <div className="container mx-auto px-5 md:px-10 lg:px-20">
            <div className="flex flex-col gap-[120px]">
              <AboutSection />
              <CeoVideoSection />
            </div>
          </div>
        </div>  */}
           <WhyChooseSection />
        <ProcessSection />
        <ServicesSection />
        <FaqSection />
        {/* <TestimonialsSection /> */}
        <ContactUsSection />
        <CtaSection />
      
      </main>
      <FooterSection />
    </>
  );
}