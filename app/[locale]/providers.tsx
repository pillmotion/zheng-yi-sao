"use client";

import { ThemeProvider } from "@/components/ui/theme-provider";
import { I18nProviderClient } from "@/locales/client";
import type { ReactNode } from "react";

// We need to import it here because this is the first
// client component

type ProviderProps = {
  locale: string;
  children: ReactNode;
};

export function Providers({ locale, children }: ProviderProps) {
  return (
    <I18nProviderClient locale={locale}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </I18nProviderClient>
  );
}
