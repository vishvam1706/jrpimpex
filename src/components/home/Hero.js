import Image from "next/image";
import Link from "next/link";

/* Bowl arrangement positions to match the screenshot cluster */
const PRODUCTS = [
  { src: "/images/products/chili.png", alt: "Chili", style: { top: "0%", left: "38%" } },
  { src: "/images/products/sesame.png", alt: "Sesame", style: { top: "0%", left: "68%" } },
  { src: "/images/products/cardamom.png", alt: "Cardamom", style: { top: "26%", left: "10%" } },
  { src: "/images/products/herbs.png", alt: "Herbs", style: { top: "30%", left: "42%" } },
  { src: "/images/products/kidney-beans.png", alt: "Kidney Beans", style: { top: "58%", left: "8%" } },
  { src: "/images/products/chickpeas.png", alt: "Chickpeas", style: { top: "62%", left: "38%" } },
  { src: "/images/products/sunflower.png", alt: "Sunflower", style: { top: "58%", left: "68%" } },
];

const FEATURES = [
  "Harvesting Trust, Shipping Quality",
  "From India's Soil to the World's Table",
];

/* Double chevron >> icon */
function ChevronDouble() {
  return (
    <svg
      className="w-5 h-5 text-[var(--color-accent-green)] shrink-0"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M5.7 18.3a1 1 0 0 1 0-1.4L10.6 12 5.7 7.1a1 1 0 0 1 1.4-1.4l5.6 5.6a1 1 0 0 1 0 1.4l-5.6 5.6a1 1 0 0 1-1.4 0z" />
      <path d="M11.7 18.3a1 1 0 0 1 0-1.4l4.9-4.9-4.9-4.9a1 1 0 0 1 1.4-1.4l5.6 5.6a1 1 0 0 1 0 1.4l-5.6 5.6a1 1 0 0 1-1.4 0z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[88vh] flex items-center">

      {/* ── Background image ─────────────────────────────────── */}
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        priority
        className="object-cover object-center"
      />

      {/* ── Dark green overlay — heavier left, lighter right ─── */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-dark)]/95 via-[var(--color-primary)]/85 to-[var(--color-primary-light)]/40" />

      {/* ── Main content ─────────────────────────────────────── */}
      <div className="container-custom relative z-10 w-full py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">

          {/* ── Left — Text ──────────────────────────────────── */}
          <div className="text-white">

            {/* Headline */}
            <h1 className="font-[var(--font-heading)] font-extrabold text-white leading-[1.1] tracking-tight
                           text-[clamp(2.6rem,5.5vw,4.2rem)] mb-1">
              Global Agro,
            </h1>
            <h1 className="font-[var(--font-heading)] text-white leading-[1.1] tracking-tight
                           text-[clamp(2.6rem,5.5vw,4.2rem)] mb-4">
              Rooted in Tradition
            </h1>

            {/* Short green underline rule */}
            <div className="w-52 h-[3px] bg-[var(--color-accent-green)] rounded-full mb-7" />

            {/* Sub-text */}
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6 max-w-lg">
              Choose JRP Impex for agro products that meet the highest
              international standards.
            </p>

            {/* Feature list */}
            <ul className="space-y-3.5 mb-10">
              {FEATURES.map((feat) => (
                <li key={feat} className="flex items-center gap-2.5">
                  <ChevronDouble />
                  <span className="text-white/85 text-base font-medium">
                    {feat}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-3.5
                         bg-[var(--color-accent-green)] text-white
                         text-base font-semibold rounded-full
                         hover:bg-[var(--color-primary-light)] hover:-translate-y-px
                         hover:shadow-[0_8px_28px_rgba(45,153,99,.45)]
                         transition-all duration-200 group"
            >
              View More
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

          </div>

          {/* ── Right — Bowl cluster ──────────────────────────── */}
          <div className="relative hidden lg:block h-[520px]">
            {PRODUCTS.map(({ src, alt, style }) => (
              <div
                key={alt}
                className="absolute w-[180px] h-[180px] -translate-x-1/2"
                style={style}
              >
                <div className="w-full h-full rounded-full border-[3px] border-white/60
                                bg-white/10 backdrop-blur-sm overflow-hidden shadow-2xl
                                hover:scale-105 hover:border-white/90 transition-transform duration-300">
                  <Image
                    src={src}
                    alt={alt}
                    width={180}
                    height={180}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}