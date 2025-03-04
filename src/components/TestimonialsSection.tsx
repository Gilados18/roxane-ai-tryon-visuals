
import { useState, useEffect, useRef } from 'react';
import { Star, MessageSquare } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  comment: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "רוני לוי",
    position: "מנהלת",
    company: "אופנת אורבנית",
    comment: "רוקסן שינתה לחלוטין את האופן שבו הלקוחות שלנו חווים קניות מקוונות. ההחזרות ירדו ב-40% והמכירות עלו!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 2,
    name: "דניאל כהן",
    position: "בעלים",
    company: "דניאל אופנה",
    comment: "לקוחות מתלהבים מהיכולת למדוד בגדים וירטואלית לפני הרכישה. זהו כלי השיווק החדש הטוב ביותר שלנו.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 3,
    name: "מיכל אדלר",
    position: "סמנכ\"לית שיווק",
    company: "תווית אופנה",
    comment: "איכות התמונות וחווית המדידה הווירטואלית עולה על כל הציפיות. ממליצה בחום לכל חנות אינטרנטית.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

const TestimonialCard = ({ testimonial, delay }: { testimonial: Testimonial, delay: number }) => {
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
      className={`glass-card rounded-xl p-6 h-full ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} 
          />
        ))}
      </div>
      
      <p className="text-gray-700 mb-6 min-h-[100px]">{testimonial.comment}</p>
      
      <div className="flex items-center">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-medium">{testimonial.name}</h4>
          <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
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
    <section id="testimonials" className="py-20 px-6 md:px-12 bg-gradient-to-b from-white to-purple-50 relative">
      <div className="max-w-7xl mx-auto">
        {/* Background Elements */}
        <div className="absolute top-40 -right-20 w-72 h-72 bg-roxane-light/20 rounded-full filter blur-3xl"></div>
        
        <div 
          ref={ref}
          className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white shadow-sm mb-4">
            <MessageSquare size={16} className="text-roxane ml-2" />
            <span className="text-sm font-medium text-gray-800">לקוחות מרוצים</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ממה <span className="gradient-text">המשתמשים שלנו</span> מתלהבים
          </h2>
          
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            הצטרפו למאות עסקים שכבר משתמשים ברוקסן לשיפור חווית הקנייה המקוונת
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              delay={index * 200}
            />
          ))}
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-8 items-center">
          <img src="https://cdn.worldvectorlogo.com/logos/shopify.svg" alt="Shopify" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
          <img src="https://cdn.worldvectorlogo.com/logos/woocommerce.svg" alt="WooCommerce" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
          <img src="https://cdn.worldvectorlogo.com/logos/magento-2.svg" alt="Magento" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
          <img src="https://cdn.worldvectorlogo.com/logos/bigcommerce.svg" alt="BigCommerce" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
          <img src="https://cdn.worldvectorlogo.com/logos/prestashop.svg" alt="PrestaShop" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
