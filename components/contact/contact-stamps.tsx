import type { CSSProperties } from "react";
import { IconTile } from "@/components/icon-tile";
import { Postmark } from "@/components/postmark";
import { Icon } from "@/components/ui/icon";
import type { ContactChannel } from "@/config/contact";

const TILTS = ["-2.2deg", "1.6deg", "-1deg", "2deg"];

interface ContactStampsProps {
  channels: readonly ContactChannel[];
  postmark: string;
}

/**
 * Contact channels drawn as postage stamps: perforated edge, an icon, a
 * postmark and the call to action. They straighten up on hover.
 */
export function ContactStamps({ channels, postmark }: ContactStampsProps) {
  return (
    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {channels.map((channel, index) => {
        const opensTab = channel.href.startsWith("http");
        return (
          <li key={channel.name} className="stamp-wrap" data-reveal>
            <a
              href={channel.href}
              className="stamp group min-h-[260px] no-underline"
              style={{ "--tilt": TILTS[index % TILTS.length] } as CSSProperties}
              {...(opensTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <span className="stamp__inner" />
              <Postmark text={postmark} pathId={`postmark-path-${index}`} className="absolute right-3 top-3 w-28 opacity-60" />
              <IconTile icon={channel.icon} size={56} />
              <span className="mt-5 text-[1.7rem] font-bold leading-none tracking-tight">{channel.name}</span>
              <span className="mt-2 break-words font-semibold">{channel.handle}</span>
              <span className="text-[0.95rem] text-ink-soft">{channel.note}</span>
              <span className="mt-auto flex items-center gap-2 border-t border-ink pt-3 font-bold">
                {channel.action}
                <Icon
                  name="arrow_outward"
                  size="sm"
                  className="ml-auto transition-transform duration-300 ease-(--ease-pop) group-hover:translate-x-1"
                />
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
