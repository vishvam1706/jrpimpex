export const metadata = {
  title: "Contact Us | Get a Export Quote | Akshar Exports India",
  description:
    "Contact Akshar Exports for premium agro products. Get a bulk quote for peanuts, sesame seeds, and spices. Serving global importers with quality commodities.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Get a Export Quote | Akshar Exports India",
    description:
      "Get in touch with Akshar Exports for all your agricultural product requirements. Quality-certified Indian exporter serving 50+ countries.",
    url: "https://akshar-exports.com/contact",
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
      name: "Contact Us",
      item: "https://akshar-exports.com/contact",
    },
  ],
};

export default function ContactLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {children}
    </>
  );
}
