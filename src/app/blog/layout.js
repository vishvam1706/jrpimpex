export const metadata = {
  title: "Latest Blogs | Agro Export Insights | Akshar Exports India",
  description:
    "Read the latest insights on the agricultural export industry, market trends for peanuts, sesame seeds, and spices from the experts at Akshar Exports.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Latest Blogs | Agro Export Insights | Akshar Exports India",
    description:
      "Educational articles and market updates on the global agricultural trade and Indian agro exports from Akshar Exports.",
    url: "https://akshar-exports.com/blog",
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
      name: "Blogs",
      item: "https://akshar-exports.com/blog",
    },
  ],
};

export default function BlogLayout({ children }) {
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
