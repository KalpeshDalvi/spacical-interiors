import Section from "@/components/Section";

export default function AboutPage() {
  return (
    <>
      <Section background="light">
        <div className="max-w-3xl">
          <h1 className="section-heading">About Spacical Interiors</h1>
          <p className="section-subheading">
            We are an interior design studio focused on creating warm, modern
            spaces that feel good to live and work in every day—not just on
            handover day.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div className="space-y-4 text-base text-slateText leading-relaxed">
            <p>
              Based in Pune, Spacical Interiors works across residential and
              commercial projects—from compact apartments and villas to clinics,
              offices and boutique retail spaces.
            </p>
            <p>
              Our approach combines thoughtful space planning, honest
              materials and meticulous detailing. We listen carefully to how you
              live or work, then craft interiors that support that lifestyle
              while reflecting your personality.
            </p>
            <p>
              Instead of pushing a single “signature style”, we focus on
              timeless, functional design layered with accents that feel
              uniquely yours. That might mean a calm, neutral apartment; a
              playful kids&apos; room; or a bold, branded reception area.
            </p>
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="font-heading text-xl text-navy mb-2">
                What we believe in
              </h2>
              <ul className="space-y-2 text-sm text-slateText leading-relaxed list-disc list-inside">
                <li>Design should make everyday life easier, not complicated.</li>
                <li>Beautiful spaces don&apos;t have to be wasteful or fragile.</li>
                <li>
                  Clear communication and transparency are as important as
                  creativity.
                </li>
                <li>Small details add up to a big difference over time.</li>
              </ul>
            </div>
            <div>
              <h2 className="font-heading text-xl text-navy mb-2">
                How we work with you
              </h2>
              <ul className="space-y-2 text-sm text-slateText leading-relaxed list-disc list-inside">
                <li>Honest conversations about budget and priorities.</li>
                <li>
                  Collaborative design process with regular checkpoints and
                  feedback.
                </li>
                <li>
                  Stage-wise documentation so you know exactly what is being
                  built.
                </li>
                <li>
                  Complete handover with styling tips and maintenance guidance.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
