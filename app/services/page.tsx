import Section from "@/components/Section";

const serviceBlocks = [
  {
    id: "residential-interiors",
    title: "Residential interior design",
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
      <Section background="light">
        <div className="max-w-3xl">
          <h1 className="section-heading">Interior design services</h1>
          <p className="section-subheading">
            Flexible engagement models—from turnkey design-and-build to design
            consultancy—so you can choose how involved you want us to be in your
            project.
          </p>
        </div>
      </Section>

      <Section>
        <div className="space-y-16">
          {serviceBlocks.map((block) => (
            <section key={block.id} id={block.id} className="scroll-mt-24">
              <h2 className="font-heading text-2xl sm:text-3xl text-navy mb-4">
                {block.title}
              </h2>
              {block.body.map((p) => (
                <p
                  key={p}
                  className="text-base text-slateText leading-relaxed mb-3"
                >
                  {p}
                </p>
              ))}
              <ul className="mt-3 grid gap-2 text-sm text-slateText list-disc list-inside md:grid-cols-2">
                {block.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Section>

      <Section background="light">
        <div className="max-w-3xl">
          <h2 className="section-heading">Our process</h2>
          <ol className="space-y-4 text-sm text-slateText leading-relaxed">
            <li>
              <span className="font-semibold text-navy">1. Discover</span> –
              We understand your lifestyle, requirements, timelines and budget.
              You share references, floor plans and site details.
            </li>
            <li>
              <span className="font-semibold text-navy">2. Design</span> – We
              create layouts, concepts and 3D views, refining them with your
              feedback until everything feels right.
            </li>
            <li>
              <span className="font-semibold text-navy">3. Decide</span> – We
              lock materials, finishes and BOQs, aligning on commercial terms
              and timelines.
            </li>
            <li>
              <span className="font-semibold text-navy">4. Deliver</span> – We
              coordinate with vendors and contractors to bring the design to
              life and style your final space.
            </li>
          </ol>
        </div>
      </Section>
    </>
  );
}
