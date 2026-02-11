import Image from "next/image";
import Link from "next/link";

const HIGHLIGHTS = [
  {
    title: "Trusted by International Clients",
    desc: "Long-standing partnerships across 50+ countries built on honesty and reliability.",
  },
  {
    title: "Strict Quality Assurance Standards",
    desc: "Every shipment is tested and certified to meet global food safety benchmarks.",
  },
];

const STATS = [
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Countries Reached" },
  { value: "200+", label: "Products Offered" },
];

export default function About() {
  return (
    <section className="py-20 lg:py-32 bg-[var(--color-surface-warm)]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">
          {/* ── Left — Image block ─────────────────────────── */}
          <div className="relative">
            {/* Decorative background square */}
            <div className="absolute top-6 left-6 right-0 bottom-0 rounded-tl-[80px] rounded-br-[80px] bg-[var(--color-primary-muted)] -z-10" />

            {/* Main image */}
            <div className="relative rounded-tl-[80px] rounded-br-[80px] overflow-hidden shadow-[0_20px_60px_rgba(26,77,51,.15)]">
              <Image
                src="/images/warehouse.jpg"
                alt="JRP Impex Warehouse"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
              {/* Dark gradient at bottom for stat overlay */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--color-primary-dark)]/80 to-transparent" />

              {/* Stats bar inside image */}
              <div className="absolute bottom-0 inset-x-0 flex items-center justify-around px-6 py-4">
                {STATS.map(({ value, label }, i) => (
                  <div key={label} className="flex items-center gap-3">
                    {i > 0 && <div className="w-px h-7 bg-white/20" />}
                    <div className="text-center">
                      <div className="text-xl font-[var(--font-heading)] font-extrabold text-[var(--color-accent-gold)] leading-none">
                        {value}
                      </div>
                      <div className="text-white/70 text-[10px] font-[var(--font-body)] uppercase tracking-wider mt-0.5">
                        {label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Plant decoration */}
            <div className="absolute -bottom-6 -left-4 w-28 h-28 pointer-events-none">
              <Image
                src="/images/plant-decoration.png"
                alt=""
                width={128}
                height={128}
                className="w-full h-auto drop-shadow-lg"
              />
            </div>

            {/* Gold corner accent */}
            <div className="absolute top-0 left-0 w-14 h-14 border-t-4 border-l-4 border-[var(--color-accent-gold)] rounded-tl-[80px]" />
          </div>

          {/* ── Right — Content ────────────────────────────── */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[var(--color-accent-gold)]" />
              <span className="text-[var(--color-accent-gold)] text-xs font-bold uppercase tracking-[0.2em] font-[var(--font-body)]">
                Welcome to JRP Impex
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-[var(--font-heading)] font-bold text-[var(--color-primary-dark)] text-3xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight mb-5">
              Leading with Integrity in{" "}
              <span className="text-[var(--color-primary)]">Global Agro</span>{" "}
              Markets
            </h2>

            {/* Gold rule */}
            <div className="w-12 h-[3px] bg-gradient-to-r from-[var(--color-accent-gold)] to-[var(--color-accent-gold-lt)] rounded-full mb-6" />

            {/* Body copy */}
            <p className="text-[var(--color-text-muted)] text-base md:text-lg font-[var(--font-body)] leading-relaxed mb-8">
              JRP Impex stands at the forefront of international agro trade,
              delivering premium agricultural products across the globe. Backed
              by over ten years of expertise, we are committed to quality,
              sustainability, and reliability in every shipment.
            </p>

            {/* Highlight list */}
            <ul className="space-y-4 mb-10">
              {HIGHLIGHTS.map(({ title, desc }) => (
                <li key={title} className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="shrink-0 w-8 h-8 rounded-full bg-[var(--color-primary)] flex items-center justify-center mt-0.5 shadow-md">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-[var(--font-body)] font-semibold text-[var(--color-primary-dark)] mb-0.5">
                      {title}
                    </h3>
                    <p className="text-[var(--color-text-muted)] text-sm font-[var(--font-body)] leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Divider */}
            <div className="w-full h-px bg-[var(--color-border)] mb-8" />

            {/* CTA */}
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-primary)] text-white text-xs font-black uppercase tracking-widest rounded-sm font-[var(--font-body)] border-2 border-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] hover:border-[var(--color-primary-dark)] hover:shadow-lg hover:-translate-y-px transition-all duration-200 group"
            >
              Discover Our Story
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
          </div>
        </div>
      </div>
    </section>
  );
}
