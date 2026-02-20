export const metadata = {
  title: "Terms & Conditions | Akshar Exports | Export Trade Agreement",
  description:
    "Read the terms and conditions of Akshar Exports. Guidelines for global agricultural export trade, product quality standards, and shipping agreements.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="py-20 lg:py-32 bg-[var(--color-surface-warm)]">
      <div className="container-custom max-w-4xl bg-white p-10 lg:p-16 rounded-sm shadow-sm border border-[var(--color-border)]">
        <h1 className="font-[var(--font-heading)] font-bold text-4xl text-[var(--color-primary-dark)] mb-8">
          Terms & Conditions
        </h1>
        <div className="prose prose-slate max-w-none text-[var(--color-text-base)] space-y-6">
          <p>Last Updated: February 21, 2026</p>
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Akshar Exports website, you agree to be bound by these Terms & Conditions and all applicable laws and regulations in the context of international agro trade.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">2. Product Quality</h2>
            <p>
              All agricultural products exported by Akshar Exports are certified for quality and comply with international food safety standards. Specifications provided in quotes are guaranteed at the time of shipment.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">3. Quotations and Ordering</h2>
            <p>
              Price quotes are valid for the period specified. Orders are confirmed only after mutual agreement on shipping terms (FOB, CIF, etc.) and payment conditions.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">4. Shipping and Liability</h2>
            <p>
              While we ensure timely delivery to the port of origin, Akshar Exports is not liable for delays caused by shipping lines, customs inspections, or force majeure events once the goods have left our possession.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">5. Governing Law</h2>
            <p>
              These terms are governed by the laws of India and the jurisdiction of the courts in Junagadh, Gujarat.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
