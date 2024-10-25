"use client";

import { Item, Section } from "@/types/landing";
import { useScopedI18n } from "@/locales/client";

import React from "react";

const VideoTestimonial = ({ item, index }: { item: Item; index: number }) => {
  const t = useScopedI18n("testimonial");

  return (
    <div className="flex flex-col md:flex-row gap-8 mb-12">
      <div className="w-full md:w-1/2">
        <video
          src={item.video?.src}
          poster={item.video?.poster}
          controls
          preload="metadata"
          playsInline
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h3 className="text-2xl font-bold mb-4">{t(`title${index + 1}`)}</h3>
        <p className="text-lg text-muted-foreground">{t(`description${index + 1}`)}</p>
      </div>
    </div>
  );
};

export default function ({ section }: { section: Section }) {
  const t = useScopedI18n("testimonial");

  if (section.disabled) {
    return null;
  }

  return (
    <div className="py-8 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center my-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t("title")}
          </h2>
          <div className="mt-4 text-sm font-semibold tracking-wide">
            {section.description}
          </div>
        </div>
        {section.items &&
          section.items.map((item, index) => (
            <VideoTestimonial key={index} item={item} index={index} />
          ))}
      </div>
    </div>
  );
}
