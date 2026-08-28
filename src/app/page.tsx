import Image from "next/image";
import Link from "next/link";
import { Reveal, MaskLine } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Eyebrow } from "@/components/eyebrow";
import { BigLink } from "@/components/big-link";
import { Counter } from "@/components/counter";
import {
  company,
  stats,
  capabilities,
  process,
  units,
  differentiators,
  finishes,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* ══════════════ HERO ══════════════ */}
      <section
        data-dark-hero
        className="relative flex h-[100svh] min-h-[600px] w-full flex-col justify-end overflow-hidden"
      >
        <Image
          src="/images/hero-coating.jpg"
          alt="Technician applying powder coating to a large metal frame inside a spray booth"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/20 to-ink/90" />
        {/* keeps the headline legible whatever the photograph is doing behind it */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/55 via-ink/10 to-transparent" />

        <div className="shell relative pb-10 md:pb-14">
          <Reveal variant="lines">
            <h1 className="display-xl text-paper">
              <MaskLine>Built</MaskLine>
              <MaskLine delay={110}>to last</MaskLine>
            </h1>
          </Reveal>

          <Reveal
            delay={320}
            className="mt-10 flex flex-wrap items-center justify-between gap-x-10 gap-y-6 border-t border-paper/25 pt-6"
          >
            <p className="label text-paper/75">
              Est. {company.since} — {company.location}
              <span className="mx-3 text-paper/40">/</span>
              MSME Registered
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="btn label group border border-paper bg-paper text-ink hover:bg-transparent hover:text-paper"
              >
                Start a project
                <span className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <Link
                href="/services"
                className="btn label border border-paper/40 text-paper hover:border-paper"
              >
                Our capabilities
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════ STATEMENT ══════════════ */}
      <section className="shell section-y">
        <Reveal variant="lines" className="text-center">
          <h2 className="display-lg mx-auto max-w-[20ch]">
            <MaskLine>Surface finishing,</MaskLine>
            <MaskLine delay={100}>
              <span className="text-muted">redefined.</span>
            </MaskLine>
          </h2>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-3xl gap-x-12 gap-y-6 md:mt-16 md:grid-cols-2">
          <Reveal delay={120}>
            <p className="text-sm leading-relaxed text-muted">
              Electrostatic powder coating across two dedicated units — a
              seven-stage pre-treatment, ITW Gema application and a controlled
              205&ndash;215&deg;C cure behind every finish.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-sm leading-relaxed text-muted">
              Voltage stabilizers from 0.2 to 10 KVA and industrial battery
              chargers, manufactured and tested in-house, backed by our own
              after-sales engineers.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Full-bleed interlude */}
      <Reveal
        variant="clip"
        className="relative block h-[52vh] min-h-[300px] w-full md:h-[68vh]"
      >
        <Image
          src="/images/facility.jpg"
          alt="Production hall with press machinery and overhead gantry"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </Reveal>

      {/* ══════════════ 01 — WHO WE ARE ══════════════ */}
      <section className="shell section-y">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-12">
          <div className="md:col-span-4 lg:col-span-3">
            <Reveal>
              <Eyebrow className="text-accent">01 — Who we are</Eyebrow>
              <dl className="mt-8">
                {[
                  ["Founded", "1986, Coimbatore"],
                  ["Established", "December 1989"],
                  ["Divisions", "Coating & Electronics"],
                  ["Units", "Two, 15,000 sq ft"],
                  ["Land", "80,000 sq ft owned"],
                ].map(([key, value]) => (
                  <div
                    key={key}
                    className="flex items-baseline justify-between gap-6 border-b border-line py-3.5 first:border-t"
                  >
                    <dt className="label text-muted">{key}</dt>
                    <dd className="text-right text-sm font-medium tracking-tight">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="md:col-span-8 lg:col-span-7 lg:col-start-6">
            <Reveal>
              <p className="text-lg leading-relaxed text-ink/80 md:text-xl">
                Renson Electronics is a registered MSME, promoted in 1986 and
                formally established in December 1989 in Coimbatore. For over
                three decades we have manufactured voltage stabilizers and
                battery chargers for industrial clients across Tamil Nadu.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-7 text-base leading-relaxed text-muted">
                In 2001 we diversified into surface finishing with our Powder
                Coating Division — investing in advanced machinery, dedicated
                facilities and specialised personnel to deliver world-class
                coating solutions under one roof.
              </p>
            </Reveal>

            <Reveal delay={220} className="mt-12">
              <BigLink href="/about">Read more about us</BigLink>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════ STATS ══════════════ */}
      <section className="border-y border-line bg-paper-dim">
        <div className="shell">
          <dl className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {stats.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={i * 70}
                className="hairline flex flex-col py-10 pr-6 md:py-12 lg:border-r lg:border-line lg:pr-8 lg:pl-8 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd className="display-md font-display text-ink">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </dd>
                <p className="mt-5 max-w-[18ch] flex-1 text-sm leading-snug text-ink/70">
                  {stat.label}
                </p>
                <p className="label mt-5 text-muted">{stat.unit}</p>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>


      {/* ══════════════ 02 — CAPABILITIES ══════════════ */}
      <section className="border-t border-line bg-paper-dim section-y">
        <div className="shell">
          <SectionHeading
            eyebrow="02 — Core capabilities"
            lines={["Three pillars of", "industrial excellence."]}
            intro="Precision-engineered solutions trusted by manufacturers, fabricators and OEMs across Tamil Nadu."
          />

          <div className="mt-14 border-t border-line md:mt-20">
            {capabilities.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <Link
                  href={item.href}
                  className="group grid grid-cols-1 items-start gap-x-8 gap-y-6 border-b border-line py-10 md:grid-cols-12 md:py-12"
                >
                  <span className="label pt-1.5 text-muted md:col-span-1">{item.index}</span>

                  <div className="md:col-span-3">
                    <p className="label mb-3.5 text-accent">{item.kicker}</p>
                    <h3 className="display-md">{item.title}</h3>
                  </div>

                  <div className="frame relative aspect-[4/3] w-full md:col-span-3">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 768px) 24vw, 100vw"
                      className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                  </div>

                  <div className="md:col-span-4">
                    <p className="text-sm leading-relaxed text-ink/70">
                      {item.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.specs.map((spec) => (
                        <span
                          key={spec}
                          className="chip label text-muted group-hover:border-ink/25 group-hover:text-ink"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <span
                    aria-hidden="true"
                    className="hidden justify-self-end pt-1 text-2xl leading-none text-muted transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:text-accent md:col-span-1 md:block"
                  >
                    →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={140} className="mt-14">
            <BigLink href="/services">See all services</BigLink>
          </Reveal>
        </div>
      </section>

      {/* ══════════════ 03 — PROCESS ══════════════ */}
      <section className="shell section-y">
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="md:sticky md:top-32">
              <Reveal>
                <Eyebrow className="text-accent">03 — The standard</Eyebrow>
                <h2 className="display-lg mt-6">
                  Ten steps.
                  <br />
                  <span className="text-muted">No shortcuts.</span>
                </h2>
                <p className="mt-8 max-w-sm text-sm leading-relaxed text-ink/70">
                  Every component moves through a fixed, audited sequence — from
                  inward inspection to a 205&ndash;215&deg;C cure and final
                  dispatch within 48 hours of clearance.
                </p>
                <div className="mt-9 inline-flex items-baseline gap-4 rounded-[10px] border border-line px-6 py-4">
                  <span className="font-display text-3xl tracking-tight">
                    205&ndash;215&deg;C
                  </span>
                  <span className="label text-muted">Cure window</span>
                </div>
              </Reveal>
            </div>
          </div>

          <ol className="md:col-span-8">
            {process.map((item, i) => (
              <Reveal
                key={item.step}
                delay={(i % 4) * 60}
                as="li"
                className="group grid grid-cols-[2.5rem_1fr] items-baseline gap-x-4 border-b border-line py-6 first:border-t md:grid-cols-[3rem_minmax(0,1fr)_minmax(0,1.15fr)] md:gap-x-8"
              >
                <span className="label text-muted transition-colors duration-300 group-hover:text-accent">
                  {item.step}
                </span>
                <h3 className="text-lg font-medium tracking-tight md:text-xl">
                  {item.name}
                </h3>
                <p className="col-start-2 mt-2.5 text-sm leading-relaxed text-ink/60 md:col-start-3 md:mt-0">
                  {item.detail}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ══════════════ 04 — FACILITIES ══════════════ */}
      <section className="bg-ink text-paper section-y">
        <div className="shell">
          <SectionHeading
            eyebrow="04 — Infrastructure"
            lines={["Two units,", <span key="b" className="text-muted-dim">one standard.</span>]}
            intro="15,000 sq ft of covered production across 80,000 sq ft of company-owned land in Coimbatore."
            tone="light"
          />

          <Reveal
            variant="clip"
            delay={120}
            className="frame relative mt-14 block aspect-[16/9] w-full md:mt-20 md:aspect-[24/9]"
          >
            <Image
              src="/images/facility.jpg"
              alt="Production hall with press machinery and overhead gantry"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </Reveal>

          <div className="mt-14 grid border-t border-ink-line md:mt-16 md:grid-cols-2">
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
                  <a
                    href={unit.map}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label text-muted-dim transition-colors duration-300 hover:text-paper"
                  >
                    View on map ↗
                  </a>
                </div>

                <h3 className="display-md mt-9">{unit.name}</h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/60">
                  {unit.address}
                </p>

                <dl className="mt-10">
                  {unit.rows.map(([key, value]) => (
                    <div
                      key={key}
                      className="hairline-dark flex items-baseline justify-between gap-6 py-4"
                    >
                      <dt className="label text-muted-dim">{key}</dt>
                      <dd className="text-right text-sm font-medium tracking-tight text-paper">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ 05 — FINISHES ══════════════ */}
      <section className="shell section-y">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <Reveal
              variant="clip"
              className="frame relative block aspect-[4/3] w-full"
            >
              <Image
                src="/images/finishes.jpg"
                alt="Fan of powder coating colour swatches"
                fill
                sizes="(min-width: 768px) 46vw, 100vw"
                className="object-cover"
              />
            </Reveal>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <Reveal>
              <Eyebrow className="text-accent">05 — Colour &amp; finish</Eyebrow>
              <h2 className="display-lg mt-6">
                Any shade.
                <br />
                <span className="text-muted">Any texture.</span>
              </h2>
              <p className="mt-8 text-base leading-relaxed text-ink/75">
                Our powder coating line handles MS cabinets, panel boards,
                aluminium motor bodies and large industrial parts with consistent
                quality. A seven-stage pre-treatment ensures every surface is
                properly prepared — because a great finish starts long before the
                powder gun.
              </p>
            </Reveal>

            <Reveal delay={160} className="mt-9 flex flex-wrap gap-2">
              {finishes.map((finish) => (
                <span
                  key={finish}
                  className="chip label text-muted hover:border-ink hover:text-ink"
                >
                  {finish}
                </span>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════ 06 — WHY RENSON ══════════════ */}
      <section className="border-t border-line bg-paper-dim section-y">
        <div className="shell">
          <SectionHeading
            eyebrow="06 — Why Renson"
            lines={["Precision in", "every layer."]}
            intro="Nearly four decades of manufacturing experience and two purpose-built facilities that industry leaders depend on."
          />

          <div className="mt-14 grid gap-px overflow-hidden rounded-[10px] border border-line bg-line md:mt-20 md:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((item, i) => (
              <Reveal
                key={item.index}
                delay={i * 80}
                className="flex flex-col bg-paper-dim px-7 py-10 transition-colors duration-500 hover:bg-paper md:px-8"
              >
                <span className="label text-accent">{item.index}</span>
                <h3 className="mt-9 text-xl leading-tight font-medium tracking-tight lg:min-h-[2.5em]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink/65">{item.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ CTA ══════════════ */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <Image
          src="/images/sparks.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/20" />

        <div className="shell relative section-y">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <Reveal variant="lines">
                <Eyebrow className="mb-7 text-accent-soft">Get in touch</Eyebrow>
                <h2 className="display-lg">
                  <MaskLine>Ready to start</MaskLine>
                  <MaskLine delay={100}>your project?</MaskLine>
                </h2>
              </Reveal>

              <Reveal delay={220}>
                <p className="mt-9 max-w-md text-base leading-relaxed text-paper/70">
                  Whether it&rsquo;s a custom coating job, bulk stabilizer orders
                  or a general enquiry — our team responds within 24 hours.
                </p>

                <div className="mt-10 flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/${company.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn label group border border-paper bg-paper text-ink hover:bg-transparent hover:text-paper"
                  >
                    WhatsApp us
                    <span className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                  <a
                    href={`tel:${company.phoneHref}`}
                    className="btn label border border-ink-line text-paper hover:border-paper"
                  >
                    {company.phone}
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
