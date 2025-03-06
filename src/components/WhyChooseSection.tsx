
import React from 'react';
import { Check } from 'lucide-react';

const WhyChooseSection = () => {
  return (
    <section id="features" className="py-16 px-6 md:px-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold gradient-text mb-6">✅ למה לבחור ב-ROXANE?</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-roxane-dark to-roxane-light rounded-full mx-auto"></div>
        </div>

        {/* Background Elements */}
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute top-20 -right-40 w-80 h-80 bg-roxane-light/20 rounded-full filter blur-3xl opacity-20"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {[
            {
              title: "מראה מקצועי",
              description: "תמונות איכותיות מגדילות מכירות ומשדרות אמינות."
            },
            {
              title: "חיסכון בזמן ובכסף",
              description: "בלי צורך בסטודיו, צלמים ודוגמנים."
            },
            {
              title: "התאמה אישית מלאה",
              description: "שליטה בסגנון, רקעים ותאורה."
            },
            {
              title: "שימוש פשוט ומהיר",
              description: "העלה תמונה → קבל תמונות משודרגות תוך שניות!"
            }
          ].map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-2xl flex items-start gap-4 transform transition-all duration-500 hover:shadow-lg"
              data-aos="fade-up"
              data-aos-delay={100 * index}
            >
              <div className="flex-shrink-0 bg-gradient-to-r from-roxane-dark to-roxane-light rounded-full p-2 text-white">
                <Check size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
