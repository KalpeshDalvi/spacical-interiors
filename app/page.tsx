"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-[#020817] text-white overflow-hidden">

     {/* ================= HERO SECTION ================= */}
<section className="relative h-[90vh] w-full overflow-hidden">

  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover brightness-[0.95]"
  >
    <source src="/images/hero.mp4" type="video/mp4" />
  </video>

  {/* Soft Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/70" />

  {/* Content */}
  <div className="relative z-10 max-w-6xl mx-auto px-6 pt-48">
    
    <motion.p
      className="tracking-[0.25em] text-blue-200 text-xs mb-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      PUNE • HOMES • WORKSPACES
    </motion.p>

    <motion.h1
      className="text-5xl md:text-6xl font-serif leading-tight mb-6 text-white drop-shadow-xl"
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      Beautiful interiors, <br />
      designed around you.
    </motion.h1>

    <motion.p
      className="max-w-xl text-blue-100 mb-8 text-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
    >
      Transforming everyday spaces into functional, stylish and beautifully 
      finished homes and offices—crafted to your personality and lifestyle.
    </motion.p>

    {/* Buttons */}
    <motion.div 
      className="flex gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <a className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition font-medium">
        Get a Free Quote
      </a>

      <a className="px-6 py-3 rounded-full border border-blue-300 text-blue-200 hover:bg-white/10 transition font-medium">
        View Projects
      </a>
    </motion.div>

    {/* TRUST BADGES — New */}
    <motion.div
      className="flex flex-wrap gap-8 mt-10 text-white/70 text-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.3 }}
    >
      <p>⭐ 4.9/5 Customer Rating</p>
      <p>🏠 50+ Homes Designed</p>
      <p>🛋️ Premium Quality & Finishes</p>
    </motion.div>

  </div>
</section>


      {/* ================= SERVICES ================= */}
      <section id="services" className="py-28 px-6 max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-serif mb-4">Our Services</h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
          End-to-end interior solutions for homes, offices, commercial spaces & more.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {SERVICE_DATA.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-[#0b1222] p-8 rounded-xl border border-white/5 hover:border-white/20 transition"
            >
              <Image
                src={service.image}
                width={500}
                height={350}
                alt={service.title}
                className="rounded-lg mb-6"
              />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-28 px-6 max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-serif mb-12">Why Choose Spacical Interiors?</h2>

        <div className="grid md:grid-cols-4 gap-10">
          {WHY_US.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-[#0b1222] p-6 rounded-xl border border-white/5"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= ABOUT US ================= */}
<section className="py-28 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

  {/* LEFT IMAGE (Main Large) */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.9 }}
  >
    <Image
      src="/images/about-main.jpg"
      width={700}
      height={550}
      alt="Luxury Living Room Interior"
      className="rounded-xl shadow-lg object-cover w-full"
    />
  </motion.div>

  {/* RIGHT IMAGE STACK + TEXT */}
  <div className="space-y-8">

    {/* Top-right image */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay: 0.2 }}
    >
      <Image
        src="/images/about-2.jpg"
        width={650}
        height={400}
        alt="Modern Interior Design"
        className="rounded-xl shadow-lg object-cover w-full"
      />
    </motion.div>

    {/* Bottom-right image */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay: 0.35 }}
    >
      <Image
        src="/images/about-3.jpg"
        width={650}
        height={400}
        alt="Interior Decor Inspiration"
        className="rounded-xl shadow-lg object-cover w-full"
      />
    </motion.div>

    {/* TEXT CONTENT */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="mt-4"
    >
      <h2 className="text-4xl font-serif mb-6">About Us</h2>

      <p className="text-gray-300 mb-4 leading-relaxed">
        We transform everyday spaces into stylish, functional and beautifully
        crafted environments.
      </p>

      <p className="text-gray-400 mb-8 leading-relaxed">
        With premium-quality execution, innovative concepts, and timeless
        design, every space we create feels personal, elegant, and comfortable.
      </p>

      <a className="px-6 py-3 inline-block rounded-full bg-blue-600 hover:bg-blue-700 transition">
        Learn More
      </a>
    </motion.div>

  </div>
</section>


      {/* ================= TESTIMONIALS ================= */}
      <section className="py-28 px-6 max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-serif mb-2">
          What Our Clients Say
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Real experiences from homeowners & businesses.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-[#0b1222] p-6 rounded-xl border border-white/5"
            >
              <p className="text-gray-300 mb-4 italic">“{t.quote}”</p>
              <h4 className="font-semibold">{t.name}</h4>
              <p className="text-gray-500 text-sm">{t.location}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-28 bg-gradient-to-r from-blue-700/20 to-blue-950/20 text-center">
        <h2 className="text-4xl font-serif mb-6">Ready to Transform Your Space?</h2>
        <p className="text-gray-300 mb-8">
          Let’s build something beautiful, functional and timeless together.
        </p>

        <a className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 transition text-lg font-medium">
          Book Your Consultation
        </a>
      </section>

    </main>
  );
}


/* --------------------------
   DATA SECTION
--------------------------- */

const SERVICE_DATA = [
  {
    title: "Residential Interior Design",
    desc: "Modern layouts, premium materials & customized styling for your home.",
    image: "/images/residential.jpg"
  },
  {
    title: "Commercial & Office Interiors",
    desc: "Smart branding-forward office designs that enhance productivity.",
    image: "/images/commercial.jpg"
  },
  {
    title: "Modular Kitchens & Furniture",
    desc: "Precision-built modular solutions for durability and visual appeal.",
    image: "/images/modular-kitchen.jpg"
  }
];

const WHY_US = [
  { title: "End-to-End Execution", desc: "From planning to completion—handled seamlessly." },
  { title: "Premium Quality", desc: "Top-grade materials & long-lasting finishes." },
  { title: "Creative Expertise", desc: "A skilled team crafting unique aesthetic spaces." },
  { title: "Personalized Solutions", desc: "Your taste, needs & lifestyle shape the design." }
];

const TESTIMONIALS = [
  { name: "Rohan Joshi", location: "Pune", quote: "Absolutely loved their work!" },
  { name: "Priya Menon", location: "Mumbai", quote: "Elegant design & smooth execution." },
  { name: "Arjun Patel", location: "Hyderabad", quote: "Highly professional & detail-oriented." }
];
