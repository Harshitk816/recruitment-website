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
  FiUsers,
  FiMessageSquare,
  FiShield,
  FiZap,
  FiHeart,
  FiRefreshCw,
  FiGlobe,
  FiMonitor,
  FiClipboard,
  FiStar,
  FiChevronDown,
  FiChevronUp,
  FiPhone,
} from "react-icons/fi";
import { LeadForm } from "@/components/sections/LeadForm";
import { HeroContactForm } from "@/components/sections/HeroContactForm";

// ── Data ──────────────────────────────────────────────────────────────────────

const roles = [
  { icon: FiPhone, label: "Customer Support Executives", sub: "& Service Associates" },
  { icon: FiMessageSquare, label: "Inbound & Outbound", sub: "Call Center Agents" },
  { icon: FiUsers, label: "BPO Team Leaders", sub: "& Operations Supervisors" },
  { icon: FiClipboard, label: "Quality Analysts", sub: "& Process Compliance Officers" },
  { icon: FiMonitor, label: "Technical Support", sub: "& Help Desk Representatives" },
  { icon: FiRefreshCw, label: "Back Office", sub: "& Data Processing Executives" },
  { icon: FiStar, label: "Senior Escalation Managers", sub: "& Support Leads" },
  { icon: FiGlobe, label: "Multilingual Customer", sub: "Support Professionals" },
  { icon: FiClipboard, label: "MIS Analysts", sub: "& Workforce Planning Specialists" },
];

const screeningSteps = [
  {
    icon: FiMessageSquare,
    title: "Communication & Language Evaluation",
    description:
      "Every candidate is assessed on clarity, tone, listening ability, and how they hold a conversation when things get challenging. Both spoken and written communication are reviewed.",
  },
  {
    icon: FiHeart,
    title: "Mindset & Customer-First Attitude",
    description:
      "Process knowledge is teachable. A genuine customer-first mindset is not. We look for candidates who are naturally calm, empathetic, and solution-oriented.",
  },
  {
    icon: FiStar,
    title: "Live Scenario & Situational Assessment",
    description:
      "Candidates go through practical real-world scenarios before we recommend them. How they handle a difficult customer tells us what we need to know before your interview.",
  },
  {
    icon: FiClipboard,
    title: "Work History & Stability Review",
    description:
      "We look at employment patterns, tenure, and career progression to identify candidates genuinely looking for long-term stability in their next role.",
  },
  {
    icon: FiMonitor,
    title: "Tool & Process Familiarity",
    description:
      "We check working knowledge of CRM platforms, ticketing tools, and call center systems so your onboarding stays short and your new hire contributes quickly.",
  },
  {
    icon: FiShield,
    title: "Quality Assurance Review",
    description:
      "Every profile goes through a thorough internal review before reaching you. Only well-assessed, thoroughly vetted candidates make it to your interview stage.",
  },
];

const differentiators = [
  {
    icon: FiUsers,
    color: "text-blue-600",
    bg: "bg-blue-50",
    title: "Bulk Hiring With Consistent Standards",
    description:
      "Five agents or five hundred — every candidate goes through the same thorough process. Scale never changes how seriously we take each placement.",
  },
  {
    icon: FiZap,
    color: "text-yellow-500",
    bg: "bg-yellow-50",
    title: "Fast Turnaround on Every Role",
    description:
      "Shortlisted profiles reach you within 24 to 48 hours for most roles. Open seats have a real cost and we move with the urgency your business deserves.",
  },
  {
    icon: FiRefreshCw,
    color: "text-green-600",
    bg: "bg-green-50",
    title: "Every Hiring Format, One Partner",
    description:
      "Permanent staff, short-term contract agents for seasonal campaigns, or flexible workforce for demand peaks. One dependable partner for every type of requirement.",
  },
  {
    icon: FiHeart,
    color: "text-rose-500",
    bg: "bg-rose-50",
    title: "Attrition-Conscious Matching",
    description:
      "We match candidates based on genuine compatibility with the role, team, and environment. Better matched candidates stay longer and reduce the burden of constant rehiring.",
  },
  {
    icon: FiGlobe,
    color: "text-purple-600",
    bg: "bg-purple-50",
    title: "Wide Talent Network",
    description:
      "Our pre-screened network spans major business hubs and fast-growing markets. You get access to a broader talent pool well beyond the usual hiring channels.",
  },
];

const stats = [
  { value: "24–48hrs", label: "Profile turnaround" },
  { value: "Bulk Ready", label: "5 to 500+ agents" },
  { value: "Voice & Non-Voice", label: "All BPO functions" },
  { value: "Multilingual", label: "Regional & international" },
];

const faqs = [
  {
    q: "Can your BPO recruitment agency handle large-scale hiring without losing quality?",
    a: "Yes. Our process stays exactly the same whether you need ten people or a hundred. Every candidate is properly sourced, screened, and assessed before they reach you. Volume never changes our standard.",
  },
  {
    q: "Can better hiring actually fix our attrition problem?",
    a: "Most attrition starts when someone joins a role that was never the right fit. We assess work history, stability patterns, and genuine role compatibility so the match is right from day one.",
  },
  {
    q: "Do you source multilingual support executives for diverse language requirements?",
    a: "Absolutely. We recruit multilingual customer support professionals across a wide range of regional and international language requirements based on where your customers are.",
  },
  {
    q: "Do your outsourcing recruitment services cover non-voice and back office BPO roles?",
    a: "Yes. We hire across voice and non-voice functions including data entry, back office processing, content moderation, and business process support roles of all kinds.",
  },
  {
    q: "How does Workeraa support us after a candidate has been placed?",
    a: "We stay engaged well beyond placement. If any concerns come up early on, we work closely with you to understand the situation and make sure everything moves in the right direction.",
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

export default function BPORecruitmentPage() {
  return (
    <main>

      {/* ── HERO ── */}
      <HeroContactForm
      backgroundImage="/images/misc/bpo.jpg"
      mobileBackgroundImage="/images/misc/bpo-small.jpg"
        badge="BPO & Customer Support Recruitment"
        heading={
            <>
            Call Center Staffing Agency &{" "}
            <span className="text-blue-400">BPO Recruitment</span> Services
            </>
        }
        subheading="Seats need filling and call volumes are climbing. Stop hiring in circles — we bring you support professionals who show up, stay, and represent your brand well."
        ctaLabel="View All Services"
        ctaHref="/services"
        form={
            <LeadForm
            heading="Build Your Support Team Fast"
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
                    "Customer Support Executive",
                    "Inbound / Outbound Agent",
                    "BPO Team Leader",
                    "Quality Analyst",
                    "Technical Support Rep",
                    "Other",
                ],
                },
            ]}
            buttonText="Get Matched with Support Talent"
            onSubmit={(data: any) => console.log("BPO Lead:", data)}
            />
        }
        />

      {/* ── SECTION 1: Roles — two-column icon list ── */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-14 items-start">

            {/* Left: copy */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-24"
            >
              <div className="inline-flex items-center px-4 py-1.5 bg-green-50 text-green-700 rounded-full text-xs font-semibold uppercase tracking-wide mb-5">
                Roles We Cover
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Which BPO and Customer Support Roles Does{" "}
                <span className="text-blue-600">Workeraa Fill?</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                The people you hire for customer support carry your brand tone,
                represent your values, and decide whether a customer comes back
                or walks away. That kind of responsibility deserves far more
                than a rushed shortlist.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                As a dedicated call center staffing agency, we go well beyond
                what a resume shows — assessing how candidates communicate under
                pressure and whether they bring the patience and drive these
                roles truly demand.
              </p>
              <ContactFormDialog
                defaultService="bpo-recruitment"
                trigger={
                  <Button variant="outline" className="group">
                    Discuss Your Hiring Needs
                    <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                }
              />
            </motion.div>

            {/* Right: icon role grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {roles.map((role, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.35 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 hover:border-blue-200 hover:bg-blue-50/30 transition-all"
                >
                  <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <role.icon className="text-blue-600 text-sm" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm leading-snug">
                      {role.label}
                    </p>
                    <p className="text-xs text-gray-500">{role.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </Container>
      </section>

      {/* ── SECTION 2: Screening — with callout quote card ── */}
      <section className="py-20 bg-gray-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center px-4 py-1.5 bg-yellow-50 text-yellow-700 rounded-full text-xs font-semibold uppercase tracking-wide mb-5">
              Our Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Does Workeraa Ensure Every{" "}
              <span className="text-blue-600">Candidate Is Worth Your Time?</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Lower attrition starts before someone joins your team. It starts
              with knowing whether the candidate is genuinely suited for the
              role, the environment, and the pace.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Callout card — spans one column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-blue-600 rounded-2xl p-8 flex flex-col justify-between text-white lg:row-span-2"
            >
              <div>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <FiShield className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4 leading-snug">
                  Every profile we share is one we stand behind.
                </h3>
                <p className="text-blue-100 leading-relaxed text-sm">
                  Our six-step evaluation process is designed to ensure that
                  your time is spent only on candidates who genuinely meet your
                  expectations — not ones who just look good on paper.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-white/70 text-xs uppercase tracking-wide font-medium mb-1">
                  Our promise
                </p>
                <p className="font-semibold text-sm">
                  Quality over volume. Every single time.
                </p>
              </div>
            </motion.div>

            {/* Screening steps — 2-col grid */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
              {screeningSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-3">
                    <step.icon className="text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── SECTION 3: Why Workeraa — large feature rows ── */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center px-4 py-1.5 bg-purple-50 text-purple-700 rounded-full text-xs font-semibold uppercase tracking-wide mb-5">
              Why Workeraa
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Do Growing BPO Teams{" "}
              <span className="text-blue-600">Choose Workeraa?</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Fast hiring is easy to promise. Hiring someone who stays, performs,
              and grows with your team is what actually matters.
            </p>
          </motion.div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {differentiators.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -16 : 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start gap-5 p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-sm hover:border-blue-100 transition-all"
              >
                <div
                  className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center shrink-0`}
                >
                  <item.icon className={`text-xl ${item.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <FiCheckCircle className="text-gray-200 text-xl shrink-0 hidden md:block mt-1" />
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
              What BPO Hiring Managers{" "}
              <span className="text-blue-600">Ask Us Most</span>
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
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build a BPO Team That Actually Stays?
            </h2>
            <p className="text-blue-100 text-lg mb-10 leading-relaxed">
              Constant rehiring drains time, budget, and team morale. Our
              approach is built around candidates who are genuinely prepared,
              well matched, and ready to represent your brand every single day.
            </p>
            <ContactFormDialog
              defaultService="bpo-recruitment"
              trigger={
                <Button
                  variant="outline"
                  size="lg"
                  className="group"
                >
                  Connect With Our BPO Recruitment Team
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