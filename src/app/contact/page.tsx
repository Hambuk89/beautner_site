import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "./ContactForm";
import Navbar from "@/components/Navbar";
import { siteConfig } from "@/data/site";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Contact Beautner | Book Your Facial Treatment",
  description:
    "Contact Beautner in Albany, Auckland to enquire about facial and skincare treatments or book a personalised treatment for your skin.",
};

export default function ContactPage() {

  return (
    <>
      <Navbar />

      <main className="bg-[#FAF8F5]">
        {/* Hero */}
        <section className="px-6 pb-20 pt-24 sm:pb-24 sm:pt-28 lg:px-8 lg:pb-28 lg:pt-32">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#C8B6A6]">
              Contact Beautner
            </p>

            <h1 className="mt-5 font-[var(--font-playfair)] text-5xl leading-tight text-[#2C2C2C] sm:text-6xl">
              Let&apos;s Create
              <br />
              Your Skin Ritual
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#2C2C2C]/70 sm:text-lg">
              Have a question or would like to book a treatment? Get in touch
              with us and we will be happy to help.
            </p>
          </div>
        </section>

        {/* Contact Information + Form */}
        <section className="border-t border-[#EAE3DD] py-20 sm:py-24 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">
            {/* Contact Information */}
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#C8B6A6]">
                Get in Touch
              </p>

              <h2 className="mt-4 font-[var(--font-playfair)] text-4xl leading-tight text-[#2C2C2C] sm:text-5xl">
                We&apos;d Love to
                <br />
                Hear From You
              </h2>

              <div className="mt-6 h-px w-16 bg-[#C8B6A6]" />

              <p className="mt-7 max-w-md text-base leading-8 text-[#2C2C2C]/70">
                Whether you have a question about our treatments or would like
                to make an enquiry, feel free to contact us.
              </p>

              <div className="mt-10 space-y-7">
                {/* Email */}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group flex items-center gap-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EAE3DD] transition-colors duration-300 group-hover:bg-[#C8B6A6]">
                    <Image
                      src="/icons/gmail-icon.png"
                      alt="Email"
                      width={22}
                      height={22}
                      className="h-[22px] w-[22px] object-contain"
                    />
                  </span>

                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-[#C8B6A6]">
                      Email
                    </p>
                    <p className="mt-1 text-sm text-[#2C2C2C]/75">
                      {siteConfig.email}
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EAE3DD]">
                    <Image
                      src="/icons/map-pin-icon.png"
                      alt="Location"
                      width={22}
                      height={22}
                      className="h-[22px] w-[22px] object-contain"
                    />
                  </div>
                  <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-[#C8B6A6]">
                    Location
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      siteConfig.location
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm text-[#2C2C2C]/75 transition-colors hover:text-[#C8B6A6]"
                  >
                    {siteConfig.location}
                  </a>
                  </div>
                </div> 
              
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/beautner_nz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EAE3DD] transition-colors duration-300 group-hover:bg-[#C8B6A6]">
                    <Image
                      src="/icons/ig-instagram-icon.png"
                      alt="Instagram"
                      width={22}
                      height={22}
                      className="h-[22px] w-[22px] object-contain"
                    />
                  </span>

                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-[#C8B6A6]">
                      Instagram
                    </p>
                    <p className="mt-1 text-sm text-[#2C2C2C]/75">
                      {siteConfig.instagram}
                    </p>
                  </div>
                </a>

                {/* WeChat */}
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EAE3DD]">
                    <Image
                      src="/icons/wechat-app-icon.png"
                      alt="WeChat"
                      width={22}
                      height={22}
                      className="h-[22px] w-[22px] object-contain"
                    />
                  </span>

                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-[#C8B6A6]">
                      WeChat
                    </p>
                    <p className="mt-1 text-sm text-[#2C2C2C]/75">
                      {siteConfig.wechat}
                    </p>
                  </div>
                </div>

                {/* KakaoTalk */}
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EAE3DD]">
                    <Image
                      src="/icons/kakaotalk-icon.png"
                      alt="KakaoTalk"
                      width={22}
                      height={22}
                      className="h-[22px] w-[22px] object-contain"
                    />
                  </span>

                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-[#C8B6A6]">
                      KakaoTalk
                    </p>
                    <p className="mt-1 text-sm text-[#2C2C2C]/75">
                      {siteConfig.kakao}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>

        {/* Final CTA */}
        <ContactCTA
          eyebrow="Your Skin, Your Ritual"
          title="Take Time for Yourself"
          description="A calm space, thoughtful skincare, and a treatment designed around you."
          buttonText="Explore Treatments"
          href="/treatment"
        />
      </main>
      <Footer/>
    </>
  );
}