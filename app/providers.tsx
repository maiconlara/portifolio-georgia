"use client";

import type { ReactNode } from "react";
import { I18nProvider } from "@heroui/react";
import { LetterTransitionProvider } from "@/components/letter/letter-transition";

/**
 * Client providers. `I18nProvider` fixes the HeroUI locale; the letter
 * provider plays the transition between pages.
 */
export function Providers({ children }: { children: ReactNode }) {
  return (
    <I18nProvider locale="pt-BR">
      <LetterTransitionProvider>{children}</LetterTransitionProvider>
    </I18nProvider>
  );
}
