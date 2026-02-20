export const metadata = {
  title: "Privacy Policy | Akshar Exports | Data Protection & Cookies",
  description:
    "Read Akshar Exports's privacy policy to understand how we collect, use, and protect your personal data in compliance with global export trade guidelines.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="py-20 lg:py-32 bg-[var(--color-surface-warm)]">
      <div className="container-custom max-w-4xl bg-white p-10 lg:p-16 rounded-sm shadow-sm border border-[var(--color-border)]">
        <h1 className="font-[var(--font-heading)] font-bold text-4xl text-[var(--color-primary-dark)] mb-8">
          Privacy Policy
        </h1>
        <div className="prose prose-slate max-w-none text-[var(--color-text-base)] space-y-6">
          <p>Last Updated: February 21, 2026</p>
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p>
              Welcome to Akshar Exports. We are committed to protecting your personal data and your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website https://akshar-exports.com.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us through our contact forms, including your name, email address, phone number, and any details regarding your bulk agro product inquiries.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <p>
              We use the collected information to respond to your inquiries, provide export quotes, process orders, and improve our services. We do not sell or share your personal data with third parties for marketing purposes.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">4. Cookies</h2>
            <p>
              Our website uses cookies to enhance your browsing experience and analyze site traffic. You can choose to disable cookies through your browser settings.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at info@akshar-exports.com.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
