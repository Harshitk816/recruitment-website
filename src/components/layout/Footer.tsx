"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Container } from "../ui/Container";
import { Logo } from "../ui/Logo";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiArrowRight,
  FiChevronDown,
} from "react-icons/fi";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const footerLinks = {
    services: [
      { label: "IT & Technology Recruitment", href: "/services/it-recruitment-agency" },
      { label: "Finance & Accounting Recruitment", href: "/services/accounting-finance-recruitment-services" },
      { label: "Sales & Marketing Recruitment", href: "/services/sales-marketing-recruitment-services" },
      { label: "SaaS & Cybersecurity Recruitment", href: "/services/saas-cybersecurity-recruitment-services" },
      { label: "Manufacturing & Operations Recruitment", href: "/services/manufacturing-operation-recruitment-services" },
      { label: "BPO & Customer Support Recruitment", href: "/services/bpo-customer-support-recruitment-services" },
    ],
    industries: [
      { label: "IT & Technology", href: "/industries" },
      { label: "Finance & Accounting", href: "/industries" },
      { label: "Sales & Marketing", href: "/industries" },
      { label: "View All Industries", href: "/industries" },
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Our Services", href: "/services" },
      { label: "Industries We Serve", href: "/industries" },
      { label: "Contact", href: "/contact" },
    ],
  };

  const NavSection = ({
    title,
    links,
    sectionKey,
  }: {
    title: string;
    links: { label: string; href: string }[];
    sectionKey: string;
  }) => {
    const isOpen = openSection === sectionKey;

    return (
      <div className="border-b border-white/10 lg:border-none">
        <button
          onClick={() => toggleSection(sectionKey)}
          className="w-full flex justify-between items-center py-4 lg:py-0 lg:mb-4 lg:cursor-default lg:pointer-events-none"
        >
          <h3 className="text-base font-semibold text-white">{title}</h3>
          <FiChevronDown
            className={`text-gray-400 transition-transform duration-300 lg:hidden ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <div className={`lg:block ${isOpen ? "block" : "hidden"}`}>
          <ul className="space-y-0 mb-4 lg:mb-0">
            {links.map((link, index) => (
              <li
                key={index}
                className="py-3 border-b border-white/10 last:border-b-0"
              >
                <Link
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors flex items-center group text-sm"
                >
                  <FiArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all flex-shrink-0" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">

      {/* ── Same glow blobs as JobSeekerForm ── */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* ── Same grid texture as JobSeekerForm ── */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <Container className="relative z-10">
        <div className="py-16 space-y-8">

          {/* ── ROW 1: Description ── */}
          <p className="text-gray-400 leading-relaxed text-sm w-full border-b border-white/10 pb-8">
            Connecting exceptional talent with innovative companies across India
            and beyond. We specialize in IT, Finance, Sales & Marketing
            recruitment with a proven track record of success.
          </p>

          {/* ── ROW 2: Logo+Contact LEFT | Nav Links RIGHT ── */}
          <div className="grid lg:grid-cols-6 gap-8 lg:gap-12">

            {/* LEFT */}
            <div className="lg:col-span-1">
              <Logo size="lg" variant="light" className="mb-6" />

              <div className="space-y-3 mb-6">
                <a
                  href="mailto:connect@workeraa.co.in"
                  className="flex items-center space-x-3 hover:text-blue-300 transition-colors"
                >
                  <FiMail className="text-blue-400 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">connect@workeraa.co.in</span>
                </a>
                <a
                  href="tel:+918700192565"
                  className="flex items-center space-x-3 hover:text-green-300 transition-colors"
                >
                  <FiPhone className="text-green-400 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">+91 8700192565</span>
                </a>
                <a
                  href="tel:+919599656760"
                  className="flex items-center space-x-3 hover:text-green-300 transition-colors"
                >
                  <FiPhone className="text-green-400 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">+91 9599656760</span>
                </a>
                <div className="flex items-center space-x-3">
                  <FiMapPin className="text-purple-400 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">Sector 23, Dwarka, Delhi</span>
                </div>
              </div>

              <motion.a
                href="https://www.linkedin.com/company/workeraa/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className="w-10 h-10 bg-white/10 border border-white/10 rounded-lg inline-flex items-center justify-center text-gray-400 transition-all hover:text-blue-400 hover:border-blue-500/30"
              >
                <FiLinkedin className="text-lg" />
              </motion.a>
            </div>

            {/* RIGHT: Nav */}
            <div className="lg:col-span-5 grid grid-cols-1 lg:grid-cols-4 lg:gap-8">
              <div className="lg:col-span-2">
                <NavSection
                  title="Services"
                  links={footerLinks.services}
                  sectionKey="services"
                />
              </div>
              <div className="lg:col-span-1">
                <NavSection
                  title="Industries"
                  links={footerLinks.industries}
                  sectionKey="industries"
                />
              </div>
              <div className="lg:col-span-1">
                <NavSection
                  title="Company"
                  links={footerLinks.company}
                  sectionKey="company"
                />
              </div>
            </div>

          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-500 text-sm">
              © {currentYear} Workeraa. All rights reserved.
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};