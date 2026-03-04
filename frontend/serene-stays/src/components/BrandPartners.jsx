const partners = [
  "Marriott", "Hilton", "Hyatt", "Four Seasons", "Ritz-Carlton", "Mandarin Oriental"
];

const BrandPartners = () => {
  return (
    <section className="py-12 border-y border-border/50">
      <div className="container mx-auto max-w-5xl px-4">
        <p className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-[0.3em] mb-8">
          Trusted By World-Class Brands
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {partners.map((name) => (
            <span
              key={name}
              className="font-display text-lg md:text-xl font-semibold text-muted-foreground/40 hover:text-primary transition-colors duration-300 cursor-default"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPartners;
