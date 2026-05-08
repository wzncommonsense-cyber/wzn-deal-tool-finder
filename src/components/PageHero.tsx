type PageHeroProps = {
  title: string;
  description: string;
  children?: React.ReactNode;
};

export function PageHero({ title, description, children }: PageHeroProps) {
  return (
    <section className="bg-[#07111f] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
            {description}
          </p>
        </div>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
