import type { Metadata, Viewport } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { FloatingContact } from "@/components/floating-contact";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Toaster } from "@/components/ui/toast";
import { SITE } from "@/config/site";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name}: ${SITE.role.toLowerCase()}`,
    template: `%s, ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: SITE.name,
    title: `${SITE.name}: ${SITE.role.toLowerCase()}`,
    description: SITE.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf7ec",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" data-theme="light" data-palette={SITE.palette} className={instrumentSans.variable}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <Providers>
          <a
            href="#conteudo"
            className="fixed left-4 top-3 z-200 -translate-y-24 rounded-full bg-ink px-4 py-2 font-bold text-cream focus:translate-y-0"
          >
            Pular para o conteúdo
          </a>
          <SiteHeader />
          <main id="conteudo" className="pt-(--header-h)">
            {children}
          </main>
          <SiteFooter />
          <FloatingContact />
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
