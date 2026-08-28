import Image from "next/image";
import type { ReactNode } from "react";
import { Reveal, MaskLine } from "./reveal";
import { Eyebrow } from "./eyebrow";

/**
 * Shared inner-page opener: meta row, hairline, oversized title, intro column
 * and an optional full-bleed band. Matches the home hero's rhythm so every
 * page starts on the same baseline.
 */
export function PageHero({
  eyebrow,
  meta,
  lines,
  intro,
  aside,
  band,
}: {
  eyebrow: string;
  meta?: string;
  lines: [string, string?];
  intro: string;
  aside?: ReactNode;
  band?: { src: string; alt: string; caption: string };
}) {
  return (
    <section className="relative pt-32 md:pt-40 lg:pt-48">
      <div className="shell">
        <Reveal className="flex flex-wrap items-baseline justify-between gap-x-10 gap-y-2 pb-7">
          <Eyebrow className="text-accent">{eyebrow}</Eyebrow>
          {meta ? <p className="label hidden text-muted sm:block">{meta}</p> : null}
        </Reveal>

        <div className="hairline pt-10 md:pt-14">
          <Reveal variant="lines">
            <h1 className="display-xl">
              <MaskLine>{lines[0]}</MaskLine>
              {lines[1] ? (
                <MaskLine delay={110}>
                  <span className="text-muted">{lines[1]}</span>
                </MaskLine>
              ) : null}
            </h1>
          </Reveal>
        </div>

        <div
          className={`grid grid-cols-1 gap-x-8 gap-y-10 pt-12 md:grid-cols-12 md:pt-16 ${
            band ? "pb-16 md:pb-20" : "pb-0"
          }`}
        >
          <div className="md:col-span-6 lg:col-span-5">
            <Reveal delay={240}>
              <p className="text-base leading-relaxed text-ink/75 md:text-lg">{intro}</p>
            </Reveal>
          </div>
          {aside ? (
            <div className="md:col-span-5 md:col-start-8">
              <Reveal delay={320}>{aside}</Reveal>
            </div>
          ) : null}
        </div>
      </div>

      {band ? (
        <Reveal
          variant="clip"
          delay={160}
          className="relative block h-[36vh] min-h-[240px] w-full md:h-[48vh]"
        >
          <Image
            src={band.src}
            alt={band.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 via-40% to-transparent" />
          <div className="shell absolute inset-x-0 bottom-0 pb-7">
            <p className="label text-paper/85">{band.caption}</p>
          </div>
        </Reveal>
      ) : null}
    </section>
  );
}
