import Section from "@/components/Section";
import ProjectCard, { Project } from "@/components/ProjectCard";

const projects: Project[] = [
  {
    title: "Calm & Cosy 2BHK Home",
    location: "Wakad, Pune",
    type: "Residence",
    description:
      "Soft neutrals, light woods and layered lighting for a young couple's first home, designed to feel airy yet intimate.",
  },
  {
    title: "Contemporary 4BHK Apartment",
    location: "Kalyani Nagar, Pune",
    type: "Residence",
    description:
      "A spacious family home with distinct zones, statement lighting and ample storage that stays hidden in plain sight.",
  },
  {
    title: "Open-plan Kitchen & Dining",
    location: "Viman Nagar, Pune",
    type: "Kitchen",
    description:
      "Wall demolished to create a social cooking and dining space with an island, tall storage and warm finishes.",
  },
  {
    title: "Minimal Workspace for Startup",
    location: "Baner, Pune",
    type: "Office",
    description:
      "Light-filled work zones, acoustic partitions and greenery for a 20-member tech team.",
  },
  {
    title: "Boutique Dental Clinic",
    location: "Kothrud, Pune",
    type: "Clinic",
    description:
      "Clean, calming interiors with smart patient flow, storage and brand elements subtly integrated throughout.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Section background="light">
        <div className="max-w-3xl">
          <h1 className="section-heading">Featured projects</h1>
          <p className="section-subheading">
            A selection of homes and workspaces we&apos;ve recently designed
            and executed. Each project is tailored to the client&apos;s way of
            living or working.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </Section>
    </>
  );
}
