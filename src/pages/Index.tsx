
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ForWhoSection from "@/components/ForWhoSection";
import BusinessImprovementSection from "@/components/BusinessImprovementSection";
import BenefitsDetailSection from "@/components/BenefitsDetailSection";
import FinalCTASection from "@/components/FinalCTASection";
import EarlyAccessSection from "@/components/EarlyAccessSection";

const Index = () => {
  useEffect(() => {
    // Set page title and description
    document.title = "ROXANE AI - צרו תמונות מוצר מושלמות בלחיצת כפתור";
    
    // Add Font Awesome for social icons
    const script = document.createElement("script");
    script.src = "https://kit.fontawesome.com/a076d05399.js";
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);
    
    // Initialize animations
    const animatedElements = document.querySelectorAll('.animate-slide-up');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => observer.observe(el));
    
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      <HeroSection />
      <WhyChooseSection />
      <HowItWorksSection />
      <ForWhoSection />
      <BusinessImprovementSection />
      <BenefitsDetailSection />
      <FinalCTASection />
      <EarlyAccessSection />
    </div>
  );
};

export default Index;
