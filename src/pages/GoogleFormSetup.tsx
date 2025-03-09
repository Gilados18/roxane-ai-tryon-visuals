
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const GoogleFormSetup = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-roxane hover:underline">
            <ArrowLeft className="mr-2" size={16} />
            חזרה לדף הבית
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold mb-6">הגדרת טופס Google לשמירת פרטי לידים</h1>
        
        <div className="space-y-6">
          <section className="border-b border-gray-200 pb-6">
            <h2 className="text-2xl font-semibold mb-4">שלב 1: יצירת טופס Google חדש</h2>
            <ol className="list-decimal list-inside space-y-3">
              <li>היכנסו ל-<a href="https://docs.google.com/forms" target="_blank" rel="noopener noreferrer" className="text-roxane hover:underline">Google Forms</a>.</li>
              <li>צרו טופס חדש באמצעות לחיצה על סמל ה-"+" או בחירת תבנית ריקה.</li>
              <li>הוסיפו כותרת לטופס, למשל "רישום לקוחות מוקדם Roxane AI".</li>
            </ol>
          </section>
          
          <section className="border-b border-gray-200 pb-6">
            <h2 className="text-2xl font-semibold mb-4">שלב 2: הוספת שדות לטופס</h2>
            <ol className="list-decimal list-inside space-y-3">
              <li>הוסיפו שדה טקסט עבור "שם מלא".</li>
              <li>הוסיפו שדה אימייל עבור "כתובת אימייל".</li>
              <li>הוסיפו שדה טקסט עבור "סוג העסק".</li>
              <li>הגדירו את כל השדות כנדרשים באמצעות הפעלת האפשרות "נדרש".</li>
            </ol>
          </section>
          
          <section className="border-b border-gray-200 pb-6">
            <h2 className="text-2xl font-semibold mb-4">שלב 3: הגדרת אחסון התגובות</h2>
            <ol className="list-decimal list-inside space-y-3">
              <li>לחצו על הכרטיסייה "תגובות" בראש הטופס.</li>
              <li>לחצו על סמל Google Sheets (שלושה קווים אופקיים עם נקודות).</li>
              <li>בחרו "צור גיליון אלקטרוני חדש" או קשרו לגיליון קיים.</li>
              <li>הגיליון יפתח אוטומטית וישמור את כל התגובות העתידיות.</li>
            </ol>
          </section>
          
          <section className="border-b border-gray-200 pb-6">
            <h2 className="text-2xl font-semibold mb-4">שלב 4: אפשור שליחה ללא הרשאות</h2>
            <ol className="list-decimal list-inside space-y-3">
              <li>לחצו על סמל הגלגל (הגדרות) בפינה העליונה.</li>
              <li>תחת הכרטיסייה "כללי", ודאו שהאפשרות "הגבל למשתמשי הארגון" אינה מסומנת.</li>
              <li>שמרו את ההגדרות.</li>
            </ol>
          </section>
          
          <section className="border-b border-gray-200 pb-6">
            <h2 className="text-2xl font-semibold mb-4">שלב 5: קבלת כתובת הטופס ומזהי השדות</h2>
            <ol className="list-decimal list-inside space-y-3">
              <li>לחצו על "שלח" בחלק העליון של הטופס.</li>
              <li>העתיקו את קישור הטופס.</li>
              <li>לאיתור מזהי השדות:
                <ul className="list-disc list-inside ml-6 mt-2">
                  <li>בדפדפן, לחצו על "הצג מקור" בעמוד הטופס.</li>
                  <li>חפשו שדות עם השם "entry." ומספר (למשל entry.123456789).</li>
                  <li>אלו הם מזהי השדות שיש להכניס לקוד.</li>
                </ul>
              </li>
            </ol>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">שלב 6: עדכון הקוד באתר</h2>
            <ol className="list-decimal list-inside space-y-3">
              <li>פתחו את הקובץ <code className="bg-gray-100 px-2 py-1 rounded">src/components/EarlyAccessSection.tsx</code>.</li>
              <li>עדכנו את הקבועים הבאים:
                <ul className="list-disc list-inside ml-6 mt-2">
                  <li><code className="bg-gray-100 px-2 py-1 rounded">GOOGLE_FORM_URL</code>: הקישור לטופס שהעתקתם, אך שנו את הסיומת מ-<code>/viewform</code> ל-<code>/formResponse</code>.</li>
                  <li><code className="bg-gray-100 px-2 py-1 rounded">NAME_ENTRY</code>: מזהה שדה השם שמצאתם.</li>
                  <li><code className="bg-gray-100 px-2 py-1 rounded">EMAIL_ENTRY</code>: מזהה שדה האימייל שמצאתם.</li>
                  <li><code className="bg-gray-100 px-2 py-1 rounded">BUSINESS_ENTRY</code>: מזהה שדה סוג העסק שמצאתם.</li>
                </ul>
              </li>
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GoogleFormSetup;
