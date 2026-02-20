import Image from "next/image";
import Link from "next/link";
import companyData from "@/data/company.json";
import servicesData from "@/data/services.json";
import Testimonial from "@/components/home/Testimonial";

export const metadata = {
  title: "About Us | Akshar Exports | Trusted Agro Exporter Since 2014",
  description:
    "Learn about Akshar Exports — a trusted Indian exporter of premium agricultural products. 10+ years experience serving 50+ countries with certified agro commodities.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Akshar Exports | Trusted Agro Exporter Since 2014",
    description:
      "10+ years of experience exporting premium agricultural products from India to 50+ countries. Committed to quality and integrity in global agro trade.",
    url: "https://akshar-exports.com/about",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://akshar-exports.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About Us",
      item: "https://akshar-exports.com/about",
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {/* Premium Breadcrumb Hero */}
      <section className="relative gradient-hero py-24 lg:py-32 overflow-hidden">
        {/* ── Full background image ─────────────────────────── */}
        <div className="absolute inset-0">
          <Image
            src="/about_us.jpg"
            alt="About Akshar Exports"
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

        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-primary-dark)]/20" />

        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-accent-gold-lt text-sm font-semibold tracking-wide uppercase mb-6">
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              About Akshar Exports
            </h1>
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
              <span className="text-accent-gold-lt font-semibold">About Us</span>
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

      {/* Premium Company Overview */}
      <section className="py-20 lg:py-32 bg-white relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-1 lg:order-1">
              <span className="section-label text-[var(--color-accent-green)]">About Akshar Exports</span>
              <h2 className="section-title text-3xl md:text-4xl lg:text-5xl font-medium mt-4 mb-6">
                Leading with Integrity in Global Agro Markets
              </h2>
              <div className="space-y-6">
                <p className="text-text-muted text-lg leading-relaxed">
                  {companyData.description}
                </p>
                <div className="bg-primary-muted border-l-4 border-accent-gold rounded-r-lg p-6">
                  <p className="text-text-base text-lg leading-relaxed font-medium">
                    With over{" "}
                    <span className="text-[var(--color-accent-green)] font-bold">
                      {companyData.stats.experience} years
                    </span>{" "}
                    of experience, we have successfully served{" "}
                    <span className="text-[var(--color-accent-green)] font-bold">
                      {companyData.stats.clients} clients
                    </span>{" "}
                    across{" "}
                    <span className="text-[var(--color-accent-green)] font-bold">
                      {companyData.stats.countries} countries
                    </span>
                    , offering{" "}
                    <span className="text-[var(--color-accent-green)] font-bold">
                      {companyData.stats.products} premium products
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
            <div className="relative order-2 lg:order-2">
              <div className="relative order-2 lg:order-2 flex justify-center lg:justify-start">

                {/* Floating Image Cluster */}
                <div className="relative 
                    w-[260px] h-[260px]
                    sm:w-[300px] sm:h-[300px]
                    md:w-[360px] md:h-[360px]
                    lg:w-[420px] lg:h-[420px]
                    xl:w-[480px] xl:h-[480px]
                ">
                  {/* Main Circle */}
                  <div className="absolute inset-0 rounded-full  p-3">

                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image
                        src="/choose-man1.png"
                        alt="Global Agro"
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Top small */}
                    <div className="
        absolute
        -top-4 left-[18%]
        w-16 h-16
        sm:w-18 sm:h-18
        md:w-20 md:h-20
        lg:w-24 lg:h-24
        rounded-full
        bg-white p-1
      ">
                      <Image src="/f1.png" alt="Handpicked quality peanuts" fill className="rounded-full object-cover" />
                    </div>

                    {/* Middle small */}
                    <div className="
        absolute
        top-1/2 -left-5
        w-18 h-18
        sm:w-20 sm:h-20
        md:w-24 md:h-24
        lg:w-28 lg:h-28
        -translate-y-1/2
        rounded-full
        bg-white p-1
      ">
                      <Image src="/f2.png" alt="Premium sesame seeds" fill className="rounded-full object-cover" />
                    </div>

                    {/* Bottom small */}
                    <div className="
        absolute
        bottom-4 left-[12%]
        w-16 h-16
        sm:w-18 sm:h-18
        md:w-20 md:h-20
        lg:w-24 lg:h-24
        rounded-full
        bg-white p-1
      ">
                      <Image src="/f3.png" alt="Indian spices export" fill className="rounded-full object-cover" />
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonial />

      {/* Premium CTA Section */}
      <section className="py-20 lg:py-24 bg-[var(--color-primary)] relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent-gold rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-primary-light rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        {/* ── who-element.png — left side, vertically centered ── */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[260px] md:w-[320px] lg:w-[380px] pointer-events-none select-none z-0">
          <Image
            src="/who-element.png"
            alt="Who element decoration"
            width={380}
            height={500}
            className="object-contain object-left w-full h-auto opacity-90"
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-accent-gold-lt text-sm font-semibold tracking-wide uppercase mb-6">
              Get Started Today
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-accent-green)] mb-6 font-heading">
              What We Do?
            </h2>
            <p className="text-xl mb-10 text-white/90 leading-relaxed">
              Defining Success Through Passion and Expertise
            </p>
            <Link
              href="/products"
              className="btn-gold inline-flex items-center gap-3 group"
            >
              <span>View Products</span>
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

        {/* Decorative circles */}
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-white/10 rounded-full"></div>
      </section>
    </>
  );
}
