"use client";

import { Youtube, Instagram } from "lucide-react";
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
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-wrap">
          {/* Newsletter */}
          {footer.brand && footer.brand.title && (
            <div className="w-full md:w-1/2 text-center md:text-left px-8">
              <img src="/imgs/footer.jpg" alt="footer" className="h-[104px] w-auto" />
              <div className="flex flex-col">{footer.brand.description}</div>
            </div>
          )}

          {footer.nav?.items?.map((v: Item, idx: number) => {
            const titleKey = `title${idx + 1}` as keyof typeof t;
            return (
              <div
                className="w-full md:w-1/4 text-center md:text-left px-8"
                key={idx}
              >
                <p className="uppercase mb-6 font-bold">{t(titleKey)}</p>
                <ul className="mb-4">
                  {v.children?.map((item: Item, i) => {
                    const translationKey = `title${idx + 1}_${i + 1}` as keyof typeof t;
                    return (
                      <li className="mt-2" key={i}>
                        <a
                          href={item.url}
                          target={item.target}
                          className="hover:underline text-gray-600 hover:text-gray-800"
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
          <p className="text-base text-gray-400">{t("copyright")}</p>
          {!footer.badge_disabled}
        </div>
      </div>
    </footer>
  );
}