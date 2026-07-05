import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PracticeAreas from "./components/PracticeAreas";
import Team from "./components/Team";
import SuccessCases from "./components/SuccessCases";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const sections = ["inicio", "areas", "equipa", "casos", "contacto"];
    
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          threshold: 0.2,
          rootMargin: "-20% 0px -60% 0px",
        }
      );

      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.el);
          obs.observer.disconnect();
        }
      });
    };
  }, []);

  const handleCtaClick = () => {
    const contactInput = document.getElementById("name");
    const contactSection = document.getElementById("contacto");
    if (contactSection) {
      const headerOffset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      // Delay focus slightly for smooth scroll to complete
      setTimeout(() => {
        if (contactInput) {
          contactInput.focus();
        }
      }, 800);
    }
  };

  return (
    <div className="min-h-screen bg-white text-text-main flex flex-col font-sans overflow-x-hidden">
      {/* Sticky Top Header */}
      <Header activeSection={activeSection} />

      {/* Main Page Flow */}
      <main className="flex-grow w-full">
        {/* Section 1: Hero (Ímpar) */}
        <section id="inicio" className="relative bg-white pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Hero onCtaClick={handleCtaClick} />
          </div>
        </section>

        {/* Section 2: Practice Areas (Par) */}
        <section id="areas" className="bg-[#F5F6F8] py-20 md:py-28 border-y border-gray-200/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <PracticeAreas />
          </div>
        </section>

        {/* Section 3: Team (Ímpar) */}
        <section id="equipa" className="bg-white py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Team />
          </div>
        </section>

        {/* Section 4: Success Cases (Par) */}
        <section id="casos" className="bg-[#F5F6F8] py-16 md:py-24 border-y border-gray-200/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SuccessCases />
          </div>
        </section>

        {/* Section 5: FAQ (Ímpar) */}
        <section className="bg-white py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FAQ />
          </div>
        </section>

        {/* Section 6: Contact Form (Par) */}
        <section id="contacto" className="bg-[#F5F6F8] py-20 md:py-28 border-t border-gray-200/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ContactForm />
          </div>
        </section>
      </main>

      {/* Brand Footer */}
      <Footer />
    </div>
  );
}
