"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-800">
          Name
          <input
            required
            name="name"
            type="text"
            className="h-12 rounded-md border border-slate-300 px-4 text-slate-950 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-800">
          Email
          <input
            required
            name="email"
            type="email"
            className="h-12 rounded-md border border-slate-300 px-4 text-slate-950 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
            placeholder="you@company.com"
          />
        </label>
      </div>

      <label className="mt-5 grid gap-2 text-sm font-medium text-slate-800">
        Company
        <input
          name="company"
          type="text"
          className="h-12 rounded-md border border-slate-300 px-4 text-slate-950 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
          placeholder="Company name"
        />
      </label>

      <label className="mt-5 grid gap-2 text-sm font-medium text-slate-800">
        Project details
        <textarea
          required
          name="message"
          rows={5}
          className="resize-none rounded-md border border-slate-300 px-4 py-3 text-slate-950 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
          placeholder="Tell us about your site, goals, and timeline."
        />
      </label>

      <button
        type="submit"
        className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-emerald-700 px-5 text-sm font-semibold text-white transition hover:bg-emerald-800 sm:w-auto"
      >
        <Send size={18} />
        Send Message
      </button>

      {sent ? (
        <p className="mt-4 rounded-md bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">
          Thanks. This demo form is ready for Formspree, Resend, or Supabase
          integration.
        </p>
      ) : null}
    </form>
  );
}
