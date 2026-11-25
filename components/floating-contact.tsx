"use client";

import { usePathname } from "next/navigation";
import { TransitionLink } from "@/components/letter/transition-link";
import { PhotoAvatar } from "@/components/photo-avatar";
import { normalizePath } from "@/lib/utils";

/**
 * Floating shortcut to the contact page. It slides in after the first
 * scroll (CSS scroll timeline, `.floating-contact`) and is left out on the
 * contact page itself.
 */
export function FloatingContact() {
  const pathname = normalizePath(usePathname());
  if (pathname === "/contato") return null;

  return (
    <TransitionLink
      href="/contato/"
      aria-label="Ir para o contato"
      className="floating-contact group fixed bottom-[max(14px,env(safe-area-inset-bottom))] right-[clamp(12px,2vw,24px)] z-90 flex items-center gap-2.5"
    >
      <span className="hidden rounded-full bg-petal px-3.5 py-2 text-sm font-bold text-ink shadow-[0_10px_20px_-10px_rgb(0_0_0/0.35)] sm:block">
        Vamos conversar?
      </span>
      <PhotoAvatar size={56} className="shadow-[0_0_0_2px_var(--cream),0_0_0_3.5px_var(--ink),0_14px_24px_-10px_rgb(0_0_0/0.45)]" />
    </TransitionLink>
  );
}
