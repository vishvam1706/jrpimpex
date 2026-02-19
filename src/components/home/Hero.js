import Image from "next/image";
import Link from "next/link";

const FEATURES = [
  "Harvesting Trust, Shipping Quality",
  "From India's Soil to the World's Table",
];

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

      {/* Background image */}
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-dark)]/95 via-[var(--color-primary)]/85 to-[var(--color-primary-light)]/40" />

      {/* Content */}
      <div className="container-custom relative z-10 w-full py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">

          {/* LEFT */}
          <div className="text-white">
            <h1 className="font-[var(--font-heading)] font-extrabold text-white leading-[1.1] tracking-tight text-[clamp(2.6rem,5.5vw,4.2rem)] mb-1">
              Global Agro,
            </h1>
            <h1 className="font-[var(--font-heading)] text-white leading-[1.1] tracking-tight text-[clamp(2.6rem,5.5vw,4.2rem)] mb-4">
              Rooted in Tradition
            </h1>

            <div className="w-52 h-[3px] bg-[var(--color-accent-green)] rounded-full mb-7" />

            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6 max-w-lg">
              Choose JRP Impex for agro products that meet the highest
              international standards.
            </p>

            <ul className="space-y-3.5 mb-10">
              {FEATURES.map((feat) => (
                <li key={feat} className="flex items-center gap-2.5">
                  <ChevronDouble />
                  <span className="text-white/85 text-base font-medium">{feat}</span>
                </li>
              ))}
            </ul>

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

          {/* RIGHT */}
          <div className="relative hidden lg:flex items-center justify-center h-[520px]">

            {/* Outer ring */}
            <div className="absolute w-[480px] h-[480px] rounded-full border-2 border-dashed border-white/20 animate-spin-slow" />

            {/* Middle ring */}
            <div className="absolute w-[400px] h-[400px] rounded-full border border-[var(--color-accent-gold)]/30 animate-spin-slow-reverse" />

            {/* Dots */}
            <div className="absolute w-[480px] h-[480px] animate-spin-slow">
              {[0, 90, 180, 270].map((deg) => (
                <div
                  key={deg}
                  className="absolute w-3 h-3 rounded-full bg-[var(--color-accent-gold)] shadow-[0_0_8px_rgba(212,175,55,0.8)] top-1/2 left-1/2"
                  style={{
                    transform: `rotate(${deg}deg) translateY(-240px) translateX(-50%)`,
                  }}
                />
              ))}
            </div>

            {/* Glow */}
            <div className="absolute w-80 h-80 rounded-full bg-[var(--color-accent-gold)]/15 blur-3xl" />
            <div className="absolute w-64 h-64 rounded-full bg-[var(--color-primary-light)]/20 blur-2xl" />

            {/* ROTATING IMAGE */}
            <div className="relative w-[340px] h-[340px] animate-spin-slow">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/30 shadow-[0_0_60px_rgba(0,0,0,0.5)] animate-spin-slow-reverse">
                <Image
                  src="/hero3.png"
                  alt="JRP Impex Products"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-transparent to-[var(--color-primary-dark)]/20" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
