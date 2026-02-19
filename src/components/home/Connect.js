import Image from "next/image";
import Link from "next/link";

export default function Connect() {
  return (
    <section className="py-20 lg:py-28 bg-[var(--color-surface-warm)]">
      <div className="container-custom">
        <div className="relative bg-[var(--color-primary-dark)] rounded-sm overflow-hidden shadow-[0_24px_64px_rgba(26,77,51,.18)]">
          {/* ── Background dot pattern ───────────────────── */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* ── Gold top accent rule ─────────────────────── */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--color-accent-gold)] via-[var(--color-accent-gold-lt)] to-[var(--color-accent-gold)]" />

          <div className="grid lg:grid-cols-2 gap-0 items-stretch">
            {/* ── Left — Image ────────────────────────────── */}
            <div className="relative h-64 lg:h-auto min-h-[320px] overflow-hidden">
              {/* Farmer image */}
              <Image
                src="/sub.png"
                alt="Connect with JRP Impex"
                fill
                className="object-cover"
              />

              {/* Green overlay */}
              <div className="absolute inset-0 bg-[var(--color-primary)]/20" />

              {/* Diagonal separator — right edge */}
              <div
                className="hidden lg:block absolute top-0 right-0 bottom-0 w-16 bg-[var(--color-primary-dark)]"
                style={{
                  clipPath: "polygon(60% 0, 100% 0, 100% 100%, 0% 100%)",
                }}
              />

              {/* Bottom label */}
              <div className="absolute bottom-5 left-0 right-0 z-10 text-center">
                <span className="text-white/60 text-xs font-[var(--font-body)] uppercase tracking-[0.2em]">
                  Trusted Since 2010
                </span>
              </div>
            </div>

            {/* ── Right — Content ──────────────────────────── */}
            <div className="relative p-10 lg:p-14 flex flex-col justify-center">
              {/* Radial glow */}
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[var(--color-primary-light)]/20 blur-3xl pointer-events-none" />

              <div className="relative z-10">
                {/* Eyebrow */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-[2px] bg-[var(--color-accent-gold)]" />
                  <span className="text-[var(--color-accent-gold)] text-xs font-bold uppercase tracking-[0.2em] font-[var(--font-body)]">
                    Get In Touch
                  </span>
                </div>

                {/* Heading */}
                <h2 className="font-[var(--font-heading)] font-bold text-white text-3xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight mb-4">
                  Ready to Source
                  <br />
                  <span className="text-[var(--color-accent-gold)]">
                    Premium Agro
                  </span>
                  <br />
                  Products?
                </h2>

                {/* Gold rule */}
                <div className="w-12 h-[3px] bg-gradient-to-r from-[var(--color-accent-gold)] to-[var(--color-accent-gold-lt)] rounded-full mb-6" />

                <p className="text-white/60 text-base font-[var(--font-body)] leading-relaxed mb-8 max-w-sm">
                  Partner with JRP Impex for a seamless, world-class agro
                  sourcing experience — quality guaranteed, delivery trusted.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-accent-gold)] text-[var(--color-primary-dark)] text-xs font-black uppercase tracking-widest rounded-sm font-[var(--font-body)] hover:bg-[var(--color-accent-gold-lt)] hover:shadow-[0_8px_28px_rgba(201,150,12,.4)] hover:-translate-y-px transition-all duration-200 group"
                  >
                    Contact Us
                    <svg
                      className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
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
                  </Link>

                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent text-white text-xs font-bold uppercase tracking-widest rounded-sm border-2 border-white/25 font-[var(--font-body)] hover:border-white/60 hover:bg-white/10 transition-all duration-200"
                  >
                    Our Products
                  </Link>
                </div>

                {/* Trust signals */}
                <div className="flex items-center gap-6 mt-10 pt-8 border-t border-white/10">
                  {[
                    { value: "ISO", label: "Certified" },
                    { value: "50+", label: "Countries" },
                    { value: "15+", label: "Years Trust" },
                  ].map(({ value, label }, i) => (
                    <div key={label} className="flex items-center gap-3">
                      {i > 0 && <div className="w-px h-7 bg-white/10" />}
                      <div>
                        <div className="font-[var(--font-heading)] font-extrabold text-[var(--color-accent-gold)] text-lg leading-none">
                          {value}
                        </div>
                        <div className="text-white/40 text-[10px] font-[var(--font-body)] uppercase tracking-wider mt-0.5">
                          {label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
