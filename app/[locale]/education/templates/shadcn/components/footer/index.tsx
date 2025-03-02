"use client";

import { Instagram, Youtube } from "lucide-react";
import { Footer, Item } from "@/types/landing";
import { useScopedI18n } from "@/locales/client";

const socialIcons = {
  Youtube: <Youtube className="w-6 h-6" />,
  Instagram: <Instagram className="w-6 h-6" />,
};

export default function ({ footer }: { footer: Footer }) {
  const t = useScopedI18n("footer");

  if (footer.disabled) {
    return null;
  }

  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-wrap gap-y-8">
          {/* Brand */}
          {footer.brand && footer.brand.title && (
            <div className="w-full md:w-1/3 text-center md:text-left px-8">
              <div className="relative inline-block">
                <img
                  src="/imgs/png2.png"
                  alt="footer"
                  className="h-[48px] w-auto"
                />
                <span className="absolute -top-1 -right-2 text-red-500 text-sm">
                  ®
                </span>
              </div>
              <div className="flex flex-col mt-4">
                电视/电影/互联网内容许可 NO.BNC2400003<br />(Issued by IMDA, Singapore)
              </div>
            </div>
          )}

          {footer.nav?.items?.map((v: Item, idx: number) => {
            const titleKey = `title${idx + 1}` as keyof typeof t;
            return (
              <div
                className="w-full md:w-1/5 text-center md:text-left px-8"
                key={idx}
              >
                <p className="uppercase mb-6 font-bold text-sm">
                  {t(titleKey)}
                </p>
                <ul className="mb-4 space-y-3">
                  {v.children?.map((item: Item, i) => {
                    const translationKey = `title${idx + 1}_${
                      i + 1
                    }` as keyof typeof t;
                    return (
                      <li key={i}>
                        <a
                          href={item.url}
                          target={item.target}
                          className="hover:underline text-gray-600 hover:text-gray-800 line-clamp-2 text-sm"
                          title={t(translationKey) || item.title}
                        >
                          {t(translationKey) || item.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Social Links */}
        {footer.social && footer.social.items && (
          <div className="flex justify-center mt-8 space-x-6">
            {footer.social?.items?.map((v: Item, idx: number) => {
              return (
                <a
                  key={idx}
                  href={v.url}
                  target={v.target}
                  rel="nofollow"
                  className="text-gray-400 hover:text-gray-500 cursor-pointer"
                >
                  <span className="sr-only">{v.title}</span>
                  {socialIcons[v.title as keyof typeof socialIcons] || (
                    <span>{v.title}</span>
                  )}
                </a>
              );
            })}
          </div>
        )}

        {/* Copyright */}
        <div className="mt-4 text-center">
          <p className="text-base text-gray-400">
            <span className="relative inline-block mr-2">
              FizzDragon
              <span className="absolute -top-1 -right-2 text-gray-400 text-xs">
                ®
              </span>
            </span>
            {t("footer.copyright_suffix")}
          </p>
          {!footer.badge_disabled && (
            <p className="text-base text-gray-400">
              {t("footer.badge_text")}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
