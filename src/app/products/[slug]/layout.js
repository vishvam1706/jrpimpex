import productsData from "@/data/products.json";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = productsData.categories.find((c) => c.slug === slug);

  if (!product) return {};

  const title = `${product.title} | Premium Quality Exporter | Akshar Exports`;
  const description = `Quality-certified ${product.title} from Akshar Exports India. Premium standard packaging and reliable global export. Request a bulk quote for ${product.title} today!`;

  return {
    title,
    description,
    alternates: {
      canonical: `/products/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://akshar-exports.com/products/${slug}`,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [product.image],
    },
  };
}

export default async function ProductDetailLayout({ children, params }) {
  const { slug } = await params;
  const product = productsData.categories.find((c) => c.slug === slug);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product?.title,
    image: `https://akshar-exports.com${product?.image}`,
    description: product?.description,
    brand: {
      "@type": "Brand",
      name: "Akshar Exports",
    },
    offers: {
      "@type": "Offer",
      url: `https://akshar-exports.com/products/${slug}`,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-12-31",
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
      {
        "@type": "ListItem",
        position: 3,
        name: product?.title,
        item: `https://akshar-exports.com/products/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
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
