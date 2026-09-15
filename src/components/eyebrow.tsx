import type { ReactNode } from "react";

/**
 * Section eyebrow: a short rule, then the label.
 *
 * The rule is drawn in currentColor, so the marker takes whatever tone the
 * section sets — ink on paper, paper over a dark hero — and it borrows the
 * hairline already used for the section rules instead of a bracket glyph that
 * competes with the type it is meant to introduce. Kept in sentence case
 * rather than tracked-out capitals: this marks a section without shouting it.
 *
 * Deliberately takes no index. Sections used to be numbered "01 —" and the
 * page heroes lettered "A —" through "D —"; the letters indexed nothing a
 * reader could see, and two pages gave consecutive sections the same label
 * ("Leadership" twice, "Electronic division" twice), which the numbers were
 * doing the work of telling apart. Naming each section for what it holds
 * removes that job, and a label that is not counted cannot fall out of
 * sequence when a section is added or moved.
 */
export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`label inline-flex items-center gap-3 ${className}`.trim()}>
      <span aria-hidden="true" className="h-px w-7 shrink-0 bg-current opacity-40" />
      {children}
    </p>
  );
}
