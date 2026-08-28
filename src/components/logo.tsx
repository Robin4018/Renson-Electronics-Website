import Image from "next/image";

/**
 * Official Renson Electronics lockup.
 *  tone="dark"  → ink wordmark, for light surfaces
 *  tone="light" → white wordmark, for ink surfaces
 * Both share the blue horse badge. Master art: 1400 x 323 (4.33:1).
 */
export function Logo({
  tone = "dark",
  className = "",
  height = 30,
  priority = false,
}: {
  tone?: "dark" | "light";
  className?: string;
  height?: number;
  priority?: boolean;
}) {
  return (
    <Image
      src={tone === "dark" ? "/logo-dark.png" : "/logo-white.png"}
      alt="Renson Electronics"
      width={Math.round(height * (1400 / 323))}
      height={height}
      priority={priority}
      className={`w-auto ${className}`.trim()}
      style={{ height }}
    />
  );
}
