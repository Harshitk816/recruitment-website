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
  FiTrendingUp,
  FiTarget,
  FiMessageSquare,
  FiStar,
  FiSliders,
  FiZap,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import { HeroContactForm } from "@/components/sections/HeroContactForm";
import { LeadForm } from "@/components/sections/LeadForm";

// ── Data ──────────────────────────────────────────────────────────────────────

const roles = [
  "Business Development Managers and Sales Executives",
  "Digital Marketing Managers and Growth Specialists",
  "Performance Marketing and Paid Media Experts",
  "Brand Strategists and Content Marketing Leads",
  "Sales Development Representatives (SDRs)",
  "SEO and Social Media Specialists",
  "Marketing Analysts and CRM Professionals",
  "Key Account Managers and Channel Sales Leaders",
];

const screeningSteps = [
  {
    icon: FiTrendingUp,
    title: "Performance-Based Evaluation",
    description:
      "We focus on measurable outcomes such as revenue generated, campaigns executed, and growth achieved. In sales and marketing, numbers reveal far more than job descriptions.",
  },
  {
    icon: FiTarget,
    title: "Role-Specific Skill Matching",
    description:
      "Every candidate is evaluated against the exact requirements of your role, whether that involves pipeline management, campaign optimisation, or brand positioning.",
  },
  {
    icon: FiMessageSquare,
    title: "Communication Assessment",
    description:
      "Sales and marketing professionals need strong communication skills. We evaluate how effectively candidates present ideas, handle conversations, and engage stakeholders.",
  },
  {
    icon: FiUsers,
    title: "Culture and Team Alignment",
    description:
      "Long-term success depends on more than skills. We consider how well a candidate fits your team structure, work style, and pace.",
  },
  {
    icon: FiShield,
    title: "Background and Experience Check",
    description:
      "We review previous roles, validate experience, and ensure consistency in performance history before sharing any profile.",
  },
  {
    icon: FiSliders,
    title: "Final Internal Review",
    description:
      "Each candidate goes through a final evaluation by our team to ensure quality, relevance, and alignment.",
  },
];

const differentiators = [
  {
    icon: FiTrendingUp,
    color: "text-blue-600",
    bg: "bg-blue-50",
    title: "Deep Understanding of Revenue Roles",
    description:
      "We understand sales funnels, marketing channels, and growth metrics. This allows us to identify candidates who can directly impact your business outcomes.",
  },
  {
    icon: FiZap,
    color: "text-yellow-500",
    bg: "bg-yellow-50",
    title: "Faster Hiring Without Compromising Quality",
    description:
      "Delays in hiring can affect pipeline coverage and campaign execution. Our process ensures you receive relevant profiles quickly without unnecessary volume.",
  },
  {
    icon: FiSliders,
    color: "text-green-600",
    bg: "bg-green-50",
    title: "Flexible Hiring Support",
    description:
      "From full-time hires to project-based roles, our sales recruitment services are designed to adapt to your business needs at every stage.",
  },
  {
    icon: FiStar,
    color: "text-purple-600",
    bg: "bg-purple-50",
    title: "Access to High-Quality Talent",
    description:
      "Top sales and marketing professionals are often not actively applying for jobs. We connect you with experienced candidates not visible through traditional channels.",
  },
  {
    icon: FiCheckCircle,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    title: "Streamlined Hiring Process",
    description:
      "We simplify sourcing, screening, and shortlisting — saving time and resources while improving hiring efficiency across the board.",
  },
  {
    icon: FiClock,
    color: "text-rose-600",
    bg: "bg-rose-50",
    title: "Startup to Enterprise Ready",
    description:
      "Our approach works equally well for early-stage startups and established organisations hiring at scale.",
  },
];

const faqs = [
  {
    q: "How quickly can you share relevant candidates?",
    a: "For most roles, we begin sharing well-matched profiles within a few days. More specialised or senior positions may take slightly longer depending on complexity.",
  },
  {
    q: "Do your marketing recruitment services cover both digital and offline roles?",
    a: "Yes, we support hiring across digital marketing, performance marketing, brand strategy, and traditional sales functions.",
  },
  {
    q: "Can you help build an entire sales team?",
    a: "Yes, we regularly support businesses hiring multiple roles simultaneously, especially during expansion or new market entry.",
  },
  {
    q: "Do you work with startups as well as large companies?",
    a: "Absolutely. Our approach works equally well for early-stage startups and established organisations.",
  },
  {
    q: "How do you ensure candidate quality?",
    a: "We follow a structured evaluation process focused on performance, skills, and role alignment before sharing profiles.",
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

export default function SalesMarketingRecruitmentPage() {
  return (
    <main>

      {/* ── HERO ── */}
      <HeroContactForm
      backgroundImage="/images/misc/sales.jpg"
      mobileBackgroundImage="/images/misc/sales-small.jpg"
        badge="Sales & Marketing Recruitment"
        heading={
            <>
            Expert <span className="text-blue-400">Sales & Marketing</span>{" "}
            Recruitment Services
            </>
        }
        subheading="The right sales or marketing hire can accelerate revenue and strengthen your brand. The wrong one costs you months. We help you get it right."
        ctaLabel="View All Services"
        ctaHref="/services"
        form={
            <LeadForm
            heading="Hire Sales & Marketing Talent"
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
                    "Business Development Manager",
                    "Digital Marketing Manager",
                    "Performance Marketing Expert",
                    "Sales Development Representative",
                    "Brand Strategist",
                    "Other",
                ],
                },
            ]}
            buttonText="Get Matched with Sales Talent"
            onSubmit={(data: any) => console.log("Sales Lead:", data)}
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
                What Roles Do Our{" "}
                <span className="text-blue-600">
                  Sales Recruitment Services
                </span>{" "}
                Cover?
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                Not every marketer drives growth, and not every salesperson
                closes deals. The difference lies in experience, skill, and the
                ability to deliver measurable outcomes.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                As one of the more focused sales recruiting companies, we look
                beyond job titles. We assess how candidates have performed, what
                targets they owned, and how they contributed to business growth.
              </p>
              <ContactFormDialog
                defaultService="sales-recruitment"
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
              How Do We Evaluate Candidates{" "}
              <span className="text-blue-600">Before You Meet Them?</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              A well-written resume can be misleading, especially in sales and
              marketing. The real difference lies in what someone has achieved,
              not just what they claim.
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
              What Sets Workeraa Apart From Other{" "}
              <span className="text-blue-600">Sales Recruiting Companies?</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Hiring for sales and marketing is not just about speed. It is
              about finding people who can perform in your specific business
              context and contribute to growth consistently.
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
              Questions Sales &amp; Marketing{" "}
              <span className="text-blue-600">Hiring Teams Commonly Ask</span>
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
              Ready to Hire Sales and Marketing Talent That Drives Real Results?
            </h2>
            <p className="text-blue-100 text-lg mb-10 leading-relaxed">
              Your business growth depends on the people you bring into your
              sales and marketing teams. Hiring the right talent can accelerate
              revenue, strengthen your brand, and improve execution across the
              board.
            </p>
            <ContactFormDialog
              defaultService="sales-recruitment"
              trigger={
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 group"
                >
                  Talk to Our Sales &amp; Marketing Recruitment Team
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