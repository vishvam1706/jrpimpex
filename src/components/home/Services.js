import Image from "next/image";
import servicesData from "@/data/services.json";

export default function Services() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container-custom">
        {/* ── Section Header ──────────────────────────────── */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-6 h-[2px] bg-[var(--color-primary-light)]" />
            <span className="text-[var(--color-primary-light)] text-xs font-bold uppercase tracking-[0.2em] font-[var(--font-body)]">
              Our Services
            </span>
            <div className="w-6 h-[2px] bg-[var(--color-primary-light)]" />
          </div>

          <h2 className="font-[var(--font-heading)] font-medium text-[var(--color-primary)] text-3xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight">
            Agro Expertise Driving
            <br />
            <span className="text-[var(--color-primary)]">Global Nourishment</span>
          </h2>

          <div className="w-12 h-[3px] bg-gradient-to-r from-[var(--color-accent-gold)] to-[var(--color-accent-gold-lt)] rounded-full mx-auto mt-5" />
        </div>

        {/* ── Services Grid ───────────────────────────────── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
          {servicesData.services.map((service, index) => (
            <div
              key={service.id}
              className="group relative flex flex-col bg-white rounded-sm overflow-visible shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-lift)] hover:-translate-y-1.5 hover:border-[var(--color-accent-gold)] transition-all duration-300 border-2 border-[var(--color-border)]"
            >
              {/* ── Image ─────────────────────────────────── */}
              <div className="relative h-56 overflow-hidden rounded-t-sm flex-shrink-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Gradient overlay bottom */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[var(--color-primary-dark)]/70 to-transparent" />

                {/* Index number — top right */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[var(--color-accent-gold)] flex items-center justify-center shadow-md z-10">
                  <span className="text-[var(--color-primary-dark)] text-xs font-black font-[var(--font-body)] leading-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* ── Icon Badge — sits between image and content ── */}
              <div className="relative flex-shrink-0 h-0">
                <div className="absolute left-4 -top-6 z-20 bg-[var(--color-accent-green)] p-3 rounded-full shadow-lg border-2 border-white">
                  <div className="relative w-8 h-8">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* ── Content ───────────────────────────────── */}
              <div className="flex-1 p-6 pt-10 bg-[var(--color-primary)] text-white relative overflow-hidden rounded-b-sm">
                {/* Subtle pattern */}
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/5 pointer-events-none" />
                <div className="absolute -top-2 -right-2 w-14 h-14 rounded-full bg-white/5 pointer-events-none" />

                <h3 className="font-[var(--font-heading)] font-medium text-white text-lg mb-2.5 leading-snug">
                  {service.title}
                </h3>

                <p className="text-white/90 text-sm font-[var(--font-body)] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}