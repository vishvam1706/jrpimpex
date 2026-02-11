import Link from "next/link";

export default function Breadcrumb({ items }) {
  return (
    <section className="relative bg-[var(--color-primary-dark)] py-20 overflow-hidden">
      {/* ── Dot pattern ─────────────────────────────────── */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ── Radial glow ──────────────────────────────────── */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[var(--color-primary-light)]/25 blur-3xl pointer-events-none" />

      {/* ── Gold top rule ────────────────────────────────── */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[var(--color-accent-gold)] to-transparent" />

      {/* ── Gold bottom rule ─────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent-gold)]/30 to-transparent" />

      <div className="container-custom relative z-10">
        <div className="text-center">
          {/* Page title */}
          <h1 className="font-[var(--font-heading)] font-extrabold text-white text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-5">
            {items[items.length - 1].label}
          </h1>

          {/* Gold rule */}
          <div className="w-12 h-[3px] bg-gradient-to-r from-[var(--color-accent-gold)] to-[var(--color-accent-gold-lt)] rounded-full mx-auto mb-5" />

          {/* Breadcrumb trail */}
          <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-5 py-2 backdrop-blur-sm">
            {items.map((item, index) => (
              <div key={index} className="flex items-center gap-1.5">
                {index > 0 && (
                  <svg
                    className="w-3 h-3 text-white/30 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}

                {index === items.length - 1 ? (
                  <span className="text-[var(--color-accent-gold)] text-sm font-semibold font-[var(--font-body)]">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-white/60 text-sm font-[var(--font-body)] hover:text-white transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
