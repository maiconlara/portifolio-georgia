import { Daisy } from "@/components/daisy";
import { LinkButton } from "@/components/ui/link-button";

export default function NotFound() {
  return (
    <section className="wrap grid min-h-[70svh] place-items-center py-16 text-center">
      <div className="grid justify-items-center gap-6">
        <Daisy className="size-20" />
        <h1 className="text-title">Essa carta se perdeu no correio</h1>
        <p className="max-w-[40ch] text-lead text-ink-soft">
          O endereço não existe ou mudou de lugar. Volte para o início e siga pelo menu.
        </p>
        <LinkButton href="/" label="Voltar para o início" icon="home" />
      </div>
    </section>
  );
}
