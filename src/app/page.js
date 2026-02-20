import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import WorkProcess from "@/components/home/WorkProcess";
import Products from "@/components/home/Products";
import Testimonial from "@/components/home/Testimonial";
import Connect from "@/components/home/Connect";

export const metadata = {
  title: "Akshar Exports | Premium Agro Products Exporter from India",
  description:
    "Akshar Exports exports premium peanuts, sesame seeds, and spices from India. Quality-certified agro products trusted by 50+ countries. Order bulk products now!",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WorkProcess />
      <Products />
      <Testimonial />
      <Connect />
    </>
  );
}
