import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import FaqAccordion from "./components/FaqAccordion";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <Features />
      <Testimonials />
      <FaqAccordion />
      <ContactSection />
      <Footer />
    </div>
  );
}