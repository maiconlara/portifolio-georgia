import { Icon } from "@/components/ui/icon";

/** Round arrow at the end of a call to action. Slides right on hover. */
export function ButtonChip({ icon = "arrow_forward" }: { icon?: string }) {
  return (
    <span className="button__chip" aria-hidden>
      <Icon name={icon} size="sm" />
    </span>
  );
}
