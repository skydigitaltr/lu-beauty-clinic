import { ContactSection, CTASection, BeforeAfterSection, Footer, HeroSection, ServicesSection, TestimonialsSection, WhyChooseUsSection } from '@/components/sections';
import { Navbar } from '@/components/navbar';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <BeforeAfterSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  );
}
