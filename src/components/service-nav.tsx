"use client";

import { useEffect, useState } from "react";

/**
 * Sticky in-page nav for the services sections. The active chip is derived from
 * scroll position rather than intersection, so it stays correct above the first
 * section and after jumping back to the top.
 */
export function ServiceNav({
  items,
}: {
  items: { id: string; label: string; short?: string }[];
}) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      const line = window.innerHeight * 0.4;
      let current = items[0]?.id ?? "";
      for (const item of items) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= line) current = item.id;
      }
      setActive(current);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [items]);

  return (
    <div className="sticky top-20 z-30 border-y border-line bg-paper/85 backdrop-blur-xl md:top-24">
      {/* All three chips are on screen at every width — nothing here is
          reached by scrolling. On a phone they share the row evenly and wear
          their short labels; from sm up they take their full names and sit
          together at the start of the row. */}
      <nav
        className="mx-auto flex w-full max-w-[88rem] items-center justify-between gap-2 px-6 py-3 sm:justify-start sm:gap-2 md:px-10 md:py-4 xl:px-16"
        aria-label="Services"
      >
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-current={active === item.id ? "true" : undefined}
            className={`tap chip label shrink-0 max-sm:px-3 max-sm:text-[0.8125rem] transition-colors duration-300 ${
              active === item.id
                ? "border-ink bg-ink text-paper"
                : "text-muted hover:border-ink hover:text-ink"
            }`}
          >
            <span className="sm:hidden">{item.short ?? item.label}</span>
            <span className="hidden sm:inline">{item.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}
