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
      className={`sticky top-0 z-40 transition-shadow ${
        scrolled ? "bg-white/95 shadow-md backdrop-blur" : "bg-white"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        
        {/* ---------- LOGO + BRAND NAME ---------- */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Spacical Interiors Logo"
            width={36}
            height={36}
            className="rounded-full"
          />
          <span className="font-heading text-lg tracking-wide text-[#BF360C]">
            Spacical Interiors
          </span>
        </Link>

        {/* ---------- DESKTOP NAV ---------- */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition ${
                pathname === item.href
                  ? "text-[#BF360C]"
                  : "text-slateText hover:text-[#BF360C]"
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* CTA BUTTON */}
          <Link
            href="/contact"
            className="text-xs px-5 py-2 rounded-full bg-[#D84315] hover:bg-[#BF360C] text-white shadow transition"
          >
            Book Your Consultation
          </Link>
        </div>

        {/* ---------- MOBILE MENU BUTTON ---------- */}
        <button
          className="md:hidden rounded-full border border-slate-300 p-2 text-slate-600"
          onClick={() => setOpen((p) => !p)}
          aria-label="Toggle navigation"
        >
          <span className="block h-0.5 w-5 bg-slate-700 mb-1" />
          <span className="block h-0.5 w-5 bg-slate-700 mb-1" />
          <span className="block h-0.5 w-5 bg-slate-700" />
        </button>
      </nav>

      {/* ---------- MOBILE NAV DROPDOWN ---------- */}
      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`py-1 text-sm ${
                  pathname === item.href
                    ? "text-[#BF360C] font-semibold"
                    : "text-slateText"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="mt-2 text-center text-xs px-5 py-2 rounded-full bg-[#D84315] hover:bg-[#BF360C] text-white shadow transition"
            >
              Book Your Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
