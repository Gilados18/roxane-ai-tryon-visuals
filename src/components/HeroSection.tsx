
import { useState, useEffect } from 'react';
import { ArrowLeft, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center py-24 md:py-32 px-6 md:px-8 lg:px-12 overflow-hidden bg-gradient-to-b from-white to-purple-50">
      {/* Background Elements - Enhanced */}
      <div className="absolute -top-20 -right-20 w-72 h-72 md:w-96 md:h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20 animate-pulse-light"></div>
      <div className="absolute top-40 -left-20 w-80 h-80 md:w-[32rem] md:h-[32rem] bg-roxane-light rounded-full filter blur-3xl opacity-20 animate-pulse-light"></div>
      <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-purple-100 rounded-full filter blur-3xl opacity-15 animate-pulse-light"></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text Content - Enhanced */}
          <div className={`space-y-8 md:space-y-10 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-purple-100 shadow-sm transition-all duration-300 hover:shadow-md">
              <Sparkles size={18} className="text-roxane mr-2" />
              <span className="text-sm font-medium text-gray-800">בלעדי: 50 המצטרפים הראשונים</span>
            </div>
            
            <div className="space-y-3">
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                <span className="gradient-text">Roxane AI</span>
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">צרו תמונות מוצר מושלמות בלחיצת כפתור</h2>
              
              {/* Enhanced gradient underline with animation */}
              <div className="relative h-2 w-48 mt-3 overflow-hidden rounded-full bg-gradient-to-r from-roxane-dark via-roxane to-roxane-light animate-shimmer"></div>
            </div>
            
            <h3 className="text-xl md:text-2xl text-gray-800 font-medium max-w-lg">
              מהפכה בעולם הוויזואלי לאיקומרס וחנויות פיזיות!
            </h3>
            
            <p className="text-lg text-gray-700 max-w-xl leading-relaxed">
              Roxane AI מאפשרת לך לייצר תמונות מקצועיות של המוצרים שלך באמצעות בינה מלאכותית מתקדמת, ללא צורך בצילומים יקרים או בדוגמנים וימי צילום. בין אם אתה מוכר נעליים, בגדים, אקססוריז או כל מוצר פיזי אחר – עכשיו תוכל להציג אותם בצורה המושכת ביותר בקלות ובמהירות בכמה דקות בלבד.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a 
                href="#early-access" 
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-roxane-dark to-roxane text-white font-medium text-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center group relative overflow-hidden"
              >
                <span className="relative z-10">התחילו עכשיו - 50 ראשונים בלבד</span>
                <ArrowLeft size={18} className="mr-2 transition-transform duration-300 group-hover:-translate-x-1 relative z-10" />
                
                {/* Modern gradient hover effect */}
                <span className="absolute inset-0 bg-gradient-to-tr from-roxane-dark via-roxane to-roxane-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></span>
                
                {/* Modern shimmer effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out"></span>
              </a>
              
              <a 
                href="#features" 
                className="relative overflow-hidden px-8 py-4 rounded-xl text-gray-800 font-medium text-lg flex items-center justify-center group border border-purple-100 hover:border-roxane/30 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <span className="relative z-10 transition-transform duration-300 group-hover:scale-105 group-hover:text-roxane">גלה עוד</span>
                
                {/* Glass morphism background that changes on hover */}
                <span className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-xl transition-all duration-300 group-hover:bg-white/70"></span>
              </a>
            </div>
          </div>
          
          {/* Hero Image - Enhanced with better positioning and effects */}
          <div className={`relative ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <div className="relative z-10 floating-element w-full max-w-[650px] mx-auto transform hover:scale-[1.02] transition-transform duration-700">
              <img 
                src="/lovable-uploads/ac34a626-2c5f-4edc-bf70-12dcf37dd227.png" 
                alt="Roxane AI virtual try-on" 
                className="w-full h-auto object-cover rounded-2xl"
              />
              
              {/* Subtle reflection effect */}
              <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-white/30 to-transparent rounded-b-2xl"></div>
            </div>
            
            {/* Enhanced Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-gradient-to-br from-roxane-light/30 via-roxane/20 to-roxane-dark/30 rounded-full filter blur-[80px] opacity-60 animate-pulse-light"></div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="hidden md:block absolute bottom-10 right-10 w-20 h-20 rounded-full bg-gradient-to-r from-roxane-light to-roxane opacity-20 blur-xl animate-float"></div>
      <div className="hidden md:block absolute top-20 right-1/3 w-8 h-8 rounded-full bg-roxane-dark opacity-20 blur-md animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default HeroSection;
