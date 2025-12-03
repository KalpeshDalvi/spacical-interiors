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
          className="absolute inset-0 w-full h-full object-cover brightness-[0.85]"
        >
          <source src="/images/hero.mp4" type="video/mp4" />
        </video>

        {/* Modern Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-brandText/30 via-cream/50 to-cream" />
        
        {/* Decorative Element */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-brand/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-40">

          <motion.p
            className="tracking-[0.3em] text-brandDark font-bold text-sm mb-4 uppercase drop-shadow-lg bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Pune • Homes • Workspaces
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl font-heading text-brandText leading-tight mb-6"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Beautiful interiors, <br />
            <span className="text-brand">designed around you.</span>
          </motion.h1>

          <motion.p
            className="max-w-xl text-subtleText mb-10 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9 }}
          >
            Transforming everyday spaces into functional, stylish and beautifully 
            finished homes—crafted to your personality and lifestyle.
          </motion.p>

          {/* Hero Buttons */}
          <motion.div 
            className="flex flex-wrap gap-4 mt-6"
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
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-heading text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="section-subheading text-center mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            End-to-end interior solutions for homes, offices, and commercial spaces.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {SERVICE_DATA.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="card group cursor-pointer"
            >
              <div className="overflow-hidden rounded-2xl mb-6">
                <Image
                  src={service.image}
                  width={500}
                  height={350}
                  alt={service.title}
                  className="rounded-2xl transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-heading font-semibold text-brand mb-3 group-hover:text-brandAccent transition-colors">
                {service.title}
              </h3>
              <p className="card-text">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-32 px-6 max-w-6xl mx-auto bg-gradient-to-b from-cream to-white rounded-3xl">
        <motion.h2 
          className="section-heading text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Why Choose Spacical Interiors?
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-8">
          {WHY_US.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="card text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-brand to-brandAccent rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                <span className="text-2xl text-white">✦</span>
              </div>
              <h3 className="text-lg font-heading text-brand mb-3 group-hover:text-brandAccent transition-colors">
                {item.title}
              </h3>
              <p className="card-text text-xs">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= ABOUT US ================= */}
      <section className="py-32 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="space-y-6"
        >
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-brand to-brandAccent rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <Image
              src="/images/about-main.jpg"
              width={700}
              height={550}
              alt="Interior"
              className="relative rounded-3xl shadow-2xl"
            />
          </div>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative group"
          >
            <Image
              src="/images/about-2.jpg"
              width={650}
              height={400}
              alt="Design"
              className="rounded-3xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative group"
          >
            <Image
              src="/images/about-3.jpg"
              width={650}
              height={400}
              alt="Decor"
              className="rounded-3xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h2 className="section-heading">About Us</h2>
            <p className="text-subtleText mb-8 leading-relaxed">
              We create functional, beautiful and timeless spaces tailored uniquely to you. 
              Our passion lies in transforming ordinary rooms into extraordinary experiences.
            </p>
            <Link href="/about" className="btn-primary inline-flex">
              Learn More About Us
            </Link>
          </motion.div>

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
