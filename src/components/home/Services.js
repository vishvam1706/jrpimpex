import Image from "next/image";
import servicesData from "@/data/services.json";

export default function Services() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container-custom">
        {/* ── Section Header ──────────────────────────────── */}
        <div className="text-center mb-14">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-6 h-[2px] bg-[var(--color-accent-gold)]" />
            <span className="text-[var(--color-accent-gold)] text-xs font-bold uppercase tracking-[0.2em] font-[var(--font-body)]">
              Our Services
            </span>
            <div className="w-6 h-[2px] bg-[var(--color-accent-gold)]" />
          </div>

          <h2 className="font-[var(--font-heading)] font-bold text-[var(--color-primary-dark)] text-3xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight">
            Agro Expertise Driving
            <br />
            <span className="text-[var(--color-primary)]">
              Global Nourishment
            </span>
          </h2>

          {/* Gold rule */}
          <div className="w-12 h-[3px] bg-gradient-to-r from-[var(--color-accent-gold)] to-[var(--color-accent-gold-lt)] rounded-full mx-auto mt-5" />
        </div>

        {/* ── Services Grid ───────────────────────────────── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {servicesData.services.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-sm overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-lift)] hover:-translate-y-1.5 transition-all duration-300 border border-[var(--color-border)]"
            >
              {/* ── Image ─────────────────────────────────── */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Gradient overlay bottom */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[var(--color-primary-dark)]/70 to-transparent" />

                {/* Index number — top right */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[var(--color-accent-gold)] flex items-center justify-center shadow-md">
                  <span className="text-[var(--color-primary-dark)] text-xs font-black font-[var(--font-body)] leading-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Icon badge — bottom left */}
                <div className="absolute bottom-4 left-4 bg-[var(--color-primary)] p-3 rounded-sm shadow-lg border border-white/10">
                  <div className="w-8 h-8 text-white">
                    <svg
                      className="w-full h-full"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* ── Content ───────────────────────────────── */}
              <div className="p-6 bg-[var(--color-primary)] text-white relative overflow-hidden">
                {/* Subtle pattern top-right */}
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/5 pointer-events-none" />
                <div className="absolute -top-2 -right-2 w-14 h-14 rounded-full bg-white/5 pointer-events-none" />

                {/* Gold top rule on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[var(--color-accent-gold)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

                <h3 className="font-[var(--font-heading)] font-bold text-lg mb-2.5 leading-snug">
                  {service.title}
                </h3>

                <p className="text-white/70 text-sm font-[var(--font-body)] leading-relaxed">
                  {service.description}
                </p>

                {/* Read more indicator */}
                <div className="flex items-center gap-1.5 mt-4 text-[var(--color-accent-gold)] text-xs font-bold uppercase tracking-wider font-[var(--font-body)] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Learn More
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
