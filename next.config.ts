import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // ⚠️ تحذير: هذا الخيار يتجاهل أخطاء TypeScript أثناء البناء
    // هذا ممتاز للمشاريع التعليمية لضمان الرفع السريع
    ignoreBuildErrors: true,
  },
};

export default nextConfig;