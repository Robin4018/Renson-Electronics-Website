import Link from "next/link";
import { company, nav, units } from "@/lib/content";
import { Logo } from "./logo";

const serviceLinks = [
  { label: "Powder Coating", href: "/services#powder-coating" },
  { label: "Voltage Stabilizers", href: "/services#voltage-stabilizers" },
  { label: "Battery Chargers", href: "/services#battery-chargers" },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper">
      <div className="shell">
        {/* Facilities takes five columns and lays its two units side by side.
            Stacked in a four-column well it ran to roughly twice the height of
            anything beside it, and since grid rows take the height of their
            tallest cell, every other column ended in a long empty tail —
            171px under Capabilities alone. Widening it and halving its height
            lets the row be governed by the brand column instead. */}
        <div className="hairline-dark grid grid-cols-2 gap-x-8 gap-y-8 section-y md:gap-y-12 lg:grid-cols-12">
          <div className="col-span-2 lg:col-span-3">
            <Logo tone="light" height={34} />
            {/* Hidden below md only. Four lines of brand copy is a sixth of
                the footer on a phone, and it repeats what the home and about
                pages already say; the logo and the two chips carry the same
                signal in a fraction of the space. It is still served and still
                read by crawlers — only the phone layout drops it. */}
            <p className="mt-5 hidden max-w-xs text-sm leading-relaxed text-muted-dim md:mt-6 md:block">
              {company.blurb}
            </p>
            <div className="mt-6 flex flex-wrap gap-2 md:mt-7">
              <span className="chip label border-ink-line text-muted-dim">
                MSME Registered
              </span>
              <span className="chip label border-ink-line text-muted-dim">
                Est. {company.since}
              </span>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="label text-muted-dim">Navigation</h3>
            <ul className="mt-4 space-y-2.5 md:mt-5 md:space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="tap text-sm text-paper/85 transition-colors duration-300 hover:text-accent-soft"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="label text-muted-dim">Capabilities</h3>
            <ul className="mt-4 space-y-2.5 md:mt-5 md:space-y-3">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="tap text-sm text-paper/85 transition-colors duration-300 hover:text-accent-soft"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-5">
            <h3 className="label text-muted-dim">Facilities</h3>
            <ul className="mt-5 grid gap-x-8 gap-y-5 sm:grid-cols-2 sm:gap-y-7">
              {units.map((unit) => (
                <li key={unit.tag}>
                  <p className="label text-accent-soft">{unit.tag}</p>
                  <p className="mt-2 text-sm leading-snug text-paper/85 md:leading-relaxed">
                    {unit.address}
                  </p>
                  <a
                    href={`tel:${unit.phone.replace(/\s/g, "")}`}
                    className="tap mt-1.5 inline-block text-sm text-muted-dim transition-colors hover:text-paper"
                  >
                    {unit.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hairline-dark flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between md:gap-10 md:py-7">
          {/* Both registry numbers on one row. Each label stays with its own
              number as a pair, and the pairs are set a step smaller on a
              phone so the two fit the width together rather than stacking. */}
          <dl className="flex flex-wrap items-baseline gap-x-5 gap-y-1 md:gap-x-8">
            <div className="flex items-baseline gap-2">
              <dt className="label text-[0.6875rem] text-muted-dim md:text-[0.8125rem]">
                GST
              </dt>
              <dd className="label text-[0.6875rem] text-paper/70 md:text-[0.8125rem]">
                {company.gst}
              </dd>
            </div>
            <div className="flex items-baseline gap-2">
              <dt className="label text-[0.6875rem] text-muted-dim md:text-[0.8125rem]">
                UDYAM
              </dt>
              <dd className="label text-[0.6875rem] text-paper/70 md:text-[0.8125rem]">
                {company.udyam}
              </dd>
            </div>
          </dl>
          {/* On a phone the brand line and the copyright share one row rather
              than taking one each; md:contents dissolves this wrapper so the
              desktop row stays the three-group arrangement it was. Brand line
              first, copyright last — a closing notice belongs at the end. */}
          {/* Side by side in a 380px row these two each wrapped to two lines,
              so pairing them saved no height and cost legibility. Stacked,
              each fits one line. md:contents still dissolves the wrapper so
              the desktop row keeps its three-group arrangement. */}
          <div className="flex flex-col gap-1.5 md:contents">
            <p className="label text-muted-dim">{company.tagline}</p>
            <p className="label text-muted-dim">
              © {new Date().getFullYear()} {company.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
