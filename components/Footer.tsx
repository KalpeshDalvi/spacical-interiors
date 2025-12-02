import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-heading text-xl mb-3">Spacical Interiors</h3>
          <p className="text-sm text-white/80 leading-relaxed">
            Interior design studio creating warm, modern spaces for homes and
            workplaces in Pune and beyond.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-white">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Contact</h4>
          <p className="text-sm text-white/80">
            Pune, Maharashtra
            <br />
            India
          </p>
          <p className="text-sm text-white/80 mt-2">
            Phone / WhatsApp: +91-XXXXXXXXXX
            <br />
            Email: hello@spacicalinteriors.com
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Spacical Interiors. All rights reserved.
      </div>
    </footer>
  );
}
