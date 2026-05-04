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
  FiZap,
  FiClipboard,
  FiTrendingUp,
  FiChevronDown,
  FiChevronUp,
  FiBriefcase,
  FiTarget,
  FiClock,
  FiStar,
} from "react-icons/fi";
import { LeadForm } from "@/components/sections/LeadForm";
import { HeroContactForm } from "@/components/sections/HeroContactForm";
import { QuickContact } from "@/components/sections/QuickContact";
import { ServicesCompact } from "@/components/sections/ServicesCompact";

// ── Data ──────────────────────────────────────────────────────────────────────

const stats = [
  { value: "48h", label: "First shortlist delivered" },
  { value: "10–18", label: "Days to full placement" },
  { value: "3–5", label: "Scored profiles per role" },
  { value: "1", label: "Dedicated recruiter per account" },
];

const trustPoints = [
  "Dedicated recruiter assigned to your account from day one.",
  "Candidates sourced from a live, regularly updated talent database.",
  "Profiles submitted within 48 hours of requirement confirmation.",
  "Screening done before any CV reaches your inbox.",
  "Clear timelines communicated at every stage.",
];

const services = [
  {
    icon: FiBriefcase,
    title: "Permanent Recruitment",
    description:
      "We place full-time professionals across junior, mid, and leadership levels. Every candidate is assessed for role fit before you spend a single interview hour on them.",
  },
  {
    icon: FiClock,
    title: "Contract Staffing",
    description:
      "Project-based teams, seasonal coverage, or interim replacements. We place contract professionals quickly with all documentation handled.",
  },
  {
    icon: FiStar,
    title: "Executive Search",
    description:
      "For Director, VP, and CXO-level mandates, our search team runs a discreet, structured process targeting both active and passive candidates.",
  },
  {
    icon: FiUsers,
    title: "Bulk & Campus Hiring",
    description:
      "Opening a new Delhi office or scaling a team rapidly? We run hiring drives across experience levels and deliver within agreed timelines.",
  },
  {
    icon: FiShield,
    title: "Payroll & Compliance",
    description:
      "We manage statutory filings, payroll processing, and labour law compliance so your internal HR team focuses on what matters more.",
  },
];

const processSteps = [
  {
    title: "Requirement Discussion",
    description:
      "Detailed intake to understand the role, team context, and culture fit — not just the job description.",
  },
  {
    title: "Talent Pool Mapping",
    description:
      "We map from our active database before any external sourcing begins, so your search starts fast.",
  },
  {
    title: "Structured Screening",
    description:
      "Calls covering experience, expectations, and availability. Domain assessments for technical or specialist roles.",
  },
  {
    title: "Scored Shortlist",
    description:
      "3 to 5 profiles, each with recruiter notes. No padding, no volume. Just accurate, relevant candidates.",
  },
  {
    title: "Interview Coordination",
    description:
      "End-to-end management of interview rounds, scheduling, and feedback loops.",
  },
  {
    title: "Offer & Onboarding Support",
    description:
      "We stay involved through offer rollout to reduce dropout and ensure smooth onboarding.",
  },
];

const differentiators = [
  {
    label: "01",
    title: "Sector-Focused Recruiters",
    description:
      "A BFSI recruiter knows the difference between a relationship manager and a wealth advisor. A tech recruiter understands what a full-stack brief actually means. You work with someone who already knows your market.",
  },
  {
    label: "02",
    title: "No Generic Portals",
    description:
      "We don't rely on job boards and hope. Direct sourcing plus referral networks means you see candidates who aren't being sent to every other company in Delhi.",
  },
  {
    label: "03",
    title: "Honest Timelines",
    description:
      "We don't make promises to win the mandate and then disappear. You get defined SLAs and one point of contact who stays accountable until the role is closed.",
  },
  {
    label: "04",
    title: "Quality Over Volume",
    description:
      "We don't pad shortlists to look productive. Fewer profiles with higher accuracy means fewer interview rounds and faster closures — which is what actually saves your time.",
  },
];

const faqs = [
  {
    q: "How quickly can Workeraa fill a position as a recruitment agency in Delhi?",
    a: "For most mid-level roles, shortlisted profiles are submitted within 48 hours. Full closures typically happen within 10 to 18 working days depending on role complexity.",
  },
  {
    q: "Which industries does your HR consultancy in Delhi work with?",
    a: "We place across IT, BFSI, manufacturing, retail, logistics, media, healthcare, and government-adjacent sectors. Our recruiters are sector-specific, not generalist.",
  },
  {
    q: "Can you handle both permanent and contract hiring?",
    a: "Yes. Workeraa covers permanent placement, contract staffing, executive search, and bulk hiring. One partner, one point of contact.",
  },
  {
    q: "How do you ensure candidate quality before sharing profiles?",
    a: "Every candidate is screened for experience, role alignment, and availability. Technical and senior roles go through additional assessment rounds before the profile reaches you.",
  },
  {
    q: "What makes Workeraa one of the best recruitment agencies in Delhi?",
    a: "Speed, accuracy, and accountability. We assign dedicated recruiters, work to defined SLAs, and keep you informed at every stage — without you having to chase us for updates.",
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

export default function DelhiRecruitmentPage() {
  return (
    <main>

      {/* ── HERO ── */}
      <HeroContactForm
        backgroundImage="/images/location/delhi.avif"
        mobileBackgroundImage="/images/location/delhi-small.jpg"
        badge="Recruitment Agency in Delhi"
        heading={
          <>
            Best Recruitment Agency in Delhi for{" "}
            <span className="text-blue-400">Staffing & HR</span> Consultancy
          </>
        }
        subheading="Is your Delhi office running short-handed while your hiring pipeline sits stuck at the screening stage? Every week a position stays open costs real money. Workeraa brings businesses verified, interview-ready candidates so roles get filled in days, not months."
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
                  "Bulk / Campus Hiring",
                  "Payroll & Compliance",
                  "Other",
                ],
              },
            ]}
            buttonText="Find Talent in Delhi"
            onSubmit={(data: any) => console.log("Delhi Lead:", data)}
          />
        }
      />


      <ServicesCompact/>

      {/* ── SECTION 1: Why Delhi Trusts Workeraa — Stats + Points ── */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-14 items-start">

            {/* Left: heading + trust points */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold uppercase tracking-wide mb-5">
                Why Workeraa
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Delhi Businesses Trust Workeraa as Their{" "}
                <span className="text-blue-600">Staffing Company in Delhi</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Delhi's talent market is one of the most competitive in India —
                government bodies, PSUs, MNCs, media companies, and fast-scaling
                startups all competing for the same pool. Generic job postings no
                longer work. You need a partner with an active network, sector
                knowledge, and a process built for speed.
              </p>
              <ul className="space-y-3">
                {trustPoints.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.35 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 text-sm text-gray-600"
                  >
                    <FiCheckCircle className="text-blue-600 mt-0.5 shrink-0 text-base" />
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right: stat cards 2x2 grid */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.35 }}
                  viewport={{ once: true }}
                  className={`rounded-2xl p-6 flex flex-col justify-between min-h-[140px] ${
                    i === 0
                      ? "bg-blue-600 text-white"
                      : i === 3
                      ? "bg-gray-900 text-white"
                      : "bg-gray-50 border border-gray-100 text-gray-900"
                  }`}
                >
                  <p
                    className={`text-4xl font-bold tracking-tight ${
                      i === 0 || i === 3 ? "text-white" : "text-blue-600"
                    }`}
                  >
                    {stat.value}
                  </p>
                  <p
                    className={`text-sm mt-2 ${
                      i === 0 || i === 3
                        ? "text-white/70"
                        : "text-gray-500"
                    }`}
                  >
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </Container>
      </section>

      {/* ── SECTION 2: Services — icon cards in a clean grid ── */}
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
                Services From Our{" "}
                <span className="text-blue-600">HR Consultancy in Delhi</span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
                Workeraa handles the full hiring cycle — from sourcing a single
                hire to staffing an entire new vertical.
              </p>
            </motion.div>
          </div>

          {/* 2-col + 1 wide on last row */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {services.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow ${
                  i === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <svc.icon className="text-blue-600 text-lg" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{svc.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {svc.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <ContactFormDialog
              defaultService="recruitment-delhi"
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

      {/* ── SECTION 3: Process — horizontal connector timeline ── */}
      <section className="py-20 bg-white overflow-hidden">
        <Container>
          <div className="text-center mb-14">
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
                How We Work as a{" "}
                <span className="text-blue-600">Recruitment Agency in Delhi</span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
                A slow hiring process costs real money in lost productivity and
                delayed growth. Workeraa runs a structured system designed to
                eliminate the wait.
              </p>
            </motion.div>
          </div>

          {/* 3+3 two-row layout with step numbers */}
          <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="relative bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:border-blue-200 hover:bg-blue-50/30 transition-all"
              >
                {/* Step number top-right */}
                <span className="absolute top-4 right-4 text-xs font-bold text-blue-200 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold text-sm mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>


      {/* ── SECTION 4: What Sets Workeraa Apart — large label left style ── */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-4 py-1.5 bg-green-50 text-green-700 rounded-full text-xs font-semibold uppercase tracking-wide mb-5">
                Why Choose Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Sets Workeraa Apart From the{" "}
                <span className="text-blue-600">Best Recruitment Agencies in Delhi</span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
                Delhi has no shortage of placement firms. What it lacks is agencies
                that treat your hiring timeline as seriously as you do.
              </p>
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto space-y-3">
            {differentiators.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="flex gap-6 items-start bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-sm transition-shadow"
              >
                {/* Large muted number on the left */}
                <span className="text-5xl font-black text-gray-400 leading-none shrink-0 select-none w-14 text-right">
                  {item.label}
                </span>
                <div className="flex-1 border-l border-gray-100 pl-6">
                  <h3 className="font-bold text-gray-900 mb-1.5">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.description}
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
              <span className="text-blue-600">Delhi Hiring Teams</span>
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
              Start Hiring Smarter With a Staffing Company in Delhi That Delivers
            </h2>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
              Your next great hire is not on a job board waiting. They need to be
              found, screened, and brought to you by someone who knows where to
              look. Share your open roles and receive your first shortlist within
              48 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <ContactFormDialog
                defaultService="recruitment-delhi"
                trigger={
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white group"
                  >
                    Submit a Requirement
                    <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                }
              />
             
            </div>
          </motion.div>
        </Container>
      </section>
      <QuickContact/>
      <SupportWidget phoneNumber="918700192565" />
    </main>
  );
}