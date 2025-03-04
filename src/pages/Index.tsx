
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import EarlyAccessSection from "@/components/EarlyAccessSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Set page title and description
    document.title = "רוקסן AI - יצירת תמונת מוצר שסולקות באמצעות AI";
    
    // Add Font Awesome for social icons
    const script = document.createElement("script");
    script.src = "https://kit.fontawesome.com/a076d05399.js";
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);
    
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <EarlyAccessSection />
      <Footer />
    </div>
  );
};

export default Index;
