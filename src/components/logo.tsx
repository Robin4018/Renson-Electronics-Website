import Image from "next/image";

/**
 * Official Renson Electronics lockup.
 *  tone="dark"  → ink wordmark, for light surfaces
 *  tone="light" → white wordmark, for ink surfaces
 * Both share the blue horse badge. Master art: 1400 x 323 (4.33:1).
 *
 * The artwork is restricted company property, so it is wrapped in a
 * shield: a transparent overlay sits on top of the image and absorbs
 * the pointer, which keeps drag-to-save, long-press save, and the
 * image context menu ("Save image as", "Open image in new tab") from
 * ever targeting the file. `className` lands on the wrapper so hover
 * styling still works through the shield.
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
    <span
      className={`relative inline-block select-none ${className}`.trim()}
      style={{ height }}
    >
      <Image
        src={tone === "dark" ? "/logo-dark.png" : "/logo-white.png"}
        alt="Renson Electronics"
        width={Math.round(height * (1400 / 323))}
        height={height}
        priority={priority}
        draggable={false}
        className="artwork-protected w-auto"
        style={{ height }}
      />
      {/* Shield: takes the right-click and the drag so the image never does. */}
      <span aria-hidden className="absolute inset-0" />
    </span>
  );
}
