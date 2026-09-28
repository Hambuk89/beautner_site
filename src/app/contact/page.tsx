"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { siteConfig } from "@/data/site";
import { addOns, services } from "@/data/services";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  const treatmentOptions = [...services, ...addOns];

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
                        className="h-[22px] w-[22px] object-contain"/>
                    </div>
                    <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-[#C8B6A6]">
                        Location    
                    </p>

                    
                    <p className="mt-1 text-sm text-[#2C2C2C]/75">
                        {siteConfig.location}
                    </p>
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

            {/* Contact Form */}
            <div className="border border-[#EAE3DD] bg-white p-7 sm:p-10 lg:p-12">
              {!isSubmitted ? (
                <>
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#C8B6A6]">
                      Enquiry Form
                    </p>

                    <h2 className="mt-3 font-[var(--font-playfair)] text-3xl text-[#2C2C2C] sm:text-4xl">
                      Make an Enquiry
                    </h2>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="mt-10 space-y-6"
                  >
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-[#2C2C2C]"
                      >
                        Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full border border-[#EAE3DD] bg-[#FAF8F5] px-4 py-3.5 text-sm text-[#2C2C2C] outline-none transition-colors placeholder:text-[#2C2C2C]/40 focus:border-[#C8B6A6]"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-[#2C2C2C]"
                      >
                        Email
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="Your email address"
                        className="w-full border border-[#EAE3DD] bg-[#FAF8F5] px-4 py-3.5 text-sm text-[#2C2C2C] outline-none transition-colors placeholder:text-[#2C2C2C]/40 focus:border-[#C8B6A6]"
                      />
                    </div>

                    {/* Treatment */}
                    <div>
                      <label
                        htmlFor="treatment"
                        className="mb-2 block text-sm font-medium text-[#2C2C2C]"
                      >
                        Treatment
                      </label>

                      <select
                        id="treatment"
                        name="treatment"
                        required
                        defaultValue=""
                        className="w-full border border-[#EAE3DD] bg-[#FAF8F5] px-4 py-3.5 text-sm text-[#2C2C2C] outline-none transition-colors focus:border-[#C8B6A6]"
                      >
                        <option value="" disabled>
                          Select a treatment
                        </option>

                        {treatmentOptions.map((treatment) => (
                          <option
                            key={treatment.title}
                            value={treatment.title}
                          >
                            {treatment.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Date + Time */}
                    <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="date" className="mb-2 block text-sm font-medium text-[#2C2C2C]">Preferred Date</label>
                            <input 
                                id="date"
                                name="date"
                                type="date"
                                required
                                lang="en-NZ"
                                className="w-full border border-[#EAE3DD] bg-[#FAF8F5] px-4 py-3.5 text-sm text-[#2C2C2C] outline-none transition-colors focus:border-[#C8B6A6]"
                            />
                            <p className="mt-2 text-xs text-[#2C2C2C]/45">
                                Please select your preferred date.
                            </p>
                        </div>

                        <div>
                            <label
                                htmlFor="time"
                                className="mb-2 block text-sm font-medium text-[#2C2C2C]"
                            >
                                Preferred Time
                            </label>

                            <input
                                id="time"
                                name="time"
                                type="time"
                                required
                                lang="en-NZ"
                                className="w-full border border-[#EAE3DD] bg-[#FAF8F5] px-4 py-3.5 text-sm text-[#2C2C2C] outline-none transition-colors focus:border-[#C8B6A6]"
                            />

                            <p className="mt-2 text-xs text-[#2C2C2C]/45">
                                New Zealand time (NZST / NZDT).
                            </p>
                        </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-[#2C2C2C]"
                      >
                        Message
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Tell us how we can help..."
                        className="w-full resize-none border border-[#EAE3DD] bg-[#FAF8F5] px-4 py-3.5 text-sm text-[#2C2C2C] outline-none transition-colors placeholder:text-[#2C2C2C]/40 focus:border-[#C8B6A6]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-full bg-[#C8B6A6] px-7 py-4 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:bg-[#b8a595] hover:shadow-lg"
                    >
                      Send Enquiry
                    </button>
                  </form>
                </>
              ) : (
                <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EAE3DD]">
                    <span className="text-2xl text-[#C8B6A6]">✓</span>
                  </div>

                  <p className="mt-7 text-sm font-medium uppercase tracking-[0.2em] text-[#C8B6A6]">
                    Thank You
                  </p>

                  <h2 className="mt-4 font-[var(--font-playfair)] text-4xl text-[#2C2C2C] sm:text-5xl">
                    Your Enquiry
                    <br />
                    Has Been Sent
                  </h2>

                  <p className="mt-6 max-w-md text-sm leading-7 text-[#2C2C2C]/65">
                    Thank you for contacting Beautner. We will get back to you
                    as soon as possible.
                  </p>

                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 rounded-full border border-[#C8B6A6] px-7 py-3.5 text-sm font-medium tracking-wide text-[#2C2C2C] transition-all duration-300 hover:bg-[#C8B6A6] hover:text-white"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-[#2C2C2C] px-6 py-20 text-center sm:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#C8B6A6]">
              Your Skin, Your Ritual
            </p>

            <h2 className="mt-4 font-[var(--font-playfair)] text-4xl leading-tight text-white sm:text-5xl">
              Take Time for Yourself
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/70">
              A calm space, thoughtful skincare, and a treatment designed
              around you.
            </p>

            <Link
              href="/treatment"
              className="mt-8 inline-flex rounded-full bg-[#C8B6A6] px-8 py-3.5 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:bg-[#b8a595] hover:shadow-lg"
            >
              Explore Treatments
            </Link>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}