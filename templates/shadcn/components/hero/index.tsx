"use client";

// import { BGShapeCircle } from "@/components/bg-shape-circle";
import { Button } from "@/components/ui/button";
import { Hero } from "@/types/landing";
import Link from "next/link";
import { useScopedI18n } from "@/locales/client";

export default function ({ hero }: { hero: Hero }) {
  const heroT = useScopedI18n("hero");

  if (hero.disabled) {
    return null;
  }

  return (
    <div className="bg-gradient-to-t from-zinc-50 to-white dark:from-zinc-950 dark:to-black relative">
      <div className="absolute bg-[url('/_convertfast/gradient-bg-0.svg')] bg-auto bg-no-repeat z-0 inset-0 top-0 bottom-0 left-0 right-0 grayscale"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary mb-6 drop-shadow-md">
            {heroT("title")}
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
            {heroT("description")}
          </p>
          {hero.tip && <p className="mt-4 text-sm text-gray-500">{hero.tip}</p>}
        </div>
      </div>
    </div>
  );
}