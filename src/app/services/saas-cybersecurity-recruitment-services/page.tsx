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
  FiClock,
  FiSliders,
  FiStar,
  FiZap,
  FiUsers,
  FiMessageSquare,
  FiAward,
  FiLock,
  FiCode,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import { HeroContactForm } from "@/components/sections/HeroContactForm";
import { LeadForm } from "@/components/sections/LeadForm";

// ── Data ──────────────────────────────────────────────────────────────────────

const roles = [
  "SaaS Account Executives and Customer Success Managers",
  "Product Managers and Growth Specialists",
  "Cloud Security Engineers and Security Architects",
  "SOC Analysts and Incident Response Experts",
  "Ethical Hackers and Penetration Testers",
  "SaaS Implementation and Onboarding Specialists",
  "Risk, Compliance, and Governance Professionals",
  "DevSecOps Engineers and Identity Access Experts",
];

const screeningSteps = [
  {
    icon: FiCode,
    title: "Domain Understanding",
    description:
      "We assess how well candidates understand SaaS models, cloud environments, and cybersecurity frameworks. Surface-level familiarity is not enough for us to move forward.",
  },
  {
    icon: FiAward,
    title: "Certification Validation",
    description:
      "For cybersecurity roles, credentials matter. Certifications such as CISSP, CEH, and Security+ are verified before a candidate progresses further in the process.",
  },
  {
    icon: FiStar,
    title: "Practical Experience Evaluation",
    description:
      "We focus on actual work done — tools used, systems managed, and real challenges solved — to understand how candidates perform beyond their job titles.",
  },
  {
    icon: FiMessageSquare,
    title: "Communication Skills",
    description:
      "SaaS professionals often interact with clients, while cybersecurity experts report to business leaders. We evaluate how clearly candidates communicate complex ideas.",
  },
  {
    icon: FiUsers,
    title: "Team and Culture Alignment",
    description:
      "Skills alone are not enough. We also consider how well a candidate fits your working style, team structure, and pace of execution.",
  },
  {
    icon: FiSliders,
    title: "Internal Quality Check",
    description:
      "Before any profile is shared, it goes through a final internal review to ensure consistency and relevance to your specific role.",
  },
];

const differentiators = [
  {
    icon: FiLock,
    color: "text-blue-600",
    bg: "bg-blue-50",
    title: "Deep Industry Understanding",
    description:
      "We are familiar with SaaS metrics, cloud systems, and cybersecurity frameworks — allowing us to identify candidates who can contribute meaningfully from day one.",
  },
  {
    icon: FiZap,
    color: "text-yellow-500",
    bg: "bg-yellow-50",
    title: "Speed With Accuracy",
    description:
      "We deliver shortlisted profiles quickly while maintaining a strong focus on relevance and quality — no unnecessary volume.",
  },
  {
    icon: FiSliders,
    color: "text-green-600",
    bg: "bg-green-50",
    title: "Flexible Hiring Support",
    description:
      "From full-time leadership roles to project-based hiring, we adapt our approach based on your business needs and timeline.",
  },
  {
    icon: FiUsers,
    color: "text-purple-600",
    bg: "bg-purple-50",
    title: "Access to Hidden Talent Pools",
    description:
      "Many of the best professionals are not actively applying for jobs. Our network connects you with experienced, pre-qualified candidates beyond traditional channels.",
  },
  {
    icon: FiMessageSquare,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    title: "Clear and Consistent Communication",
    description:
      "You stay informed throughout the hiring process with clear updates and expectations at every stage — no radio silence.",
  },
  {
    icon: FiShield,
    color: "text-rose-600",
    bg: "bg-rose-50",
    title: "Startup to Enterprise Ready",
    description:
      "We support early-stage SaaS companies building their first teams and established organisations expanding their cybersecurity capabilities.",
  },
];

const faqs = [
  {
    q: "How quickly can you share relevant candidates?",
    a: "For most roles, we begin sharing suitable profiles within a few days. More specialised or senior positions may take slightly longer depending on the requirements.",
  },
  {
    q: "Do you work with startups as well as large enterprises?",
    a: "Yes, we support both early-stage SaaS companies building their teams and established organisations expanding their cybersecurity capabilities.",
  },
  {
    q: "Can you find candidates with specific certifications or niche skills?",
    a: "Yes, we regularly work on specialised roles and prioritise candidates with verified credentials such as CISSP, CEH, and Security+ and relevant experience.",
  },
  {
    q: "Do you cover both technical and business roles within SaaS?",
    a: "Absolutely. As a full-scale SaaS Recruitment Agency, we hire across product, engineering, sales, and customer success functions.",
  },
  {
    q: "How do you ensure candidates are a strong match?",
    a: "We follow a structured screening process that focuses on real experience, technical understanding, and role alignment before sharing profiles.",
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

export default function SaaSCybersecurityRecruitmentPage() {
  return (
    <main>

      {/* ── HERO ── */}
        <HeroContactForm
        backgroundImage="/images/misc/cybersecurity.jpg"
        mobileBackgroundImage="/images/misc/cybersecurity-small.jpg"
        badge="SaaS & Cybersecurity Recruitment"
        heading={
            <>
            Cybersecurity Recruitment Agency &{" "}
            <span className="text-blue-400">SaaS Recruitment</span> Company
            </>
        }
        subheading="SaaS and cybersecurity talent is scarce, competitive, and rarely visible on job boards. We connect you with the experts your product and security teams actually need."
        ctaLabel="View All Services"
        ctaHref="/services"
        form={
            <LeadForm
            heading="Hire SaaS & Cyber Talent Fast"
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
                    "Cloud Security Engineer",
                    "SOC Analyst",
                    "Penetration Tester",
                    "SaaS Product Manager",
                    "DevSecOps Engineer",
                    "Other",
                ],
                },
            ]}
            buttonText="Get Matched with Tech Talent"
            onSubmit={(data: any) => console.log("SaaS Lead:", data)}
            />
        }
        />

      {/* ── SECTION 1: Roles ── */}
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
                What Roles Does Our{" "}
                <span className="text-blue-600">SaaS Recruitment Agency</span>{" "}
                Help You Hire?
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                Hiring in SaaS and cybersecurity is not about filling positions
                quickly. It is about finding individuals who understand the
                systems, tools, and outcomes tied to each role.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                A strong SaaS Recruitment Agency does more than match titles —
                it identifies candidates who understand subscription models,
                product delivery, and user lifecycle metrics critical for
                business success.
              </p>
              <ContactFormDialog
                defaultService="saas-recruitment"
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

      {/* ── SECTION 2: Screening ── */}
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
              How Does Our{" "}
              <span className="text-blue-600">Cybersecurity Recruitment Agency</span>{" "}
              Screen Candidates?
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              In fast-moving industries like SaaS and cybersecurity, it is easy
              for candidates to present polished profiles. Identifying real
              expertise requires a deeper, more structured approach.
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
              Why Workeraa Stands Out as a{" "}
              <span className="text-blue-600">SaaS Recruitment Company?</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Hiring for SaaS and cybersecurity requires a different mindset.
              The talent pool is competitive, and expectations are high.
              Businesses need a partner who understands both technology and
              hiring strategy.
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
              Questions SaaS and Cybersecurity{" "}
              <span className="text-blue-600">Hiring Teams Often Ask</span>
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
              Ready to Hire SaaS and Cybersecurity Talent With Confidence?
            </h2>
            <p className="text-blue-100 text-lg mb-10 leading-relaxed">
              Building a strong SaaS or cybersecurity team requires more than
              just filling vacancies. It requires hiring people who understand
              your systems, your challenges, and your growth goals. We are here
              to help you hire with clarity and confidence.
            </p>
            <ContactFormDialog
              defaultService="saas-recruitment"
              trigger={
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 group"
                >
                  Talk to Our SaaS &amp; Cybersecurity Recruitment Team
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