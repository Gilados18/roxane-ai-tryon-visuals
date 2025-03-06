
import React from 'react';
import { Sparkle } from 'lucide-react';

const FinalCTASection = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-gradient-to-b from-purple-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold gradient-text mb-6">🚀 נסו את ROXANE עכשיו – גישה מוקדמת!</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          👉 התחילו עכשיו וצפו כיצד ROXANE משדרגת את המוצרים שלכם בלחיצת כפתור!
        </p>
        
        <a 
          href="#early-access" 
          className="inline-block px-12 py-5 rounded-xl bg-gradient-to-r from-roxane-dark to-roxane text-white font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
        >
          <span className="relative z-10">התחילו עכשיו - 50 ראשונים בלבד במחיר ניסיון</span>
          
          {/* Button sparkle effect */}
          <Sparkle 
            className="absolute top-1/4 left-5 text-white opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:-translate-y-4 group-hover:scale-150" 
            size={20}
          />
          <Sparkle 
            className="absolute bottom-1/4 right-5 text-white opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:translate-y-4 group-hover:scale-150"
            size={20}
          />
          
          {/* Background animation effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000"></div>
        </a>
      </div>
      
      {/* Background Elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-200 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-10 -left-20 w-72 h-72 bg-roxane-light rounded-full filter blur-3xl opacity-20"></div>
    </section>
  );
};

export default FinalCTASection;
