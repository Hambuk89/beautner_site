import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Treatments", href: "/treatment" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#FAF8F5]">
      {/* Main Footer */}
      <div className="border-t border-[#EAE3DD]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr]">
            {/* Brand */}
            <div>
              <Link
                href="/"
                className="inline-flex items-center"
                aria-label="Beautner home"
              >
                <Image
                  src="/images/logo/logo.jpg"
                  alt="Beautner"
                  width={120}
                  height={50}
                  className="h-auto w-[110px] object-contain"
                />
              </Link>

              <p className="mt-6 max-w-sm text-sm leading-7 text-[#2C2C2C]/65">
                A luxury facial studio in Albany, Auckland, offering
                personalised skincare treatments in a calm and relaxing
                environment.
              </p>

              <p className="mt-5 text-xs uppercase tracking-[0.2em] text-[#C8B6A6]">
                Your Skin, Your Ritual.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#C8B6A6]">
                Explore
              </p>

              <nav className="mt-6 flex flex-col items-start gap-4">
                {footerLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm text-[#2C2C2C]/70 transition-colors duration-300 hover:text-[#2C2C2C]"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#C8B6A6]">
                Connect
              </p>

              <div className="mt-6 space-y-5">
                {/* Email */}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group flex items-center gap-3"
                >
                  <Image
                    src="/icons/gmail-icon.png"
                    alt="Email"
                    width={20}
                    height={20}
                    className="h-5 w-5 object-contain"
                  />

                  <span className="text-sm text-[#2C2C2C]/70 transition-colors duration-300 group-hover:text-[#2C2C2C]">
                    {siteConfig.email}
                  </span>
                </a>

                {/* Location */}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    siteConfig.location
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3"
                >
                  <Image
                    src="/icons/map-pin-icon.png"
                    alt="Location"
                    width={20}
                    height={20}
                    className="h-5 w-5 object-contain"
                  />

                  <span className="text-sm text-[#2C2C2C]/70 transition-colors duration-300 group-hover:text-[#2C2C2C]">
                    {siteConfig.location}
                  </span>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/beautner_nz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3"
                >
                  <Image
                    src="/icons/ig-instagram-icon.png"
                    alt="Instagram"
                    width={20}
                    height={20}
                    className="h-5 w-5 object-contain"
                  />

                  <span className="text-sm text-[#2C2C2C]/70 transition-colors duration-300 group-hover:text-[#2C2C2C]">
                    {siteConfig.instagram}
                  </span>
                </a>

                {/* WeChat */}
                <div className="flex items-center gap-3">
                  <Image
                    src="/icons/wechat-app-icon.png"
                    alt="WeChat"
                    width={20}
                    height={20}
                    className="h-5 w-5 object-contain"
                  />

                  <span className="text-sm text-[#2C2C2C]/70">
                    {siteConfig.wechat}
                  </span>
                </div>

                {/* KakaoTalk */}
                <div className="flex items-center gap-3">
                  <Image
                    src="/icons/kakaotalk-icon.png"
                    alt="KakaoTalk"
                    width={20}
                    height={20}
                    className="h-5 w-5 object-contain"
                  />

                  <span className="text-sm text-[#2C2C2C]/70">
                    {siteConfig.kakao}
                  </span>
                </div>              
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-14 flex flex-col gap-4 border-t border-[#EAE3DD] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-[#2C2C2C]/50">
              © {new Date().getFullYear()} {siteConfig.businessName}. All
              rights reserved.
            </p>

            <p className="text-xs text-[#2C2C2C]/50">
              Albany, Auckland, New Zealand
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}