import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="gradient-text text-2xl font-bold">Roxane AI</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 space-x-reverse">
          <a href="#features" className="text-gray-800 hover:text-roxane transition-colors duration-300 font-medium">
            מאפיינים
          </a>
          <a href="#how-it-works" className="text-gray-800 hover:text-roxane transition-colors duration-300 font-medium">
            איך זה עובד
          </a>
          <a href="#early-access" className="text-gray-800 hover:text-roxane transition-colors duration-300 font-medium">
            שימוש מוקדם
          </a>
          <a 
            href="#early-access" 
            className="gradient-border px-5 py-2 rounded-lg bg-gradient-to-r from-roxane-dark to-roxane text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            הירשם עכשיו
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg py-4 px-6 flex flex-col space-y-4 animate-fade-in">
          <a 
            href="#features" 
            className="text-gray-800 hover:text-roxane transition-colors duration-300 font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            מאפיינים
          </a>
          <a 
            href="#how-it-works" 
            className="text-gray-800 hover:text-roxane transition-colors duration-300 font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            איך זה עובד
          </a>
          <a 
            href="#early-access" 
            className="text-gray-800 hover:text-roxane transition-colors duration-300 font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            שימוש מוקדם
          </a>
          <a 
            href="#early-access" 
            className="gradient-border w-full text-center px-5 py-2 rounded-lg bg-gradient-to-r from-roxane-dark to-roxane text-white shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            הירשם עכשיו
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
