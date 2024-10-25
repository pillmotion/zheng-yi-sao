"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Section } from "@/types/landing";
import { useScopedI18n } from "@/locales/client";

export default function ({ section }: { section: Section }) {
  const t = useScopedI18n("cta");

  if (section.disabled) {
    return null;
  }

  return (
    <section className="bg-gradient-to-t from-zinc-50 to-white dark:from-zinc-950 relative">
      <div className="absolute bg-[url('/_convertfast/gradient-bg-0.svg')] bg-auto bg-no-repeat inset-0 top-0 bottom-0 left-0 right-0 grayscale bg-center"></div>
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32 relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-6 text-xl leading-8 opacity-90 text-muted-foreground">
            {section.description}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {section.buttons?.map((v, idx) => {
              const translationKey = `title${idx + 1}` as "title1" | "title2";
              const buttonText = t(translationKey) || v.title || "Default Text";
              const textLength = buttonText.length;

              return (
                <Link key={idx} href={v.url || ""} target={v.target || "_blank"}>
                  <Button
                    key={idx}
                    size="lg"
                    variant={v.theme === "outline" ? "outline" : "default"}
                    className={`
                      ${v.theme === "outline" 
                        ? "text-red-600 border-red-600 hover:bg-red-100" 
                        : "bg-red-600 hover:bg-red-700 text-white"
                      } 
                      w-48 h-auto min-h-[4rem]
                      text-xl flex items-center justify-center
                      transition-colors duration-200
                      whitespace-normal break-words
                      text-[length:var(--dynamic-font-size)]
                      py-2 px-4
                    `}
                    style={{
                      '--dynamic-font-size': `min(1.25rem, ${Math.sqrt(48 * 48 / textLength)}rem)`
                    } as React.CSSProperties}
                  >
                    {buttonText}
                  </Button>
                </Link>
              );
            })}
          </div>
          <p className="mt-6 text-sm opacity-75 text-muted-foreground">
            {section.tip}
          </p>
        </div>
      </div>
    </section>
  );
}