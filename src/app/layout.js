import { Playfair_Display, Inter, Roboto_Slab } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

// Elegant serif font for headings
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-heading",
  display: "swap",
});

// Modern sans-serif for body text
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

// Classic serif for special sections
const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-accent",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://akshar-exports.com"),
  title: {
    default: "Akshar Exports | Premium Agro Products Exporter from India",
    template: "%s | Akshar Exports",
  },
  description:
    "Akshar Exports exports premium peanuts, sesame seeds, spices, and grains from India. Quality-certified agro products trusted by 50+ countries. Order bulk now!",
  keywords: [
    "agro exporter India",
    "peanut exporter",
    "sesame seeds supplier",
    "Indian spices wholesale",
    "agricultural products export",
    "Akshar Exports",
    "bulk agro commodities",
  ],
  authors: [{ name: "Akshar Exports", url: "https://akshar-exports.com" }],
  creator: "Akshar Exports",
  publisher: "Akshar Exports",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Akshar Exports",
    title: "Akshar Exports | Premium Agro Products Exporter from India",
    description:
      "Leading Indian exporter of premium peanuts, sesame seeds, and spices. Serving 50+ countries with quality-certified bulk agricultural commodities.",
    url: "https://akshar-exports.com",
    images: [
      {
        url: "/logo.png",
        width: 180,
        height: 72,
        alt: "Akshar Exports Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@aksharexports",
    creator: "@aksharexports",
    title: "Akshar Exports | Premium Agro Products Exporter from India",
    description:
      "Leading Indian exporter of premium peanuts, sesame seeds, and spices. Quality-certified bulk agricultural commodities.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD Structured Data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Akshar Exports",
  url: "https://akshar-exports.com",
  logo: "https://akshar-exports.com/logo.png",
  description:
    "Leading exporter of premium agricultural products from India including peanuts, sesame seeds, spices, grains, and dry fruits.",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Jay Industrial Park-3, Plot No.10/11, Dhoraji-Junagadh Road, At Sukhpur",
    addressLocality: "Junagadh",
    addressRegion: "Gujarat",
    postalCode: "362310",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9909998389",
    contactType: "sales",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [
    "https://www.facebook.com/aksharexports",
    "https://www.instagram.com/aksharexports",
    "https://x.com/aksharexports",
    "https://www.linkedin.com/company/aksharexports",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Akshar Exports",
  url: "https://akshar-exports.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://akshar-exports.com/products?search={search_term_string}",
    "query-input": "required name=search_term_string",
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
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${robotoSlab.variable}`}
    >
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
