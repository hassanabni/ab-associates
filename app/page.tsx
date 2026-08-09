import Nav from "@/components/Nav";
import Marquee from "@/components/Marquee";
import Hero from "@/components/sections/Hero";
import Legacy from "@/components/sections/Legacy";
import WhereWeWork from "@/components/sections/WhereWeWork";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="grain-overlay" />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Legacy />
        <WhereWeWork />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
