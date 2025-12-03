"use client";

import Section from "@/components/Section";
import { useState } from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [requestCallback, setRequestCallback] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      city: formData.get("city"),
      projectType: formData.get("projectType"),
      budget: formData.get("budget"),
      message: formData.get("message"),
      requestCallback: requestCallback,
    };

    try {
      // Using Web3Forms - Free email service for static sites
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "1192efe4-4968-4285-99ce-1a64e0af9e1c",
          subject: "🏠 New Project Inquiry - Spacical Interiors",
          from_name: "Spacical Interiors Website",
          replyto: data.email || undefined,
          
          // Auto-reply to customer
          autoresponse: true,
          
          // Formatted message content
          message: `
═══════════════════════════════════════
     NEW INTERIOR DESIGN INQUIRY
═══════════════════════════════════════

📋 CONTACT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 Name:          ${data.name}
📱 Phone:         ${data.phone}
📧 Email:         ${data.email || "Not provided"}
📍 Location:      ${data.city || "Not specified"}

🏗️ PROJECT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 Project Type:  ${data.projectType}
💰 Budget Range:  ${data.budget}
📞 Callback:      ${requestCallback ? "✓ YES - Within 24 hours" : "Not requested"}

💬 PROJECT DESCRIPTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${data.message || "No additional details provided."}

═══════════════════════════════════════
📅 Submitted: ${new Date().toLocaleString('en-IN', { 
  timeZone: 'Asia/Kolkata',
  dateStyle: 'full',
  timeStyle: 'short'
})}
═══════════════════════════════════════
          `.trim(),
        }),
      });

      const result = await response.json();
      
      console.log("Form submission result:", result);
      
      if (result.success) {
        setSubmitStatus("success");
        (e.target as HTMLFormElement).reset();
        setRequestCallback(false);
      } else {
        console.error("Form error:", result);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            onSubmit={handleSubmit}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-brandText mb-1">
                  Full name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full rounded-xl border border-brand/20 px-4 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-brandText mb-1">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full rounded-xl border border-brand/20 px-4 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-brandText mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full rounded-xl border border-brand/20 px-4 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-brandText mb-1">
                  City / Area
                </label>
                <input
                  type="text"
                  name="city"
                  className="w-full rounded-xl border border-brand/20 px-4 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-brandText mb-1">
                Project type
              </label>
              <select
                name="projectType"
                className="w-full rounded-xl border border-brand/20 px-4 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
              >
                <option>New home interiors</option>
                <option>Home renovation</option>
                <option>Office / clinic / commercial</option>
                <option>Modular kitchen / wardrobes only</option>
                <option>3D design & planning only</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-brandText mb-1">
                Approximate budget
              </label>
              <select
                name="budget"
                className="w-full rounded-xl border border-brand/20 px-4 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
              >
                <option>Not sure yet</option>
                <option>₹5L – ₹10L</option>
                <option>₹10L – ₹20L</option>
                <option>₹20L – ₹35L</option>
                <option>₹35L+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-brandText mb-1">
                Tell us a bit about your space
              </label>
              <textarea
                name="message"
                rows={4}
                className="w-full rounded-xl border border-brand/20 px-4 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
                placeholder="E.g. 3BHK in Kharadi, possession in August, need full interiors including modular kitchen…"
              />
            </div>
            
            {/* Callback Toggle */}
            <div className="flex items-center gap-3 p-4 bg-brand/5 rounded-xl border border-brand/20">
              <input
                type="checkbox"
                id="callback"
                checked={requestCallback}
                onChange={(e) => setRequestCallback(e.target.checked)}
                className="w-5 h-5 text-brand border-brand/30 rounded focus:ring-2 focus:ring-brand/20 cursor-pointer"
              />
              <label htmlFor="callback" className="text-sm font-medium text-brandText cursor-pointer">
                📞 Request a callback within 24 hours
              </label>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Submit enquiry"}
            </button>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                <p className="text-sm text-green-800 font-medium">
                  ✓ Thank you! We'll get back to you within 1 business day.
                </p>
              </div>
            )}
            
            {submitStatus === "error" && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                <p className="text-sm text-red-800 font-medium">
                  ✗ Something went wrong. Please try again or contact us via WhatsApp.
                </p>
              </div>
            )}

            <p className="text-xs text-subtleText">
              To enable email functionality: Sign up at{" "}
              <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">
                web3forms.com
              </a>
              {" "}(free), get your access key, and replace YOUR_WEB3FORMS_ACCESS_KEY in the code.
            </p>
          </form>

          <div className="space-y-4 text-sm text-subtleText leading-relaxed">
            <h2 className="font-heading text-xl text-brandText mb-2">
              Prefer WhatsApp?
            </h2>
            <p>
              You can send us your floor plan and a few reference photos on
              WhatsApp and we&apos;ll suggest the best way to take things
              forward.
            </p>
            <p className="font-semibold text-brandText">
              WhatsApp: +91-XXXXXXXXXX
            </p>
            <div className="h-px bg-brand/20 my-4" />
            <h2 className="font-heading text-xl text-brandText mb-2">
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
