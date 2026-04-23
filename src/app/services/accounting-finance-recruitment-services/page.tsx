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
  FiShield,
  FiClock,
  FiSliders,
  FiStar,
  FiBookOpen,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";

// ── Data ──────────────────────────────────────────────────────────────────────

const roles = [
  "Accountants and Chartered Accountants",
  "Financial Planning and Analysis professionals",
  "Auditors and compliance specialists",
  "Taxation and risk experts",
  "Accounts payable and receivable teams",
  "Payroll and finance operations roles",
  "Finance managers and controllers",
  "Senior leadership such as CFOs",
];

const screeningSteps = [
  {
    icon: FiBookOpen,
    title: "Skill-Based Evaluation",
    description:
      "We look beyond qualifications and test how well candidates understand finance concepts in real situations.",
  },
  {
    icon: FiCheckCircle,
    title: "Detailed Experience Check",
    description:
      "We review their previous work, responsibilities, and actual involvement in financial processes.",
  },
  {
    icon: FiShield,
    title: "Understanding of Compliance",
    description:
      "Finance roles involve regulations and standards. We ensure candidates are aware of these requirements.",
  },
  {
    icon: FiUsers,
    title: "Communication Clarity",
    description:
      "Finance professionals must explain numbers in a simple way. We check how well they communicate insights.",
  },
  {
    icon: FiStar,
    title: "Background Verification",
    description:
      "Every profile is verified before it reaches you, so there are no surprises later.",
  },
  {
    icon: FiSliders,
    title: "Final Internal Review",
    description:
      "Our team evaluates each candidate before sharing. You only see profiles that meet the role requirements.",
  },
];

const differentiators = [
  {
    icon: FiStar,
    color: "text-blue-600",
    bg: "bg-blue-50",
    title: "Focused Finance Hiring",
    description:
      "We work specifically on finance and accounting roles, so we understand what each position actually requires.",
  },
  {
    icon: FiClock,
    color: "text-yellow-500",
    bg: "bg-yellow-50",
    title: "Faster Turnaround Time",
    description:
      "We share relevant profiles quickly so your hiring process does not slow down.",
  },
  {
    icon: FiSliders,
    color: "text-green-600",
    bg: "bg-green-50",
    title: "Flexible Hiring Options",
    description:
      "Whether you need permanent employees or short-term support, our finance staffing agency adapts to your needs.",
  },
  {
    icon: FiUsers,
    color: "text-purple-600",
    bg: "bg-purple-50",
    title: "Access to Strong Talent Network",
    description:
      "We connect you with professionals who are not always active on job portals but are open to the right opportunity.",
  },
  {
    icon: FiCheckCircle,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    title: "Customized Hiring Approach",
    description:
      "Every business is different. We tailor our Accounting Recruitment Services based on your requirements.",
  },
  {
    icon: FiShield,
    color: "text-rose-600",
    bg: "bg-rose-50",
    title: "Complete Recruitment Support",
    description:
      "From sourcing candidates to onboarding, we stay involved at every stage.",
  },
];

const faqs = [
  {
    q: "How do your Accounting Recruitment Services work?",
    a: "Our Accounting Recruitment Services focus on understanding your role and sharing only relevant, pre-screened candidates.",
  },
  {
    q: "Can your finance staffing agency handle urgent hiring?",
    a: "Yes, our finance staffing agency can quickly provide suitable candidates through our ready talent network.",
  },
  {
    q: "What roles are included in your Finance Accounting Services?",
    a: "Our Finance Accounting Services cover roles from accountants to senior finance leaders including CFOs.",
  },
  {
    q: "How are you different from other accounting recruitment agencies?",
    a: "Unlike typical accounting recruitment agencies, we focus on quality screening and role-specific matching rather than volume.",
  },
  {
    q: "Do you support long-term hiring needs?",
    a: "Yes, our finance staffing agency helps you hire candidates who fit both immediate and long-term business goals.",
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

export default function FinanceRecruitmentPage() {
  return (
    <main>

      {/* ── HERO ── */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-5 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                Finance & Accounting Recruitment
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Expert Accounting Recruitment &{" "}
                <span className="text-blue-600">Finance Staffing</span> Services
              </h1>

              <p className="text-lg text-gray-500 mb-4 leading-relaxed">
                Finding the right finance talent should not feel this difficult.
                You shortlist candidates, schedule interviews, and still end up
                unsure. Hiring in finance is not just about qualifications
                anymore — it is about trust, accuracy, and the ability to handle
                real business pressure.
              </p>
              <p className="text-lg text-gray-500 mb-10 leading-relaxed">
                The best finance professionals are rarely actively applying. That
                is where Workeraa steps in — connecting you with professionals
                who are not just available, but truly suitable for your role.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ContactFormDialog
                  defaultService="finance-recruitment"
                  trigger={
                    <Button size="lg" className="group">
                      Find the Right Finance Talent
                      <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  }
                />
                <Button variant="outline" size="lg" href="/services">
                  Explore All Services
                </Button>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── SECTION 1: Roles We Hire For ── */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left: copy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-4 py-1.5 bg-green-50 text-green-700 rounded-full text-xs font-semibold uppercase tracking-wide mb-5">
                Roles We Cover
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Kind of Finance Roles Can We{" "}
                <span className="text-blue-600">Help You Hire?</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Every business handles finances differently, so hiring needs
                also change. Some companies need operational support, while
                others need strategic leadership. Our Finance Accounting
                Services are built to support this entire range.
              </p>
              <ContactFormDialog
                defaultService="finance-recruitment"
                trigger={
                  <Button variant="outline" className="group">
                    Discuss Your Hiring Needs
                    <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                }
              />
            </motion.div>

            {/* Right: roles list */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100"
            >
              <ul className="space-y-3">
                {roles.map((role, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.35 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-blue-50"
                  >
                    <FiCheckCircle className="text-blue-500 shrink-0" />
                    <span className="text-sm font-medium text-gray-700">
                      {role}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

          </div>
        </Container>
      </section>

      {/* ── SECTION 2: Screening Process ── */}
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
              How Does Our Finance Staffing Agency{" "}
              <span className="text-blue-600">Find & Screen</span> Candidates?
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Hiring for finance roles needs more than resume matching. It
              requires a clear understanding of accuracy, responsibility, and
              real-world experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {screeningSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <step.icon className="text-blue-600 text-lg" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── SECTION 3: Why Workeraa ── */}
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
              Why Do Companies Choose Workeraa Over Other{" "}
              <span className="text-blue-600">Accounting Recruitment Agencies?</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              A good hiring partner provides the needed balance — not too fast,
              not too slow. At Workeraa, our focus is simple: help you hire the
              right person without unnecessary delays.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-blue-100 hover:shadow-sm bg-white transition-all"
              >
                <div
                  className={`w-11 h-11 ${item.bg} rounded-xl flex items-center justify-center shrink-0`}
                >
                  <item.icon className={`text-lg ${item.color}`} />
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
              Common Questions About{" "}
              <span className="text-blue-600">Finance Hiring</span>
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
              Build a Finance Team You Can Rely On
            </h2>
            <p className="text-blue-100 text-lg mb-10 leading-relaxed">
              Hiring in finance should feel confident, not uncertain. Share your
              hiring needs today and let our Accounting Recruitment Services
              connect you with the right talent, quickly and efficiently.
            </p>
            <ContactFormDialog
              defaultService="finance-recruitment"
              trigger={
                <Button
                    variant="outline"
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 group"
                >
                  Talk to Our Hiring Experts
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