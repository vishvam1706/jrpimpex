"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Menu, X, ChevronDown, Phone, Mail, MapPin } from "lucide-react";
import companyData from "@/data/company.json";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Blogs", href: "/blog" },
];

const PRODUCT_LINKS = [
  { label: "All Products", href: "/products", featured: true },
  { label: "Nuts", href: "/products?category=nuts" },
  { label: "Spices", href: "/products?category=spices" },
  { label: "Herbs", href: "/products?category=herbs" },
  { label: "Grains", href: "/products?category=grains" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* ── Top Info Bar ───────────────────────────────────────── */}
      <div className="bg-[var(--color-accent-gold)] lg:block hidden text-[var(--color-primary-dark)]">
        <div className="container-custom py-2.5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* Address */}
            <span className="flex items-center gap-2 p-2 text-sm">
              <MapPin className="w-[15px] h-[15px] shrink-0" />
              {companyData.contact.address?.slice(0, 95)}...
            </span>
            {/* Phone + Email */}
            <div className="flex items-center gap-5 p-2 text-sm">
              <a
                href={`tel:${companyData.contact.phone}`}
                className="flex items-center gap-1.5 font-semibold hover:text-[var(--color-primary)] transition-colors"
              >
                <Phone className="w-[15px] h-[15px] shrink-0" />
                {companyData.contact.phone}
              </a>
              <span className="text-[var(--color-primary-dark)]/30 select-none">|</span>
              <a
                href={`mailto:${companyData.contact.email}`}
                className="flex items-center gap-1.5 font-semibold hover:text-[var(--color-primary)] transition-colors"
              >
                <Mail className="w-[15px] h-[15px] shrink-0" />
                {companyData.contact.email}
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* ── Main Header ───────────────────────────────────────── */}
      <header
        className={`sticky top-0 z-50 bg-white border-b border-[var(--color-border)] transition-shadow duration-300 ${scrolled ? "shadow-md" : ""
          }`}
      >
        <div className="container-custom">
          <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "py-3" : "py-4"}`}>

            {/* Logo */}
            <Link href="/" aria-label="Akshar Exports — Home">
              <Image
                src="/logo.png"
                alt="Akshar Exports"
                width={180}
                height={72}
                className={`w-auto transition-all duration-300 ${scrolled ? "h-22" : "h-23"}`}
                priority
              />
            </Link>

            {/* ── Desktop Nav ──────────────────────────────────── */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">

              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="px-4 py-2 text-[15px] font-medium text-[var(--color-text-base)] hover:text-[var(--color-primary)] transition-colors duration-200 relative group"
                >
                  {label}
                  {/* underline on hover */}
                  <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-[var(--color-primary)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-200" />
                </Link>
              ))}

              {/* Products dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 px-4 py-2 text-[15px] font-medium text-[var(--color-text-base)] hover:text-[var(--color-primary)] transition-colors duration-200 relative">
                  Products
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                  <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-[var(--color-primary)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-200" />
                </button>

                {/* Dropdown */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-lg border border-[var(--color-border)] border-t-[3px] border-t-[var(--color-primary)] shadow-xl opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
                  {PRODUCT_LINKS.map(({ label, href, featured }) => (
                    <Link
                      key={href}
                      href={href}
                      className={`flex items-center gap-2 px-4 py-2.5 text-sm transition-all duration-150 hover:bg-[var(--color-primary-muted)] hover:text-[var(--color-primary)] hover:pl-5 ${featured
                          ? "font-semibold text-[var(--color-primary)] border-b border-[var(--color-border)] pb-3 mb-1"
                          : "text-[var(--color-text-muted)]"
                        }`}
                    >
                      {featured && <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-gold)] shrink-0" />}
                      {label}
                    </Link>
                  ))}
                </div>
              </div>


              {/* Get A Quote — pill green */}
              <Link
                href="/contact"
                className="ml-2 inline-flex items-center gap-2 px-6 py-2.5 bg-[var(--color-primary-dark)] text-white text-[15px] rounded-full hover:bg-[var(--color-accent-gold)] transition-colors duration-200 group hover:text-[var(--color-primary-dark)]"
              >
                Get A Quote
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

            </nav>

            {/* ── Hamburger (mobile) ───────────────────────────── */}
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded border border-[var(--color-border)] text-[var(--color-primary)] hover:bg-[var(--color-primary-muted)] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>
      </header>

      {/* ── Mobile Overlay ────────────────────────────────────── */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* ── Mobile Drawer ─────────────────────────────────────── */}
      <div
        className={`lg:hidden fixed top-0 right-0 bottom-0 w-[min(22rem,90vw)] bg-white z-50 flex flex-col border-l border-[var(--color-border)] transition-transform duration-300 ease-in-out overflow-y-auto ${mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 bg-[var(--color-primary)] shrink-0">
          <Image src="/logo.png" alt="Akshar Exports" width={120} height={48} className="h-9 w-auto brightness-0 invert" />
          <button
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center w-8 h-8 rounded-full border border-white/20 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col py-2 border-b border-[var(--color-border)]">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="px-6 py-3.5 text-[15px] font-medium text-[var(--color-text-base)] border-l-[3px] border-transparent hover:border-[var(--color-primary)] hover:bg-[var(--color-primary-muted)] hover:text-[var(--color-primary)] transition-all duration-150"
            >
              {label}
            </Link>
          ))}

          {/* Products accordion */}
          <div>
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="w-full flex items-center justify-between px-6 py-3.5 text-[15px] font-medium text-[var(--color-text-base)] border-l-[3px] border-transparent hover:border-[var(--color-primary)] hover:bg-[var(--color-primary-muted)] hover:text-[var(--color-primary)] transition-all duration-150"
            >
              Products
              <ChevronDown className={`w-4 h-4 text-[var(--color-text-muted)] transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${productsOpen ? "max-h-64" : "max-h-0"}`}>
              <div className="mx-6 mb-2 border-l-2 border-[var(--color-primary)] bg-[var(--color-primary-muted)]/50">
                {PRODUCT_LINKS.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-2.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:pl-6 transition-all duration-150"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Drawer footer */}
        <div className="p-5 mt-auto flex flex-col gap-3 border-t border-[var(--color-border)]">
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3 bg-[var(--color-primary-dark)] text-white text-sm font-semibold rounded-full hover:bg-[var(--color-primary)] transition-colors"
          >
            Get A Quote
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <div className="flex flex-col gap-2 pt-1">
            <a href={`tel:${companyData.contact.phone}`} className="flex items-center gap-2 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0" />
              {companyData.contact.phone}
            </a>
            <a href={`mailto:${companyData.contact.email}`} className="flex items-center gap-2 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0" />
              {companyData.contact.email}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}