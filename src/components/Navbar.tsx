"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Treatments", href: "/treatment" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#EAE3DD] bg-[#FAF8F5]/95 backdrop-blur-md">
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="relative flex items-center"
          aria-label="Beautner home"
        >
          <Image
            src="/images/logo/logo.jpg"
            alt="Beautner"
            width={120}
            height={50}
            className="h-auto w-[100px] object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-10 md:flex">
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative py-2 text-sm tracking-wide transition-colors duration-300 ${
                  isActive
                    ? "text-[#2C2C2C]"
                    : "text-[#2C2C2C]/70 hover:text-[#2C2C2C]"
                }`}
              >
                {item.name}

                {isActive && (
                  <span className="absolute bottom-0 left-0 h-px w-full bg-[#C8B6A6]" />
                )}
              </Link>
            );
          })}

          {/* Booking Button */}
          <Link
            href="/contact"
            className="rounded-full bg-[#C8B6A6] px-6 py-3 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:bg-[#b8a595] hover:shadow-md"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="flex items-center justify-center rounded-full p-2 text-[#2C2C2C] transition-colors hover:bg-[#EAE3DD] md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X size={24} strokeWidth={1.5} />
          ) : (
            <Menu size={24} strokeWidth={1.5} />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-[#EAE3DD] bg-[#FAF8F5] md:hidden">
          <div className="mx-auto max-w-7xl px-6 py-6">
            <div className="flex flex-col">
              {navigation.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className={`border-b border-[#EAE3DD] py-4 text-base tracking-wide transition-colors duration-300 ${
                      isActive
                        ? "text-[#2C2C2C]"
                        : "text-[#2C2C2C]/70 hover:text-[#2C2C2C]"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              <Link
                href="/contact"
                onClick={closeMenu}
                className="mt-6 rounded-full bg-[#C8B6A6] px-6 py-3 text-center text-sm font-medium tracking-wide text-white transition-all duration-300 hover:bg-[#b8a595]"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}