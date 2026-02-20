import { Suspense } from "react";
import ProductsClient from "@/components/Product/ProductClient";

export const metadata = {
  title: "Our Products | Premium Agro Commodities | Akshar Exports",
  description:
    "Browse Akshar Exports's range of export-quality peanuts, sesame seeds, and spices. Certified for international trade standards. Serving global buyers since 2014.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Our Products | Premium Agro Commodities | Akshar Exports",
    description:
      "Explore our premium range of peanuts, sesame seeds, spices, and grains. Quality-certified Indian agricultural products for global export and distribution.",
    url: "https://akshar-exports.com/products",
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
      name: "Products",
      item: "https://akshar-exports.com/products",
    },
  ],
};

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
        <ProductsClient />
      </Suspense>
    </>
  );
}
