"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import testimonialsData from "@/data/testimonials.json";
import companyData from "@/data/company.json";

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () =>
    setCurrentIndex(
      (prev) => (prev + 1) % testimonialsData.testimonials.length,
    );

  const prev = () =>
    setCurrentIndex(
      (prev) =>
        (prev - 1 + testimonialsData.testimonials.length) %
        testimonialsData.testimonials.length,
    );

  const current = testimonialsData.testimonials[currentIndex];

  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* ── Subtle background tint ───────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-surface-warm)] to-white pointer-events-none" />

      {/* ── Decorative large quote mark ──────────────────── */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 font-[var(--font-heading)] text-[20rem] leading-none text-[var(--color-primary-muted)] opacity-40 pointer-events-none select-none">
        "
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">
          {/* ── Left — Text + Card ───────────────────────── */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-[var(--color-accent-gold)]" />
              <span className="text-[var(--color-accent-gold)] text-xs font-bold uppercase tracking-[0.2em] font-[var(--font-body)]">
                Testimonials
              </span>
            </div>

            <h2 className="font-[var(--font-heading)] font-bold text-[var(--color-primary-dark)] text-3xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight mb-3">
              Growing Strong,
              <br />
              <span className="text-[var(--color-primary)]">Feeding</span>{" "}
              Futures
            </h2>

            {/* Gold rule */}
            <div className="w-12 h-[3px] bg-gradient-to-r from-[var(--color-accent-gold)] to-[var(--color-accent-gold-lt)] rounded-full mb-10" />

            {/* ── Testimonial card ─────────────────────── */}
            <div className="relative bg-white border border-[var(--color-border)] rounded-sm shadow-[var(--shadow-lift)] p-8">
              {/* Gold top border */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--color-accent-gold)] to-[var(--color-accent-gold-lt)] rounded-t-sm" />

              {/* Large quote mark */}
              <div className="absolute top-4 right-6 font-[var(--font-heading)] text-7xl leading-none text-[var(--color-primary-muted)] select-none pointer-events-none">
                "
              </div>

              {/* Author */}
              <div className="flex items-start gap-4 mb-6 relative z-10">
                <div className="relative shrink-0">
                  <Image
                    src={current.image}
                    alt={current.name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover border-2 border-[var(--color-accent-gold)]/40"
                  />
                  {/* Online indicator */}
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white" />
                </div>
                <div>
                  <h4 className="font-[var(--font-heading)] font-bold text-[var(--color-primary-dark)] text-base">
                    {current.name}
                  </h4>
                  <p className="text-[var(--color-text-muted)] text-xs font-[var(--font-body)] mt-0.5">
                    {current.role}
                  </p>
                  {/* Stars */}
                  <div className="flex gap-0.5 mt-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < current.rating
                            ? "fill-[var(--color-accent-gold)] text-[var(--color-accent-gold)]"
                            : "text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Quote text */}
              <p className="text-[var(--color-text-base)] font-[var(--font-body)] leading-relaxed text-sm md:text-base mb-4 relative z-10">
                {current.content}
              </p>

              {/* Containers info */}
              <p className="text-xs text-[var(--color-text-muted)] font-[var(--font-body)] border-t border-[var(--color-border)] pt-3">
                {current.containers}
              </p>

              {/* ── Navigation ──────────────────────────── */}
              <div className="flex items-center justify-between mt-6">
                {/* Dots */}
                <div className="flex items-center gap-2">
                  {testimonialsData.testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "w-7 bg-[var(--color-accent-gold)]"
                          : "w-2 bg-[var(--color-border)]"
                      }`}
                    />
                  ))}
                </div>

                {/* Arrows */}
                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    className="flex items-center justify-center w-9 h-9 rounded-sm border border-[var(--color-border)] text-[var(--color-text-muted)] hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] hover:text-white transition-all duration-200"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={next}
                    className="flex items-center justify-center w-9 h-9 rounded-sm bg-[var(--color-primary)] border border-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] hover:border-[var(--color-primary-dark)] transition-all duration-200"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right — Image ────────────────────────────── */}
          <div className="relative flex justify-center">
            {/* Decorative ring */}
            <div className="absolute w-[105%] h-[105%] rounded-full border-2 border-dashed border-[var(--color-primary-muted)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute w-[115%] h-[115%] rounded-full border border-[var(--color-border)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            {/* Circle image */}
            <div className="relative rounded-full overflow-hidden aspect-square w-full max-w-md shadow-[0_20px_60px_rgba(26,77,51,.15)] border-4 border-white">
              <Image
                src="/images/farmer-field.jpg"
                alt="Farming"
                fill
                className="object-cover"
              />
              {/* Inner vignette */}
              <div className="absolute inset-0 rounded-full shadow-[inset_0_0_40px_rgba(0,0,0,.15)]" />
            </div>

            {/* Stats badge */}
            <div className="absolute bottom-6 right-0 bg-[var(--color-accent-gold)] text-[var(--color-primary-dark)] rounded-sm p-5 shadow-[var(--shadow-gold)] border-2 border-white">
              <div className="font-[var(--font-heading)] font-extrabold text-4xl leading-none">
                {companyData.stats.clients}
              </div>
              <div className="font-[var(--font-body)] text-xs font-semibold uppercase tracking-wider mt-1 opacity-80">
                Happy Clients
              </div>
            </div>

            {/* Secondary badge — top left */}
            <div className="absolute top-6 -left-2 bg-[var(--color-primary)] text-white rounded-sm px-4 py-3 shadow-lg">
              <div className="font-[var(--font-heading)] font-extrabold text-xl leading-none">
                50+
              </div>
              <div className="font-[var(--font-body)] text-[10px] font-semibold uppercase tracking-wider mt-0.5 text-white/70">
                Countries
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
