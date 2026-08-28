import Link from "next/link";
import { Reveal, MaskLine } from "@/components/reveal";

export function PageStub({
  index,
  title,
  intro,
  sections,
}: {
  index: string;
  title: string;
  intro: string;
  sections: string[];
}) {
  return (
    <section className="shell pt-36 pb-28 md:pt-48 md:pb-40">
      <Reveal className="flex flex-wrap items-baseline justify-between gap-4 pb-6">
        <p className="label text-accent">{index}</p>
        <p className="label text-muted">In production</p>
      </Reveal>

      <div className="hairline pt-8 md:pt-12">
        <Reveal variant="lines">
          <h1 className="display-xl">
            <MaskLine>{title}</MaskLine>
          </h1>
        </Reveal>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <Reveal delay={140}>
            <p className="text-base leading-relaxed text-ink/75 md:text-lg">{intro}</p>
            <Link
              href="/"
              className="btn label group mt-10 border border-line text-ink hover:border-ink"
            >
              <span className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-1">
                ←
              </span>
              Back to home
            </Link>
          </Reveal>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <Reveal delay={220}>
            <p className="label mb-6 text-muted">Planned sections</p>
            <ul>
              {sections.map((section, i) => (
                <li
                  key={section}
                  className="flex items-baseline gap-6 border-b border-line py-4 first:border-t"
                >
                  <span className="label text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg tracking-tight">{section}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
