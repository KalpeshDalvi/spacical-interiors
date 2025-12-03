export default function Footer() {
  return (
    <footer className="bg-brandDeep text-cream py-14">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* Brand */}
        <div>
          <h3 className="font-heading text-2xl mb-3 text-white">Spacical Interiors</h3>
          <p className="text-cream/80 leading-relaxed">
            Interior design studio crafting warm, modern and timeless spaces 
            for homes and workplaces in Pune and beyond.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><a className="footer-link" href="/services">Services</a></li>
            <li><a className="footer-link" href="/projects">Projects</a></li>
            <li><a className="footer-link" href="/about">About</a></li>
            <li><a className="footer-link" href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-white mb-3">Contact</h4>
          <p className="text-cream/80">Pune, Maharashtra, India</p>
          <p className="text-cream/80 mt-1">Phone / WhatsApp: +91-XXXXXXXXXX</p>
          <p className="text-cream/80 mt-1">Email: hello@spacicalinteriors.com</p>
        </div>
      </div>

      <div className="text-center text-cream/60 text-sm mt-10">
        © {new Date().getFullYear()} Spacical Interiors. All rights reserved.
      </div>
    </footer>
  );
}
