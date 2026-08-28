import Link from "next/link";
import { company, nav, units } from "@/lib/content";
import { Logo } from "./logo";
import { Marquee } from "./marquee";

const serviceLinks = [
  { label: "Powder Coating", href: "/services#powder-coating" },
  { label: "Voltage Stabilizers", href: "/services#voltage-stabilizers" },
  { label: "Battery Chargers", href: "/services#battery-chargers" },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper">
      <Marquee
        items={[
          "Powder Coating",
          "Voltage Stabilizers",
          "Battery Chargers",
          "MSME Registered",
          "Coimbatore, Tamil Nadu",
          "Since 1986",
        ]}
      />

      <div className="shell">
        <div className="hairline-dark grid grid-cols-2 gap-x-8 gap-y-14 py-16 md:py-20 lg:grid-cols-12">
          <div className="col-span-2 lg:col-span-4">
            <Logo tone="light" height={34} />
            <p className="mt-7 max-w-xs text-sm leading-relaxed text-muted-dim">
              {company.blurb}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
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
            <ul className="mt-6 space-y-3.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-paper/85 transition-colors duration-300 hover:text-accent-soft"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="label text-muted-dim">Capabilities</h3>
            <ul className="mt-6 space-y-3.5">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-paper/85 transition-colors duration-300 hover:text-accent-soft"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-4">
            <h3 className="label text-muted-dim">Facilities</h3>
            <ul className="mt-6 space-y-6">
              {units.map((unit) => (
                <li key={unit.tag}>
                  <p className="label text-accent-soft">{unit.tag}</p>
                  <p className="mt-2.5 max-w-sm text-sm leading-relaxed text-paper/85">
                    {unit.address}
                  </p>
                  <a
                    href={`tel:${unit.phone.replace(/\s/g, "")}`}
                    className="mt-1.5 inline-block text-sm text-muted-dim transition-colors hover:text-paper"
                  >
                    {unit.phone}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${company.email}`}
              className="mt-7 inline-block text-sm text-paper/85 underline decoration-ink-line underline-offset-4 transition-colors hover:text-accent-soft"
            >
              {company.email}
            </a>
          </div>
        </div>

        <div className="hairline-dark flex flex-col gap-5 py-8 md:flex-row md:items-center md:justify-between md:gap-10">
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            <span className="label text-muted-dim">
              GST <span className="ml-2 text-paper/70">{company.gst}</span>
            </span>
            <span className="label text-muted-dim">
              UDYAM <span className="ml-2 text-paper/70">{company.udyam}</span>
            </span>
          </div>
          <p className="label text-muted-dim">
            © {new Date().getFullYear()} {company.name}
          </p>
          <p className="label text-muted-dim">{company.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
