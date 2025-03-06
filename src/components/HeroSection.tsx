
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
                <span className="gradient-text">ROXANE AI</span>
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
              ROXANE AI מאפשרת לך לייצר תמונות מקצועיות של המוצרים שלך באמצעות בינה מלאכותית מתקדמת, ללא צורך בצילומים יקרים או בדוגמנים וימי צילום. בין אם אתה מוכר נעליים, בגדים, אקססוריז או כל מוצר פיזי אחר – עכשיו תוכל להציג אותם בצורה המושכת ביותר בקלות ובמהירות בכמה דקות בלבד.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#early-access" 
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-roxane-dark to-roxane text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group relative overflow-hidden button-shine"
              >
                <span className="relative z-10">התחילו עכשיו - 50 ראשונים בלבד במחיר ניסיון</span>
                <ArrowLeft size={18} className="mr-2 transition-transform duration-300 group-hover:-translate-x-1 relative z-10" />
                {/* Button shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000"></div>
              </a>
              
              <a 
                href="#features" 
                className="glass-button px-8 py-3 rounded-lg text-gray-800 font-medium flex items-center justify-center hover:scale-105 transition-transform duration-300"
              >
                גלה עוד
              </a>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className={`relative ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <div className="relative z-10 floating-element">
              <div className="glass-card rounded-2xl overflow-hidden shadow-xl border-2 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                  alt="Roxane AI virtual try-on" 
                  className="w-full h-auto rounded-xl object-cover"
                />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="glass-card rounded-lg p-4">
                    <p className="text-gray-800 font-medium">תמונות מוצר מקצועיות</p>
                    <p className="text-gray-600 text-sm">AI מתקדם ליצירת תוכן</p>
                  </div>
                </div>
                
                <div className="absolute top-4 right-4 glass-card rounded-full px-4 py-1 flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-800">טכנולוגיית AI</span>
                </div>
              </div>
            </div>
            
            {/* Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
