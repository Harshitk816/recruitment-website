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
      { label: "Executive Search", href: "/services" },
      { label: "Permanent Hiring", href: "/services" },
      { label: "Contract Staffing", href: "/services" },
      { label: "Flexible Solutions", href: "/services" },
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
      <div className="border-b border-gray-600/40 lg:border-none">
        {/* Header — clickable on mobile, static on desktop */}
        <button
          onClick={() => toggleSection(sectionKey)}
          className="w-full flex justify-between items-center py-4 lg:py-0 lg:mb-4 lg:cursor-default lg:pointer-events-none"
        >
          <h3 className="text-base font-semibold">{title}</h3>
          <FiChevronDown
            className={`text-gray-400 transition-transform duration-300 lg:hidden ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Desktop: always visible | Mobile: toggle with isOpen */}
        <div className={`lg:block ${isOpen ? "block" : "hidden"}`}>
          <ul className="space-y-0 mb-4 lg:mb-0">
            {links.map((link, index) => (
              <li
                key={index}
                className="py-3 border-b border-gray-600/40 last:border-b-0"
              >
                <Link
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors flex items-center group text-sm"
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
    <footer className="bg-gradient-to-br from-gray-700 to-gray-900 text-white">
      <Container>
        <div className="py-16 space-y-8">

          {/* ── ROW 1: Description full width ── */}
          <p className="text-gray-300 leading-relaxed text-sm w-full border-b border-gray-600/50 pb-8">
            Connecting exceptional talent with innovative companies across India
            and beyond. We specialize in IT, Finance, Sales & Marketing
            recruitment with a proven track record of success.
          </p>

          {/* ── ROW 2: Logo+Contact LEFT | Nav Links RIGHT ── */}
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">

            {/* LEFT: Logo + Contact + Social */}
            <div className="lg:col-span-2">
              <Logo size="lg" variant="light" className="mb-6" />

              <div className="space-y-3 mb-6">
                <a
                  href="mailto:connect@workeraa.co.in"
                  className="flex items-center space-x-3 hover:text-blue-200 transition-colors"
                >
                  <FiMail className="text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">connect@workeraa.co.in</span>
                </a>
                <a
                  href="tel:+918700192565"
                  className="flex items-center space-x-3 hover:text-green-200 transition-colors"
                >
                  <FiPhone className="text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">+91 8700192565</span>
                </a>
                <a
                  href="tel:+919599656760"
                  className="flex items-center space-x-3 hover:text-green-200 transition-colors"
                >
                  <FiPhone className="text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">+91 9599656760</span>
                </a>
                <div className="flex items-center space-x-3">
                  <FiMapPin className="text-purple-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">Gurugram, India</span>
                </div>
              </div>

              <motion.a
                href="https://www.linkedin.com/company/workeraa/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className="w-10 h-10 bg-gray-700 rounded-lg inline-flex items-center justify-center text-gray-300 transition-all hover:text-blue-400"
              >
                <FiLinkedin className="text-lg" />
              </motion.a>
            </div>

            {/* RIGHT: Nav Links — 3 cols */}
            <div className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
              <NavSection
                title="Services"
                links={footerLinks.services}
                sectionKey="services"
              />
              <NavSection
                title="Industries"
                links={footerLinks.industries}
                sectionKey="industries"
              />
              <NavSection
                title="Company"
                links={footerLinks.company}
                sectionKey="company"
              />
            </div>

          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Workeraa. All rights reserved.
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};