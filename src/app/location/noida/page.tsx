"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { HeroContactForm } from "@/components/sections/HeroContactForm";
import { LeadForm } from "@/components/sections/LeadForm";
import { SupportWidget } from "@/components/sections/Whatsapp";
import { ContactFormDialog } from "@/components/sections/ContactFormDialog";
import { Button } from "@/components/ui/Button";
import {
  FiBriefcase,
  FiClock,
  FiStar,
  FiUsers,
  FiShield,
  FiCheckCircle,
  FiChevronDown,
  FiChevronUp,
  FiArrowRight,
  FiMapPin,
  FiRefreshCw,
  FiTarget,
  FiMessageSquare,
  FiLayers,
} from "react-icons/fi";

// ─── Data ────────────────────────────────────────────────────────────────────

const noidaZones = [
  { sector: "Sector 62", label: "Tech & Product", color: "bg-blue-50 text-blue-700 border-blue-100" },
  { sector: "Sector 135", label: "GCC & Analytics", color: "bg-indigo-50 text-indigo-700 border-indigo-100" },
  { sector: "Sectors 80–85", label: "Industrial & Manufacturing", color: "bg-orange-50 text-orange-700 border-orange-100" },
];

const practicePoints = [
  "Sector-specific recruiters, not generalists handling everything.",
  "Talent pool built through direct relationships, not just portal scraping.",
  "Requirement understood at a team level, not just a job description.",
  "First shortlist in your inbox within 48 hours of requirement confirmation.",
];

const services = [
  {
    number: "01",
    icon: FiBriefcase,
    title: "Permanent Hiring",
    description:
      "Mid-level, senior, and leadership roles across functions. Every profile screened for skills, attitude, and long-term fit before it reaches you.",
  },
  {
    number: "02",
    icon: FiClock,
    title: "Contract Staffing",
    description:
      "Project teams, interim coverage, or sudden capacity needs — handled fast with compliance managed entirely on our side.",
  },
  {
    number: "03",
    icon: FiStar,
    title: "Executive Search",
    description:
      "CXO and niche specialist hiring done with precision and complete confidentiality. We reach candidates who aren't on any job board.",
  },
  {
    number: "04",
    icon: FiUsers,
    title: "Bulk Hiring",
    description:
      "High-volume requirements executed through structured hiring drives without dropping screening quality.",
  },
  {
    number: "05",
    icon: FiShield,
    title: "Payroll & Compliance",
    description:
      "PF, ESIC, payroll processing, and statutory obligations handled so your internal team stays focused on growth, not paperwork.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Intake Call",
    description:
      "Detailed discussion covering role context, team dynamics, and urgency — not just a form-fill of the JD.",
  },
  {
    step: "02",
    title: "Talent Mapping",
    description:
      "We map from existing databases before opening external channels so your search starts moving on day one.",
  },
  {
    step: "03",
    title: "Active & Passive Outreach",
    description:
      "Referral networks and direct search for candidates not actively applying but open to the right conversation.",
  },
  {
    step: "04",
    title: "Structured Screening",
    description:
      "Calls structured around experience, fit, and genuine interest — plus competency assessments for specialist mandates.",
  },
  {
    step: "05",
    title: "Scored Shortlist",
    description:
      "3 to 5 profiles with honest recruiter commentary on each. No padding to look productive.",
  },
  {
    step: "06",
    title: "Closure Support",
    description:
      "Full interview coordination, offer negotiation, and post-offer follow-through to reduce dropout.",
  },
];

const differentiators = [
  {
    icon: FiLayers,
    title: "Noida ecosystem knowledge",
    description:
      "Deep familiarity with IT, BFSI, GCCs, logistics, and manufacturing hiring across Noida's distinct zone clusters.",
  },
  {
    icon: FiRefreshCw,
    title: "Referral-first sourcing",
    description:
      "Sourcing built on referral networks, not recycled portal data. You see candidates others aren't reaching.",
  },
  {
    icon: FiMessageSquare,
    title: "Honest communication",
    description:
      "When a role is difficult, we say so — with a plan. We don't make false promises to win a contract.",
  },
  {
    icon: FiTarget,
    title: "Full accountability",
    description:
      "Your recruiter owns the mandate from requirements raised to candidate joining — and doesn't hand it off.",
  },
];

const faqs = [
  {
    q: "What is Workeraa's typical turnaround as a recruitment agency in Noida?",
    a: "Shortlisted profiles are submitted within 48 hours for mid-level roles. End-to-end closure takes 10 to 18 working days for most positions.",
  },
  {
    q: "Which industries does your HR consultancy in Noida work across?",
    a: "We place across IT, BFSI, GCCs, manufacturing, retail, logistics, and healthcare with vertical-specific recruiters for each domain.",
  },
  {
    q: "Can you manage permanent and contract hiring simultaneously?",
    a: "Yes. Workeraa handles permanent recruitment, contract staffing, executive search, and bulk hiring through a single account manager.",
  },
  {
    q: "How do you ensure candidates are qualified before sharing profiles?",
    a: "Each candidate goes through a structured screening call, experience validation, and role alignment check. Senior profiles include an additional assessment round.",
  },
  {
    q: "What separates Workeraa from other recruitment agencies in Noida?",
    a: "Context retention and recruiter accountability. Your dedicated recruiter owns the process from start to finish and doesn't hand it off after the contract is signed. The second engagement is faster than the first because we already know your team.",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

const FAQItem = ({ q, a, index }: { q: string; a: string; index: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07, duration: 0.38 }}
      viewport={{ once: true }}
      className="border border-gray-100 rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-gray-50/70 transition-colors"
      >
        <span className="font-semibold text-gray-900 text-sm leading-snug pr-2">{q}</span>
        <span className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center bg-gray-100 text-gray-500">
          {open ? <FiChevronUp size={14} /> : <FiChevronDown size={14} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-sm text-gray-500 leading-relaxed bg-white">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function NoidaRecruitmentPage() {
  return (
    <main>

      {/* ── HERO ── */}
      <HeroContactForm
        backgroundImage="/images/location/noida.jpg"
        mobileBackgroundImage="/images/location/noida-small.jpg"
        badge="Recruitment Agency in Noida"
        heading={
          <>
            Best Recruitment Agency in Noida for{" "}
            <span className="text-blue-400">Staffing & HR</span> Consultancy
          </>
        }
        subheading="Why do most Noida businesses struggle to hire well even when good talent exists in the city? The answer is rarely a shortage of candidates — it's almost always a broken process or an agency treating your role like a number on a spreadsheet."
        ctaLabel="View All Services"
        ctaHref="/services"
        form={
          <LeadForm
            heading="Get Your First Shortlist in 48 Hours"
            fields={[
              { type: "text",  name: "name",    label: "Your Name",      required: true },
              { type: "email", name: "email",   label: "Official Email", required: true },
              { type: "tel",   name: "phone",   label: "Phone Number",   required: true },
              {
                type: "select",
                name: "service",
                label: "What are you hiring for?",
                required: true,
                options: [
                  "Permanent Hiring",
                  "Contract Staffing",
                  "Executive Search",
                  "Bulk Hiring",
                  "Payroll & Compliance",
                  "Other",
                ],
              },
            ]}
            buttonText="Find Talent in Noida"
            onSubmit={(data: any) => console.log("Noida Lead:", data)}
          />
        }
      />

      {/* ── SECTION 1: Market Map — Noida Sectors ── */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-14 items-center">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold uppercase tracking-wide mb-5">
                <FiMapPin size={12} />
                Built for Noida
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-5">
                Is Your Current Staffing Company in Noida{" "}
                <span className="text-blue-600">Actually Built for This Market?</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8 text-[15px]">
                Noida is not a generic hiring market. A staffing company that can't
                tell these zones apart will send you the wrong profiles every time.
                Workeraa assigns recruiters by vertical so the person working your
                mandate understands the role before sourcing even begins.
              </p>
              <ul className="space-y-3">
                {practicePoints.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.32 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 text-sm text-gray-600"
                  >
                    <FiCheckCircle className="text-blue-600 shrink-0 mt-0.5" />
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right: Noida sector cards — typographic / map feel */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {noidaZones.map((zone, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className={`flex items-center justify-between rounded-2xl border px-6 py-5 ${zone.color}`}
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest opacity-60 mb-1">
                      {zone.label}
                    </p>
                    {/* <p className="text-2xl font-bold tracking-tight">{zone.sector}</p> */}
                  </div>
                  <div className="text-4xl font-black opacity-10 select-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </motion.div>
              ))}

              <div className="rounded-2xl bg-gray-900 text-white px-6 py-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
                    Our Coverage
                  </p>
                  <p className="text-xl font-bold">All of Noida</p>
                </div>
                <span className="text-3xl font-black text-white/10 select-none">→</span>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Section 2: Services — fixed card layout */}
    <section className="py-20 bg-gray-50 overflow-hidden">
    <Container>
        <div className="mb-12">
        <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
        >
            <div className="inline-flex items-center px-4 py-1.5 bg-orange-50 text-orange-700 rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
            What We Offer
            </div>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-xl">
                What Does Our{" "}
                <span className="text-blue-600">HR Consultancy in Noida</span>{" "}
                Actually Offer?
            </h2>
            <p className="text-gray-400 text-sm max-w-xs md:text-right">
                You bring the requirement. We handle everything from sourcing to offer closure.
            </p>
            </div>
        </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {services.map((svc, i) => (
            <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            viewport={{ once: true }}
            className="group relative bg-white border border-gray-100 rounded-2xl p-6 flex flex-col gap-4 min-h-[240px] overflow-hidden hover:border-blue-200 hover:shadow-lg transition-all duration-300"
            >
            {/* Ghost number — purely decorative, behind everything */}
            <span
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 right-1 text-[80px] font-black leading-none text-gray-100 group-hover:text-blue-50 transition-colors select-none z-0"
            >
                {svc.number}
            </span>

            {/* Card content — always above ghost number */}
            <div className="relative z-10 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors shrink-0">
                <svc.icon className="text-blue-600" size={18} />
                </div>
                <h3 className="font-bold text-gray-900 text-base leading-snug">
                {svc.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                {svc.description}
                </p>
            </div>
            </motion.div>
        ))}
        </div>
    </Container>
    </section>

      {/* ── SECTION 3: Process — alternating editorial rows ── */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <div className="inline-flex items-center px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
              Our Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-2xl">
              How Does Workeraa Run Its Process as a{" "}
              <span className="text-blue-600">Recruitment Agency in Noida?</span>
            </h2>
            <p className="mt-3 text-gray-500 text-[15px] max-w-xl">
              Speed without structure creates bad hires. Workeraa combines both so you
              get fast closures without inheriting problems later.
            </p>
          </motion.div>

          <div className="space-y-px">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.38 }}
                viewport={{ once: true }}
                className="group grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr_1fr] gap-6 items-start border-b border-gray-100 py-7 hover:bg-gray-50/50 rounded-xl px-4 -mx-4 transition-colors"
              >
                {/* Step number */}
                <div className="text-5xl md:text-6xl font-black text-gray-300 group-hover:text-blue-300 transition-colors leading-none pt-1 select-none">
                  {step.step}
                </div>
                {/* Title */}
                <div className="flex items-start pt-1">
                  <h3 className="font-bold text-gray-900 text-lg">{step.title}</h3>
                </div>
                {/* Description — only visible col on mobile via colspan */}
                <p className="text-sm text-gray-500 leading-relaxed col-span-2 md:col-span-1 md:pt-1">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── SECTION 4: Why Return — quote left + grid right ── */}
      <section className="py-20 bg-gray-900 text-white overflow-hidden relative">
        {/* Decorative large text bg */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        >
          <span className="text-[18vw] font-black text-white/[0.03] leading-none whitespace-nowrap">
            NOIDA
          </span>
        </div>

        <Container className="relative">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-start">

            {/* Left: context quote */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-4 py-1.5 bg-white/10 text-white/80 rounded-full text-xs font-semibold uppercase tracking-wide mb-8">
                Why Companies Return
              </div>
              <blockquote className="border-l-2 border-blue-400 pl-6 mb-8">
                <p className="text-2xl md:text-3xl font-bold text-white leading-snug">
                  "Changing your recruitment partner mid-search is painful. Workeraa earns
                  repeat business because the second engagement is{" "}
                  <em className="not-italic text-blue-400">
                    easier than the first.
                  </em>"
                </p>
              </blockquote>
              <p className="text-gray-400 text-[15px] leading-relaxed max-w-lg">
                Your recruiter already knows your team, your culture, and the kind of
                candidate who succeeds in your environment. That context carries forward
                into every mandate after the first.
              </p>

              <div className="mt-10">
                <ContactFormDialog
                  trigger={
                    <Button variant="primary" size="lg" className="group">
                      Submit a Requirement
                      <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  }
                />
              </div>
            </motion.div>

            {/* Right: 4 differentiator tiles */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {differentiators.map((d, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.09, duration: 0.35 }}
                  viewport={{ once: true }}
                  className="rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/8 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-500/20 flex items-center justify-center mb-3">
                    <d.icon className="text-blue-400" size={16} />
                  </div>
                  <h3 className="font-semibold text-white text-sm mb-2">{d.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{d.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── SECTION 5: FAQs ── */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-14 items-start">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold uppercase tracking-wide mb-5">
                FAQs
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Everything you need to know about working with a recruitment agency
                in Noida — and what makes Workeraa different.
              </p>
            </motion.div>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-16 bg-blue-600">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Want a Staffing Company in Noida That Already Understands Your Market?
              </h2>
              <p className="text-blue-100 text-[15px]">
                You shouldn't have to explain your industry to your recruitment partner
                every single time.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <ContactFormDialog
                trigger={
                  <Button
                    variant="secondary"
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-blue-50 font-semibold whitespace-nowrap"
                  >
                    Submit Your Requirement
                  </Button>
                }
              />
              <Button
                variant="secondary"
                size="lg"
                className="border-white/40 text-white hover:bg-white/10 whitespace-nowrap"
                onClick={() => {
                  const wa = `https://wa.me/918700192565?text=${encodeURIComponent("Hi! I'd like to discuss recruitment needs for my Noida office.")}`;
                  window.open(wa, "_blank");
                }}
              >
                Talk to Our Team
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      <SupportWidget />
    </main>
  );
}