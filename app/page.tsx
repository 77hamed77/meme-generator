"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(false);

  // التحقق من الوضع المفضل عند التحميل
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen transition-colors duration-300 bg-sham-light dark:bg-sham-dark text-gray-900 dark:text-white flex flex-col items-center py-10 px-4">
        
        {/* الشريط العلوي وزر التبديل */}
        <div className="w-full max-w-4xl flex justify-between items-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-sham-blue dark:text-sham-gold">
            🎓 صانع ميمز الجامعة
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-3 rounded-full bg-white dark:bg-sham-blue shadow-md border-2 border-sham-gold hover:scale-110 transition-transform"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 w-full max-w-6xl">
          
          {/* قسم الإدخال (يسار الشاشة في الشاشات الكبيرة) */}
          <div className="flex-1 bg-white dark:bg-sham-blue p-8 rounded-2xl shadow-xl border-t-4 border-sham-gold h-fit">
            <h2 className="text-xl font-bold mb-6 text-sham-blue dark:text-white border-b border-gray-200 dark:border-gray-600 pb-2">
              إعدادات التصميم
            </h2>

            <div className="space-y-6">
              {/* رفع الصورة */}
              <div>
                <label className="block mb-2 text-sm font-bold text-sham-gold">1. اختر الصورة</label>
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleImageUpload}
                  className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2.5 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-bold
                    file:bg-sham-gold file:text-white
                    hover:file:bg-yellow-600
                    cursor-pointer border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800"
                />
              </div>

              {/* النصوص */}
              <div>
                <label className="block mb-2 text-sm font-bold text-sham-gold">2. النص العلوي</label>
                <input 
                  type="text" 
                  placeholder="اكتب هنا..." 
                  value={topText}
                  onChange={(e) => setTopText(e.target.value)}
                  className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 focus:border-sham-gold focus:ring-1 focus:ring-sham-gold outline-none transition-all"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-bold text-sham-gold">3. النص السفلي</label>
                <input 
                  type="text" 
                  placeholder="...أو هنا" 
                  value={bottomText}
                  onChange={(e) => setBottomText(e.target.value)}
                  className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 focus:border-sham-gold focus:ring-1 focus:ring-sham-gold outline-none transition-all"
                />
              </div>
            </div>
          </div>

          {/* قسم العرض (يمين الشاشة) */}
          <div className="flex-1 flex justify-center items-start">
            <div className="relative bg-black border-8 border-sham-gold rounded-xl overflow-hidden shadow-2xl w-full max-w-lg aspect-square flex items-center justify-center bg-stripes">
              
              {image ? (
                <>
                  <img src={image} alt="Meme Preview" className="w-full h-full object-contain" />
                  
                  <h2 className="absolute top-4 left-0 w-full text-center text-3xl md:text-5xl font-black text-white uppercase tracking-wide px-2 break-words leading-tight pointer-events-none"
                      style={{ textShadow: "3px 3px 0 #000, -3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000" }}>
                    {topText}
                  </h2>

                  <h2 className="absolute bottom-4 left-0 w-full text-center text-3xl md:text-5xl font-black text-white uppercase tracking-wide px-2 break-words leading-tight pointer-events-none"
                      style={{ textShadow: "3px 3px 0 #000, -3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000" }}>
                    {bottomText}
                  </h2>
                </>
              ) : (
                <div className="text-center p-6">
                  <span className="text-6xl mb-4 block">🖼️</span>
                  <p className="text-gray-400 font-medium">اختر صورة لتبدأ التصميم</p>
                </div>
              )}
            </div>
          </div>

        </div>
        
        {/* تذييل الصفحة */}
        <footer className="mt-12 text-sham-blue dark:text-sham-gold text-sm font-semibold opacity-80">
          © 2025 جامعة الشام العالمية
        </footer>

      </div>
    </div>
  );
}