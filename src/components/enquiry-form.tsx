"use client";

import { useState, type FormEvent } from "react";
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
            className="btn label group bg-ink text-paper hover:bg-brand"
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
        <select
          id="category"
          value={fields.category}
          onChange={(e) => set("category")(e.target.value)}
          className="mt-3 w-full appearance-none border-b border-line bg-transparent py-3 text-base tracking-tight transition-colors focus:border-ink focus:outline-none"
        >
          {serviceCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
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
        className="btn label group mt-10 w-full justify-center bg-ink text-paper hover:bg-brand"
      >
        Submit enquiry
        <span className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
          →
        </span>
      </button>

      <p className="label mt-6 text-muted">
        Or call {company.phone} — {company.hours}
      </p>
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
