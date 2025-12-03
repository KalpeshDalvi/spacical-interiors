"use client";

import Section from "@/components/Section";
import { useState } from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [requestCallback, setRequestCallback] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");

  const validatePhone = (phone: string) => {
    // Remove all non-digit characters
    const cleaned = phone.replace(/\D/g, '');
    
    // Indian phone numbers: 10 digits starting with 6-9
    // Or with country code: +91 followed by 10 digits
    const phoneRegex = /^[6-9]\d{9}$/;
    const phoneWithCodeRegex = /^91[6-9]\d{9}$/;
    
    if (!cleaned) {
      return "Phone number is required";
    }
    
    if (phoneRegex.test(cleaned) || phoneWithCodeRegex.test(cleaned)) {
      return "";
    }
    
    return "Please enter a valid Indian mobile number (10 digits starting with 6-9)";
  };

  const validateEmail = (email: string) => {
    if (!email) return ""; // Email is optional
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhoneError(validatePhone(value));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmailError(validateEmail(value));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    
    // Validate before submission
    const phoneValidation = validatePhone(phone);
    const emailValidation = validateEmail(email);
    
    setPhoneError(phoneValidation);
    setEmailError(emailValidation);
    
    if (phoneValidation || emailValidation) {
      return; // Don't submit if there are errors
    }
    
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const data = {
      name: formData.get("name"),
      phone: phone,
      email: email,
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
NEW INTERIOR DESIGN INQUIRY
========================================

📋 CONTACT INFORMATION
----------------------------------------
👤 Name:          ${data.name}
📱 Phone:         ${data.phone}
📧 Email:         ${data.email || "Not provided"}
📍 Location:      ${data.city || "Not specified"}

🏗️ PROJECT DETAILS
----------------------------------------
🎯 Project Type:  ${data.projectType}
💰 Budget Range:  ${data.budget}
📞 Callback:      ${requestCallback ? "✓ YES - Within 24 hours" : "Not requested"}

💬 PROJECT DESCRIPTION
----------------------------------------
${data.message || "No additional details provided."}

========================================
📅 Submitted: ${new Date().toLocaleString('en-IN', { 
  timeZone: 'Asia/Kolkata',
  dateStyle: 'full',
  timeStyle: 'short'
})}
========================================
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
          <h1 className="text-3xl md:text-4xl font-heading text-brandText mb-3">Start your project</h1>
          <p className="text-sm text-subtleText">
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
                  pattern="[6-9][0-9]{9}"
                  maxLength={10}
                  placeholder="9876543210"
                  onChange={handlePhoneChange}
                  className={`w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition-all ${
                    phoneError 
                      ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200' 
                      : 'border-brand/20 focus:border-brand focus:ring-2 focus:ring-brand/20'
                  }`}
                />
                {phoneError && (
                  <p className="text-xs text-red-600 mt-1">⚠️ {phoneError}</p>
                )}
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
                  placeholder="your.email@example.com"
                  onChange={handleEmailChange}
                  className={`w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition-all ${
                    emailError 
                      ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200' 
                      : 'border-brand/20 focus:border-brand focus:ring-2 focus:ring-brand/20'
                  }`}
                />
                {emailError && (
                  <p className="text-xs text-red-600 mt-1">⚠️ {emailError}</p>
                )}
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
            <p className="font-semibold text-brandText mb-4">
              WhatsApp: +91-7040172219
            </p>

            {/* WhatsApp Connect Button */}
            <a
              href="https://wa.me/917040172219?text=Hi%2C%20I%27m%20interested%20in%20your%20interior%20design%20services.%20I%27d%20like%20to%20discuss%20my%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-3.5 text-sm font-semibold shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Connect on WhatsApp
            </a>

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
