import { Daisy } from "@/components/daisy";

/**
 * Dark green band with words scrolling sideways. The list is repeated four
 * times so the track can slide half its width and loop without a jump.
 */
export function MarqueeRibbon({ words }: { words: readonly string[] }) {
  const track = [...words, ...words, ...words, ...words];
  return (
    <div className="marquee relative overflow-hidden bg-stem-deep text-cream" aria-hidden>
      <div className="marquee__track py-5">
        {track.map((word, index) => (
          <span
            key={`${word}-${index}`}
            className="inline-flex items-center gap-6 px-6 text-subtitle font-semibold"
          >
            {word}
            <Daisy className="size-7" />
          </span>
        ))}
      </div>
    </div>
  );
}
