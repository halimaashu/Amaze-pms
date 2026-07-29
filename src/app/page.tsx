import Navbar from "@/components/Navbar";
import BannerCarousel from "@/components/BannerCarousel";
import Hero from "@/components/Hero";
import ClientMarquee from "@/components/ClientMarquee";
import Services from "@/components/Services";
import Sectors from "@/components/Sectors";
import Heritage from "@/components/Heritage";
import TechSpotlight from "@/components/TechSpotlight";
import Calculator from "@/components/Calculator";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />
      <main className="flex-grow">
        <BannerCarousel />
        <Hero />
        <ClientMarquee />
        <Services />
        <Sectors />
        <Heritage />
        <TechSpotlight />
        <Calculator />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}
