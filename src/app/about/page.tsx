import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Eyebrow } from "@/components/eyebrow";
import { Reveal, MaskLine } from "@/components/reveal";
import { company, timeline, leadership, divisions, principles, units } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Four decades of engineering precision in Coimbatore. The story, the people and the two purpose-built facilities behind Renson Electronics.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="A — About"
        meta={`Est. ${company.since} — ${company.location}`}
        lines={["Legacy of", "excellence."]}
        intro="Four decades of engineering precision and industrial trust in Coimbatore — built by engineers, sustained by the clients who keep coming back."
        band={{
          src: "/images/plant-exterior.jpg",
          alt: "Industrial facility exterior",
          caption: "Industrial manufacturing infrastructure",
        }}
      />

      {/* ══════════════ 01 — STORY ══════════════ */}
      <section className="shell section-y">
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <Eyebrow className="text-accent">01 — Our story</Eyebrow>
            </Reveal>
            <Reveal variant="lines" className="mt-6">
              <h2 className="display-lg">
                <MaskLine>Built on engineering.</MaskLine>
                <MaskLine delay={100}>
                  <span className="text-muted">Driven by trust.</span>
                </MaskLine>
              </h2>
            </Reveal>

            <Reveal
              variant="clip"
              delay={200}
              className="frame relative mt-12 block aspect-[4/3] w-full"
            >
              <Image
                src="/images/workshop.jpg"
                alt="Fabrication and finishing floor"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </Reveal>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <Reveal>
              <h3 className="text-xl font-medium tracking-tight md:text-2xl">
                Nearly four decades of manufacturing excellence
              </h3>
            </Reveal>

            <div className="mt-8 space-y-6">
              <Reveal delay={100}>
                <p className="text-base leading-relaxed text-ink/75">
                  Renson Electronics is a registered MSME, originally promoted in
                  1986 and formally established in December 1989 in Coimbatore,
                  Tamil Nadu. For over three decades the company has been a
                  trusted manufacturer and supplier of voltage stabilizers and
                  battery chargers, serving industrial clients across the region.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <p className="text-base leading-relaxed text-ink/75">
                  In 2001, recognising the growing demand for high-quality surface
                  finishing, Renson strategically diversified by launching its
                  Powder Coating Division — investing in advanced machinery,
                  dedicated facilities and specialised personnel to deliver
                  world-class coating solutions.
                </p>
              </Reveal>
              <Reveal delay={260}>
                <p className="text-base leading-relaxed text-ink/75">
                  Today we operate two purpose-built manufacturing units totalling
                  over 15,000 sq ft of covered production, supported by a combined
                  80,000 sq ft of company-owned land. Our team of engineers,
                  technicians and skilled workers is united by a single commitment:
                  delivering quality that lasts.
                </p>
              </Reveal>
            </div>

            <Reveal delay={320} className="mt-12">
              <ol>
                {timeline.map((entry) => (
                  <li
                    key={entry.year}
                    className="grid grid-cols-[5rem_1fr] items-baseline gap-x-6 border-b border-line py-5 first:border-t md:grid-cols-[6rem_1fr] md:gap-x-8"
                  >
                    <span className="label text-accent">{entry.year}</span>
                    <div>
                      <h4 className="text-base font-medium tracking-tight">{entry.title}</h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                        {entry.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════ 02 — LEADERSHIP ══════════════ */}
      <section className="border-t border-line bg-paper-dim section-y">
        <div className="shell">
          <SectionHeading
            eyebrow="02 — Leadership"
            lines={["The people behind", "Renson Electronics."]}
            intro="Two generations of engineers, one standard of execution held across every division."
          />

          <div className="mt-14 grid gap-px overflow-hidden rounded-[10px] border border-line bg-line md:mt-20 md:grid-cols-2">
            {leadership.map((person, i) => (
              <Reveal key={person.name} delay={i * 110} className="bg-paper-dim p-8 md:p-10">
                <div className="flex items-start gap-5">
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-ink/15 font-display text-lg tracking-tight text-ink/70">
                    {person.initials}
                  </span>
                  <div>
                    <h3 className="display-md">
                      {person.name}
                      {person.suffix ? (
                        <span className="ml-2 text-base text-muted">{person.suffix}</span>
                      ) : null}
                    </h3>
                    <p className="label mt-3 text-accent">{person.role}</p>
                  </div>
                </div>

                <dl className="mt-9 flex gap-px bg-line">
                  <div className="flex-1 bg-paper-dim pr-6">
                    <dt className="label text-muted">Experience</dt>
                    <dd className="mt-2.5 text-lg tracking-tight">{person.experience}</dd>
                  </div>
                  <div className="flex-1 bg-paper-dim pl-6">
                    <dt className="label text-muted">Domain</dt>
                    <dd className="mt-2.5 text-lg tracking-tight">{person.domain}</dd>
                  </div>
                </dl>

                <p className="mt-9 text-sm leading-relaxed text-ink/70">{person.bio}</p>

                <ul className="mt-8 space-y-3">
                  {person.credentials.map((credential) => (
                    <li
                      key={credential}
                      className="flex items-baseline gap-3 text-sm text-ink/70"
                    >
                      <span aria-hidden="true" className="text-accent">
                        —
                      </span>
                      {credential}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <div className="mt-px grid gap-px border-x border-b border-line bg-line md:grid-cols-3">
            {divisions.map((division, i) => (
              <Reveal
                key={division.title}
                delay={i * 90}
                className="bg-paper-dim px-8 py-10"
              >
                <span className="label text-accent">{division.index}</span>
                <h3 className="mt-8 text-lg font-medium tracking-tight">{division.title}</h3>
                <p className="mt-3.5 text-sm leading-relaxed text-ink/65">{division.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ 03 — FACILITIES ══════════════ */}
      <section className="bg-ink text-paper section-y">
        <div className="shell">
          <SectionHeading
            eyebrow="03 — Facilities"
            lines={["Two units,", <span key="b" className="text-muted-dim">one standard.</span>]}
            intro="15,000 sq ft of covered production across 80,000 sq ft of company-owned land in Coimbatore."
            tone="light"
          />

          <div className="mt-14 grid border-t border-ink-line md:mt-20 md:grid-cols-2">
            {units.map((unit, i) => (
              <Reveal
                key={unit.tag}
                delay={i * 110}
                className={`py-10 md:py-14 ${
                  i === 0
                    ? "border-b border-ink-line md:border-b-0 md:pr-12"
                    : "md:border-l md:border-ink-line md:pl-12"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="chip label border-ink-line text-accent-soft">
                    {unit.tag}
                  </span>
                  <span className="label text-muted-dim">{unit.scope}</span>
                </div>

                <h3 className="display-md mt-9">{unit.name}</h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/60">
                  {unit.address}
                </p>

                <dl className="mt-10 grid grid-cols-2 gap-px bg-ink-line">
                  <div className="bg-ink pr-6 pb-6">
                    <dt className="label text-muted-dim">Office</dt>
                    <dd className="mt-2.5 text-base tracking-tight">{unit.office}</dd>
                  </div>
                  <div className="bg-ink pb-6 pl-6">
                    <dt className="label text-muted-dim">Production</dt>
                    <dd className="mt-2.5 text-base tracking-tight">{unit.production}</dd>
                  </div>
                </dl>

                <p className="label mt-8 text-muted-dim">Key features</p>
                <ul className="mt-5 space-y-3">
                  {unit.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-baseline gap-3 text-sm text-paper/75"
                    >
                      <span aria-hidden="true" className="text-accent-soft">
                        —
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={unit.map}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn label mt-9 border border-ink-line text-paper hover:border-paper"
                >
                  View on map ↗
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ 04 — PRINCIPLES ══════════════ */}
      <section className="shell section-y">
        <SectionHeading
          eyebrow="04 — Core principles"
          lines={["What we hold", "ourselves to."]}
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-[10px] border border-line bg-line md:mt-20 md:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle, i) => (
            <Reveal
              key={principle.index}
              delay={i * 80}
              className="bg-paper px-7 py-10 transition-colors duration-500 hover:bg-paper-dim md:px-8"
            >
              <span className="label text-accent">{principle.index}</span>
              <h3 className="mt-9 text-xl leading-tight font-medium tracking-tight lg:min-h-[2.5em]">
                {principle.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink/65">{principle.detail}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-16 flex flex-wrap items-center gap-3">
          <Link href="/services" className="btn label group bg-ink text-paper hover:bg-accent">
            Explore our services
            <span className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
              →
            </span>
          </Link>
          <Link
            href="/contact"
            className="btn label border border-line text-ink hover:border-ink"
          >
            Talk to our team
          </Link>
        </Reveal>
      </section>
    </>
  );
}
