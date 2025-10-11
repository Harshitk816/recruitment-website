"use client";
import React from "react";
import Link from "next/link";
import { Container } from "../ui/Container";
import { Logo } from "../ui/Logo"; // Import the Logo component
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiTwitter,
  FiFacebook,
  FiInstagram,
  FiArrowRight,
} from "react-icons/fi";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

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

  return (
    <footer className="bg-gradient-to-br from-gray-700 to-gray-900 text-white">
      <Container>
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              {/* Logo */}
              <Logo size="lg" variant="light" className="mb-6" />

              <p className="text-gray-300 leading-relaxed mb-6">
                Connecting exceptional talent with innovative companies across
                India and beyond. We specialize in IT, Finance, Sales &
                Marketing recruitment with a proven track record of success.
              </p>

              {/* UPDATED Contact Info with Real Data */}
              <div className="space-y-3 mb-6">
                <a
                  href="mailto:connect@workeraa.co.in"
                  className="flex items-center space-x-3 hover:text-blue-200 transition-colors"
                >
                  <FiMail className="text-blue-400" />
                  <span className="text-gray-300">connect@workeraa.co.in</span>
                </a>
                <a
                  href="tel:+918700192565"
                  className="flex items-center space-x-3 hover:text-green-200 transition-colors"
                >
                  <FiPhone className="text-green-400" />
                  <span className="text-gray-300">+91 8700192565</span>
                </a>
                <a
                  href="tel:+919599656760"
                  className="flex items-center space-x-3 hover:text-green-200 transition-colors"
                >
                  <FiPhone className="text-green-400" />
                  <span className="text-gray-300">+91 9599656760</span>
                </a>
                <div className="flex items-center space-x-3">
                  <FiMapPin className="text-purple-400" />
                  <span className="text-gray-300">India</span>
                </div>
              </div>

              {/* UPDATED Social Links with Real LinkedIn */}
              <div className="flex space-x-4">
                <motion.a
                  href="https://www.linkedin.com/company/workeraa/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 transition-all hover:text-blue-400"
                >
                  <FiLinkedin className="text-lg" />
                </motion.a>
                {/* Other social links commented out for now since we only have LinkedIn */}

                {/* <motion.a
                  // href=""
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 transition-all hover:text-blue-300"
                >
                  <FiTwitter className="text-lg" />
                </motion.a>
                <motion.a
                  // href=""
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 transition-all hover:text-blue-500"
                >
                  <FiInstagram className="text-lg" />
                </motion.a> */}
                {/* 
                <motion.a
                  href=""
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 transition-all hover:text-pink-400"
                >
                  <FiFacebook className="text-lg" />
                </motion.a>
                */}
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors flex items-center group"
                    >
                      <FiArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3 mb-8">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors flex items-center group"
                    >
                      <FiArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Newsletter Signup */}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
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
