export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden pt-20">
      {/* Full-bleed wellness video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          aria-hidden
        >
          <source
            src="/videos/memberships-hero.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85" />
      </div>

      {/* Content block */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pt-20 text-center sm:px-6">
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          REAL PT & Wellness — Physical and Aquatic Therapy
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-100/90 sm:text-xl">
          Clinical-grade SwimEx® hydrotherapy pool in-house. PT, aquatic therapy, and recovery
          services—insurance when appropriate, plus cash and membership options.
        </p>
      </div>
    </section>
  );
}
