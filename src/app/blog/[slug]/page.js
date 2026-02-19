"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Tag, ArrowLeft, Share2, Twitter, Linkedin, Facebook } from "lucide-react";
import blogsData from "@/data/blogs";
import { notFound } from "next/navigation";

// ── If using Next.js App Router, pass params prop ─────────────
// export default function BlogDetailPage({ params }) {
//   const post = blogsData.posts.find((p) => p.slug === params.slug);

// For demo purposes, using first post
export default function BlogDetailPage({ params }) {
  const post = blogsData.posts.find((p) => p.slug === params?.slug) ?? blogsData.posts[0];

  if (!post) return notFound();

  const relatedPosts = blogsData.posts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <>
      {/* ── Hero / Banner ────────────────────────────────────── */}
      <section className="relative gradient-hero py-24 lg:py-32 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-dark)]/95 via-[var(--color-primary)]/80 to-[var(--color-primary-light)]/40" />
        </div>

        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-[0.07]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="blog-detail-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="40" cy="40" r="1.5" fill="white" />
                <circle cx="40" cy="40" r="20" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#blog-detail-pattern)" />
          </svg>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-primary-dark)]/20" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            {/* Category badge */}
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-[var(--color-accent-gold-lt)] text-sm font-semibold tracking-wide uppercase mb-6">
              {post.categoryLabel}
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-[var(--font-heading)] leading-[1.15]">
              {post.title}
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-5 mb-6">
              <div className="flex items-center gap-2 text-white/70 text-sm font-[var(--font-body)]">
                <Calendar className="w-4 h-4 text-[var(--color-accent-gold)]" />
                {post.date}
              </div>
              <div className="flex items-center gap-2 text-white/70 text-sm font-[var(--font-body)]">
                <Clock className="w-4 h-4 text-[var(--color-accent-gold)]" />
                {post.readTime}
              </div>
              <div className="flex items-center gap-2 text-white/70 text-sm font-[var(--font-body)]">
                <span className="text-[var(--color-accent-gold)] font-semibold">{post.author.name}</span>
                <span className="text-white/40">·</span>
                <span>{post.author.role}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1.5 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white/70 text-xs font-semibold uppercase tracking-wide font-[var(--font-body)]"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Breadcrumb */}
            <div className="flex items-center gap-3 text-white/90">
              <Link href="/" className="hover:text-[var(--color-accent-gold-lt)] transition-colors duration-300 font-medium text-sm">
                Home
              </Link>
              <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/blog" className="hover:text-[var(--color-accent-gold-lt)] transition-colors duration-300 font-medium text-sm">
                Blog
              </Link>
              <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-[var(--color-accent-gold-lt)] font-semibold text-sm line-clamp-1 max-w-[200px]">
                {post.title}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 82C1200 84 1320 78 1380 75L1440 72V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* ── Main Content ─────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[var(--color-accent-gold)]/40 to-transparent" />

        <div className="container-custom">
          <div className="grid lg:grid-cols-[1fr_340px] gap-12 xl:gap-16 items-start">

            {/* ── Article Body ───────────────────────────────── */}
            <article>
              {/* Featured image */}
              <div className="relative h-80 lg:h-[460px] rounded-sm overflow-hidden mb-10 shadow-[var(--shadow-lift)] border-2 border-[var(--color-border)]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-dark)]/30 to-transparent" />
                {/* Gold top rule */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[var(--color-accent-gold)] to-transparent" />
              </div>

              {/* Intro / excerpt highlight */}
              <div className="relative pl-6 mb-10 border-l-4 border-[var(--color-accent-gold)]">
                <p className="text-[var(--color-primary-dark)] text-lg lg:text-xl font-[var(--font-body)] leading-relaxed font-medium italic">
                  {post.excerpt}
                </p>
              </div>

              {/* Gold rule */}
              <div className="w-12 h-[3px] bg-gradient-to-r from-[var(--color-accent-gold)] to-[var(--color-accent-gold-lt)] rounded-full mb-8" />

              {/* Article content */}
              <div className="prose-custom font-[var(--font-body)] text-[var(--color-text-muted)] leading-relaxed space-y-6">
                <p className="text-base leading-[1.9]">
                  {post.content}
                </p>

                <h2 className="font-[var(--font-heading)] font-bold text-[var(--color-primary-dark)] text-2xl mt-10 mb-4">
                  Understanding the Market Dynamics
                </h2>
                <p className="text-base leading-[1.9]">
                  The global agricultural export landscape has evolved significantly over the past decade. Driven by rising middle-class populations in emerging economies, increasing health consciousness, and greater access to international trade networks, the demand for quality-certified agro products continues to climb. Exporters who invest in traceability, certifications, and sustainable practices are finding themselves at a competitive advantage.
                </p>

                {/* Pull quote */}
                <div className="my-10 relative bg-[var(--color-primary)] rounded-sm p-8 overflow-hidden shadow-[var(--shadow-card)]">
                  <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-white/5" />
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[var(--color-accent-gold)] to-transparent" />
                  <div className="text-[var(--color-accent-gold)] text-5xl font-black leading-none mb-3 font-[var(--font-heading)]">"</div>
                  <p className="text-white text-lg lg:text-xl font-[var(--font-body)] leading-relaxed font-medium relative z-10">
                    Quality is not just a standard — it is our promise to every partner across the globe. Every shipment carries the trust of farmers, processors, and buyers alike.
                  </p>
                  <div className="flex items-center gap-3 mt-5">
                    <div className="w-8 h-[2px] bg-[var(--color-accent-gold)]" />
                    <span className="text-[var(--color-accent-gold)] text-xs font-bold uppercase tracking-[0.2em] font-[var(--font-body)]">
                      JRP Impex Philosophy
                    </span>
                  </div>
                </div>

                <h2 className="font-[var(--font-heading)] font-bold text-[var(--color-primary-dark)] text-2xl mt-10 mb-4">
                  Key Takeaways for Exporters
                </h2>
                <p className="text-base leading-[1.9]">
                  Successful agro exporters consistently share several characteristics: they maintain rigorous quality control processes, invest in eco-friendly packaging, build transparent supply chains, and nurture long-term partnerships with both farmers and international buyers. At JRP Impex, these principles are embedded into every step of our operations.
                </p>

                {/* Highlight boxes */}
                <div className="grid sm:grid-cols-2 gap-5 my-10">
                  {[
                    { title: "Quality First", desc: "Every batch is independently tested against international benchmarks before dispatch." },
                    { title: "Sustainable Sourcing", desc: "We work directly with certified farms committed to responsible agricultural practices." },
                    { title: "Global Reach", desc: "Our logistics network covers 50+ countries with reliable cold-chain capabilities." },
                    { title: "Expert Support", desc: "Dedicated account managers guide clients from inquiry through post-delivery." },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="group relative p-5 border-2 border-[var(--color-border)] rounded-sm hover:border-[var(--color-accent-gold)] transition-all duration-300 overflow-hidden bg-white hover:shadow-[var(--shadow-card)]"
                    >
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[var(--color-accent-gold)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[var(--color-primary)] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-[var(--color-accent-gold)] text-[10px] font-black">✓</span>
                        </div>
                        <div>
                          <h4 className="font-[var(--font-heading)] font-bold text-[var(--color-primary-dark)] text-sm mb-1">
                            {item.title}
                          </h4>
                          <p className="text-[var(--color-text-muted)] text-xs font-[var(--font-body)] leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-base leading-[1.9]">
                  Looking ahead, the convergence of technology, sustainability mandates, and evolving consumer tastes will continue to reshape global agro trade. Exporters who adapt — investing in digital documentation, eco-certifications, and diversified logistics — will emerge as the partners of choice for international buyers in the years to come.
                </p>
              </div>

              {/* Share section */}
              <div className="mt-12 pt-8 border-t-2 border-[var(--color-border)]">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                  <div>
                    <p className="text-[var(--color-primary-dark)] text-sm font-bold font-[var(--font-body)] mb-1">
                      Share this article
                    </p>
                    <p className="text-[var(--color-text-muted)] text-xs font-[var(--font-body)]">
                      Found this helpful? Share it with your network.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    {[
                      { Icon: Twitter, label: "Twitter", color: "hover:bg-sky-500" },
                      { Icon: Linkedin, label: "LinkedIn", color: "hover:bg-blue-600" },
                      { Icon: Facebook, label: "Facebook", color: "hover:bg-blue-700" },
                    ].map(({ Icon, label, color }) => (
                      <button
                        key={label}
                        aria-label={`Share on ${label}`}
                        className={`w-10 h-10 rounded-full border-2 border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] ${color} hover:text-white hover:border-transparent transition-all duration-300`}
                      >
                        <Icon className="w-4 h-4" />
                      </button>
                    ))}
                    <button
                      aria-label="Copy link"
                      className="w-10 h-10 rounded-full border-2 border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:bg-[var(--color-primary)] hover:text-white hover:border-transparent transition-all duration-300"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Author card */}
              <div className="mt-10 rounded-sm overflow-hidden border-2 border-[var(--color-border)] shadow-[var(--shadow-card)]">
                <div className="bg-[var(--color-primary)] p-6 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[var(--color-accent-gold)] to-transparent" />
                  <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-white/5" />
                  <div className="flex items-center gap-5">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[var(--color-accent-gold)]/50 flex-shrink-0">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-4 h-[2px] bg-[var(--color-accent-gold)]" />
                        <span className="text-[var(--color-accent-gold)] text-[10px] font-bold uppercase tracking-[0.2em] font-[var(--font-body)]">
                          Written By
                        </span>
                      </div>
                      <p className="text-white font-bold text-lg font-[var(--font-heading)]">
                        {post.author.name}
                      </p>
                      <p className="text-white/60 text-sm font-[var(--font-body)]">
                        {post.author.role} · JRP Impex
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Back + Next nav */}
              <div className="mt-10 flex items-center justify-between">
                <Link
                  href="/blog"
                  className="group inline-flex items-center gap-2 text-[var(--color-primary)] text-sm font-bold font-[var(--font-body)] hover:text-[var(--color-accent-gold)] transition-colors duration-300"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                  Back to Blog
                </Link>
                <Link
                  href="/contact"
                  className="btn-gold inline-flex items-center gap-2 group text-sm"
                >
                  Get In Touch
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </article>

            {/* ── Sidebar ────────────────────────────────────── */}
            <aside className="space-y-8 lg:sticky lg:top-8">

              {/* About the blog */}
              <div className="rounded-sm overflow-hidden border-2 border-[var(--color-border)] shadow-[var(--shadow-card)]">
                <div className="bg-[var(--color-primary)] p-5 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[var(--color-accent-gold)] to-transparent" />
                  <div className="absolute -top-5 -right-5 w-16 h-16 rounded-full bg-white/5" />
                  <div className="flex items-center gap-2 mb-1 relative z-10">
                    <div className="w-4 h-[2px] bg-[var(--color-accent-gold)]" />
                    <span className="text-[var(--color-accent-gold)] text-[10px] font-bold uppercase tracking-[0.2em] font-[var(--font-body)]">
                      About
                    </span>
                  </div>
                  <h3 className="font-[var(--font-heading)] font-bold text-white text-lg relative z-10">
                    JRP Impex Blog
                  </h3>
                </div>
                <div className="p-5 bg-white">
                  <p className="text-[var(--color-text-muted)] text-sm font-[var(--font-body)] leading-relaxed">
                    Expert insights on agro exports, global trade, sustainability, and market trends — straight from our team of specialists.
                  </p>
                </div>
              </div>

              {/* Categories */}
              <div className="rounded-sm overflow-hidden border-2 border-[var(--color-border)] shadow-[var(--shadow-card)]">
                <div className="bg-[var(--color-primary)] p-5 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[var(--color-accent-gold)] to-transparent" />
                  <div className="absolute -top-5 -right-5 w-16 h-16 rounded-full bg-white/5" />
                  <div className="flex items-center gap-2 relative z-10">
                    <div className="w-4 h-[2px] bg-[var(--color-accent-gold)]" />
                    <h3 className="font-[var(--font-heading)] font-bold text-white text-base">
                      Categories
                    </h3>
                  </div>
                </div>
                <div className="p-4 bg-white divide-y divide-[var(--color-border)]">
                  {blogsData.categories.filter((c) => c.id !== "all").map((cat) => {
                    const count = blogsData.posts.filter((p) => p.category === cat.id).length;
                    return (
                      <Link
                        key={cat.id}
                        href={`/blog?category=${cat.id}`}
                        className={`group flex items-center justify-between py-3 transition-colors duration-200 ${
                          post.category === cat.id
                            ? "text-[var(--color-primary)] font-bold"
                            : "text-[var(--color-text-muted)] hover:text-[var(--color-primary)]"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {post.category === cat.id && (
                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-gold)]" />
                          )}
                          <span className="text-sm font-[var(--font-body)]">{cat.title}</span>
                        </div>
                        <span className="text-[10px] bg-[var(--color-primary-muted)] text-[var(--color-primary)] px-2 py-0.5 rounded-full font-bold">
                          {count}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Tags */}
              <div className="rounded-sm overflow-hidden border-2 border-[var(--color-border)] shadow-[var(--shadow-card)]">
                <div className="bg-[var(--color-primary)] p-5 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[var(--color-accent-gold)] to-transparent" />
                  <div className="absolute -top-5 -right-5 w-16 h-16 rounded-full bg-white/5" />
                  <div className="flex items-center gap-2 relative z-10">
                    <div className="w-4 h-[2px] bg-[var(--color-accent-gold)]" />
                    <h3 className="font-[var(--font-heading)] font-bold text-white text-base">
                      Tags
                    </h3>
                  </div>
                </div>
                <div className="p-5 bg-white">
                  <div className="flex flex-wrap gap-2">
                    {[...new Set(blogsData.posts.flatMap((p) => p.tags))].map((tag, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1.5 rounded-sm text-xs font-bold font-[var(--font-body)] uppercase tracking-wide border-2 transition-all duration-200 cursor-pointer ${
                          post.tags.includes(tag)
                            ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]"
                            : "bg-white text-[var(--color-text-muted)] border-[var(--color-border)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA sidebar */}
              <div className="relative rounded-sm overflow-hidden shadow-[var(--shadow-lift)]">
                <div className="absolute inset-0">
                  <Image src="/about_us.jpg" alt="Contact" fill className="object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary-dark)]/90 to-[var(--color-primary)]/95" />
                </div>
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[var(--color-accent-gold)] to-transparent z-10" />
                <div
                  className="absolute inset-0 opacity-[0.06] pointer-events-none"
                  style={{
                    backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
                <div className="relative z-10 p-7 text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <div className="w-4 h-[2px] bg-[var(--color-accent-gold)]" />
                    <span className="text-[var(--color-accent-gold)] text-[10px] font-bold uppercase tracking-[0.2em] font-[var(--font-body)]">
                      Get Started
                    </span>
                    <div className="w-4 h-[2px] bg-[var(--color-accent-gold)]" />
                  </div>
                  <h3 className="font-[var(--font-heading)] font-bold text-white text-xl mb-3 leading-snug">
                    Ready to Export
                    <span className="block text-[var(--color-accent-gold)]">with JRP?</span>
                  </h3>
                  <div className="w-8 h-[2px] bg-gradient-to-r from-[var(--color-accent-gold)] to-[var(--color-accent-gold-lt)] mx-auto mb-4" />
                  <p className="text-white/65 text-xs font-[var(--font-body)] leading-relaxed mb-6">
                    Get in touch with our team for custom quotes, bulk orders, and tailored export solutions.
                  </p>
                  <Link
                    href="/contact"
                    className="btn-gold inline-flex items-center gap-2 group w-full justify-center text-sm"
                  >
                    Contact Us
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>

            </aside>
          </div>
        </div>
      </section>

      {/* ── Related Posts ────────────────────────────────────── */}
      {relatedPosts.length > 0 && (
        <section className="py-16 lg:py-24 section-cream relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[var(--color-accent-gold)]/40 to-transparent" />
          <div className="absolute top-20 left-10 w-24 h-24 border-2 border-[var(--color-primary)]/10 rounded-full pointer-events-none" />
          <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-[var(--color-accent-gold)]/10 rounded-full pointer-events-none" />

          <div className="container-custom relative z-10">
            {/* Header */}
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-6 h-[2px] bg-[var(--color-primary-light)]" />
                <span className="text-[var(--color-primary-light)] text-xs font-bold uppercase tracking-[0.2em] font-[var(--font-body)]">
                  You May Also Like
                </span>
                <div className="w-6 h-[2px] bg-[var(--color-primary-light)]" />
              </div>
              <h2 className="font-[var(--font-heading)] font-bold text-[var(--color-primary)] text-3xl md:text-4xl leading-tight tracking-tight">
                Related Articles
              </h2>
              <div className="w-12 h-[3px] bg-gradient-to-r from-[var(--color-accent-gold)] to-[var(--color-accent-gold-lt)] rounded-full mx-auto mt-5" />
            </div>

            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {relatedPosts.map((related, index) => (
                <Link
                  key={related.id}
                  href={`/blog/${related.slug}`}
                  className="group relative flex flex-col bg-white rounded-sm overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-lift)] hover:-translate-y-1.5 border-2 border-[var(--color-border)] hover:border-[var(--color-accent-gold)] transition-all duration-300"
                >
                  {/* Gold top rule */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-[var(--color-accent-gold)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-10" />

                  {/* Image */}
                  <div className="relative h-52 overflow-hidden flex-shrink-0">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-dark)]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-3 py-1 bg-[var(--color-accent-green)] text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-md">
                        {related.categoryLabel}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-[var(--color-accent-gold)] flex items-center justify-center shadow-md">
                      <span className="text-[var(--color-primary-dark)] text-[10px] font-black leading-none">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
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

                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center gap-1.5 text-white/50 text-[10px] font-[var(--font-body)]">
                        <Calendar className="w-3 h-3" />
                        {related.date}
                      </div>
                      <div className="flex items-center gap-1.5 text-white/50 text-[10px] font-[var(--font-body)]">
                        <Clock className="w-3 h-3" />
                        {related.readTime}
                      </div>
                    </div>

                    <h3 className="font-[var(--font-heading)] font-semibold text-white text-base mb-2 leading-snug group-hover:text-[var(--color-accent-gold)] transition-colors duration-300">
                      {related.title}
                    </h3>

                    <p className="text-white/65 text-xs font-[var(--font-body)] leading-relaxed line-clamp-2 mb-4 flex-1">
                      {related.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-white/15">
                      <span className="text-[var(--color-accent-gold)] text-xs font-bold uppercase tracking-wide font-[var(--font-body)]">
                        Read More
                      </span>
                      <div className="w-7 h-7 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-[var(--color-accent-gold)] transition-all duration-300">
                        <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* View all */}
            <div className="text-center mt-12">
              <Link
                href="/blog"
                className="btn-outline inline-flex items-center gap-2 group"
              >
                View All Articles
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}