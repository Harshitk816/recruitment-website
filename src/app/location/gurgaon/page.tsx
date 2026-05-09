"use client";
import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { motion, AnimatePresence } from "framer-motion";
import { SupportWidget } from "@/components/sections/Whatsapp";
import { ContactFormDialog } from "@/components/sections/ContactFormDialog";
import { Button } from "@/components/ui/Button";
import {
  FiArrowRight,
  FiCheckCircle,
  FiShield,
  FiUsers,
  FiMapPin,
  FiSliders,
  FiZap,
  FiTool,
  FiClipboard,
  FiTrendingUp,
  FiChevronDown,
  FiChevronUp,
  FiBriefcase,
  FiTarget,
} from "react-icons/fi";
import { LeadForm } from "@/components/sections/LeadForm";
import { HeroContactForm } from "@/components/sections/HeroContactForm";
import { QuickContact } from "@/components/sections/QuickContact";
import { ServicesCompact } from "@/components/sections/ServicesCompact";
import FaqSchema from "@/components/sections/FaqSchema";
import { faqGurgaonLocation } from "@/lib/faq-data";

// ── Data ──────────────────────────────────────────────────────────────────────

const roles = [
  { title: "IT & Tech Professionals", sub: "Software, Infra & Cloud" },
  { title: "BFSI Specialists", sub: "Banking, Finance & Insurance" },
  { title: "Sales & Marketing", sub: "B2B, B2C & D2C Talent" },
  { title: "HR & Admin Roles", sub: "Generalists & Specialists" },
  { title: "Operations Managers", sub: "& Process Leaders" },
  { title: "Finance & Accounts", sub: "Controllers & Analysts" },
  { title: "Customer Support", sub: "& CX Professionals" },
  { title: "Supply Chain", sub: "& Logistics Experts" },
  { title: "Leadership & CXO", sub: "Executive Search" },
  { title: "Bulk & Drive Hiring", sub: "50–500 Positions" },
];

const screeningSteps = [
  {
    icon: FiClipboard,
    title: "Requirement Intake & Role Briefing",
    description:
      "We start by understanding your exact requirement — role scope, reporting structure, industry context, and the specific gap you need to fill.",
  },
  {
    icon: FiTarget,
    title: "Talent Mapping from Active Database",
    description:
      "We source from our live, pre-verified talent pool first — no starting from scratch. Candidates are mapped against your role before outreach begins.",
  },
  {
    icon: FiTool,
    title: "Structured Screening & Skill Assessment",
    description:
      "Every candidate goes through a resume review, structured phone screen, and employment verification. Technical roles include domain assessments.",
  },
  {
    icon: FiBriefcase,
    title: "Scored Shortlist with Recruiter Notes",
    description:
      "You receive 3 to 5 profiles — not 30. Each comes with recruiter notes on strengths, flags, and role alignment so decisions are faster.",
  },
  {
    icon: FiUsers,
    title: "Interview Scheduling & Round Coordination",
    description:
      "We coordinate all interview rounds, handle scheduling conflicts, and keep candidates engaged throughout the process.",
  },
  {
    icon: FiShield,
    title: "Offer Management & Post-Joining Follow-Up",
    description:
      "We manage offer rollout and stay involved through the first 30 days to ensure smooth onboarding and reduce early dropout.",
  },
];

const differentiators = [
  {
    icon: FiClipboard,
    title: "Dedicated Recruiter for Every Account",
    description:
      "You are never handed between teams. One recruiter manages your requirement end to end — no communication gaps between sourcing and delivery.",
  },
  {
    icon: FiZap,
    title: "First Shortlist Within 48 Hours",
    description:
      "For most mid-level roles, we submit shortlisted profiles within 48 hours. Full placement typically completes in 7 to 15 working days.",
  },
  {
    icon: FiSliders,
    title: "Pre-Verified Talent Pool, Refreshed Daily",
    description:
      "Our database is active and updated — not a static CV dump. You never receive outdated or recycled profiles that have been sent to ten other companies.",
  },
  {
    icon: FiMapPin,
    title: "Deep Local Presence in Gurgaon",
    description:
      "We understand the Gurgaon job market — salary benchmarks, candidate expectations, and where talent moves across sectors like IT, BFSI, and retail.",
  },
  {
    icon: FiTrendingUp,
    title: "Transparent Process with Defined Milestones",
    description:
      "You always know where your hiring stands. Defined delivery timelines at every stage mean no chasing for updates or waiting in ambiguity.",
  },
];

const services = [
  {
    title: "Permanent Recruitment",
    description:
      "We source and place full-time employees across junior, mid, and senior levels. Every profile is screened for skills and role readiness before it reaches you.",
  },
  {
    title: "Contract & Temporary Staffing",
    description:
      "Need short-term coverage for a project or seasonal demand? We deploy contract staff quickly with compliance handled on our end.",
  },
  {
    title: "Executive Search",
    description:
      "For leadership and hard-to-fill specialist roles, our team works with speed and discretion — sourcing candidates who are not actively applying elsewhere.",
  },
  {
    title: "Bulk Hiring",
    description:
      "Scaling fast? We run structured hiring drives that fill 50 to 500 positions within defined timelines without compromising quality.",
  },
  {
    title: "Payroll & Compliance Management",
    description:
      "From monthly salary processing to PF, ESIC, and statutory filings, we take the administrative weight off your HR team so they focus on people, not paperwork.",
  },
];

const faqs = [
  {
    q: "How long does it take Workeraa to fill a position in Gurgaon?",
    a: "For most mid-level roles, we submit shortlisted profiles within 48 hours. Full placement typically takes 7 to 15 working days.",
  },
  {
    q: "What industries does your HR consultancy in Gurgaon cover?",
    a: "We work across IT, BFSI, manufacturing, retail, logistics, healthcare, and D2C brands. Our recruiters are organised by industry so you work with someone who knows your market.",
  },
  {
    q: "Do you handle contract staffing along with permanent hiring?",
    a: "Yes. Workeraa covers permanent recruitment, contract staffing, and bulk hiring under one roof with a single point of contact.",
  },
  {
    q: "How do you screen candidates before sharing profiles?",
    a: "Every candidate goes through a resume review, structured phone screen, and employment verification. Technical roles include domain assessments. Senior roles go through competency-based interviews.",
  },
  {
    q: "How is Workeraa different from other staffing companies in Gurgaon?",
    a: "We assign a dedicated recruiter to your account, maintain an active pre-verified talent pool, and work to strict timelines. You get fewer profiles but better ones, every time.",
  },
];

// ── FAQ Item ──────────────────────────────────────────────────────────────────

const FAQItem: React.FC<{ q: string; a: string; index: number }> = ({
  q,
  a,
  index,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      viewport={{ once: true }}
      className="border border-gray-100 rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-900 text-sm">{q}</span>
        {open ? (
          <FiChevronUp className="text-blue-600 shrink-0" />
        ) : (
          <FiChevronDown className="text-gray-400 shrink-0" />
        )}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-sm text-gray-500 leading-relaxed bg-white">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function GurgaonRecruitmentPage() {
  return (
    <main>
      <FaqSchema faqs={faqGurgaonLocation} />
      {/* ── HERO ── */}
      <HeroContactForm
        backgroundImage="/images/location/gurgaon.jpg"
        mobileBackgroundImage="/images/location/gurgaon-small.jpg"
        badge="Recruitment Agency in Gurgaon"
        heading={
          <>
            Best Recruitment Agency in Gurgaon for{" "}
            <span className="text-blue-400">Fast & Reliable</span> Hiring
          </>
        }
        subheading="Are you losing top candidates to competitors because your hiring takes too long? Gurgaon's job market moves fast. Workeraa connects you with pre-screened, role-ready professionals — so your teams are never understaffed when it matters most."
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
                  "Permanent Recruitment",
                  "Contract Staffing",
                  "Executive Search",
                  "Bulk Hiring",
                  "Payroll & Compliance",
                  "Other",
                ],
              },
            ]}
            buttonText="Find Talent in Gurgaon"
            onSubmit={(data: any) => console.log("Gurgaon Lead:", data)}
          />
        }
      />


      <ServicesCompact/>

      {/* ── SECTION 1: Why Workeraa — What Makes Us Right ── */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-14 items-start">

            {/* Left: sticky heading */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-24"
            >
              <div className="inline-flex items-center px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold uppercase tracking-wide mb-5">
                Why Workeraa
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Makes Workeraa the Right{" "}
                <span className="text-blue-600">Staffing Company in Gurgaon?</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Finding candidates is easy. Finding the right ones — fast, without
                wasting your time on unqualified profiles — that takes real process
                and local expertise. Workeraa maintains a live, pre-verified talent
                pool across industries and never starts sourcing from scratch.
              </p>
              <div className="bg-blue-600 text-white rounded-2xl p-6">
                <p className="text-sm font-medium opacity-80 mb-1">Our commitment</p>
                <p className="font-bold text-lg leading-snug">
                  Positions filled within 7 to 15 working days. First shortlist
                  within 48 hours.
                </p>
              </div>
            </motion.div>

            {/* Right: differentiator cards */}
            <div className="space-y-4">
              {differentiators.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="flex gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100 shadow-sm"
                >
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold text-sm shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </Container>
      </section>

      {/* ── SECTION 2: Services ── */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-4 py-1.5 bg-orange-50 text-orange-700 rounded-full text-xs font-semibold uppercase tracking-wide mb-5">
                Our Services
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Services Offered by Our{" "}
                <span className="text-blue-600">HR Consultancy in Gurgaon</span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
                Workeraa covers the full hiring spectrum so you work with one
                partner instead of managing three.
              </p>
            </motion.div>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {services.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                viewport={{ once: true }}
                className={`flex items-start gap-6 p-6 rounded-2xl border transition-all hover:shadow-sm ${
                  i % 2 === 0
                    ? "bg-white border-gray-100"
                    : "bg-blue-50 border-blue-100"
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                  <FiCheckCircle
                    className={`text-xl ${
                      i % 2 === 0 ? "text-gray-700" : "text-blue-600"
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="hidden md:flex items-center">
                  <FiCheckCircle
                    className={`text-xl ${
                      i % 2 === 0 ? "text-gray-300" : "text-blue-300"
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <ContactFormDialog
              defaultService="recruitment-gurgaon"
              trigger={
                <Button variant="outline" className="group">
                  Discuss Your Hiring Requirement
                  <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              }
            />
          </div>
        </Container>
      </section>

      {/* ── SECTION 3: Roles we cover — bento grid ── */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-4 py-1.5 bg-green-50 text-green-700 rounded-full text-xs font-semibold uppercase tracking-wide mb-5">
                Roles We Cover
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Roles Does Our{" "}
                <span className="text-blue-600">Recruitment Agency in Gurgaon</span>{" "}
                Support?
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
                We work across industries and functions — from shop floor to
                boardroom. Every role gets a recruiter who understands the market
                it operates in.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {roles.map((role, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.93 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
                viewport={{ once: true }}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-5 flex flex-col justify-between hover:border-blue-200 hover:bg-blue-50/40 transition-all"
              >
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <FiCheckCircle className="text-blue-600 text-sm" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm leading-snug">
                    {role.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">{role.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── SECTION 4: Hiring Process — numbered timeline ── */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-4 py-1.5 bg-yellow-50 text-yellow-700 rounded-full text-xs font-semibold uppercase tracking-wide mb-5">
                Our Process
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How Our{" "}
                <span className="text-blue-600">Hiring Process</span> Works
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
                Most agencies treat recruitment as a one-step task. Workeraa runs
                a structured system that reduces dropout, speeds up decisions, and
                puts the right person in the seat.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {screeningSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="flex gap-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
              >
                <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold text-sm shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── FAQs ── */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold uppercase tracking-wide mb-5">
              FAQs
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Common Questions From{" "}
              <span className="text-blue-600">Gurgaon Hiring Teams</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Hire Faster in Gurgaon?
            </h2>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
              Stop reviewing stacks of unqualified profiles. Workeraa gives you a
              focused shortlist, a structured process, and a hiring partner who
              stays accountable until the role is closed. Share your requirements
              today and get your first shortlist within 48 hours.
            </p>
            <ContactFormDialog
              defaultService="recruitment-gurgaon"
              trigger={
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-blue-600 hover:bg-blue-50 group"
                >
                  Talk to Our Gurgaon Recruitment Team
                  <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              }
            />
          </motion.div>
        </Container>
      </section>
      <QuickContact/>
      <SupportWidget phoneNumber="918700192565" />
    </main>
  );
}