
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
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold gradient-text mb-6">🚀 איך זה עובד?</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-roxane-dark to-roxane-light rounded-full mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`glass-card p-8 rounded-2xl text-center flex flex-col items-center animate-slide-up opacity-0`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-5xl mb-4">{step.number}</div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
              
              {/* Arrow to next step */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 z-10 text-roxane opacity-70">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
