"use client";

import { Button } from "@/components/ui/button";
import { Item, Section } from "@/types/landing";
import Link from "next/link";
import { useScopedI18n } from "@/locales/client";

export default function ({ section }: { section: Section }) {
  const t = useScopedI18n("feature");

  if (section.disabled) {
    return;
  }

  return (
    <div className="bg-gradient-to-t py-12 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
      <div className="mx-auto max-w-2xl text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {t("title")}
        </h2>
        {section.tip && (
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            {section.tip}
          </p>
        )}
      </div>
      <div className="mt-4 flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {section.items?.map((item: Item, idx: number) => (
            <div
              key={idx}
              className="text-left p-6 border border-gray-200 rounded-lg shadow-sm"
            >
              {item.avatar && item.avatar.src && (
                <div className="mb-3 text-primary-500">
                  <img
                    src={item.avatar?.src}
                    alt={item.avatar?.title}
                    className="w-full h-auto block"
                  />
                </div>
              )}
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold">{t(`title${idx + 1}`)}</h3>
                {item.button && (
                  !item.button.url ? (
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-gray-200 text-gray-500 border-gray-300 cursor-not-allowed"
                      disabled
                    >
                      {t(`button${idx + 1}`)}
                    </Button>
                  ) : (
                    <Link href={item.button.url} target={item.button.target || "_blank"}>
                      <Button
                        size="sm"
                        variant={item.button.theme === "outline" ? "outline" : "default"}
                        className={`
                          ${item.button.theme === "outline" 
                            ? "text-red-600 border-red-600 hover:bg-red-100" 
                            : "bg-red-600 hover:bg-red-700 text-white"
                          } 
                          transition-colors duration-200
                        `}
                      >
                        {t(`button${idx + 1}`)}
                      </Button>
                    </Link>
                  )
                )}
              </div>
              <p className="text-muted-foreground">{t(`description${idx + 1}`)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
