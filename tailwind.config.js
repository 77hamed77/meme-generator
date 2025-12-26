/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // تفعيل الوضع الليلي اليدوي
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sham: {
          blue: '#183b65',   // أزرق الشام الرئيسي
          dark: '#082c58',   // أزرق غامق (خلفية الداكن)
          gold: '#b9955c',   // الذهبي (لون التمييز)
          light: '#f5f8ff',  // أزرق فاتح جداً (خلفية الفاتح)
        }
      }
    },
  },
  plugins: [],
}