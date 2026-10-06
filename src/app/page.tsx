import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FeaturedServices from "@/components/FeaturedServices";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Luxury Facial Studio in Albany, Auckland",
  description:
    "Beautner is a luxury facial studio in Albany, Auckland, offering personalised facial and skincare treatments in a calm and relaxing environment.",
};

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <AboutSection />
        <FeaturedServices />
        <ContactCTA
          eyebrow="Your Skin, Your Ritual"
          title={
            <>
              Take a Moment
              <br />
              for Yourself
            </>
          }
          description="Discover a personalised facial experience designed around your skin, your needs, and your time."
          buttonText="Book Your Treatment"
          href="/contact"
        />
      </main>

      <Footer />
    </>
  );
}