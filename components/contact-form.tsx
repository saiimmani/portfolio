"use client";

import { FormEvent, useState } from "react";

export function ContactForm({ email }: { email: string }) {
  const [formState, setFormState] = useState({ name: "", message: "" });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent("Portfolio contact");
    const body = encodeURIComponent(`From: ${formState.name}\n\n${formState.message}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1">
        <label className="text-sm font-semibold text-neutral-700 dark:text-neutral-200">Name</label>
        <input
          type="text"
          required
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          className="w-full rounded-xl border border-neutral-200 bg-white/80 px-3 py-2 text-neutral-900 shadow-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100"
        />
      </div>
      <div className="space-y-1">
        <label className="text-sm font-semibold text-neutral-700 dark:text-neutral-200">Message</label>
        <textarea
          required
          rows={4}
          value={formState.message}
          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
          className="w-full rounded-xl border border-neutral-200 bg-white/80 px-3 py-2 text-neutral-900 shadow-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        Send
      </button>
    </form>
  );
}
