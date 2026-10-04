"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
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

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
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
                rows={7}
                placeholder="Please tell us which treatment you are interested in and any questions you may have. If you would like to book a treatment, please also let us know your preferred day and time."
                className="w-full resize-none border border-[#EAE3DD] bg-[#FAF8F5] px-4 py-3.5 text-sm leading-7 text-[#2C2C2C] outline-none transition-colors placeholder:text-[#2C2C2C]/40 focus:border-[#C8B6A6]"
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
            Thank you for contacting Beautner. We will get back to you as soon
            as possible.
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
  );
}