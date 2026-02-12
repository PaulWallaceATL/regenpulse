type PageHeroProps = {
  title: string;
  description: string;
};

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="relative border-b border-border bg-muted/20">
      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
