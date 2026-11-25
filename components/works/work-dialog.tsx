"use client";

import { useCallback, useState } from "react";
import { Chip, Modal } from "@heroui/react";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { WorkCover } from "@/components/works/work-cover";
import type { Work } from "@/config/works";
import { cn } from "@/lib/utils";

interface WorkDialogProps {
  work: Work;
  isOpen: boolean;
  /** Works of the open envelope, for the previous and next buttons. */
  siblings: Work[];
  onNavigate: (slug: string) => void;
  onClose: () => void;
}

/**
 * Work opened in a HeroUI `Modal`: large picture with thumbnails, texts,
 * tools and buttons to walk through the open envelope (also with the arrow
 * keys, listened to while the dialog content is mounted). The gallery goes
 * back to the first image whenever the work changes.
 */
export function WorkDialog({ work, isOpen, siblings, onNavigate, onClose }: WorkDialogProps) {
  const [gallery, setGallery] = useState({ slug: work.slug, index: 0 });
  const imageIndex = gallery.slug === work.slug ? gallery.index : 0;
  const setImageIndex = (index: number) => setGallery({ slug: work.slug, index });
  const position = siblings.findIndex((item) => item.slug === work.slug);
  const hasSiblings = siblings.length > 1;
  const imageCount = Math.max(work.images.length, 1);

  const goTo = useCallback(
    (step: number) => {
      const next = siblings[(position + step + siblings.length) % siblings.length];
      if (next) onNavigate(next.slug);
    },
    [onNavigate, position, siblings],
  );

  const listenToArrowKeys = useCallback(
    (node: HTMLDivElement | null) => {
      if (!node || siblings.length < 2) return;
      const handleKeyDown = (event: globalThis.KeyboardEvent) => {
        if (event.key === "ArrowRight") goTo(1);
        if (event.key === "ArrowLeft") goTo(-1);
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    },
    [goTo, siblings.length],
  );

  return (
    <Modal.Backdrop isOpen={isOpen} onOpenChange={(open) => !open && onClose()} variant="blur">
      <Modal.Container placement="center" scroll="inside">
        <Modal.Dialog
          className="w-[min(1080px,calc(100vw-2rem))] max-w-none overflow-hidden bg-cream p-0 sm:max-w-none"
        >
          <div ref={listenToArrowKeys} className="flex min-h-0 flex-col">
            <Modal.CloseTrigger className="absolute right-3 top-3 z-10" />
            <div className="grid min-h-0 overflow-y-auto md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
              <div className="bg-cream-deep p-4 sm:p-6">
                <WorkCover
                  work={work}
                  imageIndex={imageIndex}
                  sizes="(min-width: 820px) 60vw, 100vw"
                  className="aspect-4/5 max-h-[70svh] w-full md:aspect-auto md:h-[min(70svh,640px)]"
                />
                {work.images.length > 1 ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {work.images.map((image, index) => (
                      <button
                        key={image}
                        type="button"
                        onClick={() => setImageIndex(index)}
                        aria-label={`Ver imagem ${index + 1}`}
                        aria-current={index === imageIndex}
                        className={cn(
                          "size-16 cursor-pointer overflow-hidden rounded-md border-2 transition-opacity",
                          index === imageIndex ? "border-ink opacity-100" : "border-transparent opacity-55 hover:opacity-90",
                        )}
                      >
                        <WorkCover work={work} imageIndex={index} sizes="64px" className="size-full" />
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="flex flex-col p-6 sm:p-8">
                <p className="text-sm font-semibold text-ink-soft">
                  {work.subtitle} · {work.year}
                </p>
                <Modal.Heading className="mt-2 text-[clamp(2rem,3.2vw,2.8rem)] font-bold leading-none tracking-[-0.035em] text-ink">
                  {work.title}
                </Modal.Heading>
                <p className="mt-5 text-ink">{work.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Ferramentas">
                  {work.tools.map((tool) => (
                    <li key={tool}>
                      <Chip size="lg" className="cursor-default [--chip-bg:var(--leaf-soft)] [--chip-fg:var(--stem-deep)]">
                        {tool}
                      </Chip>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-ink-soft">
                  {imageCount === 1 ? "1 imagem" : `${imageCount} imagens`}
                </p>

                {hasSiblings ? (
                  <div className="mt-auto flex flex-wrap gap-2 pt-8">
                    <Button variant="ink-outline" size="md" onPress={() => goTo(-1)}>
                      <Icon name="arrow_back" size="sm" />
                      Anterior
                    </Button>
                    <Button size="md" onPress={() => goTo(1)}>
                      Próximo
                      <Icon name="arrow_forward" size="sm" />
                    </Button>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </Modal.Dialog>
      </Modal.Container>
    </Modal.Backdrop>
  );
}
