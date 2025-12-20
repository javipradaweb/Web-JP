import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Pricing from "@/components/pricing/Pricing";
import Faq from "@/components/faq/Faq";
import Contact from "@/components/contact/Contact";
import GlobalGlows from "@/components/GlobalGlows";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="relative isolate bg-[#020617]">
      <GlobalGlows />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <Pricing />
        <Faq />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
