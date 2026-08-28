import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Eyebrow } from "@/components/eyebrow";
import { BigLink } from "@/components/big-link";
import { Reveal } from "@/components/reveal";
import { Counter } from "@/components/counter";
import { company, projects, sectors, gallery, stats } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Industrial powder coating, voltage stabilizers and battery chargers — consistent quality across every batch since 1986.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="C — Projects"
        meta="Since 1986"
        lines={["Excellence in", "execution."]}
        intro="From large-scale industrial panel boards to precision-engineered voltage regulation systems, Renson Electronics delivers consistent quality across every batch."
        band={{
          src: "/images/band-parts.jpg",
          alt: "Machined metal components staged for finishing",
          caption: "Machined components staged for finishing",
        }}
      />

      {/* ══════════════ 01 — SELECTED WORK ══════════════ */}
      <section className="shell section-y">
        <SectionHeading
          eyebrow="01 — Selected work"
          lines={["Three divisions,", "one benchmark."]}
          intro="Each division runs its own line and its own quality gate — but every order leaves under the same dispatch commitment."
        />

        <div className="mt-14 md:mt-20">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 90}>
              <article className="grid grid-cols-1 gap-x-8 gap-y-8 border-t border-line py-12 last:border-b md:grid-cols-12 md:py-16">
                <div className="md:col-span-1">
                  <span className="label text-muted">{project.index}</span>
                </div>

                <div className="md:col-span-5">
                  <Reveal
                    variant="clip"
                    delay={80}
                    className="frame relative block aspect-[4/3] w-full"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(min-width: 768px) 40vw, 100vw"
                      className="object-cover"
                    />
                  </Reveal>
                </div>

                <div className="md:col-span-5 md:col-start-8">
                  <p className="label text-accent">{project.kicker}</p>
                  <h3 className="display-md mt-4">{project.title}</h3>
                  <p className="mt-6 text-base leading-relaxed text-ink/75">
                    {project.detail}
                  </p>

                  <dl className="mt-9">
                    {project.facts.map(([key, value]) => (
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

                  <Link
                    href={project.href}
                    className="btn label group mt-9 border border-line text-ink hover:border-ink"
                  >
                    Explore details
                    <span className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal delay={120} className="mt-14">
            <BigLink href="/services">See how we make them</BigLink>
          </Reveal>
        </div>
      </section>

      {/* ══════════════ 02 — GALLERY ══════════════ */}
      <section className="border-t border-line bg-paper-dim section-y">
        <div className="shell">
          <SectionHeading
            eyebrow="02 — On the floor"
            lines={["Finish, tolerance,", "repeatability."]}
            intro="Colour matched to specification, thickness checked on every batch, and the same result the second time you order it."
          />

          <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-12">
            {gallery.map((item, i) => (
              <Reveal
                key={item.src}
                delay={i * 90}
                className={`group ${item.span} md:h-[26rem]`}
              >
                <div className="frame relative aspect-[16/10] w-full md:aspect-auto md:h-full">
                  <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-6">
                    <p className="label max-w-[28ch] text-paper">{item.caption}</p>
                    <span
                      aria-hidden="true"
                      className="text-lg text-paper/80 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                    >
                      ↗
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ 03 — SECTORS ══════════════ */}
      <section className="shell section-y">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <Eyebrow className="text-accent">03 — Who we work with</Eyebrow>
              <h2 className="display-lg mt-6">
                Industries
                <br />
                <span className="text-muted">we serve.</span>
              </h2>
              <p className="mt-8 max-w-sm text-base leading-relaxed text-ink/75">
                Manufacturers, fabricators and OEMs across Tamil Nadu rely on
                Renson for finishing and power electronics they do not have to
                think about twice.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <Reveal delay={120}>
              <ul className="grid sm:grid-cols-2 sm:gap-x-8 sm:[&>li:nth-child(2)]:border-t">
                {sectors.map((sector) => (
                  <li
                    key={sector}
                    className="border-b border-line py-4 text-lg tracking-tight first:border-t"
                  >
                    {sector}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={200} className="mt-12 grid grid-cols-3 gap-px bg-line">
              {stats.slice(0, 3).map((stat) => (
                <div key={stat.label} className="bg-paper pt-6 pr-6">
                  <p className="font-display text-3xl tracking-tight">
                    <Counter to={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="label mt-3 text-muted">{stat.unit}</p>
                </div>
              ))}
            </Reveal>
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
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow className="text-accent-soft">Get a quote</Eyebrow>
              <h2 className="display-lg mt-7">
                Interested in a high-quality finish for your project?
              </h2>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="btn label group bg-paper text-ink hover:bg-accent hover:text-paper"
                >
                  Get a quote today
                  <span className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
                    →
                  </span>
                </Link>
                <a
                  href={`https://wa.me/${company.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn label border border-ink-line text-paper hover:border-paper"
                >
                  WhatsApp us
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
