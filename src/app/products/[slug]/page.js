"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Package,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import productsData from "@/data/products.json";

export default function ProductDetailPage() {
  const params = useParams();
  const product = productsData.products.find((p) => p.slug === params.slug);
  const [activeTab, setActiveTab] = useState("description");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface-warm">
        <div className="text-center">
          <div className="w-24 h-24 bg-primary-muted rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-12 h-12 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-4 font-heading">
            Product Not Found
          </h1>
          <p className="text-text-muted mb-8">
            The product you're looking for doesn't exist.
          </p>
          <Link
            href="/products"
            className="btn-primary inline-flex items-center gap-2"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  // Get related products from same category
  const relatedProducts = productsData.products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const images = product.gallery || [product.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      {/* ── HERO SECTION — UNCHANGED ───────────────────────────── */}
      <section className="relative gradient-hero py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={"/about_us.jpg"}
            alt={product.title}
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-dark)]/95 via-[var(--color-primary)]/75 to-[var(--color-primary-light)]/30" />
        </div>

        <div className="absolute inset-0 opacity-[0.07]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="breadcrumb-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="40" cy="40" r="1.5" fill="white" />
                <circle cx="40" cy="40" r="20" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#breadcrumb-pattern)" />
          </svg>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-primary-dark)]/20" />

        <div className="container-custom relative z-10">
          <div className="flex items-center justify-between">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-accent-gold-lt text-sm font-semibold tracking-wide uppercase mb-6">
                {product.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
                {product.title}
              </h1>
              <div className="flex items-center gap-3 text-white/90">
                <Link href="/" className="hover:text-accent-gold-lt transition-colors duration-300 font-medium">Home</Link>
                <svg className="w-4 h-4 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link href="/products" className="hover:text-accent-gold-lt transition-colors duration-300 font-medium">Products</Link>
                <svg className="w-4 h-4 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-accent-gold-lt font-semibold">{product.title}</span>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-[var(--color-accent-gold)]/20 rounded-full blur-3xl" />
                <div className="relative w-56 h-56 bg-white/10 backdrop-blur-sm rounded-full border-2 border-white/20 flex items-center justify-center shadow-[var(--shadow-lift)]">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white/30">
                    <Image src={product.image} alt={product.title} width={160} height={160} className="object-cover w-full h-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 82C1200 84 1320 78 1380 75L1440 72V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── MID SECTION — REDESIGNED ───────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">

        {/* Subtle background texture */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-primary-muted)] rounded-full opacity-30 blur-3xl translate-x-1/3 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-accent-gold)]/5 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 xl:gap-16">

            {/* ── SIDEBAR ── */}
            <aside className="lg:col-span-4 order-2 lg:order-1">
              <div className="space-y-6">

                {/* Related in category */}
                <div className="rounded-2xl border border-[var(--color-border-light)] bg-white shadow-[0_4px_32px_rgba(0,0,0,0.06)] overflow-hidden">
                  <div className="px-6 pt-6 pb-4 border-b border-[var(--color-border-light)] bg-[var(--color-surface-warm)]">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-primary-light)] mb-1">Explore More</p>
                    <h3 className="text-xl font-bold text-[var(--color-primary-dark)] font-heading">
                      More in {product.category}
                    </h3>
                  </div>

                  <div className="p-4 space-y-2">
                    {relatedProducts.length > 0 ? (
                      relatedProducts.map((rp) => (
                        <Link
                          key={rp.id}
                          href={`/products/${rp.slug}`}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-[var(--color-primary-muted)] border border-transparent hover:border-[var(--color-accent-gold)]/30 transition-all duration-300 group"
                        >
                          <div className="relative w-14 h-14 flex-shrink-0 rounded-lg overflow-hidden shadow-sm">
                            <Image src={rp.image} alt={rp.title} fill className="object-cover group-hover:scale-110 transition-transform duration-300" />
                          </div>
                          <span className="flex-1 text-sm font-semibold text-[var(--color-primary-dark)] group-hover:text-[var(--color-primary)] line-clamp-2 transition-colors duration-300">
                            {rp.title}
                          </span>
                          <ChevronRight className="w-4 h-4 text-[var(--color-text-light)] group-hover:text-[var(--color-accent-gold)] group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                        </Link>
                      ))
                    ) : (
                      <div className="text-center py-8">
                        <div className="w-14 h-14 bg-[var(--color-primary-muted)] rounded-full flex items-center justify-center mx-auto mb-3">
                          <Package className="w-7 h-7 text-[var(--color-primary)]" />
                        </div>
                        <p className="text-[var(--color-text-muted)] text-sm">No related products available</p>
                      </div>
                    )}
                  </div>

                  <div className="px-4 pb-4">
                    <Link href="/contact" className="btn-outline w-full justify-center group text-sm">
                      <span>Contact Us</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Quick trust strip */}
                <div className="rounded-2xl border border-[var(--color-accent-gold)]/30 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] p-6 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <ShieldCheck className="w-6 h-6 text-[var(--color-accent-gold)]" />
                    <span className="font-bold text-sm">Trusted Exporter</span>
                  </div>
                  <p className="text-white/70 text-xs leading-relaxed">
                    All products meet international export standards with full documentation & lab certification.
                  </p>
                  <div className="flex gap-2 mt-4 flex-wrap">
                    {["ISO Certified", "Lab Tested", "Export Grade"].map((tag) => (
                      <span key={tag} className="px-2.5 py-1 bg-white/10 border border-white/20 rounded-full text-[10px] font-bold text-white/80 tracking-wide">
                        ✓ {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* ── MAIN CONTENT ── */}
            <div className="lg:col-span-8 order-1 lg:order-2 space-y-8">

              {/* ── TOP CARD: Image + Info ── */}
              <div className="rounded-2xl border border-[var(--color-border-light)] bg-white shadow-[0_4px_40px_rgba(0,0,0,0.08)] overflow-hidden">
                <div className="grid md:grid-cols-2">

                  {/* Image panel */}
                  <div className="relative bg-[var(--color-surface-warm)] p-6 lg:p-8 flex items-center justify-center min-h-[320px]">
                    {/* Decorative corner accents */}
                    <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[var(--color-accent-gold)]/40 rounded-tl-sm" />
                    <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[var(--color-accent-gold)]/40 rounded-br-sm" />

                    <div className="relative w-full aspect-square max-w-[280px] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
                      <Image src={product.image} alt={product.title} fill className="object-cover" />
                    </div>
                  </div>

                  {/* Info panel */}
                  <div className="p-6 lg:p-8 flex flex-col justify-between">
                    <div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-[var(--color-primary-dark)] font-heading mb-5 leading-tight">
                        {product.title}
                      </h2>

                      {/* Translations */}
                      {product.translations && (
                        <div className="bg-[var(--color-primary-muted)] rounded-xl p-4 mb-5">
                          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-primary)] mb-3">Also Known As</p>
                          <div className="space-y-2">
                            {(product.translations.Arabic || product.translations.arabic) && (
                              <div className="flex items-start gap-2 text-sm">
                                <span className="font-bold text-[var(--color-primary)] w-[80px] flex-shrink-0">Arabic:</span>
                                <span className="text-[var(--color-text-base)]">{product.translations.Arabic || product.translations.arabic}</span>
                              </div>
                            )}
                            {(product.translations.Portuguese || product.translations.portuguese) && (
                              <div className="flex items-start gap-2 text-sm">
                                <span className="font-bold text-[var(--color-primary)] w-[80px] flex-shrink-0">Portuguese:</span>
                                <span className="text-[var(--color-text-base)]">{product.translations.Portuguese || product.translations.portuguese}</span>
                              </div>
                            )}
                            {(product.translations.Dutch || product.translations.dutch) && (
                              <div className="flex items-start gap-2 text-sm">
                                <span className="font-bold text-[var(--color-primary)] w-[80px] flex-shrink-0">Dutch:</span>
                                <span className="text-[var(--color-text-base)]">{product.translations.Dutch || product.translations.dutch}</span>
                              </div>
                            )}
                            {(product.translations.Spanish || product.translations.spanish) && (
                              <div className="flex items-start gap-2 text-sm">
                                <span className="font-bold text-[var(--color-primary)] w-[80px] flex-shrink-0">Spanish:</span>
                                <span className="text-[var(--color-text-base)]">{product.translations.Spanish || product.translations.spanish}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Origin & Packaging */}
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        <div className="group rounded-xl border border-[var(--color-border-light)] p-4 hover:border-[var(--color-accent-gold)]/40 hover:shadow-sm transition-all duration-300 bg-white">
                          <div className="flex items-center gap-2 mb-1.5">
                            <MapPin className="w-4 h-4 text-[var(--color-accent-gold)]" />
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-text-muted)]">Origin</span>
                          </div>
                          <p className="font-bold text-[var(--color-primary-dark)] text-base">{product.origin}</p>
                        </div>
                        <div className="group rounded-xl border border-[var(--color-border-light)] p-4 hover:border-[var(--color-accent-gold)]/40 hover:shadow-sm transition-all duration-300 bg-white">
                          <div className="flex items-center gap-2 mb-1.5">
                            <Package className="w-4 h-4 text-[var(--color-accent-gold)]" />
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-text-muted)]">Packaging</span>
                          </div>
                          <p className="font-bold text-[var(--color-primary-dark)] text-base">{product.packaging}</p>
                        </div>
                      </div>
                    </div>

                    <Link href="/contact" className="btn-gold w-full justify-center group">
                      <span>Make An Enquiry</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* ── TABS: Description / Specifications ── */}
              <div className="rounded-2xl border border-[var(--color-border-light)] bg-white shadow-[0_4px_32px_rgba(0,0,0,0.06)] overflow-hidden">

                {/* Tab bar */}
                <div className="flex border-b border-[var(--color-border-light)] bg-[var(--color-surface-warm)]/60">
                  {["description", "specifications", "tags"].filter(tab => tab !== 'tags' || product.sections?.Tags).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`relative px-8 py-4 text-sm font-bold capitalize tracking-wide transition-all duration-300 ${activeTab === tab
                          ? "text-[var(--color-primary)]"
                          : "text-[var(--color-text-muted)] hover:text-[var(--color-primary)]"
                        }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      {activeTab === tab && (
                        <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--color-accent-gold)] to-[var(--color-accent-gold-lt)] rounded-t-full" />
                      )}
                    </button>
                  ))}
                </div>

                {/* Tab content */}
                <div className="p-6 lg:p-8">
                  {activeTab === "description" && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-1 h-8 bg-gradient-to-b from-[var(--color-accent-gold)] to-[var(--color-accent-gold-lt)] rounded-full" />
                        <h3 className="text-xl lg:text-2xl font-bold text-[var(--color-primary-dark)] font-heading">
                          Product Description
                        </h3>
                      </div>
                      {product.sections?.Description ? (
                        product.sections.Description.map((para, idx) => (
                          <p key={idx} className="text-[var(--color-text-muted)] text-base lg:text-lg leading-relaxed">
                            {para}
                          </p>
                        ))
                      ) : (
                        <p className="text-[var(--color-text-muted)] text-base lg:text-lg leading-relaxed">
                          {product.description}
                        </p>
                      )}
                    </div>
                  )}

                  {activeTab === "specifications" && (
                    <div>
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-1 h-8 bg-gradient-to-b from-[var(--color-accent-gold)] to-[var(--color-accent-gold-lt)] rounded-full" />
                        <h3 className="text-xl lg:text-2xl font-bold text-[var(--color-primary-dark)] font-heading">
                          Product Specifications
                        </h3>
                      </div>

                      {product.specifications && product.specifications.length > 0 ? (
                        <div className="grid sm:grid-cols-2 gap-3">
                          {product.specifications.map((spec, index) => (
                            <div
                              key={index}
                              className="flex items-start gap-3 p-4 rounded-xl bg-[var(--color-primary-muted)] hover:bg-white hover:shadow-sm border border-transparent hover:border-[var(--color-accent-gold)]/20 transition-all duration-300 group"
                            >
                              <div className="w-5 h-5 rounded-full bg-[var(--color-primary)] group-hover:bg-[var(--color-accent-gold)] flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-300">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <span className="text-sm text-[var(--color-text-base)] leading-relaxed">{spec}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-12">
                          <div className="w-16 h-16 bg-[var(--color-primary-muted)] rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          <p className="text-[var(--color-text-muted)] text-sm">No specifications available for this product.</p>
                        </div>
                      )}
                    </div>
                  )}

                  {activeTab === "tags" && product.sections?.Tags && (
                    <div>
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-1 h-8 bg-gradient-to-b from-[var(--color-accent-gold)] to-[var(--color-accent-gold-lt)] rounded-full" />
                        <h3 className="text-xl lg:text-2xl font-bold text-[var(--color-primary-dark)] font-heading">
                          Product Tags
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {product.sections.Tags.flatMap(tag => tag.split(',')).map((tag, index) => (
                          tag.trim() && (
                            <span
                              key={index}
                              className="px-4 py-2 rounded-full bg-[var(--color-primary-muted)] text-[var(--color-primary)] text-sm font-medium border border-[var(--color-border-light)] hover:border-[var(--color-accent-gold)] transition-all duration-300"
                            >
                              {tag.trim()}
                            </span>
                          )
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* ── QUALITY ASSURANCE BANNER ── */}
              <div className="rounded-2xl overflow-hidden shadow-[0_4px_40px_rgba(0,0,0,0.10)] border border-[var(--color-accent-gold)]/20">
                <div className="relative bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary)] to-[var(--color-primary-light)] p-8 lg:p-10 text-white overflow-hidden">

                  {/* Dot pattern */}
                  <div className="absolute inset-0 opacity-[0.07]">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="qa-dots" width="24" height="24" patternUnits="userSpaceOnUse">
                          <circle cx="12" cy="12" r="1" fill="white" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#qa-dots)" />
                    </svg>
                  </div>

                  {/* Glowing orb */}
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-[var(--color-accent-gold)]/10 rounded-full blur-3xl pointer-events-none" />

                  <div className="relative z-10 flex flex-col sm:flex-row items-start gap-6">
                    {/* Icon */}
                    <div className="relative flex-shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-white/10 border border-[var(--color-accent-gold)]/40 flex items-center justify-center backdrop-blur-sm shadow-lg">
                        <ShieldCheck className="w-8 h-8 text-[var(--color-accent-gold)]" />
                      </div>
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                      <p className="text-[var(--color-accent-gold)] text-[10px] font-bold uppercase tracking-[0.2em] mb-1">Our Promise</p>
                      <h3 className="font-heading font-bold text-white text-2xl lg:text-3xl leading-tight mb-3">
                        Quality Assurance <span className="text-[var(--color-accent-gold)]">Guarantee</span>
                      </h3>
                      <div className="w-12 h-[3px] bg-gradient-to-r from-[var(--color-accent-gold)] to-[var(--color-accent-gold-lt)] rounded-full mb-4" />
                      <p className="text-white/75 text-sm lg:text-base leading-relaxed max-w-xl">
                        All our products undergo strict quality control measures to ensure they meet international standards. We are committed to delivering only the finest quality products to our clients worldwide.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-5">
                        {["ISO Certified", "Lab Tested", "Export Grade"].map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white/80 text-xs font-semibold tracking-wide">
                            ✓ {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED PRODUCTS — UNCHANGED ───────────────────────── */}
      {relatedProducts.length > 0 && (
        <section className="py-20 lg:py-32 section-cream relative overflow-hidden">

          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[var(--color-accent-gold)]/40 to-transparent" />
          <div className="absolute top-20 left-10 w-24 h-24 border-2 border-[var(--color-primary)]/10 rounded-full pointer-events-none" />
          <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-[var(--color-accent-gold)]/10 rounded-full pointer-events-none" />

          <div className="container-custom relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-6 h-[2px] bg-[var(--color-primary-light)]" />
                <span className="text-[var(--color-primary-light)] text-xs font-bold uppercase tracking-[0.2em] font-[var(--font-body)]">
                  You May Also Like
                </span>
                <div className="w-6 h-[2px] bg-[var(--color-primary-light)]" />
              </div>

              <h2 className="font-[var(--font-heading)] font-bold text-[var(--color-primary)] text-3xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight">
                Related Products
              </h2>

              <div className="w-12 h-[3px] bg-gradient-to-r from-[var(--color-accent-gold)] to-[var(--color-accent-gold-lt)] rounded-full mx-auto mt-5 mb-5" />

              <p className="text-[var(--color-text-muted)] text-lg font-[var(--font-body)] max-w-2xl mx-auto">
                Explore more premium products from our{" "}
                <span className="text-[var(--color-primary)] font-semibold">{product.category}</span>{" "}
                collection
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {relatedProducts.map((relatedProduct, index) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.slug}`}
                  className="group relative flex flex-col bg-white rounded-sm overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-lift)] hover:-translate-y-1.5 border-2 border-[var(--color-border)] hover:border-[var(--color-accent-gold)] transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-[var(--color-accent-gold)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-10" />

                  <div className="relative h-64 overflow-hidden flex-shrink-0">
                    <Image src={relatedProduct.image} alt={relatedProduct.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-dark)]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-[var(--color-accent-gold)] flex items-center justify-center shadow-md">
                      <span className="text-[var(--color-primary-dark)] text-[10px] font-black leading-none">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-3 py-1 bg-[var(--color-accent-green)] text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-md">
                        {relatedProduct.category}
                      </span>
                    </div>

                    <div className="absolute inset-0 flex items-end justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white rounded-full p-2.5 shadow-[var(--shadow-lift)] transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <ChevronRight className="w-4 h-4 text-[var(--color-primary)]" />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 p-5 bg-[var(--color-primary)] relative overflow-hidden">
                    <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-white/5 pointer-events-none" />
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-white/5 pointer-events-none" />

                    <h3 className="font-[var(--font-heading)] font-semibold text-white text-base mb-2 leading-snug group-hover:text-[var(--color-accent-gold)] transition-colors duration-300">
                      {relatedProduct.title}
                    </h3>

                    <p className="text-white/70 text-xs font-[var(--font-body)] leading-relaxed line-clamp-2 mb-4 flex-1">
                      {relatedProduct.description}
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-white/15">
                      <span className="text-[var(--color-accent-gold)] text-xs font-bold uppercase tracking-wide font-[var(--font-body)]">
                        Learn More
                      </span>
                      <div className="w-7 h-7 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-[var(--color-accent-gold)] transition-all duration-300">
                        <ChevronRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}