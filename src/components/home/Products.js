import Image from "next/image";
import Link from "next/link";
import productsData from "@/data/products.json";

export default function Products() {
  return (
    <section className="py-20 lg:py-32 bg-[var(--color-surface-warm)]">
      <div className="container-custom">
        {/* ── Section Header ──────────────────────────────── */}
        <div className="text-center mb-14">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-6 h-[2px] bg-[var(--color-accent-green)]" />
            <span className="text-[var(--color-accent-green)] text-xs font-bold uppercase tracking-[0.2em] font-[var(--font-body)]">
              Explore Our Premium Agro Products
            </span>
            <div className="w-6 h-[2px] bg-[var(--color-accent-green)]" />
          </div>

          <h2 className="font-[var(--font-heading)] font-medium text-[var(--color-primary)] text-3xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight">
            Our Agro{" "}
            <span className="text-[var(--color-primary)]">Products</span>
          </h2>

          {/* Gold rule */}
          <div className="w-12 h-[3px] bg-gradient-to-r from-[var(--color-accent-gold)] to-[var(--color-accent-gold-lt)] rounded-full mx-auto mt-5" />
        </div>

        {/* ── Products Grid ───────────────────────────────── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsData.categories.map((product, index) => (
            <Link
              key={product.id}
              href={`/products?category=${product.slug}`}
              className="group relative bg-white rounded-sm overflow-hidden border border-[var(--color-border)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-lift)] hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* ── Image ───────────────────────────────── */}
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-dark)]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Index badge */}
                <div className="absolute top-3 left-3 w-7 h-7 rounded-full bg-[var(--color-accent-gold)] flex items-center justify-center shadow-md">
                  <span className="text-[var(--color-primary-dark)] text-[10px] font-black font-[var(--font-body)] leading-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Explore label — slides up on hover */}
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-center pb-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-flex items-center gap-1.5 text-white text-xs font-bold uppercase tracking-widest font-[var(--font-body)]">
                    Explore
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
                  </span>
                </div>
              </div>

              {/* ── Title bar ───────────────────────────── */}
              <div className="relative px-5 py-4 flex items-center justify-between border-t border-[var(--color-border)]">
                {/* Gold left accent — slides in on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[var(--color-accent-gold)] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300" />

                <h3 className="font-[var(--font-heading)] font-bold text-[var(--color-primary-dark)] text-base group-hover:text-[var(--color-primary)] transition-colors duration-200">
                  {product.title}
                </h3>

                <div className="shrink-0 w-7 h-7 rounded-full border border-[var(--color-border)] flex items-center justify-center group-hover:bg-[var(--color-primary)] group-hover:border-[var(--color-primary)] transition-all duration-200">
                  <svg
                    className="w-3.5 h-3.5 text-[var(--color-text-muted)] group-hover:text-white transition-colors duration-200"
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
            </Link>
          ))}
        </div>

        {/* ── View all CTA ────────────────────────────────── */}
        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-transparent text-[var(--color-primary)] text-xs font-black uppercase tracking-widest rounded-sm border-2 border-[var(--color-primary)] font-[var(--font-body)] hover:bg-[var(--color-primary)] hover:text-white hover:shadow-lg transition-all duration-200 group"
          >
            View All Products
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
    </section>
  );
}
