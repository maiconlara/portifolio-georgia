"use client";

import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { toast } from "@/components/ui/toast";

interface CopyEmailButtonProps {
  email: string;
  label: string;
  copied: string;
  failed: string;
}

/** Copies the e-mail address and confirms with a toast. */
export function CopyEmailButton({ email, label, copied, failed }: CopyEmailButtonProps) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      toast.success(copied);
    } catch {
      toast.error(failed);
    }
  };

  return (
    <Button variant="ink-outline" size="md" onPress={handleCopy}>
      <Icon name="content_copy" size="sm" />
      {label}
    </Button>
  );
}
