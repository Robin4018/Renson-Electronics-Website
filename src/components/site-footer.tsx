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
        <div className="hairline-dark grid grid-cols-2 gap-x-8 gap-y-12 section-y lg:grid-cols-12">
          <div className="col-span-2 lg:col-span-3">
            <Logo tone="light" height={34} />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-dim">
              {company.blurb}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
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
            <ul className="mt-5 space-y-3">
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
            <ul className="mt-5 space-y-3">
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
            <ul className="mt-5 grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {units.map((unit) => (
                <li key={unit.tag}>
                  <p className="label text-accent-soft">{unit.tag}</p>
                  <p className="mt-2 text-sm leading-relaxed text-paper/85">
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

        <div className="hairline-dark flex flex-col gap-4 py-7 md:flex-row md:items-center md:justify-between md:gap-10">
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            <span className="label text-muted-dim">
              GST <span className="ml-2 text-paper/70">{company.gst}</span>
            </span>
            <span className="label text-muted-dim">
              UDYAM <span className="ml-2 text-paper/70">{company.udyam}</span>
            </span>
          </div>
          {/* Brand line first, legal notice last — the copyright is the
              conventional closing mark, and it was sitting mid-row. */}
          <p className="label text-muted-dim">{company.tagline}</p>
          <p className="label text-muted-dim">
            © {new Date().getFullYear()} {company.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
