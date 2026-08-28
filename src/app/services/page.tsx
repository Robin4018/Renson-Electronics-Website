import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ServiceNav } from "@/components/service-nav";
import { Reveal } from "@/components/reveal";
import {
  company,
  process,
  units,
  components,
  finishes,
  stabilizerSpecs,
  stabilizerAdvantages,
  electronicsEquipment,
  chargerFeatures,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Electrostatic powder coating with a 10-step process, voltage stabilizers from 0.2 to 10 KVA, and industrial battery chargers — manufactured in Coimbatore.",
};

const sections = [
  { id: "powder-coating", label: "Powder Coating" },
  { id: "voltage-stabilizers", label: "Voltage Stabilizers" },
  { id: "battery-chargers", label: "Battery Chargers" },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="B — Services"
        meta="Two units · One roof"
        lines={["Industrial services", "built to perform."]}
        intro="From precision surface coating to reliable electrical manufacturing — all under one roof in Coimbatore, with the same standard applied to a single panel board or a 15 ft fabrication."
        band={{
          src: "/images/band-factory.jpg",
          alt: "Factory floor with production machinery",
          caption: "Precision manufacturing on the production floor",
        }}
      />

      <ServiceNav items={sections} />

      {/* ══════════════ POWDER COATING ══════════════ */}
      <section id="powder-coating" className="shell section-y scroll-mt-40">
        <SectionHeading
          eyebrow="01 — Surface finishing"
          lines={["Professional powder", "coating services."]}
          intro="Industrial-grade electrostatic application across two dedicated units, with a comprehensive pre-treatment line behind every finish."
        />

        <div className="mt-14 grid grid-cols-1 items-center gap-x-8 gap-y-12 md:mt-20 md:grid-cols-12">
          <Reveal
            variant="clip"
            className="relative block aspect-[4/3] w-full overflow-hidden md:col-span-6"
          >
            <Image
              src="/images/powder-coating.jpg"
              alt="Spray gun coating metal panels inside a booth"
              fill
              sizes="(min-width: 768px) 46vw, 100vw"
              className="object-cover"
            />
          </Reveal>

          <div className="md:col-span-5 md:col-start-8">
            <Reveal>
              <p className="text-base leading-relaxed text-ink/75">
                We provide industrial-grade powder coating across two dedicated
                units. Our electrostatic application process, combined with a
                comprehensive 7-tank pre-treatment system, guarantees superior
                adhesion and a durable, high-impact finish that holds its colour
                and resists corrosion in service.
              </p>
            </Reveal>

            <Reveal delay={140} className="mt-10 grid grid-cols-2 gap-px bg-line">
              {[
                ["Pre-treatment", "7-tank automated"],
                ["Cure window", "205 – 215°C"],
                ["Max component", "15 ft length"],
                ["Dispatch", "Within 48 hours"],
              ].map(([label, value]) => (
                <div key={label} className="bg-paper pt-6 pr-6 pb-6">
                  <p className="label text-muted">{label}</p>
                  <p className="mt-2.5 text-lg tracking-tight">{value}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>

        {/* 10-step process */}
        <Reveal className="mt-20 md:mt-28">
          <p className="label text-accent">The standard</p>
          <h3 className="display-md mt-5">10-step coating process</h3>
        </Reveal>

        <ol className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {process.map((item, i) => (
            <Reveal
              key={item.step}
              as="li"
              delay={(i % 5) * 70}
              className="flex flex-col bg-paper px-6 py-8 transition-colors duration-500 hover:bg-paper-dim"
            >
              <span className="label text-accent">{item.step}</span>
              <h4 className="mt-7 text-base leading-snug font-medium tracking-tight lg:min-h-[3em]">
                {item.name}
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">{item.detail}</p>
            </Reveal>
          ))}
        </ol>

        {/* Unit comparison */}
        <Reveal className="mt-20 md:mt-28">
          <p className="label text-accent">Unit comparison</p>
          <h3 className="display-md mt-5">Scaling for all requirements</h3>
        </Reveal>

        <div className="mt-12 grid border-t border-line md:grid-cols-2">
          {units.map((unit, i) => (
            <Reveal
              key={unit.tag}
              delay={i * 110}
              className={`py-10 md:py-12 ${
                i === 0
                  ? "border-b border-line md:border-b-0 md:pr-12"
                  : "md:border-l md:border-line md:pl-12"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="chip label text-accent">{unit.tag}</span>
                <span className="label text-muted">{unit.scope}</span>
              </div>
              <h4 className="display-md mt-8">{unit.name}</h4>
              <dl className="mt-9">
                {unit.rows.map(([key, value]) => (
                  <div
                    key={key}
                    className="flex items-baseline justify-between gap-6 border-b border-line py-4 first:border-t"
                  >
                    <dt className="label text-muted">{key}</dt>
                    <dd className="text-right text-sm font-medium tracking-tight">{value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          ))}
        </div>

        {/* Components + finishes */}
        <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-12 md:mt-28 md:grid-cols-12">
          <div className="md:col-span-6">
            <Reveal>
              <p className="label text-accent">Versatility</p>
              <h3 className="display-md mt-5">Components we handle</h3>
              <div className="mt-9 flex flex-wrap gap-2">
                {components.map((item) => (
                  <span
                    key={item}
                    className="chip label text-muted hover:border-ink hover:text-ink"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <Reveal delay={120}>
              <p className="label text-accent">Colour &amp; finish</p>
              <h3 className="display-md mt-5">Any shade, any texture</h3>
              <div className="mt-9 flex flex-wrap gap-2">
                {finishes.map((item) => (
                  <span
                    key={item}
                    className="chip label text-muted hover:border-ink hover:text-ink"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════ VOLTAGE STABILIZERS ══════════════ */}
      <section
        id="voltage-stabilizers"
        className="border-t border-line bg-paper-dim section-y scroll-mt-40"
      >
        <div className="shell">
          <SectionHeading
            eyebrow="02 — Electronic division"
            lines={["Precision voltage", "stabilizers."]}
            intro="Manufacturing and supplying stabilizers since 1986, engineered for wide input ranges and stable output."
          />

          <Reveal delay={120} className="mt-14 grid gap-px border border-line bg-line md:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stabilizerSpecs.map((spec) => (
              <div key={spec.label} className="bg-paper-dim px-7 py-9">
                <p className="label text-muted">{spec.label}</p>
                <p className="mt-4 font-display text-2xl tracking-tight md:text-3xl">
                  {spec.value}
                </p>
              </div>
            ))}
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-12">
            <Reveal
              variant="clip"
              className="relative block aspect-[4/3] w-full overflow-hidden md:col-span-5"
            >
              <Image
                src="/images/voltage-stabilizers.jpg"
                alt="Engineer wiring an industrial control cabinet"
                fill
                sizes="(min-width: 768px) 38vw, 100vw"
                className="object-cover"
              />
            </Reveal>

            <div className="md:col-span-7">
              <Reveal>
                <p className="text-base leading-relaxed text-ink/75">
                  Single-phase and three-phase stabilizers from 0.2 KVA to 10 KVA,
                  built to hold a stable output across an input window of 140V to
                  270V — the range that matters for heavy industrial and
                  commercial installations across the region.
                </p>
              </Reveal>

              <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2">
                <Reveal delay={100}>
                  <h4 className="text-lg font-medium tracking-tight">Key advantages</h4>
                  <ul className="mt-6 space-y-3.5">
                    {stabilizerAdvantages.map((advantage) => (
                      <li
                        key={advantage}
                        className="flex items-baseline gap-3 text-sm leading-relaxed text-ink/70"
                      >
                        <span aria-hidden="true" className="text-accent">
                          —
                        </span>
                        {advantage}
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal delay={180}>
                  <h4 className="text-lg font-medium tracking-tight">
                    Equipment &amp; testing
                  </h4>
                  <dl className="mt-6">
                    {electronicsEquipment.map(([key, value]) => (
                      <div
                        key={key}
                        className="flex items-baseline justify-between gap-6 border-b border-line py-3 first:border-t"
                      >
                        <dt className="text-sm text-ink/70">{key}</dt>
                        <dd className="label text-accent">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ BATTERY CHARGERS ══════════════ */}
      <section id="battery-chargers" className="bg-ink text-paper section-y scroll-mt-40">
        <div className="shell">
          <SectionHeading
            eyebrow="03 — Electronic division"
            lines={["Reliable battery", <span key="b" className="text-muted-dim">chargers.</span>]}
            intro="Engineered for consistent output and long operational life. Every unit is tested before dispatch and backed by our own after-sales team."
            tone="light"
          />

          <Reveal
            variant="clip"
            delay={120}
            className="relative mt-14 block aspect-[16/9] w-full overflow-hidden md:mt-20 md:aspect-[24/9]"
          >
            <Image
              src="/images/battery-chargers.jpg"
              alt="Electrical testing of a circuit assembly"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </Reveal>

          <div className="mt-14 grid gap-px bg-ink-line md:grid-cols-2 lg:grid-cols-3">
            {chargerFeatures.map((feature, i) => (
              <Reveal
                key={feature.index}
                delay={(i % 3) * 90}
                className="bg-ink px-7 py-10 md:px-8"
              >
                <span className="label text-accent-soft">{feature.index}</span>
                <p className="label mt-8 text-muted-dim">{feature.kicker}</p>
                <h3 className="mt-3 text-xl font-medium tracking-tight">{feature.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-paper/60">{feature.detail}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-16 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="btn label group bg-paper text-ink hover:bg-brand hover:text-paper"
            >
              Request a quote
              <span className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
                →
              </span>
            </Link>
            <a
              href={`tel:${company.phoneHref}`}
              className="btn label border border-ink-line text-paper hover:border-paper"
            >
              {company.phone}
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
