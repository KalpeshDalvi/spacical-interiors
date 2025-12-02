import Link from "next/link";
import Section from "@/components/Section";
import ServiceCard, { Service } from "@/components/ServiceCard";
import ProjectCard, { Project } from "@/components/ProjectCard";
import TestimonialCard, { Testimonial } from "@/components/TestimonialCard";

const services: Service[] = [
  {
    title: "Residential Interior Design",
    slug: "residential-interiors",
    description:
      "Thoughtfully planned homes that balance comfort, style and everyday practicality—from living rooms and bedrooms to kitchens and balconies.",
  },
  {
    title: "Commercial & Office Interiors",
    slug: "commercial-interiors",
    description:
      "Modern workplaces, clinics and retail spaces designed to enhance productivity, customer experience and your brand identity.",
  },
  {
    title: "Modular Kitchens & Custom Furniture",
    slug: "modular-kitchens",
    description:
      "Precision-built modular kitchens, wardrobes and bespoke furniture crafted for durability, storage and everyday ease.",
  },
  {
    title: "3D Visualization & Design Planning",
    slug: "design-planning",
    description:
      "High-end 3D renders and detailed drawings so you can visualise your space and make confident design decisions before execution.",
  },
];

const projects: Project[] = [
  {
    title: "Warm Modern 3BHK Apartment",
    location: "Kharadi, Pune",
    type: "Residence",
    description:
      "A cosy, light-filled family home with a neutral palette, layered textures and smart storage solutions in every room.",
  },
  {
    title: "Minimal Workspace for Tech Startup",
    location: "Baner, Pune",
    type: "Office",
    description:
      "Clean, collaborative work zones with acoustic panelling, writeable walls and greenery for a young, energetic team.",
  },
  {
    title: "Open Kitchen & Dining Makeover",
    location: "Viman Nagar, Pune",
    type: "Kitchen",
    description:
      "An old closed kitchen opened into a bright, social cooking and dining space with an island, tall storage and warm finishes.",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Rahul & Neha Kulkarni",
    location: "Magarpatta, Pune",
    quote:
      "The team understood exactly how we live as a family and translated that into a home that feels warm, organised and truly ours.",
  },
  {
    name: "Dr. Anjali Patil",
    location: "Kothrud, Pune",
    quote:
      "Our clinic makeover was completed on time with minimal disruption. Patients constantly compliment the calming interiors.",
  },
  {
    name: "Sanjay Mehta",
    location: "Baner, Pune",
    quote:
      "They handled everything end-to-end—from design and materials to site coordination. The process was transparent and stress-free.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full bg-slate-900 text-white">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[url('/images/hero-living-room.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 to-black/60" />
        </div>
        <div className="relative section-inner py-28 lg:py-32 flex flex-col lg:flex-row items-center gap-10">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.2em] text-white/70 mb-3">
              Pune • Homes • Workspaces
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading leading-tight mb-4">
              Beautiful interiors,
              <br className="hidden sm:block" /> designed around you.
            </h1>
            <p className="text-base sm:text-lg text-white/80 mb-8">
              Spacical Interiors transforms everyday spaces into functional,
              stylish and beautifully finished homes and workplaces—tailored to
              your lifestyle, budget and taste.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-primary bg-white text-navy">
                Get a Free Quote
              </Link>
              <Link
                href="/projects"
                className="btn-secondary border-white text-white hover:bg-white hover:text-navy"
              >
                View Projects
              </Link>
            </div>
            <p className="mt-4 text-xs text-white/70">
              Full-service design • Modular solutions • Renovations
            </p>
          </div>
          <div className="hidden lg:block flex-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[4/3] rounded-3xl bg-[url('/images/hero-detail-1.jpg')] bg-cover bg-center shadow-card" />
              <div className="aspect-[4/3] rounded-3xl bg-[url('/images/hero-detail-2.jpg')] bg-cover bg-center shadow-card translate-y-6" />
              <div className="aspect-[4/3] rounded-3xl bg-[url('/images/hero-detail-3.jpg')] bg-cover bg-center shadow-card -translate-y-6" />
              <div className="aspect-[4/3] rounded-3xl bg-[url('/images/hero-detail-4.jpg')] bg-cover bg-center shadow-card" />
            </div>
          </div>
        </div>
      </section>

      {/* Who we design for */}
      <Section background="light">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Homeowners & Families",
            "Offices & Clinics",
            "Retail & Hospitality",
            "Budget-Friendly Makeovers",
          ].map((label) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm"
            >
              <div className="h-8 w-8 rounded-full bg-navy/10 flex items-center justify-center">
                <span className="h-2 w-2 rounded-full bg-navy" />
              </div>
              <p className="text-sm font-medium text-slateText">{label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section
        id="services"
        heading="Interior design services for every kind of space"
        subheading="From turnkey home interiors to focused renovations and 3D design support, we offer flexible solutions based on how involved you want us to be."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      {/* Why choose us */}
      <Section
        background="light"
        heading="Why choose Spacical Interiors"
        subheading="We combine thoughtful design, meticulous detailing and transparent processes to deliver spaces that feel good today and age beautifully over time."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "End-to-end ownership",
              body: "Single team for design, materials and execution with stage-wise updates and clear timelines.",
            },
            {
              title: "Smart space planning",
              body: "Layouts that maximise storage, movement and natural light without making your home feel cramped.",
            },
            {
              title: "Reliable quality",
              body: "Trusted vendors, branded hardware and strict quality checks at every stage of work.",
            },
            {
              title: "Clear & transparent",
              body: "Well-defined scopes, BOQs and no hidden surprises—so you always know what you're paying for.",
            },
          ].map((item) => (
            <div key={item.title} className="card">
              <h3 className="font-heading text-lg text-navy mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slateText/90 leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section
        id="projects"
        heading="Featured projects"
        subheading="A glimpse of some of the homes and workspaces we’ve recently designed and executed."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <div className="mt-8">
          <Link href="/projects" className="btn-secondary">
            View all projects
          </Link>
        </div>
      </Section>

      {/* About preview */}
      <Section background="light">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[4/3] rounded-3xl bg-[url('/images/about-1.jpg')] bg-cover bg-center shadow-card" />
            <div className="aspect-[4/3] rounded-3xl bg-[url('/images/about-2.jpg')] bg-cover bg-center shadow-card translate-y-6" />
            <div className="aspect-[4/3] rounded-3xl bg-[url('/images/about-3.jpg')] bg-cover bg-center shadow-card -translate-y-6" />
            <div className="aspect-[4/3] rounded-3xl bg-[url('/images/about-4.jpg')] bg-cover bg-center shadow-card" />
          </div>
          <div>
            <h2 className="section-heading">About Spacical Interiors</h2>
            <p className="text-base text-slateText leading-relaxed mb-4">
              Spacical Interiors is a Pune-based interior design studio focused
              on creating warm, modern spaces that work hard in everyday life.
              We blend aesthetics with practicality so that every room not only
              looks good but functions beautifully.
            </p>
            <p className="text-base text-slateText leading-relaxed mb-4">
              Whether you&apos;re designing a new home, renovating an existing
              one or rethinking your workspace, our team can support you from
              first concept and budgeting through material selection, 3D design
              and on-site execution.
            </p>
            <Link href="/about" className="btn-secondary">
              Learn more about us
            </Link>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section
        id="testimonials"
        heading="What our clients say"
        background="light"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-heading">
            Ready to transform your home or workspace?
          </h2>
          <p className="section-subheading mx-auto mb-6">
            Share your floor plan, schedule a site visit or simply tell us how
            you&apos;d like your space to feel—we&apos;ll guide you from there.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Get a Free Design Consultation
            </Link>
            <Link href="/services" className="btn-secondary">
              Explore services
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
