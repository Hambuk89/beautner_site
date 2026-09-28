import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FeaturedServices from "@/components/FeaturedServices";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <AboutSection />
        <FeaturedServices />
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}