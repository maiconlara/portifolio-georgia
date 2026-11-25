import { IconTile } from "@/components/icon-tile";
import type { Service } from "@/config/contact";

interface ServicesListProps {
  title: string;
  services: readonly Service[];
  email: string;
}

/** Kinds of project Ge takes, each opening an e-mail with the subject filled. */
export function ServicesList({ title, services, email }: ServicesListProps) {
  return (
    <div className="mt-16 border-t border-cream/25 pt-8">
      <h2 className="text-subtitle text-cream">{title}</h2>
      <ul className="mt-5 grid gap-3 md:grid-cols-3">
        {services.map((service) => (
          <li key={service.title}>
            <a
              href={`mailto:${email}?subject=${encodeURIComponent(service.subject)}`}
              className="group flex h-full items-center gap-4 rounded-2xl border border-cream/35 p-4 transition-colors duration-300 hover:bg-cream hover:text-ink"
            >
              <IconTile icon={service.icon} size={50} tone="cream" />
              <span>
                <span className="block text-xl font-bold leading-tight tracking-tight">{service.title}</span>
                <span className="text-sm opacity-80">{service.description}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
