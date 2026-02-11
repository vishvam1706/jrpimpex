const steps = [
  {
    number: "01",
    title: "Sourcing & Selection",
    desc: "Handpicked from trusted farms meeting our rigorous origin standards.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Quality Assurance",
    desc: "Every batch tested and certified to international food safety benchmarks.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Sustainable Packaging",
    desc: "Eco-conscious materials that preserve freshness across long-haul transit.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Delivery & Support",
    desc: "On-time global shipments backed by dedicated post-delivery support.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
        />
      </svg>
    ),
  },
];

export default function WorkProcess() {
  return (
    <section className="py-20 lg:py-32 bg-[var(--color-primary)] relative overflow-hidden">
      {/* ── Background dot pattern ───────────────────────── */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* ── Radial glow accents ──────────────────────────── */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[var(--color-primary-light)]/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full bg-[var(--color-accent-gold)]/10 blur-3xl pointer-events-none" />

      {/* ── Top gold rule ────────────────────────────────── */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[var(--color-accent-gold)]/60 to-transparent" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* ── Left — Text ─────────────────────────────── */}
          <div className="text-white">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-[2px] bg-[var(--color-accent-gold)]" />
              <span className="text-[var(--color-accent-gold)] text-xs font-bold uppercase tracking-[0.2em] font-[var(--font-body)]">
                Work Process
              </span>
            </div>

            <h2 className="font-[var(--font-heading)] font-bold text-white text-3xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight mb-5">
              Our Seamless Workflow:
              <br />
              <span className="text-[var(--color-accent-gold)]">
                From Source
              </span>{" "}
              to Shipment
            </h2>

            {/* Gold rule */}
            <div className="w-12 h-[3px] bg-gradient-to-r from-[var(--color-accent-gold)] to-[var(--color-accent-gold-lt)] rounded-full mb-6" />

            <p className="text-white/65 text-base md:text-lg font-[var(--font-body)] leading-relaxed mb-10 max-w-md">
              We ensure the smooth journey of your products from trusted sources
              to global markets — with precise sourcing, quality control,
              efficient packaging, and timely delivery.
            </p>

            {/* Connecting line visual */}
            <div className="hidden lg:flex items-center gap-3">
              {steps.map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border-2 border-[var(--color-accent-gold)]/50 flex items-center justify-center">
                    <span className="text-[var(--color-accent-gold)] text-[10px] font-black font-[var(--font-body)]">
                      {step.number}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-6 h-px bg-[var(--color-accent-gold)]/30" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right — Steps grid ──────────────────────── */}
          <div className="grid grid-cols-2 gap-5">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative bg-white/8 backdrop-blur-sm border border-white/15 rounded-sm p-6 hover:bg-white/15 hover:border-[var(--color-accent-gold)]/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Hover gold top rule */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[var(--color-accent-gold)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

                {/* Number badge */}
                <div className="w-12 h-12 rounded-sm bg-[var(--color-accent-gold)] flex items-center justify-center mb-4 shadow-[var(--shadow-gold)] group-hover:scale-105 transition-transform duration-200">
                  <span className="text-[var(--color-primary-dark)] text-base font-black font-[var(--font-heading)] leading-none">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-[var(--font-heading)] font-bold text-white text-base mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="text-white/55 text-xs font-[var(--font-body)] leading-relaxed">
                  {step.desc}
                </p>

                {/* Icon — bottom right watermark */}
                <div className="absolute bottom-4 right-4 text-white/10 group-hover:text-white/20 transition-colors duration-300">
                  {step.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom wave into next section ───────────────── */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10">
        <svg
          viewBox="0 0 1440 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 48 L0 24 Q360 0 720 24 Q1080 48 1440 24 L1440 48 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
