"use client";

import { FormEvent, useState } from "react";
import { Mail } from "lucide-react";

type ContactFormProps = {
  email: string;
};

export function ContactForm({ email }: ContactFormProps) {
  const [name, setName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent("Aanvraag via WZN Deal & Tool Finder");
    const body = encodeURIComponent(
      [
        `Naam: ${name}`,
        `E-mail: ${senderEmail}`,
        "",
        "Waar wil ik hulp bij?",
        message,
      ].join("\n"),
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-6"
    >
      <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
        Snelle aanvraag
      </h2>
      <p className="mt-3 text-sm leading-6 text-slate-600">
        Vul kort in waar je hulp bij nodig hebt. Daarna opent je mailprogramma
        met een voorbereid bericht aan WZN Production.
      </p>
      <div className="mt-6 grid gap-4">
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Naam
          <input
            required
            name="name"
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="h-11 rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm outline-none focus:border-[#0e7c66] focus:bg-white focus:ring-2 focus:ring-[#0e7c66]/20"
            placeholder="Jouw naam"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          E-mail
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            value={senderEmail}
            onChange={(event) => setSenderEmail(event.target.value)}
            className="h-11 rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm outline-none focus:border-[#0e7c66] focus:bg-white focus:ring-2 focus:ring-[#0e7c66]/20"
            placeholder="jij@bedrijf.nl"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Waar wil je hulp bij?
          <textarea
            required
            name="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="min-h-32 rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-sm outline-none focus:border-[#0e7c66] focus:bg-white focus:ring-2 focus:ring-[#0e7c66]/20"
            placeholder="Bijvoorbeeld: website, AI-workflow, social posts of toolfinder."
          />
        </label>
        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#07111f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#12243b] focus:outline-none focus:ring-2 focus:ring-[#07111f] focus:ring-offset-2"
        >
          <Mail aria-hidden="true" size={17} />
          Maak e-mail klaar
        </button>
      </div>
    </form>
  );
}
