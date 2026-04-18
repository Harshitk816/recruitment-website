"use client";
import React from "react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiZap, FiLayers, FiRotateCw, FiCheck,
  FiUsers, FiTarget, FiStar, FiBriefcase,
} from "react-icons/fi";
import { FaCrown } from "react-icons/fa";
import { useUserMode } from "@/contexts/UserModeContext";

// ─── Content ──────────────────────────────────────────────────────────────────

const content = {
  employer: {
    eyebrow: "Our Services",
    heading: <><span className="text-blue-600">Innovation Hired,</span> Growth Inspired</>,
    subtext:
      "Transform your hiring process with our comprehensive recruitment solutions. From executive search to flexible staffing, we deliver top talent that drives your business forward.",
    ctaHeading: "Ready to Transform Your Hiring?",
    ctaSubtext:
      "Let's discuss your specific requirements and create a customised recruitment strategy that delivers results.",
    ctaButton: "Get Free Consultation",
    services: [
      {
        id: 1,
        icon: FiZap,
        title: "Top Talent, On Demand",
        subtitle: "Quick and quality hiring for every role",
        description:
          "Fast-track your hiring process with our curated pool of pre-screened candidates. Get quality matches in days, not months.",
        features: [
          "Fast turnaround time",
          "Pre-screened candidates",
          "Quality assurance guarantee",
          "Flexible engagement models",
        ],
        primaryColor: "text-blue-600",
        bgColor: "bg-blue-50",
        iconBg: "bg-blue-100",
        borderColor: "border-blue-200",
        checkColor: "text-blue-500",
      },
      {
        id: 2,
        icon: FaCrown,
        title: "Leaders That Lead",
        subtitle: "Executive & senior-level recruitment",
        description:
          "Strategic leadership placement for C-suite executives and senior management roles that drive organisational success.",
        features: [
          "C-suite placements",
          "Board-level positions",
          "Strategic leadership roles",
          "Executive assessment",
        ],
        primaryColor: "text-purple-600",
        bgColor: "bg-purple-50",
        iconBg: "bg-purple-100",
        borderColor: "border-purple-200",
        checkColor: "text-purple-500",
      },
      {
        id: 3,
        icon: FiLayers,
        title: "Built to Last",
        subtitle: "Permanent hiring for long-term success",
        description:
          "Comprehensive permanent placement services focused on cultural fit and long-term growth potential for sustainable success.",
        features: [
          "Cultural alignment focus",
          "Skills & personality assessment",
          "Growth potential evaluation",
          "Long-term success tracking",
        ],
        primaryColor: "text-green-600",
        bgColor: "bg-green-50",
        iconBg: "bg-green-100",
        borderColor: "border-green-200",
        checkColor: "text-green-500",
      },
      {
        id: 4,
        icon: FiRotateCw,
        title: "Flexibility First",
        subtitle: "Contract & project-based staffing solutions",
        description:
          "Adaptable staffing solutions for temporary, contract, and project-based requirements with flexible engagement terms.",
        features: [
          "Project-specific staffing",
          "Temporary placements",
          "Contract-to-hire options",
          "Scalable workforce solutions",
        ],
        primaryColor: "text-orange-600",
        bgColor: "bg-orange-50",
        iconBg: "bg-orange-100",
        borderColor: "border-orange-200",
        checkColor: "text-orange-500",
      },
    ],
  },
  jobseeker: {
    eyebrow: "How We Help You",
    heading: <><span className="text-blue-600">Your Career,</span> Our Priority</>,
    subtext:
      "We match driven professionals with the right opportunities — offering guidance, preparation, and support at every stage of your job search.",
    ctaHeading: "Ready to Take the Next Step?",
    ctaSubtext:
      "Share your profile with us and let our recruiters connect you with the right opportunity across top companies hiring now.",
    ctaButton: "Share Your Profile",
    services: [
      {
        id: 1,
        icon: FiTarget,
        title: "Role Matching",
        subtitle: "Opportunities aligned to your goals",
        description:
          "We don't just send your resume everywhere. We match your skills, experience, and career ambitions to roles where you'll genuinely thrive.",
        features: [
          "Personalised role recommendations",
          "Industry & function alignment",
          "Seniority-appropriate matches",
          "Active openings only",
        ],
        primaryColor: "text-blue-600",
        bgColor: "bg-blue-50",
        iconBg: "bg-blue-100",
        borderColor: "border-blue-200",
        checkColor: "text-blue-500",
      },
      {
        id: 2,
        icon: FiStar,
        title: "Interview Preparation",
        subtitle: "Walk in confident, walk out with an offer",
        description:
          "Before every interview, our recruiters brief you on the company, role expectations, likely questions, and how to present your best self.",
        features: [
          "Company & role briefing",
          "Resume feedback & optimisation",
          "Salary expectation guidance",
          "Mock interview tips",
        ],
        primaryColor: "text-purple-600",
        bgColor: "bg-purple-50",
        iconBg: "bg-purple-100",
        borderColor: "border-purple-200",
        checkColor: "text-purple-500",
      },
      {
        id: 3,
        icon: FiBriefcase,
        title: "Permanent Placements",
        subtitle: "Full-time roles at great companies",
        description:
          "We focus on long-term fit — placing you in a company where your skills are valued and where you have room to grow.",
        features: [
          "Full-time employment",
          "Culture-fit assessment",
          "Growth trajectory roles",
          "Across 6 core industries",
        ],
        primaryColor: "text-green-600",
        bgColor: "bg-green-50",
        iconBg: "bg-green-100",
        borderColor: "border-green-200",
        checkColor: "text-green-500",
      },
      {
        id: 4,
        icon: FiRotateCw,
        title: "Contract & Flexible Roles",
        subtitle: "Short-term, project-based & contract work",
        description:
          "Looking for flexibility? We have contract and project-based roles across industries — great for building experience or transitioning careers.",
        features: [
          "Short-term contracts",
          "Project-based assignments",
          "Contract-to-hire pathways",
          "Flexible working arrangements",
        ],
        primaryColor: "text-orange-600",
        bgColor: "bg-orange-50",
        iconBg: "bg-orange-100",
        borderColor: "border-orange-200",
        checkColor: "text-orange-500",
      },
    ],
  },
};

// ─── Card ─────────────────────────────────────────────────────────────────────

type ServiceItem = (typeof content.employer.services)[0];

const ServiceCard: React.FC<{ service: ServiceItem; index: number }> = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group relative"
  >
    <div
      className={`relative p-8 rounded-2xl border-2 ${service.borderColor} bg-white shadow-lg
        transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
    >
      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className={`w-16 h-16 rounded-xl ${service.iconBg} flex items-center justify-center mb-6
          border-2 ${service.borderColor} transition-all duration-300 group-hover:shadow-lg`}
      >
        <service.icon className={`text-2xl ${service.primaryColor}`} />
      </motion.div>

      {/* Content */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
        <p className={`text-lg mb-4 font-medium ${service.primaryColor}`}>{service.subtitle}</p>
        <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>

        <ul className="space-y-3">
          {service.features.map((feature, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + idx * 0.05 }}
              className="flex items-center space-x-3"
            >
              <div className={`flex-shrink-0 w-5 h-5 rounded-full ${service.iconBg} flex items-center justify-center`}>
                <FiCheck className={`text-xs ${service.checkColor}`} />
              </div>
              <span className="text-gray-700 text-sm">{feature}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-4 right-4 w-16 h-16 opacity-10">
        <div className={`w-full h-full rounded-full ${service.iconBg}`} />
      </div>
      <div className="absolute bottom-4 right-4 w-8 h-8 opacity-20">
        <div className={`w-full h-full rounded-full ${service.iconBg}`} />
      </div>
    </div>
  </motion.div>
);

// ─── Section ──────────────────────────────────────────────────────────────────

export const Services: React.FC = () => {
  const { mode } = useUserMode();
  const c = content[mode];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <Container>

        {/* Header */}
        <AnimatePresence mode="wait">
          <motion.div
            key={mode + "-header"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-6 border-2 border-blue-200">
              <FiZap className="text-blue-600" />
              {c.eyebrow}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {c.heading}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {c.subtext}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={mode + "-cards"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {c.services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA Banner */}
        <AnimatePresence mode="wait">
          <motion.div
            key={mode + "-cta"}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">{c.ctaHeading}</h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">{c.ctaSubtext}</p>
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="!bg-white !text-blue-600 hover:!bg-blue-700 hover:!text-white !border-0 transition-all duration-200"
              >
                {c.ctaButton}
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>

      </Container>
    </section>
  );
};