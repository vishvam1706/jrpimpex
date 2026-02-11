import Image from "next/image";
import Link from "next/link";

const PRODUCTS = [
  { src: "/images/products/sunflower.png", alt: "Sunflower Seeds", offset: "" },
  { src: "/images/products/chickpeas.png", alt: "Chickpeas", offset: "" },
  { src: "/images/products/sesame.png", alt: "Sesame", offset: "mt-10" },
  { src: "/images/products/herbs.png", alt: "Herbs", offset: "mt-4" },
  {
    src: "/images/products/kidney-beans.png",
    alt: "Kidney Beans",
    offset: "mt-4",
  },
  { src: "/images/products/chili.png", alt: "Chili", offset: "" },
  { src: "/images/products/cardamom.png", alt: "Cardamom", offset: "mt-6" },
];

const FEATURES = [
  "Harvesting Trust, Shipping Quality",
  "From India's Soil to the World's Table",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* ── Full-bleed background image ─────────────────────── */}
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        priority
        className="object-cover object-center"
      />

      {/* ── Overlay: heavy left → lighter right ─────────────── */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-dark)]/95 via-[var(--color-primary-dark)]/80 to-[var(--color-primary-dark)]/40" />

      {/* ── Top gold accent rule ─────────────────────────────── */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--color-accent-gold)] via-[var(--color-accent-gold-lt)] to-transparent z-10" />

      {/* ── Main content ────────────────────────────────────── */}
      <div className="container-custom relative z-10 w-full py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* ── Left — Text ─────────────────────────────────── */}
          <div className="text-white">
            {/* Eyebrow pill */}
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-[var(--color-accent-gold)]/40 bg-[var(--color-accent-gold)]/10 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-gold)]" />
              <span className="text-[var(--color-accent-gold)] text-[11px] font-semibold uppercase tracking-[0.18em] font-[var(--font-body)]">
                Premium Agro Exports · India
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-[var(--font-heading)] font-extrabold text-white leading-[1.1] tracking-tight text-5xl md:text-6xl lg:text-6xl mb-2">
              Global Agro,
            </h1>
            <h1 className="font-[var(--font-heading)] font-extrabold leading-[1.1] tracking-tight text-5xl md:text-6xl lg:text-6xl mb-3">
              <span className="text-white">Rooted in </span>
              <span className="text-[var(--color-accent-gold)]">Tradition</span>
            </h1>

            {/* Gold rule */}
            <div className="w-14 h-[3px] bg-gradient-to-r from-[var(--color-accent-gold)] to-[var(--color-accent-gold-lt)] rounded-full mb-6" />

            {/* Subheading */}
            <p className="text-white/70 text-base md:text-lg font-[var(--font-body)] leading-relaxed mb-8 max-w-md">
              Choose JRP Impex for agro products that meet the highest
              international standards — sourced with integrity, delivered with
              care.
            </p>

            {/* Feature list */}
            <ul className="space-y-3 mb-10">
              {FEATURES.map((feat) => (
                <li key={feat} className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[var(--color-accent-gold)] shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white/80 text-sm md:text-base font-[var(--font-body)] font-medium">
                    {feat}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-accent-gold)] text-[var(--color-primary-dark)] text-xs font-black uppercase tracking-widest rounded-sm font-[var(--font-body)] hover:bg-[var(--color-accent-gold-lt)] hover:shadow-[0_8px_28px_rgba(201,150,12,.4)] hover:-translate-y-px transition-all duration-200 group"
              >
                Explore Products
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
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent text-white text-xs font-bold uppercase tracking-widest rounded-sm border-2 border-white/30 font-[var(--font-body)] hover:border-white/70 hover:bg-white/10 transition-all duration-200"
              >
                About Us
              </Link>
            </div>

            {/* Stats strip */}
            <div className="flex items-center gap-8 mt-12 pt-8 border-t border-white/15">
              {[
                { value: "50+", label: "Countries Served" },
                { value: "200+", label: "Premium Products" },
                { value: "15+", label: "Years of Trust" },
              ].map(({ value, label }, i) => (
                <div key={label} className="flex items-center gap-3">
                  {i > 0 && <div className="w-px h-8 bg-white/15" />}
                  <div>
                    <div className="text-2xl font-[var(--font-heading)] font-extrabold text-[var(--color-accent-gold)] leading-none">
                      {value}
                    </div>
                    <div className="text-white/45 text-[11px] font-[var(--font-body)] mt-1 uppercase tracking-wider">
                      {label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right — Product Circles ──────────────────────── */}
          <div className="relative hidden lg:block">
            {/* Soft glow behind grid */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[380px] h-[380px] rounded-full bg-[var(--color-accent-gold)]/5 blur-2xl" />
            </div>

            {/* Decorative rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[420px] h-[420px] rounded-full border border-white/10" />
              <div className="absolute w-[500px] h-[500px] rounded-full border border-[var(--color-accent-gold)]/10" />
            </div>

            {/* Grid */}
            <div className="grid grid-cols-3 gap-5 relative z-10 px-4">
              {PRODUCTS.map(({ src, alt, offset }, i) => (
                <div key={alt} className={`group relative ${offset}`}>
                  {/* Circle card */}
                  <div className="aspect-square rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 p-1 flex items-center justify-center shadow-xl overflow-hidden hover:border-[var(--color-accent-gold)]/60 hover:bg-white/20 hover:scale-105 transition-all duration-300">
                    <Image
                      src={src}
                      alt={alt}
                      width={110}
                      height={110}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>

                  {/* Hover label */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                    <span className="text-[10px] font-bold text-[var(--color-accent-gold)] uppercase tracking-wider font-[var(--font-body)]">
                      {alt}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* ISO badge */}
            <div className="absolute -bottom-2 -right-2 bg-[var(--color-accent-gold)] text-[var(--color-primary-dark)] rounded-full w-[72px] h-[72px] flex flex-col items-center justify-center shadow-xl z-20">
              <span className="text-[9px] font-black uppercase tracking-wide font-[var(--font-body)] leading-none">
                ISO
              </span>
              <span className="text-[9px] font-black font-[var(--font-body)] leading-none mt-0.5">
                Certified
              </span>
              <span className="text-[8px] font-bold font-[var(--font-body)] leading-none mt-0.5 opacity-70">
                Quality
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Wave divider into next section ───────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10">
        <svg
          viewBox="0 0 1440 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 56 L0 28 Q360 0 720 28 Q1080 56 1440 28 L1440 56 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
