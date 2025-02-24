// import { BGShapeCircle } from "@/components/bg-shape-circle";
import { Button } from "@/components/ui/button";
import { Hero } from "@/types/landing";
import Link from "next/link";

export default function ({ hero }: { hero: Hero }) {
  if (hero.disabled) {
    return;
  }

  return (
    <div className="relative min-h-[80vh] mb-8 sm:mb-12">
      {/* 背景图片 */}
      <div className="absolute inset-0">
        <img
          src="/imgs/image42.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* 主要内容 */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full px-4 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-32">
        <div className="relative overflow-hidden
              mx-auto
              w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] max-w-6xl
              p-6 sm:p-8 lg:p-12
              rounded-3xl
              mb-8 sm:mb-12 lg:mb-16">
            {/* 主背景 - 深色半透明 */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
            
            {/* 渐变光效 */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
            
            {/* 内容 */}
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-white mb-4 sm:mb-6 text-center">
                {hero.title}
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 text-center">
                {hero.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
