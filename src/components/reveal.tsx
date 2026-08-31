"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** ms */
  delay?: number;
  /** "fade" slides up, "clip" wipes an image in from the top */
  variant?: "fade" | "clip" | "lines";
  once?: boolean;
};

export function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  variant = "fade",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setShown(false);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  if (variant === "clip") {
    // The clip-path lives on an inner layer, not the observed node itself —
    // IntersectionObserver treats a self-applied clip-path as zero visible
    // area, so watching the clipped element directly never reports as shown.
    return (
      <Tag ref={ref} className={className}>
        <div
          data-shown={shown}
          className="reveal-clip absolute inset-0"
          style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
        >
          {children}
        </div>
      </Tag>
    );
  }

  const base = variant === "lines" ? "" : "reveal";

  return (
    <Tag
      ref={ref}
      data-shown={shown}
      className={`${base} ${className}`.trim()}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}

/** A single masked line of display type. Wrap several inside one <Reveal variant="lines">. */
export function MaskLine({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <span
      className={`line-mask ${className}`.trim()}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      <span>{children}</span>
    </span>
  );
}
