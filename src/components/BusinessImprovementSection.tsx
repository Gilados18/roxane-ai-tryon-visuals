
import React from 'react';
import { Camera, Target, DollarSign } from 'lucide-react';

const improvements = [
  {
    icon: <Camera size={32} />,
    title: "תמונות מוצר איכותיות במהירות וללא צורך בצילום מקצועי",
  },
  {
    icon: <Target size={32} />,
    title: "הצגת מוצרים בצורה משכנעת שמובילה ליותר מכירות",
  },
  {
    icon: <DollarSign size={32} />,
    title: "חיסכון משמעותי בזמן ובעלויות הפקת תמונות",
  },
];

const BusinessImprovementSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold gradient-text mb-6">📈 איך רוקסן יכולה לשפר את העסק שלך</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-roxane-dark to-roxane-light rounded-full mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {improvements.map((item, index) => (
            <div 
              key={index} 
              className="glass-card p-8 rounded-2xl text-center flex flex-col items-center transition-all duration-300 hover:shadow-lg animate-slide-up opacity-0"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="bg-gradient-to-r from-roxane-dark to-roxane w-16 h-16 rounded-full flex items-center justify-center text-white mb-6">
                {item.icon}
              </div>
              <p className="text-xl font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessImprovementSection;
