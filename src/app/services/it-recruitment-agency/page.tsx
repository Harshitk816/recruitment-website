"use client";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { SupportWidget } from "@/components/sections/Whatsapp";
import {
  FiCode,
  FiCloud,
  FiBarChart2,
  FiShield,
  FiBriefcase,
  FiCheckSquare,
  FiWifi,
  FiZap,
  FiClock,
  FiUsers,
  FiRefreshCw,
  FiEye,
  FiAward,
  FiChevronDown,
  FiChevronUp,
  FiArrowRight,
} from "react-icons/fi";
import Link from "next/link";
import { HeroContactForm } from "@/components/sections/HeroContactForm";
import { LeadForm } from "@/components/sections/LeadForm";
import { CompanyCarousel } from "@/components/sections/CompanyCarousel";

// ─── DATA ───────────────────────────────────────────────────────────────────

const roles = [
  { icon: FiCode, label: "Software Developers", sub: "Frontend, Backend, Full Stack" },
  { icon: FiCloud, label: "Cloud & DevOps Engineers", sub: "AWS, Azure, GCP, Kubernetes" },
  { icon: FiBarChart2, label: "Data Scientists & Analysts", sub: "ML, AI, BI, Analytics" },
  { icon: FiShield, label: "Cybersecurity Specialists", sub: "AppSec, InfoSec, Compliance" },
  { icon: FiBriefcase, label: "IT Project Managers & Tech Leads", sub: "Agile, Scrum, PMP" },
  { icon: FiCheckSquare, label: "QA & Testing Engineers", sub: "Manual, Automation, SDET" },
  { icon: FiWifi, label: "Network & Infrastructure Experts", sub: "Networking, SysAdmin, Cloud Infra" },
];

const screening = [
  {
    step: "01",
    title: "Technical Skills Assessment",
    description: "We test real ability, not just what is written on the resume. Every candidate goes through role-specific technical evaluation.",
  },
  {
    step: "02",
    title: "Experience Validation",
    description: "We verify past projects, tools used, and actual contributions. Years of experience mean nothing without context.",
  },
  {
    step: "03",
    title: "Culture & Communication Fit",
    description: "Technical skills get someone hired. Communication and culture fit keep them. We assess both before you meet anyone.",
  },
  {
    step: "04",
    title: "Background & Reference Check",
    description: "Every shortlisted candidate goes through thorough background and reference verification. No surprises after joining.",
  },
  {
    step: "05",
    title: "Role-Specific Benchmarking",
    description: "We match candidates against the exact requirements of your open role, not a generic job description template.",
  },
  {
    step: "06",
    title: "Final Fit Review",
    description: "Before a profile reaches you, our senior recruiters do a final check. You only see candidates we would confidently hire ourselves.",
  },
];

const differentiators = [
  {
    icon: FiZap,
    title: "Tech-First Screening",
    description: "Our recruiters have specialized experience to evaluate every candidate on technical depth, not just years of experience.",
    color: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    icon: FiClock,
    title: "Speed Without Compromise",
    description: "We deliver shortlisted profiles within 48 to 72 hours. Urgency does not mean lowering the bar.",
    color: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: FiBriefcase,
    title: "Permanent, Contract & Project Hiring",
    description: "One partner for all your IT staffing needs. Full-time hire or a six-month contract resource — we handle both.",
    color: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: FiUsers,
    title: "Deep Talent Network",
    description: "Access to a pre-screened pool of active and passive IT professionals across India, ready for your next opening.",
    color: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: FiEye,
    title: "Transparent Process",
    description: "You stay informed at every stage of our IT staffing process. No black boxes, no surprises.",
    color: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    icon: FiRefreshCw,
    title: "Zero-Replacement Guarantee",
    description: "If a placed candidate does not perform within the guarantee period, we provide a free replacement.",
    color: "bg-red-100",
    iconColor: "text-red-600",
  },
];

const faqs = [
  {
    q: "How fast can you fill an IT role?",
    a: "Shortlisted profiles are typically sent within 48 to 72 hours. Niche or senior roles may take 5–7 business days depending on the specifics of each role.",
  },
  {
    q: "Do you handle both permanent and contract IT staffing?",
    a: "Yes. Our services encompass permanent hiring, contract staffing, and project-based IT staffing based on what your business requires.",
  },
  {
    q: "Can you hire for very specific tech stacks like Go, Rust, or Kubernetes?",
    a: "Absolutely. Niche tech hiring is one of our strengths. We have placed professionals across specialized stacks that generalist agencies struggle to fill.",
  },
  {
    q: "How do your IT recruitment agencies work with startups?",
    a: "We work with startups regularly. Our flexible engagement models fit lean teams with fast-moving requirements.",
  },
  {
    q: "Is there a replacement policy if the hired candidate leaves early?",
    a: "Yes. We offer a replacement guarantee on all permanent placements within a defined period, at no additional charge.",
  },
];

const overallStats = [
  {
    icon: FiUsers,
    number: "500+",
    label: "Successful Placements",
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    icon: FiBriefcase,
    number: "80+",
    label: "Partner Companies",
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    icon: FiClock,
    number: "30%",
    label: "Faster Hiring Process",
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
];

// ─── FAQ ACCORDION ───────────────────────────────────────────────────────────

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-900 pr-4">{q}</span>
        {open ? (
          <FiChevronUp className="text-blue-600 shrink-0" />
        ) : (
          <FiChevronDown className="text-gray-400 shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-5 bg-white">
          <p className="text-gray-600 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function ITRecruitmentPage() {
  return (
    <main className="bg-white">
      <HeroContactForm
        badge="IT & Technology Recruitment"
        heading={
          <>
            Leading <span className="text-blue-400">IT Recruitment Agency</span>{" "}
            for Top Tech Talent
          </>
        }
        subheading="Struggling to Hire Skilled IT Talent Fast? Get Pre-Vetted Developers & Tech Experts in Days — Not Months."
        ctaLabel="View All Services"
        ctaHref="/services"
        form={
          <LeadForm
            heading="Hire Top IT Talent in 48 Hours"
            fields={[
              { type: "text",   name: "name",    label: "Your Name",       required: true },
              { type: "email",  name: "email",   label: "Official Email",  required: true },
              { type: "tel",    name: "phone",   label: "Phone Number",    required: true },
              {
                type: "select",
                name: "service",
                label: "What are you hiring for?",
                required: true,
                options: [
                  "Software Developer",
                  "Cloud / DevOps Engineer",
                  "Data Scientist / Analyst",
                  "Cybersecurity Specialist",
                  "IT Project Manager",
                  "Other",
                ],
              },
            ]}
            buttonText="Get Matched with IT Talent"
            onSubmit={(data:any) => console.log("IT Lead:", data)}
          />
        }
      />


      <CompanyCarousel />
      {/* ── ROLES WE FILL ── */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Tech Roles Do Our IT Staffing Services Actually Fill?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As a dedicated <strong>IT staffing company</strong>, Workeraa goes beyond
              titles and years of experience to find professionals who can genuinely
              deliver — from full development teams to senior specialists.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {roles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <role.icon className="text-xl text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{role.label}</h3>
                <p className="text-sm text-gray-500">{role.sub}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── SCREENING PROCESS ── */}
      <section className="py-20 bg-gray-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Does Our{" "}
              <span className="text-blue-500">IT Staffing Company</span> Screen
              Candidates <span className="text-blue-500">Before You Meet Them?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every profile we share is screened, assessed, and matched with purpose.
              No guesswork — just results.
            </p>
          </motion.div>

          {/* Desktop Timeline */}
          <div className="hidden md:block">
            <div className="relative flex items-center justify-between mb-10 px-6">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-blue-400 -translate-y-1/2 mx-16 z-0" />
              {screening.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative z-10 flex flex-col items-center"
                >
                  <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg font-bold shadow-md">
                    {index + 1}
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-6 gap-4 px-2">
              {screening.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="text-center"
                >
                  <h3 className="text-sm font-semibold text-gray-900 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile — vertical stacked cards */}
          <div className="md:hidden space-y-4">
            {screening.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08 }}
                className="flex gap-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm"
              >
                <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">{item.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── WHY WORKERAA ── */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Makes Workeraa Different from Other IT Recruitment Agencies?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Here is why companies across India choose us over other{" "}
              <strong>IT recruitment agencies</strong>.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-5`}>
                  <item.icon className={`text-xl ${item.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-gray-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Questions We Hear from IT Hiring Managers Every Week
            </h2>
            <p className="text-lg text-gray-600">
              Straight answers to the questions that matter most.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                <FAQItem q={faq.q} a={faq.a} />
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 bg-linear-to-r from-[#3781e2] to-[#3781e2]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <FiAward className="text-5xl mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Looking for an IT Recruitment Agency That Gets It Right the First Time?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-10">
              Stop settling for close-enough candidates. Tell us your requirements today
              and let Workeraa&apos;s <strong>IT Staffing Services</strong> find you the
              right person, fast.
            </p>
            <Link
              href="/contact"
              className="bg-white text-[#3781e2] hover:bg-blue-50 px-10 py-4 rounded-xl font-bold text-lg inline-flex items-center gap-2 transition-colors"
            >        
              Talk to Our IT Recruitment Team
              <FiArrowRight />
            </Link>
          </motion.div>
        </Container>
      </section>

      {/* ── WHATSAPP ── */}
      <SupportWidget
        phoneNumber="918700192565"
      />
    </main>
  );
}