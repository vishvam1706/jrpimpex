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
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-accent-gold-lt text-sm font-semibold tracking-wide uppercase mb-6">
              Premium Quality
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Our Products
            </h1>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover our extensive range of premium agricultural products,
              sourced from the finest farms and delivered with excellence.
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
              <span className="text-accent-gold-lt font-semibold">
                Products
              </span>
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

      {/* Premium Products Content */}
      <section className="py-20 lg:py-32 bg-white relative">
        <div className="container-custom">
          {/* Premium Category Filter */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <span className="section-label">Browse by Category</span>
              <h2 className="section-title section-title--center text-2xl md:text-3xl font-bold mt-3">
                Filter Products
              </h2>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => handleCategoryChange("all")}
                className={`group relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 overflow-hidden ${
                  selectedCategory === "all"
                    ? "bg-gradient-to-br from-primary to-primary-light text-white shadow-lift scale-105"
                    : "bg-white text-primary-dark hover:text-white shadow-card hover:shadow-lift border border-border-light"
                }`}
              >
                {selectedCategory !== "all" && (
                  <span className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  All Products
                </span>
              </button>

              {productsData.categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.slug)}
                  className={`group relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 overflow-hidden ${
                    selectedCategory === category.slug
                      ? "bg-gradient-to-br from-primary to-primary-light text-white shadow-lift scale-105"
                      : "bg-white text-primary-dark hover:text-white shadow-card hover:shadow-lift border border-border-light"
                  }`}
                >
                  {selectedCategory !== category.slug && (
                    <span className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  )}
                  <span className="relative z-10">{category.title}</span>
                </button>
              ))}
            </div>

            {/* Active filter indicator */}
            <div className="text-center mt-6">
              <p className="text-text-muted">
                Showing{" "}
                <span className="font-bold text-primary">
                  {filteredProducts.length}
                </span>{" "}
                products
                {selectedCategory !== "all" && (
                  <span className="ml-1">
                    in{" "}
                    <span className="font-bold text-accent-gold">
                      {
                        productsData.categories.find(
                          (c) => c.slug === selectedCategory,
                        )?.title
                      }
                    </span>
                  </span>
                )}
              </p>
            </div>
          </div>

          {/* Premium Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  className="group card-elevated"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Product Image */}
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="badge badge-green shadow-card backdrop-blur-sm">
                        {
                          productsData.categories.find(
                            (c) => c.slug === product.category,
                          )?.title
                        }
                      </span>
                    </div>

                    {/* Quick view button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-lift transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <ArrowRight className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary-dark mb-3 font-heading group-hover:text-primary transition-colors duration-300">
                      {product.title}
                    </h3>
                    <p className="text-text-muted text-sm mb-4 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* View Details Link */}
                    <div className="flex items-center justify-between pt-4 border-t border-border-light">
                      <span className="text-sm text-accent-gold font-semibold group-hover:text-primary transition-colors duration-300">
                        View Details
                      </span>
                      <div className="w-8 h-8 bg-primary-muted rounded-full flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                        <ArrowRight className="w-4 h-4 text-primary group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-primary-muted rounded-full flex items-center justify-center mx-auto mb-6">
                  <Package className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary-dark mb-3 font-heading">
                  No Products Found
                </h3>
                <p className="text-text-muted text-lg mb-8">
                  No products found in this category. Try selecting a different
                  category.
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

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-24 h-24 border-2 border-primary/10 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-accent-gold/10 rounded-full"></div>
      </section>

      {/* Premium CTA Section */}
      <section className="py-20 lg:py-24 section-cream relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern
              id="cta-pattern"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="50" cy="50" r="1.5" fill="currentColor" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#cta-pattern)" />
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="card-elevated overflow-hidden">
            <div className="relative gradient-hero p-12 lg:p-16 text-center text-white">
              {/* Animated background blobs */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-accent-gold rounded-full blur-3xl animate-pulse"></div>
                <div
                  className="absolute bottom-0 right-0 w-96 h-96 bg-primary-light rounded-full blur-3xl animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>

              <div className="relative z-10 max-w-3xl mx-auto">
                <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-accent-gold-lt text-sm font-semibold tracking-wide uppercase mb-6">
                  Ready to Order?
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-heading">
                  Interested in Our Products?
                </h2>
                <p className="text-xl mb-10 text-white/90 leading-relaxed">
                  Get in touch with us for quotes, bulk orders, and custom
                  requirements. Our team is ready to assist you.
                </p>
                <Link
                  href="/contact"
                  className="btn-gold inline-flex items-center gap-3 group"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>

                {/* Trust indicators */}
                <div className="grid sm:grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent-gold-lt mb-2 font-heading">
                      24/7
                    </div>
                    <div className="text-sm text-white/80">
                      Customer Support
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent-gold-lt mb-2 font-heading">
                      100%
                    </div>
                    <div className="text-sm text-white/80">Quality Assured</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent-gold-lt mb-2 font-heading">
                      Fast
                    </div>
                    <div className="text-sm text-white/80">Global Delivery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
