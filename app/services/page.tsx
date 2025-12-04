"use client";

import Section from "@/components/Section";
import { motion } from "framer-motion";

const serviceBlocks = [
  {
    id: "residential-interiors",
    title: "Residential interior design",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    body: [
      "End-to-end design for apartments, villas and independent homes. From space planning and mood boards to 3D design, material selection and execution support.",
      "Ideal if you are moving into a new home or fully renovating an existing one.",
    ],
    list: [
      "Living, dining, bedroom and study designs",
      "Modular and custom furniture",
      "Lighting, false ceiling and wall treatments",
      "Soft furnishings & styling guidance",
    ],
  },
  {
    id: "commercial-interiors",
    title: "Commercial & office interiors",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    body: [
      "Functional yet warm environments for offices, clinics, studios, boutiques and cafes.",
      "Layouts that respect brand guidelines, workflows and regulatory requirements.",
    ],
    list: [
      "Zoning and circulation planning",
      "Workstations, meeting rooms & cabins",
      "Reception and waiting areas",
      "Storage, signage and brand accents",
    ],
  },
  {
    id: "modular-kitchens",
    title: "Modular kitchens & wardrobes",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    body: [
      "High-efficiency kitchens and wardrobes tailored to your cooking style, family size and storage needs.",
    ],
    list: [
      "L-Shape, U-Shape, island and parallel kitchens",
      "Tall units, corner solutions and internal accessories",
      "Branded hardware and finishes",
      "On-site measurements and installation coordination",
    ],
  },
  {
    id: "design-planning",
    title: "3D design & renovation planning",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    body: [
      "Perfect if you already have contractors but need strong design direction and clear drawings.",
    ],
    list: [
      "Concept & mood boards",
      "2D layouts and working drawings",
      "3D views and material palettes",
      "Site review visits (as required)",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Header */}
      <Section background="light">
        <div className="relative max-w-4xl mx-auto text-center py-8">
          <div className="absolute top-0 left-20 w-24 h-24 bg-brand/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-20 w-32 h-32 bg-brandAccent/10 rounded-full blur-3xl"></div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand/10 rounded-full mb-4">
              <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span className="text-sm font-medium text-brand">Our Services</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-heading text-brandText mb-4">
              Interior Design <span className="text-brand">Services</span>
            </h1>
            <p className="text-sm md:text-base text-subtleText max-w-2xl mx-auto leading-relaxed">
              Flexible engagement models—from turnkey design-and-build to design
              consultancy—so you can choose how involved you want us to be in your
              project.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Services Grid */}
      <Section>
        <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
          {serviceBlocks.map((block, index) => (
            <motion.div
              key={block.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative card p-8 hover:shadow-cardHover border border-brand/10"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand/10 to-brandAccent/10 text-brand mb-6 group-hover:scale-110 transition-transform duration-300">
                {block.icon}
              </div>
              
              {/* Content */}
              <h2 className="font-heading text-2xl text-brandText mb-4 group-hover:text-brand transition-colors">
                {block.title}
              </h2>
              
              <div className="space-y-3 mb-6">
                {block.body.map((p, i) => (
                  <p key={i} className="text-sm text-subtleText leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
              
              {/* Features List */}
              <ul className="space-y-2">
                {block.list.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-subtleText">
                    <svg className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              {/* Decorative element */}
              <div className="absolute top-8 right-8 w-20 h-20 bg-gradient-to-br from-brand/5 to-brandAccent/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section background="light">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-heading text-brandText mb-3">Our Process</h2>
            <p className="text-sm text-subtleText">Five simple steps to bring your vision to life</p>
          </motion.div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {[
              {
                step: "01",
                title: "Discover",
                description: "We understand your lifestyle, requirements, timelines and budget. You share references, floor plans and site details.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                )
              },
              {
                step: "02",
                title: "Design",
                description: "We create layouts, concepts and 3D views, refining them with your feedback until everything feels right.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                )
              },
              {
                step: "03",
                title: "Decide",
                description: "We lock materials, finishes and BOQs, aligning on commercial terms and timelines.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                step: "04",
                title: "Deliver",
                description: "We coordinate with vendors and contractors to bring the design to life and style your final space.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                )
              },
              {
                step: "05",
                title: "Handover",
                description: "Your space is ready! We present your completed home with care instructions and celebrate this milestone with you.",
                quote: "A house is made of bricks and beams. A home is made of hopes and dreams.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                )
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative p-6 rounded-2xl bg-white border border-brand/10 hover:border-brand/30 transition-all hover:shadow-lg group ${
                  process.step === "05" ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl ${
                    process.step === "05" 
                      ? "bg-gradient-to-br from-green-500 to-emerald-600" 
                      : "bg-gradient-to-br from-brand to-brandAccent"
                  } text-white flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    {process.icon}
                  </div>
                  <span className="text-3xl font-bold text-brand/20">{process.step}</span>
                </div>
                <h3 className="font-heading text-lg text-brandText mb-2">{process.title}</h3>
                <p className="text-xs text-subtleText leading-relaxed">{process.description}</p>
                
                {process.quote && (
                  <div className="mt-4 pt-4 border-t border-brand/10">
                    <p className="text-xs italic text-brand/80 leading-relaxed">
                      &ldquo;{process.quote}&rdquo;
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
