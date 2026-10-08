"use client";

import Link from "next/link";
import { useState } from "react";
import { SITE } from "@/lib/site";

// Invio tramite Web3Forms: nessun backend, le richieste arrivano via email a Liz.
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

type Status = "idle" | "sending" | "sent" | "error";

export default function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!ACCESS_KEY) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          access_key: ACCESS_KEY,
          subject: "New complimentary call request",
          from_name: "Liz Bufton website",
        }),
      });
      const json = await res.json();
      setStatus(json.success ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p role="status" className="font-serif text-[1.8rem] leading-snug">
        Thank you! Your call request has been sent. I will be in touch by email to arrange a time.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-8">
      {/* Honeypot anti-spam: invisibile alle persone, i bot lo compilano */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <label className="grid gap-1 text-sm tracking-[0.04em] text-muted">
        Your name
        <input name="name" required autoComplete="name" className="field" />
      </label>
      <label className="grid gap-1 text-sm tracking-[0.04em] text-muted">
        Email
        <input type="email" name="email" required autoComplete="email" className="field" />
      </label>
      <label className="grid gap-1 text-sm tracking-[0.04em] text-muted">
        What brings you to coaching?
        <select name="level" className="field">
          <option>Stepping into a bigger role</option>
          <option>Changing direction</option>
          <option>Building confidence as a leader</option>
          <option>Something else</option>
        </select>
      </label>
      <label className="grid gap-1 text-sm tracking-[0.04em] text-muted">
        Anything you would like me to know? (optional)
        <textarea name="message" rows={4} className="field" />
      </label>
      <label className="flex items-start gap-3 text-[0.95rem] text-muted">
        <input type="checkbox" name="consent" value="yes" required className="mt-1 size-4 accent-[var(--label)]" />
        <span>
          I agree to Liz using my details to contact me about my request, as described in the{" "}
          <Link href="/privacy/" className="underline underline-offset-4">Privacy Policy</Link>.
        </span>
      </label>

      <button type="submit" className="cta justify-self-start" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Request my call"}
      </button>

      {status === "error" && (
        <p role="alert" className="text-label">
          Your request couldn&apos;t be sent. Please try again, or email Liz at{" "}
          <a href={`mailto:${SITE.email}`} className="underline">{SITE.email}</a>.
        </p>
      )}
    </form>
  );
}
