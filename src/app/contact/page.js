"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import companyData from "@/data/company.json";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
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
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Contact Us
            </h1>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Have a question or ready to start a partnership? We&apos;re here
              to help you succeed.
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
                Contact Us
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

      {/* Premium Contact Section */}
      <section className="py-20 lg:py-32 bg-white relative">
        <div className="container-custom">
          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Phone Card */}
            <div className="card-elevated group text-center">
              <div className="p-8 lg:p-10">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl group-hover:bg-primary/20 transition-all duration-300"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto shadow-card group-hover:shadow-lift transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Phone className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-primary-dark mb-3 font-heading">
                  Phone
                </h3>
                <div className="gold-rule gold-rule--center mb-4"></div>
                <a
                  href={`tel:${companyData.contact.phone}`}
                  className="text-text-muted hover:text-accent-gold transition-colors duration-300 text-lg font-medium inline-flex items-center gap-2 group-hover:gap-3"
                >
                  <span>{companyData.contact.phone}</span>
                  <svg
                    className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
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
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="card-elevated group text-center">
              <div className="p-8 lg:p-10">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-accent-gold/20 rounded-2xl blur-xl group-hover:bg-accent-gold/30 transition-all duration-300"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-accent-gold to-accent-gold-lt rounded-2xl flex items-center justify-center mx-auto shadow-gold group-hover:shadow-lift transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Mail className="w-10 h-10 text-primary-dark" />
                  </div>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-primary-dark mb-3 font-heading">
                  Email
                </h3>
                <div className="gold-rule gold-rule--center mb-4"></div>
                <a
                  href={`mailto:${companyData.contact.email}`}
                  className="text-text-muted hover:text-accent-gold transition-colors duration-300 text-lg font-medium inline-flex items-center gap-2 group-hover:gap-3"
                >
                  <span>{companyData.contact.email}</span>
                  <svg
                    className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
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
                </a>
              </div>
            </div>

            {/* Address Card */}
            <div className="card-elevated group text-center">
              <div className="p-8 lg:p-10">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-primary-light/20 rounded-2xl blur-xl group-hover:bg-primary-light/30 transition-all duration-300"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-primary-light to-primary rounded-2xl flex items-center justify-center mx-auto shadow-card group-hover:shadow-lift transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-primary-dark mb-3 font-heading">
                  Address
                </h3>
                <div className="gold-rule gold-rule--center mb-4"></div>
                <p className="text-text-muted text-lg leading-relaxed">
                  {companyData.contact.address}
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Premium Contact Form */}
            <div className="card-classic">
              <div className="p-8 lg:p-10">
                <div className="mb-8">
                  <span className="section-label">Let&apos;s Talk</span>
                  <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-4 font-heading">
                    Send us a Message
                  </h2>
                  <div className="gold-rule"></div>
                  <p className="text-text-muted text-lg">
                    Fill out the form below and we&apos;ll get back to you
                    within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-primary-dark font-semibold mb-2 text-sm uppercase tracking-wider"
                    >
                      Full Name <span className="text-accent-gold">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-primary-dark font-semibold mb-2 text-sm uppercase tracking-wider"
                      >
                        Email Address{" "}
                        <span className="text-accent-gold">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-primary-dark font-semibold mb-2 text-sm uppercase tracking-wider"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="+91 1234567890"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-primary-dark font-semibold mb-2 text-sm uppercase tracking-wider"
                    >
                      Subject <span className="text-accent-gold">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-primary-dark font-semibold mb-2 text-sm uppercase tracking-wider"
                    >
                      Message <span className="text-accent-gold">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="input-field resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full justify-center group"
                  >
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    <span>Send Message</span>
                  </button>
                </form>

                {/* Trust Badge */}
                <div className="mt-8 pt-8 border-t border-border-light">
                  <div className="flex items-center gap-3 text-text-muted">
                    <svg
                      className="w-5 h-5 text-accent-gold flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-sm">
                      Your information is secure and will never be shared with
                      third parties.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map & Business Hours */}
            <div className="space-y-8">
              {/* Premium Map */}
              <div className="card-elevated overflow-hidden">
                <div className="relative w-full h-96 lg:h-[450px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.6789!2d70.7849!3d22.3039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE4JzE0LjAiTiA3MMKwNDcnMDUuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  {/* Location badge overlay */}
                  <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-lift px-4 py-3 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-text-muted font-semibold uppercase tracking-wide">
                        We&apos;re Located
                      </div>
                      <div className="text-sm font-bold text-primary-dark">
                        Surat, India
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Premium Business Hours */}
              <div className="card-classic">
                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl"></div>
                      <div className="relative w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center shadow-card">
                        <Clock className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div>
                      <span className="section-label text-xs">Schedule</span>
                      <h3 className="text-2xl lg:text-3xl font-bold text-primary-dark font-heading">
                        Business Hours
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between items-center py-4 border-b border-border-light group hover:border-accent-gold/30 transition-colors duration-300">
                      <span className="text-primary-dark font-semibold group-hover:text-primary transition-colors duration-300">
                        Monday - Friday
                      </span>
                      <span className="text-text-muted font-medium">
                        9:00 AM - 6:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-4 border-b border-border-light group hover:border-accent-gold/30 transition-colors duration-300">
                      <span className="text-primary-dark font-semibold group-hover:text-primary transition-colors duration-300">
                        Saturday
                      </span>
                      <span className="text-text-muted font-medium">
                        9:00 AM - 2:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-4 group">
                      <span className="text-primary-dark font-semibold">
                        Sunday
                      </span>
                      <span className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1 rounded-full text-sm font-bold">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Closed
                      </span>
                    </div>
                  </div>

                  {/* Additional info */}
                  <div className="mt-8 pt-8 border-t border-border-light">
                    <div className="bg-primary-muted rounded-xl p-4 flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div>
                        <p className="text-sm text-primary-dark font-medium">
                          Need urgent assistance? We&apos;re available via email
                          24/7 and respond within 2-4 hours.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-24 h-24 border-2 border-primary/10 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-accent-gold/10 rounded-full"></div>
      </section>
    </>
  );
}
