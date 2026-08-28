import type { ReactNode } from "react";
import { Reveal, MaskLine } from "./reveal";
import { Eyebrow } from "./eyebrow";

/**
 * One heading pattern for every section: eyebrow, two masked display lines and
 * an optional right-aligned intro. Keeps the vertical rhythm identical
 * everywhere so sections stack on a shared baseline.
 */
export function SectionHeading({
  eyebrow,
  lines,
  intro,
  tone = "dark",
  className = "",
}: {
  eyebrow: string;
  lines: [ReactNode, ReactNode?];
  intro?: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  const eyebrowTone = tone === "dark" ? "text-accent" : "text-accent-soft";
  const introTone = tone === "dark" ? "text-ink/70" : "text-paper/65";

  return (
    <div
      className={`flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16 ${className}`.trim()}
    >
      <Reveal variant="lines" className="max-w-2xl">
        <Eyebrow className={`mb-6 ${eyebrowTone}`}>{eyebrow}</Eyebrow>
        <h2 className="display-lg">
          <MaskLine>{lines[0]}</MaskLine>
          {lines[1] ? <MaskLine delay={100}>{lines[1]}</MaskLine> : null}
        </h2>
      </Reveal>

      {intro ? (
        <Reveal delay={180} className="lg:pb-2">
          <p className={`max-w-xs text-sm leading-relaxed ${introTone}`}>{intro}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
