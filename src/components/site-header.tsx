"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type MouseEvent } from "react";
import { nav, company } from "@/lib/content";
import { Logo } from "./logo";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [overDark, setOverDark] = useState(false);
  const [open, setOpen] = useState(false);

  // The header CTA points at /contact, so it is dead weight on that page.
  const onContact = pathname.startsWith("/contact");
  const showEnquire = scrolled && !onContact;

  // Everywhere else the logo is an ordinary link home and Next scrolls to the
  // top for us. On the home page the route never changes, so the click is a
  // no-op and the visitor stays where they scrolled to — take it over and ride
  // back up by hand. Modified clicks are left alone so "open in new tab" works.
  const returnToTop = (e: MouseEvent<HTMLAnchorElement>) => {
    setOpen(false);
    if (pathname !== "/") return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  // A page may open with a full-bleed dark hero (marked data-dark-hero). While
  // the header sits over it, it stays transparent and inverts to light type.
  useEffect(() => {
    const hero = document.querySelector<HTMLElement>("[data-dark-hero]");
    let heroHeight = hero?.offsetHeight ?? 0;
    let frame = 0;

    const measure = () => {
      frame = 0;
      const y = window.scrollY;
      setScrolled(y > 16);
      setOverDark(!!hero && y < heroHeight - 96);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    const onResize = () => {
      heroHeight = hero?.offsetHeight ?? 0;
      onScroll();
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled && !overDark && !open
            ? "border-b border-line bg-paper/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="shell flex h-20 items-center justify-between gap-6 md:h-24">
          <Link
            href="/"
            aria-label={`${company.name} — home`}
            draggable={false}
            onClick={returnToTop}
            className="artwork-protected-link shrink-0"
          >
            <Logo
              tone={open || overDark ? "light" : "dark"}
              height={30}
              priority
              className="transition-opacity duration-300 hover:opacity-70"
            />
          </Link>

          <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary">
            {nav.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link key={item.href} href={item.href} className="group relative py-2">
                  <span
                    aria-current={active ? "page" : undefined}
                    className={`label transition-colors duration-300 ${
                      overDark
                        ? active
                          ? "text-paper"
                          : "text-paper/65 group-hover:text-paper"
                        : active
                          ? "text-ink"
                          : "text-muted group-hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </span>
                  <span
                    className={`absolute bottom-0 left-0 h-px transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      overDark ? "bg-paper" : "bg-accent"
                    } ${active ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            {/* On /contact the button would only point at the page you are
                already reading, so it sits out entirely there. */}
            <Link
              href="/contact"
              aria-hidden={!showEnquire}
              tabIndex={showEnquire ? undefined : -1}
              className={`btn label hidden py-3.5 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                onContact ? "sm:hidden" : "sm:inline-flex"
              } ${
                showEnquire
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-1 opacity-0"
              } ${
                overDark
                  ? "border border-paper text-paper [--btn-fill:var(--color-paper)] hover:text-ink"
                  : "border border-ink text-ink [--btn-fill:var(--color-ink)] hover:text-paper"
              }`}
            >
              Enquire
              <span aria-hidden="true" className="btn-arrow">
                →
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="relative z-50 -mr-2 flex h-11 w-11 items-center justify-center lg:hidden"
            >
              <span className="relative block h-3 w-6">
                <span
                  className={`absolute left-0 block h-px w-6 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    open
                      ? "top-1.5 rotate-45 bg-paper"
                      : `top-0 ${overDark ? "bg-paper" : "bg-ink"}`
                  }`}
                />
                <span
                  className={`absolute left-0 block h-px w-6 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    open
                      ? "top-1.5 -rotate-45 bg-paper"
                      : `top-3 ${overDark ? "bg-paper" : "bg-ink"}`
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay.

          It scrolls. The panel used to be exactly h-full with no overflow,
          while the body behind it is locked the whole time the menu is open —
          so on any screen too short for five items plus the contact block,
          the bottom of the menu was simply stranded: 105px of it out of reach
          at 430px, which is a small phone, or any phone held sideways.
          min-h-full lets the panel grow past the screen and overflow-y-auto
          lets a thumb reach the rest of it; overscroll-contain stops the
          scroll handing off to the page underneath at the ends. */}
      <div
        className={`fixed inset-0 z-40 overflow-y-auto overscroll-contain bg-ink transition-[opacity,visibility] duration-500 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="shell flex min-h-full flex-col justify-between pt-24 pb-[calc(3rem+env(safe-area-inset-bottom,0px))] sm:pt-28">
          <nav className="flex flex-col" aria-label="Mobile">
            {nav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="hairline-dark flex items-baseline justify-between gap-6 py-4 last:border-b last:border-ink-line sm:py-5"
                style={{
                  transitionDelay: `${open ? 140 + i * 60 : 0}ms`,
                  transform: open ? "none" : "translateY(14px)",
                  opacity: open ? 1 : 0,
                  transitionProperty: "transform, opacity",
                  transitionDuration: "700ms",
                  transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
                }}
              >
                <span className="display-md text-paper">{item.label}</span>
                <span className="label text-muted-dim">0{i + 1}</span>
              </Link>
            ))}
          </nav>

          {/* Two buttons rather than the number and address set as text. A
              pill is a plain target for a thumb and says what tapping it
              does; the raw strings only read as contact details once you
              already know they are links. .btn carries its own height, so
              neither needs the .tap hit-area rule any more. */}
          <div className="pt-10">
            <p className="label mb-4 text-muted-dim">Get in touch</p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${company.phoneHref}`}
                onClick={() => setOpen(false)}
                className="btn label group border border-paper bg-paper text-ink hover:bg-transparent hover:text-paper"
              >
                Call us
                <span className="btn-arrow" aria-hidden="true">
                  →
                </span>
              </a>
              <a
                href={`mailto:${company.email}`}
                onClick={() => setOpen(false)}
                className="btn label border border-ink-line text-paper hover:border-paper"
              >
                Email us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
