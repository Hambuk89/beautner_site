import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import { addOns, services } from "@/data/services";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Facial Treatments in Albany, Auckland",
  description:
    "Explore Beautner's facial and skincare treatments in Albany, Auckland, including deep cleansing, facial massage, hydration, microneedling, dermaplaning, and more.",
};

export default function TreatmentPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#FAF8F5]">
        {/* Hero */}
        <section className="px-6 pb-20 pt-24 sm:pb-24 sm:pt-28 lg:px-8 lg:pb-28 lg:pt-32">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#C8B6A6]">
              Our Treatments
            </p>

            <h1 className="mt-5 font-[var(--font-playfair)] text-5xl leading-tight text-[#2C2C2C] sm:text-6xl">
              Treatments Designed
              <br />
              for Your Skin
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#2C2C2C]/70 sm:text-lg">
              Discover our facial and skincare treatments, thoughtfully
              designed to care for your skin and create a relaxing experience.
            </p>
          </div>
        </section>

        {/* Main Treatments */}
        <section className="border-t border-[#EAE3DD] py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#C8B6A6]">
                Main Treatments
              </p>

              <h2 className="mt-3 font-[var(--font-playfair)] text-3xl text-[#2C2C2C] sm:text-4xl">
                Facial & Skincare
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {services.map((service, index) => (
                <Link
                  key={service.title}
                  href={`/treatment/${service.slug}`}
                  className="group flex flex-col justify-between border border-[#EAE3DD] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-9"
                >
                  <div>
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#C8B6A6]">
                          Treatment {String(index + 1).padStart(2, "0")}
                        </span>

                        <h3 className="mt-4 font-[var(--font-playfair)] text-2xl leading-tight text-[#2C2C2C] sm:text-3xl">
                          {service.title}
                        </h3>
                      </div>

                      <ArrowUpRight
                        size={22}
                        strokeWidth={1.5}
                        className="shrink-0 text-[#C8B6A6] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>

                    <p className="mt-5 max-w-xl text-sm leading-7 text-[#2C2C2C]/65 sm:text-base">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-[#EAE3DD] pt-5">
                    <div className="flex items-center gap-2 text-sm text-[#2C2C2C]/60">
                      <Clock size={16} strokeWidth={1.5} />
                      <span>{service.duration}</span>
                    </div>

                    <span className="text-base font-medium text-[#2C2C2C]">
                      {service.price}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Add-On Treatments */}
        <section className="bg-[#EAE3DD] py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#C8B6A6]">
                Add-On Treatments
              </p>

              <h2 className="mt-3 font-[var(--font-playfair)] text-3xl text-[#2C2C2C] sm:text-4xl">
                Complete Your Treatment
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#2C2C2C]/65 sm:text-base">
                Enhance your facial experience with an additional mask
                treatment selected to complement your skincare routine.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {addOns.map((addOn) => (
                <Link
                  key={addOn.title}
                  href={`/treatment/${addOn.slug}`}
                  className="group flex min-h-[300px] flex-col justify-between border border-[#FAF8F5] bg-[#FAF8F5] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#C8B6A6]">
                        Add-On
                      </span>

                      <ArrowUpRight
                        size={20}
                        strokeWidth={1.5}
                        className="text-[#C8B6A6] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>

                    <h3 className="mt-7 font-[var(--font-playfair)] text-2xl text-[#2C2C2C]">
                      {addOn.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#2C2C2C]/65">
                      {addOn.description}
                    </p>
                  </div>

                  <div className="mt-7 flex items-center justify-between border-t border-[#EAE3DD] pt-5">
                    <div className="flex items-center gap-2 text-sm text-[#2C2C2C]/60">
                      <Clock size={16} strokeWidth={1.5} />
                      <span>{addOn.duration}</span>
                    </div>

                    <span className="text-sm font-medium text-[#2C2C2C]">
                      {addOn.price}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Booking CTA */}
        <section className="bg-[#EAE3DD] px-6 py-24 sm:py-28 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#C8B6A6]">
              Begin Your Ritual
            </p>

            <h2 className="mt-4 font-[var(--font-playfair)] text-4xl leading-tight text-[#2C2C2C] sm:text-5xl">
              Ready to Take Time for Your Skin?
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[#2C2C2C]/65">
              Get in touch with Beautner to find a treatment that suits your
              skin and your needs.
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