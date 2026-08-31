"use client";

import { useEffect, useState } from "react";
import { MaskLine } from "./reveal";

type HeroSlide = { lines: [string, string]; sub: string };

/**
 * Cycles through a set of headline/subhead pairs, reusing the same
 * line-mask and reveal CSS transitions as everywhere else — toggling
 * data-shown off then on replays them each time rather than needing a
 * remount.
 */
export function RotatingHero({
  slides,
  interval = 5000,
}: {
  slides: HeroSlide[];
  interval?: number;
}) {
  const [index, setIndex] = useState(0);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const enter = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(enter);
  }, [index]);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(() => {
      setShown(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % slides.length);
      }, 900);
    }, interval);
    return () => clearInterval(id);
  }, [slides.length, interval]);

  const slide = slides[index];

  return (
    <div data-shown={shown}>
      <h1 className="display-xl text-paper">
        <MaskLine>{slide.lines[0]}</MaskLine>
        <MaskLine delay={110}>
          <span className="text-paper/60">{slide.lines[1]}</span>
        </MaskLine>
      </h1>

      <p
        data-shown={shown}
        className="reveal mt-6 max-w-xl text-base leading-relaxed text-paper/80 md:text-lg"
        style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
      >
        {slide.sub}
      </p>
    </div>
  );
}
