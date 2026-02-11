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
  title: "JRP Impex - Global Agro, Rooted in Tradition",
  description:
    "Leading with Integrity in Global Agro Markets. Premium agricultural products from India.",
  keywords: "agro, agriculture, india, export, import, premium products",
  authors: [{ name: "JRP Impex" }],
  openGraph: {
    title: "JRP Impex - Global Agro, Rooted in Tradition",
    description: "Leading with Integrity in Global Agro Markets",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${robotoSlab.variable}`}
    >
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
