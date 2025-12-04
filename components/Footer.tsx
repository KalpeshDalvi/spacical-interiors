export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-brandDeep to-brandText text-cream py-16 relative overflow-hidden">
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brandAccent/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* Brand */}
        <div>
          <h3 className="font-heading text-3xl mb-4 text-white">Spacical Interiors</h3>
          <p className="text-cream/90 leading-relaxed text-sm">
            Interior design studio crafting warm, modern and timeless spaces 
            for homes and workplaces in Pune and beyond.
          </p>
          <div className="mt-6 flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand flex items-center justify-center transition-all duration-300 hover:scale-110">
              <span className="text-white text-sm">𝕏</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand flex items-center justify-center transition-all duration-300 hover:scale-110">
              <span className="text-white text-sm">in</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand flex items-center justify-center transition-all duration-300 hover:scale-110">
              <span className="text-white text-sm">IG</span>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-white mb-4 text-lg">Quick Links</h4>
          <ul className="space-y-3">
            <li>
              <a className="text-cream/80 hover:text-brand transition-colors duration-300 text-sm flex items-center gap-2 group" href="/services">
                <span className="text-brand group-hover:translate-x-1 transition-transform">→</span> Services
              </a>
            </li>
            <li>
              <a className="text-cream/80 hover:text-brand transition-colors duration-300 text-sm flex items-center gap-2 group" href="/projects">
                <span className="text-brand group-hover:translate-x-1 transition-transform">→</span> Projects
              </a>
            </li>
            <li>
              <a className="text-cream/80 hover:text-brand transition-colors duration-300 text-sm flex items-center gap-2 group" href="/about">
                <span className="text-brand group-hover:translate-x-1 transition-transform">→</span> About
              </a>
            </li>
            <li>
              <a className="text-cream/80 hover:text-brand transition-colors duration-300 text-sm flex items-center gap-2 group" href="/contact">
                <span className="text-brand group-hover:translate-x-1 transition-transform">→</span> Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-white mb-4 text-lg">Contact</h4>
          <div className="space-y-3 text-sm">
            <p className="text-cream/90 flex items-start gap-2">
              <span className="text-brand">📍</span> Kharadi, Pune, Maharashtra, India
            </p>
            <p className="text-cream/90 flex items-start gap-2">
              <span className="text-brand">📱</span> Phone / WhatsApp: +91-9730831093
            </p>
            <p className="text-cream/90 flex items-start gap-2">
              <span className="text-brand">✉️</span> info@spacicalinteriors.com
            </p>
          </div>
        </div>
      </div>

      <div className="relative text-center text-cream/60 text-sm mt-12 pt-8 border-t border-cream/10">
        © {new Date().getFullYear()} Spacical Interiors. All rights reserved. Crafted with passion.
      </div>
    </footer>
  );
}







