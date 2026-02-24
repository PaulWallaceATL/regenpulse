"use client";

const metrics = [
  { value: "4", label: "Markets Across Kentucky + Appalachia" },
  { value: "10,000+", label: "Patients Served" },
  { value: "92%", label: "Patient-Reported Mobility Improvement" },
  { value: "24/7", label: "Support For Everyday Life" },
];

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
            src="/videos/kentucky-sunset-hero.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Content block */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pt-20 text-center sm:px-6">
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Real Care. Real Outcomes. Lives Changed.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-100/90 sm:text-xl">
          We help people move better, feel stronger, and stay independent
          through integrated regenerative care, mobility support, and
          community-first health access.
        </p>
      </div>

      {/* Metric bar */}
      <div className="border-t border-white/20 bg-black/45">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 px-4 py-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {metrics.map(({ value, label }) => (
            <div
              key={label}
              className="rounded-lg border border-white/25 bg-black/35 px-4 py-3 text-center text-slate-100"
            >
              <p className="text-2xl font-bold text-cyan-200 sm:text-3xl">{value}</p>
              <p className="text-xs font-medium text-slate-200 sm:text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
