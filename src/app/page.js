import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import WorkProcess from "@/components/home/WorkProcess";
import Products from "@/components/home/Products";
import Testimonial from "@/components/home/Testimonial";
import Connect from "@/components/home/Connect";

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
