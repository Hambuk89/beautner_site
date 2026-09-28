import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";

const featuredServices = services.slice(0, 4);

export default function FeaturedServices() {
  return (
    <section className="bg-[#FAF8F5] py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#C8B6A6]">
              Our Treatments
            </p>

            <h2 className="mt-4 font-[var(--font-playfair)] text-4xl leading-tight text-[#2C2C2C] sm:text-5xl">
              Skincare Designed
              <br />
              Around You
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#2C2C2C]/65 md:text-right">
            Thoughtful facial treatments designed to support your skin while
            giving you time to relax and recharge.
          </p>
        </div>

        {/* Treatment Cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredServices.map((service) => (
            <article
              key={service.title}
              className="group flex min-h-[330px] flex-col justify-between border border-[#EAE3DD] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#C8B6A6]">
                    Facial Care
                  </span>

                  <ArrowUpRight
                    size={20}
                    strokeWidth={1.5}
                    className="text-[#C8B6A6] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>

                <h3 className="mt-8 font-[var(--font-playfair)] text-2xl leading-tight text-[#2C2C2C]">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#2C2C2C]/65">
                  {service.description}
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-[#EAE3DD] pt-5">
                <span className="text-sm text-[#2C2C2C]/60">
                  {service.duration}
                </span>

                <span className="text-sm font-medium text-[#2C2C2C]">
                  {service.price}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12 text-center">
          <Link
            href="/treatment"
            className="inline-flex rounded-full border border-[#C8B6A6] px-8 py-3.5 text-sm font-medium tracking-wide text-[#2C2C2C] transition-all duration-300 hover:bg-[#C8B6A6] hover:text-white"
          >
            View All Treatments
          </Link>
        </div>
      </div>
    </section>
  );
}