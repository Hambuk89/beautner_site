import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="bg-[#EAE3DD] px-6 py-24 sm:py-28 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#C8B6A6]">
          Your Skin, Your Ritual
        </p>

        <h2 className="mt-5 font-[var(--font-playfair)] text-4xl leading-tight text-[#2C2C2C] sm:text-5xl lg:text-6xl">
          Take a Moment
          <br />
          for Yourself
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[#2C2C2C]/65 sm:text-lg">
          Discover a personalised facial experience designed around your skin,
          your needs, and your time.
        </p>

        <Link
          href="/contact"
          className="mt-9 inline-flex rounded-full bg-[#C8B6A6] px-8 py-4 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:bg-[#b8a595] hover:shadow-lg"
        >
          Book Your Treatment
        </Link>
      </div>
    </section>
  );
}