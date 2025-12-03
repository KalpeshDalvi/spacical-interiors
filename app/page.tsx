"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-cream text-brandText overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[90vh] w-full overflow-hidden">

        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-[0.9]"
        >
          <source src="/images/hero.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cream/60 to-cream" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-40">

          <motion.p
            className="tracking-[0.25em] text-brandDark/80 text-xs mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            PUNE • HOMES • WORKSPACES
          </motion.p>

          <motion.h1
            className="text-5xl md:text-6xl font-serif text-brand drop-shadow mb-6"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Beautiful interiors, <br />
            designed around you.
          </motion.h1>

          <motion.p
            className="max-w-xl text-subtleText mb-8 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9 }}
          >
            Transforming everyday spaces into functional, stylish and beautifully 
            finished homes—crafted to your personality and lifestyle.
          </motion.p>

          {/* Hero Buttons */}
          <motion.div 
            className="flex gap-4 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Link href="/contact" className="btn-primary">
              Book Your Consultation
            </Link>

            <Link href="/projects" className="btn-secondary">
              View Projects
            </Link>
          </motion.div>

        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <h2 className="section-heading text-center">Our Services</h2>
        <p className="section-subheading text-center mb-12">
          End-to-end interior solutions for homes, offices, and commercial spaces.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {SERVICE_DATA.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="card"
            >
              <Image
                src={service.image}
                width={500}
                height={350}
                alt={service.title}
                className="rounded-lg mb-6"
              />
              <h3 className="text-xl font-semibold text-brand mb-2">{service.title}</h3>
              <p className="card-text">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-28 px-6 max-w-6xl mx-auto">
        <h2 className="section-heading text-center">Why Choose Spacical Interiors?</h2>

        <div className="grid md:grid-cols-4 gap-10 mt-10">
          {WHY_US.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-xl font-heading text-brand mb-3">
                {item.title}
              </h3>
              <p className="card-text">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= ABOUT US ================= */}
      <section className="py-28 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

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
            alt="Interior"
            className="rounded-xl shadow-lg"
          />
        </motion.div>

        <div className="space-y-10">

          <Image
            src="/images/about-2.jpg"
            width={650}
            height={400}
            alt="Design"
            className="rounded-xl shadow-lg"
          />

          <Image
            src="/images/about-3.jpg"
            width={650}
            height={400}
            alt="Decor"
            className="rounded-xl shadow-lg"
          />

          <div>
            <h2 className="section-heading">About Us</h2>
            <p className="text-subtleText mb-6">
              We create functional, beautiful and timeless spaces tailored uniquely to you.
            </p>
            <Link href="/about" className="btn-primary">Learn More</Link>
          </div>

        </div>
      </section>

    </main>
  );
}

/* DATA */
const SERVICE_DATA = [
  {
    title: "Residential Interior Design",
    desc: "Modern layouts with premium materials and custom styling.",
    image: "/images/residential.jpg",
  },
  {
    title: "Commercial & Office Interiors",
    desc: "Brand-forward office designs that boost productivity.",
    image: "/images/commercial.jpg",
  },
  {
    title: "Modular Kitchens & Furniture",
    desc: "Precision-built modular solutions for durability and style.",
    image: "/images/modular-kitchen.jpg",
  },
];

const WHY_US = [
  { title: "End-to-End Execution", desc: "We manage everything from concept to delivery." },
  { title: "Premium Quality", desc: "We use best-in-class materials and skilled craftsmanship." },
  { title: "Creative Expertise", desc: "Unique aesthetic aligned with your taste." },
  { title: "Personalized Solutions", desc: "Every design is crafted around your lifestyle." },
];
