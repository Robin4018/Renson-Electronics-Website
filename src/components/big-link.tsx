import Link from "next/link";
import type { ReactNode } from "react";

/** Oversized underlined link with a travelling arrow. */
export function BigLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`link-xl group ${className}`.trim()}>
      {children}
      <span aria-hidden="true" className="arrow">
        →
      </span>
    </Link>
  );
}
