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
} from "react-icons/fi";
import { LeadForm } from "@/components/sections/LeadForm";
import { HeroContactForm } from "@/components/sections/HeroContactForm";

// ── Data ──────────────────────────────────────────────────────────────────────

const roles = [
  { title: "Plant Managers", sub: "& Factory Leaders" },
  { title: "Production Supervisors", sub: "& Line Managers" },
  { title: "Quality Control", sub: "& QA Professionals" },
  { title: "Supply Chain", sub: "& Logistics Experts" },
  { title: "Procurement", sub: "& Vendor Management" },
  { title: "Safety Officers", sub: "& EHS Professionals" },
  { title: "Maintenance Engineers", sub: "& Technical Specialists" },
  { title: "Process Improvement", sub: "& Operations Analysts" },
  { title: "Warehouse & Inventory", sub: "Management Professionals" },
  { title: "Manufacturing Engineers", sub: "& Lean Practitioners" },
];

const screeningSteps = [
  {
    icon: FiClipboard,
    title: "Industry Alignment",
    description:
      "We prioritise candidates who have worked in similar sectors — automotive, pharma, FMCG, or heavy engineering. Familiarity with your industry means faster contribution.",
  },
  {
    icon: FiTool,
    title: "Real Work Experience",
    description:
      "We focus on what candidates have actually done — process improvements, production targets, floor management — not just what their job title suggests.",
  },
  {
    icon: FiTrendingUp,
    title: "Technical Knowledge",
    description:
      "Candidates are assessed on production systems, quality standards, and methodologies like Lean and Six Sigma that are essential in modern manufacturing.",
  },
  {
    icon: FiUsers,
    title: "Team & Leadership Capability",
    description:
      "Manufacturing roles often involve managing shifts and maintaining output under pressure. We evaluate how candidates have led teams in real, demanding environments.",
  },
  {
    icon: FiShield,
    title: "Safety & Compliance",
    description:
      "Industrial environments demand strict adherence to safety standards. We ensure candidates understand compliance requirements and workplace safety practices.",
  },
  {
    icon: FiSliders,
    title: "Final Quality Check",
    description:
      "Before sharing any profile, our internal team reviews it against both technical and practical expectations specific to your setup.",
  },
];

const differentiators = [
  {
    icon: FiClipboard,
    title: "Industry-Focused Hiring Approach",
    description:
      "We understand how manufacturing roles differ across industries and what practical experience really looks like in each environment.",
  },
  {
    icon: FiZap,
    title: "Faster Hiring Without Compromising Fit",
    description:
      "Delays in hiring can directly impact production. Our approach ensures you receive relevant profiles quickly, without unnecessary volume.",
  },
  {
    icon: FiSliders,
    title: "Flexible Staffing Solutions",
    description:
      "Full-time professionals, contract specialists, or short-term workforce support — we tailor our approach to match exactly what your operation needs.",
  },
  {
    icon: FiMapPin,
    title: "Strong Talent Reach Across India",
    description:
      "We work with candidates across major industrial regions, enabling us to support multi-location hiring at scale while maintaining quality consistency.",
  },
  {
    icon: FiTool,
    title: "Context-Driven Candidate Matching",
    description:
      "We invest time in understanding your production environment before starting any search — so candidates we send already understand what your floor demands.",
  },
];

const faqs = [
  {
    q: "Can you support hiring across multiple plants?",
    a: "Yes, we regularly manage hiring requirements across different locations while maintaining consistency in quality and candidate relevance.",
  },
  {
    q: "What if our requirement is very specialised?",
    a: "We work on niche roles regularly and focus on sourcing candidates with the exact technical and industry background your position demands.",
  },
  {
    q: "How do you ensure candidates understand our operations?",
    a: "We evaluate candidates based on their industry exposure, technical knowledge, and practical experience before sharing any profiles with you.",
  },
  {
    q: "How do you make sure the candidates are the right fit?",
    a: "We carefully screen and shortlist based on role-specific criteria, ensuring only the most relevant and qualified profiles reach you — saving time and improving accuracy.",
  },
  {
    q: "Do you handle both leadership and operational roles?",
    a: "Yes, we support hiring across all levels — from shop floor positions to senior plant leadership and functional heads.",
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

export default function ManufacturingRecruitmentPage() {
  return (
    <main>

      {/* ── HERO — dark industrial tone ── */}
      <HeroContactForm
      backgroundImage="/images/misc/manufacturing.jpg"
      mobileBackgroundImage="/images/misc/manufacturing-small.jpg"
        badge="Manufacturing & Operations Recruitment"
        heading={
          <>
            Manufacturing Recruitment Agency &{" "}
            <span className="text-blue-400">Industrial Staffing</span> Company
          </>
        }
        subheading="Finding operations professionals who perform under real production pressure — not just on paper — is what separates a good hire from a costly one."
        ctaLabel="View All Services"
        ctaHref="/services"
        form={
          <LeadForm
            heading="Hire Operations Talent Today"
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
                  "Plant Manager",
                  "Production Supervisor",
                  "Quality Control Professional",
                  "Safety / EHS Officer",
                  "Maintenance Engineer",
                  "Other",
                ],
              },
            ]}
            buttonText="Get Matched with Ops Talent"
            onSubmit={(data: any) => console.log("Mfg Lead:", data)}
          />
        }
      />

      {/* ── SECTION 1: Roles — bento grid ── */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-4 py-1.5 bg-orange-50 text-orange-700 rounded-full text-xs font-semibold uppercase tracking-wide mb-5">
                Roles We Cover
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Roles Can Our{" "}
                <span className="text-blue-600">Operations Recruitment Agency</span>{" "}
                Support?
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
                Every role in manufacturing comes with its own expectations. We
                look beyond job titles and focus on real responsibilities,
                technical exposure, and working conditions specific to your
                environment.
              </p>
            </motion.div>
          </div>

          {/* Bento grid */}
          {/* Uniform 2x5 grid — remove the col-span logic */}
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

          <div className="mt-10 text-center">
            <ContactFormDialog
              defaultService="manufacturing-recruitment"
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

      {/* ── SECTION 2: Screening — numbered timeline ── */}
      <section className="py-20 bg-gray-50">
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
              <div className="inline-flex items-center px-4 py-1.5 bg-yellow-50 text-yellow-700 rounded-full text-xs font-semibold uppercase tracking-wide mb-5">
                Our Process
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How Does Our{" "}
                <span className="text-blue-600">Industrial Staffing Agency</span>{" "}
                Evaluate Candidates?
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Hiring in manufacturing requires more than a resume review. The
                real difference lies in whether a candidate can handle the
                pressures and expectations of your specific setup.
              </p>
              <div className="bg-blue-600 text-white rounded-2xl p-6">
                <p className="text-sm font-medium opacity-80 mb-1">Our promise</p>
                <p className="font-bold text-lg leading-snug">
                  Only profiles that have passed every stage of our evaluation
                  reach your desk.
                </p>
              </div>
            </motion.div>

            {/* Right: numbered steps */}
            <div className="space-y-4">
              {screeningSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
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

          </div>
        </Container>
      </section>

      {/* ── SECTION 3: Why Workeraa — horizontal split panels ── */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center px-4 py-1.5 bg-green-50 text-green-700 rounded-full text-xs font-semibold uppercase tracking-wide mb-5">
              Why Workeraa
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Businesses Choose Workeraa as Their{" "}
              <span className="text-blue-600">Manufacturing Staffing Company</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Many hiring firms follow a basic process of sourcing and
              shortlisting. Manufacturing hiring requires deeper understanding,
              industry context, and a partner who knows what the floor demands.
            </p>
          </motion.div>

          {/* Alternating horizontal panels */}
          <div className="space-y-4 max-w-4xl mx-auto">
            {differentiators.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                viewport={{ once: true }}
                className={`flex items-start gap-6 p-6 rounded-2xl border transition-all hover:shadow-sm ${
                  i % 2 === 0
                    ? "bg-gray-50 border-gray-100"
                    : "bg-blue-50 border-blue-100"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                    i % 2 === 0 ? "bg-white" : "bg-white"
                  }`}
                >
                  <item.icon
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
        </Container>
      </section>

      {/* ── FAQs ── */}
      <section className="py-20 bg-gray-50">
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
              <span className="text-blue-600">Manufacturing Hiring Teams</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA — dark industrial, matches hero ── */}
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
              Looking to Hire Manufacturing Talent That Truly Fits Your
              Operations?
            </h2>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
              Your production and operations teams need people who can
              contribute immediately and grow with your business. Workeraa
              connects you with professionals who bring real experience and
              practical value — not just qualifications on paper.
            </p>
            <ContactFormDialog
              defaultService="manufacturing-recruitment"
              trigger={
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white !text-blue-600 hover:bg-blue-50 group"
                >
                  Talk to Our Manufacturing Recruitment Team
                  <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              }
            />
          </motion.div>
        </Container>
      </section>

      <SupportWidget phoneNumber="918700192565" />
    </main>
  );
}