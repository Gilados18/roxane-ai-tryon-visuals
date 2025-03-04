
import { Camera, ShoppingCart, Cpu, Sparkles } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Feature = ({ icon, title, description, delay }: FeatureProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div 
      ref={ref}
      className={`glass-card rounded-xl p-6 transition-all duration-500 h-full ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} 
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="rounded-lg p-3 inline-flex items-center justify-center bg-gradient-to-br from-roxane to-roxane-dark text-white mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section id="features" className="py-20 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Background Elements */}
        <div className="absolute top-20 -left-10 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-40"></div>
        <div className="absolute bottom-20 -right-10 w-64 h-64 bg-roxane-light/30 rounded-full filter blur-3xl opacity-30"></div>
        
        <div 
          ref={ref}
          className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white shadow-sm mb-4">
            <Sparkles size={16} className="text-roxane ml-2" />
            <span className="text-sm font-medium text-gray-800">טכנולוגיית AI מתקדמת</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">איך רוקסן יכולה</span> לשפר את העסק שלך
          </h2>
          
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            הפלטפורמה שלנו משלבת מדידה וירטואלית בזמן אמת עם צילומי מוצר באיכות גבוהה
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Feature 
            icon={<Cpu size={24} />}
            title="מדידה וירטואלית מתקדמת"
            description="טכנולוגיית AI מאפשרת ללקוחות למדוד בגדים באופן וירטואלי, בדיוק מרבי ובתצוגה תלת ממדית."
            delay={100}
          />
          
          <Feature 
            icon={<Camera size={24} />}
            title="תמונות מוצר איכותיות"
            description="צילומי מוצר באיכות מקצועית המותאמים לשיווק ברשתות החברתיות ובחנויות מקוונות."
            delay={300}
          />
          
          <Feature 
            icon={<ShoppingCart size={24} />}
            title="אינטגרציה מלאה לחנות"
            description="התממשקות קלה עם Shopify, WooCommerce ופלטפורמות מסחר אלקטרוני נוספות."
            delay={500}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
