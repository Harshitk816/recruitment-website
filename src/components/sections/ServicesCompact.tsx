"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import {
  FiMonitor, FiDollarSign, FiTrendingUp,
  FiShield, FiUsers, FiHeadphones,
} from "react-icons/fi";

// ─── Data ─────────────────────────────────────────────────────────────────────

const services = [
  {
    id: 1,
    name: "IT & Technology",
    description: "Pre-vetted developers, architects & tech leads placed in 48–72 hours.",
    icon: FiMonitor,
    href: "/services/it-recruitment-agency",
  },
  {
    id: 2,
    name: "Finance & Accounting",
    description: "Sharp finance minds for decisions that scale your business confidently.",
    icon: FiDollarSign,
    href: "/services/accounting-finance-recruitment-services",
  },
  {
    id: 3,
    name: "Sales & Marketing",
    description: "Revenue-drivers who understand modern pipelines and convert.",
    icon: FiTrendingUp,
    href: "/services/sales-marketing-recruitment-services",
  },
  {
    id: 4,
    name: "SaaS & Cybersecurity",
    description: "Passive specialists your competitors can't find on job boards.",
    icon: FiShield,
    href: "/services/saas-cybersecurity-recruitment-services",
  },
  {
    id: 5,
    name: "Manufacturing & Ops",
    description: "Plant managers to supervisors, assessed on real operational competency.",
    icon: FiUsers,
    href: "/services/manufacturing-operation-recruitment-services",
  },
  {
    id: 6,
    name: "BPO & Customer Support",
    description: "Support teams built around stability and a customer-first mindset.",
    icon: FiHeadphones,
    href: "/services/bpo-customer-support-recruitment-services",
  },
];

// ─── Arrow Icon ───────────────────────────────────────────────────────────────

const DiagonalArrow = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
);

// ─── Card ─────────────────────────────────────────────────────────────────────

interface ServiceCardProps {
  service: (typeof services)[0];
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const [hovered, setHovered] = React.useState(false);
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={service.href}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={[
          "group relative flex flex-col gap-3 p-5 rounded-2xl overflow-hidden",
          "bg-white border transition-all duration-200 cursor-pointer no-underline",
          hovered
            ? "border-transparent shadow-[0_8px_32px_rgba(37,99,235,0.14),0_2px_8px_rgba(37,99,235,0.08)] -translate-y-[3px]"
            : "border-gray-200 shadow-sm",
        ].join(" ")}
        style={{ textDecoration: "none" }}
      >
        {/* Glowing gradient border */}
        <span
          aria-hidden="true"
          className={[
            "pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-200",
            "bg-gradient-to-br from-blue-600 via-blue-400 to-blue-600",
            hovered ? "opacity-100" : "opacity-0",
          ].join(" ")}
          style={{
            padding: 1,
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />

        {/* Hover tint overlay */}
        <span
          aria-hidden="true"
          className={[
            "pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-200",
            "bg-gradient-to-br from-blue-600/[0.04] to-blue-400/[0.02]",
            hovered ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />

        {/* Ghost number */}
        <span
          aria-hidden="true"
          className={[
            "absolute top-3 right-3 text-[3rem] font-black leading-none select-none pointer-events-none transition-colors duration-200",
            hovered ? "text-blue-900/[0.3]" : "text-blue-100",
          ].join(" ")}
        >
          {num}
        </span>

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-3">
          {/* Icon */}
          <div
            className={[
              "w-[38px] h-[38px] rounded-[10px] flex items-center justify-center shrink-0 transition-all duration-200",
              hovered
                ? "bg-blue-600 shadow-[0_4px_14px_rgba(37,99,235,0.35)]"
                : "bg-blue-50",
            ].join(" ")}
          >
            <service.icon
              className={[
                "text-[18px] transition-colors duration-200",
                hovered ? "text-white" : "text-blue-600",
              ].join(" ")}
            />
          </div>

          {/* Title + Arrow */}
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-sm font-bold text-gray-900 tracking-tight leading-tight">
              {service.name}
            </h3>
            <DiagonalArrow
              className={[
                "w-[18px] h-[18px] shrink-0 transition-all duration-200",
                hovered
                  ? "text-blue-600 translate-x-[2px] -translate-y-[2px]"
                  : "text-gray-300",
              ].join(" ")}
            />
          </div>

          {/* Description */}
          <p className="text-[0.78rem] text-gray-500 leading-relaxed">
            {service.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

// ─── Section ──────────────────────────────────────────────────────────────────

export const ServicesCompact: React.FC = () => {
  return (
    <section id="services" className="py-12 md:py-16 bg-gray-50">
      <Container>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[11px] font-bold uppercase tracking-widest mb-3">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <rect x="2" y="7" width="20" height="14" rx="2" />
              <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
            </svg>
            What We Do
          </div>

          {/* Heading */}
          <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-extrabold text-gray-900 leading-tight tracking-tight max-w-lg">
            Recruitment built for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              your industry
            </span>
          </h2>

          {/* Subtext */}
          <p className="mt-2.5 text-[0.95rem] text-gray-500 max-w-md leading-relaxed">
            Deep domain knowledge. Role-specific screening. The right hire — not just an available one.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

      </Container>
    </section>
  );
};