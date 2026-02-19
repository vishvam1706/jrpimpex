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
      {/* Premium Breadcrumb Hero */}
      <section className="relative gradient-hero py-24 lg:py-32 overflow-hidden">

        {/* ── Full background image ─────────────────────────── */}
        <div className="absolute inset-0">
          <Image
            src={"/about_us.jpg"}
            alt={product.title}
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

        {/* Gradient overlay — bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-primary-dark)]/20" />

        <div className="container-custom relative z-10">
          <div className="flex items-center justify-between">

            {/* Left — Text */}
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-accent-gold-lt text-sm font-semibold tracking-wide uppercase mb-6">
                {product.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
                {product.title}
              </h1>
              <div className="flex items-center gap-3 text-white/90">
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
                <Link
                  href="/products"
                  className="hover:text-accent-gold-lt transition-colors duration-300 font-medium"
                >
                  Products
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
                <span className="text-accent-gold-lt font-semibold">
                  {product.title}
                </span>
              </div>
            </div>

            {/* Right — Floating product image circle */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-[var(--color-accent-gold)]/20 rounded-full blur-3xl" />
                <div className="relative w-56 h-56 bg-white/10 backdrop-blur-sm rounded-full border-2 border-white/20 flex items-center justify-center shadow-[var(--shadow-lift)]">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white/30">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={160}
                      height={160}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 82C1200 84 1320 78 1380 75L1440 72V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>

      </section>

      {/* Premium Product Content */}
      <section className="py-20 lg:py-32 bg-white relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Premium Sidebar - Related Products */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="card-classic sticky top-24">
                <div className="p-6 lg:p-8">
                  <div className="mb-6">
                    <span className="section-label text-xs">Explore More</span>
                    <h3 className="text-xl lg:text-2xl font-bold text-primary-dark font-heading">
                      More in {product.category}
                    </h3>
                    <div className="gold-rule"></div>
                  </div>

                  <div className="space-y-4">
                    {relatedProducts.length > 0 ? (
                      relatedProducts.map((relatedProduct) => (
                        <Link
                          key={relatedProduct.id}
                          href={`/products/${relatedProduct.slug}`}
                          className="flex items-center gap-4 p-4 bg-primary-muted rounded-xl hover:shadow-card hover:bg-white transition-all duration-300 group border border-transparent hover:border-accent-gold/30"
                        >
                          <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden shadow-sm">
                            <Image
                              src={relatedProduct.image}
                              alt={relatedProduct.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="font-semibold text-primary-dark text-sm group-hover:text-primary transition-colors duration-300 line-clamp-2">
                              {relatedProduct.title}
                            </span>
                          </div>
                          <ChevronRight className="w-5 h-5 text-text-light group-hover:text-accent-gold group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                        </Link>
                      ))
                    ) : (
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-primary-muted rounded-full flex items-center justify-center mx-auto mb-3">
                          <Package className="w-8 h-8 text-primary" />
                        </div>
                        <p className="text-text-muted text-sm">
                          No related products available
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Quick Contact */}
                  <div className="mt-8 pt-8 border-t border-border-light">
                    <h4 className="font-bold text-primary-dark mb-4 text-lg">
                      Need Assistance?
                    </h4>
                    <Link
                      href="/contact"
                      className="btn-outline w-full justify-center group"
                    >
                      <span>Contact Us</span>
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              {/* Premium Product Image & Info */}
              <div className="card-elevated overflow-hidden mb-12">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Premium Image Gallery */}
                  <div className="p-6 lg:p-8 bg-surface-warm">
                    <div className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-card mb-4">
                      <Image
                        src={images[currentImageIndex]}
                        alt={product.title}
                        fill
                        className="object-cover"
                      />

                      {/* Premium Navigation Arrows */}
                      {images.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/95 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center transition-all shadow-card hover:shadow-lift group"
                          >
                            <ChevronLeft className="w-6 h-6 text-primary group-hover:text-accent-gold transition-colors" />
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/95 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center transition-all shadow-card hover:shadow-lift group"
                          >
                            <ChevronRight className="w-6 h-6 text-primary group-hover:text-accent-gold transition-colors" />
                          </button>
                        </>
                      )}

                      {/* Image counter badge */}
                      {images.length > 1 && (
                        <div className="absolute bottom-4 right-4 bg-primary-dark/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-semibold">
                          {currentImageIndex + 1} / {images.length}
                        </div>
                      )}
                    </div>

                    {/* Premium Thumbnails */}
                    {images.length > 1 && (
                      <div className="grid grid-cols-4 gap-3">
                        {images.map((img, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`relative aspect-square rounded-xl overflow-hidden transition-all duration-300 ${currentImageIndex === index
                              ? "ring-3 ring-accent-gold shadow-gold scale-105"
                              : "ring-1 ring-border-light hover:ring-2 hover:ring-primary hover:scale-105"
                              }`}
                          >
                            <Image
                              src={img}
                              alt={`${product.title} ${index + 1}`}
                              fill
                              className="object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Premium Product Info */}
                  <div className="p-6 lg:p-8">
                    <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-6 font-heading">
                      {product.title}
                    </h2>

                    {/* Premium Translations */}
                    {product.translations && (
                      <div className="space-y-3 mb-8 bg-primary-muted rounded-xl p-5">
                        <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                          Also Known As
                        </div>
                        {product.translations.arabic && (
                          <div className="flex items-start gap-3">
                            <span className="font-bold text-primary min-w-[90px] text-sm">
                              Arabic:
                            </span>
                            <span className="text-text-base font-medium">
                              {product.translations.arabic}
                            </span>
                          </div>
                        )}
                        {product.translations.portuguese && (
                          <div className="flex items-start gap-3">
                            <span className="font-bold text-primary min-w-[90px] text-sm">
                              Portuguese:
                            </span>
                            <span className="text-text-base font-medium">
                              {product.translations.portuguese}
                            </span>
                          </div>
                        )}
                        {product.translations.dutch && (
                          <div className="flex items-start gap-3">
                            <span className="font-bold text-primary min-w-[90px] text-sm">
                              Dutch:
                            </span>
                            <span className="text-text-base font-medium">
                              {product.translations.dutch}
                            </span>
                          </div>
                        )}
                        {product.translations.spanish && (
                          <div className="flex items-start gap-3">
                            <span className="font-bold text-primary min-w-[90px] text-sm">
                              Spanish:
                            </span>
                            <span className="text-text-base font-medium">
                              {product.translations.spanish}
                            </span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Premium Origin & Packaging */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-white border border-border-light rounded-xl p-5 hover:border-accent-gold/30 hover:shadow-sm transition-all duration-300">
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="w-5 h-5 text-accent-gold" />
                          <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                            Origin
                          </span>
                        </div>
                        <p className="font-bold text-primary-dark text-lg">
                          {product.origin}
                        </p>
                      </div>
                      <div className="bg-white border border-border-light rounded-xl p-5 hover:border-accent-gold/30 hover:shadow-sm transition-all duration-300">
                        <div className="flex items-center gap-2 mb-2">
                          <Package className="w-5 h-5 text-accent-gold" />
                          <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                            Packaging
                          </span>
                        </div>
                        <p className="font-bold text-primary-dark text-lg">
                          {product.packaging}
                        </p>
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="btn-gold w-full justify-center group"
                    >
                      <span>Make An Enquiry</span>
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Premium Product Details Tabs */}
              <div className="card-classic overflow-hidden mb-8">
                <div className="border-b border-border-light bg-surface-warm/50">
                  <div className="flex gap-2 px-6 lg:px-8">
                    <button
                      onClick={() => setActiveTab("description")}
                      className={`py-4 px-6 font-semibold transition-all duration-300 relative ${activeTab === "description"
                        ? "text-primary"
                        : "text-text-muted hover:text-primary"
                        }`}
                    >
                      Description
                      {activeTab === "description" && (
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-gold to-accent-gold-lt rounded-t-full"></div>
                      )}
                    </button>
                    <button
                      onClick={() => setActiveTab("specifications")}
                      className={`py-4 px-6 font-semibold transition-all duration-300 relative ${activeTab === "specifications"
                        ? "text-primary"
                        : "text-text-muted hover:text-primary"
                        }`}
                    >
                      Specifications
                      {activeTab === "specifications" && (
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-gold to-accent-gold-lt rounded-t-full"></div>
                      )}
                    </button>
                  </div>
                </div>

                <div className="p-6 lg:p-8">
                  {activeTab === "description" && (
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-primary-dark mb-4 font-heading">
                        Product Description
                      </h3>
                      <div className="gold-rule mb-6"></div>
                      <p className="text-text-muted text-lg leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  )}

                  {activeTab === "specifications" && (
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-primary-dark mb-4 font-heading">
                        Product Specifications
                      </h3>
                      <div className="gold-rule mb-6"></div>
                      {product.specifications &&
                        product.specifications.length > 0 ? (
                        <ul className="space-y-4">
                          {product.specifications.map((spec, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-4 text-text-base bg-primary-muted rounded-lg p-4 hover:bg-white hover:shadow-sm transition-all duration-300 group"
                            >
                              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-accent-gold transition-colors duration-300">
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
                              <span className="leading-relaxed">{spec}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="text-center py-12">
                          <div className="w-20 h-20 bg-primary-muted rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg
                              className="w-10 h-10 text-primary"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                          </div>
                          <p className="text-text-muted">
                            No specifications available for this product.
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Premium Quality Assurance */}
              <div className="card-elevated overflow-hidden">
                <div className="bg-gradient-to-br from-primary via-primary to-primary-light p-8 lg:p-10 text-white relative overflow-hidden">
                  {/* Decorative pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <svg
                      width="100%"
                      height="100%"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <pattern
                        id="quality-pattern"
                        width="40"
                        height="40"
                        patternUnits="userSpaceOnUse"
                      >
                        <circle cx="20" cy="20" r="1" fill="white" />
                      </pattern>
                      <rect
                        width="100%"
                        height="100%"
                        fill="url(#quality-pattern)"
                      />
                    </svg>
                  </div>

                  <div className="relative z-10 flex items-start gap-6">

                    {/* Icon block */}
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-[var(--color-accent-gold)]/30 rounded-sm blur-xl" />
                      <div className="relative w-16 h-16 bg-white/10 backdrop-blur-sm rounded-sm border border-[var(--color-accent-gold)]/40 flex items-center justify-center shadow-[var(--shadow-gold)]">
                        <ShieldCheck className="w-9 h-9 text-[var(--color-accent-gold)]" />
                      </div>
                      {/* Gold corner accent */}
                      <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[var(--color-accent-gold)] rounded-tr-sm" />
                      <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[var(--color-accent-gold)]/50 rounded-bl-sm" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      {/* Eyebrow */}
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-4 h-[2px] bg-[var(--color-accent-gold)]" />
                        <span className="text-[var(--color-accent-gold)] text-[10px] font-bold uppercase tracking-[0.2em] font-[var(--font-body)]">
                          Our Promise
                        </span>
                      </div>

                      <h3 className="font-[var(--font-heading)] font-bold text-white text-2xl lg:text-3xl leading-snug mb-3">
                        Quality Assurance
                        <span className="block text-[var(--color-accent-gold)]">Guarantee</span>
                      </h3>

                      {/* Gold rule */}
                      <div className="w-16 h-[3px] bg-gradient-to-r from-[var(--color-accent-gold)] to-[var(--color-accent-gold-lt)] rounded-full mb-4" />

                      <p className="text-white/80 text-base lg:text-lg font-[var(--font-body)] leading-relaxed">
                        All our products undergo strict quality control measures to ensure they
                        meet international standards. We are committed to delivering only the
                        finest quality products to our clients worldwide.
                      </p>

                      {/* Trust tags */}
                      <div className="flex flex-wrap gap-2 mt-5">
                        {["ISO Certified", "Lab Tested", "Export Grade"].map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white/80 text-xs font-semibold font-[var(--font-body)] tracking-wide"
                          >
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

      {/* Premium Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-20 lg:py-32 section-cream relative overflow-hidden">

          {/* Decorative bg */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[var(--color-accent-gold)]/40 to-transparent" />
          <div className="absolute top-20 left-10 w-24 h-24 border-2 border-[var(--color-primary)]/10 rounded-full pointer-events-none" />
          <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-[var(--color-accent-gold)]/10 rounded-full pointer-events-none" />

          <div className="container-custom relative z-10">

            {/* Header */}
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
                <span className="text-[var(--color-primary)] font-semibold">
                  {product.category}
                </span>{" "}
                collection
              </p>
            </div>

            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {relatedProducts.map((relatedProduct, index) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.slug}`}
                  className="group relative flex flex-col bg-white rounded-sm overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-lift)] hover:-translate-y-1.5 border-2 border-[var(--color-border)] hover:border-[var(--color-accent-gold)] transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Gold top rule on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-[var(--color-accent-gold)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-10" />

                  {/* Image */}
                  <div className="relative h-64 overflow-hidden flex-shrink-0">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-dark)]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Index badge */}
                    <div className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-[var(--color-accent-gold)] flex items-center justify-center shadow-md">
                      <span className="text-[var(--color-primary-dark)] text-[10px] font-black leading-none">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-3 py-1 bg-[var(--color-accent-green)] text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-md">
                        {relatedProduct.category}
                      </span>
                    </div>

                    {/* Arrow on hover */}
                    <div className="absolute inset-0 flex items-end justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white rounded-full p-2.5 shadow-[var(--shadow-lift)] transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <ChevronRight className="w-4 h-4 text-[var(--color-primary)]" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-5 bg-[var(--color-primary)] relative overflow-hidden">
                    {/* Subtle pattern */}
                    <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-white/5 pointer-events-none" />
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-white/5 pointer-events-none" />

                    <h3 className="font-[var(--font-heading)] font-semibold text-white text-base mb-2 leading-snug group-hover:text-[var(--color-accent-gold)] transition-colors duration-300">
                      {relatedProduct.title}
                    </h3>

                    <p className="text-white/70 text-xs font-[var(--font-body)] leading-relaxed line-clamp-2 mb-4 flex-1">
                      {relatedProduct.description}
                    </p>

                    {/* Footer */}
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
