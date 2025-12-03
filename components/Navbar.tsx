"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled 
          ? "bg-white/90 shadow-lg backdrop-blur-md border-b border-brand/10" 
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        
        {/* ---------- LOGO + BRAND NAME ---------- */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo.png"
            alt="Spacical Interiors Logo"
            width={40}
            height={40}
            className="rounded-full transition-transform duration-300 group-hover:scale-110"
          />
          <span className="font-heading text-lg tracking-wide text-brand group-hover:text-brandAccent transition-colors duration-300">
            Spacical Interiors
          </span>
        </Link>

        {/* ---------- DESKTOP NAV ---------- */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-all duration-300 relative group ${
                pathname === item.href
                  ? "text-brand"
                  : "text-slateText hover:text-brand"
              }`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand transition-all duration-300 ${
                pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          ))}

          {/* CTA BUTTON */}
          <Link
            href="/contact"
            className="text-xs px-6 py-2.5 rounded-full bg-gradient-to-r from-brand to-brandAccent 
                       text-white shadow-lg shadow-brand/30 transition-all duration-300 
                       hover:shadow-xl hover:shadow-brand/40 hover:scale-105 active:scale-95 font-semibold"
          >
            Book Consultation
          </Link>
        </div>

        {/* ---------- MOBILE MENU BUTTON ---------- */}
        <button
          className="md:hidden rounded-full border border-brand/20 p-2 text-brand hover:bg-brand/5 transition-all duration-300"
          onClick={() => setOpen((p) => !p)}
          aria-label="Toggle navigation"
        >
          <span className="block h-0.5 w-5 bg-brand mb-1 transition-all" />
          <span className="block h-0.5 w-5 bg-brand mb-1 transition-all" />
          <span className="block h-0.5 w-5 bg-brand transition-all" />
        </button>
      </nav>

      {/* ---------- MOBILE NAV DROPDOWN ---------- */}
      {open && (
        <div className="md:hidden border-t border-brand/10 bg-white/95 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`py-2 px-3 text-sm rounded-lg transition-all duration-300 ${
                  pathname === item.href
                    ? "text-brand font-semibold bg-brand/5"
                    : "text-slateText hover:bg-brand/5 hover:text-brand"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="mt-2 text-center text-xs px-6 py-2.5 rounded-full 
                         bg-gradient-to-r from-brand to-brandAccent text-white 
                         shadow-lg shadow-brand/30 transition-all duration-300 font-semibold"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
