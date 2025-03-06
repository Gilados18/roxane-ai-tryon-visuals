
import React from 'react';

const steps = [
  {
    number: "1️⃣",
    title: "העלה תמונה של המוצר/בגד שלך",
    description: "תמונה בסיסית, אפילו שצולמה בסמארטפון."
  },
  {
    number: "2️⃣",
    title: "בחר את הסגנון הרצוי",
    description: "רקע נקי, דוגמנים וירטואליים, או כל סגנון אחר."
  },
  {
    number: "3️⃣",
    title: "קבל תמונה מוכנה לפרסום",
    description: "תוך שניות, עם מראה מושלם להגדלת מכירות."
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-16 px-6 md:px-12 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-on-scroll opacity-0" data-animation="fade-down">
          <h2 className="text-4xl font-bold gradient-text mb-6">🚀 איך זה עובד?</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-roxane-dark to-roxane-light rounded-full mx-auto"></div>
        </div>
        
        <div className="flex flex-col gap-8 max-w-2xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="glass-card p-8 rounded-2xl flex flex-col items-center animate-on-scroll opacity-0"
              data-animation="fade-up"
              style={{ transitionDelay: `${index * 250}ms` }}
            >
              <div className="text-5xl mb-4">{step.number}</div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-700 text-center">{step.description}</p>
              
              {/* Decorative line connecting to next step */}
              {index < steps.length - 1 && (
                <div className="relative w-1 h-10 bg-gradient-to-b from-roxane-dark to-roxane-light rounded-full mt-4 overflow-visible after:content-[''] after:absolute after:left-1/2 after:top-full after:w-3 after:h-3 after:rounded-full after:bg-roxane-light after:-translate-x-1/2 after:animate-pulse"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
