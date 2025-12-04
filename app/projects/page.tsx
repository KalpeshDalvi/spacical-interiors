"use client";

import Section from "@/components/Section";
import ProjectCard, { Project } from "@/components/ProjectCard";
import { motion } from "framer-motion";

const projects: Project[] = [
  {
    title: "Calm & Cosy 2BHK Home",
    location: "Wakad, Pune",
    type: "Residence",
    description:
      "Soft neutrals, light woods and layered lighting for a young couple's first home, designed to feel airy yet intimate.",
    image: "/images/cosy-2bhk.jpg",
  },
  {
    title: "Contemporary 4BHK Apartment",
    location: "Kalyani Nagar, Pune",
    type: "Residence",
    description:
      "A spacious family home with distinct zones, statement lighting and ample storage that stays hidden in plain sight.",
    image: "/images/4bhk-modern.jpg",
  },
  {
    title: "Open-plan Kitchen & Dining",
    location: "Viman Nagar, Pune",
    type: "Kitchen",
    description:
      "Wall demolished to create a social cooking and dining space with an island, tall storage and warm finishes.",
    image: "/images/open-plan-kitchen.jpg",
  },
  {
    title: "Minimal Workspace for Startup",
    location: "Baner, Pune",
    type: "Office",
    description:
      "Light-filled work zones, acoustic partitions and greenery for a 20-member tech team.",
    image: "/images/startup-workspace.jpg",
  },
  {
    title: "Boutique Dental Clinic",
    location: "Kothrud, Pune",
    type: "Clinic",
    description:
      "Clean, calming interiors with smart patient flow, storage and brand elements subtly integrated throughout.",
    image: "/images/dental-clinic.jpg",
  },
];

export default function ProjectsPage() {
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
              <span className="text-sm font-medium text-brand">Portfolio</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-heading text-brandText mb-4">
              Featured <span className="text-brand">Projects</span>
            </h1>
            <p className="text-sm md:text-base text-subtleText max-w-2xl mx-auto leading-relaxed">
              A selection of homes and workspaces we&apos;ve recently designed
              and executed. Each project is tailored to the client&apos;s way of
              living or working.
            </p>
          </motion.div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {projects.map((p, index) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
