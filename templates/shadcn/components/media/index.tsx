"use client";

// 直接导入 SVG 文件
import LianheLogo from "@/public/imgs/lianhe-logo.svg";
import NewsLogo from "@/public/imgs/new-logo-news.svg";
import BloombergLogo from "@/public/imgs/New_Bloomberg_Logo.svg";
import Image from "next/image";
import { useScopedI18n } from "@/locales/client";

export default function Media() {
  const t = useScopedI18n("media");
  const mediaItems = [
    {
      logo: LianheLogo, // 使用导入的 SVG
      title: t("news1"),
      url: "https://www.zaobao.com.sg/entertainment/story20241014-4975935",
    },
    {
      logo: NewsLogo, // 使用导入的 SVG
      title: t("news2"),
      url: "https://www.8world.com/in-depth/morning-express/spotlight-ai-content-creation-2605656",
    },
    {
      logo: BloombergLogo, // 使用导入的 SVG
      title: t("news3"),
      url: "https://www.bloomberg.com/news/newsletters/2024-10-12/openai-singapore-office-to-boost-city-s-artificial-intelligence-ambitions",
    },
  ];

  return (
    <section className="bg-gradient-to-t from-zinc-50 to-white dark:from-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl text-center mb-4">
            {t("title")}
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-12">
            {mediaItems.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center space-y-6"
              >
                {/* 媒体Logo容器 */}
                <div className="w-48 h-24 relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105 bg-white">
                  <Image
                    src={item.logo}
                    alt="媒体Logo"
                    fill
                    className="object-contain"
                  />
                </div>

                {/* 分隔线 */}
                <div className="w-12 h-0.5 bg-gray-200 group-hover:bg-primary transition-colors"></div>

                {/* 新闻标题 */}
                <p className="font-medium text-center text-white group-hover:text-primary transition-colors line-clamp-2 px-4">
                  {item.title}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
