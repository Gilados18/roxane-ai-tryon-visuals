
import React from 'react';
import { Check } from 'lucide-react';

const benefits = [
  {
    title: "💎 תמונות מציאותיות שמוכרות יותר",
    items: [
      "יצירת תמונות באיכות גבוהה שמשקפות את המוצר באופן מקצועי ואטרקטיבי.",
      "מסייע בהפחתת התלבטויות של לקוחות ומגביר רכישות."
    ]
  },
  {
    title: "💸 יותר מכירות, פחות מאמץ",
    items: [
      "הצגת מוצרים בצורה מקצועית ללא סטודיו או צלם.",
      "חוויית רכישה טובה – תמונות שמחזקות את הביטחון של הלקוחות.",
      "הקטנת החזרות עם הדמיות מדויקות."
    ]
  },
  {
    title: "💰 חיסכון משמעותי בהוצאות צילום",
    items: [
      "אין צורך בשכירת צלם או צוות הפקה – ROXANE מייצרת עבורך את התמונות.",
      "תהליך מהיר שמאפשר לעדכן את הקטלוג שלך ללא השקעה גדולה."
    ]
  },
  {
    title: "🎨 יצירת תמונות בהתאמה אישית",
    items: [
      "מתאים לכל עסק – אופנה, נעליים, אקססוריז, מוצרים לבית ועוד.",
      "שליטה על סגנון התמונה והתאמתה למותג שלך.",
      "שימוש נוח – העלה תמונה וקבל תוצאה מקצועית תוך שניות."
    ]
  },
  {
    title: "⚡ חסכון בזמן – תמונות מוכנות תוך שניות",
    items: [
      "לא צריך להמתין לגרפיקאים או ימי צילום – הכל זמין באופן מיידי.",
      "קבל תמונות מוכנות ישירות לחנות או לרשתות החברתיות."
    ]
  },
  {
    title: "⏳ מהירות שיא – תמונות מקצועיות תוך שניות",
    items: [
      "לא צריך לחכות לגרפיקאי – תמונות מוכנות תוך רגעים ספורים!",
      "חסוך זמן, הגדל מכירות, שלוט בשיווק שלך בקלות."
    ]
  }
];

const BenefitsDetailSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="glass-card p-8 rounded-2xl animate-slide-up opacity-0"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
              <div className="space-y-3">
                {benefit.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 bg-gradient-to-r from-roxane-dark to-roxane-light rounded-full p-1 text-white mt-1">
                      <Check size={16} />
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#early-access" 
            className="inline-block px-10 py-4 rounded-xl bg-gradient-to-r from-roxane-dark to-roxane text-white font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-light"
          >
            🔻 נסו את ROXANE עכשיו – במחיר ניסיון וללא התחייבות!
          </a>
        </div>
      </div>
    </section>
  );
};

export default BenefitsDetailSection;
