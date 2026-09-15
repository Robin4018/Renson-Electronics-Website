"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { company, serviceCategories } from "@/lib/content";
import { Eyebrow } from "./eyebrow";

type Fields = {
  name: string;
  organisation: string;
  email: string;
  phone: string;
  category: string;
  message: string;
};

const EMPTY: Fields = {
  name: "",
  organisation: "",
  email: "",
  phone: "",
  category: serviceCategories[0],
  message: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * No backend is wired up yet, so a valid submission composes the enquiry and
 * hands it to the visitor's mail client, with WhatsApp as a fallback. To move
 * to a real endpoint, replace the body of `handoff` with a fetch to your API
 * route — the validation and success states stay as they are.
 */
export function EnquiryForm() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);

  const set = (key: keyof Fields) => (value: string) => {
    setFields((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const summary = () =>
    [
      `Name: ${fields.name}`,
      fields.organisation ? `Company: ${fields.organisation}` : null,
      `Email: ${fields.email}`,
      fields.phone ? `Phone: ${fields.phone}` : null,
      `Service: ${fields.category}`,
      "",
      fields.message,
    ]
      .filter(Boolean)
      .join("\n");

  const handoff = () => {
    const subject = `Enquiry — ${fields.category} — ${fields.name}`;
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(summary())}`;
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const next: Partial<Record<keyof Fields, string>> = {};
    if (!fields.name.trim()) next.name = "Please tell us your name.";
    if (!EMAIL_RE.test(fields.email)) next.email = "Enter a valid email address.";
    if (fields.message.trim().length < 12)
      next.message = "A line or two about your requirement helps us quote accurately.";

    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }

    handoff();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-[10px] border border-line bg-paper p-8 md:p-10">
        <Eyebrow className="text-accent">Enquiry ready</Eyebrow>
        <h3 className="display-md mt-6">Your email is open.</h3>
        <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink/70">
          We&rsquo;ve composed the enquiry in your mail client — send it and
          we&rsquo;ll come back within 24 hours. If nothing opened, message us on
          WhatsApp or write to us directly instead.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(summary())}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn label group border border-ink bg-ink text-paper hover:bg-transparent hover:text-ink"
          >
            Send on WhatsApp
            <span className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
              →
            </span>
          </a>
          <button
            type="button"
            onClick={() => {
              setFields(EMPTY);
              setSent(false);
            }}
            className="btn label border border-line text-ink hover:border-ink"
          >
            New enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-[10px] border border-line bg-paper p-8 md:p-10">
      <Eyebrow className="text-accent">Send an enquiry</Eyebrow>
      <h3 className="display-md mt-6">Tell us what you need.</h3>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <Field
          id="name"
          label="Full name"
          required
          value={fields.name}
          onChange={set("name")}
          error={errors.name}
          placeholder="Your name"
        />
        <Field
          id="organisation"
          label="Company"
          value={fields.organisation}
          onChange={set("organisation")}
          placeholder="Project or company"
        />
        <Field
          id="email"
          label="Email address"
          type="email"
          required
          value={fields.email}
          onChange={set("email")}
          error={errors.email}
          placeholder="you@company.com"
        />
        <Field
          id="phone"
          label="Phone number"
          type="tel"
          value={fields.phone}
          onChange={set("phone")}
          placeholder="+91 00000 00000"
        />
      </div>

      <div className="mt-6">
        <label htmlFor="category" className="label text-muted">
          Service category
        </label>
        <CategorySelect
          id="category"
          value={fields.category}
          options={serviceCategories}
          onChange={set("category")}
        />
      </div>

      <div className="mt-6">
        <label htmlFor="message" className="label text-muted">
          Technical details <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          value={fields.message}
          onChange={(e) => set("message")(e.target.value)}
          placeholder="Component type, quantity, finish or specification…"
          aria-invalid={errors.message ? true : undefined}
          className={`mt-3 w-full resize-y border-b bg-transparent py-3 text-base leading-relaxed transition-colors focus:outline-none ${
            errors.message ? "border-accent" : "border-line focus:border-ink"
          }`}
        />
        {errors.message ? (
          <p className="label mt-2.5 text-accent">{errors.message}</p>
        ) : null}
      </div>

      <button
        type="submit"
        className="btn label group mt-10 w-full justify-center border border-ink bg-ink text-paper hover:bg-transparent hover:text-ink"
      >
        Submit enquiry
        <span className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
          →
        </span>
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  required = false,
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="label text-muted">
        {label} {required ? <span className="text-accent">*</span> : null}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={error ? true : undefined}
        className={`mt-3 w-full border-b bg-transparent py-3 text-base tracking-tight transition-colors focus:outline-none ${
          error ? "border-accent" : "border-line focus:border-ink"
        }`}
      />
      {error ? <p className="label mt-2.5 text-accent">{error}</p> : null}
    </div>
  );
}

/**
 * The service category picker.
 *
 * A native <select> renders its open list through the operating system, so
 * nothing about that list — its typeface, its white ground, the blue band on
 * the highlighted row — can be reached from the page. Only the closed control
 * was ever ours to style. This is a listbox instead, so the open state matches
 * the rest of the form.
 *
 * It follows the combobox pattern rather than inventing one: the trigger owns
 * focus and announces itself with aria-expanded, the open list is a listbox
 * whose current row is named by aria-activedescendant, and arrows, Home, End,
 * Enter, Space and Escape all do what they do in a native select.
 */
function CategorySelect({
  id,
  value,
  options,
  onChange,
}: {
  id: string;
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(() => Math.max(0, options.indexOf(value)));
  const wrapRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // A pointer landing anywhere else closes the list, as a native one does.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  const choose = (index: number) => {
    onChange(options[index]);
    setActive(index);
    setOpen(false);
    triggerRef.current?.focus();
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (!open) {
      if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        setActive(Math.max(0, options.indexOf(value)));
        setOpen(true);
      }
      return;
    }

    if (event.key === "Escape" || event.key === "Tab") {
      setOpen(false);
      if (event.key === "Escape") triggerRef.current?.focus();
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((i) => Math.min(i + 1, options.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (event.key === "Home") {
      event.preventDefault();
      setActive(0);
    } else if (event.key === "End") {
      event.preventDefault();
      setActive(options.length - 1);
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      choose(active);
    }
  };

  return (
    <div ref={wrapRef} className="relative mt-3">
      <button
        type="button"
        id={id}
        ref={triggerRef}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-activedescendant={open ? `${id}-option-${active}` : undefined}
        onClick={() => {
          setActive(Math.max(0, options.indexOf(value)));
          setOpen((o) => !o);
        }}
        onKeyDown={onKeyDown}
        className="flex w-full cursor-pointer items-center justify-between gap-3 border-b border-line bg-transparent py-3 text-left text-base tracking-tight transition-colors hover:border-ink focus-visible:border-ink focus-visible:outline-none"
      >
        <span className="truncate">{value}</span>
        <svg
          aria-hidden="true"
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          className={`shrink-0 text-muted transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          <path
            d="M1 1.5 6 6.5 11 1.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open ? (
        <ul
          role="listbox"
          aria-labelledby={id}
          className="absolute inset-x-0 top-[calc(100%+0.5rem)] z-30 overflow-hidden rounded-[10px] border border-line bg-paper py-1 shadow-[0_20px_44px_-26px_rgba(24,22,20,0.55)]"
        >
          {options.map((option, index) => (
            <li
              key={option}
              id={`${id}-option-${index}`}
              role="option"
              aria-selected={option === value}
              onPointerEnter={() => setActive(index)}
              onClick={() => choose(index)}
              className={`cursor-pointer px-4 py-3 text-sm transition-colors ${
                index === active ? "bg-paper-dim" : ""
              } ${option === value ? "font-medium text-ink" : "text-muted"}`}
            >
              {option}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
