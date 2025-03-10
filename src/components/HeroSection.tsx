
import { useState, useEffect } from 'react';
import { ArrowLeft, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center py-24 md:py-32 px-6 md:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text Content - Slower animations */}
          <div 
            className={`space-y-8 md:space-y-10 transition-all duration-[1800ms] ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-purple-100 shadow-sm transition-all duration-2000 hover:shadow-md">
              <Sparkles size={18} className="text-roxane mr-2" />
              <span className="text-sm font-medium text-gray-800">בלעדי: 50 המצטרפים הראשונים</span>
            </div>
            
            <div className="space-y-3">
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                <span className="gradient-text">Roxane AI</span>
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">צרו תמונות מוצר מושלמות בלחיצת כפתור</h2>
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
                className="group px-8 py-4 rounded-xl bg-gradient-to-r from-roxane-dark to-roxane text-white font-medium text-lg transition-all duration-2000 hover:shadow-xl flex items-center justify-center relative overflow-hidden"
              >
                <span className="relative z-10">התחילו עכשיו - 50 ראשונים בלבד</span>
                <ArrowLeft size={18} className="mr-2 transition-transform duration-2000 group-hover:-translate-x-1 relative z-10" />
              </a>
              
              <a 
                href="#features" 
                className="relative overflow-hidden px-8 py-4 rounded-xl text-gray-800 font-medium text-lg flex items-center justify-center group border border-purple-100 transition-all duration-2000 hover:border-roxane/30 hover:shadow-md"
              >
                <span className="relative z-10 transition-transform duration-2000 group-hover:scale-105 group-hover:text-roxane">גלה עוד</span>
              </a>
            </div>
          </div>
          
          {/* Hero Image - Slower animations */}
          <div 
            className={`relative transition-all duration-[1800ms] ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative z-10 w-full max-w-[750px] mx-auto transform transition-transform duration-2000 hover:scale-[1.01]">
              <img 
                src="/lovable-uploads/ac34a626-2c5f-4edc-bf70-12dcf37dd227.png" 
                alt="Roxane AI virtual try-on" 
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
