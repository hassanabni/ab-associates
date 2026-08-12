import Nav from "@/components/Nav";
import Marquee from "@/components/Marquee";
import Hero from "@/components/sections/Hero";
import Legacy from "@/components/sections/Legacy";
import WhereWeWork from "@/components/sections/WhereWeWork";
import Services from "@/components/sections/Services";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import FAQStructuredData from "@/components/FAQStructuredData";

export default function Home() {
  return (
    <>
      <FAQStructuredData />
      <div className="grain-overlay" />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Legacy />
        <WhereWeWork />
        <Services />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
