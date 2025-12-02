import Section from "@/components/Section";

export default function ContactPage() {
  return (
    <>
      <Section background="light">
        <div className="max-w-3xl">
          <h1 className="section-heading">Start your project</h1>
          <p className="section-subheading">
            Share a few details about your home or workspace and we&apos;ll get
            back within one business day to schedule a quick call or site
            visit.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <form
            className="space-y-4"
            action="#"
            method="post"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-navy mb-1">
                  Full name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-navy focus:ring-1 focus:ring-navy/40"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-1">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-navy focus:ring-1 focus:ring-navy/40"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-navy mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-navy focus:ring-1 focus:ring-navy/40"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-1">
                  City / Area
                </label>
                <input
                  type="text"
                  name="city"
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-navy focus:ring-1 focus:ring-navy/40"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-navy mb-1">
                Project type
              </label>
              <select
                name="projectType"
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-navy focus:ring-1 focus:ring-navy/40"
              >
                <option>New home interiors</option>
                <option>Home renovation</option>
                <option>Office / clinic / commercial</option>
                <option>Modular kitchen / wardrobes only</option>
                <option>3D design & planning only</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-navy mb-1">
                Approximate budget
              </label>
              <select
                name="budget"
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-navy focus:ring-1 focus:ring-navy/40"
              >
                <option>Not sure yet</option>
                <option>₹5L – ₹10L</option>
                <option>₹10L – ₹20L</option>
                <option>₹20L – ₹35L</option>
                <option>₹35L+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-navy mb-1">
                Tell us a bit about your space
              </label>
              <textarea
                name="message"
                rows={4}
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-navy focus:ring-1 focus:ring-navy/40"
                placeholder="E.g. 3BHK in Kharadi, possession in August, need full interiors including modular kitchen…"
              />
            </div>
            <button type="submit" className="btn-primary">
              Submit enquiry
            </button>
            <p className="text-xs text-slateText/70">
              This form is currently set up as a front-end-only demo. Ask your
              developer or hosting provider to connect it to an email or CRM
              service (e.g. Formspree, Getform or a custom API).
            </p>
          </form>

          <div className="space-y-4 text-sm text-slateText leading-relaxed">
            <h2 className="font-heading text-xl text-navy mb-2">
              Prefer WhatsApp?
            </h2>
            <p>
              You can send us your floor plan and a few reference photos on
              WhatsApp and we&apos;ll suggest the best way to take things
              forward.
            </p>
            <p className="font-semibold text-navy">
              WhatsApp: +91-XXXXXXXXXX
            </p>
            <div className="h-px bg-slate-200 my-4" />
            <h2 className="font-heading text-xl text-navy mb-2">
              Typical engagement timelines
            </h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>Concept & layout options: 1–2 weeks</li>
              <li>Detailed design & 3D views: 2–4 weeks</li>
              <li>
                Execution: 6–12 weeks depending on scope, size and site
                readiness
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
