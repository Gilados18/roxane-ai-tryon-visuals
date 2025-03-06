
import React from 'react';
import { Shirt, ShoppingBag, Smartphone, Building2, Instagram, Image } from 'lucide-react';

const targetAudiences = [
  {
    icon: <Shirt size={32} />,
    title: "בעלי חנויות אופנה ואקססוריז",
  },
  {
    icon: <ShoppingBag size={32} />,
    title: "מותגי נעליים",
  },
  {
    icon: <Building2 size={32} />,
    title: "חנויות אונליין שמוכרות מוצרים פיזיים",
  },
  {
    icon: <Smartphone size={32} />,
    title: "סוחרי איקומרס שרוצים להציג מוצרים באופן מקצועי וללא מאמץ",
  },
  {
    icon: <Instagram size={32} />,
    title: "בעלי חנויות אינסטגרם שרוצים תוכן מושך יותר",
  },
  {
    icon: <Image size={32} />,
    title: "בעלי עסק שמעוניינים בתוכן איכותי לסושיאל ללא עלויות צילום",
  },
];

const ForWhoSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold gradient-text mb-6">🎯 למי זה מתאים?</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-roxane-dark to-roxane-light rounded-full mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {targetAudiences.map((audience, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-2xl hover:shadow-lg transition-all duration-300 flex items-center gap-4 animate-slide-up opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-roxane">{audience.icon}</div>
              <h3 className="text-lg font-medium">{audience.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
