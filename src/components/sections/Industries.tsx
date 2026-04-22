"use client";
import React from "react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  FiMonitor, FiDollarSign, FiTrendingUp, FiUsers,
  FiShield, FiBriefcase, FiClock, FiArrowRight,
} from "react-icons/fi";
import { AchievementHero } from "./AchievementHero";

// ─── Data ───────────────────────────────────────────────────────────────────

const industriesData = [
  {
    id: 1,
    name: "IT & Technology",
    subtitle: "Driving innovation with the right tech minds",
    description: "From startups to MNCs, we connect organisations with exceptional technical talent that drives digital transformation and innovation.",
    icon: FiMonitor,
    accentColor: "from-blue-600 to-cyan-500",
    href: "/services/it-recruitment-agency",
    image: "/images/industries/it.jpg",
  },
  {
    id: 2,
    name: "Finance & Accounting",
    subtitle: "Smart talent for smarter decisions",
    description: "We specialise in placing finance professionals who combine analytical expertise with strategic thinking to drive business growth.",
    icon: FiDollarSign,
    accentColor: "from-blue-600 to-cyan-500",
    href: "/services/accounting-finance-recruitment-services",
    image: "/images/industries/finance.jpg",
  },
  {
    id: 3,
    name: "Sales & Marketing",
    subtitle: "Growth-focused professionals who deliver results",
    description: "Connect with sales and marketing leaders who understand modern customer journeys and can drive sustainable revenue growth.",
    icon: FiTrendingUp,
    accentColor: "from-blue-600 to-cyan-500",
    href: "/services/sales-marketing-recruitment-services",
    image: "/images/industries/sales.jpg",
  },
  {
    id: 4,
    name: "SaaS & Cybersecurity",
    subtitle: "Securing digital transformation with expert talent",
    description: "We connect organisations with cybersecurity experts and SaaS professionals who protect and scale cloud-first businesses.",
    icon: FiShield,
    accentColor: "from-blue-600 to-cyan-500",
    href: "/services/saas-cybersecurity-recruitment-services",
    image: "/images/industries/saas.jpg",
  },
  {
    id: 5,
    name: "Manufacturing & Operations",
    subtitle: "Skilled workforce powering industries",
    description: "We provide skilled professionals to ensure streamlined operations and productivity across manufacturing sectors.",
    icon: FiUsers,
    accentColor: "from-blue-600 to-cyan-500",
    href: "/services/manufacturing-operation-recruitment-services",
    image: "/images/industries/manufacturing.jpg",
  },
  {
    id: 6,
    name: "BPO & Customer Support",
    subtitle: "Voices that build stronger connections",
    description: "Find the best voices to represent and support your customers worldwide with empathy and professionalism.",
    icon: FiUsers,
    accentColor: "from-blue-600 to-cyan-500",
    href: "/services/bpo-customer-support-recruitment-services",
    image: "/images/industries/bpo.jpg",
  },
];

// ─── Card ────────────────────────────────────────────────────────────────────

interface IndustryCardProps {
  industry: (typeof industriesData)[0];
  index: number;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ industry, index }) => {
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
      {/* ── Background image ── */}
      <motion.div
        animate={{ scale: hovered ? 1.07 : 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${industry.image}')` }}
      />

      {/* ── Permanent bottom gradient — shows name always ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

      {/* ── Default state: industry name at bottom ── */}
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
              {industry.name}
            </h3>
            <p className="text-white/70 text-sm mt-1">{industry.subtitle}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Hover state: full overlay with description + CTA ── */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key="hover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`absolute inset-0 bg-gradient-to-br ${industry.accentColor} opacity-90`}
          />
        )}
      </AnimatePresence>

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
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
              <industry.icon className="text-white text-2xl" />
            </div>

            {/* Name */}
            <h3 className="text-white text-xl font-bold mb-2">
              {industry.name}
            </h3>

            {/* Description */}
            <p className="text-white/90 text-sm leading-relaxed mb-6">
              {industry.description}
            </p>

            {/* CTA */}
            <Link
              href={industry.href}
              className="inline-flex items-center gap-2 bg-white text-gray-900 text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-white/90 transition-colors w-fit"
            >
              Explore Service
              <FiArrowRight className="text-sm" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ─── Stats ───────────────────────────────────────────────────────────────────

const IndustryOverallStats: React.FC = () => {
  const stats = [
    { icon: FiUsers,     number: "500+", label: "Successful Placements", color: "text-blue-600",   bg: "bg-blue-100"   },
    { icon: FiBriefcase, number: "80+",  label: "Partner Companies",     color: "text-green-600",  bg: "bg-green-100"  },
    { icon: FiClock,     number: "30%",  label: "Faster Hiring Process", color: "text-purple-600", bg: "bg-purple-100" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex justify-center mb-4">
            <div className={`w-16 h-16 ${stat.bg} rounded-2xl flex items-center justify-center shadow-md`}>
              <stat.icon className={`text-2xl ${stat.color}`} />
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
          <div className="text-sm text-gray-500">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

// ─── Section ─────────────────────────────────────────────────────────────────

export const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
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
            Industries We Serve
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            Industry Solutions{" "}
            <span className="text-blue-600">Tailored for You</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            We believe exceptional professionals are the foundation of every
            successful business — recruiting across diverse sectors with
            precision, expertise, and deep industry knowledge.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {industriesData.map((industry, index) => (
            <IndustryCard key={industry.id} industry={industry} index={index} />
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Don&apos;t See Your Industry? We&apos;ve Got You Covered
          </h3>
          <p className="text-lg opacity-80 max-w-2xl mx-auto mb-8">
            Our recruitment expertise extends beyond these core sectors.
            Let&apos;s discuss your specific industry needs and talent requirements.
          </p>
          <Button
            href="/contact"
            size="lg"
            className="bg-white !text-gray-900 hover:bg-gray-100 shadow-md"
          >
            Discuss Your Needs
          </Button>
        </motion.div>

        {/* Stats */}
        {/* <IndustryOverallStats /> */}
        

      </Container>
    </section>
  );
};