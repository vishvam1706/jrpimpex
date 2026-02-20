import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import companyData from "@/data/company.json";
import productsData from "@/data/products.json";

const TOP_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

const SOCIAL = [
  { icon: Facebook, href: companyData.social.facebook, label: "Facebook" },
  { icon: Instagram, href: companyData.social.instagram, label: "Instagram" },
  { icon: Twitter, href: companyData.social.twitter, label: "Twitter" },
  { icon: Linkedin, href: companyData.social.linkedin, label: "LinkedIn" },
  { icon: Youtube, href: companyData.social.youtube, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-surface-dark)] text-white relative overflow-hidden">
      {/* ── Background dot pattern ───────────────────────── */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* ── Radial glow top-right ────────────────────────── */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[var(--color-primary)]/20 blur-3xl pointer-events-none" />

      {/* ── Gold top rule ────────────────────────────────── */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[var(--color-accent-gold)] to-transparent" />

      <div className="container-custom relative z-10">
        {/* ── Main grid ────────────────────────────────────── */}
        <div className="py-16 lg:py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* ── Col 1 — Brand ──────────────────────────────── */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/logo.png"
                alt="Akshar Exports"
                width={150}
                height={60}
                className="h-11 w-auto brightness-0 invert"
              />
            </Link>

            <p className="text-white/50 text-sm font-[var(--font-body)] leading-relaxed mb-6">
              {companyData.description}
            </p>

            {/* Social icons */}
            {/* <div className="flex gap-2">
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-sm bg-white/8 border border-white/10 flex items-center justify-center text-white/50 hover:bg-[var(--color-accent-gold)] hover:border-[var(--color-accent-gold)] hover:text-[var(--color-primary-dark)] transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div> */}
          </div>

          {/* ── Col 2 — Top Links ──────────────────────────── */}
          <div>
            {/* Column heading */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-5 h-[2px] bg-[var(--color-accent-gold)]" />
              <h3 className="font-[var(--font-heading)] font-bold text-white text-base uppercase tracking-wider">
                Top Links
              </h3>
            </div>

            <ul className="space-y-3">
              {TOP_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="group flex items-center gap-2 text-white/50 text-sm font-[var(--font-body)] hover:text-[var(--color-accent-gold)] transition-colors duration-200"
                  >
                    <svg
                      className="w-3 h-3 text-[var(--color-accent-gold)]/50 group-hover:text-[var(--color-accent-gold)] transition-colors shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3 — Products ───────────────────────────── */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-5 h-[2px] bg-[var(--color-accent-gold)]" />
              <h3 className="font-[var(--font-heading)] font-bold text-white text-base uppercase tracking-wider">
                Products
              </h3>
            </div>

            <ul className="space-y-3">
              {productsData.categories.map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/products?category=${category.slug}`}
                    className="group flex items-center gap-2 text-white/50 text-sm font-[var(--font-body)] hover:text-[var(--color-accent-gold)] transition-colors duration-200"
                  >
                    <svg
                      className="w-3 h-3 text-[var(--color-accent-gold)]/50 group-hover:text-[var(--color-accent-gold)] transition-colors shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4 — Contact ────────────────────────────── */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-5 h-[2px] bg-[var(--color-accent-gold)]" />
              <h3 className="font-[var(--font-heading)] font-bold text-white text-base uppercase tracking-wider">
                Contact
              </h3>
            </div>

            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${companyData.contact.email}`}
                  className="flex items-start gap-3 text-white/50 text-sm font-[var(--font-body)] hover:text-[var(--color-accent-gold)] transition-colors duration-200 group"
                >
                  <Mail className="w-4 h-4 text-[var(--color-accent-gold)] shrink-0 mt-0.5" />
                  {companyData.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[var(--color-accent-gold)] shrink-0 mt-0.5" />
                <div>
                  <a
                    href={`tel:${companyData.contact.phone1}`}
                    className="flex items-start gap-3 text-white/50 text-sm font-[var(--font-body)] hover:text-[var(--color-accent-gold)] transition-colors duration-200 group"
                  >
                    {companyData.contact.phone1}
                  </a>
                  <a
                    href={`tel:${companyData.contact.phone2}`}
                    className="flex items-start gap-3 text-white/50 text-sm font-[var(--font-body)] hover:text-[var(--color-accent-gold)] transition-colors duration-200 group"
                  >
                    {companyData.contact.phone2}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-white/50 text-sm font-[var(--font-body)]">
                <MapPin className="w-4 h-4 text-[var(--color-accent-gold)] shrink-0 mt-0.5" />
                <a href="https://maps.app.goo.gl/pB1MChwxoCSURDfa8" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent-gold)] transition-colors duration-200">
                {companyData.contact.address}
                </a>
              </li>
            </ul>

            {/* Newsletter mini CTA */}
            <div className="mt-7 pt-6 border-t border-white/10">
              <p className="text-white/40 text-xs font-[var(--font-body)] uppercase tracking-wider mb-3">
                Quick Enquiry
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-accent-gold)] text-[var(--color-primary-dark)] text-xs font-black uppercase tracking-widest rounded-sm font-[var(--font-body)] hover:bg-[var(--color-accent-gold-lt)] transition-colors duration-200 group"
              >
                Get A Quote
                <svg
                  className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200"
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
        </div>

        {/* ── Bottom bar ───────────────────────────────────── */}
        <div className="border-t border-white/8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-[var(--font-body)] tracking-wide">
            © Akshar Exports 2025. All Rights Reserved. Developed by VD
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-white/30 text-xs font-[var(--font-body)] hover:text-[var(--color-accent-gold)] transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <div className="w-px h-3 bg-white/15" />
            <Link
              href="/terms"
              className="text-white/30 text-xs font-[var(--font-body)] hover:text-[var(--color-accent-gold)] transition-colors duration-200"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
