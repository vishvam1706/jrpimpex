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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary-dark/20"></div>

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

            {/* Decorative floating element */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-accent-gold/20 rounded-full blur-3xl"></div>
                <div className="relative w-56 h-56 bg-white/10 backdrop-blur-sm rounded-full border-2 border-white/20 flex items-center justify-center shadow-lift">
                  <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center">
                    <svg
                      className="w-24 h-24 text-primary"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
                    </svg>
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
                            className={`relative aspect-square rounded-xl overflow-hidden transition-all duration-300 ${
                              currentImageIndex === index
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
                      className={`py-4 px-6 font-semibold transition-all duration-300 relative ${
                        activeTab === "description"
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
                      className={`py-4 px-6 font-semibold transition-all duration-300 relative ${
                        activeTab === "specifications"
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

                  <div className="flex items-start gap-6 relative z-10">
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-accent-gold/30 rounded-2xl blur-xl"></div>
                      <div className="relative w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                        <ShieldCheck className="w-9 h-9 text-accent-gold-lt" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold mb-3 font-heading">
                        Quality Assurance Guarantee
                      </h3>
                      <div className="w-20 h-1 bg-accent-gold-lt/50 rounded-full mb-4"></div>
                      <p className="text-white/90 text-lg leading-relaxed">
                        All our products undergo strict quality control measures
                        to ensure they meet international standards. We are
                        committed to delivering only the finest quality products
                        to our clients worldwide.
                      </p>
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
        <section className="py-20 lg:py-32 section-cream">
          <div className="container-custom">
            <div className="text-center mb-16">
              <span className="section-label">You May Also Like</span>
              <h2 className="section-title section-title--center text-3xl md:text-4xl font-bold mt-4">
                Related Products
              </h2>
              <p className="text-text-muted text-lg mt-6 max-w-2xl mx-auto">
                Explore more premium products from our {product.category}{" "}
                collection
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct, index) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.slug}`}
                  className="card-elevated group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Hover overlay badge */}
                    <div className="absolute top-4 right-4 bg-accent-gold text-primary-dark px-3 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      View Details
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary-dark mb-3 group-hover:text-primary transition-colors duration-300 font-heading">
                      {relatedProduct.title}
                    </h3>
                    <p className="text-text-muted text-sm mb-4 line-clamp-2 leading-relaxed">
                      {relatedProduct.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-border-light">
                      <span className="text-sm text-accent-gold font-semibold">
                        Learn More
                      </span>
                      <ChevronRight className="w-5 h-5 text-accent-gold group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Premium CTA Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="gradient-hero rounded-3xl overflow-hidden relative">
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                <pattern
                  id="cta-pattern"
                  width="60"
                  height="60"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="30" cy="30" r="1.5" fill="white" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#cta-pattern)" />
              </svg>
            </div>

            <div className="relative z-10 p-8 lg:p-16 text-center text-white">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-heading">
                Interested in {product.title}?
              </h2>
              <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto leading-relaxed">
                Contact us for pricing, bulk orders, and custom requirements
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-gold inline-flex items-center gap-3 group"
                >
                  <span>Request a Quote</span>
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
                <Link
                  href="/products"
                  className="btn-outline border-white text-white hover:bg-white hover:text-primary inline-flex items-center gap-3 group"
                >
                  <span>View All Products</span>
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/20 rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-white/20 rounded-full"></div>
          </div>
        </div>
      </section>
    </>
  );
}
