export function Marquee({ items }: { items: string[] }) {
  const run = [...items, ...items];

  return (
    <div className="hairline-dark overflow-hidden border-t-0 py-6 select-none" aria-hidden="true">
      <div className="marquee-track">
        {run.map((item, i) => (
          <span key={i} className="label flex shrink-0 items-center gap-10 pr-10 text-muted-dim">
            {item}
            <span className="text-accent-soft">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
