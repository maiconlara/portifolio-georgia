"use client";

import type { ReactNode } from "react";
import { I18nProvider } from "@heroui/react";

/** Client providers. `I18nProvider` fixes the HeroUI locale. */
export function Providers({ children }: { children: ReactNode }) {
  return <I18nProvider locale="pt-BR">{children}</I18nProvider>;
}
