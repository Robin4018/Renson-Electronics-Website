import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Eyebrow } from "@/components/eyebrow";
import { EnquiryForm } from "@/components/enquiry-form";
import { Reveal } from "@/components/reveal";
import { company, units } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Renson Electronics across two Coimbatore units — Kalapatti Road and Vellanapatti. Powder coating, voltage stabilizer and battery charger enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="D — Contact"
        meta={company.hours}
        lines={["Industrial solutions", "are one message away."]}
        intro="Whether you have a custom powder coating requirement or need technical support for our electronic products, our team is ready to assist across both Coimbatore units."
        aside={
          <dl className="grid grid-cols-2 gap-px bg-line">
            <div className="bg-paper pr-6 pb-6">
              <dt className="label text-muted">Call</dt>
              <dd className="mt-3">
                <a
                  href={`tel:${company.phoneHref}`}
                  className="text-lg tracking-tight transition-colors hover:text-accent"
                >
                  {company.phone}
                </a>
              </dd>
            </div>
            <div className="bg-paper pb-6 pl-6">
              <dt className="label text-muted">Email</dt>
              <dd className="mt-3">
                <a
                  href={`mailto:${company.email}`}
                  className="text-sm break-all transition-colors hover:text-accent"
                >
                  {company.email}
                </a>
              </dd>
            </div>
          </dl>
        }
      />

      {/* ══════════════ 01 — ENQUIRY ══════════════ */}
      <section className="shell section-y">
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <EnquiryForm />
            </Reveal>
          </div>

          <div className="md:col-span-5">
            <Reveal delay={140}>
              <Eyebrow className="text-accent">01 — Our facilities</Eyebrow>
              <h2 className="display-md mt-6">Two manufacturing units.</h2>
            </Reveal>

            <div className="mt-10 space-y-px bg-line">
              {units.map((unit, i) => (
                <Reveal key={unit.tag} delay={200 + i * 100} className="bg-paper py-7">
                  <div className="flex items-center justify-between gap-4">
                    <span className="chip label text-accent">{unit.tag}</span>
                    <span className="label text-muted">{unit.scope}</span>
                  </div>

                  <h3 className="mt-6 text-xl font-medium tracking-tight">{unit.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">{unit.address}</p>

                  <dl className="mt-6 space-y-2.5">
                    <div className="flex items-baseline justify-between gap-6">
                      <dt className="label text-muted">Phone</dt>
                      <dd>
                        <a
                          href={`tel:${unit.phone.replace(/\s/g, "")}`}
                          className="text-sm tracking-tight transition-colors hover:text-accent"
                        >
                          {unit.phone}
                        </a>
                      </dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-6">
                      <dt className="label text-muted">Hours</dt>
                      <dd className="text-sm">{company.hours}</dd>
                    </div>
                  </dl>

                  <a
                    href={unit.map}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn label mt-7 border border-line text-ink hover:border-ink"
                  >
                    View on map ↗
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal delay={420} className="mt-10 rounded-[10px] border border-line bg-paper-dim p-7">
              <p className="label text-muted">Compliance</p>
              <dl className="mt-5 space-y-3">
                <div className="flex items-baseline justify-between gap-6">
                  <dt className="text-sm text-ink/70">GST</dt>
                  <dd className="text-sm font-medium tracking-tight">{company.gst}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-6">
                  <dt className="text-sm text-ink/70">UDYAM</dt>
                  <dd className="text-sm font-medium tracking-tight">{company.udyam}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-6">
                  <dt className="text-sm text-ink/70">Constitution</dt>
                  <dd className="text-sm font-medium tracking-tight">
                    {company.constitution}
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════ 02 — MAPS ══════════════ */}
      <section className="border-t border-line bg-paper-dim section-y">
        <div className="shell">
          <SectionHeading
            eyebrow="02 — Facility map"
            lines={["Visit our", "manufacturing units."]}
            intro="Both units sit within Coimbatore — Unit I off Kalapatti Road, Unit II at Vellanapatti near the COINDIA foundry division."
          />

          <div className="mt-14 grid gap-8 md:mt-20 md:grid-cols-2">
            {units.map((unit, i) => (
              <Reveal key={unit.tag} delay={i * 120}>
                <div className="frame relative aspect-[4/3] w-full border border-line bg-paper">
                  <iframe
                    src={unit.embed}
                    title={`Map of ${unit.name}`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 h-full w-full border-0"
                  />
                </div>
                <div className="mt-5 flex flex-wrap items-baseline justify-between gap-4">
                  <div>
                    <p className="label text-accent">{unit.tag}</p>
                    <p className="mt-2.5 text-base tracking-tight">{unit.name}</p>
                  </div>
                  <a
                    href={unit.map}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label text-muted transition-colors hover:text-ink"
                  >
                    Open in Google Maps ↗
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ CTA ══════════════ */}
      <section className="bg-ink text-paper section-y">
        <div className="shell">
          <div className="grid grid-cols-1 items-end gap-x-8 gap-y-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <Reveal>
                <Eyebrow className="text-accent-soft">Prefer to talk?</Eyebrow>
                <h2 className="display-lg mt-7">
                  We answer
                  <br />
                  <span className="text-muted-dim">within 24 hours.</span>
                </h2>
              </Reveal>
            </div>

            <div className="md:col-span-5">
              <Reveal delay={160}>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/${company.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn label group bg-paper text-ink hover:bg-accent hover:text-paper"
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
                <p className="label mt-7 text-muted-dim">{company.hours}</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
