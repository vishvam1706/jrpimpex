import Image from "next/image";
import Link from "next/link";
import companyData from "@/data/company.json";
import servicesData from "@/data/services.json";

export const metadata = {
  title: "About Us - JRP Impex",
  description:
    "Learn more about JRP Impex and our commitment to quality agricultural products.",
};

export default function AboutPage() {
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
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              About JRP Impex
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
              <span className="text-accent-gold-lt font-semibold">
                About Us
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

      {/* Premium Company Overview */}
      <section className="py-20 lg:py-32 bg-white relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="section-label">About JRP IMPEX</span>
              <h2 className="section-title text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
                Leading with Integrity in Global Agro Markets
              </h2>
              <div className="space-y-6">
                <p className="text-text-muted text-lg leading-relaxed">
                  {companyData.description}
                </p>
                <div className="bg-primary-muted border-l-4 border-accent-gold rounded-r-lg p-6">
                  <p className="text-text-base text-lg leading-relaxed font-medium">
                    With over{" "}
                    <span className="text-gradient-gold font-bold">
                      {companyData.stats.experience} years
                    </span>{" "}
                    of experience, we have successfully served{" "}
                    <span className="text-gradient-gold font-bold">
                      {companyData.stats.clients} clients
                    </span>{" "}
                    across{" "}
                    <span className="text-gradient-gold font-bold">
                      {companyData.stats.countries} countries
                    </span>
                    , offering{" "}
                    <span className="text-gradient-gold font-bold">
                      {companyData.stats.products} premium products
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent-gold/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>

                {/* Image container */}
                <div className="relative rounded-2xl overflow-hidden shadow-lift">
                  <Image
                    src="/images/about-company.jpg"
                    alt="JRP Impex Company"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/20 to-transparent"></div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-lift p-6 max-w-[200px]">
                  <div className="text-center">
                    <div className="stat-number--gold text-4xl mb-1">
                      {companyData.stats.experience}
                    </div>
                    <div className="text-text-muted text-sm font-semibold">
                      Years of Excellence
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Mission & Vision */}
      <section className="py-20 lg:py-32 section-cream relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern
              id="mission-pattern"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M50 0 L100 50 L50 100 L0 50 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#mission-pattern)" />
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <span className="section-label">Our Foundation</span>
            <h2 className="section-title section-title--center text-3xl md:text-4xl font-bold mt-4">
              Driven by Purpose
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission */}
            <div className="card-classic group cursor-pointer">
              <div className="p-8 lg:p-10">
                <div className="w-20 h-20 bg-gradient-to-br from-accent-green to-primary rounded-2xl flex items-center justify-center mb-6 shadow-card group-hover:shadow-lift transition-all duration-300 group-hover:scale-110">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-primary-dark mb-4 font-heading">
                  Our Mission
                </h3>
                <div className="gold-rule"></div>
                <p className="text-text-muted text-lg leading-relaxed">
                  {companyData.about.mission}
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="card-classic group cursor-pointer">
              <div className="p-8 lg:p-10">
                <div className="w-20 h-20 bg-gradient-to-br from-accent-gold to-accent-gold-lt rounded-2xl flex items-center justify-center mb-6 shadow-gold group-hover:shadow-lift transition-all duration-300 group-hover:scale-110">
                  <svg
                    className="w-10 h-10 text-primary-dark"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-primary-dark mb-4 font-heading">
                  Our Vision
                </h3>
                <div className="gold-rule"></div>
                <p className="text-text-muted text-lg leading-relaxed">
                  {companyData.about.vision}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Core Values */}
      <section className="py-20 lg:py-32 bg-white relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-label">What We Stand For</span>
            <h2 className="section-title section-title--center text-3xl md:text-4xl font-bold mt-4">
              Our Core Values
            </h2>
            <p className="text-text-muted text-lg mt-6 max-w-2xl mx-auto">
              The principles that guide every decision we make and every
              relationship we build
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {companyData.about.values.map((value, index) => (
              <div key={index} className="card group cursor-pointer">
                <div className="p-6 text-center bg-gradient-to-b from-white to-primary-muted/30 group-hover:from-primary group-hover:to-primary-light transition-all duration-500">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light group-hover:from-white group-hover:to-accent-gold-lt rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-card group-hover:shadow-gold transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <svg
                      className="w-8 h-8 text-white group-hover:text-primary transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-primary-dark group-hover:text-white transition-colors duration-300">
                    {value}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Stats Section */}
      <section className="py-20 lg:py-32 gradient-hero text-white relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-[0.06]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="stats-pattern"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="50" cy="50" r="2" fill="white" />
                <circle
                  cx="50"
                  cy="50"
                  r="30"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#stats-pattern)" />
          </svg>
        </div>

        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold-lt to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold-lt to-transparent"></div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-accent-gold-lt text-sm font-semibold tracking-wide uppercase mb-4">
              Our Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">
              Numbers That Speak for Themselves
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="text-center group">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:border-accent-gold-lt/30 hover:shadow-gold">
                <div className="text-5xl lg:text-6xl font-bold text-gradient-gold mb-3 font-heading">
                  {companyData.stats.experience}+
                </div>
                <div className="text-lg text-white/90 font-medium">
                  Years Experience
                </div>
                <div className="w-16 h-1 bg-accent-gold-lt/30 rounded-full mx-auto mt-4"></div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:border-accent-gold-lt/30 hover:shadow-gold">
                <div className="text-5xl lg:text-6xl font-bold text-gradient-gold mb-3 font-heading">
                  {companyData.stats.clients}+
                </div>
                <div className="text-lg text-white/90 font-medium">
                  Happy Clients
                </div>
                <div className="w-16 h-1 bg-accent-gold-lt/30 rounded-full mx-auto mt-4"></div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:border-accent-gold-lt/30 hover:shadow-gold">
                <div className="text-5xl lg:text-6xl font-bold text-gradient-gold mb-3 font-heading">
                  {companyData.stats.countries}+
                </div>
                <div className="text-lg text-white/90 font-medium">
                  Countries Served
                </div>
                <div className="w-16 h-1 bg-accent-gold-lt/30 rounded-full mx-auto mt-4"></div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:border-accent-gold-lt/30 hover:shadow-gold">
                <div className="text-5xl lg:text-6xl font-bold text-gradient-gold mb-3 font-heading">
                  {companyData.stats.products}+
                </div>
                <div className="text-lg text-white/90 font-medium">
                  Premium Products
                </div>
                <div className="w-16 h-1 bg-accent-gold-lt/30 rounded-full mx-auto mt-4"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Why Choose Us */}
      <section className="py-20 lg:py-32 section-cream">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-label">WHY CHOOSE US</span>
            <h2 className="section-title section-title--center text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
              What Makes Us Different
            </h2>
            <p className="text-text-muted text-lg mt-6 max-w-3xl mx-auto">
              Discover the advantages that set us apart in the global
              agricultural marketplace
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {servicesData.services.map((service, index) => (
              <div key={service.id} className="card-elevated group">
                <div className="p-8 lg:p-10">
                  {/* Icon with gradient background */}
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-accent-gold/20 rounded-2xl blur-xl group-hover:bg-accent-gold/30 transition-all duration-300"></div>
                    <div className="relative w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center shadow-card group-hover:shadow-lift transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <svg
                        className="w-10 h-10 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                      </svg>
                    </div>
                    {/* Service number badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-gold rounded-full flex items-center justify-center text-primary-dark font-bold text-sm shadow-gold">
                      {index + 1}
                    </div>
                  </div>

                  <h3 className="text-xl lg:text-2xl font-bold text-primary-dark mb-4 font-heading group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <div className="gold-rule"></div>
                  <p className="text-text-muted mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-text-base group/item"
                      >
                        <div className="mt-0.5 flex-shrink-0">
                          <div className="w-6 h-6 bg-primary-muted rounded-full flex items-center justify-center group-hover/item:bg-primary transition-colors duration-300">
                            <svg
                              className="w-4 h-4 text-primary group-hover/item:text-white transition-colors duration-300"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="py-20 lg:py-24 gradient-hero relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent-gold rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-primary-light rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-accent-gold-lt text-sm font-semibold tracking-wide uppercase mb-6">
              Get Started Today
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-heading">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl mb-10 text-white/90 leading-relaxed">
              Join thousands of satisfied clients worldwide and experience the
              JRP Impex difference
            </p>
            <Link
              href="/contact"
              className="btn-gold inline-flex items-center gap-3 group"
            >
              <span>Get In Touch</span>
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

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-white/10 rounded-full"></div>
      </section>
    </>
  );
}
