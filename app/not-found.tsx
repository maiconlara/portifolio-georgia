import { IconTile } from "@/components/icon-tile";
import { LinkButton } from "@/components/ui/link-button";

export default function NotFound() {
  return (
    <section className="wrap grid min-h-[70svh] place-items-center py-16 text-center">
      <div className="grid justify-items-center gap-5">
        <IconTile icon="mark_email_unread" size={88} iconSize="xl" />
        <h1 className="text-title">
          Essa carta se perdeu <em className="not-italic text-gradient">no correio</em>
        </h1>
        <p className="max-w-[40ch] text-lead text-ink-soft">
          O endereço não existe ou mudou de lugar. Volte para o início e siga pelos envelopes.
        </p>
        <LinkButton href="/" label="Voltar para o início" icon="home" />
      </div>
    </section>
  );
}
