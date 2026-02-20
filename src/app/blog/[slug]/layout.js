import blogsData from "@/data/blogs";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogsData.posts.find((b) => b.slug === slug);

  if (!post) return {};

  const title = `${post.title} | Akshar Exports Insights`;
  const description = post.excerpt || `Read our latest article about ${post.title} and insights into the global agricultural export market from Akshar Exports India.`;

  return {
    title: title.slice(0, 60),
    description: description.slice(0, 160),
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://akshar-exports.com/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function BlogDetailLayout({ children, params }) {
  const { slug } = await params;
  const post = blogsData.posts.find((b) => b.slug === slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post?.title,
    description: post?.excerpt,
    author: {
      "@type": "Person",
      name: post?.author,
      url: "https://akshar-exports.com/about",
    },
    datePublished: post?.date,
    image: "https://akshar-exports.com/logo.png",
    publisher: {
      "@type": "Organization",
      name: "Akshar Exports",
      logo: {
        "@type": "ImageObject",
        url: "https://akshar-exports.com/logo.png",
      },
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
      {
        "@type": "ListItem",
        position: 3,
        name: post?.title,
        item: `https://akshar-exports.com/blog/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
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
