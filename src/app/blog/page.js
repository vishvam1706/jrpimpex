"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight, Calendar, Clock, Tag, Search, X } from "lucide-react";
import blogsData from "@/data/blogs";

function BlogPageContent() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Update selected category if URL changes
  useEffect(() => {
    const category = searchParams.get("category");
    if (category && blogsData.categories.some(c => c.id === category)) {
      setSelectedCategory(category);
    } else {
      setSelectedCategory("all");
    }
  }, [searchParams]);

  const filteredPosts = useMemo(() => {
    return blogsData.posts.filter((post) => {
      const matchCategory =
        selectedCategory === "all" || post.category === selectedCategory;
      const matchSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = blogsData.posts.find((p) => p.featured);
  const showFeatured = selectedCategory === "all" && searchQuery === "";

  return (
    <>
      {/* ── Hero Section ─────────────────────────────────────── */}
      <section className="relative gradient-hero py-24 lg:py-32 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/about_us.jpg"
            alt="Blog"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-dark)]/95 via-[var(--color-primary)]/75 to-[var(--color-primary-light)]/30" />
        </div>

        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-[0.07]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="blog-pattern"
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
            <rect width="100%" height="100%" fill="url(#blog-pattern)" />
          </svg>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-primary-dark)]/20" />

        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-[var(--color-accent-gold-lt)] text-sm font-semibold tracking-wide uppercase mb-6">
              Insights & Updates
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-[var(--font-heading)]">
              Our Blog
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto font-[var(--font-body)] leading-relaxed">
              Agro expertise, export insights, and sustainability stories from
              the Akshar Exports team.
            </p>
            <div className="flex items-center justify-center gap-3 text-white/90">
              <Link
                href="/"
                className="hover:text-[var(--color-accent-gold-lt)] transition-colors duration-300 font-medium"
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
              <span className="text-[var(--color-accent-gold-lt)] font-semibold">
                Blog
              </span>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute -bottom-1 left-0 right-0">
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

      {/* ── Featured Post ────────────────────────────────────── */}
      {featuredPost && showFeatured && (
        <section className="py-16 bg-white relative overflow-hidden">
          <div className="container-custom">
            {/* Label */}
            <div className="flex items-center gap-3 mb-10">
              <div className="w-6 h-[2px] bg-[var(--color-primary-light)]" />
              <span className="text-[var(--color-primary-light)] text-xs font-bold uppercase tracking-[0.2em] font-[var(--font-body)]">
                Featured Article
              </span>
            </div>

            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group grid lg:grid-cols-2 gap-0 rounded-sm overflow-hidden shadow-[var(--shadow-lift)] border-2 border-[var(--color-border)] hover:border-[var(--color-accent-gold)] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-72 lg:h-auto overflow-hidden">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--color-primary-dark)]/40" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[var(--color-accent-gold)] text-[var(--color-primary-dark)] text-[10px] font-black uppercase tracking-wider rounded-full shadow-md">
                    ★ Featured
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="bg-[var(--color-primary)] p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5 pointer-events-none" />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-white/5 pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[var(--color-accent-gold)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 bg-[var(--color-accent-green)] text-white text-[10px] font-bold uppercase tracking-wider rounded-full mb-4">
                    {featuredPost.categoryLabel}
                  </span>

                  <h2 className="font-[var(--font-heading)] font-bold text-white text-2xl lg:text-3xl xl:text-4xl leading-snug mb-4 group-hover:text-[var(--color-accent-gold)] transition-colors duration-300">
                    {featuredPost.title}
                  </h2>

                  <div className="w-12 h-[3px] bg-gradient-to-r from-[var(--color-accent-gold)] to-[var(--color-accent-gold-lt)] rounded-full mb-5" />

                  <p className="text-white/70 text-sm font-[var(--font-body)] leading-relaxed mb-6 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center gap-5 mb-6">
                    <div className="flex items-center gap-1.5 text-white/50 text-xs font-[var(--font-body)]">
                      <Calendar className="w-3.5 h-3.5" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-1.5 text-white/50 text-xs font-[var(--font-body)]">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredPost.readTime}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-5 border-t border-white/15">
                    <div>
                      <p className="text-white text-sm font-semibold font-[var(--font-body)]">
                        {featuredPost.author.name}
                      </p>
                      <p className="text-white/50 text-xs font-[var(--font-body)]">
                        {featuredPost.author.role}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-[var(--color-accent-gold)] text-xs font-bold uppercase tracking-wide group-hover:gap-3 transition-all duration-300">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ── Filter + Search + Grid ───────────────────────────── */}
      <section className="py-16 lg:py-24 section-cream relative overflow-hidden">
        <div className="absolute top-20 left-10 w-24 h-24 border-2 border-[var(--color-primary)]/10 rounded-full pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-[var(--color-accent-gold)]/10 rounded-full pointer-events-none" />

        <div className="container-custom relative z-10">

          {/* Section header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-[var(--color-primary-light)]" />
              <span className="text-[var(--color-primary-light)] text-xs font-bold uppercase tracking-[0.2em] font-[var(--font-body)]">
                All Articles
              </span>
              <div className="w-6 h-[2px] bg-[var(--color-primary-light)]" />
            </div>
            <h2 className="font-[var(--font-heading)] font-bold text-[var(--color-primary)] text-3xl md:text-4xl leading-tight tracking-tight">
              Browse Our Blog
            </h2>
            <div className="w-12 h-[3px] bg-gradient-to-r from-[var(--color-accent-gold)] to-[var(--color-accent-gold-lt)] rounded-full mx-auto mt-5" />
          </div>

          {/* Search */}
          <div className="max-w-xl mx-auto mb-10">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-muted)]" />
              <input
                type="text"
                placeholder="Search articles, topics, tags…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-10 py-3.5 rounded-sm border-2 border-[var(--color-border)] focus:border-[var(--color-primary)] focus:outline-none text-sm font-[var(--font-body)] text-[var(--color-primary-dark)] bg-white shadow-[var(--shadow-card)] transition-colors duration-200"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {blogsData.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`group relative px-6 py-3 rounded-sm font-semibold text-sm transition-all duration-300 overflow-hidden border-2 ${
                  selectedCategory === cat.id
                    ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-[var(--shadow-lift)]"
                    : "bg-white text-[var(--color-primary-dark)] border-[var(--color-border)] hover:border-[var(--color-primary)] hover:text-white"
                }`}
              >
                {selectedCategory !== cat.id && (
                  <span className="absolute inset-0 bg-[var(--color-primary)] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                )}
                <span className="relative z-10 font-[var(--font-body)]">
                  {cat.title}
                </span>
              </button>
            ))}
          </div>

          {/* Result count */}
          <div className="text-center mb-10">
            <p className="text-[var(--color-text-muted)] text-sm font-[var(--font-body)]">
              Showing{" "}
              <span className="font-bold text-[var(--color-primary)]">
                {filteredPosts.length}
              </span>{" "}
              {filteredPosts.length === 1 ? "article" : "articles"}
              {selectedCategory !== "all" && (
                <span className="ml-1">
                  in{" "}
                  <span className="font-bold text-[var(--color-accent-gold)]">
                    {
                      blogsData.categories.find((c) => c.id === selectedCategory)
                        ?.title
                    }
                  </span>
                </span>
              )}
              {searchQuery && (
                <span className="ml-1">
                  for{" "}
                  <span className="font-bold text-[var(--color-accent-gold)]">
                    "{searchQuery}"
                  </span>
                </span>
              )}
            </p>
          </div>

          {/* Posts grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {filteredPosts.map((post, index) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group relative flex flex-col bg-white rounded-sm overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-lift)] hover:-translate-y-1.5 border-2 border-[var(--color-border)] hover:border-[var(--color-accent-gold)] transition-all duration-300"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  {/* Gold top rule on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-[var(--color-accent-gold)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-10" />

                  {/* Image */}
                  <div className="relative h-52 overflow-hidden flex-shrink-0">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-dark)]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Category badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-3 py-1 bg-[var(--color-accent-green)] text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-md">
                        {post.categoryLabel}
                      </span>
                    </div>

                    {/* Index badge */}
                    <div className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-[var(--color-accent-gold)] flex items-center justify-center shadow-md">
                      <span className="text-[var(--color-primary-dark)] text-[10px] font-black leading-none">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Arrow on hover */}
                    <div className="absolute inset-0 flex items-end justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white rounded-full p-2.5 shadow-[var(--shadow-lift)] transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <ArrowRight className="w-4 h-4 text-[var(--color-primary)]" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-5 bg-[var(--color-primary)] relative overflow-hidden">
                    <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-white/5 pointer-events-none" />
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-white/5 pointer-events-none" />

                    {/* Meta */}
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center gap-1.5 text-white/50 text-[10px] font-[var(--font-body)]">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1.5 text-white/50 text-[10px] font-[var(--font-body)]">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>

                    <h3 className="font-[var(--font-heading)] font-semibold text-white text-base mb-2 leading-snug group-hover:text-[var(--color-accent-gold)] transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-white/65 text-xs font-[var(--font-body)] leading-relaxed line-clamp-2 mb-4 flex-1">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {post.tags.slice(0, 2).map((tag, i) => (
                        <span
                          key={i}
                          className="flex items-center gap-1 px-2 py-0.5 bg-white/10 border border-white/15 rounded-full text-white/60 text-[9px] font-semibold uppercase tracking-wide"
                        >
                          <Tag className="w-2.5 h-2.5" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/15">
                      <div>
                        <p className="text-white text-[11px] font-semibold font-[var(--font-body)] leading-none">
                          {post.author.name}
                        </p>
                        <p className="text-white/45 text-[9px] font-[var(--font-body)] mt-0.5">
                          {post.author.role}
                        </p>
                      </div>
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
                  <Search className="w-10 h-10 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-[var(--font-heading)] text-2xl font-bold text-[var(--color-primary-dark)] mb-3">
                  No Articles Found
                </h3>
                <p className="text-[var(--color-text-muted)] text-base mb-8 font-[var(--font-body)]">
                  Try adjusting your search or selecting a different category.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                  className="btn-outline"
                >
                  View All Articles
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Newsletter CTA ───────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="relative rounded-sm overflow-hidden shadow-[var(--shadow-lift)]">

            {/* Background */}
            <div className="absolute inset-0">
              <Image
                src="/about_us.jpg"
                alt="Newsletter"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-dark)]/95 via-[var(--color-primary)]/85 to-[var(--color-primary-dark)]/90" />
            </div>

            {/* Gold borders */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[var(--color-accent-gold)] to-transparent z-20" />
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[var(--color-accent-gold)]/50 to-transparent z-20" />

            {/* Dot pattern */}
            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />

            {/* Animated blobs */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--color-accent-gold)] rounded-full blur-3xl animate-pulse" />
              <div
                className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-primary-light)] rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function BlogPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-32 text-center">Loading Articles...</div>}>
      <BlogPageContent />
    </Suspense>
  );
}