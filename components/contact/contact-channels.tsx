import { Icon } from "@/components/ui/icon";
import type { ContactChannel } from "@/config/contact";

interface ContactChannelsProps {
  title: string;
  channels: readonly ContactChannel[];
  className?: string;
}

/** Other ways to reach Ge, one row each. The arrow turns forward on hover. */
export function ContactChannels({ title, channels, className }: ContactChannelsProps) {
  return (
    <div className={className}>
      <h2 data-reveal className="mb-6 text-title">
        {title}
      </h2>
      <ul data-reveal-group>
        {channels.map((channel) => (
          <li key={channel.name}>
            <a
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-6 border-t border-line py-6"
            >
              <span className="grid flex-1 gap-x-8 gap-y-1 md:grid-cols-[minmax(0,12rem)_minmax(0,1fr)] md:items-baseline">
                <span className="text-subtitle font-semibold text-ink">{channel.name}</span>
                <span>
                  <span className="block font-medium text-ink">{channel.handle}</span>
                  <span className="block text-sm text-ink-soft">{channel.note}</span>
                </span>
              </span>
              <Icon
                name="arrow_outward"
                size="lg"
                className="text-ink transition-transform duration-300 ease-(--ease-glide) group-hover:rotate-45"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
