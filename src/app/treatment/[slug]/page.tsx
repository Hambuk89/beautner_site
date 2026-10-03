import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services, addOns } from "@/data/services";

type TreatmentPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function TreatmentDetailPage({
  params,
}: TreatmentPageProps) {
  const { slug } = await params;

  const treatment = [...services, ...addOns].find(
    (item) => item.slug === slug
  );

  if (!treatment) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-[#FAF8F5] px-6 pb-20 pt-24 sm:pb-24 sm:pt-28 lg:px-8 lg:pb-28 lg:pt-32">
          <div className="mx-auto max-w-7xl">
            <Link
              href="/treatment"
              className="inline-flex items-center gap-2 text-sm text-[#2C2C2C]/60 transition-colors hover:text-[#2C2C2C]"
            >
              <ArrowLeft size={16} />
              Back to Treatments
            </Link>

            <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
              {/* Hero Text */}
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#C8B6A6]">
                  {services.some((item) => item.slug === treatment.slug)
                    ? "Treatment"
                    : "Add-On Treatment"}
                </p>

                <h1 className="mt-5 font-[var(--font-playfair)] text-5xl leading-[1.08] text-[#2C2C2C] sm:text-6xl lg:text-7xl">
                  {treatment.title}
                </h1>

                <p className="mt-7 max-w-xl text-base leading-8 text-[#2C2C2C]/65 sm:text-lg">
                  {treatment.description}
                </p>
              </div>

              {/* Hero Image */}
              {treatment.image ? (
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem]">
                  <Image
                    src={treatment.image}
                    alt={treatment.title}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              ) : null}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="bg-white px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-24">
              {/* About */}
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#C8B6A6]">
                  About the Treatment
                </p>

                <h2 className="mt-4 font-[var(--font-playfair)] text-3xl leading-tight text-[#2C2C2C] sm:text-4xl">
                  Designed around your skin
                </h2>

                <p className="mt-7 max-w-2xl text-base leading-8 text-[#2C2C2C]/65">
                  {treatment.detailedDescription}
                </p>
              </div>

              {/* Treatment Information */}
              <div className="h-fit rounded-3xl bg-[#FAF8F5] p-8 sm:p-10">
                <div className="flex items-center gap-4 border-b border-[#2C2C2C]/10 pb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C8B6A6]/15">
                    <Clock
                      size={18}
                      strokeWidth={1.5}
                      className="text-[#2C2C2C]"
                    />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-[#2C2C2C]/45">
                      Duration
                    </p>

                    <p className="mt-1 text-sm font-medium text-[#2C2C2C]">
                      {treatment.duration}
                    </p>
                  </div>
                </div>

                <div className="pt-7">
                  <p className="text-xs uppercase tracking-[0.15em] text-[#2C2C2C]/45">
                    Treatment Price
                  </p>

                  <p className="mt-2 font-[var(--font-playfair)] text-3xl text-[#2C2C2C]">
                    {treatment.price}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best For */}
        <section className="bg-[#EAE3DD] px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#C8B6A6]">
                Best For
              </p>

              <h2 className="mt-4 font-[var(--font-playfair)] text-3xl text-[#2C2C2C] sm:text-4xl">
                Is this treatment right for you?
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-[#2C2C2C]/60">
                Each treatment is selected according to your skin's needs and
                the type of care you are looking for.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {treatment.bestFor.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl bg-white/70 px-6 py-5"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C8B6A6]/20">
                    <Check
                      size={16}
                      strokeWidth={1.7}
                      className="text-[#2C2C2C]"
                    />
                  </div>

                  <p className="text-sm leading-6 text-[#2C2C2C]/75">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Focus */}
        <section className="bg-[#FAF8F5] px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#C8B6A6]">
                Treatment Focus
              </p>

              <h2 className="mt-4 font-[var(--font-playfair)] text-3xl text-[#2C2C2C] sm:text-4xl">
                What we focus on
              </h2>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {treatment.focus.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#2C2C2C]/10 bg-white p-6"
                >
                  <div className="mb-5 h-px w-8 bg-[#C8B6A6]" />

                  <p className="text-sm leading-6 text-[#2C2C2C]/70">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking CTA */}
        <section className="bg-[#2C2C2C] px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#C8B6A6]">
              Your Skin, Your Ritual
            </p>

            <h2 className="mt-5 font-[var(--font-playfair)] text-4xl leading-tight text-white sm:text-5xl">
              Ready for your
              <br />
              treatment?
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/60">
              Take a moment for yourself and discover a treatment designed
              around your skin and your needs.
            </p>

            <Link
              href="/contact"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-[#C8B6A6] px-8 py-4 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:bg-[#b8a595] hover:shadow-lg"
            >
              Book Your Treatment

              <ArrowUpRight
                size={16}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}