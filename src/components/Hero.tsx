import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden">
      <Image
        src="/images/hero/hero1.png"
        alt="Beautner luxury facial treatment"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[#2C2C2C]/25" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-6 py-20 lg:px-8">
        <div className="max-w-xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-white">
            Luxury Facial Studio
          </p>

          <h1 className="font-[var(--font-playfair)] text-5xl leading-tight text-white sm:text-6xl lg:text-7xl">
            Your Skin,
            <br />
            Your Ritual.
          </h1>

          <p className="mt-6 max-w-md text-base leading-7 text-white/90 sm:text-lg">
            Personalised facial treatments designed to care for your skin,
            restore balance, and create a moment of relaxation.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-[#C8B6A6] px-7 py-3.5 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:bg-[#b8a595] hover:shadow-lg"
          >
            Book Your Treatment
          </Link>
        </div>
      </div>
    </section>
  );
}