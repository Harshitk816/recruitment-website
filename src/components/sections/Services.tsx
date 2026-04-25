"use client";
import React from "react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  FiMonitor, FiDollarSign, FiTrendingUp, FiUsers,
  FiShield, FiHeadphones, FiBriefcase, FiArrowRight,
} from "react-icons/fi";

// ─── Data ────────────────────────────────────────────────────────────────────

const servicesData = [
  {
    id: 1,
    name: "IT & Technology Recruitment",
    subtitle: "Pre-vetted tech talent in 48–72 hours",
    description: "From full-stack developers to cloud architects, we place tech professionals who have been assessed on actual skills — not just their resume.",
    icon: FiMonitor,
    accentColor: "from-blue-600 to-cyan-500",
    href: "/services/it-recruitment-agency",
    image: "/images/industries/it.jpg",
  },
  {
    id: 2,
    name: "Finance & Accounting Recruitment",
    subtitle: "Sharp finance minds for sharper decisions",
    description: "We place finance professionals who combine deep technical expertise with the strategic clarity your business needs to scale confidently.",
    icon: FiDollarSign,
    accentColor: "from-blue-600 to-cyan-500",
    href: "/services/accounting-finance-recruitment-services",
    image: "/images/industries/finance.jpg",
  },
  {
    id: 3,
    name: "Sales & Marketing Recruitment",
    subtitle: "Revenue-driving talent, matched precisely",
    description: "We connect you with sales and marketing professionals who understand modern customer journeys and can build pipelines that actually convert.",
    icon: FiTrendingUp,
    accentColor: "from-blue-600 to-cyan-500",
    href: "/services/sales-marketing-recruitment-services",
    image: "/images/industries/sales.jpg",
  },
  {
    id: 4,
    name: "SaaS & Cybersecurity Recruitment",
    subtitle: "Specialists for cloud-first and security-first teams",
    description: "SaaS and cybersecurity talent is scarce and highly competitive. We reach passive candidates your competitors can't find on job boards.",
    icon: FiShield,
    accentColor: "from-blue-600 to-cyan-500",
    href: "/services/saas-cybersecurity-recruitment-services",
    image: "/images/industries/saas.jpg",
  },
  {
    id: 5,
    name: "Manufacturing & Operations",
    subtitle: "Skilled professionals who perform under pressure",
    description: "From plant managers to production supervisors, we hire people who are assessed on real operational competency — not just paper qualifications.",
    icon: FiUsers,
    accentColor: "from-blue-600 to-cyan-500",
    href: "/services/manufacturing-operation-recruitment-services",
    image: "/images/industries/manufacturing.jpg",
  },
  {
    id: 6,
    name: "BPO & Customer Support",
    subtitle: "Support teams that stay and represent you well",
    description: "We build BPO teams around genuine communication skills, stability patterns, and customer-first mindset — so attrition stops being your biggest problem.",
    icon: FiHeadphones,
    accentColor: "from-blue-600 to-cyan-500",
    href: "/services/bpo-customer-support-recruitment-services",
    image: "/images/industries/bpo.jpg",
  },
];

// ─── Card ─────────────────────────────────────────────────────────────────────

interface ServiceCardProps {
  service: (typeof servicesData)[0];
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      viewport={{ once: true }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/5]"
    >
      {/* Background image */}
      <motion.div
        animate={{ scale: hovered ? 1.07 : 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${service.image}')` }}
      />

      {/* Permanent bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

      {/* Default state */}
      <AnimatePresence>
        {!hovered && (
          <motion.div
            key="default"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute bottom-0 left-0 right-0 p-6"
          >
            <h3 className="text-white text-xl font-bold drop-shadow-md">
              {service.name}
            </h3>
            <p className="text-white/70 text-sm mt-1">{service.subtitle}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hover overlay */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key="hover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`absolute inset-0 bg-gradient-to-br ${service.accentColor} opacity-90`}
          />
        )}
      </AnimatePresence>

      {/* Hover content */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key="hover-content"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex flex-col justify-center p-7 z-10"
          >
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
              <service.icon className="text-white text-2xl" />
            </div>
            <h3 className="text-white text-xl font-bold mb-2">{service.name}</h3>
            <p className="text-white/90 text-sm leading-relaxed mb-6">
              {service.description}
            </p>
            <Link
              href={service.href}
              className="inline-flex items-center gap-2 bg-white text-gray-900 text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-white/90 transition-colors w-fit"
            >
              Learn More
              <FiArrowRight className="text-sm" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ─── Section ──────────────────────────────────────────────────────────────────

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <Container>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-5">
            <FiBriefcase className="shrink-0" />
            What We Do
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            Recruitment Services{" "}
            <span className="text-blue-600">Built for Your Industry</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            We don&apos;t do generic hiring. Every service is built around deep
            industry knowledge, role-specific screening, and a genuine
            understanding of what makes someone the right hire — not just an
            available one.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Not Sure Which Service Fits Your Needs?
          </h3>
          <p className="text-lg opacity-80 max-w-2xl mx-auto mb-8">
            Tell us what you&apos;re hiring for and we&apos;ll recommend the
            right approach — no commitment required.
          </p>
          <Button
            href="/contact"
            size="lg"
            className="bg-white !text-gray-900 hover:bg-gray-100 shadow-md"
          >
            Talk to Our Team
          </Button>
        </motion.div>

      </Container>
    </section>
  );
};