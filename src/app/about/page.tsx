import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Beautner",
  description:
    "Learn more about Beautner, a facial studio in Albany, Auckland, focused on personalised skincare, professional facial care, and a relaxing experience.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#FAF8F5]">
        {/* Intro */}
        <section className="px-6 pb-20 pt-24 sm:pb-24 sm:pt-28 lg:px-8 lg:pb-28 lg:pt-32">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#C8B6A6]">
              About Beautner
            </p>

            <h1 className="mt-5 font-[var(--font-playfair)] text-5xl leading-tight text-[#2C2C2C] sm:text-6xl">
              A Moment of Care,
              <br />
              Just for You.
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#2C2C2C]/70 sm:text-lg">
              Beautner is a facial studio in Albany, Auckland, created to give
              you a calm space to care for your skin and take a moment for
              yourself.
            </p>
          </div>
        </section>

        {/* About Beautner */}
        <section className="border-t border-[#EAE3DD] py-20 sm:py-24 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
            <div className="relative overflow-hidden">
              <Image
                src="/images/studio/image2.png"
                alt="Beautner facial studio"
                width={900}
                height={700}
                className="h-auto w-full object-cover"
              />
            </div>

            <div className="max-w-xl">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#C8B6A6]">
                Our Story
              </p>

              <h2 className="mt-4 font-[var(--font-playfair)] text-4xl leading-tight text-[#2C2C2C] sm:text-5xl">
                More Than a Facial
              </h2>

              <div className="mt-6 h-px w-16 bg-[#C8B6A6]" />

              <p className="mt-7 text-base leading-8 text-[#2C2C2C]/75">
                At Beautner, we believe skincare should be more than a regular
                appointment. It should be a moment where you can slow down,
                relax, and focus on yourself.
              </p>

              <p className="mt-5 text-base leading-8 text-[#2C2C2C]/75">
                Our treatments are designed to combine professional facial care
                with a relaxing experience. We take the time to understand your
                skin and provide care that suits your individual needs.
              </p>

              <p className="mt-5 text-base leading-8 text-[#2C2C2C]/75">
                From a simple facial to more advanced skincare treatments, our
                goal is to help you feel comfortable, cared for, and confident
                in your skin.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="bg-[#EAE3DD] py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#C8B6A6]">
              Our Philosophy
            </p>

            <h2 className="mt-4 font-[var(--font-playfair)] text-4xl leading-tight text-[#2C2C2C] sm:text-5xl">
              Thoughtful Care for Every Skin
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#2C2C2C]/70">
              Every person has different skin, different needs, and different
              goals. We believe good skincare starts with listening,
              understanding, and choosing the right approach.
            </p>

            <div className="mt-14 grid gap-10 sm:grid-cols-3">
              <div>
                <h3 className="font-[var(--font-playfair)] text-2xl text-[#2C2C2C]">
                  Personalised
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#2C2C2C]/65">
                  Treatments are selected with your individual skin needs and
                  goals in mind.
                </p>
              </div>

              <div>
                <h3 className="font-[var(--font-playfair)] text-2xl text-[#2C2C2C]">
                  Professional
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#2C2C2C]/65">
                  We focus on careful treatment and quality skincare products
                  throughout your experience.
                </p>
              </div>

              <div>
                <h3 className="font-[var(--font-playfair)] text-2xl text-[#2C2C2C]">
                  Relaxing
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#2C2C2C]/65">
                  A calm environment where you can take time away from your
                  everyday routine.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#C8B6A6]">
                The Beautner Experience
              </p>

              <h2 className="mt-4 font-[var(--font-playfair)] text-4xl text-[#2C2C2C] sm:text-5xl">
                Your Time to Relax
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              <div className="overflow-hidden">
                <Image
                  src="/images/studio/image1.png"
                  alt="Beautner studio experience"
                  width={800}
                  height={700}
                  className="h-[360px] w-full object-cover"
                />
              </div>

              <div className="overflow-hidden">
                <Image
                  src="/images/studio/image4.png"
                  alt="Beautner facial treatment environment"
                  width={800}
                  height={700}
                  className="h-[360px] w-full object-cover"
                />
              </div>

              <div className="overflow-hidden">
                <Image
                  src="/images/studio/image3.png"
                  alt="Beautner skincare environment"
                  width={800}
                  height={700}
                  className="h-[360px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#2C2C2C] px-6 py-20 text-center sm:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#C8B6A6]">
              Your Skin, Your Ritual
            </p>

            <h2 className="mt-4 font-[var(--font-playfair)] text-4xl text-white sm:text-5xl">
              Take a Moment for Yourself
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/70">
              Discover a personalised facial experience at Beautner.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-[#C8B6A6] px-8 py-3.5 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:bg-[#b8a595] hover:shadow-lg"
            >
              Book Your Treatment
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}