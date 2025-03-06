
import { useState, useEffect, useRef } from 'react';
import { CheckCircle, AlertTriangle, Sparkles } from 'lucide-react';

const MAX_SPOTS = 50;
const INITIAL_SPOTS_TAKEN = 37; // Starting with 37 spots taken, 13 left

const EarlyAccessSection = () => {
  const [spotsLeft, setSpotsLeft] = useState(MAX_SPOTS - INITIAL_SPOTS_TAKEN);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [business, setBusiness] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isRegistrationClosed, setIsRegistrationClosed] = useState(spotsLeft <= 0);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      setSpotsLeft(prev => {
        const newSpotsLeft = Math.max(0, prev - 1);
        if (newSpotsLeft <= 0) {
          setIsRegistrationClosed(true);
        }
        return newSpotsLeft;
      });
      
      setIsSubmitted(true);
      setName('');
      setEmail('');
      setBusiness('');
      
      // Reset form state after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section id="early-access" className="py-20 px-6 md:px-12 bg-gradient-to-b from-purple-50 to-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 bg-roxane/5 filter blur-3xl"></div>
        
        <div className="glass-card rounded-2xl overflow-hidden shadow-xl border border-white/50 p-8 md:p-10 relative z-10 animate-on-scroll opacity-0" data-animation="fade-up">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-roxane/10 mb-4">
              <Sparkles size={16} className="text-roxane ml-2" />
              <span className="text-sm font-medium text-roxane">הצטרפות מוקדמת</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">הירשמו לגישה מוקדמת</span>
            </h2>
            
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              אנו מציעים גישה בלעדית ל-50 העסקים הראשונים שירשמו. הקדימו להירשם לפני שכל המקומות יתמלאו!
            </p>
          </div>
          
          {isRegistrationClosed ? (
            <div className="text-center py-8 glass-card rounded-xl animate-on-scroll opacity-0" data-animation="fade-up">
              <AlertTriangle size={48} className="mx-auto mb-4 text-amber-500" />
              <h3 className="text-2xl font-bold mb-2">ההרשמה הסתיימה!</h3>
              <p className="text-gray-700">
                כל המקומות לגישה מוקדמת התמלאו. השאירו את פרטיכם ונעדכן אתכם כשנפתח הרשמה נוספת.
              </p>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
                <div className="animate-on-scroll opacity-0" data-animation="fade-up" style={{ transitionDelay: '100ms' }}>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">שם מלא</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-roxane focus:border-roxane transition-all duration-300"
                    placeholder="השם המלא שלך"
                    required
                  />
                </div>
                
                <div className="animate-on-scroll opacity-0" data-animation="fade-up" style={{ transitionDelay: '200ms' }}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">כתובת אימייל</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-roxane focus:border-roxane transition-all duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div className="animate-on-scroll opacity-0" data-animation="fade-up" style={{ transitionDelay: '300ms' }}>
                  <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-2">סוג העסק</label>
                  <input
                    type="text"
                    id="business"
                    value={business}
                    onChange={(e) => setBusiness(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-roxane focus:border-roxane transition-all duration-300"
                    placeholder="תאר את העסק שלך"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full py-4 rounded-lg bg-gradient-to-r from-roxane-dark to-roxane text-white font-medium shadow-lg transition-all duration-300 flex items-center justify-center group relative overflow-hidden animate-on-scroll opacity-0"
                  data-animation="fade-up"
                  style={{ transitionDelay: '400ms' }}
                >
                  <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">הרשמה לגישה מוקדמת</span>
                  
                  {/* Modern gradient hover effect */}
                  <span className="absolute inset-0 bg-gradient-to-tr from-roxane-dark via-roxane to-roxane-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></span>
                  
                  {/* Modern shimmer effect */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out"></span>
                </button>
              </form>
            </>
          )}
          
          {isSubmitted && (
            <div className="absolute inset-0 bg-white/95 backdrop-blur-sm flex items-center justify-center z-20 animate-fade-in">
              <div className="text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
                  <CheckCircle size={32} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">תודה על הרשמתך!</h3>
                <p className="text-gray-700">
                  נשלח לך דוא"ל עם פרטים נוספים בקרוב.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EarlyAccessSection;
