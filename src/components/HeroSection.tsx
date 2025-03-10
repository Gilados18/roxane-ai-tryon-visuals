
import { useState, useEffect } from 'react';
import { ArrowLeft, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-32 pb-20 px-6 md:px-12 min-h-screen flex flex-col justify-center bg-gradient-to-b from-white to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative">
        {/* Background Elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-200 rounded-full filter blur-3xl opacity-20 animate-pulse-light"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-roxane-light rounded-full filter blur-3xl opacity-20 animate-pulse-light"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-purple-100 shadow-sm">
              <Sparkles size={18} className="text-roxane ml-2" />
              <span className="text-sm font-medium text-gray-800">בלעדי: 50 המצטרפים הראשונים</span>
            </div>
            
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-text">Roxane AI</span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold">צרו תמונות מוצר מושלמות בלחיצת כפתור</h2>
              
              {/* Animated gradient underline */}
              <div className="relative h-2 w-48 mt-2 overflow-hidden rounded-full">
                <div className="absolute inset-0 bg-gradient-to-r from-roxane-dark via-roxane to-roxane-light animate-shimmer"></div>
              </div>
            </div>
            
            <h3 className="text-xl md:text-2xl text-gray-800 font-medium">
              מהפכה בעולם הוויזואלי לאיקומרס וחנויות פיזיות!
            </h3>
            
            <p className="text-lg md:text-xl text-gray-700 max-w-lg">
              Roxane AI מאפשרת לך לייצר תמונות מקצועיות של המוצרים שלך באמצעות בינה מלאכותית מתקדמת, ללא צורך בצילומים יקרים או בדוגמנים וימי צילום. בין אם אתה מוכר נעליים, בגדים, אקססוריז או כל מוצר פיזי אחר – עכשיו תוכל להציג אותם בצורה המושכת ביותר בקלות ובמהירות בכמה דקות בלבד.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#early-access" 
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-roxane-dark to-roxane text-white font-medium shadow-lg transition-all duration-300 flex items-center justify-center group relative overflow-hidden"
              >
                <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">התחילו עכשיו - 50 ראשונים בלבד במחיר ניסיון</span>
                <ArrowLeft size={18} className="mr-2 transition-transform duration-300 group-hover:-translate-x-1 relative z-10" />
                
                {/* Modern gradient hover effect */}
                <span className="absolute inset-0 bg-gradient-to-tr from-roxane-dark via-roxane to-roxane-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></span>
                
                {/* Modern shimmer effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out"></span>
              </a>
              
              <a 
                href="#features" 
                className="relative overflow-hidden px-8 py-3 rounded-lg text-gray-800 font-medium flex items-center justify-center group"
              >
                <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">גלה עוד</span>
                
                {/* Glass morphism background that changes on hover */}
                <span className="absolute inset-0 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg transition-all duration-300 group-hover:bg-white/30 group-hover:shadow-lg"></span>
                
                {/* Subtle border animation */}
                <span className="absolute inset-0 rounded-lg border border-roxane/0 group-hover:border-roxane/30 transition-all duration-500"></span>
              </a>
            </div>
          </div>
          
          {/* Hero Image - Larger without border */}
          <div className={`relative ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <div className="relative z-10 floating-element w-[120%] max-w-[600px] mx-auto">
              <img 
                src="/lovable-uploads/ac34a626-2c5f-4edc-bf70-12dcf37dd227.png" 
                alt="Roxane AI virtual try-on" 
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            
            {/* Enhanced Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
