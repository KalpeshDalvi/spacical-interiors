"use client";

import Section from "@/components/Section";
import { motion } from "framer-motion";

export default function AboutPage() {
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="text-sm font-medium text-brand">About Us</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-heading text-brandText mb-4">
              About <span className="text-brand">Spacical Interiors</span>
            </h1>
            <p className="text-sm md:text-base text-subtleText max-w-2xl mx-auto leading-relaxed">
              We are an interior design studio focused on creating warm, modern
              spaces that feel good to live and work in every day—not just on
              handover day.
            </p>
          </motion.div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 items-start max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-brand/5 to-brandAccent/5 border border-brand/10">
              <div className="absolute top-4 right-4 w-16 h-16 bg-brand/10 rounded-full blur-xl"></div>
              <p className="text-base text-brandText leading-relaxed relative z-10">
                Based in Pune, Spacical Interiors works across residential and
                commercial projects—from compact apartments and villas to clinics,
                offices and boutique retail spaces.
              </p>
            </div>
            
            <p className="text-sm text-subtleText leading-relaxed">
              Our approach combines thoughtful space planning, honest
              materials and meticulous detailing. We listen carefully to how you
              live or work, then craft interiors that support that lifestyle
              while reflecting your personality.
            </p>
            
            <p className="text-sm text-subtleText leading-relaxed">
              Instead of pushing a single "signature style", we focus on
              timeless, functional design layered with accents that feel
              uniquely yours. That might mean a calm, neutral apartment; a
              playful kids&apos; room; or a bold, branded reception area.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* What We Believe */}
            <div className="card p-8 border border-brand/10 hover:shadow-cardHover transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand to-brandAccent text-white flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h2 className="font-heading text-xl text-brandText">
                  What we believe in
                </h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-subtleText">
                  <svg className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="leading-relaxed">Design should make everyday life easier, not complicated.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-subtleText">
                  <svg className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="leading-relaxed">Beautiful spaces don&apos;t have to be wasteful or fragile.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-subtleText">
                  <svg className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="leading-relaxed">Clear communication and transparency are as important as creativity.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-subtleText">
                  <svg className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="leading-relaxed">Small details add up to a big difference over time.</span>
                </li>
              </ul>
            </div>

            {/* How We Work */}
            <div className="card p-8 border border-brand/10 hover:shadow-cardHover transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brandAccent to-brand text-white flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="font-heading text-xl text-brandText">
                  How we work with you
                </h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-subtleText">
                  <svg className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="leading-relaxed">Honest conversations about budget and priorities.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-subtleText">
                  <svg className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="leading-relaxed">Collaborative design process with regular checkpoints and feedback.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-subtleText">
                  <svg className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="leading-relaxed">Stage-wise documentation so you know exactly what is being built.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-subtleText">
                  <svg className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="leading-relaxed">Complete handover with styling tips and maintenance guidance.</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
