"use client";

import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Package } from "lucide-react";
import productsData from "@/data/products.json";
import { useRouter } from "next/navigation";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const categoryParam = searchParams.get("category") || "all";

  // Single source of truth
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);

  // Sync state if URL changes
  if (selectedCategory !== categoryParam) {
    setSelectedCategory(categoryParam);
  }

  // Derived data (NOT state)
  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") {
      return productsData.products;
    }

    return productsData.products.filter(
      (product) => product.category === selectedCategory,
    );
  }, [selectedCategory]);

  // When user clicks category
  const handleCategoryChange = (slug) => {
    setSelectedCategory(slug);

    if (slug === "all") {
      router.push("/products");
    } else {
      router.push(`/products?category=${slug}`);
    }
  };

  return (
    <>
      {/* Premium Breadcrumb Hero */}
      <section className="relative gradient-hero py-24 lg:py-32 overflow-hidden">
        {/* ── Full background image ─────────────────────────── */}
        <div className="absolute inset-0">
          <Image
            src="/about_us.jpg"
            alt="Our Products"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark-to-light green overlay — left to right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-dark)]/95 via-[var(--color-primary)]/75 to-[var(--color-primary-light)]/30" />
        </div>

        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-[0.07]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="breadcrumb-pattern"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="40" cy="40" r="1.5" fill="white" />
                <circle
                  cx="40"
                  cy="40"
                  r="20"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#breadcrumb-pattern)" />
          </svg>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-primary-dark)]/20" />

        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-accent-gold-lt text-sm font-semibold tracking-wide uppercase mb-6">
              Premium Quality
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Our Products
            </h1>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover our extensive range of premium agricultural products, sourced
              from the finest farms and delivered with excellence.
            </p>
            <div className="flex items-center justify-center gap-3 text-white/90">
              <Link
                href="/"
                className="hover:text-accent-gold-lt transition-colors duration-300 font-medium"
              >
                Home
              </Link>
              <svg
                className="w-4 h-4 opacity-60"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span className="text-accent-gold-lt font-semibold">Products</span>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Products Content */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">

        {/* Decorative bg elements */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--color-accent-gold)]/40 to-transparent" />
        <div className="absolute top-20 left-10 w-24 h-24 border-2 border-[var(--color-primary)]/10 rounded-full pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-[var(--color-accent-gold)]/10 rounded-full pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-[var(--color-primary)]/[0.03] rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10">

          {/* ── Category Filter ─────────────────────────────── */}
          <div className="mb-16">
            <div className="text-center mb-10">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-6 h-[2px] bg-[var(--color-primary-light)]" />
                <span className="text-[var(--color-primary-light)] text-xs font-bold uppercase tracking-[0.2em] font-[var(--font-body)]">
                  Browse by Category
                </span>
                <div className="w-6 h-[2px] bg-[var(--color-primary-light)]" />
              </div>
              <h2 className="font-[var(--font-heading)] font-bold text-[var(--color-primary)] text-2xl md:text-3xl lg:text-4xl tracking-tight">
                Filter Products
              </h2>
              <div className="w-12 h-[3px] bg-gradient-to-r from-[var(--color-accent-gold)] to-[var(--color-accent-gold-lt)] rounded-full mx-auto mt-4" />
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => handleCategoryChange("all")}
                className={`group relative px-6 py-3 rounded-sm font-semibold text-sm transition-all duration-300 overflow-hidden border-2 ${selectedCategory === "all"
                    ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-[var(--shadow-lift)]"
                    : "bg-white text-[var(--color-primary-dark)] border-[var(--color-border)] hover:border-[var(--color-primary)] hover:text-white"
                  }`}
              >
                {selectedCategory !== "all" && (
                  <span className="absolute inset-0 bg-[var(--color-primary)] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Package className="w-4 h-4" />
                  All Products
                </span>
              </button>

              {productsData.categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.slug)}
                  className={`group relative px-6 py-3 rounded-sm font-semibold text-sm transition-all duration-300 overflow-hidden border-2 ${selectedCategory === category.slug
                      ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-[var(--shadow-lift)]"
                      : "bg-white text-[var(--color-primary-dark)] border-[var(--color-border)] hover:border-[var(--color-primary)] hover:text-white"
                    }`}
                >
                  {selectedCategory !== category.slug && (
                    <span className="absolute inset-0 bg-[var(--color-primary)] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  )}
                  <span className="relative z-10">{category.title}</span>
                </button>
              ))}
            </div>

            {/* Active filter count */}
            <div className="text-center mt-6">
              <p className="text-[var(--color-text-muted)] text-sm font-[var(--font-body)]">
                Showing{" "}
                <span className="font-bold text-[var(--color-primary)]">
                  {filteredProducts.length}
                </span>{" "}
                products
                {selectedCategory !== "all" && (
                  <span className="ml-1">
                    in{" "}
                    <span className="font-bold text-[var(--color-accent-gold)]">
                      {productsData.categories.find((c) => c.slug === selectedCategory)?.title}
                    </span>
                  </span>
                )}
              </p>
            </div>
          </div>

          {/* ── Products Grid ───────────────────────────────── */}
          {filteredProducts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
              {filteredProducts.map((product, index) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  className="group relative flex flex-col bg-white rounded-sm overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-lift)] hover:-translate-y-1.5 border-2 border-[var(--color-border)] hover:border-[var(--color-accent-gold)] transition-all duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Gold top rule on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-[var(--color-accent-gold)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-10" />

                  {/* Product Image */}
                  <div className="relative h-60 overflow-hidden flex-shrink-0">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-dark)]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Category badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-3 py-1 bg-[var(--color-accent-green)] text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-md backdrop-blur-sm">
                        {productsData.categories.find((c) => c.slug === product.category)?.title}
                      </span>
                    </div>

                    {/* Index number badge */}
                    <div className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-[var(--color-accent-gold)] flex items-center justify-center shadow-md">
                      <span className="text-[var(--color-primary-dark)] text-[10px] font-black leading-none">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Quick view icon */}
                    <div className="absolute inset-0 flex items-end justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white rounded-full p-2.5 shadow-[var(--shadow-lift)] transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <ArrowRight className="w-4 h-4 text-[var(--color-primary)]" />
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="flex flex-col flex-1 p-5 bg-[var(--color-primary)] relative overflow-hidden">
                    {/* Subtle pattern */}
                    <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-white/5 pointer-events-none" />
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-white/5 pointer-events-none" />

                    <h3 className="font-[var(--font-heading)] font-semibold text-white text-base mb-2 leading-snug group-hover:text-[var(--color-accent-gold)] transition-colors duration-300">
                      {product.title}
                    </h3>

                    <p className="text-white/70 text-xs font-[var(--font-body)] leading-relaxed line-clamp-2 mb-4 flex-1">
                      {product.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/15">
                      <span className="text-[var(--color-accent-gold)] text-xs font-bold uppercase tracking-wide font-[var(--font-body)]">
                        View Details
                      </span>
                      <div className="w-7 h-7 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-[var(--color-accent-gold)] transition-all duration-300">
                        <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            /* Empty state */
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-[var(--color-primary-muted)] rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-[var(--color-border)]">
                  <Package className="w-12 h-12 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-[var(--font-heading)] text-2xl font-bold text-[var(--color-primary-dark)] mb-3">
                  No Products Found
                </h3>
                <p className="text-[var(--color-text-muted)] text-base mb-8 font-[var(--font-body)]">
                  No products found in this category. Try selecting a different category.
                </p>
                <button
                  onClick={() => handleCategoryChange("all")}
                  className="btn-outline"
                >
                  View All Products
                </button>
              </div>
            </div>
          )}

        </div>
      </section>
    </>
  );
}
