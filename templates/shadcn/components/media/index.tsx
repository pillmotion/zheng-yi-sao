"use client";

// 直接导入 SVG 文件
import LianheLogo from "@/public/imgs/lianhe-logo.svg";
import NewsLogo from "@/public/imgs/new-logo-news.svg";
import BloombergLogo from "@/public/imgs/New_Bloomberg_Logo.svg";
import XuexiLogo from "@/public/imgs/Xuexi_Logo.png";
import YangshiLogo from "@/public/imgs/Yangshi_Logo.png";
import PeopleLogo from "@/public/imgs/People_Logo.svg";
import ZhejiangLogo from "@/public/imgs/zhejing_Logo.png";
import iFengLogo from "@/public/imgs/ifeng_Logo.png";
import ZhejiangTvLogo from "@/public/imgs/zhejiang_tv_Logo.png";
import HangzhouLogo from "@/public/imgs/hangzhou_Logo.png";
import PeopleRongLogo from "@/public/imgs/People_rong_Logo.png";
import HZRBLogo from "@/public/imgs/hzrb_Logo.png";
import XihuLogo from "@/public/imgs/xihu_Logo.png";
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
    {
      logo: XuexiLogo, // 使用导入的 SVG
      title: t("news4"),
      url: "https://article.xuexi.cn/articles/index.html?art_id=5305876043339585729&item_id=5305876043339585729&study_style_id=feeds_opaque&pid=&ptype=-1&source=share&share_to=wx_single",
    },
    {
      logo: YangshiLogo, // 使用导入的 SVG
      title: t("news4"),
      url: "https://m.yangshipin.cn/portrait_video?vid=e0000437uhk&pageContext=btype%3Dforum%26cpid%3D18239546166405164%26ctype%3Dcpid%26from%3D100013%26state%3Dinit%26ts%3D1733903933%26vid%3De0000437uhk",
    },
    {
      logo: PeopleLogo, // 使用导入的 SVG
      title: t("news4"),
      url: "https://www.peopleapp.com/rmharticle/30047663590",
    },
    {
      logo: ZhejiangLogo, // 使用导入的 SVG
      title: t("news4"),
      url: "https://wap.cztv.com/articles/index.html?pubId=2395682",
    },
    {
      logo: iFengLogo, // 使用导入的 SVG
      title: t("news4"),
      url: "https://ishare.ifeng.com/c/s/8fE7Wb5e4TG?spss=np&channelId=&aman=7eWf6cBa25ua49554bP1b3Dd24a2b3kfecQ8b6u81f",
    },
    {
      logo: ZhejiangTvLogo, // 使用导入的 SVG
      title: t("news7"),
      url: "https://wap.cztv.com/tv/44/2396160.html?play=1",
    },
    {
      logo: HangzhouLogo, // 使用导入的 SVG
      title: t("news5"),
      url: "https://page.kaiba315.com.cn/neo-news/video-episode-clip?articleId=67583ffb8c8a3e037bcca8dd",
    },
    {
      logo: PeopleRongLogo, // 使用导入的 SVG
      title: t("news4"),
      url: "https://www.bjrbrm.cn/sh/show-84069.html",
    },
    {
      logo: HZRBLogo, // 使用导入的 SVG
      title: t("news6"),
      url: "https://apiv4.cst123.cn/cst/news/shareDetail?id=1051821658425262080&ic=evkb",
    },
    {
      logo: XihuLogo, // 使用导入的 SVG
      title: t("news4"),
      url: "https://mp.weixin.qq.com/s/b3dtiIPcHaxNVpuUEHfPZg",
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
