"use client";

import { ChevronRight } from "lucide-react";
import { useScopedI18n } from "@/locales/client";

// 1. 定义新闻类型枚举
export enum NewsType {
  HOT = 'hot',          // 热门新闻
  NEW = 'new',          // 最新消息
  UPDATE = 'update',    // 更新通知
  MOVIE = 'movie',      // 电影相关
  TECH = 'tech',        // 技术突破
  FINANCE = 'finance',  // 财务相关
}

// 2. 定义新闻项接口
export interface NewsItem {
  id: number;
  text: string;
  link: string;
  type: NewsType;
}

// 3. 标签样式映射
const NEWS_TYPE_BADGE = {
  [NewsType.HOT]: 'bg-red-500',
  [NewsType.NEW]: 'bg-green-500',
  [NewsType.UPDATE]: 'bg-blue-500',
  [NewsType.MOVIE]: 'bg-purple-500',
  [NewsType.TECH]: 'bg-indigo-500',
  [NewsType.FINANCE]: 'bg-yellow-500',
};

export default function NewsTicker() {
  const t = useScopedI18n("news");

  // 使用翻译替换原来的固定文本
  const NEWS_TYPE_TEXT = {
    [NewsType.HOT]: t("hot"),
    [NewsType.NEW]: t("new"),
    [NewsType.UPDATE]: t("update"),
    [NewsType.MOVIE]: t("movie"),
    [NewsType.TECH]: t("tech"),
    [NewsType.FINANCE]: t("finance"),
  };

  const news: NewsItem[] = [
    {
      id: 1,
      text: t("title1"),
      link: "https://mp.weixin.qq.com/s/FRdg7B9ELv8xOVqt9Q4l5w",
      type: NewsType.NEW,
    },
    {
      id: 2,
      text: t("title2"),
      link: "https://mp.weixin.qq.com/s/gMWE4S-7fNKzqBDJxJ_-0w",
      type: NewsType.UPDATE,
    },
    {
      id: 3,
      text: t("title3"),
      link: "https://mp.weixin.qq.com/s/kEbxs1DrNOdwdA5f-R574w",
      type: NewsType.HOT,
    },
    {
      id: 4,
      text: t("title4"),
      link: "https://mp.weixin.qq.com/s/5aA_lL994KZ5NQBaxkspTw",
      type: NewsType.UPDATE,
    },
  ];

  return (
    <div className="bg-black/80 text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center">
        <span className="flex items-center mr-4 font-bold">
          {t("title")}
          <ChevronRight className="h-4 w-4 ml-1" />
        </span>
        <div className="overflow-hidden relative flex-1 pause-on-hover">
          <div className="animate-marquee whitespace-nowrap">
            {news.map((item, index) => (
              <>
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:text-blue-400 transition-colors"
                >
                  <span className={`
                    ${NEWS_TYPE_BADGE[item.type]} 
                    text-xs 
                    px-2 
                    py-0.5 
                    rounded-full 
                    font-semibold 
                    mr-2
                    text-white
                  `}>
                    {NEWS_TYPE_TEXT[item.type]}
                  </span>
                  {item.text}
                </a>
                {index < news.length - 1 && (
                  <span className="mx-4 text-gray-400">|</span>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}