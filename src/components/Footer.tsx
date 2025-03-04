
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-12 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <img src="/lovable-uploads/c91036bf-bcc8-4fe5-9019-6ece6f90f143.png" alt="Roxane AI" className="h-10 mb-4" />
            <p className="text-gray-700 mb-6 max-w-md">
              רוקסן מספקת פתרונות מדידה וירטואלית מבוססי AI לעסקי מסחר אלקטרוני, המאפשרים ללקוחות למדוד בגדים באופן וירטואלי.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-roxane-dark/10 text-roxane-dark hover:bg-roxane-dark hover:text-white transition-all duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-roxane-dark/10 text-roxane-dark hover:bg-roxane-dark hover:text-white transition-all duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-roxane-dark/10 text-roxane-dark hover:bg-roxane-dark hover:text-white transition-all duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-roxane-dark/10 text-roxane-dark hover:bg-roxane-dark hover:text-white transition-all duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">קישורים מהירים</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-gray-700 hover:text-roxane transition-colors">מאפיינים</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-700 hover:text-roxane transition-colors">לקוחות מרוצים</a>
              </li>
              <li>
                <a href="#early-access" className="text-gray-700 hover:text-roxane transition-colors">שימוש מוקדם</a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-roxane transition-colors">אודות</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">צור קשר</h3>
            <ul className="space-y-3">
              <li className="text-gray-700">
                contact@roxane-ai.com
              </li>
              <li className="text-gray-700">
                תל אביב, ישראל
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-roxane transition-colors">מדיניות פרטיות</a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-roxane transition-colors">תנאי שימוש</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600 flex items-center justify-center">
            <span>© 2023 רוקסן AI. כל הזכויות שמורות.</span>
            <Heart size={16} className="mx-2 text-roxane" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
