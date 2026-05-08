type FaqItem = {
  question: string;
  answer: string;
};

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-7">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
          Veelgestelde vragen
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Korte antwoorden op praktische vragen voordat je een tool of dienst
          kiest.
        </p>
      </div>
      <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
        {items.map((item) => (
          <details key={item.question} className="group p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-slate-950">
              {item.question}
              <span className="text-xl leading-none text-[#0e7c66] transition group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-6 text-slate-600">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
