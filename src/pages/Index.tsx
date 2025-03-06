
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
    document.title = "Roxane AI - צרו תמונות מוצר מושלמות בלחיצת כפתור";
    
    // Add Font Awesome for social icons
    const script = document.createElement("script");
    script.src = "https://kit.fontawesome.com/a076d05399.js";
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);
    
    // Initialize advanced scroll animations
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-active');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.15,
      rootMargin: '0px 0px -10% 0px' 
    });
    
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
