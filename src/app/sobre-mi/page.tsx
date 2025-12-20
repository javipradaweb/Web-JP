import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/footer/Footer";
import SobreMiClient from "./SobreMiClient";

export default function SobreMi() {
  return (
    <main className="relative bg-[#020617] text-white">
      <Navbar />
      <SobreMiClient />
      <Footer />
    </main>
  );
}
