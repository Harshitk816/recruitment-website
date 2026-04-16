"use client";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { WhatsAppWidget } from "@/components/sections/Whatsapp";
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
    description:
      "We test real ability, not just what is written on the resume. Every candidate goes through role-specific technical evaluation.",
  },
  {
    step: "02",
    title: "Experience Validation",
    description:
      "We verify past projects, tools used, and actual contributions. Years of experience mean nothing without context.",
  },
  {
    step: "03",
    title: "Culture & Communication Fit",
    description:
      "Technical skills get someone hired. Communication and culture fit keep them. We assess both before you meet anyone.",
  },
  {
    step: "04",
    title: "Background & Reference Check",
    description:
      "Every shortlisted candidate goes through thorough background and reference verification. No surprises after joining.",
  },
  {
    step: "05",
    title: "Role-Specific Benchmarking",
    description:
      "We match candidates against the exact requirements of your open role, not a generic job description template.",
  },
  {
    step: "06",
    title: "Final Fit Review",
    description:
      "Before a profile reaches you, our senior recruiters do a final check. You only see candidates we would confidently hire ourselves.",
  },
];

const differentiators = [
  {
    icon: FiZap,
    title: "Tech-First Screening",
    description:
      "Our recruiters have specialized experience to evaluate every candidate on technical depth, not just years of experience.",
    color: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    icon: FiClock,
    title: "Speed Without Compromise",
    description:
      "We deliver shortlisted profiles within 48 to 72 hours. Urgency does not mean lowering the bar.",
    color: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: FiBriefcase,
    title: "Permanent, Contract & Project Hiring",
    description:
      "One partner for all your IT staffing needs. Full-time hire or a six-month contract resource — we handle both.",
    color: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: FiUsers,
    title: "Deep Talent Network",
    description:
      "Access to a pre-screened pool of active and passive IT professionals across India, ready for your next opening.",
    color: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: FiEye,
    title: "Transparent Process",
    description:
      "You stay informed at every stage of our IT staffing process. No black boxes, no surprises.",
    color: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    icon: FiRefreshCw,
    title: "Zero-Replacement Guarantee",
    description:
      "If a placed candidate does not perform within the guarantee period, we provide a free replacement.",
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

      {/* ── HERO ── */}
      <section className="py-20 bg-linear-to-b from-blue-50 to-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center px-5 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              IT & Technology Recruitment
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Leading <span className="text-blue-600">IT Recruitment Agency</span> for Top Tech Talent
            </h1>
            <p className="text-lg text-gray-500 mb-4 font-medium">
              Why Is Finding the Right Tech Talent Still So Hard in 2026?
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
              You post the job. Hundreds apply. But the one developer, cloud architect,
              or cybersecurity expert you actually need? Nowhere to be found. The problem
              is not the talent pool — it is the gap between where top IT professionals
              are and where most hiring processes look.
            </p>
            <p className="text-xl text-gray-700 font-medium mb-10">
              Workeraa bridges that gap. We are a trusted{" "}
              <strong>IT Recruitment Agency</strong> built for companies that cannot
              afford a bad hire or a slow one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                Get Matched with Top IT Talent
                <FiArrowRight />
              </Link>
              <Link
                href="/services"
                className="border border-gray-300 hover:border-blue-600 hover:text-blue-600 text-gray-700 px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    

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
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Does Our IT Staffing Company Screen Candidates Before You Meet Them?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every profile we share is screened, assessed, and matched with purpose.
              No guesswork — just results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {screening.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mb-5">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
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
              className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-xl font-bold text-lg inline-flex items-center gap-2 transition-colors"
            >
              Talk to Our IT Recruitment Team
              <FiArrowRight />
            </Link>
          </motion.div>
        </Container>
      </section>

      {/* ── WHATSAPP ── */}
      <WhatsAppWidget
        phoneNumber="918700192565"
        defaultMessage="Hi! I'm looking for IT recruitment services. Can you help?"
      />
    </main>
  );
}