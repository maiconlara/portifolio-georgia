"use client";

import { Toast, toast as heroToast } from "@heroui/react";

/** Toast region. Rendered once, in the root layout. */
export function Toaster() {
  return <Toast.Provider placement="bottom" />;
}

/**
 * The single door for toasts: `import { toast } from "@/components/ui/toast"`.
 *
 *   toast("Mensagem neutra.")
 *   toast.success("E-mail copiado.")
 *   toast.error("Não foi possível copiar.")
 */
export const toast = Object.assign(
  (title: string, description?: string) => heroToast(title, { description }),
  {
    success: (title: string, description?: string) => heroToast.success(title, { description }),
    error: (title: string, description?: string) => heroToast.danger(title, { description }),
  },
);
