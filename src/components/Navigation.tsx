"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-offwhite/95 backdrop-blur-md shadow-[0_2px_20px_rgba(23,35,58,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 lg:px-10 py-3">
        <a href="#home" className="flex items-center" aria-label="MenuMind home">
          <Image
            src="/images/logo.png"
            alt="MenuMind Restaurant Consultancy"
            width={195}
            height={105}
            className={`w-auto transition-all duration-300 ${
              scrolled || mobileOpen ? "h-11" : "h-14"
            }`}
            priority
          />
        </a>

        <div className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[14.5px] font-medium tracking-wide transition-colors ${
                scrolled ? "text-navy hover:text-gold" : "text-offwhite hover:text-gold-light"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-[12px] bg-navy px-6 py-2.5 text-[14px] font-semibold text-offwhite transition-all hover:bg-navy-deep hover:shadow-lg"
          >
            Book Consultation
          </a>
        </div>

        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span
            className={`block h-[1.5px] w-6 transition-all ${
              scrolled || mobileOpen ? "bg-navy" : "bg-offwhite"
            } ${mobileOpen ? "translate-y-[6.5px] rotate-45" : ""}`}
          />
          <span
            className={`block h-[1.5px] w-6 transition-all ${
              scrolled || mobileOpen ? "bg-navy" : "bg-offwhite"
            } ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-[1.5px] w-6 transition-all ${
              scrolled || mobileOpen ? "bg-navy" : "bg-offwhite"
            } ${mobileOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden bg-offwhite border-t border-light-gray px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-navy"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-[12px] bg-navy px-6 py-3 text-center text-[14px] font-semibold text-offwhite"
            onClick={() => setMobileOpen(false)}
          >
            Book Consultation
          </a>
        </div>
      )}
    </header>
  );
}
