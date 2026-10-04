import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-[#FAF8F5] py-24 sm:py-28 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Image */}
          <div className="relative overflow-hidden bg-[#EAE3DD]">
            <Image
              src="/images/products/eclado3.jpg"
              alt="ECLADO skincare products used at Beautner"
              width={900}
              height={1100}
              className="h-auto w-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="max-w-xl">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#C8B6A6]">
              Our Skincare Partner
            </p>

            <h2 className="mt-4 font-[var(--font-playfair)] text-4xl leading-tight text-[#2C2C2C] sm:text-5xl lg:text-6xl">
              ECLADO
            </h2>

            <div className="mt-6 h-px w-16 bg-[#C8B6A6]" />

            <p className="mt-7 text-base leading-8 text-[#2C2C2C]/75">
              At Beautner, we believe that beautiful skin begins with
              thoughtful skincare and professional care.
            </p>

            <p className="mt-5 text-base leading-8 text-[#2C2C2C]/75">
              That is why we primarily use ECLADO products throughout our
              treatments. ECLADO is an aesthetics-focused skincare brand with
              a long history of working with beauty professionals and
              developing professional skincare solutions.
            </p>

            <p className="mt-5 text-base leading-8 text-[#2C2C2C]/75">
              We choose ECLADO because its professional approach allows us to
              create treatments that focus on the individual needs and
              condition of each client's skin.
            </p>

            {/* Highlights */}
            <div className="mt-10 grid gap-6 border-t border-[#EAE3DD] pt-8 sm:grid-cols-2">
              <div>
                <h3 className="font-[var(--font-playfair)] text-xl text-[#2C2C2C]">
                  Professional Care
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#2C2C2C]/65">
                  Developed with professional aesthetics and skincare
                  practices in mind.
                </p>
              </div>

              <div>
                <h3 className="font-[var(--font-playfair)] text-xl text-[#2C2C2C]">
                  Skin-Focused
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#2C2C2C]/65">
                  A range of skincare solutions designed for different skin
                  needs and treatment goals.
                </p>
              </div>
            </div>

            <Link
              href="/treatment"
              className="mt-10 inline-flex rounded-full border border-[#C8B6A6] px-7 py-3.5 text-sm font-medium tracking-wide text-[#2C2C2C] transition-all duration-300 hover:bg-[#C8B6A6] hover:text-white"
            >
              Discover Our Treatments
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}