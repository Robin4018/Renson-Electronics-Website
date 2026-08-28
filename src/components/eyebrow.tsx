import type { ReactNode } from "react";

/**
 * Section eyebrow, set in brackets — a quiet way to mark a section without
 * shouting it in tracked-out capitals.
 */
export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`label ${className}`.trim()}>
      <span aria-hidden="true" className="opacity-50">
        [
      </span>
      <span className="mx-1.5">{children}</span>
      <span aria-hidden="true" className="opacity-50">
        ]
      </span>
    </p>
  );
}
