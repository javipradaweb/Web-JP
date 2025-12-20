import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/footer/Footer";
import PortafolioPage from "@/components/portafolio/PortafolioPage";

export default function Portafolio() {
  return (
    <main className="relative bg-[#020617] text-white">
      {/* Sin GlobalGlows en esta página, como pediste */}
      <Navbar />
      <PortafolioPage />
      <Footer />
    </main>
  );
}
