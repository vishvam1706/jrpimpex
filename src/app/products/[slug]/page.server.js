import productsData from "@/data/products.json";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = productsData.products.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    };
  }

  const description =
    product.sections?.Description?.[0] ||
    product.description ||
    `High-quality ${product.name} from India. Export-grade, quality-certified by Akshar Exports.`;

  return {
    title: `${product.name} — Export Quality | Akshar Exports`,
    description: description.slice(0, 160),
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} — Export Quality | Akshar Exports`,
      description: description.slice(0, 160),
      url: `https://akshar-exports.com/products/${product.slug}`,
      images: [
        {
          url: product.image,
          width: 600,
          height: 400,
          alt: product.name,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} — Export Quality | Akshar Exports`,
      description: description.slice(0, 160),
      images: [product.image],
    },
  };
}

export async function generateStaticParams() {
  return productsData.products.map((product) => ({
    slug: product.slug,
  }));
}

export { default } from "./ProductDetailClient";
